// scripts/gen-unit4-part1.js - Unit 4 solutions 1 to 25
module.exports = {
  "DM-A4-1128": {
    question: "Write the Axioms of Probability.",
    answerMd: `### Axioms of Probability (Kolmogorov's Axioms)

Let $S$ denote the sample space of a random experiment and let $E$ be any event in $S$. The probability function $P: \mathcal{P}(S) \to \mathbb{R}$ satisfies Kolmogorov's three fundamental axioms:

#### Axiom 1 (Non-negativity):
For any event $E \subseteq S$, the probability is a non-negative real number:
$$P(E) \ge 0$$

#### Axiom 2 (Certainty / Normalization):
The probability of the entire sample space (certain event) is equal to 1:
$$P(S) = 1$$

#### Axiom 3 (Countable Additivity):
For any sequence of pairwise mutually exclusive (disjoint) events $E_1, E_2, E_3, \dots$ (where $E_i \cap E_j = \emptyset$ for all $i \ne j$):
$$P\left(\bigcup_{i=1}^{\infty} E_i\right) = \sum_{i=1}^{\infty} P(E_i)$$
For two mutually disjoint events $A$ and $B$ ($A \cap B = \emptyset$):
$$P(A \cup B) = P(A) + P(B)$$

#### Key Corollaries:
1. $P(\emptyset) = 0$ (probability of impossible event is zero).
2. For any event $E$, $0 \le P(E) \le 1$.
3. Complement rule: $P(E') = 1 - P(E)$.`
  },

  "DM-A4-1129": {
    question: "Define combinations.",
    answerMd: `### Definition of Combinations

A **combination** is an unordered selection of $r$ distinct elements chosen from a given set of $n$ distinct elements without regard to the arrangement or order of selection.

#### Mathematical Formula:
The number of combinations of $n$ objects taken $r$ at a time is denoted by $C(n, r)$, nCr, or $\binom{n}{r}$, given by:
$$C(n, r) = \binom{n}{r} = \frac{n!}{r!(n - r)!} \quad (0 \le r \le n)$$

#### Key Properties:
1. **Symmetry:** $\binom{n}{r} = \binom{n}{n - r}$
2. **Boundary cases:** $\binom{n}{0} = 1$, $\binom{n}{n} = 1$, $\binom{n}{1} = n$
3. **Pascal's Identity:** $\binom{n}{r} = \binom{n - 1}{r} + \binom{n - 1}{r - 1}$

#### Concrete Example:
Selecting a committee of $r = 3$ members out of $n = 5$ candidates:
$$\binom{5}{3} = \frac{5!}{3!(5 - 3)!} = \frac{5 \times 4 \times 3 \times 2 \times 1}{(3 \times 2 \times 1)(2 \times 1)} = 10 \text{ ways}$$`
  },

  "DM-A4-1130": {
    question: "A card is drawn from a well shuffled pack of cards. What is the probability that it is either spade or an ace?",
    answerMd: `### Probability of Drawing a Spade or an Ace

#### Given:
- Standard deck of playing cards: $n(S) = 52$.
- Let event $A$ = Drawing a spade. Since there are 13 spades: $n(A) = 13 \implies P(A) = \frac{13}{52}$.
- Let event $B$ = Drawing an ace. Since there are 4 aces in the deck: $n(B) = 4 \implies P(B) = \frac{4}{52}$.
- Event $A \cap B$ = Drawing the Ace of Spades. Exactly 1 card is both a spade and an ace:
  $$n(A \cap B) = 1 \implies P(A \cap B) = \frac{1}{52}$$

#### Applying Addition Rule of Probability:
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
$$P(A \cup B) = \frac{13}{52} + \frac{4}{52} - \frac{1}{52} = \frac{16}{52}$$

#### Simplifying:
$$P(\text{Spade or Ace}) = \frac{16 \div 4}{52 \div 4} = \frac{4}{13} \approx 0.3077$$

**Final Answer:**
$$\therefore P(\text{Spade or Ace}) = \frac{4}{13}$$`
  },

  "DM-A4-1132": {
    question: "Define permutation.",
    answerMd: `### Definition of Permutation

A **permutation** is an ordered arrangement of a given number of distinct elements selected from a finite set. In permutations, the sequence or order of elements is essential ($AB \ne BA$).

#### Mathematical Formula:
The number of permutations of $n$ distinct objects taken $r$ at a time ($0 \le r \le n$) without repetition is denoted by $P(n, r)$ or nPr:
$$P(n, r) = \frac{n!}{(n - r)!} = n(n - 1)(n - 2)\cdots(n - r + 1)$$

#### Boundary Cases:
- $P(n, 0) = \frac{n!}{n!} = 1$
- $P(n, n) = \frac{n!}{0!} = n!$ (total arrangements of all $n$ objects)
- $P(n, 1) = n$

#### Example:
Arranging 3 books on a shelf chosen from 5 distinct books:
$$P(5, 3) = \frac{5!}{(5 - 3)!} = \frac{120}{2} = 60 \text{ arrangements}$$`
  },

  "DM-A4-1133": {
    question: "How many 10 digit numbers are there with exactly six 1's?",
    answerMd: `### Number of 10-Digit Numbers with Exactly Six 1's

A 10-digit number has places $d_1, d_2, d_3, \dots, d_{10}$, where the first digit $d_1 \in \{1, 2, \dots, 9\}$ (cannot be 0).
We divide the problem into two disjoint cases based on whether the leading digit $d_1$ is 1 or not.

#### Case 1: First digit $d_1 = 1$
- 1 is already placed in position $d_1$ (1 way).
- Exactly 5 more 1's must be placed in the remaining 9 positions ($d_2, \dots, d_{10}$).
  - Ways to choose positions for the remaining five 1's: $\binom{9}{5} = \frac{9 \times 8 \times 7 \times 6}{4 \times 3 \times 2 \times 1} = 126$.
- The remaining $9 - 5 = 4$ positions must be filled with digits from $\{0, 2, 3, 4, 5, 6, 7, 8, 9\}$ (9 non-1 digits).
  - Ways to fill these 4 positions: $9^4 = 6561$.
- Total numbers for Case 1:
  $$N_1 = 1 \times \binom{9}{5} \times 9^4 = 126 \times 6561 = 826,686$$

#### Case 2: First digit $d_1 \ne 1$
- The first digit $d_1$ can be any digit from $\{2, 3, 4, 5, 6, 7, 8, 9\}$ (8 choices).
- All six 1's must be placed in the remaining 9 positions ($d_2, \dots, d_{10}$).
  - Ways to choose 6 positions out of 9: $\binom{9}{6} = \binom{9}{3} = \frac{9 \times 8 \times 7}{6} = 84$.
- The remaining $9 - 6 = 3$ positions must be chosen from the 9 non-1 digits $\{0, 2, 3, 4, 5, 6, 7, 8, 9\}$:
  - Ways: $9^3 = 729$.
- Total numbers for Case 2:
  $$N_2 = 8 \times \binom{9}{6} \times 9^3 = 8 \times 84 \times 729 = 489,888$$

#### Total 10-Digit Numbers:
$$N = N_1 + N_2 = 826,686 + 489,888 = 1,316,574$$

**Final Answer:**
$$\therefore \text{Total numbers} = 1,316,574$$`
  },

  "DM-A4-1134": {
    question: "Write about expected value and variance.",
    answerMd: `### Expected Value and Variance of a Random Variable

#### 1. Expected Value (Mean):
The **expected value** $E(X)$ or $\mu$ of a discrete random variable $X$ represents the weighted average (center of mass) of its probability distribution.
$$E(X) = \mu = \sum_{x} x \cdot P(X = x)$$
For a continuous random variable $X$ with PDF $f(x)$:
$$E(X) = \int_{-\infty}^{\infty} x f(x)\,dx$$

**Key Properties:**
- Linearity: $E(aX + b) = aE(X) + b$
- $E(X + Y) = E(X) + E(Y)$ (always holds, even if correlated)

#### 2. Variance:
The **variance** $\text{Var}(X)$ or $\sigma^2$ measures the dispersion or spread of the random variable about its mean:
$$\text{Var}(X) = \sigma^2 = E\left[(X - \mu)^2\right] = E(X^2) - [E(X)]^2$$
where $E(X^2) = \sum_{x} x^2 P(X = x)$.

**Key Properties:**
- $\text{Var}(X) \ge 0$
- $\text{Var}(aX + b) = a^2 \text{Var}(X)$
- Standard Deviation: $\sigma = \sqrt{\text{Var}(X)}$
- If $X, Y$ are independent: $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$`
  },

  "DM-A4-1135": {
    question: "What is the probability of getting 3 or 5 on a die?",
    answerMd: `### Probability of Getting 3 or 5 on a Fair Die

#### Given:
- Rolling a single fair six-sided die:
  $$\text{Sample Space } S = \{1, 2, 3, 4, 5, 6\} \implies n(S) = 6$$
- Favorable event $E$ = "Rolling a 3 or a 5":
  $$E = \{3, 5\} \implies n(E) = 2$$

#### Probability Calculation:
$$P(E) = \frac{n(E)}{n(S)} = \frac{2}{6} = \frac{1}{3}$$

Alternatively, using the addition rule for mutually exclusive events:
$$P(3 \cup 5) = P(3) + P(5) = \frac{1}{6} + \frac{1}{6} = \frac{2}{6} = \frac{1}{3}$$

**Final Answer:**
$$\therefore P(\text{Getting 3 or 5}) = \frac{1}{3} \approx 0.3333$$`
  },

  "DM-A4-1136": {
    question: "List out the applications of Bayes' theorem.",
    answerMd: `### Applications of Bayes' Theorem

Bayes' Theorem updates the prior probability of a hypothesis in light of newly observed evidence:
$$P(A_i \mid B) = \frac{P(B \mid A_i) P(A_i)}{\sum_{j=1}^{k} P(B \mid A_j) P(A_j)}$$

#### Major Applications in Computer Science and Engineering:
1. **Medical Diagnosis & Disease Screening:**
   Calculating the posterior probability of a patient having a disease given a positive test result, accounting for false positives and test sensitivity/specificity.
2. **Spam Filtering (Naive Bayes Classifier):**
   Classifying incoming emails as spam or ham based on the conditional probabilities of specific keywords occurring in known spam messages.
3. **Machine Learning & Pattern Recognition:**
   Bayesian classification for text categorization, sentiment analysis, document tagging, and face/object recognition.
4. **Fault Diagnosis & Industrial Reliability:**
   Identifying which manufacturing machine, plant, or component caused an observed defect during quality inspection.
5. **Sensor Fusion & Robotics:**
   Kalman filters and Bayesian estimation for combining noisy sensor measurements (GPS, IMU, camera) to determine robot localization and tracking.
6. **Information Retrieval & Recommendation Engines:**
   Estimating user preference profiles given browsing patterns and rating histories.`
  },

  "DM-A4-1137": {
    question: "Use the multinomial theorem to expand (x +xatx3tx4)\".",
    answerMd: `### Multinomial Expansion of $(x_1 + x_2 + x_3 + x_4)^n$

#### Statement of Multinomial Theorem:
Let $x_1, x_2, \dots, x_k$ be real or complex numbers and $n$ be a positive integer. Then:
$$(x_1 + x_2 + \cdots + x_k)^n = \sum_{\substack{n_1 + n_2 + \cdots + n_k = n \\ n_i \ge 0}} \binom{n}{n_1, n_2, \dots, n_k} x_1^{n_1} x_2^{n_2} \cdots x_k^{n_k}$$
where the multinomial coefficient is:
$$\binom{n}{n_1, n_2, \dots, n_k} = \frac{n!}{n_1! n_2! \cdots n_k!}$$

#### Application to $(x_1 + x_2 + x_3 + x_4)^n$:
Here $k = 4$, so the expansion is:
$$(x_1 + x_2 + x_3 + x_4)^n = \sum_{\substack{n_1 + n_2 + n_3 + n_4 = n \\ n_1, n_2, n_3, n_4 \ge 0}} \frac{n!}{n_1! n_2! n_3! n_4!} x_1^{n_1} x_2^{n_2} x_3^{n_3} x_4^{n_4}$$

#### Total Number of Terms:
The number of non-negative integer solutions to $n_1 + n_2 + n_3 + n_4 = n$ gives the number of distinct terms in the expansion:
$$\text{Number of terms} = \binom{n + k - 1}{k - 1} = \binom{n + 4 - 1}{4 - 1} = \binom{n + 3}{3} = \frac{(n+3)(n+2)(n+1)}{6}$$`
  },

  "DM-A4-1138": {
    question: "Explain permutation and combination with an example.",
    answerMd: `### Permutation vs Combination

| Feature | Permutation ($P(n, r)$) | Combination ($C(n, r)$) |
| :--- | :--- | :--- |
| **Concept** | Arrangement of objects where **order matters**. | Selection of objects where **order does not matter**. |
| **Formula** | $P(n, r) = \frac{n!}{(n - r)!}$ | $C(n, r) = \frac{n!}{r!(n - r)!}$ |
| **Relation** | $P(n, r) = r! \times C(n, r)$ | $C(n, r) = \frac{P(n, r)}{r!}$ |

#### Illustrative Example:
Consider a set of 3 students $\{A, B, C\}$.

1. **Permutation (Order Matters):**
   Selecting 2 students for the posts of **President** and **Secretary**:
   - Possible pairs: $(A, B), (B, A), (A, C), (C, A), (B, C), (C, B)$
   - $P(3, 2) = \frac{3!}{(3 - 2)!} = 6 \text{ arrangements}$
   - Here, $(A, B)$ means $A$ is President, $B$ is Secretary, which is completely distinct from $(B, A)$.

2. **Combination (Order Does Not Matter):**
   Selecting 2 students to form a **project study group**:
   - Possible groups: $\{A, B\}, \{A, C\}, \{B, C\}$
   - $C(3, 2) = \frac{3!}{2! 1!} = 3 \text{ selections}$
   - Here, $\{A, B\}$ and $\{B, A\}$ represent the exact same study group.`
  },

  "DM-A4-1139": {
    question: "A single coin is tossed 5 times. What is the probability of getting at least one head?",
    answerMd: `### Probability of Getting at Least One Head in 5 Coin Tosses

#### Given:
- A fair coin is tossed $n = 5$ times.
- Total elementary outcomes in the sample space:
  $$n(S) = 2^5 = 32$$

#### Complementary Event Method:
Let event $E$ = "Getting at least one head".
The complement event $E'$ = "Getting NO heads" (i.e., all 5 tosses result in Tails: $TTTTT$).

- Number of outcomes for zero heads:
  $$n(E') = \binom{5}{0} = 1$$
- Probability of no heads:
  $$P(E') = \frac{n(E')}{n(S)} = \frac{1}{32}$$

#### Computing $P(E)$:
$$P(E) = 1 - P(E') = 1 - \frac{1}{32} = \frac{31}{32}$$

**Final Answer:**
$$\therefore P(\text{at least one head}) = \frac{31}{32} = 0.96875$$`
  },

  "DM-A4-1140": {
    question: "Find the relation between nCr and (n + 1)Cr.",
    answerMd: `### Mathematical Relation Between $\\binom{n}{r}$ and $\\binom{n+1}{r}$

#### 1. Algebraic Ratio Relation:
We expand both terms using factorials:
$$\\binom{n+1}{r} = \\frac{(n+1)!}{r! (n+1-r)!} = \\frac{(n+1) \\cdot n!}{r! (n-r+1)(n-r)!}$$
$$\\binom{n+1}{r} = \\left(\\frac{n+1}{n-r+1}\\right) \\cdot \\frac{n!}{r! (n-r)!} = \\left(\\frac{n+1}{n+1-r}\\right) \\binom{n}{r}$$

$$\\therefore \\binom{n+1}{r} = \\frac{n+1}{n-r+1} \\binom{n}{r} \\quad \\text{or} \\quad \\frac{\\binom{n+1}{r}}{\\binom{n}{r}} = \\frac{n+1}{n-r+1}$$

#### 2. Pascal's Additive Identity:
From Pascal's identity, replacing $n$ with $n+1$:
$$\\binom{n+1}{r} = \\binom{n}{r} + \\binom{n}{r-1}$$
Subtracting $\\binom{n}{r}$ gives:
$$\\binom{n+1}{r} - \\binom{n}{r} = \\binom{n}{r-1}$$

Both identities formally establish the recurrence and ratio connections between successive combinations.`
  },

  "DM-A4-1141": {
    question: "Find the probability that a hand of five cards in poker contains four cards of one kind.",
    answerMd: `### Probability of Four of a Kind in a 5-Card Poker Hand

#### 1. Total Number of 5-Card Hands:
From a standard deck of 52 cards, total hands is:
$$\\binom{52}{5} = \\frac{52 \\times 51 \\times 50 \\times 49 \\times 48}{5 \\times 4 \\times 3 \\times 2 \\times 1} = 2,598,960$$

#### 2. Favorable Hands (Four of a Kind):
A "Four of a Kind" hand consists of 4 cards of the same rank and 1 fifth card (kicker) of a different rank.
- **Step 1:** Choose 1 rank out of the 13 available ranks (Ace through King) for the four matching cards:
  $$\\binom{13}{1} = 13 \\text{ ways}$$
- **Step 2:** Choose all 4 cards of that chosen rank:
  $$\\binom{4}{4} = 1 \\text{ way}$$
- **Step 3:** Choose the 5th remaining card (kicker) from any of the remaining $52 - 4 = 48$ cards:
  $$\\binom{48}{1} = 48 \\text{ ways}$$

Total favorable hands:
$$n(E) = \\binom{13}{1} \\times \\binom{4}{4} \\times \\binom{48}{1} = 13 \\times 1 \\times 48 = 624$$

#### 3. Probability:
$$P(\\text{Four of a Kind}) = \\frac{n(E)}{n(S)} = \\frac{624}{2,598,960} = \\frac{1}{4165} \\approx 0.0002401 \\quad (\\approx 0.024\\%)$$

**Final Answer:**
$$\\therefore P(\\text{Four of a Kind}) = \\frac{1}{4165} \\approx 2.401 \\times 10^{-4}$$`
  },

  "DM-A4-1143": {
    question: "State the Bayes' theorem.",
    answerMd: `### Statement of Bayes' Theorem

Let $S$ be the sample space and let $A_1, A_2, \\dots, A_k$ be a set of mutually exclusive and exhaustive events (a partition of $S$) such that $P(A_i) > 0$ for each $i = 1, 2, \\dots, k$.
That is:
1. $A_i \\cap A_j = \\emptyset$ for all $i \\ne j$
2. $\\bigcup_{i=1}^k A_i = S$

Let $B$ be any arbitrary event with $P(B) > 0$. Then for any $i \\in \\{1, 2, \\dots, k\\}$, the posterior probability of $A_i$ given that $B$ has occurred is given by:

$$P(A_i \\mid B) = \\frac{P(B \\mid A_i) P(A_i)}{\\sum_{j=1}^{k} P(B \\mid A_j) P(A_j)}$$

#### Components:
- **$P(A_i)$:** Prior probability of hypothesis $A_i$.
- **$P(B \\mid A_i)$:** Likelihood of observing evidence $B$ given $A_i$ is true.
- **$P(B) = \\sum_{j=1}^{k} P(B \\mid A_j) P(A_j)$:** Total probability of event $B$.
- **$P(A_i \\mid B)$:** Posterior probability of hypothesis $A_i$ given evidence $B$.`
  },

  "DM-A4-1145": {
    question: "What is meant by repetition in permutation?",
    answerMd: `### Repetition in Permutations

**Permutation with repetition** refers to the number of ordered arrangements when elements can be selected and reused multiple times, or when some of the elements in the collection are identical (indistinguishable).

There are two primary mathematical cases:

#### Case 1: Selecting $r$ objects from $n$ distinct types with unrestricted replacement
When each of the $r$ positions can be filled by any of the $n$ distinct objects without any restriction:
- Position 1: $n$ choices
- Position 2: $n$ choices
- $\dots$
- Position $r$: $n$ choices
$$\\text{Number of permutations} = n^r$$

*Example:* A 4-digit PIN generated using digits $0-9$:
$$10^4 = 10,000 \\text{ possible PINs}$$

#### Case 2: Permutation of $n$ objects where some are identical
When arranging $n$ total objects where $n_1$ are identical of type 1, $n_2$ are identical of type 2, $\\dots$, $n_k$ are identical of type $k$ (with $n_1 + n_2 + \\dots + n_k = n$):
$$\\text{Total Permutations} = \\frac{n!}{n_1! n_2! \\dots n_k!}$$

*Example:* Arranging the letters of the word **MISSISSIPPI** ($n = 11$: 1 M, 4 I, 4 S, 2 P):
$$\\frac{11!}{1! \\, 4! \\, 4! \\, 2!} = \\frac{39,916,800}{1 \\times 24 \\times 24 \\times 2} = 34,650 \\text{ arrangements}$$`
  },

  "DM-A4-1146": {
    question: "Omit the principle of inclusion and exclusion.",
    answerMd: `### Principle of Inclusion and Exclusion (PIE)

The **Principle of Inclusion and Exclusion** is a fundamental counting technique used to determine the cardinality (size) of the union of multiple non-disjoint (overlapping) sets without over-counting intersections.

#### 1. For Two Finite Sets $A$ and $B$:
$$|A \\cup B| = |A| + |B| - |A \\cap B|$$
*Reason:* The sum $|A| + |B|$ counts elements in the overlap $A \\cap B$ twice, so it must be subtracted once.

#### 2. For Three Finite Sets $A, B, C$:
$$|A \\cup B \\cup C| = |A| + |B| + |C| - (|A \\cap B| + |B \\cap C| + |C \\cap A|) + |A \\cap B \\cap C|$$

#### 3. General Formula for $n$ Sets $A_1, A_2, \\dots, A_n$:
$$\\left|\\bigcup_{i=1}^n A_i\\right| = \\sum_{i=1}^n |A_i| - \\sum_{1 \\le i < j \\le n} |A_i \\cap A_j| + \\sum_{1 \\le i < j < k \\le n} |A_i \\cap A_j \\cap A_k| - \\cdots + (-1)^{n-1} |A_1 \\cap A_2 \\cap \\cdots \\cap A_n|$$

#### Applications:
- Counting integers not divisible by given primes (Euler totient function).
- Calculating derangements (permutations where no element appears in its original position).
- Surjective functions count (onto functions from an $m$-set to an $n$-set).`
  },

  "DM-A4-1148": {
    question: "What is Inclusion-Exclusion principle?",
    answerMd: `### Principle of Inclusion-Exclusion (PIE)

The **Principle of Inclusion-Exclusion** is a combinatorial formula used to find the number of elements in the union of several finite, intersecting sets by alternating the addition of odd-sized intersections and subtraction of even-sized intersections.

#### Mathematical Formulation:
For any collection of $n$ finite sets $A_1, A_2, \\dots, A_n$:
$$\\left| \\bigcup_{i=1}^n A_i \\right| = \\sum_{k=1}^n (-1)^{k-1} \\sum_{1 \\le i_1 < i_2 < \\dots < i_k \\le n} |A_{i_1} \\cap A_{i_2} \\cap \\dots \\cap A_{i_k}|$$

#### Two and Three Sets:
- **Two Sets:** $|A \\cup B| = |A| + |B| - |A \\cap B|$
- **Three Sets:** $|A \\cup B \\cup C| = (|A| + |B| + |C|) - (|A \\cap B| + |B \\cap C| + |A \\cap C|) + |A \\cap B \\cap C|$

#### Concrete Example:
In a class of 50 students, 30 take Math ($M$), 25 take Physics ($P$), and 10 take both.
How many students take at least one subject?
$$|M \\cup P| = |M| + |P| - |M \\cap P| = 30 + 25 - 10 = 45 \\text{ students}$$
Students taking neither = $50 - 45 = 5$.`
  },

  "DM-A4-1149": {
    question: "If P(n,4) = 42 P(n,2) (permutation), find the value of n?",
    answerMd: `### Solve for $n$: $P(n, 4) = 42 P(n, 2)$

#### Given Equation:
$$P(n, 4) = 42 \\cdot P(n, 2) \\quad (n \\ge 4)$$

#### Step 1: Write Permutation Formulas
$$P(n, 4) = \\frac{n!}{(n - 4)!} = n(n - 1)(n - 2)(n - 3)$$
$$P(n, 2) = \\frac{n!}{(n - 2)!} = n(n - 1)$$

#### Step 2: Substitute into Equation
$$n(n - 1)(n - 2)(n - 3) = 42 \\cdot n(n - 1)$$

Since $n \\ge 4$, $n \\ne 0$ and $n \\ne 1$, so we divide both sides by $n(n - 1)$:
$$(n - 2)(n - 3) = 42$$

#### Step 3: Solve the Quadratic Equation
$$n^2 - 5n + 6 = 42$$
$$n^2 - 5n - 36 = 0$$

Factorizing the quadratic equation:
$$(n - 9)(n + 4) = 0$$
$$\\implies n = 9 \\quad \\text{or} \\quad n = -4$$

Since $n$ must be a positive integer ($n \\ge 4$):
$$n = 9$$

#### Step 4: Verification
- LHS: $P(9, 4) = 9 \\times 8 \\times 7 \\times 6 = 3024$
- RHS: $42 \\times P(9, 2) = 42 \\times (9 \\times 8) = 42 \\times 72 = 3024$
- LHS = RHS.

**Final Answer:**
$$\\therefore n = 9$$`
  },

  "DM-A4-1150": {
    question: "How many persons must be chosen in order that at least five of them will have birthdays in the same calendar month?",
    answerMd: `### Application of the Generalized Pigeonhole Principle

#### Given:
- Number of calendar months in a year (pigeonholes): $k = 12$.
- Desired minimum number of persons born in the same month: $m = 5$.

#### Generalized Pigeonhole Principle:
If $N$ objects (persons) are distributed into $k$ boxes (months), then at least one box contains at least:
$$\\lceil N / k \\rceil \\text{ objects}$$

We require:
$$\\left\\lceil \\frac{N}{12} \\right\\rceil \\ge 5$$

#### Worst-Case Analysis:
In the worst possible distribution, every one of the 12 calendar months has exactly $5 - 1 = 4$ persons having birthdays in it.
$$\\text{Worst-case capacity before reaching 5} = 12 \\times (5 - 1) = 12 \\times 4 = 48 \\text{ persons}$$

Adding just **one more person** ($48 + 1 = 49$) guarantees by the Pigeonhole Principle that at least one month must have:
$$4 + 1 = 5 \\text{ birthdays}$$

#### Formula:
$$N = k(m - 1) + 1 = 12(5 - 1) + 1 = 12(4) + 1 = 49$$

**Final Answer:**
$$\\therefore \\text{At least } 49 \\text{ persons must be chosen.}$$`
  },

  "DM-A4-1151": {
    question: "How many ways are there to distribute 10 different books among 15 people if no person is to receive more than 1 book?",
    answerMd: `### Distributing 10 Distinct Books Among 15 People (At Most 1 Book Each)

#### Given:
- Number of distinct books: $k = 10$.
- Number of distinct people: $n = 15$.
- Condition: Each person can receive at most 1 book.

#### Analysis:
Distributing 10 different books to 15 people such that no one gets more than one book is equivalent to choosing 10 people out of 15 and assigning one unique book to each person in an ordered manner.

- Book 1 can be given to any of the 15 people (15 choices).
- Book 2 can be given to any of the remaining 14 people (14 choices).
- $\\dots$
- Book 10 can be given to any of the remaining $15 - 10 + 1 = 6$ people (6 choices).

#### Mathematical Formula:
This is the permutation of 15 people taken 10 at a time:
$$P(15, 10) = \\frac{15!}{(15 - 10)!} = \\frac{15!}{5!} = 15 \\times 14 \\times 13 \\times 12 \\times 11 \\times 10 \\times 9 \\times 8 \\times 7 \\times 6$$

Alternatively:
$$\\text{Ways} = \\binom{15}{10} \\times 10! = \\binom{15}{5} \\times 10!$$

#### Numerical Value:
$$P(15, 10) = 10,897,286,400$$

**Final Answer:**
$$\\therefore \\text{Number of ways} = P(15, 10) = \\frac{15!}{5!} = 10,897,286,400$$`
  },

  "DM-A4-1152": {
    question: "Solve an-6an-1+9an-2=0.",
    answerMd: `### Solve the Recurrence Relation $a_n - 6a_{n-1} + 9a_{n-2} = 0$

#### Given:
$$a_n - 6a_{n-1} + 9a_{n-2} = 0 \\quad (n \\ge 2)$$
This is a second-order linear homogeneous recurrence relation with constant coefficients.

#### Step 1: Characteristic Equation
Assume trial solution $a_n = r^n$ ($r \\ne 0$). Substituting into the recurrence:
$$r^n - 6r^{n-1} + 9r^{n-2} = 0$$
Dividing through by $r^{n-2}$:
$$r^2 - 6r + 9 = 0$$

#### Step 2: Solve for Characteristic Roots
$$(r - 3)^2 = 0 \\implies r_1 = 3, \\, r_2 = 3 \\quad (\\text{repeated real root with multiplicity } 2)$$

#### Step 3: General Solution
For a repeated root $r = 3$ of multiplicity 2, the general solution is:
$$a_n = (c_1 + c_2 n) r^n = (c_1 + c_2 n) 3^n$$
where $c_1$ and $c_2$ are arbitrary constants determined by initial conditions.

**Final Answer:**
$$\\therefore a_n = (c_1 + c_2 n) 3^n$$`
  },

  "DM-A4-1155": {
    question: "Explain Bayes' theorem.",
    answerMd: `### Explanation of Bayes' Theorem

Bayes' Theorem provides a mathematical procedure for updating existing beliefs or probabilities (priors) given new evidence or observations.

#### 1. Formal Formula:
Let $A_1, A_2, \\dots, A_n$ be pairwise disjoint events forming a partition of the sample space $S$, and let $B$ be an observable event with $P(B) > 0$. Then:
$$P(A_i \\mid B) = \\frac{P(B \\mid A_i) P(A_i)}{\\sum_{j=1}^n P(B \\mid A_j) P(A_j)}$$

#### 2. Terminology:
- **Prior Probability $P(A_i)$:** The initial degree of belief in hypothesis $A_i$ before observing event $B$.
- **Likelihood $P(B \\mid A_i)$:** The probability that event $B$ occurs given hypothesis $A_i$ is true.
- **Marginal / Total Probability $P(B)$:** The total probability of observing $B$ across all possible hypotheses:
  $$P(B) = \\sum_{j=1}^n P(B \\mid A_j) P(A_j)$$
- **Posterior Probability $P(A_i \\mid B)$:** The revised probability of hypothesis $A_i$ after observing evidence $B$.

#### 3. Intuitive Example:
- Suppose 1% of a population has a disease ($P(D) = 0.01$).
- A lab test is 95% accurate ($P(T^+ \\mid D) = 0.95$) and has a 5% false positive rate ($P(T^+ \\mid D') = 0.05$).
- If a person tests positive ($T^+$), Bayes' theorem calculates the true posterior probability:
  $$P(D \\mid T^+) = \\frac{0.95 \\times 0.01}{(0.95 \\times 0.01) + (0.05 \\times 0.99)} = \\frac{0.0095}{0.0095 + 0.0495} = \\frac{0.0095}{0.0590} \\approx 16.1\\%$$`
  },

  "DM-B4-1157": {
    question: "Two friends Harish and Kalyan appeared for an exam. Let A be the event that Harish is selected and B is the event that Kalyan is selected. The probability of A is 2/5 and that of B is 3/7. Find the probability that both of them are selected.",
    answerMd: `### Selection Probability of Two Candidates

#### Given:
- Event $A$: Harish is selected $\\implies P(A) = \\frac{2}{5}$
- Event $B$: Kalyan is selected $\\implies P(B) = \\frac{3}{7}$

#### Step 1: Independence of Events
The examination performance and selection of Harish is completely independent of the selection of Kalyan.
Therefore, events $A$ and $B$ are **statistically independent events**:
$$P(A \\cap B) = P(A) \\times P(B)$$

#### Step 2: Calculate Probability That Both Are Selected
$$P(\\text{Both selected}) = P(A \\cap B) = P(A) \\cdot P(B)$$
$$P(A \\cap B) = \\frac{2}{5} \\times \\frac{3}{7} = \\frac{2 \\times 3}{5 \\times 7} = \\frac{6}{35}$$

#### Additional Standard Cases Often Asked:
1. **Neither is selected:**
   $$P(A' \\cap B') = P(A') P(B') = \\left(1 - \\frac{2}{5}\\right)\\left(1 - \\frac{3}{7}\\right) = \\frac{3}{5} \\times \\frac{4}{7} = \\frac{12}{35}$$
2. **At least one is selected:**
   $$P(A \\cup B) = 1 - P(A' \\cap B') = 1 - \\frac{12}{35} = \\frac{23}{35}$$

**Final Answer:**
$$\\therefore P(\\text{Both Harish and Kalyan are selected}) = \\frac{6}{35} \\approx 0.1714$$`
  },

  "DM-B4-1158": {
    question: "What is the coefficient of x³y⁷ in (x + y)^10 and in (2x − 9y)^10?",
    answerMd: `### Finding the Coefficient of $x^3 y^7$

#### General Binomial Theorem:
The general $(r+1)$-th term in the expansion of $(a + b)^n$ is:
$$T_{r+1} = \\binom{n}{r} a^{n-r} b^r$$

Here $n = 10$. To obtain the term with $x^3 y^7$, we set:
$$n - r = 3 \\implies 10 - r = 3 \\implies r = 7$$

---

#### Part 1: In $(x + y)^{10}$
Here $a = x$ and $b = y$.
$$T_{7+1} = T_8 = \\binom{10}{7} x^{10-7} y^7 = \\binom{10}{7} x^3 y^7$$

Calculate $\\binom{10}{7} = \\binom{10}{3}$:
$$\\binom{10}{3} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120$$

$$\\therefore \\text{Coefficient of } x^3 y^7 \\text{ in } (x + y)^{10} = 120$$

---

#### Part 2: In $(2x - 9y)^{10}$
Here $a = 2x$ and $b = -9y$.
$$T_8 = \\binom{10}{7} (2x)^{10-7} (-9y)^7 = \\binom{10}{7} (2x)^3 (-9y)^7$$
$$T_8 = \\binom{10}{3} \\cdot 2^3 \\cdot (-9)^7 \\cdot x^3 y^7$$

Substitute numerical values:
- $\\binom{10}{3} = 120$
- $2^3 = 8$
- $(-9)^7 = -(9^7) = -(4,782,969)$

Calculate total coefficient:
$$\\text{Coeff} = 120 \\times 8 \\times (-4,782,969) = 960 \\times (-4,782,969) = -4,591,650,240$$

**Final Answer:**
1. In $(x + y)^{10}$: $\\mathbf{120}$
2. In $(2x - 9y)^{10}$: $\\mathbf{-4,591,650,240}$`
  },

  "DM-B4-1161": {
    question: "State and Prove Baye's Theorem.",
    answerMd: `### State and Prove Bayes' Theorem

#### Statement:
Let $S$ be a sample space and let $A_1, A_2, \\dots, A_n$ be mutually exclusive and exhaustive events forming a partition of $S$ such that $P(A_i) > 0$ for each $i = 1, 2, \\dots, n$.
Let $B$ be any arbitrary event with $P(B) > 0$. Then for any $k \\in \\{1, 2, \\dots, n\\}$:
$$P(A_k \\mid B) = \\frac{P(B \\mid A_k) P(A_k)}{\\sum_{i=1}^n P(B \\mid A_i) P(A_i)}$$

---

#### Proof:
**Step 1 (Conditional Probability Definition):**
By the definition of conditional probability:
$$P(A_k \\mid B) = \\frac{P(A_k \\cap B)}{P(B)} \\tag{1}$$

**Step 2 (Multiplication Rule of Probability):**
The joint probability can be expressed as:
$$P(A_k \\cap B) = P(B \\mid A_k) P(A_k) \\tag{2}$$

**Step 3 (Theorem of Total Probability):**
Since $A_1, A_2, \\dots, A_n$ form a partition of $S$:
$$S = A_1 \\cup A_2 \\cup \\dots \\cup A_n \\quad \\text{with } A_i \\cap A_j = \\emptyset \\; (i \\ne j)$$

The event $B$ can be written as:
$$B = B \\cap S = B \\cap \\left(\\bigcup_{i=1}^n A_i\\right) = \\bigcup_{i=1}^n (B \\cap A_i)$$

Since events $(B \\cap A_i)$ are pairwise disjoint:
$$P(B) = \\sum_{i=1}^n P(B \\cap A_i)$$
Applying multiplication rule $P(B \\cap A_i) = P(B \\mid A_i) P(A_i)$:
$$P(B) = \\sum_{i=1}^n P(B \\mid A_i) P(A_i) \\tag{3}$$

**Step 4 (Substitution):**
Substituting equations (2) and (3) into equation (1):
$$P(A_k \\mid B) = \\frac{P(B \\mid A_k) P(A_k)}{\\sum_{i=1}^n P(B \\mid A_i) P(A_i)}$$

Hence, Bayes' Theorem is proved.`
  }
};
