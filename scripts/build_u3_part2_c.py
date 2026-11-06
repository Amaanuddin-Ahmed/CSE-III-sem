# -*- coding: utf-8 -*-
"""
Generates high-yield academic solutions for COA Unit 3 Part 2C: Questions 70 to 92
(COA-B3-0261 to COA-B3-0283)
"""
import json

solutions = {}

# 70. [COA-B3-0261] (5M) Explain about address sequencing in control memory with neat diagrams?
solutions["COA-B3-0261"] = """### 1. Conceptual Principle of Address Sequencing
In a microprogrammed control unit, **Address Sequencing** is the systematic capability to select and generate the address of the next microinstruction to be fetched from **Control Memory (ROM)**.
Microinstructions are not solely executed sequentially; control logic must dynamically handle conditional branches, subroutine calls, returns, and opcode mapping.

The address generation logic that performs this sequencing is called the **Microprogram Sequencer**.

---

### 2. Four Primary Address Sequencing Capabilities
A complete control address sequencer must support four distinct modes of address generation:

1. **Sequential Incrementing:**
   $$CAR \\leftarrow CAR + 1$$
   Advances to the consecutive microinstruction in the control routine.
2. **Conditional and Unconditional Branching:**
   $$CAR \\leftarrow \\text{Branch Address Field (from microinstruction)}$$
   Decided based on status bits (Sign $S$, Zero $Z$, Carry $C$, Overflow $V$).
3. **Instruction Opcode Mapping:**
   $$CAR \\leftarrow \\text{Mapping Logic}(IR[14:11])$$
   Transforms an instruction opcode (e.g., `ADD`, `SUB`) into the starting address of its corresponding microprogram routine in control memory.
4. **Subroutine Call and Return:**
   - **Call:** Pushes current incremented address into **Subroutine Register (SBR)** and loads subroutine starting address into CAR:
     $$SBR \\leftarrow CAR + 1, \\quad CAR \\leftarrow \\text{Subroutine Address}$$
   - **Return:** Pops return address from SBR back into CAR:
     $$CAR \\leftarrow SBR$$

---

### 3. Block Diagram of Control Address Sequencer

```
                               Instruction Opcode (from IR)
                                         |
                                         v
                                  +-------------+
                                  |   Mapping   |
                                  |    Logic    |
                                  +-------------+
                                         |
               Branch Address            |
         +------------------------+      |
         | (from microinstruction)|      |
         |                        |      |
         v                        v      v
      +-----+                  +------------+
      | SBR |<---+             | 4-to-1 MUX |<--- Next Address Selection (Bits)
      +-----+    |             +------------+
         |       |                   |
         +-------+---+               v
                 |   |        +-------------+
                 v   v        | Control Addr|
             +-----------+    | Reg (CAR)   |
             | Multiplex |    +-------------+
             +-----------+           |
                                     v
                             +---------------+
                             | Control Memory|
                             |     (ROM)     |
                             +---------------+
                                     |
                                     v
                             Microinstruction
```

---

### 4. Summary Takeaway
Address sequencing guarantees deterministic flow of micro-operations. By combining an incrementer, mapping logic, MUX selection, and a Subroutine Register (SBR), the control unit handles complex CISC execution flows with minimal hardware overhead.
"""

# 71. [COA-B3-0262] (5M) Apply 2's compliment method to perform subration between two given binary numbers 1010 1110 - 1100 0011. Elaborate the steps involved.
solutions["COA-B3-0262"] = """### 1. Mathematical Problem Formulation
Perform binary subtraction:
$$M - N = 10101110_2 - 11000011_2$$
- Minuend $M = 10101110_2$
  - In unsigned decimal: $128 + 32 + 8 + 4 + 2 = 174_{10}$
- Subtrahend $N = 11000011_2$
  - In unsigned decimal: $128 + 64 + 2 + 1 = 195_{10}$
- Expected mathematical result: $174 - 195 = -21_{10}$.

---

### 2. Algorithmic Steps in 2's Complement Subtraction
1. Determine the 2's complement of the subtrahend $N$:
   $$\\text{1's complement of } 11000011_2 = 00111100_2$$
   $$\\text{2's complement of } N = 00111100_2 + 1 = 00111101_2$$
2. Add the minuend $M$ to the 2's complement of $N$:
   $$\\begin{array}{r@{\\quad}l}
     10101110 & (M = 174) \\\\
   + 00111101 & (\\text{2's comp of } N) \\\\
   \\hline
   0\\,11101011 & (\\text{End Carry } = 0)
   \\end{array}$$
3. Inspect the End-Around Carry ($C_{out}$):
   - Here, **End Carry $= 0$**.
   - A carry of $0$ mathematically indicates that the result is **negative** and is currently stored in 2's complement form.
4. Determine the magnitude by taking the 2's complement of the intermediate sum:
   $$\\text{1's complement of } 11101011_2 = 00010100_2$$
   $$\\text{Magnitude} = 00010100_2 + 1 = 00010101_2 = (16 + 4 + 1)_{10} = 21_{10}$$
5. Prepend the negative sign:
   $$\\mathbf{Final\\,Result = -00010101_2 = (-21)_{10}}$$

---

### 3. Verification
$$174_{10} - 195_{10} = -21_{10}$$
The computed value $-00010101_2$ is **100% accurate and mathematically validated!**
"""

# 72. [COA-B3-0263] (5M) Design a 4-bit ALU which performs arithmetic, Logical and shift operations.
solutions["COA-B3-0263"] = """### 1. Conceptual Architectural Overview
An **Arithmetic Logic Unit (ALU)** is a combinational digital circuit that performs arithmetic, bitwise logical, and data-shifting micro-operations.
A comprehensive 4-bit ALU integrates:
1. **Arithmetic Circuit:** Constructed with Full Adders and multiplexer-selected inputs to perform Addition, Subtraction, Increment, and Decrement.
2. **Logic Circuit:** Gate networks generating bitwise `AND`, `OR`, `XOR`, and `NOT`.
3. **Shifter Circuit:** Multiplexer-steered networks for Logical Shift Left, Logical Shift Right, and Arithmetic Shift.
4. **Function Selector:** Selection lines ($S_2, S_1, S_0, C_{in}$) to configure the active operation.

---

### 2. Functional Truth Table

| $S_2$ | $S_1$ | $S_0$ | $C_{in}$ | Operation Output ($Y$) | Functional Class |
| :---: | :---: | :---: | :---: | :--- | :--- |
| 0 | 0 | 0 | 0 | $Y = A$ (Transfer $A$) | Arithmetic |
| 0 | 0 | 0 | 1 | $Y = A + 1$ (Increment $A$) | Arithmetic |
| 0 | 0 | 1 | 0 | $Y = A + B$ (Addition) | Arithmetic |
| 0 | 0 | 1 | 1 | $Y = A + B + 1$ (Add with Carry) | Arithmetic |
| 0 | 1 | 0 | 0 | $Y = A + B'$ (Subtract with borrow) | Arithmetic |
| 0 | 1 | 0 | 1 | $Y = A + B' + 1 = A - B$ (Subtraction) | Arithmetic |
| 0 | 1 | 1 | 0 | $Y = A - 1$ (Decrement $A$) | Arithmetic |
| 0 | 1 | 1 | 1 | $Y = A$ (Transfer $A$) | Arithmetic |
| 1 | 0 | 0 | $\\times$ | $Y = A \\land B$ (Bitwise AND) | Logic |
| 1 | 0 | 1 | $\\times$ | $Y = A \\lor B$ (Bitwise OR) | Logic |
| 1 | 1 | 0 | $\\times$ | $Y = A \\oplus B$ (Bitwise XOR) | Logic |
| 1 | 1 | 1 | $\\times$ | $Y = A'$ (Bitwise NOT / Invert) | Logic |

---

### 3. Hardware Implementation Diagram

```
                 A3..A0     B3..B0
                   |          |
                   +----+-----+
                        |
            +-----------+-----------+
            |                       |
            v                       v
     +---------------+      +---------------+
     | Arithmetic    |      | Logic Circuit |
     | Circuit (FAs) |      | (AND,OR,XOR)  |
     +---------------+      +---------------+
            |                       |
            v                       v
     +--------------------------------------+
     | 4-to-1 Multiplexer Stage (per bit)   |<--- S2, S1, S0
     +--------------------------------------+
                        |
                        v
     +--------------------------------------+
     | Output Shifter Circuit (LSL, LSR)    |<--- Shift Control Lines
     +--------------------------------------+
                        |
                        v
                 Final Output F3..F0
```
"""

# 73. [COA-B3-0264] (5M) Write about hardware organization of micro programmed control unit.
solutions["COA-B3-0264"] = """### 1. Conceptual Principle
A **Microprogrammed Control Unit** replaces complex combinational logic with software-like firmware execution. Control signals are encoded as binary patterns inside **microinstructions** permanently stored in an internal **Control Memory (ROM)**.

Executing a machine instruction corresponds to fetching and executing a sequence of microinstructions from control memory (called a **microprogram routine**).

---

### 2. Primary Hardware Components
The hardware organization comprises five key functional blocks:

1. **Control Memory (CM):**
   - Typically high-speed Read-Only Memory (ROM).
   - Holds all microinstruction words for the entire CPU instruction set.
2. **Control Address Register (CAR):**
   - Holds the address of the microinstruction currently being read from control memory.
3. **Control Data Register (CDR) / Pipeline Register:**
   - Buffers the fetched microinstruction word.
   - Decodes its bit fields into physical control lines driving ALU, buses, and registers.
4. **Next Address Generator (Microprogram Sequencer):**
   - Computes the address of the next microinstruction.
   - Capable of sequential incrementing ($CAR + 1$), branch addresses, subroutine jumps, and opcode mapping.
5. **Instruction Opcode Mapping Logic:**
   - Translates machine instruction opcodes (e.g., $1010_2$) into starting micro-routine addresses.

---

### 3. Hardware Organization Diagram

```
                 Instruction Opcode (from IR)
                              |
                              v
                      +---------------+
                      | Mapping Logic |
                      +---------------+
                              |
                              v
     +------------+    +-------------+
     | External   |--->| Next Address|
     | Status Cond|    |  Generator  |<-- Branch Address (from CDR)
     +------------+    | (Sequencer) |
                       +-------------+
                              |
                              v
                     +-----------------+
                     | Control Address |
                     | Register (CAR)  |
                     +-----------------+
                              |
                              v
                     +-----------------+
                     | Control Memory  |
                     |     (ROM)       |
                     +-----------------+
                              |
                              v
                     +-----------------+
                     |  Control Data   |
                     | Register (CDR)  |
                     +-----------------+
                        /           \\
                       /             \\
                      v               v
            Micro-operation       Next-address &
            Control Signals      Branch Information
            (to ALU, Registers)  (feedback to Sequencer)
```
"""

# 74. [COA-B3-0265] (5M) Perform the following arithmetic operations.
solutions["COA-B3-0265"] = """### 1. Overview of Problem Scope
In computer arithmetic examinations, multi-part operation questions evaluate two fundamental categories:
1. **Fixed-Point Signed 2's Complement Addition/Subtraction with Overflow Evaluation.**
2. **Signed Multiplication via Booth's Algorithm.**

Below are step-by-step rigorous derivations for both foundational operations.

---

### 2. Part A: Fixed-Point Arithmetic & Overflow Analysis
Perform $(+75) + (-45)$ and $(+75) + (+60)$ in an 8-bit signed register:

#### Operation 1: $(+75) + (-45)$
- $+75_{10} = 01001011_2$
- $+45_{10} = 00101101_2 \\implies -45_{10} = 11010010 + 1 = 11010011_2$
- Add:
  $$\\begin{array}{r@{\\quad}l}
    01001011 & (75) \\\\
  + 11010011 & (-45) \\\\
  \\hline
  1\\,00011110 & (\\text{Carry } = 1)
  \\end{array}$$
- Discard end carry: Result $= 00011110_2 = 16 + 8 + 4 + 2 = +30_{10}$ (Exact).
- Overflow check: $V = C_8 \\oplus C_7 = 1 \\oplus 1 = 0$ (**No Overflow**).

#### Operation 2: $(+75) + (+60)$
- $+60_{10} = 00111100_2$
- Add:
  $$\\begin{array}{r@{\\quad}l}
    01001011 & (75) \\\\
  + 00111100 & (60) \\\\
  \\hline
    10000111 & (-121_{10} \\text{ in 2's comp})
  \\end{array}$$
- Overflow check: $C_8 = 0, C_7 = 1 \\implies V = 0 \\oplus 1 = 1$ (**Overflow Detected!** Result exceeds max 8-bit signed limit $+127$).

---

### 3. Part B: Booth's Multiplication: $(+7) \\times (-3)$
- $M = +7 = 00111_2$, $-M = 11001_2$
- $Q = -3 = 11101_2$, $SC = 5$, $Q_{n+1} = 0$, $AC = 00000_2$

| Cycle | $Q_n Q_{n+1}$ | Operation | $AC$ | $QR$ | $Q_{n+1}$ | $SC$ |
| :---: | :---: | :--- | :---: | :---: | :---: | :---: |
| **0** | Init | Setup | `00000` | `11101` | `0` | 5 |
| **1** | `10` | $AC \\leftarrow AC - M$ ($+11001$)<br>$ASHR$ | `11001`<br>`11100` | `11101`<br>`11110` | `0`<br>`1` | 4 |
| **2** | `01` | $AC \\leftarrow AC + M$ ($+00111$)<br>$ASHR$ | `00011`<br>`00001` | `11110`<br>`11111` | `1`<br>`0` | 3 |
| **3** | `10` | $AC \\leftarrow AC - M$ ($+11001$)<br>$ASHR$ | `11010`<br>`11101` | `11111`<br>`01111` | `0`<br>`1` | 2 |
| **4** | `11` | $ASHR$ | `11110` | `10111` | `1` | 1 |
| **5** | `11` | $ASHR$ | `11111` | `01011` | `1` | 0 |

- Result: $[AC, QR] = 1111101011_2$.
- 2's complement of result: $0000010100 + 1 = 0000010101_2 = -21_{10}$ (Exact: $7 \\times -3 = -21$).
"""

# 75. [COA-B3-0266] (5M) Draw the flow chart for Booth multiplication algorithm and multiply 13 with -7 using Booth multiplication algorithm.
solutions["COA-B3-0266"] = """### 1. Problem Formulation
Multiply using Booth's Algorithm:
$$M \\times Q = (+13) \\times (-7) = -91_{10}$$
- Multiplicand $M = +13_{10} = 001101_2$ (6 bits)
- $-M = \\text{2's comp of } 13 = 110010 + 1 = 110011_2$
- Multiplier $Q = -7_{10} = 111001_2$ (6 bits)
- Registers: $AC = 000000_2$, $Q_{n+1} = 0$, $SC = 6$.
- Expected Product: $-91_{10} = 1110100101_2$ in 2's complement.

---

### 2. Step-by-Step Execution Trace Table

| Cycle | $Q_n Q_{n+1}$ | Operation Performed | $AC$ (6 bits) | $QR$ (6 bits) | $Q_{n+1}$ | $SC$ |
| :---: | :---: | :--- | :---: | :---: | :---: | :---: |
| **0** | Init | Initial State | `000000` | `111001` | `0` | 6 |
| **1** | `10` | $AC \\leftarrow AC - M$ ($+110011$)<br>$ASHR(AC, QR, Q_{n+1})$ | `110011`<br>`111001` | `111001`<br>`111100` | `0`<br>`1` | 5 |
| **2** | `01` | $AC \\leftarrow AC + M$ ($+001101$)<br>$ASHR(AC, QR, Q_{n+1})$ | `000110`<br>`000011` | `111100`<br>`011110` | `1`<br>`0` | 4 |
| **3** | `00` | $ASHR(AC, QR, Q_{n+1})$ | `000001` | `101111` | `0` | 3 |
| **4** | `10` | $AC \\leftarrow AC - M$ ($+110011$)<br>$ASHR(AC, QR, Q_{n+1})$ | `110100`<br>`111010` | `101111`<br>`010111` | `0`<br>`1` | 2 |
| **5** | `11` | $ASHR(AC, QR, Q_{n+1})$ | `111101` | `001011` | `1` | 1 |
| **6** | `11` | $ASHR(AC, QR, Q_{n+1})$ | `111110` | `100101` | `1` | 0 |

---

### 3. Mathematical Result Verification
- Final Register State $[AC, QR] = 111110\\,100101_2$.
- Since MSB $= 1$, the number is negative.
- Take 2's complement to determine magnitude:
  $$\\text{1's comp} = 000001\\,011010_2$$
  $$\\text{2's comp} = 000001\\,011010_2 + 1 = 000001\\,011011_2$$
- Magnitude: $64 + 16 + 8 + 2 + 1 = 91_{10}$.
- Result is **$-91_{10}$**, which matches $(+13) \\times (-7) = -91$ **with 100% precision!**
"""

# Save Part 2C to file
with open('scripts/u3_p2c_data.json', 'w', encoding='utf-8') as f:
    json.dump(solutions, f, indent=2, ensure_ascii=False)

print(f"Part 2c: Questions 70 to 75 scripted successfully. Count: {len(solutions)}")
