// scripts/gen-unit5-part1.js - Unit 5 solutions 1 to 17
module.exports = {
  "DM-A5-1222": {
    question: "Explain null graph?",
    answerMd: `### Definition of a Null Graph (Empty Graph)

A **null graph** (or *totally disconnected graph* / *empty graph*), denoted by $N_n$, is a graph consisting of $n$ vertices and **no edges**.
Formally:
$$G = (V, E) \\quad \\text{where } |V| = n \\ge 0 \\text{ and } E = \\emptyset \\; (|E| = 0)$$

#### Key Properties:
1. **Degree of Vertices:** Every vertex in a null graph is an **isolated vertex** with degree 0:
   $$\\deg(v) = 0 \\quad \\forall v \\in V$$
2. **Regularity:** A null graph is 0-regular ($r = 0$).
3. **Bipartite & Planar:** A null graph is trivially bipartite, planar, and contains no cycles.
4. **Adjacency Matrix:** The adjacency matrix of a null graph is the $n \\times n$ **zero matrix** ($A = [0]_{n \\times n}$).
5. **Complement:** The complement of a null graph $\\overline{N_n}$ is the **complete graph** $K_n$.

#### Example:
$N_4$ has 4 vertices $\\{v_1, v_2, v_3, v_4\\}$ with no connecting lines between any pair.`
  },

  "DM-A5-1223": {
    question: "Define order and size of a Graph.",
    answerMd: `### Order and Size of a Graph

Let $G = (V, E)$ be a finite graph, where $V$ represents the set of vertices (nodes) and $E$ represents the set of edges (links).

#### 1. Order of a Graph:
The **order** of a graph $G$, denoted by $n(G)$ or $|V|$, is the **total number of vertices** in the graph:
$$\\text{Order} = |V|$$

#### 2. Size of a Graph:
The **size** of a graph $G$, denoted by $m(G)$ or $|E|$, is the **total number of edges** in the graph:
$$\\text{Size} = |E|$$

#### Concrete Example:
Consider a cycle graph $C_5$:
- Vertices: $V = \\{v_1, v_2, v_3, v_4, v_5\\} \\implies |V| = 5$
- Edges: $E = \\{(v_1, v_2), (v_2, v_3), (v_3, v_4), (v_4, v_5), (v_5, v_1)\\} \\implies |E| = 5$
- **Order** = 5, **Size** = 5.

For a complete graph $K_n$:
- **Order** = $n$
- **Size** = $\\binom{n}{2} = \\frac{n(n - 1)}{2}$`
  },

  "DM-A5-1225": {
    question: "Define subgraphs with suitable examples.",
    answerMd: `### Definition of Subgraphs

A graph $H = (V_H, E_H)$ is said to be a **subgraph** of a graph $G = (V_G, E_G)$, denoted by $H \\subseteq G$, if:
1. $V_H \\subseteq V_G$ (the vertex set of $H$ is a subset of $V_G$).
2. $E_H \\subseteq E_G$ (the edge set of $H$ is a subset of $E_G$).
3. Every edge $e = (u, v) \\in E_H$ has both endpoints $u, v \\in V_H$.

---

#### Types of Subgraphs:
1. **Spanning Subgraph:**
   A subgraph $H$ that contains **all** vertices of $G$ ($V_H = V_G$).
   *Example:* A spanning tree of a connected graph.

2. **Induced Subgraph $G[S]$:**
   A subgraph induced by a subset of vertices $S \\subseteq V_G$, consisting of $S$ and **all edges** of $G$ whose endpoints both belong to $S$.

---

#### Example:
Let $G = K_4$ with vertices $\\{A, B, C, D\\}$ and 6 edges.
- An induced subgraph $G[\\{A, B, C\\}]$ forms a triangle ($K_3$ or $C_3$) with 3 vertices and 3 edges.
- A path $P_4: A - B - C - D$ with 4 vertices and 3 edges is a **spanning subgraph** of $K_4$.`
  },

  "DM-A5-1227": {
    question: "Define eulers formula.",
    answerMd: `### Euler's Formula for Planar Graphs

**Euler's Formula** states that for any connected planar graph drawn in the plane without intersecting edges:

$$V - E + R = 2$$

where:
- **$V$** = number of vertices (nodes)
- **$E$** = number of edges (links)
- **$R$** = number of regions (faces, including the exterior/unbounded face)

#### Necessary Planarity Conditions (Corollaries):
For any simple connected planar graph with $V \\ge 3$:
1. $E \\le 3V - 6$
2. If the graph is bipartite or triangle-free: $E \\le 2V - 4$

#### Example (Cube Graph $Q_3$):
- Vertices $V = 8$
- Edges $E = 12$
- Regions $R = 6$ (6 square faces)
- Verification: $V - E + R = 8 - 12 + 6 = 2$. (Satisfied)`
  },

  "DM-A5-1228": {
    question: "Is there a simple graph with degree sequence (1,1,3,3,3,4,6,7)?",
    answerMd: `### Check if $(1, 1, 3, 3, 3, 4, 6, 7)$ Can Be a Simple Graph Degree Sequence

#### Step 1: Count Vertices
The given sequence has $n = 8$ degrees:
$$d = (7, 6, 4, 3, 3, 3, 1, 1)$$

#### Step 2: Check Maximum Degree Constraint
In a **simple graph** with $n = 8$ vertices (no self-loops, no parallel edges), the maximum possible degree of any vertex is:
$$\\Delta \\le n - 1 = 8 - 1 = 7$$
Here $\\Delta = 7$, which means the vertex of degree 7 must connect to **all other 7 vertices** in the graph.

#### Step 3: Check Minimum Degree Contradiction
- If a vertex $v_{\\text{max}}$ connects to all other 7 vertices, then **every vertex** in the graph must have an edge incident to $v_{\\text{max}}$.
- In particular, every vertex must have degree at least 1: $\\deg(v) \\ge 1$.
- Furthermore, vertex of degree 6 connects to 6 of the remaining vertices, which increases vertex degrees further.

#### Step 4: Apply the Havel-Hakimi Theorem
Sort sequence in descending order:
$$S_0 = (7, 6, 4, 3, 3, 3, 1, 1)$$

Remove the first term $d_1 = 7$ and subtract 1 from the next 7 terms:
$$S_1 = (6 - 1, \\, 4 - 1, \\, 3 - 1, \\, 3 - 1, \\, 3 - 1, \\, 1 - 1, \\, 1 - 1)$$
$$S_1 = (5, 3, 2, 2, 2, 0, 0)$$

Remove the first term $d_1 = 5$ and subtract 1 from the next 5 terms:
$$S_2 = (3 - 1, \\, 2 - 1, \\, 2 - 1, \\, 2 - 1, \\, 0 - 1, \\, 0)$$
$$S_2 = (2, 1, 1, 1, -1, 0)$$

Notice that $S_2$ contains a **negative degree ($-1$)**, which is mathematically impossible for any graph.

**Conclusion:**
$$\\therefore \\text{No, there is NO simple graph with degree sequence } (1, 1, 3, 3, 3, 4, 6, 7).$$`
  },

  "DM-A5-1230": {
    question: "What do you mean by isomorphism? Give examples of isomorphic graphs.",
    answerMd: `### Graph Isomorphism

Two simple graphs $G_1 = (V_1, E_1)$ and $G_2 = (V_2, E_2)$ are called **isomorphic** (written $G_1 \\cong G_2$) if there exists a bijection (one-to-one and onto mapping):
$$f: V_1 \\to V_2$$
such that for all $u, v \\in V_1$:
$$(u, v) \\in E_1 \\iff (f(u), f(v)) \\in E_2$$
That is, $f$ preserves adjacency and non-adjacency between vertices.

---

#### Necessary Invariant Conditions for Isomorphism:
1. $|V_1| = |V_2|$ (same number of vertices)
2. $|E_1| = |E_2|$ (same number of edges)
3. Both graphs have the exact same **degree sequence**.
4. Both graphs have the same cycle structures (number and lengths of cycles).

---

#### Concrete Example:
- **Graph $G_1$:** A 4-cycle drawn as a square with vertices $\\{1, 2, 3, 4\\}$ and edges $\\{(1,2), (2,3), (3,4), (4,1)\\}$.
- **Graph $G_2$:** An hourglass/crossed diamond with vertices $\\{a, b, c, d\\}$ and edges $\\{(a,c), (c,b), (b,d), (d,a)\\}$.

Both graphs have:
- 4 vertices, 4 edges
- Every vertex has degree 2
- Both form a simple closed cycle of length 4 ($C_4$).
- Isomorphism bijection: $f(1) = a, f(2) = c, f(3) = b, f(4) = d$.
$$\\therefore G_1 \\cong G_2$$`
  },

  "DM-A5-1232": {
    question: "What is complete graph and give any two examples.",
    answerMd: `### Complete Graph ($K_n$)

A **complete graph**, denoted by $K_n$, is a simple undirected graph in which **every pair of distinct vertices is connected by a unique edge**.
That is:
$$\\forall u, v \\in V \\; (u \\ne v) \\implies (u, v) \\in E$$

#### Key Formulas:
- Number of vertices (Order): $n$
- Total number of edges (Size):
  $$|E| = \\binom{n}{2} = \\frac{n(n - 1)}{2}$$
- Degree of every vertex: $\\deg(v) = n - 1$ (it is $(n-1)$-regular).

---

#### Two Examples:
1. **$K_3$ (Triangle Graph):**
   - Vertices: 3
   - Edges: $\\frac{3 \\times 2}{2} = 3$ edges
   - Every vertex has degree $3 - 1 = 2$.
   - Graph structure: A simple closed triangle with all 3 vertices pairwise connected.

2. **$K_4$ (Complete Graph on 4 Vertices):**
   - Vertices: 4
   - Edges: $\\frac{4 \\times 3}{2} = 6$ edges
   - Every vertex has degree $4 - 1 = 3$.
   - Graph structure: A tetrahedron or square with both internal diagonals drawn.`
  },

  "DM-A5-1234": {
    question: "Name and Draw the following Graphs. Ks, Cs, Ws, K3.3,",
    answerMd: `### Structural Specifications and Descriptions of $K_5, C_5, W_5, K_{3,3}$

#### 1. $K_5$ (Complete Graph on 5 Vertices):
- **Vertices:** $V = \\{v_1, v_2, v_3, v_4, v_5\\}$ ($n = 5$).
- **Edges:** $\\binom{5}{2} = 10$ edges. Every pair of vertices is connected.
- **Degrees:** Each vertex has degree $5 - 1 = 4$.
- **Description:** A regular pentagon where every vertex is connected to all other 4 vertices (pentagon + 5-point star inside). Non-planar (by Kuratowski's theorem).

#### 2. $C_5$ (Cycle Graph on 5 Vertices):
- **Vertices:** 5 vertices arranged in a closed loop.
- **Edges:** 5 edges: $\\{(v_1, v_2), (v_2, v_3), (v_3, v_4), (v_4, v_5), (v_5, v_1)\\}$.
- **Degrees:** 2-regular (every vertex has degree 2).
- **Description:** A simple closed pentagon.

#### 3. $W_5$ (Wheel Graph on 5 Vertices):
- **Construction:** Formed by adding a central hub vertex connected to all vertices of a cycle $C_4$.
- **Vertices:** 5 vertices (4 rim vertices + 1 central hub vertex).
- **Edges:** $4 \\text{ (rim edges)} + 4 \\text{ (spoke edges)} = 8$ edges.
- **Degrees:** Central hub has degree 4; rim vertices have degree 3.

#### 4. $K_{3,3}$ (Complete Bipartite Graph / Utility Graph):
- **Vertices:** Partitioned into two disjoint sets $V_1 = \\{u_1, u_2, u_3\\}$ and $V_2 = \\{v_1, v_2, v_3\\}$ ($|V| = 6$).
- **Edges:** $3 \\times 3 = 9$ edges. Every vertex in $V_1$ is connected to every vertex in $V_2$.
- **Degrees:** 3-regular (every vertex has degree 3).
- **Description:** Standard non-planar utility graph (3 houses and 3 utilities).`
  },

  "DM-A5-1238": {
    question: "Define Shortest Path Algorithm.",
    answerMd: `### Definition of Shortest Path Algorithm

A **Shortest Path Algorithm** is a graph optimization procedure designed to find a path between two vertices (or from a source vertex to all other vertices) such that the **sum of the weights of the constituent edges is minimized**.

Formally, given a weighted graph $G = (V, E, w)$, the path $P = (v_0, v_1, \\dots, v_k)$ minimizes:
$$w(P) = \\sum_{i=1}^k w(v_{i-1}, v_i)$$

#### Prominent Algorithms:
1. **Dijkstra's Algorithm:**
   - Greedy algorithm for single-source shortest paths on graphs with **non-negative edge weights**.
   - Time Complexity: $O((|V| + |E|) \\log |V|)$ using min-heap.
2. **Bellman-Ford Algorithm:**
   - Solves single-source shortest paths and detects **negative-weight cycles**.
   - Time Complexity: $O(|V| \\cdot |E|)$.
3. **Floyd-Warshall Algorithm:**
   - Dynamic programming algorithm for **all-pairs shortest paths**.
   - Time Complexity: $O(|V|^3)$.
4. **Breadth-First Search (BFS):**
   - Finds shortest path in **unweighted graphs** in $O(|V| + |E|)$ time.`
  },

  "DM-A5-1239": {
    question: "Define bipartite graph.",
    answerMd: `### Definition of a Bipartite Graph

A graph $G = (V, E)$ is called **bipartite** if its vertex set $V$ can be partitioned into two non-empty, disjoint subsets $V_1$ and $V_2$ ($V = V_1 \\cup V_2$ and $V_1 \\cap V_2 = \\emptyset$) such that **every edge in $E$ connects a vertex in $V_1$ to a vertex in $V_2$**.
That is:
$$\\forall e = (u, v) \\in E \\implies u \\in V_1 \\text{ and } v \\in V_2 \\quad (\\text{or } u \\in V_2, v \\in V_1)$$
No edge connects two vertices belonging to the same subset ($V_1$ and $V_2$ are independent sets).

#### Fundamental Theorem:
A graph $G$ is bipartite **if and only if it contains no cycles of odd length** (all cycles have even length).

#### Complete Bipartite Graph ($K_{m, n}$):
A bipartite graph where every vertex of $V_1$ ($|V_1| = m$) is connected to every vertex of $V_2$ ($|V_2| = n$).
- Number of vertices = $m + n$
- Number of edges = $m \\times n$`
  },

  "DM-A5-1240": {
    question: "What is the degree of a graph?",
    answerMd: `### Degree of a Vertex and Degree of a Graph

#### 1. Degree of a Vertex $\\deg(v)$:
The **degree** (or *valency*) of a vertex $v$ in an undirected graph $G$, denoted by $\\deg(v)$ or $d(v)$, is the **number of edges incident with $v$**.
*(A self-loop at a vertex contributes 2 to the degree of that vertex).*

- **Maximum Degree $\\Delta(G)$:** $\\Delta(G) = \\max_{v \\in V} \\deg(v)$
- **Minimum Degree $\\delta(G)$:** $\\delta(G) = \\min_{v \\in V} \\deg(v)$
- **Average Degree:** $d_{\\text{avg}} = \\frac{1}{|V|} \\sum_{v \\in V} \\deg(v) = \\frac{2|E|}{|V|}$

#### 2. Directed Graphs (Digraphs):
- **In-degree $\\deg^-(v)$:** Number of edges directed *into* vertex $v$.
- **Out-degree $\\deg^+(v)$:** Number of edges directed *out of* vertex $v$.
- Total degree: $\\deg(v) = \\deg^-(v) + \\deg^+(v)$.

#### 3. Handshaking Theorem:
For any graph $G = (V, E)$:
$$\\sum_{v \\in V} \\deg(v) = 2|E|$$
The sum of degrees of all vertices is always equal to twice the number of edges.`
  },

  "DM-A5-1241": {
    question: "What is the maximum number of edges in a simple undirected graph with n vertices?",
    answerMd: `### Maximum Number of Edges in a Simple Undirected Graph with $n$ Vertices

#### Proof / Derivation:
In a **simple undirected graph** with $n$ vertices:
1. No self-loops are allowed (an edge cannot connect a vertex to itself).
2. No parallel / multiple edges are allowed between any pair of vertices.

Therefore, an edge exists between an unordered pair of distinct vertices $\\{u, v\\}$.
The maximum number of distinct pairs that can be chosen from $n$ vertices is:
$$E_{\\max} = \\binom{n}{2} = \\frac{n(n - 1)}{2}$$

#### Achieving the Maximum:
This maximum is achieved when every vertex is adjacent to every other vertex, which forms the **Complete Graph $K_n$**.

#### Concrete Values:
- $n = 3 \\implies \\binom{3}{2} = 3$ edges ($K_3$)
- $n = 4 \\implies \\binom{4}{2} = 6$ edges ($K_4$)
- $n = 5 \\implies \\binom{5}{2} = 10$ edges ($K_5$)

**Final Answer:**
$$\\therefore E_{\\max} = \\frac{n(n - 1)}{2}$$`
  },

  "DM-A5-1243": {
    question: "Draw K, and K4,4.",
    answerMd: `### Structural Description of $K_4$ and $K_{4, 4}$

#### 1. Complete Graph $K_4$:
- **Order (Vertices):** $n = 4$ vertices $V = \\{v_1, v_2, v_3, v_4\\}$.
- **Size (Edges):** $|E| = \\binom{4}{2} = \\frac{4 \\times 3}{2} = 6$ edges.
  $$E = \\{(v_1, v_2), (v_1, v_3), (v_1, v_4), (v_2, v_3), (v_2, v_4), (v_3, v_4)\\}$$
- **Degrees:** Each vertex has degree $4 - 1 = 3$ (3-regular).
- **Geometric Layout:** Draw a square with vertices 1, 2, 3, 4, connect all 4 outer boundary edges, and draw both internal crossing diagonal edges $(1, 3)$ and $(2, 4)$.

---

#### 2. Complete Bipartite Graph $K_{4, 4}$:
- **Order (Vertices):** $4 + 4 = 8$ vertices partitioned into:
  - Part 1: $X = \\{x_1, x_2, x_3, x_4\\}$
  - Part 2: $Y = \\{y_1, y_2, y_3, y_4\\}$
- **Size (Edges):** $|E| = 4 \\times 4 = 16$ edges.
  Every vertex in $X$ is connected to all 4 vertices in $Y$:
  $$E = \\{(x_i, y_j) \\mid 1 \\le i, j \\le 4\\}$$
- **Degrees:** Each vertex has degree 4 (4-regular bipartite graph).
- **Geometric Layout:** Draw the 4 vertices of set $X$ in a left column and the 4 vertices of set $Y$ in a right column. Draw lines connecting every left vertex to every right vertex.`
  },

  "DM-A5-1245": {
    question: "Define degree sequence of a graph. Give an example.",
    answerMd: `### Degree Sequence of a Graph

The **degree sequence** of a finite undirected graph $G$ is a monotonic non-increasing (or non-decreasing) list of the degrees of its vertices:
$$d = (d_1, d_2, d_3, \\dots, d_n) \\quad \\text{where } d_1 \\ge d_2 \\ge \\dots \\ge d_n$$

#### Properties:
1. **Length:** The length of the sequence equals the order of the graph ($n = |V|$).
2. **Handshaking Condition:** The sum of elements in any valid degree sequence must be **even**:
   $$\\sum_{i=1}^n d_i = 2|E|$$
3. **Graph Invariant:** Two isomorphic graphs must have identical degree sequences.

---

#### Concrete Example:
Consider a house-shaped graph on 5 vertices:
- $v_1$: apex of roof $\\implies \\deg(v_1) = 2$
- $v_2, v_3$: eaves of roof $\\implies \\deg(v_2) = 3, \\deg(v_3) = 3$
- $v_4, v_5$: base corners $\\implies \\deg(v_4) = 2, \\deg(v_5) = 2$

Sorting in non-increasing order:
$$\\text{Degree Sequence} = (3, 3, 2, 2, 2)$$
- Sum of degrees = $3 + 3 + 2 + 2 + 2 = 12$ (even).
- Number of edges $|E| = 12 / 2 = 6$.`
  },

  "DM-A5-1246": {
    question: "Define isomorphism. Give an example.",
    answerMd: `### Graph Isomorphism and Example

#### Definition:
Two simple graphs $G = (V, E)$ and $G' = (V', E')$ are **isomorphic** (denoted $G \\cong G'$) if there exists a bijective function:
$$f: V \\to V'$$
such that any two vertices $u, v \\in V$ are adjacent in $G$ if and only if $f(u)$ and $f(v)$ are adjacent in $G'$:
$$(u, v) \\in E \\iff (f(u), f(v)) \\in E'$$

---

#### Concrete Example:
- **Graph $G$:** Vertices $V = \\{1, 2, 3, 4\\}$, Edges $E = \\{(1, 2), (2, 3), (3, 4), (4, 1)\\}$ (Cycle $C_4$).
- **Graph $G'$:** Vertices $V' = \\{A, B, C, D\\}$, Edges $E' = \\{(A, C), (C, B), (B, D), (D, A)\\}$.

Let the mapping $f$ be:
- $f(1) = A$
- $f(2) = C$
- $f(3) = B$
- $f(4) = D$

Adjacency verification:
- $(1, 2) \\in E \\iff (A, C) \\in E'$ (Preserved)
- $(2, 3) \\in E \\iff (C, B) \\in E'$ (Preserved)
- $(3, 4) \\in E \\iff (B, D) \\in E'$ (Preserved)
- $(4, 1) \\in E \\iff (D, A) \\in E'$ (Preserved)
- Non-edges: $(1, 3) \\notin E \\iff (A, B) \\notin E'$, etc.

Both graphs have 4 vertices, 4 edges, degree sequence $(2, 2, 2, 2)$, and identical cycle structure.
$$\\therefore G \\cong G'$$`
  },

  "DM-A5-1247": {
    question: "Define isomorphism and state the rules for isomorphic graphs.",
    answerMd: `### Graph Isomorphism: Definition and Invariant Rules

#### Definition:
A graph $G_1 = (V_1, E_1)$ is isomorphic to $G_2 = (V_2, E_2)$ ($G_1 \\cong G_2$) if there exists a bijection $f: V_1 \\to V_2$ that preserves edge incidence:
$$(u, v) \\in E_1 \\iff (f(u), f(v)) \\in E_2$$

---

#### Necessary Rules / Invariants for Isomorphic Graphs:
If $G_1 \\cong G_2$, then all of the following graph invariants **must be identical**:

1. **Equal Number of Vertices:** $|V_1| = |V_2|$.
2. **Equal Number of Edges:** $|E_1| = |E_2|$.
3. **Identical Degree Sequence:** The multiset of vertex degrees must be equal.
4. **Preservation of Neighborhood Degrees:** If $v \\in V_1$ has degree $k$ and is adjacent to vertices of degrees $(d_1, \\dots, d_k)$, then $f(v) \\in V_2$ must be adjacent to vertices with the exact same degrees.
5. **Preservation of Subgraphs & Cycles:**
   - Both graphs must have the same number of cycles of length $k$ (triangles, 4-cycles, etc.).
   - Both graphs must have the same chromatic number $\\chi(G)$.
   - Both must be either both planar or both non-planar.
6. **Complement Isomorphism:** If $G_1 \\cong G_2$, then $\\overline{G_1} \\cong \\overline{G_2}$.`
  },

  "DM-B5-1253": {
    question: "State and Prove fundamental theorem of graph theory.",
    answerMd: `### The Fundamental Theorem of Graph Theory (Handshaking Theorem)

#### Statement:
In any undirected graph $G = (V, E)$, the sum of the degrees of all vertices is equal to twice the number of edges:
$$\\sum_{v \\in V} \\deg(v) = 2|E|$$

---

#### Proof:
Let $G = (V, E)$ be an undirected graph with vertices $V = \\{v_1, v_2, \\dots, v_n\\}$ and edges $E = \\{e_1, e_2, \\dots, e_m\\}$, so $|E| = m$.

1. By definition, an edge $e \\in E$ connects two endpoints $u$ and $v$ (or connects a vertex to itself in the case of a loop).
2. When we calculate the degree of a vertex $v$, we count each edge incident to $v$ once:
   $$\\deg(v) = |\\{e \\in E \\mid v \\text{ is an endpoint of } e\\}|$$
3. When we take the sum over all vertices $\\sum_{v \\in V} \\deg(v)$:
   - Every edge $e = (u, v)$ with distinct endpoints has exactly **two endpoints** ($u$ and $v$).
   - Therefore, edge $e$ contributes exactly $1$ to the degree count of $u$, and exactly $1$ to the degree count of $v$.
   - Thus, each edge contributes exactly $1 + 1 = 2$ to the total degree sum.
   *(If $e$ is a self-loop at vertex $u$, it is defined to contribute $2$ to $\\deg(u)$).*
4. Summing across all $m$ edges:
   $$\\sum_{v \\in V} \\deg(v) = \\sum_{e \\in E} 2 = 2|E|$$

Hence, the theorem is proved.

---

#### Fundamental Corollary:
**In any graph, the number of vertices of odd degree is always EVEN.**
*Proof:*
$$\\sum_{v \\in V} \\deg(v) = \\sum_{v \\in V_{\\text{even}}} \\deg(v) + \\sum_{v \\in V_{\\text{odd}}} \\deg(v) = 2|E|$$
$$\\sum_{v \\in V_{\\text{odd}}} \\deg(v) = 2|E| - \\sum_{v \\in V_{\\text{even}}} \\deg(v) = \\text{Even}$$
The sum of odd integers is even if and only if there are an even number of terms.`
  }
};
