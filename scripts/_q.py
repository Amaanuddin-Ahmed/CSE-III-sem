import sys
sys.path.insert(0, 'scripts')
import build_bank_v2 as B

a = 'Give a recursion definition of the sequence {an}, n = 1,2,3,.... If a. an=6n b. an=2n+1 c. an = 10"'
b = 'Give a sequence n= a=6n b. ay=2nt1 C. a, 10" a. How positive integers less than L000'
ca, cb = B.clean_question(a), B.clean_question(b)
print(round(B.question_quality(ca), 1), round(B.question_quality(cb), 1))
print(repr(ca))
print(repr(cb))
