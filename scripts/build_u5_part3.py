# -*- coding: utf-8 -*-
"""
Generates high-yield academic solutions for COA Unit 5 Part 3: Questions 65 to 95
(COA-B5-0447 to COA-B5-0477) - 5M University Examination Questions.
"""
import json

prev = {}
for p in ['scripts/u5_p1_data.json', 'scripts/u5_p2_data.json']:
    try:
        with open(p, 'r', encoding='utf-8') as f:
            prev.update(json.load(f))
    except Exception:
        pass

solutions = {}

# 65. [COA-B5-0447] (5M) Discuss about the following interconnection structures: i. Time-shared common bus ii. Crossbar switch.
solutions["COA-B5-0447"] = """### Comparison of Interconnection Structures

#### 1. Time-Shared Common Bus:
- A single set of shared physical wires (address, data, control) shared by all CPUs, memory modules, and I/O controllers.
- **Operating Principle:** Only one bus master can transmit data at any given clock cycle. Access is granted through time-sharing bus arbiters.
- **Strengths:** Lowest hardware cost, minimal physical pins, and high modularity.
- **Weaknesses:** Bounded bandwidth; severe bus contention as system scales beyond 16 CPUs. Single point of failure.

#### 2. Crossbar Switch:
- A two-dimensional non-blocking switching matrix where horizontal processor paths intersect vertical memory module paths.
- **Operating Principle:** A switching element at each crosspoint $(i, j)$ connects CPU $i$ directly to Memory $j$. As long as processors request distinct memory banks, **all transfers proceed concurrently with zero wait states**.
- **Strengths:** Maximum bandwidth; non-blocking parallel communication.
- **Weaknesses:** Hardware complexity and silicon cost grow quadratically as $O(n \\times m)$.
"""

# 66. [COA-B5-0448] (5M) Explain about vector processing.
solutions["COA-B5-0448"] = prev["COA-A5-0396"]

# 67. [COA-B5-0449] (5M) Explain the instruction pipeline processing in RISC architecture.
solutions["COA-B5-0449"] = """### 1. Conceptual Principle of RISC Pipelining
The **Reduced Instruction Set Computer (RISC)** architecture is inherently designed for maximum pipelining efficiency. Because RISC instructions possess uniform length (32 bits), few formats, and strict register-to-register operations, every instruction can flow smoothly through an assembly-line pipeline without complex decoding stalls.

---

### 2. Classic 5-Stage RISC Instruction Pipeline

```
+------------+       +------------+       +------------+       +------------+       +------------+
|  Stage 1   |       |  Stage 2   |       |  Stage 3   |       |  Stage 4   |       |  Stage 5   |
|     IF     |====>==|     ID     |====>==|     EX     |====>==|    MEM     |====>==|     WB     |
| Inst Fetch |       | Inst Decode|       | Execute/ALU|       | Memory Read|       | Write-Back |
| (from I-$) |       | & Reg Read |       | or Addr Gen|       | or Write   |       | to Reg File|
+------------+       +------------+       +------------+       +------------+       +------------+
```

1. **IF (Instruction Fetch):** Fetch 32-bit instruction from Instruction Cache using the $PC$; increment $PC \\leftarrow PC + 4$.
2. **ID (Instruction Decode / Register Read):** Read source registers $Rs_1$ and $Rs_2$ from the 32-entry register file; sign-extend 16-bit immediate field.
3. **EX (Execute / Address Calculation):**
   - Arithmetic/Logical: ALU computes operation (e.g., $Rs_1 + Rs_2$).
   - Load/Store: ALU computes effective address ($Base + Offset$).
   - Branch: ALU evaluates condition and computes branch target.
4. **MEM (Memory Access):** If `LOAD`, read data from Data Cache; if `STORE`, write data to Data Cache. Bypassed for arithmetic instructions.
5. **WB (Write-Back):** Write ALU result or loaded memory word into destination register $Rd$.

---

### 3. Why RISC Pipelining Achieves Peak Performance
- **Fixed Instruction Length:** Instruction Fetch always fetches exactly 4 bytes; no variable-length instruction decoding latency.
- **Single-Cycle ALU Operations:** Arithmetic executes in a single balanced clock cycle.
- **Load/Store Architecture:** Memory access is restricted to stage 4 (MEM), eliminating memory conflicts in ALU execution.
"""

# 68. [COA-B5-0450] (5M) Elucidate array processor in detail
solutions["COA-B5-0450"] = prev["COA-B5-0434"]

# 69. [COA-B5-0451] (5M) What are the various forms available for establishing an interconnection network in a multi-processor system?
solutions["COA-B5-0451"] = prev["COA-B5-0430"]

# 70. [COA-B5-0452] (5M) Does pipelining get affected by data dependencies among instructions? Explain with example and solutions.
solutions["COA-B5-0452"] = """### 1. Data Dependencies in Pipelined Processors
Yes, **data dependencies** fundamentally impact pipelined performance by inducing **Data Hazards**, which force pipeline stages to stall or produce corrupted results if instructions execute out of mathematical order.

A data dependency occurs when instruction $I_2$ requires the computational result of an immediately preceding instruction $I_1$ before $I_1$ has completed its Write-Back stage.

---

### 2. Concrete Example: Read-After-Write (RAW) Hazard
Consider the instruction sequence:
```assembly
I1: ADD R1, R2, R3   ; R1 <- R2 + R3 (Computed in EX, written back in WB at cycle 5)
I2: SUB R4, R1, R5   ; R4 <- R1 - R5 (Reads R1 during ID stage at cycle 3)
```

#### Pipeline Timing Without Resolution:
- At **Cycle 3**, $I_2$ enters the ID stage and reads the register file to fetch operand $R_1$.
- However, $I_1$ is only in the EX stage; its updated sum is still inside the ALU and will not be written to register $R_1$ until **Cycle 5 (WB)**!
- Result: $I_2$ reads the **stale, incorrect old value** of $R_1$!

---

### 3. Architectural Solutions

#### A. Hardware Operand Forwarding (Bypassing):
- Rather than waiting for $I_1$ to write back to the register file, special feedback multiplexers route the ALU output directly from the **EX/MEM pipeline register** straight into the ALU input for $I_2$ at Cycle 4.
- **Result:** Resolves the RAW hazard with **zero stall cycles**!

#### B. Compiler Instruction Scheduling (Software Interleaving):
- The optimizing compiler detects the dependency between $I_1$ and $I_2$ and inserts independent instructions between them:
  ```assembly
  I1: ADD R1, R2, R3
  I_indep1: MOV R8, R9    ; Fills hazard slot
  I_indep2: XOR R6, R7    ; Fills hazard slot
  I2: SUB R4, R1, R5      ; Now R1 is safely written back!
  ```

#### C. Hardware Interlock / Pipeline Stall:
- If operand forwarding cannot resolve the hazard (e.g., Load-Use data hazard where data is only available after MEM stage), hazard detection hardware inserts a 1-cycle stall bubble.
"""

# 71. [COA-B5-0453] (5M) Explain 8x8 omega switching network for multistage switching networks to control processor-memory communication in a tightly coupled multiprocessor system.
solutions["COA-B5-0453"] = """### 1. Architectural Concept of the Omega Network
An **Omega Network** is a class of Multistage Interconnection Networks (MIN) that provides dynamic routing between $N$ processor inputs and $N$ memory module outputs using stages of $2 \\times 2$ crossbar switching elements.

- For $N = 8$:
  - **Number of Stages:** $s = \\log_2(N) = \\log_2(8) = \\mathbf{3\\text{ stages}}$.
  - **Switches per Stage:** $N / 2 = 8 / 2 = \\mathbf{4\\text{ switches}}$.
  - **Total Switches:** $3 \\times 4 = \\mathbf{12\\text{ switching elements}}$ (far fewer than the 64 crosspoints of an $8 \\times 8$ full crossbar).

---

### 2. Perfect Shuffle Topology & Switching States
Each stage is preceded by a **Perfect Shuffle** interconnection pattern that maps input index $i$ to output index $j$:
$$j = \\begin{cases} 2i & \\text{if } 0 \\le i \\le N/2 - 1 \\\\ 2i + 1 - N & \\text{if } N/2 \\le i \\le N - 1 \\end{cases}$$
In binary, this corresponds to a **circular 1-bit left shift** of the address bits ($b_2 b_1 b_0 \\rightarrow b_1 b_0 b_2$).

#### $2 \\times 2$ Switching Element States:
Each switch can be placed into two routing configurations:
1. **Direct (Through):** Upper input connects to upper output; lower input connects to lower output.
2. **Crossed:** Upper input connects to lower output; lower input connects to upper output.

---

### 3. Distributed Self-Routing Protocol
Routing through the Omega network is distributed and decentralized based on the binary bits of the **destination memory address** ($D = d_2 d_1 d_0$):
- **Stage 1:** Switch inspects MSB bit $d_2$. If $d_2 = 0$, route out of upper port; if $d_2 = 1$, route out of lower port.
- **Stage 2:** Switch inspects middle bit $d_1$. If $d_1 = 0$, route upper; if $d_1 = 1$, route lower.
- **Stage 3:** Switch inspects LSB bit $d_0$. If $d_0 = 0$, route upper; if $d_0 = 1$, route lower.
"""

# 72. [COA-B5-0454] (5M) Draw the block diagram of Parallel Processing.
solutions["COA-B5-0454"] = """### 1. Conceptual Principle
Parallel processing executes concurrent data operations across replicated functional units.

---

### 2. General Block Diagram of Parallel Processing Architecture

```
                                  Instruction Stream
                                         |
                                         v
                         +-------------------------------+
                         |     Control & Dispatch Unit   |
                         +-------------------------------+
                                         |
          +------------------------------+------------------------------+
          |                              |                              |
          v                              v                              v
  +---------------+              +---------------+              +---------------+
  |  Processor /  |              |  Processor /  |              |  Processor /  |
  | Functional    |              | Functional    |              | Functional    |
  | Unit 1 (ALU1) |              | Unit 2 (ALU2) |              | Unit N (ALUN) |
  +---------------+              +---------------+              +---------------+
          ^                              ^                              ^
          |                              |                              |
          +------------------------------+------------------------------+
                                         |
                                         v
                         +-------------------------------+
                         | Interconnection Network / Bus |
                         +-------------------------------+
                                         |
                                         v
                         +-------------------------------+
                         |   Shared Memory / Subsystems  |
                         +-------------------------------+
```
"""

# 73. [COA-B5-0455] (5M) Explain in brief the serial arbitration (daily-chain) procedure.
solutions["COA-B5-0455"] = prev["COA-B5-0420"]

# 74. [COA-B5-0456] (5M) Explain the functionality of arithmetic pipeline with an example.
solutions["COA-B5-0456"] = prev["COA-B5-0425"]

# 75. [COA-B5-0457] (5M) Explain four segment CPU pipeline and Timing of instruction pipeline.
solutions["COA-B5-0457"] = prev["COA-B5-0422"]

# 76. [COA-B5-0458] (5M) Illustrate serial and parallel arbitration produces in a shared multiprocessor environment.
solutions["COA-B5-0458"] = prev["COA-B5-0420"]

# 77. [COA-B5-0459] (5M) Explain RISC instruction pipeline in detail?
solutions["COA-B5-0459"] = solutions["COA-B5-0449"]

# 78. [COA-B5-0460] (5M) Discuss about the following Interconnection structures i. Multiport memory ii. Hypercube system.
solutions["COA-B5-0460"] = """### Comparison of Interconnection Structures

#### 1. Multiport Memory:
- Each physical memory module is equipped with multiple physical access ports, with dedicated address, data, and control lines for each connected CPU.
- Internal arbitration logic at each memory module resolves conflicts only when two CPUs simultaneously access the *same* memory module.
- If $N$ processors access $N$ different memory modules, all transfers proceed in parallel with zero contention.
- **Trade-off:** Delivers massive aggregate bandwidth at high hardware packaging cost.

#### 2. Hypercube System ($n$-Dimensional Cube):
- A point-to-point network connecting $N = 2^n$ processor nodes in an $n$-dimensional cube structure.
- **Binary Addressing:** Each node is assigned an $n$-bit binary address ($0$ to $2^n - 1$).
- **Direct Interconnection Rule:** Two nodes are physically connected by a communication link if and only if their binary addresses differ by **exactly one bit**.
- **Network Properties:**
  - Node degree (links per node) $= n = \\log_2 N$.
  - Maximum network diameter (hops between farthest nodes) $= n = \\log_2 N$.
  - Excellent bisection bandwidth and fault tolerance for massively parallel computing.
"""

# 79. [COA-B5-0461] (5M) Explain about instruction pipeline in detail.
solutions["COA-B5-0461"] = prev["COA-B5-0422"]

# 80. [COA-B5-0462] (5M) With a neat diagram, explain parallel arbitration circuit.
solutions["COA-B5-0462"] = prev["COA-B5-0420"]

# 81. [COA-B5-0463] (5M) What is meant by instruction pipeline? Explain four segment Instruction Pipeline. Give its timing diagram.
solutions["COA-B5-0463"] = prev["COA-B5-0422"]

# 82. [COA-B5-0464] (5M) What are the different major conflicts arising in pipelined execution.
solutions["COA-B5-0464"] = prev["COA-B5-0417"]

# 83. [COA-B5-0465] (5M) In detail describe multiport memory, cross bar switch and switching networks used for interconnecting multiprocessors.
solutions["COA-B5-0465"] = prev["COA-B5-0430"]

# 84. [COA-B5-0466] (5M) Define Parallel processing and what are the different types of parallel processing? How parallelism can be achieved in uni-processor system?
solutions["COA-B5-0466"] = """### 1. Definition and Flynn's Taxonomy
**Parallel Processing** is the simultaneous execution of multiple concurrent operations to accelerate computation.
Flynn's classification categorizes parallel systems into:
- **SISD:** Single Instruction, Single Data (Classic von Neumann uniprocessor).
- **SIMD:** Single Instruction, Multiple Data (Vector and Array Processors).
- **MISD:** Multiple Instruction, Single Data (Systolic arrays, voting systems).
- **MIMD:** Multiple Instruction, Multiple Data (Multi-core CPUs, distributed clusters).

---

### 2. How Parallelism is Achieved in a Uniprocessor System
Even within a single CPU, parallelism is achieved at multiple architectural levels:
1. **Instruction Pipelining:** Overlapping Fetch, Decode, Execute, and Write-Back stages.
2. **Multiple Functional Execution Units:** Housing independent dedicated ALUs (Integer ALU, Floating-point Adder, Multiplier/Divider, Shifter) operating concurrently.
3. **Superscalar Architecture:** Multiple instruction fetch and dispatch units that issue $2$ to $4$ instructions per clock cycle.
4. **Memory Interleaving & Multi-Level Cache:** Overlapping memory accesses across independent memory banks to fetch data in parallel.
"""

# 85. [COA-B5-0467] (5M) Explain about parallel arbitration logic.
solutions["COA-B5-0467"] = prev["COA-B5-0420"]

# 86. [COA-B5-0468] (5M) Explain about memory interleaving concept in vector processing.
solutions["COA-B5-0468"] = """### 1. Concept of Memory Interleaving
In vector processing, vector arithmetic pipelines demand an operand stream of one word per clock cycle. Standard DRAM cycle times ($50\\text{ ns}$) are much slower than CPU clock cycles ($1\\text{ ns}$). If consecutive vector elements resided in a single memory chip, the vector pipeline would stall on every cycle.

**Memory Interleaving** divides main physical memory into $M$ independent memory banks, each with its own internal address buffer and data registers.

---

### 2. Low-Order Interleaving for Vector Processing
In **Low-Order Interleaving**, consecutive memory addresses are assigned to consecutive physical banks:
$$\\text{Bank Number} = \\text{Address} \\pmod M$$
- Address bits are partitioned as:
  `[ Memory Address within Bank | Bank Select Bits (k bits, M = 2^k) ]`
- When a vector of length $M$ is accessed ($A[0], A[1], \\dots, A[M-1]$), the CPU initiates accesses across all $M$ banks **simultaneously in parallel**.
- The words arrive staggered or in parallel, saturating the vector pipeline at the maximum rate of **one operand per clock cycle with zero memory wait states**.
"""

# 87. [COA-B5-0469] (5M) Explain about four segment CPU pipeline with the help of flow chart.
solutions["COA-B5-0469"] = prev["COA-B5-0422"]

# 88. [COA-B5-0470] (5M) Compare and contrast RISC and CISC architectures.
solutions["COA-B5-0470"] = prev["COA-A5-0386"]

# 89. [COA-B5-0471] (5M) Explain instruction pipeline and its advantages.
solutions["COA-B5-0471"] = prev["COA-B5-0422"]

# 90. [COA-B5-0472] (5M) Explain characteristics of multiprocessor systems.
solutions["COA-B5-0472"] = prev["COA-B5-0414"]

# 91. [COA-B5-0473] (5M) Explain vector processing and array processors.
solutions["COA-B5-0473"] = prev["COA-B5-0434"]

# 92. [COA-B5-0474] (5M) With the diagram explain the crossbar switch interconnection structure for 8 CPUs and its memory module.
solutions["COA-B5-0474"] = prev["COA-B5-0430"]

# 93. [COA-B5-0475] (5M) With the neat diagram explain the concepts of pipelining with an example.
solutions["COA-B5-0475"] = prev["COA-B5-0422"]

# 94. [COA-B5-0476] (5M) Illustrate multistage switching network with an example.
solutions["COA-B5-0476"] = solutions["COA-B5-0453"]

# 95. [COA-B5-0477] (5M) Explain the concept of cache coherence problem and its solution.
solutions["COA-B5-0477"] = prev["COA-A5-0383"]

# Save Part 3 to file
with open('scripts/u5_p3_data.json', 'w', encoding='utf-8') as f:
    json.dump(solutions, f, indent=2, ensure_ascii=False)

print(f"Unit 5 Part 3: Questions 65 to 95 scripted successfully. Count: {len(solutions)}")
