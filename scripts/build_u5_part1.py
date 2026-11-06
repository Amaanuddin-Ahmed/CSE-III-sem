# -*- coding: utf-8 -*-
"""
Generates high-yield academic solutions for COA Unit 5 Part 1: Questions 1 to 31
(COA-A5-0383 to COA-A5-0413) - 1M and 2M Short Answer University Questions.
"""
import json

solutions = {}

# 1. [COA-A5-0383] (2M) Explain the cache incoherence.
solutions["COA-A5-0383"] = """### Definition and Architectural Cause of Cache Incoherence
**Cache Incoherence** is the hazardous condition in a shared-memory multiprocessor system where multiple private caches hold copies of the same physical memory block, and a write operation by one processor to its local cache makes the cached copies in peer processors (or in main memory) **stale, obsolete, and inconsistent**.

#### Primary Causes:
1. **Shared Writable Data:** Multiple processors cache the same variable $X$. If Processor $P_1$ updates $X \\leftarrow X + 1$ in its local cache without informing others, Processor $P_2$ reads the outdated stale value of $X$ from its own cache.
2. **I/O & DMA Activity:** A DMA controller writes fresh data directly into main memory, bypassing CPU caches, leaving caches with stale data.
3. **Write-Back Policy:** Modified lines remain in local cache without updating main memory until evicted.

#### Standard Solutions:
- **Bus Snooping Protocols:**
  - **Write-Invalidate:** The writing processor broadcasts an invalidation signal on the shared bus; peer caches mark their copies as *Invalid* (e.g., MESI protocol).
  - **Write-Update / Broadcast:** The writing processor broadcasts the new data word across the bus; all peer caches immediately update their copies.
- **Directory-Based Protocols:** A centralized/distributed directory tracks sharing states for scalable distributed multiprocessors (NUMA).
"""

# 2. [COA-A5-0384] (1M) Explain parallel processing.
solutions["COA-A5-0384"] = """### Definition of Parallel Processing
**Parallel Processing** is an architectural computing paradigm that executes concurrent computational tasks simultaneously across multiple functional execution units, pipelined stages, or processor cores, drastically accelerating computational throughput over conventional sequential processing.
"""

# 3. [COA-A5-0385] (1M) List the characteristics of CISC architecture.
solutions["COA-A5-0385"] = """### Characteristics of CISC Architecture
1. Variable-length instruction formats with extensive, complex addressing modes.
2. Arithmetic and logical instructions can access operands directly from memory.
3. Instructions take variable multiple clock cycles to execute.
4. Microprogrammed control units utilizing internal control memory (ROM).
"""

# 4. [COA-A5-0386] (2M) cache policy? 1.1) Compare RISC & CISC design philosophy?
solutions["COA-A5-0386"] = """### Comparison: RISC vs. CISC Design Philosophy

| Parameter | RISC (Reduced Instruction Set Computer) | CISC (Complex Instruction Set Computer) |
| :--- | :--- | :--- |
| **Philosophy** | Simple, uniform instructions executing in **1 clock cycle** via hardware. | Rich, multi-step instructions reducing code size; complex microcode. |
| **Instruction Format** | Fixed length (typically 32 bits); few formats. | Variable length (1 to 15 bytes); many formats. |
| **Memory Access** | Strict **Load/Store architecture**; only `LOAD`/`STORE` touch RAM. | Arithmetic instructions operate directly on memory operands (`ADD [mem]`). |
| **Registers** | Large general-purpose register file (32 to 128+ registers). | Small dedicated register set (8 to 16 registers). |
| **Control Unit** | **Hardwired control** optimized for speed and pipelining. | **Microprogrammed control** using internal control ROM. |
| **Addressing Modes** | Few, simple addressing modes (Immediate, Register, Displacement). | Many complex addressing modes (Indexed, Indirect, Auto-increment). |
"""

# 5. [COA-A5-0387] (2M) Explain the static Inter process arbitration process?
solutions["COA-A5-0387"] = """### Static Interprocessor Arbitration
**Static Arbitration** (Fixed Priority Arbitration) is a hardware bus arbitration mechanism where priority levels among competing processors are permanently assigned at system design time and **do not change dynamically** based on processor activity:

- **Mechanism:** Processor 1 is permanently assigned the highest priority, Processor 2 second-highest, down to Processor $n$ (lowest).
- **Serial Implementation:** Realized via **Daisy-Chaining**, where the bus grant line physically enters Device 1 first and propagates serially.
- **Limitation:** Can lead to **starvation** of low-priority processors if high-priority processors request the bus frequently.
"""

# 6. [COA-A5-0388] (2M) Differentiate between RISC and CISC architectures.
solutions["COA-A5-0388"] = solutions["COA-A5-0386"]

# 7. [COA-A5-0389] (2M) Illustrate the terms Multiprocessors and Multi Computers?
solutions["COA-A5-0389"] = """### Multiprocessors vs. Multicomputers

| Feature | Multiprocessors (Tightly Coupled) | Multicomputers (Loosely Coupled) |
| :--- | :--- | :--- |
| **Memory Architecture** | **Shared Memory:** All CPUs share a single common physical address space. | **Distributed Memory:** Each computer node possesses its own private local memory. |
| **Interconnection** | High-speed system bus, crossbar switch, or multiport memory. | High-speed network (Ethernet, InfiniBand, optical switch). |
| **Communication** | Fast communication via shared variables in RAM. | Slower communication via **Message Passing** (`send`/`receive`). |
| **Operating System** | Single unified OS instance manages all CPUs. | Distributed OS or autonomous local OS running on each node. |
| **Scalability** | Limited scalability (memory bus contention beyond 32-64 CPUs). | Highly scalable (clusters scaling to thousands of nodes). |
"""

# 8. [COA-A5-0390] (2M) Distinguish between loosely coupled and tightly coupled multiprocessors.
solutions["COA-A5-0390"] = solutions["COA-A5-0389"]

# 9. [COA-A5-0391] (2M) How a vector processor operation is different from conventional scalar processor?
solutions["COA-A5-0391"] = """### Vector Processor vs. Conventional Scalar Processor

| Parameter | Scalar Processor | Vector Processor |
| :--- | :--- | :--- |
| **Instruction Execution** | One instruction operates on **one pair of scalar operands** at a time ($C = A + B$). | One instruction operates on **entire one-dimensional arrays (vectors)** ($C[1..N] = A[1..N] + B[1..N]$). |
| **Loop Overhead** | High loop overhead; requires explicit loop counters, index increments, and branch tests. | Zero loop overhead; a single vector instruction executes the entire loop in hardware. |
| **Hardware Pipelines** | Scalar ALU pipelines. | Deeply pipelined vector arithmetic units and vector registers. |
| **Memory Interleaving**| Standard memory access. | Employs heavily interleaved memory banks for concurrent multi-word streaming. |
| **Primary Domain** | General-purpose computing, web, databases. | Scientific simulations, fluid dynamics, meteorology, AI matrix math. |
"""

# 10. [COA-A5-0392] (2M) Differentiate tightly coupled and loosely coupled systems.
solutions["COA-A5-0392"] = solutions["COA-A5-0389"]

# 11. [COA-A5-0393] (1M) Explain Pipelining.
solutions["COA-A5-0393"] = """### Definition of Pipelining
**Pipelining** is an implementation technique where the hardware execution of multiple instructions is overlapped in time across sequential stages (Fetch, Decode, Execute, Write-Back), yielding an ideal throughput of one completed instruction per clock cycle.
"""

# 12. [COA-A5-0394] (2M) space? 1.1) Howdo branch instructions cause problems ina pipelined processor? 1.4) List out replacement algorithms.
solutions["COA-A5-0394"] = """### Branch Hazards in Pipelining & Cache Replacement Algorithms

#### 1. Why Branch Instructions Cause Pipeline Problems (Control Hazards):
When a conditional branch instruction enters a pipeline:
- The target address and branch outcome (taken vs. not taken) are unknown until the instruction reaches the **Execute or Decode stage**.
- The pipeline, having already speculatively fetched subsequent sequential instructions, contains the wrong instructions if the branch is taken.
- The pipeline must **flush (clear)** these invalid instructions, wasting multiple clock cycles (called a **Branch Penalty** or **Pipeline Bubble**).

#### 2. Standard Cache Replacement Algorithms:
1. **LRU (Least Recently Used):** Replaces the block that has gone unreferenced for the longest time.
2. **FIFO (First-In, First-Out):** Replaces the oldest block loaded into cache.
3. **LFU (Least Frequently Used):** Replaces the block with the smallest reference count.
4. **Random Replacement:** Evicts a block chosen uniformly at random (simple hardware).
"""

# 13. [COA-A5-0395] (2M) List out replacement algorithms.
solutions["COA-A5-0395"] = """### Cache Block Replacement Algorithms
1. **LRU (Least Recently Used):** Evicts the line that has remained unreferenced for the longest duration; delivers lowest miss rates by exploiting temporal locality.
2. **FIFO (First-In, First-Out):** Evicts the line that has resided in cache the longest, regardless of recent access frequency.
3. **LFU (Least Frequently Used):** Tracks access counters and replaces the line with the fewest cumulative hits.
4. **Optimal (Belady's Min):** Theoretical benchmark replacing the block that will not be accessed for the longest period in the future.
5. **Random:** Selects a candidate line at random; requires minimal hardware logic.
"""

# 14. [COA-A5-0396] (2M) What is vector processing, and how does it improve computational performance?
solutions["COA-A5-0396"] = """### Vector Processing & Performance Acceleration
**Vector Processing** is a computing paradigm designed to perform arithmetic operations directly on entire one-dimensional arrays (vectors) of numerical data using single vector instructions (SIMD).

#### How it Enhances Performance:
1. **Elimination of Loop Overhead:** Eliminates instruction-fetch and decode overhead for loop counters, index calculations, and conditional branches.
2. **Pipelined Execution:** Pipelined vector functional units stream consecutive elements on every consecutive clock cycle.
3. **Memory Interleaving:** Vector architectures utilize multi-bank interleaved memory to fetch multi-word vectors concurrently without memory stalls.
"""

# 15. [COA-A5-0397] (2M) List and explain the key characteristics of a multiprocessor system.
solutions["COA-A5-0397"] = """### Key Characteristics of Multiprocessor Systems
1. **Multiple Processing Units:** Employs two or more autonomous CPUs/cores capable of simultaneous instruction execution.
2. **Shared Memory Space:** Processors share a common physical address space and main memory (UMA or NUMA).
3. **Hardware Interconnection Network:** High-speed communication links (Common Bus, Crossbar Switch, or Multistage Network) connect processors, memory, and I/O.
4. **Coordinated Operating System:** A single operating system kernel controls resource scheduling, inter-process communication, and load balancing across all processors.
"""

# 16. [COA-A5-0398] (2M) Explain processors?
solutions["COA-A5-0398"] = """### Definition and Role of a Processor
A **Processor (Central Processing Unit - CPU)** is the primary electronic component of a digital computer that interprets, coordinates, and executes software instructions.
It consists of three fundamental subsystems:
1. **Arithmetic and Logic Unit (ALU):** Performs integer, floating-point, and bitwise boolean computations.
2. **Control Unit (CU):** Fetches, decodes instructions, and orchestrates datapath timing.
3. **Register File:** Ultra-fast temporary internal storage holding active operands, memory pointers, and condition flags.
"""

# 17. [COA-A5-0399] (2M) Explain array processors?
solutions["COA-A5-0399"] = """### Definition and Architecture of Array Processors
An **Array Processor** is a specialized parallel processing system designed to compute large mathematical matrices and vectors concurrently using a synchronized grid of identical **Processing Elements (PEs)**:

- **SIMD Array Processors:** A single Master Control Unit broadcasts one common instruction to an entire array of PEs. Each PE executes the identical operation on its own distinct local data element simultaneously.
- **Attached Array Processors:** An auxiliary hardware coprocessor attached to a general-purpose host computer to accelerate intensive vector computations (FFTs, image convolution).
"""

# 18. [COA-A5-0400] (1M) Write the classification of parallel processing.
solutions["COA-A5-0400"] = """### Flynn's Taxonomy of Parallel Processing
Michael J. Flynn classified computer architectures into four distinct classes based on the multiplicity of Instruction Streams and Data Streams:
1. **SISD:** Single Instruction, Single Data (Classic Uniprocessor)
2. **SIMD:** Single Instruction, Multiple Data (Vector / Array Processors, GPUs)
3. **MISD:** Multiple Instruction, Single Data (Systolic Arrays, Fault-Tolerant Voting)
4. **MIMD:** Multiple Instruction, Multiple Data (Multi-core Processors, Distributed Clusters)
"""

# 19. [COA-A5-0401] (2M) Compare RISC and CISC?
solutions["COA-A5-0401"] = solutions["COA-A5-0386"]

# 20. [COA-A5-0402] (2M) Explain the principle characteristics of multiprocessors. List its advantages.
solutions["COA-A5-0402"] = """### Multiprocessor Characteristics & Advantages
- **Characteristics:** Multiple autonomous CPUs; shared memory and I/O; hardware interconnection network; managed by a coordinated operating system.

#### Key Advantages:
1. **Enhanced Performance & Throughput:** Distributes parallel threads and independent processes across multiple cores simultaneously.
2. **High Reliability & Fault Tolerance (Graceful Degradation):** If one processor fails, remaining processors absorb its computational workload without total system collapse.
3. **Economical Scalability:** Sharing expensive peripherals, disks, and memory power supplies lowers cost compared to running independent isolated computer mainframes.
"""

# 21. [COA-A5-0403] (2M) Illustrate the classification of pipelining.
solutions["COA-A5-0403"] = """### Classification of Pipelining

```
                         Pipelining
                             |
         +-------------------+-------------------+
         |                                       |
  Arithmetic Pipeline                   Instruction Pipeline
  (Breaks arithmetic operations into   (Overlaps instruction fetch,
   sub-operations, e.g., floating-      decode, operand fetch, and
   point add/multiply stages)           execute stages)
```
- **Static Pipeline:** Performs a fixed, dedicated function at any given time (e.g., dedicated floating-point adder).
- **Dynamic Pipeline:** Hardware stages can be dynamically reconfigured to perform different functions simultaneously.
"""

# 22. [COA-A5-0404] (2M) Write about pipelining and its importance in high speed applications.
solutions["COA-A5-0404"] = """### Importance of Pipelining in High-Speed Computing
Pipelining decomposes the execution of complex machine instructions into a sequence of small, balanced sub-operations performed across dedicated hardware stages:
- **Assembly Line Principle:** While instruction $I_1$ is executing in the ALU, instruction $I_2$ is decoding, and instruction $I_3$ is being fetched from memory.
- **High-Speed Impact:** Dramatically reduces the effective clock cycle time to the latency of the longest individual stage, achieving an ideal throughput of **1 instruction per clock cycle**.
- **Application:** Essential for modern high-frequency microprocessors, digital signal processing (DSP), 3D graphic shaders, and real-time network switches.
"""

# 23. [COA-A5-0405] (2M) List out the general aspects of ROM, RAM and IO interfacing modules.
solutions["COA-A5-0405"] = """### General Aspects of Memory and I/O Interfacing
1. **Address Decoding:** Address bus lines are decoded to generate unique Chip Select ($CS$) signals for RAM, ROM, and I/O device ports.
2. **Control Line Coordination:** Synchronized read and write strobes ($MEMR, MEMW, IOR, IOW$) direct data flow on the bidirectional data bus.
3. **Speed & Timing Matching:** Ready/Wait states and handshaking signals synchronize high-speed CPU buses with slower memories and electromechanical I/O devices.
"""

# 24. [COA-A5-0406] (1M) Write the formula to calculate speedup of a pipelined processor over an equivalent non-pipeline processor.
solutions["COA-A5-0406"] = """### Pipelined Speedup Formula
The **Speedup ($S$)** of a $k$-stage pipeline executing $n$ instructions over an equivalent non-pipelined processor is:

$$S = \\frac{T_{non-pipeline}}{T_{pipeline}} = \\frac{n \\cdot t_n}{(k + n - 1) \\cdot t_p}$$

Where:
- $n$: Number of instructions / tasks.
- $k$: Number of pipeline stages.
- $t_n$: Time required for a single task in non-pipelined hardware ($t_n = k \\cdot t_p$).
- $t_p$: Clock cycle time of the pipelined stage.
- As $n \\to \\infty$, the maximum theoretical speedup reaches **$S_{max} = k$**.
"""

# 25. [COA-A5-0407] (1M) What is Microprocessor?
solutions["COA-A5-0407"] = """### Definition of a Microprocessor
A **Microprocessor** is a complete Central Processing Unit (CPU) fabricated on a single integrated circuit (IC) silicon chip, containing an ALU, control unit, register file, and internal bus interfaces.
"""

# 26. [COA-A5-0408] (1M) Explain the advantages of pipelining.
solutions["COA-A5-0408"] = """### Advantages of Pipelining
1. **Multiplied Instruction Throughput:** Completes up to one instruction every single clock cycle.
2. **Higher Clock Frequencies:** Decomposing execution into small stages shortens combinational gate delays, allowing the processor to run at higher GHz clock rates.
3. **Optimal Hardware Utilization:** Keeps all CPU sub-units (Fetch, Decoder, ALU) actively working simultaneously instead of idling.
"""

# 27. [COA-A5-0409] (2M) Draw 8x8 omega switching network.
solutions["COA-A5-0409"] = """### 8x8 Omega Multistage Switching Network

An $8 \\times 8$ Omega Network connects 8 inputs ($0$ to $7$) to 8 outputs ($0$ to $7$) using **$\log_2(8) = 3$ stages** of $2 \\times 2$ switching elements, with $8/2 = 4$ switches per stage (total 12 switches).

- **Interstage Connection:** Uses the **Perfect Shuffle** permutation:
  $$\\text{Shuffle}(b_2 b_1 b_0) = b_1 b_0 b_2 \\quad (\\text{circular left shift})$$

```
Inputs       Stage 1          Stage 2          Stage 3       Outputs
  0 --------+-[2x2]-+------+--+-[2x2]-+------+--+-[2x2]-+------> 0
  1 --------+       |      |  +       |      |  +       |------> 1
            |       |      |  |       |      |  |       |
  2 --------+-[2x2]-+      +--+-[2x2]-+      +--+-[2x2]-+------> 2
  3 --------+       |         +       |         +       |------> 3
                    |                 |                 |
  4 --------+-[2x2]-+                 |                 |------> 4
  5 --------+       |                 |                 |------> 5
                    |                 |                 |
  6 --------+-[2x2]-+                 +-----------------+------> 6
  7 --------+                                           |------> 7
```
- **Routing Logic:** At stage $i$, a switch inspects bit $d_{3-i}$ of the destination address: if $0$, route to upper output; if $1$, route to lower output.
"""

# 28. [COA-A5-0410] (2M) List the pipeline conflicts.
solutions["COA-A5-0410"] = """### The Three Major Pipeline Conflicts (Hazards)
1. **Resource Conflicts (Structural Hazards):** Hardware resource contention when two or more pipeline stages attempt to access the identical physical hardware simultaneously (e.g., single memory port for Instruction Fetch and Data Operand Access).
2. **Data Dependency Conflicts (Data Hazards):** An instruction depends on the result of an earlier instruction that is still progressing through the pipeline and has not yet written back to the register file (e.g., Read-After-Write - RAW).
3. **Branch Difficulties (Control Hazards):** Conditional and unconditional branch instructions alter the Program Counter ($PC$), invalidating instructions speculatively fetched into earlier stages.
"""

# 29. [COA-A5-0411] (2M) Mention any two characteristics of RISC processor.
solutions["COA-A5-0411"] = """### Two Core Characteristics of RISC Processors
1. **Single-Cycle Instruction Execution:** Virtually every instruction executes in a single machine clock cycle via hardwired control.
2. **Load/Store Memory Architecture:** Arithmetic and logical operations operate exclusively on CPU registers; only dedicated `LOAD` and `STORE` instructions access main memory.
"""

# 30. [COA-A5-0412] (2M) Compare RISC & CISC characteristics.
solutions["COA-A5-0412"] = solutions["COA-A5-0386"]

# 31. [COA-A5-0413] (2M) Discuss the difference between tightly coupled multiprocessor and loosely coupled multiprocessor.
solutions["COA-A5-0413"] = solutions["COA-A5-0389"]

# Save Part 1 to file
with open('scripts/u5_p1_data.json', 'w', encoding='utf-8') as f:
    json.dump(solutions, f, indent=2, ensure_ascii=False)

print(f"Unit 5 Part 1: Questions 1 to 31 scripted successfully. Count: {len(solutions)}")
