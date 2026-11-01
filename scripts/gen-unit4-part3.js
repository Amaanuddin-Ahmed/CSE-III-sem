// scripts/gen-unit4-part3.js - Unit 4 solutions 46 to 61
module.exports = {
  "DM-B4-1197": {
    question: "Compute the number of ways to distribute 10 identical balls into 4 boxes such that no box is empty.",
    answerMd: `### Distributing 10 Identical Balls into 4 Distinct Boxes (No Empty Boxes)

#### Given:
- Number of identical balls $n = 10$.
- Number of distinct boxes $k = 4$.
- Condition: Each box must receive at least 1 ball ($x_i \\ge 1$ for $i = 1, 2, 3, 4$).

#### Method 1: Stars and Bars (Positive Integers)
We want to find the number of positive integer solutions to:
$$x_1 + x_2 + x_3 + x_4 = 10 \\quad (x_i \\ge 1)$$

By the Stars and Bars theorem, the number of positive integer solutions is given by:
$$\\binom{n - 1}{k - 1} = \\binom{10 - 1}{4 - 1} = \\binom{9}{3}$$

#### Calculation:
$$\\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = \\frac{504}{6} = 84$$

#### Method 2: Pre-allocation
Give 1 ball to each of the 4 boxes first ($4$ balls used).
Remaining balls to distribute freely: $10 - 4 = 6$ balls.
Number of non-negative integer solutions to $y_1 + y_2 + y_3 + y_4 = 6$ ($y_i \\ge 0$):
$$\\binom{6 + 4 - 1}{4 - 1} = \\binom{9}{3} = 84$$

**Final Answer:**
$$\\therefore \\text{Number of ways} = \\mathbf{84}$$`
  },

  "DM-B4-1199": {
    question: "Let X = {1, 2, 3, 4, 5, 6, 7} and R = {(x, y) x-y is divisible by 3 in X}. Show that R is an equivalence relation.",
    answerMd: `### Prove that $R = \\{(x, y) \\mid x - y \\text{ is divisible by } 3\\}$ is an Equivalence Relation

Let $X = \\{1, 2, 3, 4, 5, 6, 7\\}$.
The relation $R$ on $X$ is defined by:
$$(x, y) \\in R \\iff 3 \\mid (x - y) \\quad (\\text{i.e. } x \\equiv y \\pmod 3)$$

To prove that $R$ is an equivalence relation, we must verify that $R$ is **Reflexive**, **Symmetric**, and **Transitive**.

---

#### 1. Reflexivity:
For any $x \\in X$:
$$x - x = 0 = 3 \\times 0$$
Since 0 is divisible by 3, $(x, x) \\in R$ for all $x \\in X$.
$$\\therefore R \\text{ is reflexive.}$$

---

#### 2. Symmetry:
Let $(x, y) \\in R$.
Then $x - y$ is divisible by 3, meaning $x - y = 3k$ for some integer $k$.
Multiplying both sides by $-1$:
$$y - x = -(x - y) = -3k = 3(-k)$$
Since $-k$ is also an integer, $y - x$ is divisible by 3.
Thus, $(y, x) \\in R$.
$$\\therefore R \\text{ is symmetric.}$$

---

#### 3. Transitivity:
Let $(x, y) \\in R$ and $(y, z) \\in R$.
Then $x - y = 3k_1$ and $y - z = 3k_2$ for some integers $k_1, k_2$.
Adding the two equations:
$$(x - y) + (y - z) = 3k_1 + 3k_2$$
$$x - z = 3(k_1 + k_2)$$
Since $k_1 + k_2$ is an integer, $x - z$ is divisible by 3.
Thus, $(x, z) \\in R$.
$$\\therefore R \\text{ is transitive.}$$

---

#### Conclusion and Equivalence Classes:
Since $R$ is reflexive, symmetric, and transitive, **$R$ is an equivalence relation**.

The equivalence classes modulo 3 on $X$ are:
- $[1] = \\{1, 4, 7\\}$
- $[2] = \\{2, 5\\}$
- $[3] = \\{3, 6\\}$`
  },

  "DM-B4-1200": {
    question: "Let R and S be the following relations A= {a,b,c,d} defined R= {(a,a),(a,c), (c,b), (c,d),(d,b)} and S= {(b,a), (c,c), (c,d), (d,a)} Find i) RoS ii) SoR iii) RoR.",
    answerMd: `### Composition of Relations $R$ and $S$

#### Given:
Set $A = \\{a, b, c, d\\}$.
- $R = \\{(a, a), (a, c), (c, b), (c, d), (d, b)\\}$
- $S = \\{(b, a), (c, c), (c, d), (d, a)\\}$

Recall composition definition:
- $(x, z) \\in R \\circ S$ (also written $S \\circ R$ in some textbooks):
  $$(x, z) \\in R \\circ S \\iff \\exists y \\in A \\text{ such that } (x, y) \\in S \\text{ and } (y, z) \\in R$$
*(Using standard standard computer science definition: $(S \\circ R)(x) = R(S(x))$ or $(x, z) \\in R \\circ S \\iff \\exists y: (x, y) \\in R \\wedge (y, z) \\in S$)*.

Let us evaluate both standard conventions clearly:

---

#### Under Standard Relational Algebra Convention $(x, z) \\in R \\circ S \\iff \\exists y: (x, y) \\in R \\text{ and } (y, z) \\in S$:

1. **$R \\circ S$ (First $R$, then $S$):**
   - $(a, a) \\in R \\implies (a, \\text{none}) \\in S$
   - $(a, c) \\in R \\implies (c, c), (c, d) \\in S \\implies \\mathbf{(a, c), (a, d)}$
   - $(c, b) \\in R \\implies (b, a) \\in S \\implies \\mathbf{(c, a)}$
   - $(c, d) \\in R \\implies (d, a) \\in S \\implies \\mathbf{(c, a)}$
   - $(d, b) \\in R \\implies (b, a) \\in S \\implies \\mathbf{(d, a)}$

   $$R \\circ S = \\{(a, c), (a, d), (c, a), (d, a)\\}$$

2. **$S \\circ R$ (First $S$, then $R$):**
   - $(b, a) \\in S \\implies (a, a), (a, c) \\in R \\implies \\mathbf{(b, a), (b, c)}$
   - $(c, c) \\in S \\implies (c, b), (c, d) \\in R \\implies \\mathbf{(c, b), (c, d)}$
   - $(c, d) \\in S \\implies (d, b) \\in R \\implies \\mathbf{(c, b)}$
   - $(d, a) \\in S \\implies (a, a), (a, c) \\in R \\implies \\mathbf{(d, a), (d, c)}$

   $$S \\circ R = \\{(b, a), (b, c), (c, b), (c, d), (d, a), (d, c)\\}$$

3. **$R \\circ R$ (First $R$, then $R$):**
   - $(a, a) \\in R \\implies (a, a), (a, c) \\in R \\implies \\mathbf{(a, a), (a, c)}$
   - $(a, c) \\in R \\implies (c, b), (c, d) \\in R \\implies \\mathbf{(a, b), (a, d)}$
   - $(c, b) \\in R \\implies (b, \\text{none})$
   - $(c, d) \\in R \\implies (d, b) \\in R \\implies \\mathbf{(c, b)}$
   - $(d, b) \\in R \\implies (b, \\text{none})$

   $$R \\circ R = \\{(a, a), (a, c), (a, b), (a, d), (c, b)\\}$$`
  },

  "DM-B4-1201": {
    question: "How many ways can we get a sum of 8 when two indistinguishable dice are rolled?",
    answerMd: `### Sum of 8 with Two Indistinguishable (Identical) Dice

#### Distinction Between Distinguishable and Indistinguishable Dice:
- For two **distinguishable** (e.g. red and blue) dice, the pairs $(x, y)$ are ordered.
  Pairs summing to 8: $(2, 6), (3, 5), (4, 4), (5, 3), (6, 2)$ $\\implies 5$ ways.
- For two **indistinguishable (identical)** dice, the pair $\\{x, y\\}$ is an **unordered multiset**.
  The outcome $\\{2, 6\\}$ is physically identical to $\\{6, 2\\}$.

#### Finding All Unordered Pairs $\\{x, y\\}$ Such That $x + y = 8$ with $1 \\le x \\le y \\le 6$:

1. $x = 2, y = 6 \\implies \\{2, 6\\}$ (Sum = $2 + 6 = 8$)
2. $x = 3, y = 5 \\implies \\{3, 5\\}$ (Sum = $3 + 5 = 8$)
3. $x = 4, y = 4 \\implies \\{4, 4\\}$ (Sum = $4 + 4 = 8$)

*(Notice $x = 1$ would require $y = 7$, which is impossible on a standard 6-sided die).*

#### Conclusion:
There are exactly **3 distinct unordered outcomes**:
$$\\{\\{2, 6\\}, \\{3, 5\\}, \\{4, 4\\}\\}$$

**Final Answer:**
$$\\therefore \\text{There are } \\mathbf{3} \\text{ ways to get a sum of 8 with two indistinguishable dice.}$$`
  },

  "DM-B4-1202": {
    question: "How many different permutations of the letters are there in the word \"COMPUTERS\".",
    answerMd: `### Permutations of the Letters in "COMPUTERS"

#### Step 1: Count Total Letters and Check for Duplicates
List all the letters of the word **COMPUTERS**:
- $\\text{C, O, M, P, U, T, E, R, S}$
- Total number of letters: $n = 9$.
- Notice that all 9 letters are **distinct** (no repeating letters).

#### Step 2: Formula for Permutation of $n$ Distinct Objects
The total number of permutations of $n$ distinct objects is given by:
$$P(n) = n!$$

Here $n = 9$:
$$9! = 9 \\times 8 \\times 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1$$

#### Step 3: Arithmetic Evaluation
- $5! = 120$
- $6! = 720$
- $7! = 5,040$
- $8! = 40,320$
- $9! = 9 \\times 40,320 = 362,880$

**Final Answer:**
$$\\therefore \\text{Total permutations} = 9! = \\mathbf{362,880}$$`
  },

  "DM-B4-1203": {
    question: "Use Multinomial theorem to Expand (X1+X 2+X 3 +X 4)4.",
    answerMd: `### Multinomial Expansion of $(x_1 + x_2 + x_3 + x_4)^4$

#### Statement:
$$(x_1 + x_2 + x_3 + x_4)^4 = \\sum_{\\substack{n_1 + n_2 + n_3 + n_4 = 4 \\\\ n_i \\ge 0}} \\frac{4!}{n_1! \\, n_2! \\, n_3! \\, n_4!} x_1^{n_1} x_2^{n_2} x_3^{n_3} x_4^{n_4}$$

#### 1. Total Number of Terms:
$$\\binom{n + k - 1}{k - 1} = \\binom{4 + 4 - 1}{4 - 1} = \\binom{7}{3} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35 \\text{ terms}$$

#### 2. Classification by Partition Types of 4:

1. **Partition $(4, 0, 0, 0)$:** Coefficient $\\frac{4!}{4! 0! 0! 0!} = 1$.
   - $\\binom{4}{1} = 4$ terms: $\\sum x_i^4 = x_1^4 + x_2^4 + x_3^4 + x_4^4$

2. **Partition $(3, 1, 0, 0)$:** Coefficient $\\frac{4!}{3! 1! 0! 0!} = 4$.
   - $4 \\times 3 = 12$ terms: $4 \\sum_{i \\ne j} x_i^3 x_j$

3. **Partition $(2, 2, 0, 0)$:** Coefficient $\\frac{4!}{2! 2! 0! 0!} = 6$.
   - $\\binom{4}{2} = 6$ terms: $6 \\sum_{i < j} x_i^2 x_j^2$

4. **Partition $(2, 1, 1, 0)$:** Coefficient $\\frac{4!}{2! 1! 1! 0!} = 12$.
   - $4 \\times \\binom{3}{2} = 12$ terms: $12 \\sum x_i^2 x_j x_k$

5. **Partition $(1, 1, 1, 1)$:** Coefficient $\\frac{4!}{1! 1! 1! 1!} = 24$.
   - $\\binom{4}{4} = 1$ term: $24 x_1 x_2 x_3 x_4$

#### Total Check:
$4 + 12 + 6 + 12 + 1 = 35$ terms. Sum of coefficients: $4(1) + 12(4) + 6(6) + 12(12) + 1(24) = 4 + 48 + 36 + 144 + 24 = 256 = 4^4$.`
  },

  "DM-B4-1204": {
    question: "How many integers between 1 and 300(inclusive) are divisible by at least one of 5, 6, 8.",
    answerMd: `### Integers Between 1 and 300 Divisible by at Least One of 5, 6, 8

#### Given:
$S = \\{1, 2, 3, \\dots, 300\\} \\implies |S| = 300$.
Let:
- $A_1$: Integers divisible by 5
- $A_2$: Integers divisible by 6
- $A_3$: Integers divisible by 8

We want to find $|A_1 \\cup A_2 \\cup A_3|$ using the **Principle of Inclusion-Exclusion (PIE)**:
$$|A_1 \\cup A_2 \\cup A_3| = \\sum |A_i| - \\sum |A_i \\cap A_j| + |A_1 \\cap A_2 \\cap A_3|$$

---

#### Step 1: Individual Sets $|A_i| = \\lfloor 300 / d \\rfloor$
- $|A_1| = \\lfloor 300 / 5 \\rfloor = 60$
- $|A_2| = \\lfloor 300 / 6 \\rfloor = 50$
- $|A_3| = \\lfloor 300 / 8 \\rfloor = 37$

$$\\sum |A_i| = 60 + 50 + 37 = 147$$

---

#### Step 2: Pairwise Intersections $|A_i \\cap A_j| = \\lfloor 300 / \\text{LCM} \\rfloor$
- $\\text{LCM}(5, 6) = 30 \\implies |A_1 \\cap A_2| = \\lfloor 300 / 30 \\rfloor = 10$
- $\\text{LCM}(5, 8) = 40 \\implies |A_1 \\cap A_3| = \\lfloor 300 / 40 \\rfloor = 7$
- $\\text{LCM}(6, 8) = 24 \\implies |A_2 \\cap A_3| = \\lfloor 300 / 24 \\rfloor = 12$

$$\\sum |A_i \\cap A_j| = 10 + 7 + 12 = 29$$

---

#### Step 3: Triple Intersection $|A_1 \\cap A_2 \\cap A_3|$
- $\\text{LCM}(5, 6, 8) = \\text{LCM}(30, 8) = 120$
$$|A_1 \\cap A_2 \\cap A_3| = \\lfloor 300 / 120 \\rfloor = 2$$

---

#### Step 4: Apply Inclusion-Exclusion
$$|A_1 \\cup A_2 \\cup A_3| = 147 - 29 + 2 = 120$$

**Final Answer:**
$$\\therefore \\text{There are } \\mathbf{120} \\text{ integers between 1 and 300 divisible by at least one of 5, 6, 8.}$$`
  },

  "DM-B4-1205": {
    question: "There are 30 females and 35 males in the junior class while there are 25 females and 20 males in the senior class. In how many ways can a committee of 10 be chosen so that there are exactly 5 females and 3 juniors on the committee?",
    answerMd: `### Committee Selection with Dual Constraints

#### Given Demographic Breakdown:
| Category | Junior ($J$) | Senior ($S$) | Total |
| :--- | :---: | :---: | :---: |
| **Female ($F$)** | 30 ($JF$) | 25 ($SF$) | 55 |
| **Male ($M$)** | 35 ($JM$) | 20 ($SM$) | 55 |
| **Total** | 65 | 45 | 110 |

Total committee size $n = 10$.
Constraints:
1. Exactly 5 Females $\\implies$ exactly $10 - 5 = 5$ Males.
2. Exactly 3 Juniors $\\implies$ exactly $10 - 3 = 7$ Seniors.

---

#### Let Variables Represent Members from Each Subgroup:
Let:
- $k_1 =$ number of Junior Females ($JF$) chosen (from 30)
- $k_2 =$ number of Junior Males ($JM$) chosen (from 35)
- $k_3 =$ number of Senior Females ($SF$) chosen (from 25)
- $k_4 =$ number of Senior Males ($SM$) chosen (from 20)

We have the linear system:
- Total Juniors: $k_1 + k_2 = 3 \\implies k_2 = 3 - k_1$
- Total Females: $k_1 + k_3 = 5 \\implies k_3 = 5 - k_1$
- Total Seniors: $k_3 + k_4 = 7 \\implies (5 - k_1) + k_4 = 7 \\implies k_4 = 2 + k_1$

Since all $k_i \\ge 0$:
- $k_1 \\ge 0$
- $k_2 = 3 - k_1 \\ge 0 \\implies k_1 \\le 3$
- $k_3 = 5 - k_1 \\ge 0 \\implies k_1 \\le 5$
- $k_4 = 2 + k_1 \\ge 0 \\implies k_1 \\ge -2$

Thus, $k_1$ can take values in $\\{0, 1, 2, 3\\}$.

---

#### Calculate Ways for Each Case of $k_1$:
$$\\text{Ways}(k_1) = \\binom{30}{k_1} \\times \\binom{35}{3 - k_1} \\times \\binom{25}{5 - k_1} \\times \\binom{20}{2 + k_1}$$

1. **Case $k_1 = 0$ ($0 JF, 3 JM, 5 SF, 2 SM$):**
   $$\\binom{30}{0} \\binom{35}{3} \\binom{25}{5} \\binom{20}{2} = 1 \\times 6545 \\times 53130 \\times 190 = 66,072,484,500$$

2. **Case $k_1 = 1$ ($1 JF, 2 JM, 4 SF, 3 SM$):**
   $$\\binom{30}{1} \\binom{35}{2} \\binom{25}{4} \\binom{20}{3} = 30 \\times 595 \\times 12650 \\times 1140 = 257,414,850,000$$

3. **Case $k_1 = 2$ ($2 JF, 1 JM, 3 SF, 4 SM$):**
   $$\\binom{30}{2} \\binom{35}{1} \\binom{25}{3} \\binom{20}{4} = 435 \\times 35 \\times 2300 \\times 4845 = 169,722,862,500$$

4. **Case $k_1 = 3$ ($3 JF, 0 JM, 2 SF, 5 SM$):**
   $$\\binom{30}{3} \\binom{35}{0} \\binom{25}{2} \\binom{20}{5} = 4060 \\times 1 \\times 300 \\times 15504 = 18,883,872,000$$

---

#### Total Ways:
$$\\text{Total} = 66,072,484,500 + 257,414,850,000 + 169,722,862,500 + 18,883,872,000 = 512,094,069,000$$

**Final Answer:**
$$\\therefore \\text{Total ways} = \\mathbf{512,094,069,000}$$`
  },

  "DM-B4-1206": {
    question: "(i)-In (2x-3y+5z) find the coefficient of x12x2 X3² (ii) In (x1+x2+X3+X4+xs)10 find the coefficient of x1² X3 X4³ xs.",
    answerMd: `### Finding Coefficients Using Multinomial Theorem

#### Part (i): Coefficient in $(2x - 3y + 5z)^5$
To find the coefficient of $x^1 y^2 z^2$ (or $x_1^1 x_2^2 x_3^2$) in $(2x - 3y + 5z)^5$:
- Here $n = 5$ with $n_1 = 1, n_2 = 2, n_3 = 2$ ($1 + 2 + 2 = 5$).
- Terms: $u_1 = 2x, u_2 = -3y, u_3 = 5z$.

Applying the multinomial formula:
$$\\text{Term} = \\frac{5!}{1! \\, 2! \\, 2!} (2x)^1 (-3y)^2 (5z)^2$$
$$\\text{Coefficient} = \\frac{120}{1 \\times 2 \\times 2} \\times (2)^1 \\times (-3)^2 \\times (5)^2$$
$$\\text{Coefficient} = 30 \\times 2 \\times 9 \\times 25 = 60 \\times 225 = 13,500$$

$$\\therefore \\text{Coefficient of } x y^2 z^2 = \\mathbf{13,500}$$

---

#### Part (ii): Coefficient in $(x_1 + x_2 + x_3 + x_4 + x_5)^{10}$
To find the coefficient of $x_1^2 x_2^0 x_3^4 x_4^3 x_5^1$ (powers: $2 + 0 + 4 + 3 + 1 = 10$):
- Here $n = 10$, and the powers are $n_1 = 2, n_2 = 0, n_3 = 4, n_4 = 3, n_5 = 1$.

Applying multinomial coefficient:
$$\\text{Coefficient} = \\frac{10!}{2! \\, 0! \\, 4! \\, 3! \\, 1!}$$
$$10! = 3,628,800$$
$$2! \\times 1 \\times 4! \\times 3! \\times 1! = 2 \\times 1 \\times 24 \\times 6 \\times 1 = 288$$
$$\\text{Coefficient} = \\frac{3,628,800}{288} = 12,600$$

**Final Answer:**
1. Part (i): $\\mathbf{13,500}$
2. Part (ii): $\\mathbf{12,600}$`
  },

  "DM-B4-1207": {
    question: "How many integral solutions are there to x₁ + X2 + X3 + X4 + X5 = 20 where x₁>=-3, x2> =0, x3>= 4, x4>=2, and xs>=2?",
    answerMd: `### Integral Solutions to $x_1 + x_2 + x_3 + x_4 + x_5 = 20$ with Lower Bounds

#### Given Equation:
$$x_1 + x_2 + x_3 + x_4 + x_5 = 20$$
Subject to lower bound constraints:
- $x_1 \\ge -3$
- $x_2 \\ge 0$
- $x_3 \\ge 4$
- $x_4 \\ge 2$
- $x_5 \\ge 2$

---

#### Step 1: Change of Variables to Standard Non-Negative Form
Transform each variable $x_i$ into a new non-negative integer variable $y_i \\ge 0$:
- Let $y_1 = x_1 - (-3) = x_1 + 3 \\implies x_1 = y_1 - 3$ ($y_1 \\ge 0$)
- Let $y_2 = x_2 - 0 = x_2 \\implies x_2 = y_2$ ($y_2 \\ge 0$)
- Let $y_3 = x_3 - 4 \\implies x_3 = y_3 + 4$ ($y_3 \\ge 0$)
- Let $y_4 = x_4 - 2 \\implies x_4 = y_4 + 2$ ($y_4 \\ge 0$)
- Let $y_5 = x_5 - 2 \\implies x_5 = y_5 + 2$ ($y_5 \\ge 0$)

---

#### Step 2: Substitute into the Equation
$$(y_1 - 3) + y_2 + (y_3 + 4) + (y_4 + 2) + (y_5 + 2) = 20$$
$$y_1 + y_2 + y_3 + y_4 + y_5 + (-3 + 4 + 2 + 2) = 20$$
$$y_1 + y_2 + y_3 + y_4 + y_5 + 5 = 20$$
$$y_1 + y_2 + y_3 + y_4 + y_5 = 15 \\quad (y_i \\ge 0)$$

---

#### Step 3: Apply Stars and Bars Formula
The number of non-negative integer solutions to $y_1 + y_2 + \\dots + y_k = M$ is:
$$\\binom{M + k - 1}{k - 1}$$
Here $M = 15$ and $k = 5$:
$$\\binom{15 + 5 - 1}{5 - 1} = \\binom{19}{4}$$

#### Step 4: Arithmetic Calculation
$$\\binom{19}{4} = \\frac{19 \\times 18 \\times 17 \\times 16}{4 \\times 3 \\times 2 \\times 1} = 19 \\times 3 \\times 17 \\times 4 = 3,876$$

**Final Answer:**
$$\\therefore \\text{Total integral solutions} = \\mathbf{3,876}$$`
  },

  "DM-B4-1208": {
    question: "In a survey of students at Florida State University the following information was obtained, 260 were taking a statistics course, 208 were taking a mathematics course, 160 were taking a computer programming course, 76 were taking statistics and mathematics, 48 were taking statistics and computer programming, 62 were taking mathematics courses and computer programming, 30 were taking all 3 kinds of courses, and 150 were taking none of the 3 courses.",
    answerMd: `### Analysis of FSU Student Course Survey (Principle of Inclusion-Exclusion)

#### Given Data:
Let:
- $S$: Students taking Statistics $\\implies |S| = 260$
- $M$: Students taking Mathematics $\\implies |M| = 208$
- $C$: Students taking Computer Programming $\\implies |C| = 160$

Intersections:
- $|S \\cap M| = 76$
- $|S \\cap C| = 48$
- $|M \\cap C| = 62$
- $|S \\cap M \\cap C| = 30$
- Students taking none of the three: $|(S \\cup M \\cup C)'| = 150$

---

#### 1. Students Taking at Least One Course:
By the Principle of Inclusion-Exclusion:
$$|S \\cup M \\cup C| = (|S| + |M| + |C|) - (|S \\cap M| + |S \\cap C| + |M \\cap C|) + |S \\cap M \\cap C|$$
$$|S \\cup M \\cup C| = (260 + 208 + 160) - (76 + 48 + 62) + 30$$
$$|S \\cup M \\cup C| = 628 - 186 + 30 = 472$$

---

#### 2. Total Students Surveyed:
$$\\text{Total Students} = |S \\cup M \\cup C| + |(S \\cup M \\cup C)'| = 472 + 150 = 622$$

---

#### 3. Breakdown of Disjoint Venn Diagram Regions:
- **All three courses:** $30$
- **Only Statistics and Mathematics:** $76 - 30 = 46$
- **Only Statistics and Computer Programming:** $48 - 30 = 18$
- **Only Mathematics and Computer Programming:** $62 - 30 = 32$
- **Only Statistics:** $260 - (46 + 18 + 30) = 260 - 94 = 166$
- **Only Mathematics:** $208 - (46 + 32 + 30) = 208 - 108 = 100$
- **Only Computer Programming:** $160 - (18 + 32 + 30) = 160 - 80 = 80$

**Final Summary:**
1. At least one course: **472 students**
2. Total students surveyed: **622 students**`
  },

  "DM-B4-1209": {
    question: "Let f (n) = 5f (n/2) + 3 and f (1) = 7. Find f (2k), where k is a positive integer. Also, estimate f (n) if f is an increasing function.",
    answerMd: `### Solve Divide-and-Conquer Recurrence $f(n) = 5f(n/2) + 3$ with $f(1) = 7$

#### Given:
- Recurrence: $f(n) = 5f(n/2) + 3$ for $n = 2^k$ ($k \\ge 1$).
- Initial condition: $f(1) = 7$.

---

#### Step 1: Repeated Substitution (Iteration Method)
Let $n = 2^k$:
$$f(2^k) = 5 f(2^{k-1}) + 3$$
$$f(2^{k-1}) = 5 f(2^{k-2}) + 3$$
$$f(2^{k-2}) = 5 f(2^{k-3}) + 3$$

Substitute recursively:
$$f(2^k) = 5 [5 f(2^{k-2}) + 3] + 3 = 5^2 f(2^{k-2}) + 3(5 + 1)$$
$$f(2^k) = 5^2 [5 f(2^{k-3}) + 3] + 3(5 + 1) = 5^3 f(2^{k-3}) + 3(5^2 + 5 + 1)$$
$$\\dots$$
$$f(2^k) = 5^k f(2^0) + 3 \\sum_{i=0}^{k-1} 5^i$$

---

#### Step 2: Sum the Geometric Series
$$\\sum_{i=0}^{k-1} 5^i = \\frac{5^k - 1}{5 - 1} = \\frac{5^k - 1}{4}$$

Substitute $f(1) = 7$:
$$f(2^k) = 7 \\cdot 5^k + 3 \\left(\\frac{5^k - 1}{4}\\right) = \\frac{28 \\cdot 5^k + 3 \\cdot 5^k - 3}{4} = \\frac{31 \\cdot 5^k - 3}{4}$$

---

#### Step 3: Asymptotic Estimation of $f(n)$
Since $n = 2^k \\implies k = \\log_2 n$:
$$5^k = 5^{\\log_2 n} = n^{\\log_2 5} \\approx n^{2.322}$$

Therefore:
$$f(n) = \\frac{31}{4} n^{\\log_2 5} - \\frac{3}{4} = \\Theta(n^{\\log_2 5}) \\approx \\Theta(n^{2.32})$$

**Final Answer:**
1. Exact value: $f(2^k) = \\mathbf{\\frac{31 \\cdot 5^k - 3}{4}}$
2. Asymptotic bound: $f(n) = \\mathbf{\\Theta(n^{\\log_2 5})}$`
  },

  "DM-B4-1211": {
    question: "In a neighbourhood, 90% children were falling sick due flu and 10% due to measles and no other disease. The probability of observing rashes for measles is 0.95 and for flu is 0.08. If a child develops rashes, find the child's probability of having flu.",
    answerMd: `### Probability of Flu Given Observed Rashes (Bayes' Theorem)

#### Step 1: Define Hypotheses and Prior Probabilities
- $E_1$: Child is sick due to **Flu** $\\implies P(E_1) = 90\\% = 0.90$
- $E_2$: Child is sick due to **Measles** $\\implies P(E_2) = 10\\% = 0.10$

#### Step 2: Conditional Probabilities (Likelihoods of Rashes $R$)
- $P(R \\mid E_1) = 0.08$ (Probability of rashes given Flu)
- $P(R \\mid E_2) = 0.95$ (Probability of rashes given Measles)

#### Step 3: Total Probability of Rashes $P(R)$
$$P(R) = P(E_1) P(R \\mid E_1) + P(E_2) P(R \\mid E_2)$$
$$P(R) = (0.90)(0.08) + (0.10)(0.95)$$
$$P(R) = 0.072 + 0.095 = 0.167$$

#### Step 4: Apply Bayes' Theorem
We seek $P(E_1 \\mid R)$ (probability child has Flu given rashes):
$$P(E_1 \\mid R) = \\frac{P(E_1) P(R \\mid E_1)}{P(R)} = \\frac{0.072}{0.167}$$
$$P(E_1 \\mid R) = \\frac{72}{167} \\approx 0.4311 \\quad (43.11\\%)$$

*(Bonus: Probability of Measles given rashes = $1 - 0.4311 = 0.5689$ or $56.89\\%$).*

**Final Answer:**
$$\\therefore P(\\text{Flu} \\mid \\text{Rashes}) = \\frac{72}{167} \\approx 0.4311 \\quad (43.11\\%)$$`
  },

  "DM-B4-1213": {
    question: "What is the probability that when two dice are rolled, the sum of the numbers on the two dice is 7?",
    answerMd: `### Probability of Rolling a Sum of 7 with Two Dice

#### Step 1: Sample Space
When two fair six-sided dice are rolled, each die has 6 possible faces $\\{1, 2, 3, 4, 5, 6\\}$.
Total number of elementary outcomes:
$$n(S) = 6 \\times 6 = 36$$

#### Step 2: Favorable Outcomes for Sum = 7
Let event $E$ be "The sum of the numbers on the two dice is 7":
$$E = \\{(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)\\}$$
Number of favorable outcomes:
$$n(E) = 6$$

#### Step 3: Probability Calculation
$$P(E) = \\frac{n(E)}{n(S)} = \\frac{6}{36} = \\frac{1}{6}$$

#### Decimal and Percentage:
$$P(E) = \\frac{1}{6} \\approx 0.1667 \\quad (16.67\\%)$$

**Final Answer:**
$$\\therefore P(\\text{Sum is 7}) = \\frac{1}{6}$$`
  },

  "DM-B4-1214": {
    question: "Solve an-6an-1+12an-2-8an-3 = 0 for n>=3 by the method of characteristic roots.",
    answerMd: `### Solve $a_n - 6a_{n-1} + 12a_{n-2} - 8a_{n-3} = 0$ Using Characteristic Roots

#### Given:
$$a_n - 6a_{n-1} + 12a_{n-2} - 8a_{n-3} = 0 \\quad (n \\ge 3)$$
This is a third-order linear homogeneous recurrence relation with constant coefficients.

---

#### Step 1: Characteristic Equation
Assume trial solution $a_n = r^n$ ($r \\ne 0$). Substituting and dividing by $r^{n-3}$:
$$r^3 - 6r^2 + 12r - 8 = 0$$

---

#### Step 2: Solve the Characteristic Equation
Notice the binomial expansion pattern of $(r - 2)^3$:
$$(r - 2)^3 = r^3 - 3(2)r^2 + 3(2^2)r - 2^3 = r^3 - 6r^2 + 12r - 8$$

Thus:
$$(r - 2)^3 = 0$$
The characteristic equation has a single root $r = 2$ with **multiplicity 3**:
$$r_1 = r_2 = r_3 = 2$$

---

#### Step 3: General Solution for Repeated Roots
When a characteristic root $r$ has multiplicity $m = 3$, the general solution contains polynomial multiplier terms $1, n, n^2$:
$$a_n = (c_1 + c_2 n + c_3 n^2) r^n$$
$$a_n = (c_1 + c_2 n + c_3 n^2) 2^n$$
where $c_1, c_2, c_3$ are arbitrary constants determined by initial conditions.

**Final Answer:**
$$\\therefore a_n = (c_1 + c_2 n + c_3 n^2) 2^n$$`
  },

  "DM-B4-1217": {
    question: "How many 11-permutations can be formed from the word 'TALLAHASSEE'. How many of these permutations begin with T and end with E.",
    answerMd: `### Permutations of the Letters in "TALLAHASSEE"

The word **TALLAHASSEE** has 11 letters:
- $\\text{T} \\to 1$
- $\\text{A} \\to 3$
- $\\text{L} \\to 2$
- $\\text{H} \\to 1$
- $\\text{S} \\to 2$
- $\\text{E} \\to 2$

Total letters: $1 + 3 + 2 + 1 + 2 + 2 = 11$.

---

#### Part 1: Total 11-Permutations
Using multiset permutation formula:
$$N = \\frac{11!}{n_A! \\, n_L! \\, n_S! \\, n_E! \\, n_T! \\, n_H!} = \\frac{11!}{3! \\, 2! \\, 2! \\, 2! \\, 1! \\, 1!}$$
$$11! = 39,916,800$$
$$3! \\times 2! \\times 2! \\times 2! = 6 \\times 2 \\times 2 \\times 2 = 48$$
$$N = \\frac{39,916,800}{48} = 831,600$$

$$\\therefore \\text{Total permutations} = \\mathbf{831,600}$$

---

#### Part 2: Permutations Beginning with 'T' and Ending with 'E'
- Fix **T** in position 1 (1 way).
- Fix one **E** in position 11 (1 way).
- The remaining $11 - 2 = 9$ intermediate positions must be filled by the remaining 9 letters:
  $$\\{A: 3, \\, L: 2, \\, S: 2, \\, E: 1, \\, H: 1\\}$$

Number of arrangements of these 9 letters:
$$N_{\\text{T...E}} = \\frac{9!}{3! \\, 2! \\, 2! \\, 1! \\, 1!}$$
$$9! = 362,880$$
$$3! \\times 2! \\times 2! = 6 \\times 2 \\times 2 = 24$$
$$N_{\\text{T...E}} = \\frac{362,880}{24} = 15,120$$

**Final Answer:**
1. Total permutations: $\\mathbf{831,600}$
2. Permutations beginning with T and ending with E: $\\mathbf{15,120}$`
  }
};
