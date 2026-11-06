# -*- coding: utf-8 -*-
"""
Generates high-yield academic solutions for COA Unit 5 Part 2: Questions 32 to 64
(COA-B5-0414 to COA-B5-0446) - 5M and 10M University Examination Questions.
"""
import json

prev = {}
for p in ['scripts/u5_p1_data.json']:
    try:
        with open(p, 'r', encoding='utf-8') as f:
            prev.update(json.load(f))
    except Exception:
        pass

solutions = {}

# 32. [COA-B5-0414] (5M) Explain the characteristics of multiprocessors.
solutions["COA-B5-0414"] = """### 1. Conceptual Definition of a Multiprocessor System
A **Multiprocessor System** is an autonomous computing system containing two or more Central Processing Units (CPUs) that share common physical memory, system buses, and peripheral I/O equipment, all coordinated under a single integrated operating system.

---

### 2. Core Architectural Characteristics

1. **Shared Physical Address Space:**
   - All processors access a global main memory via a uniform or non-uniform address space:
     - **UMA (Uniform Memory Access):** Equal memory access latency for all processors (Symmetric Multiprocessor - SMP).
     - **NUMA (Non-Uniform Memory Access):** Memory access latency depends on the physical distance between processor and memory bank.
2. **Hardware Interconnection Network:**
   - Processors and memory modules are linked via high-speed topologies: Time-Shared Bus, Crossbar Switch, Multiport Memory, or Multistage Omega Networks.
3. **Hardware Synchronization & Mutual Exclusion:**
   - Employs atomic read-modify-write hardware instructions (e.g., `Test-and-Set`, `Compare-and-Swap`) to arbitrate access to shared memory critical sections.
4. **Cache Coherence Enforcement:**
   - Uses hardware protocols (Snooping on shared buses or Directory-based tracking) to ensure data consistency across private processor caches.
5. **Operating System Organization:**
   - **Master-Slave:** One dedicated CPU executes OS routines; slave CPUs execute user tasks.
   - **Floating Master (Symmetric):** Any processor can execute OS and user tasks concurrently.

---

### 3. Benefits & Performance Gains
- **High Throughput:** Multiple independent processes or threads execute in true parallel fashion.
- **Graceful Degradation (Fault Tolerance):** If one processor suffers a hardware failure, the system dynamically reallocates tasks to remaining processors without total system crash.
"""

# 33. [COA-B5-0415] (10M) Explain inter processor communication and synchronization in a shared multiprocessor environment.
solutions["COA-B5-0415"] = """### 1. Fundamental Need for Communication and Synchronization
In a shared-memory multiprocessor system, multiple autonomous CPUs execute concurrent threads of a parallel task. For correct cooperative computation:
1. **Interprocessor Communication:** Processors must exchange data, operands, and control status.
2. **Interprocessor Synchronization:** Processors must coordinate the relative order of execution to enforce **Mutual Exclusion** in Critical Sections and prevent **Race Conditions**.

---

### 2. Interprocessor Communication Mechanisms

```
+-------------------------------------------------------------------------+
|                  INTERPROCESSOR COMMUNICATION PARADIGMS                 |
|                                                                         |
| 1. Shared Memory Mailbox:     2. Interprocessor Interrupts (IPI):       |
|    Processors read/write         One CPU writes to an IPI register      |
|    common data structures in     to trigger a hardware interrupt on     |
|    globally addressed RAM.       a targeted destination CPU.            |
+-------------------------------------------------------------------------+
```

1. **Shared Variables / Mailboxes:** Communication is inherently fast because data remains in common RAM. A sending CPU writes a message into a designated memory buffer and sets a flag; the receiving CPU reads it directly.
2. **Inter-Processor Interrupts (IPI):** A hardware mechanism where CPU $A$ pulses an interrupt control register to alert CPU $B$ of critical events (e.g., thread scheduling, cache flush).

---

### 3. Interprocessor Synchronization Techniques

#### A. Mutual Exclusion in Hardware (Atomic Instructions)
To prevent race conditions when two CPUs attempt to modify a shared variable simultaneously, hardware provides atomic **Read-Modify-Write** instructions:
1. **Test-and-Set ($TS$) Instruction:**
   - Reads the current value of a memory flag $M[x]$ and sets it to $1$ in **one indivisible bus cycle**:
     $$\\text{TS}(M[x]): \\quad Temp \\leftarrow M[x], \\quad M[x] \\leftarrow 1, \\quad \\text{Return } Temp$$
   - A processor loops waiting on $TS$ (Spinlock) until the critical section is freed:
     ```assembly
     Wait_Lock: TS Lock_Var
                BNE Wait_Lock   ; Loop if Lock was already 1
                ; --- Critical Section ---
                MOV Lock_Var, #0 ; Release Lock
     ```
2. **Compare-and-Swap (CAS):**
   - Compares memory location $V$ against expected value $A$; if equal, sets $V \\leftarrow B$; otherwise leaves $V$ unchanged.

#### B. Software Synchronization Primitives
1. **Semaphores:** Integer variables accessed via atomic $P$ (wait) and $V$ (signal) operations to coordinate producer-consumer relationships.
2. **Barriers:** Synchronization points where no processor can proceed until **all participating processors** have arrived.

---

### 4. Cache Coherence Interaction
Synchronization locks must be backed by cache coherence (MESI protocol). Without snooping or directory invalidation, a processor releasing a lock in its local cache might fail to notify spinning peers, causing permanent system deadlock.
"""

# 34. [COA-B5-0416] (5M) Explain Matrix multiplication in related with Vector Processing.
solutions["COA-B5-0416"] = """### 1. Conceptual Principle of Matrix Multiplication in Vector Processors
Multiplying two $n \\times n$ matrices $A$ and $B$ to produce $C = A \\times B$ requires computing $n^2$ distinct dot products:
$$C_{ij} = \\sum_{k=1}^n A_{ik} \\cdot B_{kj}$$
On a conventional scalar processor, this requires an $O(n^3)$ triple-nested loop with massive loop overhead, address arithmetic, and scalar multiply-accumulate stalls.

A **Vector Processor** treats an entire row of matrix $A$ or column of matrix $B$ as a single **vector operand**, mapping the computation directly onto pipelined vector arithmetic units.

---

### 2. Vectorized Matrix Multiplication Execution
1. **Row-by-Column Vector Dot Product:**
   - Load row vector $A_{i*}$ ($n$ elements) into **Vector Register 1 ($V_1$)**.
   - Load column vector $B_{*j}$ ($n$ elements) into **Vector Register 2 ($V_2$)**.
   - Issue a single vector instruction:
     $$V_3 \\leftarrow V_1 \\times V_2 \\quad (\\text{Element-wise Vector Multiply})$$
   - Pipelined vector multipliers output products on consecutive clock cycles.
2. **Vector Reduction / Chaining:**
   - A **Vector Sum Reduction** pipeline adds the elements of $V_3$ to yield the scalar result $C_{ij}$.
   - **Vector Chaining:** The multiplication output feeds directly into the addition pipeline before the entire vector multiplication finishes, overlapping operations.

---

### 3. Role of Memory Interleaving
Matrix elements must be streamed at the rate of one word per clock cycle.
- Row elements reside consecutively in memory (**Unit Stride**).
- Column elements reside separated by $n$ words (**Stride $= n$**).
- Heavily **interleaved multi-bank memory** allows fetching non-consecutive column elements across parallel banks simultaneously without memory stall penalties.
"""

# 35. [COA-B5-0417] (5M) List and explain various types of solutions for handling pipeline Hazards.
solutions["COA-B5-0417"] = """### 1. Classification of Pipeline Hazards
Pipeline hazards prevent the next instruction in the instruction stream from executing in its designated clock cycle:
1. **Structural Hazards (Resource Contention)**
2. **Data Hazards (Data Dependencies: RAW, WAR, WAW)**
3. **Control Hazards (Branch Penalties)**

---

### 2. Solutions for Pipeline Hazards

#### A. Solutions for Structural Hazards:
1. **Separate Instruction and Data Caches (Harvard Architecture):** Eliminates memory port conflicts between Instruction Fetch (IF) and Memory Operand Fetch (MEM).
2. **Pipelined / Multiplied Functional Units:** Duplicating ALUs or using pipelined floating-point units.
3. **Pipeline Stalling (Interlocking):** Inserting a hardware wait bubble when resource contention is unavoidable.

#### B. Solutions for Data Hazards:
1. **Hardware Operand Forwarding (Bypassing):** Routes the ALU computation result directly from the output of the Execute or Memory stage back to the input of the ALU for the next instruction, eliminating write-back stalls.
2. **Compiler Instruction Scheduling:** Compilers reorder independent instructions or insert `NOP` (No Operation) instructions to bridge data hazard latency.
3. **Out-of-Order Execution & Register Renaming:** (e.g., Tomasulo Algorithm) eliminates false WAR and WAW hazards by mapping architectural registers to physical register files.

#### C. Solutions for Control Hazards (Branches):
1. **Branch Prediction:**
   - **Static:** Predict branches always taken (or backward taken, forward not taken).
   - **Dynamic:** Uses 2-bit saturating counter state machines and Branch History Tables (BHT) to achieve $> 90\\%$ prediction accuracy.
2. **Delayed Branching:** The instruction immediately following the branch (in the **Branch Delay Slot**) is always executed regardless of branch outcome, filled by the compiler.
3. **Branch Target Buffer (BTB):** Small associative cache storing the target address and predicted instructions of previously encountered branches.
"""

# 36. [COA-B5-0418] (5M) Design Time Shared common bus structure for multiprocessors with a neat sketch.
solutions["COA-B5-0418"] = """### 1. Conceptual Principle
A **Time-Shared Common Bus** is the simplest and most economical interconnection structure for multiprocessors. All processors, memory units, and I/O channels share a single common set of communication paths (Address, Data, and Control lines).

- At any given clock cycle, **only one processor (or DMA controller)** can transmit data over the bus.
- Bus access is granted through time-sharing arbitration (Daisy-chaining or Centralized arbiter).

---

### 2. Hardware Architecture Diagram

```
       +-------------+       +-------------+       +-------------+
       | Processor 1 |       | Processor 2 |       | Processor N |
       | (with Cache)|       | (with Cache)|       | (with Cache)|
       +-------------+       +-------------+       +-------------+
              |                     |                     |
   ===========+=====================+=====================+=========== System Bus
              |                     |                     |            (Address,
       +-------------+       +-------------+       +-------------+      Data,
       | Shared RAM  |       | Shared RAM  |       | I/O Control |      Control)
       |  Module 1   |       |  Module 2   |       | Interfaces  |
       +-------------+       +-------------+       +-------------+
```

---

### 3. Advantages & Architectural Limitations
- **Advantages:**
  1. Low manufacturing cost and simple physical wiring.
  2. Trivial to add new processors (high modularity).
  3. Naturally supports **Bus Snooping** for cache coherence (all processors monitor bus broadcasts).
- **Limitations:**
  1. **Bandwidth Bottleneck:** The shared bus quickly saturates as the number of CPUs grows beyond $16$ to $32$.
  2. **Single Point of Failure:** A physical fault on the shared bus crashes the entire multiprocessor system.
"""

# 37. [COA-B5-0419] (5M) Distinguish between tightly coupled microprocessors and tightly coupled Microprocessors.
solutions["COA-B5-0419"] = prev["COA-A5-0389"]

# 38. [COA-B5-0420] (5M) Explain inter-process arbitration? Give various arbitration techniques with neat sketch and explain in detail.
solutions["COA-B5-0420"] = """### 1. Need for Interprocessor Bus Arbitration
When multiple processors share a common system bus, multiple processors may simultaneously request bus mastership.
**Bus Arbitration** is the hardware process that decides which processor is granted access to the shared bus for the next cycle.

Arbitration algorithms are broadly divided into:
1. **Serial Arbitration (Daisy-Chaining)**
2. **Parallel Arbitration**
3. **Dynamic Arbitration Algorithms**

---

### 2. Arbitration Techniques

#### A. Serial Arbitration (Daisy Chaining):
- Processors are connected in a physical serial chain.
- The highest priority processor sits closest to the arbiter. The **Bus Grant ($BG$)** signal propagates sequentially from processor to processor until a requesting unit intercepts it.

#### B. Parallel Priority Arbitration:
- Each processor asserts an independent Bus Request ($BR_i$) line into a centralized **Priority Encoder**.
- The encoder identifies the highest priority requester within a single clock cycle and asserts its corresponding Bus Grant line ($BG_i$).

```
       Processor Requests: BR0  BR1  BR2  BR3
                            |    |    |    |
                            v    v    v    v
                    +-----------------------------+
                    |   4x2 Priority Encoder      |
                    +-----------------------------+
                            |              |
                            v              v
                           y1             y0
                            |              |
                    +-----------------------------+
                    |    2x4 1-of-4 Decoder       |
                    +-----------------------------+
                            |    |    |    |
                            v    v    v    v
                    Bus Grants: BG0  BG1  BG2  BG3
```

#### C. Dynamic Arbitration Algorithms:
1. **Rotating Priority (Round-Robin):** The processor granted the bus is immediately reassigned the lowest priority for the subsequent cycle, guaranteeing fairness.
2. **Time-Slice Arbitration:** Allocates a fixed time slice of the bus sequentially to each processor in round-robin fashion.
3. **Least Recently Used (LRU):** Grants the bus to the processor that has gone unserved for the longest duration.
4. **FIFO (First-Come, First-Served):** Requests are queued in order of arrival.
"""

# 39. [COA-B5-0421] (5M) Write about Time shared common bus and multiport memory.
solutions["COA-B5-0421"] = """### Comparison: Time-Shared Common Bus vs. Multiport Memory

#### 1. Time-Shared Common Bus:
- A single shared physical bus shared by all CPUs and memory modules.
- Only one transfer can occur at any instant.
- **Cost:** Inexpensive and simple.
- **Performance:** Low to moderate throughput; severe bus contention as CPU count scales.

#### 2. Multiport Memory Architecture:
- Memory modules possess **multiple physical access ports**, with independent internal control and address logic for each connected processor.
- Each processor connects to each memory module via dedicated private buses.
- **Simultaneous Access:** If $N$ processors request $N$ *distinct* memory modules, all $N$ accesses proceed **simultaneously in parallel with zero wait states**.
- Internal hardware arbiters at each memory module resolve conflicts only when two CPUs contend for the *same* module.
- **Cost:** High wiring complexity and expensive silicon, but delivers vast aggregate memory bandwidth.
"""

# 40. [COA-B5-0422] (5M) Explain four segment pipelines with neat sketch and show the pipeline flow of execution through space time diagram.
solutions["COA-B5-0422"] = """### 1. Conceptual Principle of a 4-Segment CPU Pipeline
A 4-segment instruction pipeline decomposes instruction execution into four sequential balanced stages:
1. **FI (Fetch Instruction):** Read instruction from memory using the $PC$.
2. **DA (Decode Instruction & Calculate Address):** Decode opcode and determine effective operand address.
3. **FO (Fetch Operand):** Read operand from data memory or register file.
4. **EX (Execute & Write-Back):** Perform ALU operation and write result back to destination register.

---

### 2. Hardware Block Diagram

```
+------------+       +------------+       +------------+       +------------+
|  Stage 1   |       |  Stage 2   |       |  Stage 3   |       |  Stage 4   |
|     FI     |====>==|     DA     |====>==|     FO     |====>==|     EX     |
| Fetch Inst |  R1   |   Decode   |  R2   | Fetch Oper |  R3   |  Execute   |
+------------+       +------------+       +------------+       +------------+
      ^                    ^                    ^                    ^
      |                    |                    |                    |
   Clock Pulse -------- Clock Pulse -------- Clock Pulse -------- Clock Pulse
```
*(Inter-stage interface registers $R_1, R_2, R_3$ buffer intermediate results at each clock tick).*

---

### 3. Space-Time Diagram (Execution of 6 Instructions)

| Instruction | Cycle 1 | Cycle 2 | Cycle 3 | Cycle 4 | Cycle 5 | Cycle 6 | Cycle 7 | Cycle 8 | Cycle 9 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **$I_1$** | **FI** | **DA** | **FO** | **EX** | — | — | — | — | — |
| **$I_2$** | — | **FI** | **DA** | **FO** | **EX** | — | — | — | — |
| **$I_3$** | — | — | **FI** | **DA** | **FO** | **EX** | — | — | — |
| **$I_4$** | — | — | — | **FI** | **DA** | **FO** | **EX** | — | — |
| **$I_5$** | — | — | — | — | **FI** | **DA** | **FO** | **EX** | — |
| **$I_6$** | — | — | — | — | — | **FI** | **DA** | **FO** | **EX** |

#### Performance Derivation:
- Total Clock Cycles for $n=6$ instructions in $k=4$ stages:
  $$Cycles = k + n - 1 = 4 + 6 - 1 = 9\\text{ clock cycles}$$
- Non-pipelined equivalent requires:
  $$n \\times k = 6 \\times 4 = 24\\text{ clock cycles}$$
- **Speedup ($S$):** $S = \\frac{24}{9} \\approx 2.67\\times$.
"""

# 41. [COA-B5-0423] (5M) What are the various conflicts raised in the pipeline processing and give various solutions to handle conflicts.
solutions["COA-B5-0423"] = solutions["COA-B5-0417"]

# 42. [COA-B5-0424] (5M) Distinguish between RISC and CISC processor.
solutions["COA-B5-0424"] = prev["COA-A5-0386"]

# 43. [COA-B5-0425] (5M) Explain about the arithmetic pipeline.
solutions["COA-B5-0425"] = """### 1. Conceptual Principle of Arithmetic Pipelines
An **Arithmetic Pipeline** decomposes complex mathematical operations (such as floating-point addition, multiplication, or division) into a series of sequential sub-operations that can be executed concurrently on successive streams of numeric inputs.

---

### 2. 4-Stage Floating-Point Addition/Subtraction Pipeline
Consider adding two floating-point numbers:
$$X = A \\times 2^a, \\quad Y = B \\times 2^b$$
The execution is structured into four balanced stages:

1. **Stage 1: Compare Exponents and Align Mantissas**
   - Calculate exponent difference: $d = a - b$.
   - Shift the mantissa of the smaller number right by $|d|$ bits. Choose the larger exponent as the tentative result exponent.
2. **Stage 2: Add or Subtract Mantissas**
   - Add aligned mantissas: $S = A' \\pm B'$.
3. **Stage 3: Normalize Mantissa**
   - Shift mantissa left or right until normalized ($1.0 \\le M < 2.0$), adjusting the exponent accordingly.
4. **Stage 4: Rounding and Exception Check**
   - Perform IEEE rounding and test for exponent overflow/underflow.

---

### 3. Block Diagram

```
Operands X, Y ===> [ Sub-op 1: Exponent Compare & Align ] ===> R1
                               |
                               v
                   [ Sub-op 2: Mantissa Add/Sub ]        ===> R2
                               |
                               v
                   [ Sub-op 3: Normalize Result ]        ===> R3
                               |
                               v
                   [ Sub-op 4: Round & Check Overflow ]  ===> Output
```
Once filled, the arithmetic pipeline outputs one completed floating-point sum on **every single clock cycle**.
"""

# 44. [COA-B5-0426] (5M) Explain vector processing.
solutions["COA-B5-0426"] = prev["COA-A5-0396"]

# 45. [COA-B5-0427] (5M) Write a short note on I/O processor.
solutions["COA-B5-0427"] = """### 1. Role and Concept of an I/O Processor (IOP)
An **I/O Processor (IOP)**, or Channel Controller, is a dedicated autonomous processor with its own specialized instruction set designed to supervise and execute Input/Output operations completely independent of the main CPU.

---

### 2. Architectural Features
1. **Autonomous Instruction Fetch:** The IOP fetches and executes its own **Channel Programs** stored in main memory without CPU stepping.
2. **Direct Memory Access:** Can read and write main memory directly at full bus speeds.
3. **Multiplexing Capability:** Coordinates simultaneous data transfers across dozens of diverse peripherals (disks, tapes, serial lines).

---

### 3. Interaction Between CPU and IOP
1. The CPU initiates I/O by executing a `START I/O` instruction, passing the memory address of the IOP channel program to the IOP.
2. The CPU immediately resumes general computational processing.
3. The IOP executes its channel program, transferring data blocks to/from memory.
4. Upon block completion, the IOP asserts an interrupt to the CPU and writes a status word to memory.
"""

# 46. [COA-B5-0428] (5M) Explain about arithmetic pipeline with an example.
solutions["COA-B5-0428"] = solutions["COA-B5-0425"]

# 47. [COA-B5-0429] (5M) What is the Inter processor Synchronization? Explain the Synchronization techniques.
solutions["COA-B5-0429"] = solutions["COA-B5-0415"]

# 48. [COA-B5-0430] (5M) Explain various interconnection structures of a multiprocessor system with neat diagrams.
solutions["COA-B5-0430"] = """### 1. Interconnection Structures in Multiprocessors
Interconnection networks provide the physical communication channels between processors, memory modules, and I/O subsystems.
The five standard topologies are:
1. **Time-Shared Common Bus**
2. **Multiport Memory**
3. **Crossbar Switch**
4. **Multistage Switching Network (Omega Network)**
5. **Hypercube System**

---

### 2. Topologies & Architectural Diagrams

#### A. Crossbar Switch ($n \\times m$):
Connects $n$ processors to $m$ memory modules through a matrix of crosspoint switches. Any CPU can access any non-busy memory module simultaneously (non-blocking).

```
          Memory 1    Memory 2    Memory 3    Memory 4
             |           |           |           |
  CPU 1 -----X-----------X-----------X-----------X----
             |           |           |           |
  CPU 2 -----X-----------X-----------X-----------X----
             |           |           |           |
  CPU 3 -----X-----------X-----------X-----------X----
```

#### B. Hypercube System ($n$-Dimensional Cube):
A hypercube connects $N = 2^n$ processor nodes in an $n$-dimensional cube.
- 0-Cube: 1 node ($2^0$)
- 1-Cube: 2 nodes connected by a line ($2^1$)
- 2-Cube: 4 nodes in a square ($2^2$)
- 3-Cube: 8 nodes in a 3D cube ($2^3$)
- **Routing:** Direct links connect nodes whose binary IDs differ by **exactly one bit**. Diameter $= n = \\log_2 N$.
"""

# 49. [COA-B5-0431] (5M) Discuss the working and the importance of RISC architecture.
solutions["COA-B5-0431"] = prev["COA-A5-0386"]

# 50. [COA-B5-0432] (5M) Differentiate CISC and RISC Architectures.
solutions["COA-B5-0432"] = prev["COA-A5-0386"]

# 51. [COA-B5-0433] (5M) Explain Arithmetic pipeline with suitable diagram.
solutions["COA-B5-0433"] = solutions["COA-B5-0425"]

# 52. [COA-B5-0434] (5M) Explain in-detail about vector processing and array processing.
solutions["COA-B5-0434"] = """### Comparison: Vector Processing vs. Array Processing

| Feature | Vector Processor | Array Processor |
| :--- | :--- | :--- |
| **Architectural Model** | Heavily **pipelined scalar/vector ALUs** operating on sequential vector elements. | Parallel **grid of synchronized Processing Elements (PEs)** executing in SIMD lock-step. |
| **Execution Flow** | Elements of a vector stream sequentially through deeply pipelined arithmetic stages. | All elements of a vector are computed **in parallel simultaneously** across $N$ distinct PEs. |
| **Control Structure** | Single CPU with pipelined vector instruction decoding. | Central Control Unit broadcasting identical instructions to an array of $N$ PEs. |
| **Memory Access** | Interleaved memory streaming vectors at 1 word/cycle. | Distributed local memory attached to each PE + shared broadcast bus. |
| **Historical Examples** | Cray-1, Cray X-MP, NEC SX-Aurora, modern AVX-512. | ILLIAC IV, ICL DAP, Connection Machine CM-2, modern GPU compute units. |
"""

# 53. [COA-B5-0435] (5M) Illustrate between Array processor and Vector Processor. State the advantages, disadvantages and applications of vector processors.
solutions["COA-B5-0435"] = solutions["COA-B5-0434"]

# 54. [COA-B5-0436] (5M) Compare and contrast between parallel processing and pipeline processing with suitable examples.
solutions["COA-B5-0436"] = """### Parallel Processing vs. Pipeline Processing

| Parameter | Pipeline Processing | Parallel Processing |
| :--- | :--- | :--- |
| **Core Principle** | **Time-overlap:** Divides a single complex task into sequential stages executed like an assembly line. | **Space-replication:** Replicates complete functional units or CPU cores to execute separate tasks at the same time. |
| **Hardware Requirement**| Segmented registers between pipelined functional stages. | Multiple identical ALUs, processing elements, or CPU cores. |
| **Execution Latency** | Single task latency remains the same (or slightly higher due to latch overhead); throughput increases. | Single task latency can be divided by $N$ if task is divisible across $N$ cores. |
| **Throughput Limit** | Bounded by the clock period of the slowest pipeline stage ($1\\text{ task}/t_p$). | Scales with the number of parallel processing units ($N\\text{ tasks}/t$). |
| **Concrete Example** | A 4-stage CPU instruction pipeline (Fetch, Decode, Execute, Writeback). | A dual-core or quad-core processor executing four independent threads simultaneously. |
"""

# 55. [COA-B5-0437] (5M) What is pipelining? Demonstrate the pipeline organization with an example.
solutions["COA-B5-0437"] = solutions["COA-B5-0422"]

# 56. [COA-B5-0438] (5M) Analyze the concurrent access to memory and cache coherency.
solutions["COA-B5-0438"] = prev["COA-A5-0383"]

# 57. [COA-B5-0439] (5M) Differentiate CISC and RISC computer characteristics?
solutions["COA-B5-0439"] = prev["COA-A5-0386"]

# 58. [COA-B5-0440] (5M) List various parallel processing challenges. Draw the block diagram of 5 stage pipeline system.
solutions["COA-B5-0440"] = """### 1. Parallel Processing Challenges
1. **Amdahl's Law Limitation:** Maximum speedup is constrained by the non-parallelizable sequential fraction ($s$) of code:
   $$\\text{Speedup} = \\frac{1}{s + \\frac{1-s}{N}}$$
2. **Memory Contention & Bandwidth Saturation:** Multiple processors competing for shared buses and DRAM bottlenecks.
3. **Cache Coherency Overhead:** Invalidation and update traffic consuming bus bandwidth.
4. **Synchronization Delays:** Spinlocks, semaphores, and barrier wait states idling execution units.

---

### 2. Block Diagram of a Classic 5-Stage RISC Pipeline

```
+------------+       +------------+       +------------+       +------------+       +------------+
|  Stage 1   |       |  Stage 2   |       |  Stage 3   |       |  Stage 4   |       |  Stage 5   |
|     IF     |====>==|     ID     |====>==|     EX     |====>==|    MEM     |====>==|     WB     |
| Inst Fetch | IF/ID | Inst Decode| ID/EX |  Execute   | EX/MEM| Mem Access | MEM/WB| Write-Back |
+------------+       +------------+       +------------+       +------------+       +------------+
```
"""

# 59. [COA-B5-0441] (5M) Explain the implementation of Arithmetic and Instructional pipeline.
solutions["COA-B5-0441"] = solutions["COA-B5-0422"]

# 60. [COA-B5-0442] (5M) Explain the Need of pipeline technique? Implement an Pipeline for floating point addition and subtraction.
solutions["COA-B5-0442"] = solutions["COA-B5-0425"]

# 61. [COA-B5-0443] (5M) Compare and contrast between RISC and CISC architectures. computer
solutions["COA-B5-0443"] = prev["COA-A5-0386"]

# 62. [COA-B5-0444] (5M) Define cache coherence and why is it important in shared Multiprocessor systems? Give any solution to the overcome problem?
solutions["COA-B5-0444"] = prev["COA-A5-0383"]

# 63. [COA-B5-0445] (5M) Explain vector instructions and how it will be helpful for performance point of view?
solutions["COA-B5-0445"] = prev["COA-A5-0396"]

# 64. [COA-B5-0446] (5M) Explain in detail about RISC instruction pipeline with data conflicts problem?
solutions["COA-B5-0446"] = solutions["COA-B5-0417"]

# Save Part 2 to file
with open('scripts/u5_p2_data.json', 'w', encoding='utf-8') as f:
    json.dump(solutions, f, indent=2, ensure_ascii=False)

print(f"Unit 5 Part 2: Questions 32 to 64 scripted successfully. Count: {len(solutions)}")
