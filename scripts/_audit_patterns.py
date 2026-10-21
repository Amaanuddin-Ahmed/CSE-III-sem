import json, re

qs = json.load(open('.cache/question_bank_v2.json', encoding='utf-8'))

patterns = {
    'embedded_qnum': re.compile(r'(?:\b\d\s*[.)]\s*[a-j]\s*[.)]|\(\s*\d\s*\.\s*[a-j]\s*\)|-\s*[a-j]\s*\.\s*[a-j]\s*\))', re.I),
    'or_marker': re.compile(r'\bOR\b', re.I),
    'trailing_digits': re.compile(r'(?:\s+\d{1,2}){2,}\s*$'),
    'spaced_letters': re.compile(r'\b(?:[A-Za-z]\s){4,}[A-Za-z]\b'),
    'broken_words': re.compile(r'\b(?:A WT|Distinguis h|betwe en|swings|Ana l yze|eve nt|li ste n ers|ha ndlin g|J ava|coetticient|Staté|Dřaw|rećeive|1book|mid of|1" and|2™|3"|4")\b', re.I),
}
for name, pat in patterns.items():
    hits = [q for q in qs if pat.search(q['question'])]
    print('\n###', name, len(hits))
    for q in hits[:40]:
        print(q['subjectId'], q['questionNumber'], q['paperName'], 'p', q['pageNumber'], '|', q['question'][:220])
