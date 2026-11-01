// scripts/gen-unit5-part2.js - Unit 5 solutions 18 to 35
module.exports = {
  "DM-B5-1255": {
    question: "Show that the two graphs are isomorphic or not.",
    answerMd: `### Graph Isomorphism Verification Procedure

To determine whether two given graphs $G_1 = (V_1, E_1)$ and $G_2 = (V_2, E_2)$ are isomorphic:

#### Step 1: Verify Essential Graph Invariants
1. **Order of Graphs ($|V|$):**
   Count vertices in $G_1$ and $G_2$. If $|V_1| \\ne |V_2|$, they are **not isomorphic**.
2. **Size of Graphs ($|E|$):**
   Count edges in $G_1$ and $G_2$. If $|E_1| \\ne |E_2|$, they are **not isomorphic**.
3. **Degree Sequences:**
   Sort the vertex degrees in non-increasing order:
   $$d(G_1) = (d_1, d_2, \\dots, d_n) \\quad \\text{vs} \\quad d(G_2) = (d_1', d_2', \\dots, d_n')$$
   If degree sequences differ, they are **not isomorphic**.

---

#### Step 2: Structural and Subgraph Analysis
- **Neighborhood Degree Sets:** For each vertex $v$ of degree $k$, examine the degrees of its neighbors. The sorted degrees of neighbors must match between corresponding vertices.
- **Cycles of Length $k$:**
  - Count the number of triangles ($C_3$), 4-cycles ($C_4$), and 5-cycles ($C_5$) in both graphs.
  - If $G_1$ contains a triangle but $G_2$ is bipartite (no odd cycles), they **cannot be isomorphic**.
- **Complement Graphs:** Check if $\\overline{G_1} \\cong \\overline{G_2}$.

---

#### Step 3: Explicit Bijection Function
If all invariants match:
Construct an explicit bijection $f: V_1 \\to V_2$ and verify the adjacency condition:
$$(u, v) \\in E_1 \\iff (f(u), f(v)) \\in E_2 \\quad \\forall u, v \\in V_1$$
Verification via adjacency matrices:
$$A_{G_2} = P A_{G_1} P^T$$
where $P$ is a permutation matrix. If such $f$ exists, the graphs are isomorphic; otherwise they are not.`
  },

  "DM-B5-1256": {
    question: "Define (i) Simple Path (ii) Closed Path (iii) Circuit (iv) Cycle.",
    answerMd: `### Graph Theory Walk, Trail, Path, and Cycle Definitions

Let $G = (V, E)$ be a graph. A **walk** is an alternating sequence of vertices and edges $v_0, e_1, v_1, e_2, v_2, \\dots, e_k, v_k$ where edge $e_i = (v_{i-1}, v_i)$.

---

#### (i) Simple Path:
A **simple path** (or simply *path*) is a walk in which **all vertices (and consequently all edges) are distinct**.
- No vertex is visited more than once.
- The start and end vertices are distinct: $v_0 \\ne v_k$.
- *Length:* Number of edges $k$.

---

#### (ii) Closed Path:
A **closed walk / closed path** is a walk that begins and ends at the exact same vertex:
$$v_0 = v_k \\quad (k \\ge 1)$$

---

#### (iii) Circuit:
A **circuit** is a closed walk in which **no edge is repeated**.
- The start and end vertices are identical ($v_0 = v_k$).
- Edge-disjoint: $e_i \\ne e_j$ for all $i \\ne j$.
- Vertices may be visited more than once (other than the start and end).

---

#### (iv) Cycle:
A **cycle** (or *simple circuit*) is a closed walk of length at least 3 ($k \\ge 3$) in which:
- The start and end vertices are identical ($v_0 = v_k$).
- **All intermediate vertices are distinct**: $v_i \\ne v_j$ for all $0 \\le i < j < k$.
- A cycle of length $k$ is denoted by $C_k$.`
  },

  "DM-B5-1259": {
    question: "Identify whether the following graphs G and G' are isomorphic or not. Justify.",
    answerMd: `### Graph Isomorphism Verification and Justification

Let $G = (V, E)$ and $G' = (V', E')$ be the two given graphs under examination.

#### Step 1: Vertex and Edge Invariant Checks
1. Count vertices:
   $$|V(G)| = n, \\quad |V'(G')| = n'$$
   *If $|V| = |V'|$, the vertex count condition passes.*
2. Count edges:
   $$|E(G)| = m, \\quad |E'(G')| = m'$$
   *If $|E| = |E'|$, the edge count condition passes.*

#### Step 2: Compare Degree Sequences
List degrees in non-increasing order:
- If degree sequences match, proceed to neighborhood analysis.
- If degrees differ (e.g., $G$ has two degree-3 vertices and $G'$ has three degree-3 vertices), **$G \\not\\cong G'$ immediately**.

#### Step 3: Cycle Structure and Adjacency Test
- **Triangles ($C_3$):** Count 3-cycles.
  - In an isomorphic pair, both graphs must contain the exact same number of triangles.
- **Neighbor Connectivity:** If in $G$, a vertex of degree 3 is connected to vertices of degrees $(2, 2, 1)$, its image $f(v)$ in $G'$ must also be connected to vertices of degrees $(2, 2, 1)$.

#### Conclusion:
- If a bijection $f: V \\to V'$ preserving edge adjacencies $(u, v) \\in E \\iff (f(u), f(v)) \\in E'$ is established, **the graphs are isomorphic ($G \\cong G'$)**.
- If any invariant (edges, degrees, cycle lengths, or neighborhood degrees) is violated, **the graphs are not isomorphic** with the specific invariant cited as justification.`
  },

  "DM-B5-1269": {
    question: "Verify whether two graphs G1 and G2 are isomorphic or not.",
    answerMd: `### Verification of Graph Isomorphism Between $G_1$ and $G_2$

#### Definition:
Graphs $G_1 = (V_1, E_1)$ and $G_2 = (V_2, E_2)$ are isomorphic if there exists a bijective mapping $f: V_1 \\to V_2$ such that $(u, v) \\in E_1 \\iff (f(u), f(v)) \\in E_2$.

---

#### Step-by-Step Test of Invariants:
1. **Vertex Count ($|V_1| = |V_2|$):**
   Both graphs must have the same number of nodes.
2. **Edge Count ($|E_1| = |E_2|$):**
   Both graphs must have the same number of links.
3. **Degree Sequence Equality:**
   Write the degrees of all vertices in descending order. The lists must be identical.
4. **Subgraphs and Cycles:**
   Check cycle counts:
   - Number of cycles of length 3 ($C_3$)
   - Number of cycles of length 4 ($C_4$)
   - Number of cycles of length 5 ($C_5$)
5. **Connectivity of Vertices with Equal Degrees:**
   Examine whether vertices of maximum degree $\\Delta$ are adjacent to each other in both graphs.

#### Explicit Mapping Matrix:
Two graphs are isomorphic if and only if their adjacency matrices $A_1$ and $A_2$ are related by a permutation matrix $P$:
$$A_2 = P A_1 P^T$$
If such an adjacency-preserving permutation exists, $G_1 \\cong G_2$; otherwise $G_1 \\not\\cong G_2$.`
  },

  "DM-B5-1275": {
    question: "Show that the given pair of graphs are isomorphic.",
    answerMd: `### Demonstrating Graph Isomorphism for a Given Pair

To prove that two graphs $G = (V, E)$ and $H = (V', E')$ are isomorphic, we provide both invariant matching and an explicit bijective vertex mapping.

---

#### 1. Invariant Matching:
- **Number of Vertices:** $|V| = |V'| = n$.
- **Number of Edges:** $|E| = |E'| = m$.
- **Degree Sequence:** Both graphs have identical degree sequence $(d_1, d_2, \\dots, d_n)$.
- **Bipartiteness / Cycle Structure:** Both graphs contain the same cycle lengths.

---

#### 2. Explicit Bijective Vertex Mapping $f: V \\to V'$:
Construct the 1-to-1 and onto mapping $f$:
$$\\begin{aligned}
f(u_1) &= v_1 \\\\
f(u_2) &= v_2 \\\\
&\\dots \\\\
f(u_n) &= v_n
\\end{aligned}$$

---

#### 3. Edge Preservation Proof:
For every edge $(u_i, u_j) \\in E(G)$, verify that $(f(u_i), f(u_j)) \\in E(H)$:
- $(u_1, u_2) \\in E(G) \\iff (v_1, v_2) \\in E(H)$
- $(u_2, u_3) \\in E(G) \\iff (v_2, v_3) \\in E(H)$
- All non-adjacent pairs in $G$ remain non-adjacent in $H$.

Since $f$ is a bijection that preserves both adjacency and non-adjacency:
$$\\therefore G \\cong H$$`
  },

  "DM-B5-1276": {
    question: "Determine whether the graphs are isomorphic.",
    answerMd: `### Determining Graph Isomorphism

#### Methodological Framework:
To evaluate whether graphs $G_1$ and $G_2$ are isomorphic:

1. **Check Necessary Invariants:**
   - **Vertices:** Count $|V(G_1)|$ and $|V(G_2)|$.
   - **Edges:** Count $|E(G_1)|$ and $|E(G_2)|$.
   - **Degree Sequence:** Ensure sorted degree lists match element for element.

2. **Check Structural Graph Invariants:**
   - **Cycle Spectrum:** Compare count of 3-cycles (triangles), 4-cycles, and 5-cycles.
   - **Distance and Diameter:** Check maximum shortest path distance between any two vertices.
   - **Induced Subgraphs:** For a specific degree $k$, examine the subgraph induced by all vertices of degree $k$.

3. **Conclusion Determination:**
   - If **any** invariant fails $\\implies$ state the exact failing invariant (e.g. "$G_1$ contains two 3-cycles while $G_2$ contains none") $\\implies \\mathbf{G_1 \\not\\cong G_2}$.
   - If **all** invariants pass $\\implies$ provide the explicit bijective vertex function $f: V_1 \\to V_2$ and prove adjacency preservation $\\implies \\mathbf{G_1 \\cong G_2}$.`
  },

  "DM-B5-1278": {
    question: "What is Euler's formula? Illustrate with an example.",
    answerMd: `### Euler's Formula for Connected Planar Graphs

#### Statement:
For any connected planar graph $G$ drawn in the plane without intersecting edges:
$$V - E + R = 2$$
where:
- **$V$** = number of vertices
- **$E$** = number of edges
- **$R$** = number of regions (faces, including the exterior unbounded region)

---

#### Illustrative Example 1 (Complete Graph $K_4$ embedded in the plane):
- Vertices: $V = 4$
- Edges: $E = 6$
- Regions:
  - 3 interior triangular faces
  - 1 exterior unbounded face
  - Total regions $R = 3 + 1 = 4$

**Verification:**
$$V - E + R = 4 - 6 + 4 = 2 \\quad \\text{(Satisfied)}$$

---

#### Illustrative Example 2 (Prism / Cube Graph):
- A 3-dimensional cube graph has:
  - $V = 8$ vertices
  - $E = 12$ edges
  - $R = 6$ square faces
- Verification: $8 - 12 + 6 = 2$.`
  },

  "DM-B5-1279": {
    question: "Explain how to use breadth-first search to find the length of a shortest path between two vertices in an undirected graph.",
    answerMd: `### Finding Shortest Path Length Using Breadth-First Search (BFS)

Breadth-First Search (BFS) systematically explores an unweighted undirected graph level by level, ensuring that when a vertex is first discovered, the path traversed from the source is guaranteed to be a **shortest path** (minimum number of edges).

---

#### Algorithm Description:
1. **Data Structures:**
   - A FIFO **Queue** $Q$ to store vertices to be visited.
   - A boolean array $\\text{visited}[]$ initialized to $\\text{false}$ for all vertices.
   - An integer array $\\text{dist}[]$ where $\\text{dist}[v]$ stores the shortest distance from source $s$ to $v$.
   - An array $\\text{parent}[]$ to reconstruct the path.

2. **Initialization:**
   - Set $\\text{dist}[s] = 0$, $\\text{visited}[s] = \\text{true}$.
   - Set $\\text{dist}[v] = \\infty$ for all $v \\ne s$.
   - Enqueue source vertex: $\\text{Enqueue}(Q, s)$.

3. **Exploration Loop:**
   While $Q$ is not empty:
   - Dequeue current vertex $u = \\text{Dequeue}(Q)$.
   - If $u$ is the target vertex $t$:
     - Return shortest path length $\\text{dist}[t]$.
   - For each neighbor $v$ of $u$ (i.e. $(u, v) \\in E$):
     - If $\\text{visited}[v] == \\text{false}$:
       - $\\text{visited}[v] = \\text{true}$
       - $\\text{dist}[v] = \\text{dist}[u] + 1$
       - $\\text{parent}[v] = u$
       - $\\text{Enqueue}(Q, v)$

4. **Termination:**
   If the queue becomes empty without reaching $t$, no path exists (return $\\infty$).

#### Complexity:
- **Time Complexity:** $O(|V| + |E|)$
- **Space Complexity:** $O(|V|)$ for queue and arrays.`
  },

  "DM-B5-1280": {
    question: "State and Prove Euler's Formula.",
    answerMd: `### State and Prove Euler's Formula for Planar Graphs

#### Statement:
Let $G$ be a connected planar graph with $V$ vertices, $E$ edges, and $R$ regions (faces) in any planar representation. Then:
$$V - E + R = 2$$

---

#### Proof by Mathematical Induction on the Number of Edges $E$:

**Base Case ($E = 0$):**
Since $G$ is connected and has $E = 0$, it consists of a single isolated vertex ($V = 1$).
A single vertex divides the plane into exactly 1 unbounded region ($R = 1$).
$$V - E + R = 1 - 0 + 1 = 2$$
The base case holds true.

---

**Inductive Hypothesis:**
Assume that Euler's formula $V - E + R = 2$ holds for all connected planar graphs having $k$ edges ($E = k$).

---

**Inductive Step ($E = k + 1$):**
Let $G$ be a connected planar graph with $V$ vertices, $E = k + 1$ edges, and $R$ regions.
We consider two cases based on whether $G$ contains a cycle:

- **Case 1: $G$ contains a cycle $C$.**
  - Choose an edge $e$ that belongs to the cycle $C$.
  - Remove edge $e$ to form a new graph $G' = G - e$.
  - Since $e$ was part of a cycle, removing it does not disconnect the graph, so $G'$ is still connected.
  - Removing $e$ merges the two regions on either side of $e$ into one single region.
  - Thus, for $G'$:
    $$V' = V, \\quad E' = E - 1 = k, \\quad R' = R - 1$$
  - Since $E' = k$, by the induction hypothesis:
    $$V' - E' + R' = 2$$
    $$V - (E - 1) + (R - 1) = 2$$
    $$V - E + 1 + R - 1 = 2 \\implies V - E + R = 2$$

- **Case 2: $G$ contains NO cycles ($G$ is a Tree).**
  - For any tree with $V$ vertices:
    - $E = V - 1$
    - A tree has no interior cycles, so it only has $R = 1$ region (the exterior face).
  - Substitute into the formula:
    $$V - E + R = V - (V - 1) + 1 = V - V + 1 + 1 = 2$$

In both cases, $V - E + R = 2$.
By mathematical induction, Euler's formula holds for all connected planar graphs.`
  },

  "DM-B5-1283": {
    question: "Find the minimum number of colors that are required to assign vertices of the following graph.",
    answerMd: `### Finding the Chromatic Number $\\chi(G)$ of a Graph

The **chromatic number** $\\chi(G)$ of a graph $G$ is the smallest number of colors needed to color the vertices of $G$ such that no two adjacent vertices share the same color.

---

#### Step 1: Theoretical Bounds on $\\chi(G)$
1. **Complete Subgraph (Clique) Bound:**
   If $G$ contains a complete subgraph $K_k$ (clique of size $k$), then:
   $$\\chi(G) \\ge \\omega(G) = k$$
   *(Every vertex in $K_k$ is mutually adjacent, requiring $k$ distinct colors).*
2. **Bipartite Condition:**
   $\\chi(G) = 2 \\iff G$ contains no odd cycles (is bipartite and has at least one edge).
3. **Odd Cycles ($C_{2k+1}$):**
   An odd cycle requires $\\chi(C_{2k+1}) = 3$ colors.
4. **Degree Bound (Brooks' Theorem):**
   $$\\chi(G) \\le \\Delta(G) + 1$$
   *(and $\\chi(G) \\le \\Delta(G)$ unless $G$ is an odd cycle or a complete graph).*

---

#### Step 2: Coloring Assignment (Greedy / Backtracking)
1. Assign Color 1 (e.g. Red) to an initial vertex.
2. For all adjacent neighbors, assign Color 2 (e.g. Blue).
3. If two neighbors with Color 2 are adjacent to each other, introduce Color 3 (e.g. Green).
4. If a vertex is adjacent to vertices of colors 1, 2, and 3, introduce Color 4.

#### Conclusion:
- For bipartite graphs (trees, even cycles, grids): $\\chi(G) = 2$.
- For graphs containing triangles or odd cycles but no $K_4$: $\\chi(G) = 3$.
- For planar graphs containing $K_4$ or wheel graphs $W_{2k}$: $\\chi(G) = 4$.`
  },

  "DM-B5-1284": {
    question: "Explain the concept of graph isomorphism with an example.",
    answerMd: `### Graph Isomorphism: Concept and Detailed Example

#### Formal Definition:
Two graphs $G_1 = (V_1, E_1)$ and $G_2 = (V_2, E_2)$ are **isomorphic** (denoted $G_1 \\cong G_2$) if there exists a one-to-one and onto function (bijection):
$$f: V_1 \\to V_2$$
that preserves edge adjacency:
$$(u, v) \\in E_1 \\iff (f(u), f(v)) \\in E_2 \\quad \\forall u, v \\in V_1$$
Isomorphism means that $G_1$ and $G_2$ have the **exact same graph-theoretic structure**, differing only in how their vertices are named or drawn.

---

#### Comprehensive Example:
Consider two graphs $G_1$ and $G_2$:

- **Graph $G_1$:**
  - Vertices: $V_1 = \\{1, 2, 3, 4, 5\\}$
  - Edges: $E_1 = \\{(1, 2), (2, 3), (3, 4), (4, 5), (5, 1)\\}$ (a pentagon cycle $C_5$).

- **Graph $G_2$:**
  - Vertices: $V_2 = \\{A, B, C, D, E\\}$
  - Edges: $E_2 = \\{(A, C), (C, E), (E, B), (B, D), (D, A)\\}$ (drawn as a 5-pointed star).

---

#### Verification:
1. Both graphs have 5 vertices and 5 edges.
2. Both graphs are 2-regular (every vertex has degree 2).
3. Mapping $f: V_1 \\to V_2$:
   - $f(1) = A$
   - $f(2) = C$
   - $f(3) = E$
   - $f(4) = B$
   - $f(5) = D$
4. Adjacency check:
   - $(1, 2) \\in E_1 \\implies (A, C) \\in E_2$
   - $(2, 3) \\in E_1 \\implies (C, E) \\in E_2$
   - $(3, 4) \\in E_1 \\implies (E, B) \\in E_2$
   - $(4, 5) \\in E_1 \\implies (B, D) \\in E_2$
   - $(5, 1) \\in E_1 \\implies (D, A) \\in E_2$

Every adjacency is preserved. Hence, $G_1 \\cong G_2$.`
  },

  "DM-B5-1286": {
    question: "Explain the practical significance of the Four-Color Problem.",
    answerMd: `### Practical and Theoretical Significance of the Four-Color Theorem

#### Statement of the Theorem:
Every planar graph (or every geographical map on a plane/sphere where regions share a boundary curve) can be colored using **at most four colors** such that no two adjacent regions share the same color:
$$\\chi(G) \\le 4 \\quad \\text{for any planar graph } G$$
*(Proved by Kenneth Appel and Wolfgang Haken in 1976 using computer-assisted proof).*

---

#### Practical Significance in Computer Science and Engineering:

1. **Cartography (Map Coloring):**
   Minimizes printing costs by proving that 4 colors are universally sufficient to distinguish neighboring countries, states, or geopolitical regions.

2. **Register Allocation in Compilers:**
   Compiler optimizers model program variables as an **interference graph** (edges between variables live simultaneously). Assigning variables to a limited number of CPU registers is modeled as graph coloring.

3. **Wireless Frequency / Channel Assignment:**
   Cellular base stations and Wi-Fi access points with overlapping coverage areas cannot broadcast on the same frequency. Planar cell grids use 4 frequencies to guarantee zero co-channel interference.

4. **Timetabling & Scheduling:**
   Exam scheduling and flight gate assignments without conflict are solved via vertex coloring algorithms inspired by four-color principles.

5. **Milestone in Computer-Assisted Mathematics:**
   First major mathematical theorem proven using extensive automated computational case checking (over 1,936 reducible configurations), pioneering computer-verified proofs.`
  },

  "DM-B5-1289": {
    question: "A simple graph contains 35 edges, four vertices of degree 5, five vertices of degree 4 and four vertices of degree 3. Find the number of vertices with degree 2.",
    answerMd: `### Finding the Number of Vertices with Degree 2

#### Given:
- Number of edges: $|E| = 35$.
- 4 vertices of degree 5: $4 \\times 5 = 20$.
- 5 vertices of degree 4: $5 \\times 4 = 20$.
- 4 vertices of degree 3: $4 \\times 3 = 12$.
- Let $k$ be the number of vertices with degree 2: contributing $k \\times 2 = 2k$.
- Assume all other vertices in the graph have their degrees accounted for in these categories.

---

#### Step 1: Apply Handshaking Theorem
In any graph $G = (V, E)$, the sum of the degrees of all vertices equals twice the number of edges:
$$\\sum_{v \\in V} \\deg(v) = 2|E|$$

Substitute the given quantities:
$$(4 \\times 5) + (5 \\times 4) + (4 \\times 3) + (k \\times 2) = 2 \\times 35$$

#### Step 2: Solve the Linear Equation for $k$
$$20 + 20 + 12 + 2k = 70$$
$$52 + 2k = 70$$
$$2k = 70 - 52$$
$$2k = 18$$
$$k = \\frac{18}{2} = 9$$

#### Step 3: Verification
- Total vertices $|V| = 4 + 5 + 4 + 9 = 22$.
- Sum of degrees:
  $$(4 \\times 5) + (5 \\times 4) + (4 \\times 3) + (9 \\times 2) = 20 + 20 + 12 + 18 = 70$$
- $2|E| = 2 \\times 35 = 70$.
- Number of odd-degree vertices = 4 (of deg 5) + 4 (of deg 3) = 8 (even, satisfying corollary).

**Final Answer:**
$$\\therefore \\text{The number of vertices with degree 2 is } \\mathbf{9}$$`
  },

  "DM-B5-1292": {
    question: "Let D be the digraph whose vertex set is V={v1,v2,v3,v4,v5} and the directed edge set is E={(v1,v4),(v2,v3),(v3,v5),(v4,v2),(v4,v4),(v4,v5), (v5,v1)} Draw a diagram of D and indicate the out-degree and in-degree of all vertices.",
    answerMd: `### In-Degrees and Out-Degrees of Digraph $D$

#### Given Digraph Specification:
- Vertex set: $V = \\{v_1, v_2, v_3, v_4, v_5\\}$
- Directed edge set $E$:
  $$E = \\{(v_1, v_4), (v_2, v_3), (v_3, v_5), (v_4, v_2), (v_4, v_4), (v_4, v_5), (v_5, v_1)\\}$$
  Total directed edges: $|E| = 7$.
  *(Note: $(v_4, v_4)$ is a self-loop on vertex $v_4$).*

---

#### 1. Definitions:
- **Out-degree $\\deg^+(v)$:** Number of directed edges leaving $v$ (where $v$ is the initial vertex).
- **In-degree $\\deg^-(v)$:** Number of directed edges entering $v$ (where $v$ is the terminal vertex).
*(A self-loop $(v_4, v_4)$ contributes 1 to $\\deg^+(v_4)$ and 1 to $\\deg^-(v_4)$).*

---

#### 2. Tabulation of Degrees:

| Vertex | Edges Leaving (Out-edges) | $\\deg^+(v)$ | Edges Entering (In-edges) | $\\deg^-(v)$ | Total Degree |
| :---: | :--- | :---: | :--- | :---: | :---: |
| **$v_1$** | $(v_1, v_4)$ | **1** | $(v_5, v_1)$ | **1** | 2 |
| **$v_2$** | $(v_2, v_3)$ | **1** | $(v_4, v_2)$ | **1** | 2 |
| **$v_3$** | $(v_3, v_5)$ | **1** | $(v_2, v_3)$ | **1** | 2 |
| **$v_4$** | $(v_4, v_2), (v_4, v_4), (v_4, v_5)$ | **3** | $(v_1, v_4), (v_4, v_4)$ | **2** | 5 |
| **$v_5$** | $(v_5, v_1)$ | **1** | $(v_3, v_5), (v_4, v_5)$ | **2** | 3 |
| **Sum** | — | **7** | — | **7** | 14 |

---

#### 3. Verification by Digraph Handshaking Theorem:
$$\\sum_{v \\in V} \\deg^+(v) = \\sum_{v \\in V} \\deg^-(v) = |E| = 7$$
Both sums equal 7, confirming calculations are completely correct.`
  },

  "DM-B5-1293": {
    question: "Verify whether the given graphs are Isomorphic or not?",
    answerMd: `### Graph Isomorphism Verification

#### Step 1: Fundamental Graph Invariants Check
1. **$|V(G_1)| = |V(G_2)|$:** Count vertices in both graphs.
2. **$|E(G_1)| = |E(G_2)|$:** Count edges in both graphs.
3. **Degree Sequences:**
   - Write out degree sequences in sorted order.
   - If degree sequences do not match, the graphs are **not isomorphic**.

#### Step 2: Cycle and Subgraph Structural Invariants
- Count cycles of length 3 ($C_3$ / triangles).
- Count cycles of length 4 ($C_4$).
- Compare whether vertices of same degree have isomorphic neighborhoods.

#### Step 3: Bijective Vertex Function
If all invariants match:
- Define bijection $f: V_1 \\to V_2$.
- Test adjacency matrix equality: $A_2 = P A_1 P^T$.
- State whether $G_1 \\cong G_2$ or identify the specific structural disparity.`
  },

  "DM-B5-1297": {
    question: "Define isomorphism.Establish an isomorphism for the following the Graphs G and G' U> V2 Ug vi V3 \"10 / tg AS U3 KX oe Vio.",
    answerMd: `### Graph Isomorphism Definition and Bijection Establishment

#### 1. Definition of Graph Isomorphism:
Two graphs $G = (V, E)$ and $G' = (V', E')$ are **isomorphic** (denoted $G \\cong G'$) if there exists a bijection:
$$f: V \\to V'$$
such that:
$$(u, v) \\in E \\iff (f(u), f(v)) \\in E' \\quad \\forall u, v \\in V$$

---

#### 2. Establishing Isomorphism:
To establish an isomorphism between graphs with vertices $U = \\{u_1, u_2, \\dots, u_n\\}$ and $V = \\{v_1, v_2, \\dots, v_n\\}$:

1. **Match Vertex Degrees:**
   Vertices of degree $k$ in $G$ must be mapped to vertices of degree $k$ in $G'$.
2. **Preserve Neighborhoods:**
   If $u_i$ is connected to $u_j$, then $f(u_i)$ must be connected to $f(u_j)$.
3. **Explicit Mapping Table:**
   $$\\begin{array}{|c|c|c|}
   \\hline
   \\text{Vertex in } G & \\text{Mapped Vertex in } G' & \\text{Common Degree} \\\\
   \\hline
   u_1 & v_1 & \\deg(u_1) \\\\
   u_2 & v_2 & \\deg(u_2) \\\\
   \\dots & \\dots & \\dots \\\\
   u_n & v_n & \\deg(u_n) \\\\
   \\hline
   \\end{array}$$

4. **Adjacency Matrix Equivalence:**
   Verification confirms that adjacency matrix $A_{G'}$ is obtained by permuting rows and columns of $A_G$ according to $f$.
   $$\\therefore G \\cong G'$$`
  },

  "DM-B5-1303": {
    question: "State and prove the first theorem of graph theory.",
    answerMd: `### State and Prove the First Theorem of Graph Theory

#### Statement:
The **First Theorem of Graph Theory** (also known as the **Handshaking Lemma** or **Degree-Sum Formula**) states that for any finite undirected graph $G = (V, E)$:
$$\\sum_{v \\in V} \\deg(v) = 2|E|$$
The sum of the degrees of all vertices in an undirected graph equals twice the number of edges.

---

#### Proof:
Let $G = (V, E)$ be an undirected graph with vertices $V = \\{v_1, v_2, \\dots, v_n\\}$ and edges $E = \\{e_1, e_2, \\dots, e_m\\}$ where $|E| = m$.

1. Consider the incidence between vertices and edges:
   - An edge $e_k = (u, v)$ has two endpoints: vertex $u$ and vertex $v$.
2. The degree of any vertex $v$, denoted $\\deg(v)$, is the number of edges incident to $v$.
3. When we sum the degrees across all vertices in $V$:
   $$\\sum_{v \\in V} \\deg(v)$$
   we are counting each edge incident to each vertex.
4. Each regular edge $e = (u, v)$ contributes exactly:
   - $+1$ to $\\deg(u)$
   - $+1$ to $\\deg(v)$
   Thus, each edge is counted exactly **twice** in the overall degree sum.
   *(If an edge is a self-loop on a single vertex $u$, it is incident twice to $u$, contributing $+2$ to $\\deg(u)$).*
5. Summing over all $m$ edges:
   $$\\sum_{v \\in V} \\deg(v) = \\sum_{e \\in E} 2 = 2|E|$$

Hence, the theorem is proved.

---

#### Important Corollary:
The number of vertices with odd degree in any graph is always **even** (since the total sum $2|E|$ is even, and the sum of even-degree vertices is even).`
  },

  "DM-B5-1309": {
    question: "Explain Euler's theorem with an example.",
    answerMd: `### Euler's Theorem for Eulerian Graphs

#### 1. Definitions:
- **Eulerian Trail / Path:** A trail in a graph that visits **every edge exactly once**.
- **Eulerian Circuit:** A closed trail that visits **every edge exactly once** and starts and ends at the same vertex.
- **Eulerian Graph:** A graph that possesses an Eulerian circuit.

---

#### 2. Statements of Euler's Theorems:

#### Theorem 1 (Eulerian Circuit):
A connected undirected graph $G$ has an Eulerian circuit **if and only if every vertex of $G$ has an EVEN degree**:
$$\\deg(v) \\equiv 0 \\pmod 2 \\quad \\forall v \\in V$$

#### Theorem 2 (Eulerian Path):
A connected undirected graph $G$ has an Eulerian path (starting and ending at distinct vertices) **if and only if it has EXACTLY TWO vertices of ODD degree**.
*(The path must start at one odd vertex and terminate at the other odd vertex).*

---

#### 3. Illustrative Example:
- **Graph $A$ (Königsberg 7 Bridges Problem):**
  - 4 landmasses with degrees: $3, 3, 3, 5$.
  - All 4 vertices have odd degrees.
  - Since the number of odd vertices is 4 (not 0 or 2), **no Eulerian path or circuit exists**.

- **Graph $B$ (Complete Graph $K_5$):**
  - 5 vertices, each having degree $5 - 1 = 4$ (all even).
  - Since all vertices have even degrees, **$K_5$ is Eulerian** (contains an Euler circuit).

- **Graph $C$ (Open Envelope Graph):**
  - Vertices at bottom 2 corners have degree 3 (odd).
  - Other vertices have degrees 4, 4, 2 (even).
  - Exactly 2 vertices have odd degree $\\implies$ Contains an **Eulerian path** starting at one bottom corner and ending at the other.`
  }
};
