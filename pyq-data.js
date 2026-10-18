/**
 * MGIT CSE Semester III - Comprehensive PYQ Dataset (2020 - 2024)
 * Autonomous & JNTUH R22 / R21 Regulations
 * Covers:
 * 1. Data Structures (DS - CS301PC)
 * 2. Computer Organization and Architecture (COA - CS302PC)
 * 3. Discrete Mathematics (DM - CS303PC / MA303BS)
 * 4. Object Oriented Programming through Java (JAVA - CS304PC)
 * 5. Digital Logic Design (DLD - CS305PC)
 */

const SUBJECTS_METADATA = {
  "COA": {
    id: "COA",
    code: "CS302PC",
    title: "Computer Organization & Architecture",
    regulation: "R22 / Autonomous",
    icon: "fa-microchip",
    color: "#10b981",
    driveFolderId: "1axgSIkJ5-WfD_xZpna8KFKnNxcaZ0AyX",
    paperCount: 23,
    notesCount: 2,
    units: {
      1: "Basic Computer Structure, Machine Instructions & Addressing Modes",
      2: "Central Processing Unit (CPU), ALU & Microprogrammed Control",
      3: "Computer Arithmetic (Fixed/Floating Point, Booth's, Division)",
      4: "Memory Organization (Hierarchy, Cache Mapping, Virtual Memory)",
      5: "Input-Output Organization, DMA, Interrupts & Pipelining"
    }
  },
  "DM": {
    id: "DM",
    code: "CS303PC",
    title: "Discrete Mathematics",
    regulation: "R22 / Autonomous",
    icon: "fa-square-root-variable",
    color: "#8b5cf6",
    driveFolderId: "1x4QjKc-CXLoCSDTqi6H2NUCtExuBkAMU",
    paperCount: 24,
    notesCount: 0,
    units: {
      1: "Mathematical Logic, Predicates, Normal Forms (PCNF/PDNF) & Inference",
      2: "Set Theory, Relations, Hasse Diagrams, Lattices & Functions",
      3: "Algebraic Structures (Semigroups, Monoids, Groups, Subgroups, Abelian)",
      4: "Combinatorics, Permutations, Pigeonhole Principle & Recurrence Relations",
      5: "Graph Theory, Isomorphism, Euler/Hamiltonian Graphs & Planarity"
    }
  },
  "DBMS": {
    id: "DBMS",
    code: "CS304PC",
    title: "Database Management Systems",
    regulation: "R22 / Autonomous",
    icon: "fa-database",
    color: "#06b6d4",
    driveFolderId: "1Af4RdwkOHfK-lM8SuNoeao0aPYiIf6hc",
    paperCount: 12,
    notesCount: 0,
    units: {
      1: "Database System Concepts, Architecture & ER Data Modeling",
      2: "Relational Model, Relational Algebra, Calculus & Integrity Constraints",
      3: "SQL Queries, Nested Queries, Triggers, Views & Normalization (1NF to BCNF)",
      4: "Transaction Management, ACID Properties, Concurrency Control & Serializability",
      5: "Storage, Indexing (B+ Trees), Hashing & Query Optimization"
    }
  },
  "OOP": {
    id: "OOP",
    code: "CS305PC",
    title: "OOP Through Java",
    regulation: "R22 / Autonomous",
    icon: "fa-mug-hot",
    color: "#f59e0b",
    driveFolderId: "1WbWPKT2RWOdEQttkny0cwTHYTM4g62vP",
    paperCount: 20,
    notesCount: 0,
    units: {
      1: "OOP Concepts, Java Fundamentals, Classes, Objects & JVM",
      2: "Inheritance, Polymorphism, Interfaces, Diamond Problem & Packages",
      3: "Exception Handling, Custom Exceptions & Multithreading",
      4: "Java Collections Framework (List, Set, Map) & Generics",
      5: "File I/O Streams, Serialization, GUI (Swing/AWT) & Events"
    }
  },
  "SE": {
    id: "SE",
    code: "CS306PC",
    title: "Software Engineering",
    regulation: "R22 / Autonomous",
    icon: "fa-laptop-code",
    color: "#3b82f6",
    driveFolderId: "16MpaH50OsmOKyAse1V5oQB7vdDqKYQqX",
    paperCount: 17,
    notesCount: 0,
    units: {
      1: "Software Process, Agile Development, Scrum & Process Models (Waterfall, Spiral)",
      2: "Requirements Engineering, SRS Document, Feasibility & Use Case Modeling",
      3: "System Modeling, Architectural Design, Component-Level Design & User Interface",
      4: "Software Quality, Testing Strategies (Black-box, White-box, Unit, Integration)",
      5: "Software Maintenance, Risk Management, SCM & Software Metrics"
    }
  },
  "ES": {
    id: "ES",
    code: "MC301ES",
    title: "Environmental Science",
    regulation: "R22 / Autonomous",
    icon: "fa-leaf",
    color: "#10b981",
    driveFolderId: "1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0",
    paperCount: 5,
    notesCount: 2,
    units: {
      1: "Ecosystems, Biodiversity, Food Chains & Ecological Pyramids",
      2: "Natural Resources (Water, Mineral, Energy) & Conservation",
      3: "Environmental Pollution (Air, Water, Soil, Noise) & Solid Waste Management",
      4: "Global Environmental Issues (Climate Change, Acid Rain, Ozone Depletion)",
      5: "Environmental Protection Acts, Field Work & Sustainable Development"
    }
  },
  "IE": {
    id: "IE",
    code: "MC302IE",
    title: "Innovation & Entrepreneurship",
    regulation: "R22 / Autonomous",
    icon: "fa-lightbulb",
    color: "#ec4899",
    driveFolderId: null,
    paperCount: 0,
    notesCount: 0,
    units: {
      1: "Introduction to Innovation, Design Thinking & Idea Generation",
      2: "Entrepreneurship Mindset, Opportunity Recognition & Feasibility Analysis",
      3: "Business Models, Lean Canvas & Value Proposition Design",
      4: "Financing New Ventures, Venture Capital, Angel Investors & Pitching",
      5: "Intellectual Property Rights (IPR), Patents, Trademarks & Scaling"
    }
  },
  "DS": {
    id: "DS",
    code: "CS301PC",
    title: "Data Structures",
    regulation: "R22 / Autonomous",
    icon: "fa-cubes",
    color: "#6366f1",
    driveFolderId: null,
    paperCount: 22,
    notesCount: 0,
    units: {
      1: "Introduction, Stacks, Queues, Circular Queues & Applications",
      2: "Linked Lists (Singly, Doubly, Circular) & Applications",
      3: "Trees (Binary Trees, BST, AVL, B-Trees, Red-Black)",
      4: "Graphs, Traversals (BFS, DFS), Minimum Spanning Trees & Shortest Path",
      5: "Searching, Sorting Algorithms & Hashing Techniques"
    }
  },
  "DLD": {
    id: "DLD",
    code: "CS305PC",
    title: "Digital Logic Design",
    regulation: "R22 / Autonomous",
    icon: "fa-toggle-on",
    color: "#ef4444",
    driveFolderId: null,
    paperCount: 15,
    notesCount: 0,
    units: {
      1: "Number Systems, Conversions, Complements & Boolean Axioms",
      2: "Gate-Level Minimization, K-Maps (2-5 Vars) & NAND/NOR Implementations",
      3: "Combinational Logic (Adders, Subtractors, MUX, DEMUX, Decoders, Encoders)",
      4: "Sequential Circuits, Latches, Flip-Flops & Conversions",
      5: "Registers, Counters (Sync/Async), Ring/Johnson Counters & PLDs"
    }
  }
};

const PYQ_DATABASE = [
  // ==========================================
  // DATA STRUCTURES (DS)
  // ==========================================
  {
    id: "DS-U1-01",
    subjectId: "DS",
    unit: 1,
    years: [2024, 2023, 2022, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 4,
    repeatProbability: "98% (High Yield)",
    question: "Explain the algorithm to convert an Infix expression to Postfix expression using Stack. Trace the algorithm with step-by-step stack status for expression: ((A + B) * C - (D - E)) ^ (F + G).",
    importance: "Tier 1",
    tags: ["Stack", "Infix-to-Postfix", "Expression Evaluation", "Algorithm"],
    solutionHint: `
**Key Steps to Answer:**
1. **Operator Precedence & Associativity Table**: Mention '^' (highest, Right-to-Left), '*, /' (next, Left-to-Right), '+, -' (lowest, Left-to-Right), '(' has lowest priority inside stack.
2. **Algorithm**:
   - Initialize an empty operator stack.
   - Scan infix expression token by token from left to right.
   - If operand, output immediately to postfix.
   - If '(', push onto stack.
   - If ')', pop and output until '(' is encountered, then discard '('.
   - If operator, pop operators with greater or equal precedence from stack to output, then push incoming operator.
   - At end of expression, pop all remaining operators.
3. **Trace Table**: Construct 4 columns: [Symbol Scanned, Stack Status, Postfix Output, Action].
4. **Final Postfix Result**: A B + C * D E - - F G + ^
    `,
    examTip: "Always draw a tabular trace. MGIT evaluators look for the 4-column trace table and operator precedence mention."
  },
  {
    id: "DS-U1-02",
    subjectId: "DS",
    unit: 1,
    years: [2024, 2022, 2021],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 3,
    repeatProbability: "90% (High Yield)",
    question: "What is a Circular Queue? Discuss how the problem of false overflow in linear queues is resolved using circular queues. Write C functions for insert (enqueue) and delete (dequeue) operations in a circular queue.",
    importance: "Tier 1",
    tags: ["Queue", "Circular Queue", "Enqueue", "Dequeue", "C-Implementation"],
    solutionHint: `
**Key Concepts & Code:**
- **Problem in Linear Queue**: When rear reaches MAX-1, no new element can be inserted even if elements from front have been deleted (wasted memory space / false overflow).
- **Circular Queue Formula**: Index wrap-around using modulo arithmetic:
  - Enqueue: \`rear = (rear + 1) % MAX\`
  - Dequeue: \`front = (front + 1) % MAX\`
- **Condition for Full**: \`(rear + 1) % MAX == front\`
- **Condition for Empty**: \`front == -1\` (or \`front == rear == -1\`)
- Include clear C routines with error checks for UNDERFLOW and OVERFLOW.
    `,
    examTip: "Highlight the modulo arithmetic formula `(rear + 1) % MAX == front` with a neat circular diagram."
  },
  {
    id: "DS-U1-03",
    subjectId: "DS",
    unit: 1,
    years: [2023, 2021, 2020],
    examType: "Supplementary",
    part: "A",
    marks: 2,
    frequency: 3,
    repeatProbability: "85%",
    question: "Define Double Ended Queue (Deque). Differentiate between Input Restricted and Output Restricted Deques.",
    importance: "Tier 2",
    tags: ["Deque", "Linear DS", "Part-A"],
    solutionHint: `
- **Deque**: A linear list where insertions and deletions can occur at either end (front or rear).
- **Input Restricted Deque**: Insertion is permitted at one end only, while deletion is permitted at both ends.
- **Output Restricted Deque**: Deletion is permitted at one end only, while insertion is permitted at both ends.
    `,
    examTip: "Keep it under 4 lines with a quick 2-arrow diagram for full 2 marks."
  },
  {
    id: "DS-U2-01",
    subjectId: "DS",
    unit: 2,
    years: [2024, 2023, 2022, 2021, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 5,
    repeatProbability: "99% Historical Recurrence",
    question: "Write an algorithm or C program to implement the following operations on a Singly Linked List: (i) Insert at a specific position, (ii) Delete a node with a given key, (iii) Reverse the linked list without allocating new nodes.",
    importance: "Tier 1 - Top Priority",
    tags: ["Linked List", "SLL", "Reverse List", "Pointer Manipulation"],
    solutionHint: `
**Crucial Pointers for Reverse Operation:**
\`\`\`c
struct Node* reverse(struct Node* head) {
    struct Node *prev = NULL, *current = head, *next = NULL;
    while (current != NULL) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }
    return prev; // new head
}
\`\`\`
- For insertion: Check boundary \`pos == 1\` and handle invalid pos > length+1.
- For deletion: Handle node at head, node in middle, and element not found.
    `,
    examTip: "Reversing a singly linked list is the #1 most repeated question in MGIT DS papers across both Regular and Supplementary exams."
  },
  {
    id: "DS-U2-02",
    subjectId: "DS",
    unit: 2,
    years: [2023, 2021],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 2,
    repeatProbability: "80%",
    question: "Describe Doubly Linked List (DLL). Explain node structure and write procedures for inserting a node before a given target node and deleting an arbitrary node in DLL.",
    importance: "Tier 2",
    tags: ["DLL", "Doubly Linked List", "Pointers"],
    solutionHint: `
- Node structure: \`struct Node { int data; struct Node *prev, *next; };\`
- Insertion before target node involves updating 4 pointers carefully:
  \`newNode->next = target;\`
  \`newNode->prev = target->prev;\`
  \`target->prev->next = newNode;\`
  \`target->prev = newNode;\`
- Always verify if \`target->prev == NULL\` (i.e. target is head).
    `,
    examTip: "Draw pointer reconnecting diagrams showing step 1, 2, 3, 4 with arrows."
  },
  {
    id: "DS-U3-01",
    subjectId: "DS",
    unit: 3,
    years: [2024, 2023, 2022, 2021],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 4,
    repeatProbability: "96% (High Yield)",
    question: "What is an AVL Tree? Explain the four types of rotation (LL, RR, LR, RL) used to restore balance. Construct an AVL tree by inserting the following sequence of keys step by step: 50, 20, 60, 10, 8, 15, 32, 46, 11, 48.",
    importance: "Tier 1",
    tags: ["AVL Tree", "Rotations", "Balanced BST", "Numerical Construction"],
    solutionHint: `
- **Definition**: Self-balancing BST where Balance Factor = Height(Left) - Height(Right) $\\in \\{-1, 0, 1\\}$.
- **Rotations**:
  - LL Rotation: Single Right Rotation on root of imbalance.
  - RR Rotation: Single Left Rotation on root of imbalance.
  - LR Rotation: Left rotation on left child followed by Right rotation on parent.
  - RL Rotation: Right rotation on right child followed by Left rotation on parent.
- **Trace step-by-step**: State balance factor at each node after each insertion and specify which rotation triggers.
    `,
    examTip: "Show the Balance Factor at every node (+2, -2 triggers) explicitly. Do not skip intermediate rotation diagrams."
  },
  {
    id: "DS-U3-02",
    subjectId: "DS",
    unit: 3,
    years: [2024, 2022, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 3,
    repeatProbability: "92%",
    question: "Construct a Binary Tree from given traversals:\\nInorder:   D B E A F C G\\nPreorder:  A B D E C F G\\nState the algorithm and trace the construction clearly.",
    importance: "Tier 1",
    tags: ["Binary Tree", "Tree Traversal", "Reconstruction"],
    solutionHint: `
- Preorder first element 'A' is the Root.
- Find 'A' in Inorder: Left subtree nodes are {D, B, E}, Right subtree nodes are {F, C, G}.
- Recurse on Left Preorder {B, D, E} and Left Inorder {D, B, E} -> Root 'B', Left 'D', Right 'E'.
- Recurse on Right Preorder {C, F, G} and Right Inorder {F, C, G} -> Root 'C', Left 'F', Right 'G'.
- Draw final tree.
    `,
    examTip: "Extremely scoring question! Always double-check by writing the postorder of your final tree."
  },
  {
    id: "DS-U4-01",
    subjectId: "DS",
    unit: 4,
    years: [2024, 2023, 2022, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 4,
    repeatProbability: "95% (High Yield)",
    question: "State and explain Prim's and Kruskal's algorithms for finding the Minimum Cost Spanning Tree (MST) of a weighted undirected graph. Compare their time complexities and find the MST for a given 6-vertex weighted graph.",
    importance: "Tier 1",
    tags: ["MST", "Prim's Algorithm", "Kruskal's Algorithm", "Greedy Algorithm"],
    solutionHint: `
- **Kruskal's**: Edge-based greedy. Sort all edges in non-decreasing order of weights. Pick lowest edge that doesn't form cycle (using Disjoint Set / Union-Find). Time: $O(E \\log E)$. Best for sparse graphs.
- **Prim's**: Vertex-based greedy. Start with arbitrary vertex, grow tree by picking minimum weight edge connecting tree to non-tree vertex. Time: $O(V^2)$ with matrix or $O(E + V \\log V)$ with Fibonacci heap. Best for dense graphs.
- Provide tabular step list of edges selected and total MST weight.
    `,
    examTip: "Compare time complexities and clearly specify when to use Prim's vs Kruskal's."
  },
  {
    id: "DS-U4-02",
    subjectId: "DS",
    unit: 4,
    years: [2023, 2022, 2021],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 3,
    repeatProbability: "88%",
    question: "Explain Breadth First Search (BFS) and Depth First Search (DFS) graph traversal algorithms with pseudo-code and state which auxiliary data structures are utilized.",
    importance: "Tier 1",
    tags: ["Graph Traversal", "BFS", "DFS", "Queue", "Stack"],
    solutionHint: `
- BFS uses **Queue** (FIFO) data structure and produces level-order exploration.
- DFS uses **Stack** (LIFO / Recursion) and explores deep down each branch before backtracking.
- Mention visited array \`bool visited[V]\` to prevent infinite loops in cyclic graphs.
- Both have time complexity $O(V + E)$ when using adjacency list.
    `,
    examTip: "Draw an example 5-vertex graph and write the exact output sequence for both starting from vertex 1."
  },
  {
    id: "DS-U5-01",
    subjectId: "DS",
    unit: 5,
    years: [2024, 2023, 2021, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 4,
    repeatProbability: "95% (High Yield)",
    question: "Explain the Quick Sort algorithm using Divide and Conquer strategy. Trace Quick Sort for the array: [38, 27, 43, 3, 9, 82, 10]. Analyze its Best, Average, and Worst-case time complexities.",
    importance: "Tier 1",
    tags: ["Quick Sort", "Partition", "Time Complexity", "Sorting"],
    solutionHint: `
- **Partitioning Procedure**: Choose pivot (e.g. first or last element). Rearrange array so elements < pivot are left, elements > pivot are right.
- **Complexities**:
  - Best: $O(n \\log n)$ when pivot splits array into two equal halves.
  - Average: $O(n \\log n)$.
  - Worst: $O(n^2)$ when array is already sorted and pivot is extreme element.
- Trace shows partitions step-by-step with pivot position fixed.
    `,
    examTip: "Always write the recurrence relations: $T(n) = 2T(n/2) + O(n)$ for best case, $T(n) = T(n-1) + O(n)$ for worst case."
  },
  {
    id: "DS-U5-02",
    subjectId: "DS",
    unit: 5,
    years: [2024, 2022, 2021],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 3,
    repeatProbability: "90%",
    question: "What is Hashing? Explain Collision Resolution Techniques: (i) Separate Chaining (Open Hashing), (ii) Open Addressing (Linear Probing, Quadratic Probing, Double Hashing). Insert keys {23, 43, 13, 27, 39, 40} using hash function h(k) = k mod 7 with Linear Probing.",
    importance: "Tier 1",
    tags: ["Hashing", "Collision Resolution", "Linear Probing", "Chaining"],
    solutionHint: `
- Formula: $h(k, i) = (h(k) + i) \\bmod m$.
- Table size $m = 7$:
  - 23 % 7 = 2 -> Index 2
  - 43 % 7 = 1 -> Index 1
  - 13 % 7 = 6 -> Index 6
  - 27 % 7 = 6 -> Collision at 6! Probe index (6+1)%7 = 0 -> Index 0
  - 39 % 7 = 4 -> Index 4
  - 40 % 7 = 5 -> Index 5
- Discuss Primary Clustering in Linear Probing and Secondary Clustering in Quadratic Probing.
    `,
    examTip: "Show collision indicators clearly at each step in the hash table array diagram."
  },

  // ==========================================
  // COMPUTER ORGANIZATION & ARCHITECTURE (COA)
  // ==========================================
  {
    id: "COA-U1-01",
    subjectId: "COA",
    unit: 1,
    years: [2024, 2023, 2022, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 4,
    repeatProbability: "95% (High Yield)",
    question: "Explain various Addressing Modes with suitable examples, diagrams, and formula for calculating Effective Address (EA).",
    importance: "Tier 1",
    tags: ["Addressing Modes", "Effective Address", "CPU"],
    solutionHint: `
**Include the 7 Fundamental Addressing Modes:**
1. **Immediate Mode**: Operand is part of instruction (\`ADD #5\`). No EA calculation.
2. **Direct / Absolute Mode**: Address field contains EA (\`LDA 2050H\`, $EA = A$).
3. **Indirect Mode**: Address field points to memory location containing EA ($EA = [A]$).
4. **Register Mode**: Operand resides in CPU register (\`MOV R1, R2\`).
5. **Register Indirect Mode**: Register holds pointer to memory operand ($EA = [R]$).
6. **Relative Addressing Mode**: $EA = PC + \\text{Offset}$.
7. **Indexed Addressing Mode**: $EA = XR + \\text{Offset}$ (Base-Register mode $EA = BR + A$).
    `,
    examTip: "Draw the memory/register pointer diagram for each addressing mode to get full marks."
  },
  {
    id: "COA-U2-01",
    subjectId: "COA",
    unit: 2,
    years: [2024, 2022, 2021],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 3,
    repeatProbability: "92%",
    question: "Differentiate between Hardwired Control Unit and Microprogrammed Control Unit. Draw and explain the block diagram of Microprogrammed Control Unit.",
    importance: "Tier 1",
    tags: ["Control Unit", "Hardwired vs Microprogrammed", "Microinstruction"],
    solutionHint: `
**Comparison Table:**
- Speed: Hardwired is faster (combinational hardware); Microprogrammed is slower (memory access).
- Flexibility: Hardwired is rigid/hard to modify; Microprogrammed is easily reprogrammed via Control Store (ROM).
- Cost & Complexity: Hardwired gets complex with large instruction sets; Microprogrammed handles complex CISC instructions well.
- Applications: RISC processors (Hardwired); CISC processors (Microprogrammed).
- Diagram: Control Address Register (CAR), Control Memory (ROM), Control Data Register (CDR) / Pipeline Register, Next-Address Generator (Sequencer).
    `,
    examTip: "Always draw the Control Unit block diagram and highlight the Control Memory ROM."
  },
  {
    id: "COA-U3-01",
    subjectId: "COA",
    unit: 3,
    years: [2024, 2023, 2022, 2021, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 5,
    repeatProbability: "99% (Guaranteed)",
    question: "Explain Booth's Multiplication Algorithm for 2's complement numbers with a neat flowchart. Multiply (-9) and (+6) (i.e. (-9) * (+6)) using Booth's Algorithm step-by-step.",
    importance: "Tier 1",
    tags: ["Booth's Algorithm", "Computer Arithmetic", "Numerical", "Flowchart"],
    solutionHint: `
- Represent multiplicand $M = -9$ in 5-bit 2's complement: $9 = 01001_2 \\implies M = 10111_2$, $-M = 01001_2$.
- Multiplier $Q = +6 = 00110_2$.
- Initial values: $A = 00000$, $Q_{-1} = 0$, Count $n = 5$.
- Rules:
  - If $Q_0 Q_{-1} = 10 \\implies A = A - M$, then Arithmetic Shift Right (ASR) of [A, Q, Q-1].
  - If $Q_0 Q_{-1} = 01 \\implies A = A + M$, then ASR of [A, Q, Q-1].
  - If $Q_0 Q_{-1} = 00$ or $11 \\implies$ only ASR.
- Trace for 5 cycles. Final result in [A, Q] gives 10-bit binary for -54.
    `,
    examTip: "Booth's algorithm is in 100% of MGIT COA question papers. Draw the flowchart and the tabular execution trace."
  },
  {
    id: "COA-U4-01",
    subjectId: "COA",
    unit: 4,
    years: [2024, 2023, 2022, 2021],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 4,
    repeatProbability: "96% (High Yield)",
    question: "Explain the three Cache Memory Mapping Techniques: (i) Direct Mapping, (ii) Associative Mapping, (iii) Set-Associative Mapping with diagrams and address field division (Tag, Set/Block, Word).",
    importance: "Tier 1",
    tags: ["Cache Memory", "Direct Mapping", "Set Associative", "Memory Hierarchy"],
    solutionHint: `
- **Direct Mapping**: Each block of main memory maps to exactly one cache line: $i = j \\bmod m$. Memory address divided into: [Tag | Line/Slot | Offset/Word]. Suffers from conflict miss.
- **Fully Associative Mapping**: Any main memory block can be loaded into any cache line. Memory address divided into: [Tag | Offset]. Requires expensive associative content-addressable memory (CAM).
- **k-Way Set Associative Mapping**: Cache divided into sets of $k$ lines each. Block $j$ maps to set $j \\bmod S$. Address divided into: [Tag | Set | Offset]. Balances speed and hardware cost.
    `,
    examTip: "Show the bit-field division diagrams for all three mappings clearly."
  },
  {
    id: "COA-U5-01",
    subjectId: "COA",
    unit: 5,
    years: [2024, 2023, 2022, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 4,
    repeatProbability: "94%",
    question: "What is Direct Memory Access (DMA)? Explain the block diagram of a DMA Controller, bus signals (HRQ, HLDA), and different modes of DMA data transfer (Burst Transfer, Cycle Stealing, Transparent).",
    importance: "Tier 1",
    tags: ["DMA", "I/O Organization", "Cycle Stealing", "Bus Control"],
    solutionHint: `
- **Concept**: Transfers blocks of data directly between high-speed I/O device and main memory without CPU intervention.
- **DMA Controller Registers**: Address Register, Word Count Register, Control/Status Register.
- **Handshaking**:
  1. I/O device requests DMA via DREQ.
  2. DMA controller requests system bus from CPU via Hold Request (HRQ).
  3. CPU finishes current cycle and grants bus via Hold Acknowledge (HLDA).
  4. DMA transfers data with memory.
- **Modes**:
  - Burst Mode: DMA retains control until entire block transferred.
  - Cycle Stealing Mode: DMA takes control of bus for single memory cycle between CPU instruction phases.
    `,
    examTip: "Draw the DMA-CPU-Memory bus interconnection diagram showing address, data, and control lines."
  },
  {
    id: "COA-U5-02",
    subjectId: "COA",
    unit: 5,
    years: [2023, 2021, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 3,
    repeatProbability: "90%",
    question: "Explain Instruction Pipelining. Discuss the various pipeline hazards: (i) Structural Hazards, (ii) Data Hazards (RAW, WAR, WAW), (iii) Control/Branch Hazards, and methods to resolve them.",
    importance: "Tier 1",
    tags: ["Pipelining", "Pipeline Hazards", "Data Hazards", "Speedup"],
    solutionHint: `
- 4-stage/5-stage instruction pipeline: IF, ID, EX, MEM, WB.
- **Structural Hazard**: Hardware resource conflict (e.g. single memory for instruction and data). Resolved by Harvard architecture or stalls.
- **Data Hazard**: When instruction depends on result of previous instruction.
  - Read After Write (RAW) - True dependency. Resolved by Operand Forwarding/Bypassing or NOP insertion.
- **Control Hazard**: Caused by branch/jump instructions changing the PC. Resolved by Branch Prediction, Delayed Branching, or Branch Target Buffers.
- Speedup formula: $S = \\frac{n \\cdot k}{k + n - 1}$.
    `,
    examTip: "Mention Operand Forwarding with an execution timing diagram."
  },

  // ==========================================
  // DISCRETE MATHEMATICS (DM)
  // ==========================================
  {
    id: "DM-U1-01",
    subjectId: "DM",
    unit: 1,
    years: [2024, 2023, 2022, 2021, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 5,
    repeatProbability: "98% (Guaranteed)",
    question: "Obtain the Principal Disjunctive Normal Form (PDNF) and Principal Conjunctive Normal Form (PCNF) for the statement formula: (P -> (Q ^ R)) ^ (~P -> (~Q ^ ~R)).",
    importance: "Tier 1",
    tags: ["Logic", "PCNF", "PDNF", "Minterms", "Maxterms"],
    solutionHint: `
**Methodology:**
1. Construct a truth table for all $2^3 = 8$ truth assignments for $P, Q, R$.
2. Compute columns for $Q \\land R$, $P \\to (Q \\land R)$, $\\sim Q \\land \\sim R$, $\\sim P \\to (\\sim Q \\land \\sim R)$, and the conjunction of both.
3. **PDNF**: Identify rows where the final formula evaluates to True (T). Form the disjunction of corresponding minterms ($m_i$).
4. **PCNF**: Identify rows where the final formula evaluates to False (F). Form the conjunction of corresponding maxterms ($M_i$).
5. Express final answer in standard sigma and pi notations: $\\sum(m_a, m_b, \\dots)$ and $\\prod(M_x, M_y, \\dots)$.
    `,
    examTip: "Both algebraic expansion and truth table methods are accepted in MGIT. Truth table method minimizes calculation mistakes."
  },
  {
    id: "DM-U1-02",
    subjectId: "DM",
    unit: 1,
    years: [2024, 2022, 2021],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 3,
    repeatProbability: "92%",
    question: "Demonstrate that the following argument is valid using Rules of Inference:\\n(i) P -> Q\\n(ii) ~P -> R\\n(iii) R -> S\\nConclusion: ~Q -> S.",
    importance: "Tier 1",
    tags: ["Inference Rules", "Modus Tollens", "Hypothetical Syllogism"],
    solutionHint: `
**Step-by-step deduction:**
1. $P \\to Q$ (Premise)
2. $\\sim Q \\to \\sim P$ (Contrapositive of 1)
3. $\\sim P \\to R$ (Premise)
4. $\\sim Q \\to R$ (Hypothetical Syllogism using 2 and 3)
5. $R \\to S$ (Premise)
6. $\\sim Q \\to S$ (Hypothetical Syllogism using 4 and 5)
Hence conclusion is valid!
    `,
    examTip: "Always list each line number, statement, and the exact inference rule used (e.g. Modus Ponens, Modus Tollens, Hypothetical Syllogism)."
  },
  {
    id: "DM-U2-01",
    subjectId: "DM",
    unit: 2,
    years: [2024, 2023, 2022, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 4,
    repeatProbability: "95% (High Yield)",
    question: "Define Poset and Lattice. Let D30 = {1, 2, 3, 5, 6, 10, 15, 30} be the set of divisors of 30 ordered by the relation of divisibility ('a divides b'). (i) Draw the Hasse diagram. (ii) Determine whether (D30, |) is a Lattice, Distributive Lattice, and Boolean Algebra.",
    importance: "Tier 1",
    tags: ["Hasse Diagram", "Lattice", "Poset", "Divisibility", "Boolean Algebra"],
    solutionHint: `
- Divisibility relation: $a \\mid b$.
- Draw Hasse diagram:
  - Level 0: 1
  - Level 1: 2, 3, 5
  - Level 2: 6 (above 2,3), 10 (above 2,5), 15 (above 3,5)
  - Level 3: 30 (connected to 6, 10, 15).
  This forms a symmetric 3D cube.
- **Lattice Property**: For any pair $(a, b)$, GLB is $\\gcd(a, b)$ and LUB is $\\operatorname{lcm}(a, b)$. Since $\\gcd$ and $\\operatorname{lcm}$ exist for all pairs in $D_{30}$, it is a lattice.
- Since $30 = 2 \\times 3 \\times 5$ is square-free, it is isomorphic to Boolean Algebra $B_3$.
    `,
    examTip: "Mention that every square-free divisor poset forms a Boolean Algebra."
  },
  {
    id: "DM-U3-01",
    subjectId: "DM",
    unit: 3,
    years: [2024, 2023, 2021, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 4,
    repeatProbability: "94%",
    question: "Define Group and Abelian Group. State and prove Lagrange's Theorem for finite groups. Does the converse of Lagrange's theorem hold? Explain with a counterexample.",
    importance: "Tier 1",
    tags: ["Group Theory", "Lagrange's Theorem", "Cosets", "Subgroups"],
    solutionHint: `
- **Lagrange's Theorem**: The order of every subgroup $H$ of a finite group $G$ divides the order of $G$, i.e. $|G| = |H| \\cdot [G : H]$.
- **Proof Structure**:
  1. Form all distinct left cosets $aH$ of $H$ in $G$.
  2. Prove that any two left cosets are either identical or disjoint ($aH = bH$ or $aH \\cap bH = \\emptyset$).
  3. Prove each coset has exactly $|H|$ elements (bijection $f(h) = ah$).
  4. Since $G = \\bigcup a_i H$, $|G| = k \\cdot |H|$.
- **Converse**: Converse does NOT hold in general. Counterexample: Alternating group $A_4$ has order 12, but has no subgroup of order 6.
    `,
    examTip: "Always give the counterexample $A_4$ (Alternating Group of degree 4, order 12) for full marks."
  },
  {
    id: "DM-U4-01",
    subjectId: "DM",
    unit: 4,
    years: [2024, 2023, 2022, 2021, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 5,
    repeatProbability: "98% (Guaranteed)",
    question: "Solve the recurrence relation: a_n - 7a_{n-1} + 10a_{n-2} = 0 for n >= 2 with initial conditions a_0 = 1, a_1 = 8 using characteristic roots method.",
    importance: "Tier 1",
    tags: ["Recurrence Relations", "Characteristic Equation", "Sequences"],
    solutionHint: `
- Characteristic Equation: $r^2 - 7r + 10 = 0$.
- Factorization: $(r - 2)(r - 5) = 0 \\implies r_1 = 2, r_2 = 5$.
- General solution: $a_n = C_1(2^n) + C_2(5^n)$.
- Apply initial conditions:
  - $n = 0: a_0 = C_1 + C_2 = 1 \\implies C_1 = 1 - C_2$.
  - $n = 1: a_1 = 2C_1 + 5C_2 = 8$.
  - Substitute: $2(1 - C_2) + 5C_2 = 8 \\implies 2 + 3C_2 = 8 \\implies 3C_2 = 6 \\implies C_2 = 2$.
  - $C_1 = 1 - 2 = -1$.
- Particular Solution: $a_n = -1(2^n) + 2(5^n) = 2 \\cdot 5^n - 2^n$.
    `,
    examTip: "Check your answer by testing $a_2 = 2(25) - 4 = 46$ against recurrence: $7(8) - 10(1) = 56 - 10 = 46$."
  },
  {
    id: "DM-U5-01",
    subjectId: "DM",
    unit: 5,
    years: [2024, 2023, 2022, 2021],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 4,
    repeatProbability: "95% (High Yield)",
    question: "Define Euler Path, Euler Circuit, Hamiltonian Path, and Hamiltonian Cycle. State necessary and sufficient conditions for a connected graph to possess an Euler Circuit. Determine whether the Petersen Graph is Hamiltonian.",
    importance: "Tier 1",
    tags: ["Graph Theory", "Euler Graph", "Hamiltonian Graph", "Petersen Graph"],
    solutionHint: `
- **Euler Circuit Theorem**: A connected graph has an Euler circuit if and only if every vertex has an **even degree**.
- **Euler Path Theorem**: A connected graph has an Euler path if and only if it has exactly **zero or two vertices of odd degree**.
- **Hamiltonian**: Visits every vertex exactly once.
- **Petersen Graph**: Has a Hamiltonian Path, but is famously **non-Hamiltonian** (has no Hamiltonian cycle).
    `,
    examTip: "Draw the Petersen graph clearly (5-star inside a 5-gon) and show why removing vertices destroys the cycle condition."
  },

  // ==========================================
  // OBJECT ORIENTED PROGRAMMING THROUGH JAVA (JAVA)
  // ==========================================
  {
    id: "JAVA-U1-01",
    subjectId: "JAVA",
    unit: 1,
    years: [2024, 2023, 2021, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 4,
    repeatProbability: "93%",
    question: "Explain the features of Java (Java buzzwords). Discuss JVM architecture (Classloader, JVM Memory, Execution Engine) and explain why Java is platform independent.",
    importance: "Tier 1",
    tags: ["JVM", "Platform Independence", "Bytecode", "Buzzwords"],
    solutionHint: `
- Buzzwords: Simple, Object-Oriented, Platform-Independent (WORA), Robust, Secure, Architecture-Neutral, Portable, High Performance, Multithreaded, Distributed, Dynamic.
- **Platform Independence**: Java compiler produces intermediate .class bytecode. Any OS with a JRE/JVM can execute it.
- **JVM Architecture Components**:
  - Class Loader Subsystem (Loading, Linking, Initialization).
  - JVM Memory Areas: Method Area, Heap Area (objects), Stack Area (frames), PC Registers, Native Method Stacks.
  - Execution Engine (Interpreter + JIT Compiler + Garbage Collector).
    `,
    examTip: "Draw the JVM architecture diagram with memory regions. This is a favorite MGIT theory question."
  },
  {
    id: "JAVA-U2-01",
    subjectId: "JAVA",
    unit: 2,
    years: [2024, 2023, 2022, 2021, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 5,
    repeatProbability: "98% (Guaranteed)",
    question: "What is an Interface in Java? How does Java achieve multiple inheritance through interfaces? Write a Java program demonstrating a class implementing multiple interfaces.",
    importance: "Tier 1",
    tags: ["Interface", "Multiple Inheritance", "Polymorphism", "Java-Code"],
    solutionHint: `
- Why Java doesn't support multiple inheritance through classes: Diamond Problem (ambiguity in method lookup).
- **Interface Solution**: An interface contains abstract methods. Since implementing class provides the body, ambiguity is eliminated.
\`\`\`java
interface Printable { void print(); }
interface Showable { void show(); }
class Document implements Printable, Showable {
    public void print() { System.out.println("Printing..."); }
    public void show() { System.out.println("Showing..."); }
}
\`\`\`
- Discuss default and static methods introduced in Java 8.
    `,
    examTip: "Explain the Diamond Problem with a diamond diagram showing classes A, B, C, D."
  },
  {
    id: "JAVA-U3-01",
    subjectId: "JAVA",
    unit: 3,
    years: [2024, 2023, 2022, 2021, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 5,
    repeatProbability: "98% (Guaranteed)",
    question: "What is Exception Handling in Java? Explain the usage of try, catch, finally, throw, and throws keywords. Write a Java program to create and handle a user-defined custom exception 'InvalidAgeException'.",
    importance: "Tier 1",
    tags: ["Exception Handling", "Custom Exception", "throw vs throws", "Try-Catch"],
    solutionHint: `
\`\`\`java
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}
public class TestCustomException {
    static void checkAge(int age) throws InvalidAgeException {
        if (age < 18) throw new InvalidAgeException("Age must be >= 18 for voting eligibility.");
        else System.out.println("Access granted - Eligible to vote!");
    }
    public static void main(String[] args) {
        try {
            checkAge(15);
        } catch (InvalidAgeException e) {
            System.out.println("Caught Exception: " + e.getMessage());
        } finally {
            System.out.println("Execution completed.");
        }
    }
}
\`\`\`
- Differentiate between checked and unchecked exceptions.
    `,
    examTip: "Writing the full compilable code for custom exception guarantees 10/10 marks."
  },
  {
    id: "JAVA-U3-02",
    subjectId: "JAVA",
    unit: 3,
    years: [2024, 2022, 2021, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 4,
    repeatProbability: "95% (High Yield)",
    question: "Explain the Life Cycle of a Thread in Java with state diagram. What is Thread Synchronization? Write a program demonstrating synchronized method or block to avoid Race Condition.",
    importance: "Tier 1",
    tags: ["Multithreading", "Thread Life Cycle", "Synchronization", "Race Condition"],
    solutionHint: `
- States: New -> Runnable -> Running -> Blocked / Waiting / Timed Waiting -> Terminated / Dead.
- Methods: \`start()\`, \`yield()\`, \`sleep()\`, \`wait()\`, \`notify()\`, \`join()\`.
- **Race Condition**: Multiple threads concurrently modify shared data leading to inconsistent output.
- **Synchronization**: Using \`synchronized\` keyword acquires intrinsic lock (monitor) on object.
    `,
    examTip: "Draw the complete state transition diagram with arrows labeled by methods like start(), sleep(), wait(), notify()."
  },
  {
    id: "JAVA-U4-01",
    subjectId: "JAVA",
    unit: 4,
    years: [2024, 2023, 2022, 2021],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 4,
    repeatProbability: "93%",
    question: "Discuss the Java Collections Framework hierarchy. Compare: (i) ArrayList vs LinkedList, (ii) HashMap vs TreeMap, (iii) HashSet vs TreeSet.",
    importance: "Tier 1",
    tags: ["Collections", "ArrayList vs LinkedList", "HashMap", "Generics"],
    solutionHint: `
- Diagram: Collection interface -> List, Set, Queue. Map is standalone hierarchy.
- **ArrayList vs LinkedList**:
  - ArrayList: Dynamic array, $O(1)$ random access, slow $O(n)$ insertion/deletion in middle.
  - LinkedList: Doubly linked list, sequential access $O(n)$, fast $O(1)$ insertion/deletion if pointer known.
- **HashMap vs TreeMap**: HashMap is unordered $O(1)$ lookup via hashing; TreeMap is sorted by natural key order $O(\\log n)$ via Red-Black tree.
    `,
    examTip: "Draw the Collections Framework interface hierarchy diagram."
  },

  // ==========================================
  // DIGITAL LOGIC DESIGN (DLD)
  // ==========================================
  {
    id: "DLD-U1-01",
    subjectId: "DLD",
    unit: 1,
    years: [2024, 2023, 2021, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 4,
    repeatProbability: "94%",
    question: "Perform arithmetic operations using 1's and 2's complement representations:\\n(i) (45)_{10} - (23)_{10} using 2's complement\\n(ii) (18)_{10} - (35)_{10} using 2's complement\\n(iii) State De Morgan's theorems and verify using truth tables.",
    importance: "Tier 1",
    tags: ["Complements", "Subtractions", "De Morgan's Laws", "Boolean Algebra"],
    solutionHint: `
- Convert to 8-bit binary:
  - $45 = 00101101_2$
  - $23 = 00010111_2 \\implies 2's$ complement of $23 = 11101001_2$.
  - Add: $00101101 + 11101001 = (1)00010110_2$. End carry generated -> discard carry -> result is positive $+22_{10}$.
- For negative result: $18 - 35$: No end carry -> take 2's complement of sum and attach negative sign.
- De Morgan's: $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$ and $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$.
    `,
    examTip: "When carry is generated in 2's complement subtraction, state explicitly: 'End carry indicates result is positive, discard carry'."
  },
  {
    id: "DLD-U2-01",
    subjectId: "DLD",
    unit: 2,
    years: [2024, 2023, 2022, 2021, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 5,
    repeatProbability: "99% (Guaranteed)",
    question: "Minimize the following 4-variable Boolean function using Karnaugh Map (K-Map):\\nF(A, B, C, D) = \\sum m(0, 2, 5, 7, 8, 10, 13, 15) + d(1, 4, 11).\\nImplement the minimized expression using NAND gates only.",
    importance: "Tier 1",
    tags: ["K-Map", "Gate Minimization", "NAND Implementation", "Don't Care"],
    solutionHint: `
- Draw 4x4 K-map with Gray code rows $AB: 00, 01, 11, 10$ and columns $CD: 00, 01, 11, 10$.
- Plot minterms '1' at 0, 2, 5, 7, 8, 10, 13, 15 and 'X' at 1, 4, 11.
- Form groupings (Octets / Quads / Pairs):
  - Corner Quad: cells (0, 2, 8, 10) gives $\\bar{B} \\bar{D}$.
  - Middle Quad: cells (5, 7, 13, 15) gives $B D$.
- Minimized SOP: $F = \\bar{B} \\bar{D} + B D$ (XNOR operation).
- NAND implementation: Double negate expression: $\\overline{\\overline{\\bar{B}\\bar{D} + BD}} = \\overline{\\overline{\\bar{B}\\bar{D}} \\cdot \\overline{BD}}$.
    `,
    examTip: "K-Map minimization with universal NAND or NOR gate implementation is 100% tested in every single MGIT DLD examination."
  },
  {
    id: "DLD-U3-01",
    subjectId: "DLD",
    unit: 3,
    years: [2024, 2023, 2022, 2021],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 4,
    repeatProbability: "96% (High Yield)",
    question: "Design a Full Adder circuit using two Half Adders and an OR gate. Derive the truth table, Boolean expressions for Sum and Carry, and draw the logic circuit.",
    importance: "Tier 1",
    tags: ["Full Adder", "Combinational Circuits", "Half Adder"],
    solutionHint: `
- Inputs: $A, B, C_{in}$; Outputs: $Sum, C_{out}$.
- Truth Table has 8 combinations.
- $Sum = A \\oplus B \\oplus C_{in}$.
- $C_{out} = A B + (A \\oplus B) C_{in}$.
- Circuit:
  - First Half Adder takes $A$ and $B$, produces $S_1 = A \\oplus B$ and $C_1 = AB$.
  - Second Half Adder takes $S_1$ and $C_{in}$, produces $Sum = S_1 \\oplus C_{in}$ and $C_2 = S_1 \\cdot C_{in}$.
  - OR gate combines $C_1 + C_2$ to produce $C_{out}$.
    `,
    examTip: "Derive the equations step-by-step from Boolean algebra before drawing the circuit."
  },
  {
    id: "DLD-U3-02",
    subjectId: "DLD",
    unit: 3,
    years: [2023, 2022, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 3,
    repeatProbability: "91%",
    question: "What is a Multiplexer? Design and implement a 8:1 Multiplexer using two 4:1 Multiplexers and logic gates.",
    importance: "Tier 1",
    tags: ["MUX", "Multiplexer", "Combinational Logic"],
    solutionHint: `
- An 8:1 MUX has 8 data inputs ($I_0 - I_7$), 3 selection lines ($S_2, S_1, S_0$), and 1 output $Y$.
- A 4:1 MUX has 4 inputs and 2 selection lines ($S_1, S_0$).
- Connect lower selection lines $S_1, S_0$ to both 4:1 MUX units.
- Connect $I_0 - I_3$ to First MUX and $I_4 - I_7$ to Second MUX.
- Use most significant select line $S_2$ with enable inputs (or connect to a 2:1 MUX / OR gate with AND gates) to activate the appropriate MUX.
    `,
    examTip: "Show the functional truth table and enable line control clearly."
  },
  {
    id: "DLD-U4-01",
    subjectId: "DLD",
    unit: 4,
    years: [2024, 2023, 2022, 2021, 2020],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 5,
    repeatProbability: "98% (Guaranteed)",
    question: "Explain the working of Master-Slave JK Flip-Flop with logic diagram and timing diagram. How does it eliminate the Race Around Condition encountered in JK Flip-Flop?",
    importance: "Tier 1",
    tags: ["JK Flip-Flop", "Master-Slave", "Race Around Condition", "Sequential Circuits"],
    solutionHint: `
- **Race Around Condition**: When $J=1, K=1$ and clock pulse width $t_p > t_{pd}$ (propagation delay), output toggles continuously during the positive clock duration, leading to uncertain state at end of clock pulse.
- **Master-Slave Solution**:
  - Two stages: Master flip-flop triggered on positive edge ($CLK=1$), Slave flip-flop triggered on negative edge (inverted clock $\\overline{CLK}$).
  - When $CLK=1$, master responds to inputs while slave is isolated.
  - When $CLK=0$, master is disabled, slave copies master's state.
  - Thus output changes only once per clock cycle!
    `,
    examTip: "Always draw the internal NAND gate diagram showing the inverter between master and slave clocks."
  },
  {
    id: "DLD-U5-01",
    subjectId: "DLD",
    unit: 5,
    years: [2024, 2023, 2022, 2021],
    examType: "Regular",
    part: "B",
    marks: 10,
    frequency: 4,
    repeatProbability: "95% (High Yield)",
    question: "Design a 3-bit Synchronous Up-Counter using JK Flip-Flops. Draw the state transition table, state diagram, K-maps for J and K inputs, and the final logic circuit.",
    importance: "Tier 1",
    tags: ["Synchronous Counter", "Counter Design", "JK Flip-Flop", "State Table"],
    solutionHint: `
1. **State Sequence**: $000 \\to 001 \\to 010 \\to 011 \\to 100 \\to 101 \\to 110 \\to 111 \\to 000$.
2. **JK Flip-Flop Excitation Table**:
   - $0 \\to 0: J=0, K=X$
   - $0 \\to 1: J=1, K=X$
   - $1 \\to 0: J=X, K=1$
   - $1 \\to 1: J=X, K=0$
3. **K-Map minimization for inputs ($Q_2, Q_1, Q_0$):**
   - $J_0 = 1, K_0 = 1$
   - $J_1 = Q_0, K_1 = Q_0$
   - $J_2 = Q_1 Q_0, K_2 = Q_1 Q_0$
4. **Draw Circuit**: Common clock applied to all flip-flops simultaneously. AND gate feeds $Q_1 Q_0$ to FF2.
    `,
    examTip: "Writing the JK excitation table first is mandatory for scoring full marks."
  }
];

// High-Yield Must-Prepare Questions (Curated Master List for Exam Day)
const HIGH_YIELD_TOPICS = [
  {
    subject: "Data Structures",
    subjectId: "DS",
    unit: 1,
    topic: "Infix to Postfix conversion using Stack & Evaluation",
    recurrence: "4/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "Data Structures",
    subjectId: "DS",
    unit: 2,
    topic: "Singly Linked List Reversal & Circular Queue insertion/deletion",
    recurrence: "5/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "Data Structures",
    subjectId: "DS",
    unit: 3,
    topic: "AVL Tree Rotations (LL, RR, LR, RL) construction with keys",
    recurrence: "4/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "Data Structures",
    subjectId: "DS",
    unit: 4,
    topic: "Prim's & Kruskal's MST Algorithms with step-by-step trace",
    recurrence: "4/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "Data Structures",
    subjectId: "DS",
    unit: 5,
    topic: "Quick Sort Divide-and-Conquer & Hash Collision Resolution (Linear Probing)",
    recurrence: "4/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "Computer Organization & Architecture",
    subjectId: "COA",
    unit: 1,
    topic: "Addressing Modes (Direct, Indirect, Indexed, Relative) & EA formula",
    recurrence: "4/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "Computer Organization & Architecture",
    subjectId: "COA",
    unit: 3,
    topic: "Booth's Multiplication Algorithm with flowchart and signed binary trace",
    recurrence: "5/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "Computer Organization & Architecture",
    subjectId: "COA",
    unit: 4,
    topic: "Cache Mapping Techniques (Direct, Associative, Set-Associative)",
    recurrence: "4/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "Computer Organization & Architecture",
    subjectId: "COA",
    unit: 5,
    topic: "DMA Transfer Modes & Pipelining Hazards (Structural, Data, Control)",
    recurrence: "4/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "Discrete Mathematics",
    subjectId: "DM",
    unit: 1,
    topic: "PDNF & PCNF determination using Truth Table",
    recurrence: "5/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "Discrete Mathematics",
    subjectId: "DM",
    unit: 2,
    topic: "Poset Hasse Diagram & Lattice validation (Divisors D_n)",
    recurrence: "4/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "Discrete Mathematics",
    subjectId: "DM",
    unit: 3,
    topic: "Lagrange's Theorem on subgroup orders with counterexample",
    recurrence: "4/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "Discrete Mathematics",
    subjectId: "DM",
    unit: 4,
    topic: "Homogeneous & Non-Homogeneous Recurrence Relations solving",
    recurrence: "5/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "Discrete Mathematics",
    subjectId: "DM",
    unit: 5,
    topic: "Euler Circuit necessary & sufficient conditions + Hamiltonian cycles",
    recurrence: "4/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "OOP Through Java",
    subjectId: "JAVA",
    unit: 1,
    topic: "JVM Architecture diagram & Bytecode Platform Independence",
    recurrence: "4/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "OOP Through Java",
    subjectId: "JAVA",
    unit: 2,
    topic: "Multiple Inheritance implementation using Interfaces & Diamond Problem",
    recurrence: "5/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "OOP Through Java",
    subjectId: "JAVA",
    unit: 3,
    topic: "User-defined Custom Exception handling with throw, throws, try-catch",
    recurrence: "5/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "OOP Through Java",
    subjectId: "JAVA",
    unit: 3,
    topic: "Thread Life Cycle State diagram & Inter-Thread Synchronization",
    recurrence: "4/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "Digital Logic Design",
    subjectId: "DLD",
    unit: 2,
    topic: "4-variable K-Map minimization with Don't Care and Universal NAND realization",
    recurrence: "5/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "Digital Logic Design",
    subjectId: "DLD",
    unit: 3,
    topic: "Full Adder implementation using two Half Adders & OR gate",
    recurrence: "4/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "Digital Logic Design",
    subjectId: "DLD",
    unit: 4,
    topic: "Master-Slave JK Flip-Flop eliminating Race-Around condition",
    recurrence: "5/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  },
  {
    subject: "Digital Logic Design",
    subjectId: "DLD",
    unit: 5,
    topic: "3-bit Synchronous Up-Counter design using JK Flip-Flops and Excitation Table",
    recurrence: "4/5 Years",
    scoreWeight: "10 Marks",
    priority: "Tier 1 - Highest"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SUBJECTS_METADATA, PYQ_DATABASE, HIGH_YIELD_TOPICS };
}
