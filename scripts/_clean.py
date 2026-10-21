import sys
sys.path.insert(0,'scripts')
from build_bank_v2 import clean_question
for t in ['Outline Database System Applications in detail. 5','Explain Entity set with suitable example. 1','Explain about Software Myths? 1 2']:
    print(repr(clean_question(t,5)), repr(clean_question(t,1)))
