// scripts/gen-unit3-part1.js - Unit 3 solutions 1 to 18
module.exports = {
  "DM-A3-1037": {
    question: "Find the number of 5-letter words which contain three different consonants and two different vowels of the English alphabet.",
    answerMd: `### 5-Letter Words with 3 Distinct Consonants and 2 Distinct Vowels

#### Given:
The standard English alphabet contains 26 letters:
- Number of consonants = 21
- Number of vowels = 5 ($A, E, I, O, U$)

#### Step 1: Selection of Letters
1. Choose 3 distinct consonants from 21 consonants:
   $$\\binom{21}{3} = \\frac{21 \\times 20 \\times 19}{3 \\times 2 \\times 1} = 1,330 \\text{ ways}$$
2. Choose 2 distinct vowels from 5 vowels:
   $$\\binom{5}{2} = \\frac{5 \\times 4}{2 \\times 1} = 10 \\text{ ways}$$

Total combinations of 5 chosen letters:
$$1,330 \\times 10 = 13,300 \\text{ selections}$$

#### Step 2: Arrangement of the 5 Letters
Each chosen set of 5 distinct letters can be arranged in:
$$5! = 120 \\text{ ways}$$

#### Step 3: Total Number of Words
$$\\text{Total words} = \\binom{21}{3} \\times \\binom{5}{2} \\times 5! = 13,300 \\times 120 = 1,596,000$$

**Final Answer:**
$$\\therefore \\text{Total words formed} = \\mathbf{1,596,000}$$`
  },

  "DM-A3-1039": {
    question: "Find out how many 5-digit numbers greater than 30,000 can be formed from the digits 1,2,3,4 and 5.",
    answerMd: `### 5-Digit Numbers Greater than 30,000 from Digits 1, 2, 3, 4, 5

#### Given:
- Available digits: $\\{1, 2, 3, 4, 5\\}$ (5 distinct digits).
- We want 5-digit numbers $d_1 d_2 d_3 d_4 d_5 > 30,000$.

#### Analysis:
A 5-digit number formed using these digits will be strictly greater than $30,000$ if and only if its first (ten-thousands) digit $d_1$ is $\\ge 3$.
Therefore, $d_1 \\in \\{3, 4, 5\\}$ (3 choices).

---

#### Case A: Without Repetition of Digits (Standard Exam Interpretation):
- **First digit $d_1$:** Choose from $\\{3, 4, 5\\}$ $\\implies 3$ choices.
- **Remaining 4 digits ($d_2, d_3, d_4, d_5$):** Permute the remaining 4 digits:
  $$4! = 4 \\times 3 \\times 2 \\times 1 = 24 \\text{ ways}$$
$$\\text{Total numbers (no repetition)} = 3 \\times 24 = 72$$

---

#### Case B: With Repetition Allowed:
- **First digit $d_1$:** $\\{3, 4, 5\\} \\implies 3$ choices.
- **Each of the other 4 digits:** Any of the 5 digits $\\implies 5^4 = 625$ choices.
$$\\text{Total numbers (repetition allowed)} = 3 \\times 5^4 = 3 \\times 625 = 1,875$$

**Final Answer:**
$$\\therefore \\text{Without repetition: } \\mathbf{72} \\quad (\\text{With repetition: } \\mathbf{1,875})$$`
  },

  "DM-A3-1046": {
    question: "What is the expansion of (x + y)1?",
    answerMd: `### Expansion of $(x + y)^1$

Using the **Binomial Theorem**:
$$(x + y)^n = \\sum_{k=0}^n \\binom{n}{k} x^{n-k} y^k$$

For $n = 1$:
$$(x + y)^1 = \\binom{1}{0} x^{1-0} y^0 + \\binom{1}{1} x^{1-1} y^1$$

Since $\\binom{1}{0} = 1$ and $\\binom{1}{1} = 1$:
$$(x + y)^1 = 1 \\cdot x^1 \\cdot 1 + 1 \\cdot 1 \\cdot y^1 = x + y$$

**Final Answer:**
$$\\therefore (x + y)^1 = x + y$$`
  },

  "DM-A3-1048": {
    question: "How many ways are there to select five players from a 10-member",
    answerMd: `### Selecting 5 Players from a 10-Member Team

#### Given:
- Total team members $n = 10$.
- Number of players to be selected $r = 5$.
- In selecting a group of players, the order of selection does not matter; this is a **combination**.

#### Mathematical Formula:
$$C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n - r)!}$$

Substitute $n = 10$ and $r = 5$:
$$\\binom{10}{5} = \\frac{10!}{5!(10 - 5)!} = \\frac{10 \\times 9 \\times 8 \\times 7 \\times 6}{5 \\times 4 \\times 3 \\times 2 \\times 1}$$

#### Arithmetic Calculation:
$$\\binom{10}{5} = \\frac{30,240}{120} = 252$$

**Final Answer:**
$$\\therefore \\text{Total ways to select 5 players} = \\mathbf{252}$$`
  },

  "DM-A3-1051": {
    question: "What is recursive algorithm?",
    answerMd: `### Recursive Algorithm

A **recursive algorithm** is an algorithm that solves a problem by solving smaller instances of the exact same problem by calling itself directly or indirectly.

#### Essential Components of Any Recursive Algorithm:
1. **Base Case (Anchor / Stopping Condition):**
   One or more terminating conditions where the problem can be solved directly without further recursive calls. This prevents infinite recursion and stack overflow.
2. **Recursive Step (Inductive Step):**
   A set of rules that reduces the current problem into one or more strictly smaller sub-problems closer to the base case, followed by calling the function on the reduced input.

#### Standard Example (Factorial Function):
- Base Case: \`if n <= 1: return 1\`
- Recursive Step: \`return n * factorial(n - 1)\`

#### Advantages and Trade-offs:
- **Advantages:** Clean, elegant mathematical structure; mirrors inductive definitions and divide-and-conquer strategies (e.g. Merge Sort, Tree Traversals).
- **Disadvantages:** Function call overhead and memory consumption on the call stack ($O(n)$ space unless tail-call optimized).`
  },

  "DM-A3-1052": {
    question: "Define Lattice.",
    answerMd: `### Definition of a Lattice

A partially ordered set (poset) $(L, \\le)$ is called a **lattice** if every pair of elements $a, b \\in L$ has:
1. A unique **Least Upper Bound (LUB)** or **join** (supremum), denoted by:
   $$a \\vee b = \\sup\\{a, b\\}$$
2. A unique **Greatest Lower Bound (GLB)** or **meet** (infimum), denoted by:
   $$a \\wedge b = \\inf\\{a, b\\}$$

#### Algebraic Definition:
Alternatively, a lattice can be defined as an algebraic structure $(L, \\vee, \\wedge)$ with two binary operations satisfying the following four axiomatic laws for all $a, b, c \\in L$:
1. **Idempotent Law:** $a \\vee a = a$ and $a \\wedge a = a$.
2. **Commutative Law:** $a \\vee b = b \\vee a$ and $a \\wedge b = b \\wedge a$.
3. **Associative Law:** $(a \\vee b) \\vee c = a \\vee (b \\vee c)$ and $(a \\wedge b) \\wedge c = a \\wedge (b \\wedge c)$.
4. **Absorption Law:** $a \\vee (a \\wedge b) = a$ and $a \\wedge (a \\vee b) = a$.

#### Example:
The power set of any set $S$, $(\\mathcal{P}(S), \\subseteq)$, is a lattice where join is union ($A \\vee B = A \\cup B$) and meet is intersection ($A \\wedge B = A \\cap B$).`
  },

  "DM-A3-1054": {
    question: "What is the co-efficient of xy in (x+y)^5?",
    answerMd: `### Coefficient of $xy$ in $(x + y)^5$

#### Binomial Expansion Formula:
$$(x + y)^5 = \\sum_{k=0}^5 \\binom{5}{k} x^{5-k} y^k$$

In the expansion of $(x + y)^5$, every term is homogeneous of degree $n = 5$:
- For $k = 0$: $\\binom{5}{0} x^5 = x^5$ (degree 5)
- For $k = 1$: $\\binom{5}{1} x^4 y = 5x^4 y$ (degree 5)
- For $k = 2$: $\\binom{5}{2} x^3 y^2 = 10x^3 y^2$ (degree 5)
- For $k = 3$: $\\binom{5}{3} x^2 y^3 = 10x^2 y^3$ (degree 5)
- For $k = 4$: $\\binom{5}{4} x y^4 = 5x y^4$ (degree 5)
- For $k = 5$: $\\binom{5}{5} y^5 = y^5$ (degree 5)

#### Analysis:
The term $x y = x^1 y^1$ has total degree $1 + 1 = 2$.
Since all terms in $(x + y)^5$ have degree 5, **no term of degree 2 ($x y$) exists** in the expansion.

Therefore, the coefficient of $x y$ is **0**.

*(Note: If the question meant $x y^4$, the coefficient is $\\binom{5}{4} = 5$; if $x^4 y$, the coefficient is $\\binom{5}{1} = 5$).*

**Final Answer:**
$$\\therefore \\text{Coefficient of } xy \\text{ in } (x + y)^5 = \\mathbf{0}$$`
  },

  "DM-A3-1055": {
    question: "Find the number of permutations of letters of \"Mathematics\".",
    answerMd: `### Permutations of the Letters in "MATHEMATICS"

#### Step 1: Count Letter Frequencies
The word **MATHEMATICS** contains $n = 11$ total letters:
- $\\text{M} \\to 2$
- $\\text{A} \\to 2$
- $\\text{T} \\to 2$
- $\\text{H} \\to 1$
- $\\text{E} \\to 1$
- $\\text{I} \\to 1$
- $\\text{C} \\to 1$
- $\\text{S} \\to 1$

#### Step 2: Formula for Permutation of Multiset
$$\\text{Total Permutations} = \\frac{n!}{n_M! \\, n_A! \\, n_T! \\, n_H! \\, n_E! \\, n_I! \\, n_C! \\, n_S!}$$
$$\\text{Total Permutations} = \\frac{11!}{2! \\, 2! \\, 2! \\, 1! \\, 1! \\, 1! \\, 1! \\, 1!}$$

#### Step 3: Calculation
- $11! = 39,916,800$
- $2! \\times 2! \\times 2! = 2 \\times 2 \\times 2 = 8$
$$\\text{Total Permutations} = \\frac{39,916,800}{8} = 4,989,600$$

**Final Answer:**
$$\\therefore \\text{Total permutations} = \\mathbf{4,989,600}$$`
  },

  "DM-A3-1056": {
    question: "Find the middle term of (x+(1/x))20.",
    answerMd: `### Finding the Middle Term of $\\left(x + \\frac{1}{x}\\right)^{20}$

#### Given:
$$(a + b)^n = \\left(x + \\frac{1}{x}\\right)^{20}$$
- Here $a = x$, $b = \\frac{1}{x}$, and $n = 20$.
- Total number of terms in the expansion = $n + 1 = 20 + 1 = 21$ (an odd number of terms).

#### Step 1: Identify the Middle Term Index
When $n$ is even, there is exactly **one middle term**, which is the $\\left(\\frac{n}{2} + 1\\right)$-th term:
$$\\text{Middle Term} = T_{\\frac{20}{2} + 1} = T_{10 + 1} = T_{11}$$

#### Step 2: Evaluate Using General Term Formula
The general term is given by:
$$T_{r+1} = \\binom{n}{r} a^{n-r} b^r$$
For $r = 10$:
$$T_{11} = \\binom{20}{10} (x)^{20 - 10} \\left(\\frac{1}{x}\\right)^{10}$$
$$T_{11} = \\binom{20}{10} x^{10} \\cdot \\frac{1}{x^{10}} = \\binom{20}{10}$$

Notice that $x^{10}$ and $\\frac{1}{x^{10}}$ cancel out completely; the middle term is **independent of $x$ (a constant term)**.

#### Step 3: Calculate the Coefficient $\\binom{20}{10}$
$$\\binom{20}{10} = \\frac{20!}{10! \\, 10!} = 184,756$$

**Final Answer:**
$$\\therefore \\text{Middle term } T_{11} = \\binom{20}{10} = \\mathbf{184,756}$$`
  },

  "DM-A3-1057": {
    question: "How many ways are there to distribute 12 different books among 15. people if no person receive more than 1 book?",
    answerMd: `### Distributing 12 Distinct Books Among 15 People (At Most 1 Book per Person)

#### Given:
- Number of distinct books $k = 12$.
- Number of people $n = 15$.
- Condition: Each person can receive at most 1 book.

#### Analysis:
This problem is equivalent to choosing 12 distinct people out of 15, and assigning each of the 12 distinct books to a unique chosen person:
- Book 1 can be given to any of 15 people (15 choices).
- Book 2 can be given to any of remaining 14 people (14 choices).
- $\\dots$
- Book 12 can be given to any of remaining $15 - 12 + 1 = 4$ people (4 choices).

#### Formula:
$$P(15, 12) = \\frac{15!}{(15 - 12)!} = \\frac{15!}{3!}$$

Alternatively:
$$\\binom{15}{12} \\times 12! = \\binom{15}{3} \\times 12!$$

#### Arithmetic:
$$\\frac{15!}{3!} = \\frac{1,307,674,368,000}{6} = 217,945,728,000$$

**Final Answer:**
$$\\therefore \\text{Total ways} = P(15, 12) = \\frac{15!}{3!} = \\mathbf{217,945,728,000}$$`
  },

  "DM-A3-1058": {
    question: "How many 5 letter words are there where the first and last letters are vowels? (Repetition is allowed)",
    answerMd: `### 5-Letter Words Starting and Ending with Vowels (Repetition Allowed)

Let the 5-letter word be represented by 5 slots:
$$\\_ \\quad \\_ \\quad \\_ \\quad \\_ \\quad \\_$$
$$\\text{Slot 1} \\quad \\text{Slot 2} \\quad \\text{Slot 3} \\quad \\text{Slot 4} \\quad \\text{Slot 5}$$

#### Analysis for Each Slot:
- **Slot 1 (First letter):** Must be a vowel. There are 5 vowels in the English alphabet ($\\{A, E, I, O, U\\}$) $\\implies$ **5 choices**.
- **Slot 2 (Second letter):** Can be any letter from the 26-letter alphabet $\\implies$ **26 choices**.
- **Slot 3 (Third letter):** Can be any letter from the 26-letter alphabet $\\implies$ **26 choices**.
- **Slot 4 (Fourth letter):** Can be any letter from the 26-letter alphabet $\\implies$ **26 choices**.
- **Slot 5 (Fifth letter):** Must be a vowel $\\implies$ **5 choices**.

#### Total Words:
Using the fundamental multiplication principle of counting:
$$N = 5 \\times 26 \\times 26 \\times 26 \\times 5 = (5 \\times 5) \\times 26^3 = 25 \\times 17,576$$
$$N = 439,400$$

**Final Answer:**
$$\\therefore \\text{Total words} = \\mathbf{439,400}$$`
  },

  "DM-A3-1059": {
    question: "In how many ways can we draw a heart or a king from a pack of cards?",
    answerMd: `### Number of Ways to Draw a Heart or a King

#### Given:
Standard deck of 52 playing cards:
- Let $H$ be the set of Heart cards: $|H| = 13$
- Let $K$ be the set of King cards: $|K| = 4$
- The King of Hearts belongs to both sets: $|H \\cap K| = 1$

#### Applying the Principle of Inclusion-Exclusion for Counting:
The number of ways to draw a card that is either a Heart or a King is given by:
$$|H \\cup K| = |H| + |K| - |H \\cap K|$$
$$|H \\cup K| = 13 + 4 - 1 = 16$$

*(Probability = $\\frac{16}{52} = \\frac{4}{13}$).*

**Final Answer:**
$$\\therefore \\text{Number of ways to draw a heart or a king} = \\mathbf{16}$$`
  },

  "DM-A3-1061": {
    question: "How many different 3 digit numbers can be formed with 3 four's, 4 two's and 2 three's.",
    answerMd: `### Forming 3-Digit Numbers from $\{4, 4, 4, 2, 2, 2, 2, 3, 3\}$

#### Given Available Digits:
- Three 4's: $\\{4, 4, 4\\}$
- Four 2's: $\\{2, 2, 2, 2\\}$
- Two 3's: $\\{3, 3\\}$
Available distinct digit types: $\\{4, 2, 3\\}$ (none of which is 0).

We want to form a 3-digit number. We classify all possible selections of 3 digits by their pattern of repetition:

---

#### Case 1: All 3 digits are identical (Pattern $AAA$)
Can we choose 3 identical digits?
- Three 4's: $444$ (Valid, we have three 4's)
- Three 2's: $222$ (Valid, we have four 2's)
- Three 3's: Not possible (we only have two 3's)
Number of 3-digit numbers = **2** ($444, 222$).

---

#### Case 2: Exactly 2 digits are identical and 1 is different (Pattern $AAB$)
- Choose the repeating digit $A$: 3 choices ($\\{4, 2, 3\\}$).
- Choose the non-repeating digit $B$: 2 remaining choices.
- Number of selections = $3 \\times 2 = 6$ selections.
For each selection $\\{A, A, B\\}$, the number of arrangements is:
$$\\frac{3!}{2!} = 3 \\text{ ways}$$
Total numbers for Case 2 = $6 \\times 3 = \\mathbf{18}$.

---

#### Case 3: All 3 digits are distinct (Pattern $ABC$)
The digits must be $\\{4, 2, 3\\}$ (1 selection).
Number of arrangements:
$$3! = 6 \\text{ ways}$$
Total numbers for Case 3 = $\\mathbf{6}$.

---

#### Total Number of 3-Digit Numbers:
$$\\text{Total} = 2 + 18 + 6 = 26$$

**Final Answer:**
$$\\therefore \\text{Total distinct 3-digit numbers} = \\mathbf{26}$$`
  },

  "DM-B3-1065": {
    question: "State and prove Binomial theorem. Expand (5a+7b) using binomial theorem.",
    answerMd: `### State and Prove Binomial Theorem & Expand $(5a + 7b)^4$

#### Statement of Binomial Theorem:
For any real numbers $x, y$ and any positive integer $n$:
$$(x + y)^n = \\sum_{k=0}^n \\binom{n}{k} x^{n-k} y^k = \\binom{n}{0} x^n + \\binom{n}{1} x^{n-1} y + \\dots + \\binom{n}{n} y^n$$

---

#### Proof by Mathematical Induction:
- **Base Step ($n = 1$):**
  $$(x + y)^1 = \\binom{1}{0} x^1 y^0 + \\binom{1}{1} x^0 y^1 = x + y \\quad \\text{(True)}$$

- **Inductive Hypothesis:**
  Assume the theorem holds for $n = m$:
  $$(x + y)^m = \\sum_{k=0}^m \\binom{m}{k} x^{m-k} y^k$$

- **Inductive Step ($n = m + 1$):**
  $$(x + y)^{m+1} = (x + y)(x + y)^m = (x + y) \\sum_{k=0}^m \\binom{m}{k} x^{m-k} y^k$$
  $$= \\sum_{k=0}^m \\binom{m}{k} x^{m-k+1} y^k + \\sum_{k=0}^m \\binom{m}{k} x^{m-k} y^{k+1}$$

  Using Pascal's identity $\\binom{m}{k} + \\binom{m}{k-1} = \\binom{m+1}{k}$, the coefficients combine to give:
  $$(x + y)^{m+1} = \\sum_{k=0}^{m+1} \\binom{m+1}{k} x^{m+1-k} y^k$$
  Hence proved by induction.

---

#### Expand $(5a + 7b)^4$:
$$(5a + 7b)^4 = \\binom{4}{0} (5a)^4 + \\binom{4}{1} (5a)^3 (7b) + \\binom{4}{2} (5a)^2 (7b)^2 + \\binom{4}{3} (5a) (7b)^3 + \\binom{4}{4} (7b)^4$$

Compute terms:
- Term 1: $1 \\times 625 a^4 = 625 a^4$
- Term 2: $4 \\times 125 a^3 \\times 7b = 3,500 a^3 b$
- Term 3: $6 \\times 25 a^2 \\times 49 b^2 = 7,350 a^2 b^2$
- Term 4: $4 \\times 5a \\times 343 b^3 = 6,860 a b^3$
- Term 5: $1 \\times 2401 b^4 = 2,401 b^4$

$$\\therefore (5a + 7b)^4 = 625 a^4 + 3500 a^3 b + 7350 a^2 b^2 + 6860 a b^3 + 2401 b^4$$`
  },

  "DM-B3-1066": {
    question: "In how many ways can a committee of 5 ladies and 4 gents be chosen from 9 ladies and 15 gents, if gent A refuses to take part if lady B is on the committee?",
    answerMd: `### Committee Selection with Mutual Exclusion Constraint

#### Given:
- Total ladies available = 9 (including lady $B$).
- Total gents available = 15 (including gent $A$).
- Committee required: 5 ladies and 4 gents.
- **Constraint:** Gent $A$ refuses to take part if lady $B$ is on the committee (i.e. Gent $A$ and Lady $B$ **cannot both be on the committee together**).

---

#### Step 1: Total Unrestricted Committees
$$\\text{Total} = \\binom{9}{5} \\times \\binom{15}{4}$$
- $\\binom{9}{5} = \\frac{9 \\times 8 \\times 7 \\times 6}{4 \\times 3 \\times 2 \\times 1} = 126$
- $\\binom{15}{4} = \\frac{15 \\times 14 \\times 13 \\times 12}{4 \\times 3 \\times 2 \\times 1} = 1,365$
$$\\text{Total} = 126 \\times 1,365 = 171,990$$

---

#### Step 2: Unfavorable Committees (Both Gent $A$ and Lady $B$ are Selected)
If both $A$ and $B$ are included:
- Lady $B$ is already in the committee $\\implies$ choose remaining $5 - 1 = 4$ ladies from remaining $9 - 1 = 8$ ladies:
  $$\\binom{8}{4} = \\frac{8 \\times 7 \\times 6 \\times 5}{4 \\times 3 \\times 2 \\times 1} = 70$$
- Gent $A$ is already in the committee $\\implies$ choose remaining $4 - 1 = 3$ gents from remaining $15 - 1 = 14$ gents:
  $$\\binom{14}{3} = \\frac{14 \\times 13 \\times 12}{3 \\times 2 \\times 1} = 364$$

Total unfavorable committees:
$$N_{\\text{unfavorable}} = 70 \\times 364 = 25,480$$

---

#### Step 3: Favorable Committees
$$N_{\\text{favorable}} = \\text{Total} - N_{\\text{unfavorable}} = 171,990 - 25,480 = 146,510$$

**Final Answer:**
$$\\therefore \\text{Total valid ways} = \\mathbf{146,510}$$`
  },

  "DM-B3-1067": {
    question: "Find the coefficient of x²y² in the expansion of (2x-3y)?",
    answerMd: `### Finding the Coefficient of $x^2 y^2$ in $(2x - 3y)^4$

#### Given:
$$(2x - 3y)^4$$
*(Note: Since the power of $x$ is 2 and power of $y$ is 2, the total degree is $2 + 2 = 4$, so the expansion exponent is $n = 4$).*

#### General Term Formula:
The general $(r+1)$-th term in $(a + b)^n$ is:
$$T_{r+1} = \\binom{n}{r} a^{n-r} b^r$$
Here $a = 2x$, $b = -3y$, and $n = 4$.

To find the term with $x^2 y^2$, set $n - r = 2 \\implies 4 - r = 2 \\implies r = 2$.

#### Step-by-Step Evaluation:
$$T_3 = \\binom{4}{2} (2x)^{4-2} (-3y)^2$$
$$T_3 = \\binom{4}{2} (2x)^2 (-3y)^2$$
$$T_3 = 6 \\cdot (4x^2) \\cdot (9y^2)$$
$$T_3 = 6 \\times 4 \\times 9 \\times x^2 y^2 = 216 x^2 y^2$$

**Final Answer:**
$$\\therefore \\text{Coefficient of } x^2 y^2 = \\mathbf{216}$$`
  },

  "DM-B3-1068": {
    question: "A committee of 5 people is to be formed from a group of 4 men and 7 women. How many possible committee can be formed if at least 3 women are on the committee?",
    answerMd: `### Committee Selection with "At Least 3 Women"

#### Given:
- Number of men = 4
- Number of women = 7
- Total committee size = 5
- Condition: The committee must contain **at least 3 women**.

The possible compositions are:
1. 3 Women and 2 Men
2. 4 Women and 1 Man
3. 5 Women and 0 Men

---

#### Case 1: 3 Women and 2 Men
- Choose 3 women from 7: $\\binom{7}{3} = \\frac{7 \\times 6 \\times 5}{6} = 35$
- Choose 2 men from 4: $\\binom{4}{2} = \\frac{4 \\times 3}{2} = 6$
$$\\text{Ways}_1 = 35 \\times 6 = 210$$

---

#### Case 2: 4 Women and 1 Man
- Choose 4 women from 7: $\\binom{7}{4} = \\binom{7}{3} = 35$
- Choose 1 man from 4: $\\binom{4}{1} = 4$
$$\\text{Ways}_2 = 35 \\times 4 = 140$$

---

#### Case 3: 5 Women and 0 Men
- Choose 5 women from 7: $\\binom{7}{5} = \\binom{7}{2} = \\frac{7 \\times 6}{2} = 21$
- Choose 0 men from 4: $\\binom{4}{0} = 1$
$$\\text{Ways}_3 = 21 \\times 1 = 21$$

---

#### Total Committees:
$$\\text{Total} = \\text{Ways}_1 + \\text{Ways}_2 + \\text{Ways}_3 = 210 + 140 + 21 = 371$$

**Final Answer:**
$$\\therefore \\text{Total possible committees} = \\mathbf{371}$$`
  },

  "DM-B3-1069": {
    question: "State the pigeon hole principle? If there are 5 boxes to keep books find the minimum number of books required to be sure that there are two books in at least one box?",
    answerMd: `### State Pigeonhole Principle and Minimum Books Problem

#### 1. Statement of the Pigeonhole Principle:
If $n$ items (pigeons) are put into $k$ containers (pigeonholes) and $n > k$, then at least one container must contain **more than one item** ($\ge 2$ items).

More generally (Generalized Pigeonhole Principle):
If $N$ objects are placed into $k$ boxes, then at least one box contains at least:
$$\\left\\lceil \\frac{N}{k} \\right\\rceil \\text{ objects}$$

---

#### 2. Problem: Minimum Books for at Least 2 in One Box
- Number of boxes (pigeonholes) $k = 5$.
- Desired condition: At least one box must contain at least 2 books.

**Worst-Case Analysis:**
In the worst possible distribution, we place the maximum number of books such that **no box** has 2 books.
That means every box contains at most $2 - 1 = 1$ book.
$$\\text{Maximum books without 2 in any box} = 5 \\times 1 = 5 \\text{ books}$$

By the Pigeonhole Principle, adding just **1 more book** ($5 + 1 = 6$) ensures that by necessity, at least one of the 5 boxes must receive its 2nd book.

$$\\text{Formula: } N = k(m - 1) + 1 = 5(2 - 1) + 1 = 5(1) + 1 = 6$$

**Final Answer:**
$$\\therefore \\text{Minimum number of books required} = \\mathbf{6}$$`
  }
};
