import json, re, sys, math, hashlib
from pathlib import Path
from collections import defaultdict
from difflib import SequenceMatcher
sys.path.insert(0, 'scripts')
import build_bank_v2 as b
import pymupdf

MANIFEST = json.loads(Path('.cache/drive_manifest.json').read_text(encoding='utf-8'))
PAPERS = json.loads(Path('.cache/papers_v2.json').read_text(encoding='utf-8'))


def toks(s):
    return re.findall(r'[a-z0-9]+', (s or '').lower())


def collapse(s):
    return re.sub(r'[^a-z0-9]', '', (s or '').lower())


def tokratio(a, b):
    ta, tb = toks(a), toks(b)
    if not ta or not tb:
        return 0.0
    return SequenceMatcher(None, ta, tb).ratio()


def is_subseq(small, big):
    it = iter(big)
    return all(x in it for x in small)


def source_valid(src, qs):
    keys = [(q['major'], q.get('sub') or '') for q in qs if q.get('sub')]
    if len(set(keys)) < 20:
        return False
    if src == 'p4':
        majors = {m for m, s in keys if 2 <= m <= 6}
        parta = {s for m, s in keys if m == 1}
        return len(majors) >= 3 or len(parta) >= 8
    return True


def quality2(text):
    s = b.question_quality(text)
    # penalise spacing / merged question artefacts
    if re.search(r'\b(?:[A-Za-z]{1,2}\s+){3,}[A-Za-z]{1,2}\b', text):
        s -= 4
    if re.search(r'\b(?:Q\.?\s*No|Stem|O\.\s*No|Marks)\b', text, re.I):
        s -= 12
    if len(re.findall(r'\?', text)) >= 3:
        s -= 3
    return s


def split_merged_text(text, candidates, key):
    """If text contains another later question, return (head, [(key,text)])."""
    # explicit printed numbering (e.g. 4.a) / stray (e.g. 5.a))
    m = re.search(r'(?<![\d.])([2-6])\s*[.,]?\s*([a-d])\s*[).]\s+', text)
    if m:
        later = (int(m.group(1)), m.group(2).lower())
        if later > key and later in candidates:
            head = text[:m.start()].strip()
            if len(toks(head)) >= 4:
                return head, [(later, text[m.end():].strip())]
    # suffix match against a later question from any source
    tt = toks(text)
    for k2 in sorted(candidates):
        if k2 <= key:
            continue
        other = candidates[k2]
        ot = toks(other)
        if len(ot) < 5 or len(ot) >= len(tt):
            continue
        # match on suffix of token list
        suffix = tt[-len(ot):]
        ratio = SequenceMatcher(None, ot, suffix).ratio()
        if ratio >= 0.82:
            # locate character position of that suffix approximately
            words = re.findall(r'\S+', text)
            # token count does not map to words; use last N words
            nwords = len(re.findall(r'\S+', other))
            head = ' '.join(words[:-nwords]).strip()
            if len(toks(head)) >= 4:
                return head, [(k2, text[len(text)-len(' '.join(words[-nwords:])):].strip())]
    return text, []


def repair_paper(p):
    item = next((i for i in MANIFEST if i.get('fileId') == p['driveFileId'] and i.get('fileName') == p['paperName']), None)
    if not item:
        return None
    doc = pymupdf.open(Path(item['localPath']))
    raw = {'text': [], 'ocr': [], 'p4': []}
    for pno in p['pages']:
        raw['text'].extend(b.parse_text_page(doc[pno - 1], pno))
        raw['ocr'].extend(b.parse_ocr_page(item, pno))
        t4 = b.psm4_text(item, pno)
        if t4:
            raw['p4'].extend(b.parse_psm4_page(t4, pno))
    doc.close()

    src = {}
    for name, qs in raw.items():
        prepared = []
        for q in qs:
            txt = b.clean_question(q['text'], q.get('marks'))
            if len(txt) < 5:
                continue
            q = dict(q)
            q['text'] = txt
            prepared.append(q)
        prepared = b.normalise_subparts(prepared)
        if source_valid(name, prepared):
            src[name] = prepared

    # candidate map: key -> list of (source, text)
    cand = defaultdict(list)
    for name, qs in src.items():
        for q in qs:
            key = (q['major'], q.get('sub') or '')
            if not key[1]:
                continue
            cand[key].append((name, q['text']))

    keys = set(cand)
    chosen = {}
    for key in sorted(keys):
        options = cand[key]
        best = None
        for name, text in options:
            text = b.clean_question(text)
            if not text:
                continue
            merged = False
            # does this candidate swallow a later question?
            for k2 in keys:
                if k2 <= key:
                    continue
                for n2, t2 in cand[k2]:
                    ot = toks(t2)
                    tt = toks(text)
                    if len(ot) >= 5 and len(ot) < len(tt):
                        if SequenceMatcher(None, ot, tt[-len(ot):]).ratio() >= 0.88:
                            merged = True
                            break
                if merged:
                    break
            score = quality2(text)
            if merged:
                score -= 30
            if name == 'ocr':
                score += 3
            elif name == 'p4':
                score += 2
            if best is None or score > best[0]:
                best = (score, name, text)
        if best:
            chosen[key] = (best[1], best[2])

    # split merged winners or replace with split text from another source
    final = {}
    for key, (name, text) in sorted(chosen.items()):
        all_other = {k: t for k, (n, t) in chosen.items() if k != key}
        head, parts = split_merged_text(text, all_other, key)
        if head != text and len(toks(head)) >= 4:
            final[key] = (name, head)
            for k2, t2 in parts:
                if k2 not in final or len(toks(t2)) > len(toks(final[k2][1])):
                    final[k2] = (name, t2)
        else:
            final[key] = (name, text)

    # fill any missing key from any source candidate
    for key in keys:
        if key in final:
            continue
        best = max(cand[key], key=lambda nt: quality2(nt[1]))
        final[key] = best

    out = []
    for key in sorted(final):
        name, text = final[key]
        text = b.clean_question(text)
        text = b.strip_diagram_noise(text)
        if len(text) < 5 or (len(toks(text)) < 2 and len(text) < 5):
            continue
        ch = b.chapter_for(*key)
        if not ch:
            continue
        out.append({
            'major': key[0], 'sub': key[1], 'text': text,
            'chapter': ch, 'source': name, 'page': p['pages'][0],
        })
    return out


def main():
    papers = []
    for p in PAPERS:
        qs = repair_paper(p)
        if not qs:
            continue
        p = dict(p)
        p['questions'] = qs
        papers.append(p)
        print(p['subject'], p['label'], len(qs), ' '.join(f"{q['major']}{q['sub']}" for q in qs))

    Path('.cache/prototype_papers.json').write_text(json.dumps(papers, ensure_ascii=False, indent=1), encoding='utf-8')


if __name__ == '__main__':
    main()
