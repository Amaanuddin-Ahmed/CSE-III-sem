import json, collections

qs = json.load(open('.cache/question_bank_v2.json', encoding='utf-8'))
print('questions', len(qs), 'appearances', sum(q['frequency'] for q in qs))
print('freq dist', collections.Counter(q['frequency'] for q in qs).most_common())
print('by subject/part/marks')
print(collections.Counter((q['subjectId'], q['part'], q['marks']) for q in qs).most_common(20))

targets = [
    'What are steps Point Numbers',
    'Brief discussion about its operations',
    'Construct a Perform multiplication',
    'Draw the flow chart for booth multiplication',
    'Explain the working of DMA controller',
    'Staté any two properties',
    'Verify whether the given graphs are Isomorphic',
    'Test that whether the given set of formulas',
    'Use mathematical induction to show 14+24',
    'Find the mid of',
    'M co that these conditional',
    'Draw Hasse diagram for 112',
    'Let X= /1, 2, 3',
    'What is A WT',
    'Ana l yze the role',
    '1" and 2™ normal',
    'Find the probability that hand of five cards',
    'What is object modelling',
    'What is software risk? O. No.',
    'Convert the following numbers',
    'Analyze the involved in addition',
    'Discuss about the following Interconnection structures',
    'Explain the following Operators in SQL',
    'Show that (xy (P@)',
    'Name and Draw the following Graphs',
    'Draw K, and K4,4',
]
for t in targets:
    hits = [q for q in qs if t.lower() in q['question'].lower()]
    print('\n###', t)
    for q in hits:
        print(q['subjectId'], q['questionNumber'], q['paperName'], 'p', q['pageNumber'], 'sem', q['semester'], '|', q['question'])
