import json
import re
import os

def convert_array_to_human(match_str):
    # Check if this is a table (like in DM: \times_{12} & 1 & 5 ... or Vertex in G)
    if '\\times' in match_str or 'Vertex in' in match_str or '|c|' in match_str[:30]:
        lines = [l.strip() for l in match_str.split('\\\\')]
        cleaned_rows = []
        for l in lines:
            l = re.sub(r'\\begin\{array\}\{[^}]*\}', '', l)
            l = re.sub(r'\\end\{array\}', '', l)
            l = l.replace('\\hline', '').strip()
            if not l:
                continue
            cells = [c.strip() for c in l.split('&')]
            clean_cells = []
            for c in cells:
                c = re.sub(r'\\text\{([^}]*)\}', r'\1', c)
                c = re.sub(r'\\mathbf\{([^}]*)\}', r'\1', c)
                c = re.sub(r'\\times_\{(\d+)\}', r'×_\1', c)
                c = re.sub(r'\\times', r'×', c)
                c = re.sub(r'\\deg', r'deg', c)
                c = c.replace('$', '').strip()
                clean_cells.append(c)
            cleaned_rows.append(clean_cells)
        if cleaned_rows and len(cleaned_rows) >= 2:
            num_cols = max(len(r) for r in cleaned_rows)
            for r in cleaned_rows:
                while len(r) < num_cols:
                    r.append('')
            header = '| ' + ' | '.join(cleaned_rows[0]) + ' |'
            divider = '| ' + ' | '.join([':---:'] * num_cols) + ' |'
            body = ['| ' + ' | '.join(r) + ' |' for r in cleaned_rows[1:]]
            return '\n' + '\n'.join([header, divider] + body) + '\n'

    # Otherwise it's an arithmetic calculation block
    clean = re.sub(r'\\begin\{array\}[^\n]*\n?', '', match_str)
    clean = re.sub(r'\\end\{array\}', '', clean).strip()
    
    rows = []
    has_separator_before = set()
    raw_lines = [l.strip() for l in clean.split('\\\\')]
    row_idx = 0
    for rline in raw_lines:
        rline = rline.strip()
        if not rline:
            continue
        if '\\hline' in rline:
            has_separator_before.add(row_idx)
            rline = rline.replace('\\hline', '').strip()
            if not rline:
                continue
        
        cells = [c.strip() for c in rline.split('&')]
        cleaned_cells = []
        for cell in cells:
            c = re.sub(r'\\text\{([^}]*)\}', r'\1', cell)
            c = re.sub(r'\\mathbf\{([^}]*)\}', r'\1', c)
            c = re.sub(r'\\mathit\{([^}]*)\}', r'\1', c)
            c = re.sub(r'_\{?(\d+)\}?', r'_\1', c)
            c = c.replace('\\,', ' ').replace('\\quad', ' ').replace('$', '').strip()
            cleaned_cells.append(c)
        rows.append(cleaned_cells)
        row_idx += 1

    if not rows:
        return match_str

    max_cols = max(len(r) for r in rows)
    col_widths = [0] * max_cols
    for r in rows:
        for i, c in enumerate(r):
            col_widths[i] = max(col_widths[i], len(c))

    out_lines = []
    for idx, r in enumerate(rows):
        if idx in has_separator_before:
            div_len = sum(col_widths) + 3 * (max_cols - 1)
            out_lines.append('-' * max(div_len, 14))
        
        formatted_row = []
        for i, c in enumerate(r):
            w = col_widths[i]
            if i == 0:
                formatted_row.append(c.rjust(w))
            else:
                formatted_row.append(c.ljust(w))
        out_lines.append('   '.join(formatted_row))

    return '\n```text\n' + '\n'.join(out_lines) + '\n```\n'

def process_solution_text(text):
    if not isinstance(text, str):
        return text
    if '\\begin{array}' not in text:
        return text

    # Pattern for $$ \begin{array}... \end{array} $$
    def repl_block(m):
        full = m.group(0)
        array_match = re.search(r'\\begin\{array\}[\s\S]*?\\end\{array\}', full)
        if array_match:
            return convert_array_to_human(array_match.group(0))
        return full

    text = re.sub(r'\$\$\s*\\begin\{array\}[\s\S]*?\\end\{array\}\s*\$\$', repl_block, text)
    # Also handle without $$
    text = re.sub(r'\\begin\{array\}[\s\S]*?\\end\{array\}', repl_block, text)
    return text

def clean_file(filepath):
    print(f'Checking {filepath}...')
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)

    solutions = data.get('solutions', data)
    modified = 0

    for k, v in solutions.items():
        if isinstance(v, str):
            if '\\begin{array}' in v:
                solutions[k] = process_solution_text(v)
                modified += 1
        elif isinstance(v, dict):
            if 'answerMd' in v and '\\begin{array}' in v['answerMd']:
                v['answerMd'] = process_solution_text(v['answerMd'])
                modified += 1

    if modified > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=1, ensure_ascii=False)
        print(f'Successfully updated {modified} solutions in {filepath}!')
    else:
        print(f'No array patterns found in {filepath}.')

# Process all solutions in data/solutions
sol_dir = 'data/solutions'
for fname in os.listdir(sol_dir):
    if fname.endswith('.json') and not fname.startswith('.'):
        clean_file(os.path.join(sol_dir, fname))
