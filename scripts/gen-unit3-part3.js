// scripts/gen-unit3-part3.js - Unit 3 solutions 36 to 52
module.exports = {
  "DM-B3-1090": {
    question: "Prove that the set of even integers forms a group under addition.",
    answerMd: `### Prove that the Set of Even Integers Forms a Group Under Addition

Let $2\\mathbb{Z} = \\{2k \\mid k \\in \\mathbb{Z}\\} = \\{\\dots, -4, -2, 0, 2, 4, \\dots\\}$ denote the set of even integers.
We verify the four group axioms under the binary operation of ordinary addition ($+$):

---

#### 1. Closure:
Let $x, y \\in 2\\mathbb{Z}$. Then $x = 2a$ and $y = 2b$ for some integers $a, b \\in \\mathbb{Z}$.
$$x + y = 2a + 2b = 2(a + b)$$
Since $a + b \\in \\mathbb{Z}$ by closure of integers under addition, $2(a + b) \\in 2\\mathbb{Z}$.
$$\\therefore 2\\mathbb{Z} \\text{ is closed under addition.}$$

---

#### 2. Associativity:
Addition of integers is universally associative:
$$\\forall x, y, z \\in 2\\mathbb{Z} \\implies (x + y) + z = x + (y + z)$$
Thus, associativity is inherited directly from $(\\mathbb{Z}, +)$.

---

#### 3. Identity Element:
Notice that $0 = 2(0) \\in 2\\mathbb{Z}$.
For any $x = 2a \\in 2\\mathbb{Z}$:
$$x + 0 = 2a + 0 = 2a = x \\quad \\text{and} \\quad 0 + x = 0 + 2a = 2a = x$$
Thus, $e = 0$ is the unique additive identity element in $2\\mathbb{Z}$.

---

#### 4. Inverse Element:
For any $x = 2a \\in 2\\mathbb{Z}$, its negative is $-x = -2a = 2(-a)$.
Since $-a \\in \\mathbb{Z}$, $-x \\in 2\\mathbb{Z}$.
$$x + (-x) = 2a + (-2a) = 0 = e$$
Each element possesses an additive inverse in $2\\mathbb{Z}$.

---

#### Conclusion:
Since $(2\\mathbb{Z}, +)$ satisfies closure, associativity, identity, and inverses (and furthermore is commutative $x + y = y + x$), **$(2\\mathbb{Z}, +)$ is an Abelian Group** (in fact, a subgroup of $(\\mathbb{Z}, +)$).`
  },

  "DM-B3-1091": {
    question: "Prove that the set{1,5,7,11} is a finite abelian group of order 4 under multiplication modulo 12 as composition.",
    answerMd: `### Prove $G = \\{1, 5, 7, 11\\}$ is an Abelian Group Under $\\times_{12}$

#### Given:
Set $G = \\{1, 5, 7, 11\\}$ with operation $\\times_{12}$ (multiplication modulo 12).
Notice that these are precisely the positive integers less than 12 coprime to 12 ($U(12)$).

---

#### Step 1: Construct the Cayley Composition Table

$$\\begin{array}{c|cccc}
\\times_{12} & 1 & 5 & 7 & 11 \\\\
\\hline
1 & 1 & 5 & 7 & 11 \\\\
5 & 5 & 1 & 11 & 7 \\\\
7 & 7 & 11 & 1 & 5 \\\\
11 & 11 & 7 & 5 & 1 \\\\
\\end{array}$$

*Arithmetic checks:*
- $5 \\times_{12} 5 = 25 \\equiv 1 \\pmod{12}$
- $5 \\times_{12} 7 = 35 \\equiv 11 \\pmod{12}$
- $5 \\times_{12} 11 = 55 \\equiv 7 \\pmod{12}$
- $7 \\times_{12} 7 = 49 \\equiv 1 \\pmod{12}$
- $7 \\times_{12} 11 = 77 \\equiv 5 \\pmod{12}$
- $11 \\times_{12} 11 = 121 \\equiv 1 \\pmod{12}$

---

#### Step 2: Verification of Group Axioms from Table
1. **Closure:** All entries in the table belong to $G = \\{1, 5, 7, 11\\}$. Hence, $G$ is closed under $\\times_{12}$.
2. **Associativity:** Multiplication of integers modulo $n$ is known to be associative.
3. **Identity Element:** The row and column for $1$ are identical to the header row and column.
   $$a \\times_{12} 1 = 1 \\times_{12} a = a \\quad \\forall a \\in G$$
   Thus, $e = 1$ is the identity element.
4. **Inverse Element:**
   - $1 \\times_{12} 1 = 1 \\implies 1^{-1} = 1$
   - $5 \\times_{12} 5 = 1 \\implies 5^{-1} = 5$
   - $7 \\times_{12} 7 = 1 \\implies 7^{-1} = 7$
   - $11 \\times_{12} 11 = 1 \\implies 11^{-1} = 11$
   Every element is its own inverse ($a^2 = e$).
5. **Commutativity:** The table is symmetric about the main diagonal ($a \\times_{12} b = b \\times_{12} a$).

#### Conclusion:
$(G, \\times_{12})$ is a **finite abelian group of order 4** (isomorphic to the Klein 4-group $V_4$).`
  },

  "DM-B3-1092": {
    question: "On the set Q of all rational numbers, the operation * is defined by a*b=a+b-ab. Verify that under this operation, Q forms a group or not?",
    answerMd: `### Verification of Group Axioms on $(\\mathbb{Q}, *)$ with $a * b = a + b - ab$

#### Given:
Set $\\mathbb{Q}$ of rational numbers with binary operation:
$$a * b = a + b - ab$$

---

#### 1. Closure:
For any $a, b \\in \\mathbb{Q}$, $a + b \\in \\mathbb{Q}$ and $ab \\in \\mathbb{Q}$, so $a + b - ab \\in \\mathbb{Q}$.
$\\mathbb{Q}$ is closed under $*$.

---

#### 2. Associativity:
For any $a, b, c \\in \\mathbb{Q}$:
- $(a * b) * c = (a + b - ab) * c = (a + b - ab) + c - (a + b - ab)c$
  $$= a + b + c - ab - ac - bc + abc$$
- $a * (b * c) = a * (b + c - bc) = a + (b + c - bc) - a(b + c - bc)$
  $$= a + b + c - bc - ab - ac + abc$$
Both expressions are identical. Thus, $*$ is associative.

---

#### 3. Identity Element:
We seek $e \\in \\mathbb{Q}$ such that $a * e = a$:
$$a + e - ae = a \\implies e(1 - a) = 0$$
For this to hold for all $a \\in \\mathbb{Q}$, we must have $e = 0 \\in \\mathbb{Q}$.
Check: $a * 0 = a + 0 - 0 = a$ and $0 * a = a$.
Thus, $e = 0$ is the unique identity element.

---

#### 4. Inverse Element (Critical Test):
For any $a \\in \\mathbb{Q}$, let $b$ be its inverse such that $a * b = e = 0$:
$$a + b - ab = 0$$
$$b(1 - a) = -a \\implies b = \\frac{-a}{1 - a} = \\frac{a}{a - 1}$$

Notice the denominator:
- If $a = 1 \\in \\mathbb{Q}$:
  $$1 * b = 1 + b - 1(b) = 1 \\ne 0 \\quad \\text{for any } b \\in \\mathbb{Q}$$
  The element $a = 1$ has **NO inverse** in $\\mathbb{Q}$!

---

#### Conclusion:
Since the element $1 \\in \\mathbb{Q}$ does not possess an inverse, **$(\\mathbb{Q}, *)$ does NOT form a group**.
*(However, $(\\mathbb{Q} \\setminus \\{1\\}, *)$ does form an abelian group).*`
  },

  "DM-B3-1093": {
    question: "Let G = {1, -1, i, -i}be a multiplicative group. Find the order of every element.",
    answerMd: `### Order of Every Element in the Multiplicative Group $G = \\{1, -1, i, -i\\}$

#### Given:
Group $G = \\{1, -1, i, -i\\}$ under ordinary complex multiplication (where $i = \\sqrt{-1}, \\, i^2 = -1$).
Identity element of the group is $e = 1$.

#### Definition of Order of an Element:
The **order of an element** $a \\in G$, denoted $o(a)$ or $|a|$, is the smallest positive integer $n$ such that:
$$a^n = e = 1$$

---

#### Step-by-Step Order Calculation for Each Element:

1. **For element $a = 1$:**
   $$1^1 = 1 = e$$
   $$\\therefore o(1) = 1$$

2. **For element $a = -1$:**
   - $(-1)^1 = -1 \\ne 1$
   - $(-1)^2 = 1 = e$
   $$\\therefore o(-1) = 2$$

3. **For element $a = i$:**
   - $i^1 = i \\ne 1$
   - $i^2 = -1 \\ne 1$
   - $i^3 = -i \\ne 1$
   - $i^4 = (i^2)^2 = (-1)^2 = 1 = e$
   $$\\therefore o(i) = 4$$

4. **For element $a = -i$:**
   - $(-i)^1 = -i \\ne 1$
   - $(-i)^2 = i^2 = -1 \\ne 1$
   - $(-i)^3 = -i^3 = i \\ne 1$
   - $(-i)^4 = (-1)^4 i^4 = 1 \\times 1 = 1 = e$
   $$\\therefore o(-i) = 4$$

---

#### Summary Table:
| Element $a$ | Powers Leading to Identity | Order $o(a)$ |
| :---: | :--- | :---: |
| **$1$** | $1^1 = 1$ | **1** |
| **$-1$** | $(-1)^2 = 1$ | **2** |
| **$i$** | $i^4 = 1$ | **4** |
| **$-i$** | $(-i)^4 = 1$ | **4** |

*(Since $G$ has an element of order equal to the group order $|G| = 4$, $G$ is a cyclic group generated by $i$ and $-i$: $G = \\langle i \\rangle = \\langle -i \\rangle$).*`
  },

  "DM-B3-1094": {
    question: "Construct a recursive version of a binary search algorithm.",
    answerMd: `### Recursive Binary Search Algorithm

#### Concept:
Binary Search operates on a sorted array $A$ by comparing the target element $x$ with the middle element. It divides the search interval in half recursively until $x$ is found or the interval becomes empty.

---

#### Recursive Algorithm Specification:

**Algorithm:** \`RecursiveBinarySearch(A, low, high, x)\`
- **Inputs:** Sorted array $A$, lower index \`low\`, upper index \`high\`, target key \`x\`.
- **Output:** Index of \`x\` if found, or $-1$ if not present.

**Steps:**
1. **Base Case 1 (Not Found):**
   If $\\text{low} > \\text{high}$, return $-1$.
2. **Compute Midpoint:**
   $$\\text{mid} = \\text{low} + \\lfloor(\\text{high} - \\text{low}) / 2\\rfloor$$
3. **Base Case 2 (Found):**
   If $A[\\text{mid}] == x$, return $\\text{mid}$.
4. **Recursive Step 1 (Search Left Half):**
   If $x < A[\\text{mid}]$, return \`RecursiveBinarySearch(A, low, mid - 1, x)\`.
5. **Recursive Step 2 (Search Right Half):**
   If $x > A[\\text{mid}]$, return \`RecursiveBinarySearch(A, mid + 1, high, x)\`.

---

#### Recurrence Relation and Complexity:
- **Recurrence:** $T(n) = T(n/2) + O(1)$ with $T(1) = O(1)$
- **Time Complexity:** $O(\\log n)$
- **Space Complexity:** $O(\\log n)$ on the call stack due to recursion.`
  },

  "DM-B3-1095": {
    question: "The English alphabet contains 21 consonants and five vowels. How many strings of six lowercase letters of the English alphabet contain a) Exactly one vowel? b) Exactly two vowels? c) At least one vowel? d) At least two vowels?",
    answerMd: `### Strings of Six Lowercase Letters with Vowel Constraints

Total alphabet = 26 lowercase letters:
- Consonants: 21
- Vowels: 5 ($a, e, i, o, u$)
Total strings of length 6 (unrestricted) = $26^6 = 308,915,776$.

---

#### a) Exactly One Vowel:
- Choose position for the 1 vowel: $\\binom{6}{1} = 6$ ways.
- Fill the vowel position: 5 choices.
- Fill the remaining 5 positions with consonants: $21^5$ choices.
$$N_a = \\binom{6}{1} \\times 5^1 \\times 21^5 = 6 \\times 5 \\times 4,084,101 = 30 \\times 4,084,101 = 122,523,030$$

$$\\therefore N_a = \\mathbf{122,523,030}$$

---

#### b) Exactly Two Vowels:
- Choose 2 positions for vowels: $\\binom{6}{2} = 15$ ways.
- Fill the 2 vowel positions: $5^2 = 25$ choices.
- Fill the remaining 4 positions with consonants: $21^4 = 194,481$ choices.
$$N_b = \\binom{6}{2} \\times 5^2 \\times 21^4 = 15 \\times 25 \\times 194,481 = 375 \\times 194,481 = 72,930,375$$

$$\\therefore N_b = \\mathbf{72,930,375}$$

---

#### c) At Least One Vowel:
Use complement rule: Total strings minus strings with **zero vowels** (all consonants):
- Strings with zero vowels = $21^6 = 85,766,121$
$$N_c = 26^6 - 21^6 = 308,915,776 - 85,766,121 = 223,149,655$$

$$\\therefore N_c = \\mathbf{223,149,655}$$

---

#### d) At Least Two Vowels:
Total minus strings with zero vowels minus strings with exactly one vowel:
$$N_d = 26^6 - (21^6 + N_a)$$
$$N_d = 308,915,776 - (85,766,121 + 122,523,030) = 308,915,776 - 208,289,151 = 100,626,625$$

$$\\therefore N_d = \\mathbf{100,626,625}$$`
  },

  "DM-B3-1096": {
    question: "Show that if n is a positive integer, then",
    answerMd: `### Proof of the Sum of First $n$ Positive Integers by Mathematical Induction

#### Proposition:
For any positive integer $n \\in \\mathbb{Z}^+$:
$$P(n): 1 + 2 + 3 + \\dots + n = \\frac{n(n + 1)}{2}$$

---

#### Step 1: Base Step ($n = 1$)
- LHS = $1$
- RHS = $\\frac{1(1 + 1)}{2} = \\frac{2}{2} = 1$
LHS = RHS. Thus $P(1)$ is true.

---

#### Step 2: Inductive Hypothesis
Assume that $P(k)$ is true for some positive integer $k$:
$$1 + 2 + 3 + \\dots + k = \\frac{k(k + 1)}{2}$$

---

#### Step 3: Inductive Step
We must prove that $P(k + 1)$ is true, i.e.:
$$1 + 2 + 3 + \\dots + k + (k + 1) = \\frac{(k + 1)(k + 2)}{2}$$

Start with LHS of $P(k + 1)$:
$$\\text{LHS} = [1 + 2 + 3 + \\dots + k] + (k + 1)$$

Substitute inductive hypothesis:
$$\\text{LHS} = \\frac{k(k + 1)}{2} + (k + 1)$$
Factor out common factor $(k + 1)$:
$$\\text{LHS} = (k + 1) \\left[ \\frac{k}{2} + 1 \\right] = (k + 1) \\left( \\frac{k + 2}{2} \\right) = \\frac{(k + 1)(k + 2)}{2} = \\text{RHS}$$

Since LHS = RHS, $P(k + 1)$ is true whenever $P(k)$ is true.
By the Principle of Mathematical Induction, $P(n)$ is true for all positive integers $n$.`
  },

  "DM-B3-1097": {
    question: "Express the linear search algorithm as a recursive procedure.",
    answerMd: `### Recursive Linear Search Algorithm

#### Concept:
Linear search examines each element in array $A$ sequentially. Recursively, checking if $x$ is in $A[i \\dots n-1]$ is equivalent to comparing $x$ with $A[i]$; if equal, we return $i$; otherwise, we recursively search the remaining subarray $A[i+1 \\dots n-1]$.

---

#### Recursive Algorithm Specification:

**Algorithm:** \`RecursiveLinearSearch(A, n, index, x)\`
- **Inputs:** Array $A$, size $n$, current starting index \`index\`, target key \`x\`.
- **Output:** Index of \`x\` if found, or $-1$ if absent.

**Steps:**
1. **Base Case 1 (Not Found):**
   If $\\text{index} \\ge n$, return $-1$ (reached end of array without finding $x$).
2. **Base Case 2 (Found):**
   If $A[\\text{index}] == x$, return $\\text{index}$.
3. **Recursive Step:**
   Return \`RecursiveLinearSearch(A, n, index + 1, x)\`.

---

#### Recurrence Relation & Complexity:
- **Recurrence:** $T(n) = T(n - 1) + O(1)$ with $T(0) = O(1)$
- **Time Complexity:**
  - Best Case: $O(1)$ (element at index 0)
  - Worst Case: $O(n)$ (element absent or at end)
- **Space Complexity:** $O(n)$ call stack depth.`
  },

  "DM-B3-1098": {
    question: "What is the coefficient of x''y'* in the expansion of (2x - By)?",
    answerMd: `### Finding the Binomial Term in $(2x - 3y)^n$

#### General Term Formula:
In the expansion of $(a + b)^n$, the general term is given by:
$$T_{r+1} = \\binom{n}{r} a^{n-r} b^r$$
For $(2x - 3y)^n$:
$$a = 2x, \\quad b = -3y$$
$$T_{r+1} = \\binom{n}{r} (2x)^{n-r} (-3y)^r = \\binom{n}{r} 2^{n-r} (-3)^r x^{n-r} y^r$$

---

#### Application to Specified Powers:
To obtain the term with $x^p y^q$, we require:
$$n - r = p \\quad \\text{and} \\quad r = q \\implies n = p + q$$

- If $p = 2, q = 3$ in $(2x - 3y)^5$ ($n = 5, r = 3$):
  $$T_4 = \\binom{5}{3} (2x)^2 (-3y)^3 = 10 \\cdot (4x^2) \\cdot (-27y^3) = -1080 x^2 y^3$$
  $$\\text{Coefficient} = -1080$$

- If $p = 3, q = 2$ in $(2x - 3y)^5$ ($n = 5, r = 2$):
  $$T_3 = \\binom{5}{2} (2x)^3 (-3y)^2 = 10 \\cdot (8x^3) \\cdot (9y^2) = 720 x^3 y^2$$
  $$\\text{Coefficient} = 720$$`
  },

  "DM-B3-1099": {
    question: "How many solutions does the equation x} + x + x3 = Il have, where X, X 2 and x; are non-negative integers?",
    answerMd: `### Number of Non-Negative Integer Solutions to $x_1 + x_2 + x_3 = 11$

#### Problem Statement:
Find the number of integral solutions to:
$$x_1 + x_2 + x_3 = 11 \\quad \\text{where } x_1, x_2, x_3 \\ge 0$$

---

#### Method: Stars and Bars Theorem
The number of non-negative integer solutions to $x_1 + x_2 + \\dots + x_k = n$ is equivalent to distributing $n$ indistinguishable items into $k$ distinct categories, given by:
$$\\binom{n + k - 1}{k - 1}$$

Here $n = 11$ and $k = 3$:
$$\\text{Number of solutions} = \\binom{11 + 3 - 1}{3 - 1} = \\binom{13}{2}$$

---

#### Calculation:
$$\\binom{13}{2} = \\frac{13 \\times 12}{2 \\times 1} = \\frac{156}{2} = 78$$

**Final Answer:**
$$\\therefore \\text{Total non-negative integer solutions} = \\mathbf{78}$$`
  },

  "DM-B3-1100": {
    question: "Show with examples how lattice operations satisfy commutative and associative laws.",
    answerMd: `### Commutative and Associative Laws in Lattice Operations

Let $(L, \\le)$ be a lattice where for any $a, b \\in L$:
- Join (LUB): $a \\vee b = \\sup\\{a, b\\}$
- Meet (GLB): $a \\wedge b = \\inf\\{a, b\\}$

---

#### Concrete Example System:
Consider the divisor lattice $D_{12} = \\{1, 2, 3, 4, 6, 12\\}$ ordered by divisibility ($a \\le b \\iff a \\mid b$).
Here:
- $a \\vee b = \\text{LCM}(a, b)$
- $a \\wedge b = \\text{GCD}(a, b)$

---

#### 1. Commutative Laws:
- **Statement:** $a \\vee b = b \\vee a$ and $a \\wedge b = b \\wedge a$.
- **Demonstration on $a = 4, b = 6$:**
  - $4 \\vee 6 = \\text{LCM}(4, 6) = 12$
  - $6 \\vee 4 = \\text{LCM}(6, 4) = 12$
  $$\\implies 4 \\vee 6 = 6 \\vee 4$$
  - $4 \\wedge 6 = \\text{GCD}(4, 6) = 2$
  - $6 \\wedge 4 = \\text{GCD}(6, 4) = 2$
  $$\\implies 4 \\wedge 6 = 6 \\wedge 4$$
Commutative law holds because $\\{a, b\\} = \\{b, a\\}$.

---

#### 2. Associative Laws:
- **Statement:** $(a \\vee b) \\vee c = a \\vee (b \\vee c)$ and $(a \\wedge b) \\wedge c = a \\wedge (b \\wedge c)$.
- **Demonstration on $a = 2, b = 3, c = 4$:**
  - $(2 \\vee 3) \\vee 4 = \\text{LCM}(2, 3) \\vee 4 = 6 \\vee 4 = \\text{LCM}(6, 4) = 12$
  - $2 \\vee (3 \\vee 4) = 2 \\vee \\text{LCM}(3, 4) = 2 \\vee 12 = \\text{LCM}(2, 12) = 12$
  $$\\implies (2 \\vee 3) \\vee 4 = 2 \\vee (3 \\vee 4) = 12$$
  - $(2 \\wedge 3) \\wedge 4 = 1 \\wedge 4 = 1$
  - $2 \\wedge (3 \\wedge 4) = 2 \\wedge 1 = 1$
  $$\\implies (2 \\wedge 3) \\wedge 4 = 2 \\wedge (3 \\wedge 4) = 1$$
Associative law holds because both group to $\\sup\\{a, b, c\\}$ and $\\inf\\{a, b, c\\}$.`
  },

  "DM-B3-1102": {
    question: "Explain the concept of complement in a Boolean algebra and illustrate with an example.",
    answerMd: `### Concept of Complement in a Boolean Algebra

In a bounded lattice $\\langle B, \\vee, \\wedge, 0, 1 \\rangle$ with least element $0$ and greatest element $1$, an element $a' \\in B$ is called a **complement** of $a \\in B$ if it satisfies Huntington's complement postulates:
1. $a \\vee a' = 1$ (Join with complement yields universal maximum)
2. $a \\wedge a' = 0$ (Meet with complement yields universal minimum)

A lattice is called **complemented** if every element has at least one complement.
In a **Boolean algebra** (which is both distributive and complemented), the complement $a'$ of every element $a$ is **unique**.

---

#### Key Properties of Complements in Boolean Algebra:
- **Involution (Double Negation):** $(a')' = a$
- **Complements of Bounds:** $0' = 1$ and $1' = 0$
- **De Morgan's Laws:**
  $$(a \\vee b)' = a' \\wedge b'$$
  $$(a \\wedge b)' = a' \\vee b'$$

---

#### Concrete Example:
Consider the power set Boolean algebra $(\\mathcal{P}(S), \\cup, \\cap, ', \\emptyset, S)$ where $S = \\{x, y, z\\}$.
- Greatest element: $1 = S = \\{x, y, z\\}$
- Least element: $0 = \\emptyset$
- For element $A = \\{x\\}$:
  - Its complement is set complement $A' = S \\setminus A = \\{y, z\\}$.
  - Verification:
    $$A \\cup A' = \\{x\\} \\cup \\{y, z\\} = \\{x, y, z\\} = S = 1$$
    $$A \\cap A' = \\{x\\} \\cap \\{y, z\\} = \\emptyset = 0$$
Hence, $\\{y, z\\}$ is the unique complement of $\\{x\\}$.`
  },

  "DM-B3-1103": {
    question: "Apply Boolean simplification to minimize the expression F=AB+A C+BC",
    answerMd: `### Minimization of $F = AB + A'C + BC$ (Consensus Theorem)

#### Given Boolean Expression:
$$F = AB + A'C + BC$$
*(Note: $A'$ denotes the complement of $A$).*

---

#### Step-by-Step Algebraic Simplification:

**Step 1: Expand the redundant term $BC$ using Identity $A + A' = 1$**
$$BC = BC \\cdot 1 = BC(A + A')$$
Using distributive law:
$$BC = ABC + A'BC$$

**Step 2: Substitute back into expression $F$**
$$F = AB + A'C + (ABC + A'BC)$$

**Step 3: Group terms sharing common factors**
$$F = (AB + ABC) + (A'C + A'BC)$$

**Step 4: Factor out common factors**
$$F = AB(1 + C) + A'C(1 + B)$$

**Step 5: Apply Dominance / Annihilation Law ($1 + X = 1$)**
Since $1 + C = 1$ and $1 + B = 1$:
$$F = AB(1) + A'C(1)$$
$$F = AB + A'C$$

---

#### Direct Verification via Consensus Theorem:
The **Consensus Theorem** states that:
$$XY + X'Z + YZ = XY + X'Z$$
Here, $X = A, Y = B, Z = C$.
The term $YZ = BC$ is the **consensus term** formed by eliminating the complementary literals $A$ and $A'$, and is therefore strictly redundant.

**Final Minimized Expression:**
$$\\therefore F = AB + A'C$$`
  },

  "DM-B3-1104": {
    question: "Suppose the postal department prints only 5 and 9 cent stamps. Prove that it is possible to make up any postage of n cents using only 5 and 9 cent stamps for n ≥ 35.",
    answerMd: `### Postage Stamp Problem with 5¢ and 9¢ Stamps for $n \\ge 35$

#### Proposition:
Every integer postage amount $n \\ge 35$ can be represented as:
$$n = 5x + 9y \\quad \\text{for non-negative integers } x, y \\ge 0$$

---

#### Proof by Strong Mathematical Induction:

**Base Cases:**
Since the smallest stamp value is 5, we verify $k = 5$ consecutive base cases starting at $n = 35$:
1. $n = 35: 35 = 5(7) + 9(0) \\quad (x = 7, y = 0)$
2. $n = 36: 36 = 5(0) + 9(4) \\quad (x = 0, y = 4)$
3. $n = 37: 37 = 5(2) + 9(3) = 10 + 27 \\quad (x = 2, y = 3)$
4. $n = 38: 38 = 5(4) + 9(2) = 20 + 18 \\quad (x = 4, y = 2)$
5. $n = 39: 39 = 5(6) + 9(1) = 30 + 9 \\quad (x = 6, y = 1)$

All 5 base cases $n = 35, 36, 37, 38, 39$ are verified.

---

**Inductive Hypothesis:**
Assume that for some integer $k \\ge 39$, the proposition holds for all integers $j$ such that $35 \\le j \\le k$.

---

**Inductive Step:**
We must prove that the proposition holds for postage amount $k + 1$.
Since $k \\ge 39$, we have:
$$(k + 1) - 5 = k - 4 \\ge 39 - 4 = 35$$

Therefore, $(k - 4)$ is an integer in the range $35 \\le k - 4 \\le k$.
By the strong induction hypothesis, $(k - 4)$ can be formed using 5¢ and 9¢ stamps:
$$k - 4 = 5x' + 9y' \\quad \\text{for some } x', y' \\ge 0$$

Adding one 5¢ stamp to $(k - 4)$:
$$k + 1 = (k - 4) + 5 = (5x' + 9y') + 5 = 5(x' + 1) + 9y'$$
Since $x' \\ge 0 \\implies x' + 1 \\ge 1 > 0$, $(k + 1)$ is also a valid non-negative linear combination of 5 and 9.

By Strong Mathematical Induction, any postage $n \\ge 35$ cents can be formed.`
  },

  "DM-B3-1105": {
    question: "Explain the principle of strong induction with example.",
    answerMd: `### Principle of Strong Mathematical Induction

#### Concept:
Strong induction (also called the *Second Principle of Mathematical Induction*) is an inductive proof technique where, to prove $P(k+1)$ in the inductive step, we assume that $P(i)$ is true for **ALL values from the base case up to $k$**, rather than just for $P(k)$ alone.

---

#### Formal Structure:
1. **Basis Step:**
   Prove that $P(b), P(b+1), \\dots, P(b+m)$ are true for appropriate initial base cases.
2. **Inductive Hypothesis:**
   Assume that $P(j)$ is true for **all integers $j$ with $b \\le j \\le k$**.
3. **Inductive Step:**
   Show that under this hypothesis, $P(k+1)$ must be true.
4. **Conclusion:**
   $P(n)$ is true for all integers $n \\ge b$.

---

#### Concrete Example: Fundamental Theorem of Arithmetic (Existence)
**Proposition:** Every integer $n \\ge 2$ can be factored into a product of one or more prime numbers.

- **Base Step ($n = 2$):** 2 is itself a prime number. True.
- **Inductive Hypothesis:** Assume every integer $j$ with $2 \\le j \\le k$ is a prime or can be written as a product of primes.
- **Inductive Step ($n = k + 1$):**
  - Case 1: If $k + 1$ is prime, we are done.
  - Case 2: If $k + 1$ is composite, then $k + 1 = a \\cdot b$ where $2 \\le a, b \\le k$.
    By the strong induction hypothesis, both $a$ and $b$ can be factored into products of primes:
    $$a = p_1 p_2 \\dots p_r, \\quad b = q_1 q_2 \\dots q_s$$
    Therefore:
    $$k + 1 = a \\cdot b = (p_1 \\dots p_r)(q_1 \\dots q_s)$$
    which is a product of primes.
Hence proved by strong induction.`
  },

  "DM-B3-1106": {
    question: "Using induction principles prove that n+2n is divisible by 3.",
    answerMd: `### Prove by Mathematical Induction that $n^3 + 2n$ is Divisible by 3

Let the proposition be:
$$P(n): n^3 + 2n \\text{ is divisible by } 3 \\quad \\forall n \\ge 1$$

---

#### Step 1: Base Step ($n = 1$)
For $n = 1$:
$$1^3 + 2(1) = 1 + 2 = 3$$
Since $3 = 3 \\times 1$, it is divisible by 3.
Thus, $P(1)$ is true.

---

#### Step 2: Inductive Hypothesis
Assume that $P(k)$ is true for some positive integer $k \\ge 1$.
That is:
$$k^3 + 2k = 3m \\quad \\text{for some integer } m \\in \\mathbb{Z}$$

---

#### Step 3: Inductive Step ($n = k + 1$)
We must prove that $P(k + 1)$ is true, i.e. $(k + 1)^3 + 2(k + 1)$ is divisible by 3.

Expand the expression:
$$(k + 1)^3 + 2(k + 1) = (k^3 + 3k^2 + 3k + 1) + (2k + 2)$$
Rearrange to group the inductive hypothesis term $(k^3 + 2k)$:
$$= (k^3 + 2k) + (3k^2 + 3k + 3)$$

Substitute the inductive hypothesis $k^3 + 2k = 3m$:
$$= 3m + 3(k^2 + k + 1)$$
Factor out 3:
$$= 3(m + k^2 + k + 1)$$

Since $m, k \\in \\mathbb{Z}$, the term $(m + k^2 + k + 1)$ is an integer.
Therefore, $(k + 1)^3 + 2(k + 1)$ is divisible by 3.
Thus, $P(k + 1)$ is true whenever $P(k)$ is true.

By the Principle of Mathematical Induction, $n^3 + 2n$ is divisible by 3 for all integers $n \\ge 1$.`
  },

  "DM-B3-1107": {
    question: "A class consists of 6 girls and 10 boys. If a committee of 3 is chosen at random from the class, find the probability that (i) 3 boys are selected (ii) exactly 2 girls are selected.",
    answerMd: `### Committee Selection Probability from 6 Girls and 10 Boys

#### Given:
- Number of girls = 6
- Number of boys = 10
- Total students = $6 + 10 = 16$
- Committee size = 3

#### Total Outcomes in Sample Space:
The total number of ways to choose 3 students from 16 is:
$$n(S) = \\binom{16}{3} = \\frac{16 \\times 15 \\times 14}{3 \\times 2 \\times 1} = 16 \\times 5 \\times 7 = 560$$

---

#### (i) Probability That 3 Boys Are Selected:
Favorable event: Choosing 3 boys from 10 boys and 0 girls from 6 girls:
$$n(E_1) = \\binom{10}{3} \\times \\binom{6}{0}$$
$$\\binom{10}{3} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120$$
$$n(E_1) = 120 \\times 1 = 120$$

$$P(E_1) = \\frac{n(E_1)}{n(S)} = \\frac{120}{560} = \\frac{12}{56} = \\frac{3}{14} \\approx 0.2143$$

$$\\therefore P(3 \\text{ boys}) = \\mathbf{\\frac{3}{14}}$$

---

#### (ii) Probability That Exactly 2 Girls Are Selected:
Favorable event: Choosing 2 girls from 6 girls and 1 boy from 10 boys:
$$n(E_2) = \\binom{6}{2} \\times \\binom{10}{1}$$
$$\\binom{6}{2} = \\frac{6 \\times 5}{2} = 15$$
$$\\binom{10}{1} = 10$$
$$n(E_2) = 15 \\times 10 = 150$$

$$P(E_2) = \\frac{n(E_2)}{n(S)} = \\frac{150}{560} = \\frac{15}{56} \\approx 0.2679$$

**Final Answer:**
1. $P(3 \\text{ boys}) = \\mathbf{\\frac{3}{14} \\approx 0.2143}$
2. $P(\\text{exactly 2 girls}) = \\mathbf{\\frac{15}{56} \\approx 0.2679}$`
  }
};
