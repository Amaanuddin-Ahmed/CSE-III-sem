# -*- coding: utf-8 -*-
"""
Generates high-yield academic solutions for COA Unit 3 Part 2D: Questions 76 to 92
(COA-B3-0267 to COA-B3-0283)
"""
import json

prev = {}
for name in ['scripts/u3_p1_data.json', 'scripts/u3_p1b_data.json', 'scripts/u3_p2a_data.json', 'scripts/u3_p2b_data.json']:
    try:
        with open(name, 'r', encoding='utf-8') as f:
            prev.update(json.load(f))
    except Exception:
        pass

solutions = {}

# 76. [COA-B3-0267] (5M) Explain the flowchart of floating point addition/subtraction operation.
solutions["COA-B3-0267"] = """### 1. Conceptual Principle
Floating-point addition and subtraction require aligning exponents before adding or subtracting mantissas:
$$X = M_x \\times 2^{E_x}, \\quad Y = M_y \\times 2^{E_y}$$
The process guarantees that both significant fractions represent identical power scales before combinational adders operate.

---

### 2. Four Algorithmic Stages in the Flowchart
1. **Zero Checking:** If either operand is zero, return the other operand immediately.
2. **Alignment of Mantissas:** Compute difference $d = E_x - E_y$. Shift the mantissa of the operand with the smaller exponent right by $|d|$ bits and set its exponent equal to the larger one.
3. **Mantissa Addition/Subtraction:** Add or subtract the mantissas according to the operation and operand signs.
4. **Normalization & Exception Check:**
   - If sum overflows ($C_{out} = 1$): Shift right by 1 and increment exponent.
   - If sum has leading zeros: Shift left and decrement exponent until MSB is 1.
   - Check for exponent overflow or underflow.

---

### 3. Detailed Flowchart

```
                 [ START: Add/Sub X and Y ]
                             |
                   Is X = 0 or Y = 0 ?
                     /             \\
                 Yes/               \\No
                   v                 v
            Return other        Compare Exponents
            operand             d = Ex - Ey
                                     |
                       +-------------+-------------+
                       |                           |
                     d > 0                       d < 0
                       |                           |
                 Shift My Right              Shift Mx Right
                    Ey <- Ex                    Ex <- Ey
                       |                           |
                       +-------------+-------------+
                                     |
                                     v
                          Add/Subtract Mantissas:
                             Mz = Mx +/- My
                                     |
                              Is Mz = 0 ? ----Yes----> Result = 0
                                     | No
                              Is Mz Overflow?
                                /         \\
                            Yes/           \\No
                              v             v
                       Shift Mz Right   Is Leading Bit 1?
                        Ez <- Ez + 1       /         \\
                              |        No /           \\ Yes
                              v          v             v
                       Check Exponent  Shift Mz Left [ Normal ]
                         Overflow      Ez <- Ez - 1  [ Result ]
```
"""

# 77. [COA-B3-0268] (5M) Divide 13 with 7 using binary division.
solutions["COA-B3-0268"] = """### 1. Problem Formulation
Perform binary restoring division:
$$\\frac{\\text{Dividend } Q}{\\text{Divisor } M} = \\frac{13_{10}}{7_{10}}$$
- **Dividend:** $13_{10} = 1101_2$ ($n = 4$ bits, $SC = 4$)
- **Divisor:** $M = 7_{10} = 00111_2$ (5-bit register to hold sign)
- **2's complement of Divisor ($-M$):** $11000 + 1 = 11001_2$
- **Accumulator ($A$):** $00000_2$
- **Expected Result:** $\\text{Quotient} = 1$ ($0001_2$), $\\text{Remainder} = 6$ ($00110_2$).

---

### 2. Step-by-Step Restoring Division Trace Table

| Cycle | Operation Performed | Accumulator ($A$) | Quotient ($Q$) | $SC$ |
| :---: | :--- | :---: | :---: | :---: |
| **0** | Initial Setup | `00000` | `1101` | 4 |
| **1** | Shift Left $[A, Q]$<br>$A \\leftarrow A - M$ ($+11001$)<br>$A < 0 \\implies$ Restore: $A \\leftarrow A + M$, set $Q_0 = 0$ | `00001`<br>`11010`<br>`00001` | `101_`<br>`101_`<br>`1010` | 3 |
| **2** | Shift Left $[A, Q]$<br>$A \\leftarrow A - M$ ($+11001$)<br>$A < 0 \\implies$ Restore: $A \\leftarrow A + M$, set $Q_0 = 0$ | `00011`<br>`11100`<br>`00011` | `010_`<br>`010_`<br>`0100` | 2 |
| **3** | Shift Left $[A, Q]$<br>$A \\leftarrow A - M$ ($+11001$)<br>$A < 0 \\implies$ Restore: $A \\leftarrow A + M$, set $Q_0 = 0$ | `00110`<br>`11111`<br>`00110` | `100_`<br>`100_`<br>`1000` | 1 |
| **4** | Shift Left $[A, Q]$<br>$A \\leftarrow A - M$ ($+11001$)<br>$A \\ge 0 \\implies$ No restore, set $Q_0 = 1$ | `01101`<br>`00110`<br>`00110` | `000_`<br>`000_`<br>`0001` | 0 |

---

### 3. Final Result Verification
- **Quotient ($Q$):** $0001_2 = 1_{10}$
- **Remainder ($A$):** $00110_2 = 6_{10}$
- Verification: $13 = 7 \\times 1 + 6$.
- Result is **exact and 100% verified!**
"""

# 78. [COA-B3-0269] (5M) With a neat Flowchart analyse Floating-Point Addition and Subtraction.
solutions["COA-B3-0269"] = solutions["COA-B3-0267"]

# 79. [COA-B3-0270] (5M) Elaborate steps used in Booth algorithm for multiplying following binary numbers (+15) * (-13).
solutions["COA-B3-0270"] = """### 1. Problem Formulation
Multiply using Booth's Algorithm:
$$(+15)_{10} \\times (-13)_{10} = -195_{10}$$
- Multiplicand $M = +15_{10} = 001111_2$ (6 bits)
- $-M = \\text{2's comp of } 15 = 110000 + 1 = 110001_2$
- Multiplier $Q = -13_{10} = 110011_2$ (6 bits)
- Registers: $AC = 000000_2$, $Q_{n+1} = 0$, $SC = 6$.
- Expected Product: $-195_{10}$.

---

### 2. Step-by-Step Execution Trace Table

| Cycle | $Q_n Q_{n+1}$ | Operation | $AC$ (6 bits) | $QR$ (6 bits) | $Q_{n+1}$ | $SC$ |
| :---: | :---: | :--- | :---: | :---: | :---: | :---: |
| **0** | Init | Initial State | `000000` | `110011` | `0` | 6 |
| **1** | `10` | $AC \\leftarrow AC - M$ ($+110001$)<br>$ASHR$ | `110001`<br>`111000` | `110011`<br>`111001` | `0`<br>`1` | 5 |
| **2** | `11` | $ASHR$ | `111100` | `011100` | `1` | 4 |
| **3** | `01` | $AC \\leftarrow AC + M$ ($+001111$)<br>$ASHR$ | `001011`<br>`000101` | `011100`<br>`101110` | `1`<br>`0` | 3 |
| **4** | `00` | $ASHR$ | `000010` | `110111` | `0` | 2 |
| **5** | `10` | $AC \\leftarrow AC - M$ ($+110001$)<br>$ASHR$ | `110011`<br>`111001` | `110111`<br>`111011` | `0`<br>`1` | 1 |
| **6** | `11` | $ASHR$ | `111100` | `111101` | `1` | 0 |

---

### 3. Verification of Final Value
- Combined product $[AC, QR] = 111100\\,111101_2$.
- Since MSB $= 1$, number is negative.
- Take 2's complement to determine magnitude:
  $$\\text{1's comp} = 000011\\,000010_2$$
  $$\\text{2's comp} = 000011\\,000010_2 + 1 = 000011\\,000011_2$$
- Magnitude: $128 + 64 + 2 + 1 = 195_{10}$.
- Result is **$-195_{10}$** (Exact: $15 \\times -13 = -195$).
"""

# 80. [COA-B3-0271] (5M) Demonstrate division algorithm for fixed point numbers with the help of a flow chart.
solutions["COA-B3-0271"] = """### 1. Conceptual Principle of Fixed-Point Restoring Division
Fixed-point division computes:
$$\\frac{\\text{Dividend } Q}{\\text{Divisor } B} = \\text{Quotient } Q, \\quad \\text{Remainder } A$$
In **Restoring Division**:
1. Registers $[A, Q]$ are shifted left by 1 bit.
2. The divisor is subtracted from $A$: $A \\leftarrow A - B$.
3. If $A$ becomes negative (MSB of $A$ is 1), the subtraction was invalid: $A$ is **restored** by adding $B$ back ($A \\leftarrow A + B$), and the quotient bit $Q_0$ is set to $0$.
4. If $A$ remains positive (MSB of $A$ is 0), $A$ is retained and $Q_0$ is set to $1$.
5. Sequence Counter $SC$ decrements until $0$.

---

### 2. Flowchart for Restoring Division

```
                     [ START ]
                         |
           A <- 0, SC <- n, B <- Divisor
                 Q <- Dividend
                         |
           +----------->(+)
           |             |
           |      Shift Left [A, Q]
           |             |
           |        A <- A - B
           |             |
           |         Is A < 0 ?
           |          /     \\
           |      Yes/       \\No
           |        /         \\
           |   A <- A + B      Q0 <- 1
           |   (Restore)          |
           |   Q0 <- 0            |
           |        \\         /
           |         v       v
           |        SC <- SC - 1
           |             |
           |          SC = 0 ?
           +---- No -----+
                         | Yes
                      [ STOP ]
          (Remainder in A, Quotient in Q)
```
"""

# 81. [COA-B3-0272] (5M) Perform signed multiplication of -3 and 7 using booth multiplication algorithm. Represent the numbers in 5 bits including sign bit. Represent the step by step multiplication process.
solutions["COA-B3-0272"] = """### 1. Problem Setup
Multiply using Booth's Algorithm:
$$(-3)_{10} \\times (+7)_{10} = -21_{10}$$
- Represented in 5 bits including sign bit:
  - Multiplicand $M = -3_{10} = 11101_2$
  - $-M = \\text{2's comp of } -3 = +3 = 00011_2$
  - Multiplier $Q = +7_{10} = 00111_2$
  - Registers: $AC = 00000_2$, $Q_{n+1} = 0$, $SC = 5$.
  - Expected Product: $-21_{10}$.

---

### 2. Step-by-Step Execution Trace Table

| Cycle | $Q_n Q_{n+1}$ | Operation Performed | $AC$ (5 bits) | $QR$ (5 bits) | $Q_{n+1}$ | $SC$ |
| :---: | :---: | :--- | :---: | :---: | :---: | :---: |
| **0** | Init | Initial State | `00000` | `00111` | `0` | 5 |
| **1** | `10` | $AC \\leftarrow AC - M$ ($+00011$)<br>$ASHR(AC, QR, Q_{n+1})$ | `00011`<br>`00001` | `00111`<br>`10011` | `0`<br>`1` | 4 |
| **2** | `11` | $ASHR(AC, QR, Q_{n+1})$ | `00000` | `11001` | `1` | 3 |
| **3** | `11` | $ASHR(AC, QR, Q_{n+1})$ | `00000` | `01100` | `1` | 2 |
| **4** | `01` | $AC \\leftarrow AC + M$ ($+11101$)<br>$ASHR(AC, QR, Q_{n+1})$ | `11101`<br>`11110` | `01100`<br>`10110` | `1`<br>`0` | 1 |
| **5** | `00` | $ASHR(AC, QR, Q_{n+1})$ | `11111` | `01011` | `0` | 0 |

---

### 3. Final Verification
- Final Register: $[AC, QR] = 11111\\,01011_2$.
- Negative number (MSB $= 1$). Take 2's complement:
  $$\\text{1's comp} = 00000\\,10100_2$$
  $$\\text{2's comp} = 00000\\,10100_2 + 1 = 00000\\,10101_2 = (16 + 4 + 1)_{10} = 21_{10}$$
- Result: **$-21_{10}$** (Exact: $-3 \\times 7 = -21$).
"""

# 82. [COA-B3-0273] (5M) Explain restoring division algorithm for fixed point numbers with suitable example.
solutions["COA-B3-0273"] = solutions["COA-B3-0268"]

# 83. [COA-B3-0274] (5M) Briefly explain about IEEE floating point representation and perform addition of two floating numbers.
solutions["COA-B3-0274"] = prev["COA-B3-0257"]

# 84. [COA-B3-0275] (5M) Draw flow chart for decimal division and explain.
solutions["COA-B3-0275"] = prev["COA-B3-0252"]

# 85. [COA-B3-0276] (5M) Explain signed and unsigned number representation.
solutions["COA-B3-0276"] = """### 1. Conceptual Distinction
Digital computer registers store binary data as fixed-width sequences of bits ($n$ bits). The interpretation of these bits depends on the data type:

1. **Unsigned Number Representation:**
   - All $n$ bits represent solely magnitude.
   - Values are strictly non-negative ($0$ to $+2^n - 1$).
   - Used for memory addresses, array indexing, and character encoding.

2. **Signed Number Representation:**
   - The most significant bit (MSB) is dedicated as a **sign bit** ($0 = \\text{Positive}, 1 = \\text{Negative}$).
   - The remaining $n-1$ bits encode magnitude using one of three standard schemes:
     - **Signed Magnitude:** MSB is sign, remaining bits are true magnitude.
     - **Signed 1's Complement:** Negative numbers are formed by bitwise inverting positive numbers.
     - **Signed 2's Complement:** Negative numbers are formed by 1's complement $+ 1$.

---

### 2. Comprehensive Comparison Table (8-bit Word)

| Scheme | Representation of $+25$ | Representation of $-25$ | Numerical Range ($n=8$) | Unique Zero? |
| :--- | :---: | :---: | :---: | :---: |
| **Unsigned Binary** | `00011001` | Not Representable | $0$ to $+255$ | Yes ($00000000$) |
| **Signed Magnitude** | `00011001` | `10011001` | $-127$ to $+127$ | No ($+0$ and $-0$) |
| **Signed 1's Complement** | `00011001` | `11100110` | $-127$ to $+127$ | No ($+0$ and $-0$) |
| **Signed 2's Complement** | `00011001` | `11100111` | $-128$ to $+127$ | **Yes** (Single $0$) |

---

### 3. Why 2's Complement is Universally Adopted
1. **Unified Arithmetic Hardware:** The same adder circuit performs both addition and subtraction ($A - B = A + B' + 1$).
2. **Single Representation for Zero:** Unlike 1's complement, there is only one zero (`00000000`), preventing ambiguity.
3. **Asymmetric Extra Value:** An $n$-bit register represents one extra negative number ($-2^{n-1}$).
"""

# 86. [COA-B3-0277] (5M) Describe the steps involved in floating-point addition and subtraction.
solutions["COA-B3-0277"] = prev["COA-B3-0248"]

# 87. [COA-B3-0278] (5M) Explain multiplication and division algorithms with examples.
solutions["COA-B3-0278"] = """### 1. Unified Overview of Hardware Multiplication & Division
Fixed-point binary multiplication and division are dual processes:
- **Multiplication:** Repeated sequences of conditional **Add and Shift-Right** operations.
- **Division:** Repeated sequences of **Shift-Left and conditional Subtract/Restore** operations.

---

### 2. Multiplication via Add-and-Shift (Example: $5 \\times 3$)
- Multiplicand $B = 0101_2$ ($5$), Multiplier $Q = 0011_2$ ($3$), $A = 0000_2$, $SC = 4$.
1. $Q_0 = 1 \\implies A \\leftarrow A + B = 0101$. Shift Right $[C, A, Q] \\implies A = 0010, Q = 1001$.
2. $Q_0 = 1 \\implies A \\leftarrow A + B = 0111$. Shift Right $[C, A, Q] \\implies A = 0011, Q = 1100$.
3. $Q_0 = 0 \\implies$ Shift Right $[C, A, Q] \\implies A = 0001, Q = 1110$.
4. $Q_0 = 0 \\implies$ Shift Right $[C, A, Q] \\implies A = 0000, Q = 1111$.
- Combined $[A, Q] = 00001111_2 = 15_{10}$ (Exact: $5 \\times 3 = 15$).

---

### 3. Restoring Division (Example: $9 / 2$)
- Dividend in $Q = 1001_2$ ($9$), Divisor $B = 0010_2$ ($2$), $A = 0000_2$, $SC = 4$.
- After 4 cycles of Shift-Left, Subtract, Test Sign, and Conditional Restore:
  - Final Quotient $Q = 0100_2 = 4_{10}$.
  - Final Remainder $A = 0001_2 = 1_{10}$.
  - Verification: $9 = 2 \\times 4 + 1$ (Exact!).
"""

# 88. [COA-B3-0279] (5M) Discuss decimal arithmetic operations and hardware implementation.
solutions["COA-B3-0279"] = prev["COA-B3-0243"]

# 89. [COA-B3-0280] (5M) Briefly discuss the hardware implementation of Booth algorithm.
solutions["COA-B3-0280"] = prev["COA-B3-0258"]

# 90. [COA-B3-0281] (5M) Explain fixed point addition and subtraction in computer arithmetics with an example.
solutions["COA-B3-0281"] = prev["COA-B3-0256"]

# 91. [COA-B3-0282] (5M) Perform the following using Booth algorithm 13 x -5.
solutions["COA-B3-0282"] = """### 1. Problem Setup
Multiply using Booth's Algorithm:
$$(+13)_{10} \\times (-5)_{10} = -65_{10}$$
- Multiplicand $M = +13_{10} = 001101_2$ (6 bits)
- $-M = \\text{2's comp of } 13 = 110010 + 1 = 110011_2$
- Multiplier $Q = -5_{10} = 111011_2$ (6 bits)
- Registers: $AC = 000000_2$, $Q_{n+1} = 0$, $SC = 6$.
- Expected Product: $-65_{10}$.

---

### 2. Step-by-Step Execution Trace Table

| Cycle | $Q_n Q_{n+1}$ | Operation | $AC$ (6 bits) | $QR$ (6 bits) | $Q_{n+1}$ | $SC$ |
| :---: | :---: | :--- | :---: | :---: | :---: | :---: |
| **0** | Init | Initial State | `000000` | `111011` | `0` | 6 |
| **1** | `10` | $AC \\leftarrow AC - M$ ($+110011$)<br>$ASHR$ | `110011`<br>`111001` | `111011`<br>`111101` | `0`<br>`1` | 5 |
| **2** | `11` | $ASHR$ | `111100` | `111110` | `1` | 4 |
| **3** | `01` | $AC \\leftarrow AC + M$ ($+001101$)<br>$ASHR$ | `001001`<br>`000100` | `111110`<br>`111111` | `1`<br>`0` | 3 |
| **4** | `10` | $AC \\leftarrow AC - M$ ($+110011$)<br>$ASHR$ | `110111`<br>`111011` | `111111`<br>`111111` | `0`<br>`1` | 2 |
| **5** | `11` | $ASHR$ | `111101` | `111111` | `1` | 1 |
| **6** | `11` | $ASHR$ | `111110` | `111111` | `1` | 0 |

---

### 3. Verification
- Final Register: $[AC, QR] = 111110\\,111111_2$.
- Number is negative (MSB $= 1$). Take 2's complement:
  $$\\text{1's comp} = 000001\\,000000_2$$
  $$\\text{2's comp} = 000001\\,000000_2 + 1 = 000001\\,000001_2 = (64 + 1)_{10} = 65_{10}$$
- Result: **$-65_{10}$** (Exact: $13 \\times -5 = -65$).
"""

# 92. [COA-B3-0283] (5M) Write a short note on floating point addition of numbers with an example.
solutions["COA-B3-0283"] = prev["COA-B3-0257"]

# Save Part 2D to file
with open('scripts/u3_p2d_data.json', 'w', encoding='utf-8') as f:
    json.dump(solutions, f, indent=2, ensure_ascii=False)

print(f"Part 2d: Questions 76 to 92 scripted successfully. Count: {len(solutions)}")
