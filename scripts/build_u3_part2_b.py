# -*- coding: utf-8 -*-
"""
Generates high-yield academic solutions for COA Unit 3 Part 2B: Questions 57 to 75
(COA-B3-0248 to COA-B3-0266)
"""
import json

solutions = {}

# 57. [COA-B3-0248] (10M) What are the steps involved in addition / subtraction of two floating-Point Numbers? Explain the operation through a flow chart. With an example.
solutions["COA-B3-0248"] = """### 1. Conceptual Principle of Floating-Point Addition & Subtraction
Floating-point arithmetic deals with numbers represented in the canonical form:
$$X = M_x \\times 2^{E_x}, \\quad Y = M_y \\times 2^{E_y}$$
Unlike fixed-point arithmetic where radix points are inherently aligned, floating-point addition and subtraction cannot be executed until **both numbers possess identical exponents**.

The four fundamental algorithmic phases are:
1. **Zero Check:** Determine if either operand is zero.
2. **Alignment of Mantissas (Significands):** Shift the mantissa of the smaller number rightward while incrementing its exponent until $E_x = E_y$.
3. **Mantissa Addition or Subtraction:** Add or subtract the aligned mantissas according to operand signs.
4. **Normalization & Overflow/Underflow Check:** Shift the resulting mantissa left or right to restore normalized form ($1.0 \\le M < 2.0$) and adjust the common exponent.

---

### 2. Algorithmic Steps in Detail

#### Step 1: Check for Zero Operands
- If $X = 0$, result is $Y$ (or $-Y$ if subtraction).
- If $Y = 0$, result is $X$.

#### Step 2: Compare Exponents and Align Mantissas
- Compute exponent difference: $d = E_x - E_y$.
- **If $d = 0$:** Exponents are already aligned.
- **If $d > 0$:** $E_x > E_y$. Shift mantissa $M_y$ right by $d$ positions, and set $E_y = E_x$.
- **If $d < 0$:** $E_y > E_x$. Shift mantissa $M_x$ right by $|d|$ positions, and set $E_x = E_y$.

#### Step 3: Perform Mantissa Addition / Subtraction
- Form sum or difference: $M_z = M_x \\pm M_y$.
- Carry out bit $C_{out}$ is preserved.

#### Step 4: Normalization & Exponent Adjustment
- **If mantissa overflow ($M_z \\ge 2$ or $C_{out} = 1$):** Shift $M_z$ right by 1 position and increment exponent $E_z \\leftarrow E_z + 1$.
- **If mantissa underflow ($M_z < 1$):** Shift $M_z$ left until the most significant bit is 1, decrementing $E_z$ for each shift.
- Check for exponent overflow ($E_z > E_{max}$) or underflow ($E_z < E_{min}$).

---

### 3. Comprehensive Flowchart

```
                    [ START ]
                        |
            Check if X = 0 or Y = 0
             /                     \\
         Yes/                       \\No
           v                         v
     Result is other operand    Compare Exponents:
                                d = Ex - Ey
                                     |
                       +-------------+-------------+
                       |                           |
                     d > 0                       d < 0
                       |                           |
              Shift My right by d         Shift Mx right by |d|
                   Ey <- Ex                    Ex <- Ey
                       |                           |
                       +-------------+-------------+
                                     |
                           Add/Subtract Mantissas:
                              Mz = Mx +/- My
                                     |
                             Is Mz Normalized?
                              /             \\
                          No /               \\ Yes
                            v                 v
                 Shift Mz (Right/Left)     Check Exponent
                 Adjust Exponent Ez        Limits (Ov/Un)
                            \\                 /
                             v               v
                                  [ STOP ]
```

---

### 4. Concrete Numerical Example
Compute $(0.5)_{10} + (0.125)_{10}$ in normalized binary floating-point:
- $X = 0.5_{10} = 0.1_2 \\times 2^0 = 1.0_2 \\times 2^{-1}$ ($M_x = 1.000$, $E_x = -1$)
- $Y = 0.125_{10} = 0.001_2 \\times 2^0 = 1.0_2 \\times 2^{-3}$ ($M_y = 1.000$, $E_y = -3$)

1. **Alignment:** Difference $d = E_x - E_y = (-1) - (-3) = 2$.
   - Shift $M_y$ right by 2 bits: $M_y = 0.010_2 \\times 2^{-1}$.
2. **Add Mantissas:**
   $$M_z = M_x + M_y = 1.000_2 + 0.010_2 = 1.010_2$$
   Common exponent $E_z = -1$.
3. **Normalization:** $1.010_2 \\times 2^{-1}$ is already normalized.
4. **Verification:**
   $$1.010_2 \\times 2^{-1} = 0.101_2 = 2^{-1} + 2^{-3} = 0.5 + 0.125 = 0.625_{10} \\quad \\text{(Exact!)}$$
"""

# 58. [COA-B3-0249] (5M) Draw an H/W circuit for fixed point Number ADD/SUB?
solutions["COA-B3-0249"] = """### 1. Hardware Architecture of Binary Adder-Subtractor
A unified **Fixed-Point Adder-Subtractor** performs both addition ($A + B$) and subtraction ($A - B$) using an array of full adders and XOR gates controlled by a single mode selection signal ($M$).

- **Mode Control Signal ($M$):**
  - When $M = 0$: The circuit performs **Addition** ($A + B$).
  - When $M = 1$: The circuit performs **Subtraction** ($A - B = A + B' + 1$).

---

### 2. Circuit Diagram and Signal Interconnections

```
               B3          B2          B1          B0
                |           |           |           |
       M -------+-----+-----+-----+-----+-----+-----+-----+ (Mode Line M)
       |        |     |     |     |     |     |     |     |
       |       +-+   +-+   +-+   +-+    |     |     |     |
       |       |X|   |X|   |X|   |X|    |     |     |     |
       |       |O|   |O|   |O|   |O|    |     |     |     |
       |       |R|   |R|   |R|   |R|    |     |     |     |
       |       +-+   +-+   +-+   +-+    |     |     |     |
       |        |     |     |     |     |     |     |     |
       |        v     v     v     v     |     |     |     |
       |       Y3    Y2    Y1    Y0     |     |     |     |
       |        |     |     |     |     |     |     |     |
   A3--+------->|FA3  |FA2  |FA1  |FA0 |<----+-----+-----+
   A2-----------+---->|     |     |    |
   A1-----------------+---->|     |    |
   A0-----------------------+---->|    |
                                  |    |<--- C0 = M (Carry In)
        C4    C3    C2    C1      |
      <----+-----+-----+-----+----+
           |     |     |     |
           v     v     v     v
           S3    S2    S1    S0
```

---

### 3. Detailed Operational Behavior

#### A. Addition Mode ($M = 0$):
1. The XOR gate property with 0 yields:
   $$B_i \\oplus 0 = B_i$$
   The $B$ inputs pass completely unchanged into the Full Adders.
2. The initial carry-in is $C_0 = M = 0$.
3. The circuit computes:
   $$\\text{Output} = A + B + 0 = A + B$$

#### B. Subtraction Mode ($M = 1$):
1. The XOR gate property with 1 yields:
   $$B_i \\oplus 1 = B_i' \\quad (\\text{bitwise inversion / 1's complement})$$
2. The initial carry-in is $C_0 = M = 1$.
3. The circuit computes:
   $$\\text{Output} = A + B' + 1 = A + (\\text{2's complement of } B) = A - B$$

---

### 4. Overflow Detection Logic
In signed 2's complement arithmetic, overflow occurs when adding two numbers of the same sign produces a result with the opposite sign. Hardware detects this using a single XOR gate comparing the carry into the sign bit ($C_{n-1}$) and the carry out of the sign bit ($C_n$):
$$V = C_n \\oplus C_{n-1}$$
If $V = 1$, an arithmetic overflow has occurred, setting the processor condition flag.
"""

# 59. [COA-B3-0250] (5M) Construct a flowchart for 2's Complement multiplication algorithm and Perform multiplication between 10111 * 10011.
solutions["COA-B3-0250"] = """### 1. Booth's 2's Complement Multiplication Algorithm
Booth's Algorithm multiplies signed numbers directly in 2's complement without requiring sign-magnitude conversion.
- **Operands:**
  - Multiplicand $M = 10111_2$ (5-bit)
  - Multiplier $Q = 10011_2$ (5-bit)
- **Decimal Equivalents:**
  - $M = 10111_2$: Sign bit is 1 (negative). 2's comp of $10111 = 01000 + 1 = 01001_2 = -9_{10}$.
  - $Q = 10011_2$: Sign bit is 1 (negative). 2's comp of $10011 = 01100 + 1 = 01101_2 = -13_{10}$.
  - Expected product: $(-9) \\times (-13) = +117_{10} = 0001110101_2$.

---

### 2. Register Setup
- $BR = 10111$ (Multiplicand, $-9$)
- $-BR = 01001$ (2's complement of $BR$, $+9$)
- $AC = 00000$ (5 bits)
- $QR = 10011$ (Multiplier, $-13$)
- $Q_{n+1} = 0$
- $SC = 5$

---

### 3. Step-by-Step Execution Trace Table

| Cycle | $Q_n Q_{n+1}$ | Operation Performed | $AC$ | $QR$ | $Q_{n+1}$ | $SC$ |
| :---: | :---: | :--- | :---: | :---: | :---: | :---: |
| **0** | Initial | Load Registers | `00000` | `10011` | `0` | 5 |
| **1** | `10` | $AC \\leftarrow AC - BR$ ($+01001$)<br>$ASHR(AC, QR, Q_{n+1})$ | `01001`<br>`00100` | `10011`<br>`11001` | `0`<br>`1` | 4 |
| **2** | `11` | $ASHR(AC, QR, Q_{n+1})$ | `00010` | `01100` | `1` | 3 |
| **3** | `01` | $AC \\leftarrow AC + BR$ ($+10111$)<br>$ASHR(AC, QR, Q_{n+1})$ | `11001`<br>`11100` | `01100`<br>`10110` | `1`<br>`0` | 2 |
| **4** | `00` | $ASHR(AC, QR, Q_{n+1})$ | `11110` | `01011` | `0` | 1 |
| **5** | `10` | $AC \\leftarrow AC - BR$ ($+01001$)<br>$ASHR(AC, QR, Q_{n+1})$ | `00111`<br>`00011` | `01011`<br>`10101` | `0`<br>`1` | 0 |

---

### 4. Final Result Verification
- Combined register contents $[AC, QR] = 00011\\,10101_2$.
- Binary value: $0001110101_2 = 2^6 + 2^5 + 2^4 + 2^2 + 2^0 = 64 + 32 + 16 + 4 + 1 = 117_{10}$.
- Since $(-9) \\times (-13) = +117_{10}$, the computed product is **100% mathematically exact!**
"""

# 60. [COA-B3-0251] (5M) Perform the subtraction with the following unsigned binary numbers: i. 11010 - 10000 ii. 10010 - 10011 using 2's complement.
solutions["COA-B3-0251"] = """### 1. Conceptual Method for 2's Complement Subtraction
To subtract unsigned binary number $N$ from $M$ ($M - N$):
1. Represent both numbers using $n$ bits.
2. Find the 2's complement of the subtrahend $N$:
   $$\\text{2's complement of } N = (\\text{1's complement of } N) + 1$$
3. Add $M$ to the 2's complement of $N$.
4. Check the end carry:
   - **If End Carry $= 1$:** Discard end carry; result is positive and in true binary form.
   - **If End Carry $= 0$:** Result is negative; take 2's complement of the sum to find magnitude, and prepend a minus sign.

---

### 2. Part (i): $11010_2 - 10000_2$
- Minuend $M = 11010_2$ ($26_{10}$)
- Subtrahend $N = 10000_2$ ($16_{10}$)

1. **Find 2's complement of $N$ ($10000$):**
   - 1's complement $= 01111$
   - 2's complement $= 01111 + 1 = 10000_2$
2. **Add $M + (\\text{2's comp of } N)$:**
   $$\\begin{array}{r@{\\quad}l}
     11010 & (26) \\\\
   + 10000 & (\\text{2's comp of } 16) \\\\
   \\hline
   1\\,01010 & (\\text{End Carry } = 1)
   \\end{array}$$
3. **Interpret Result:**
   - Carry out $= 1 \\implies$ result is positive.
   - Discard the end carry:
   $$\\mathbf{Result = 01010_2 = (+10)_{10}} \\quad (26 - 16 = 10, \\text{ Correct})$$

---

### 3. Part (ii): $10010_2 - 10011_2$
- Minuend $M = 10010_2$ ($18_{10}$)
- Subtrahend $N = 10011_2$ ($19_{10}$)

1. **Find 2's complement of $N$ ($10011$):**
   - 1's complement $= 01100$
   - 2's complement $= 01100 + 1 = 01101_2$
2. **Add $M + (\\text{2's comp of } N)$:**
   $$\\begin{array}{r@{\\quad}l}
     10010 & (18) \\\\
   + 01101 & (\\text{2's comp of } 19) \\\\
   \\hline
   0\\,11111 & (\\text{End Carry } = 0)
   \\end{array}$$
3. **Interpret Result:**
   - Carry out $= 0 \\implies$ result is negative and in 2's complement form.
   - Find magnitude: 2's complement of $11111$:
     $$\\text{1's comp} = 00000 \\implies \\text{2's comp} = 00000 + 1 = 00001_2$$
   - Prepend negative sign:
   $$\\mathbf{Result = -00001_2 = (-1)_{10}} \\quad (18 - 19 = -1, \\text{ Correct})$$
"""

# 61. [COA-B3-0252] (5M) Draw the flow chart for decimal division and explain division of 23 with 4.
solutions["COA-B3-0252"] = """### 1. Conceptual Principle of Decimal Division
Decimal division in digital systems operates on **Binary Coded Decimal (BCD)** digits using the restoring method:
1. Divide the dividend by repeatedly subtracting the divisor from the partial dividend until a negative result occurs (indicated by an underflow/borrow).
2. The count of successful subtractions forms the decimal **quotient digit**.
3. Add back the divisor to **restore** the positive remainder.
4. Shift the partial remainder left by one decimal digit (4 bits) and repeat for the next quotient digit.

---

### 2. Flowchart for Decimal Division

```
                     [ START ]
                         |
           Load Dividend in A, Divisor in B
                 Quotient Q <- 0
                         |
           +----------->(+)
           |             |
           |         A <- A - B  (BCD Subtraction)
           |             |
           |       Is Borrow = 1 ?
           |          /     \\
           |       No/       \\Yes
           |        /         \\
           |   Q <- Q + 1    A <- A + B  (Restore)
           |        |             |
           +--------+         Next Digit /
                              Done?
```

---

### 3. Step-by-Step Trace: Divide $23$ by $4$
- **Dividend:** $23$
- **Divisor:** $4$
- **Expected Result:** $\\text{Quotient} = 5$, $\\text{Remainder} = 3$ ($23 = 5 \\times 4 + 3$).

| Step | Operation | Accumulator ($A$) | Quotient Counter ($Q$) | Status / Comment |
| :---: | :--- | :---: | :---: | :--- |
| **0** | Initialize | $23$ | $0$ | Load initial dividend |
| **1** | $A \\leftarrow A - 4$ | $19$ | $1$ | Subtraction 1 (Positive) |
| **2** | $A \\leftarrow A - 4$ | $15$ | $2$ | Subtraction 2 (Positive) |
| **3** | $A \\leftarrow A - 4$ | $11$ | $3$ | Subtraction 3 (Positive) |
| **4** | $A \\leftarrow A - 4$ | $7$ | $4$ | Subtraction 4 (Positive) |
| **5** | $A \\leftarrow A - 4$ | $3$ | $5$ | Subtraction 5 (Positive) |
| **6** | $A \\leftarrow A - 4$ | $-1$ | $5$ | Subtraction 6 produces **Borrow / Negative** |
| **7** | $A \\leftarrow A + 4$ (Restore) | $3$ | $5$ | **Restored remainder to $3$** |

#### Final Division Output:
- **Quotient ($Q$):** $5$
- **Remainder ($A$):** $3$
- Since $23 = 4 \\times 5 + 3$, the execution is **completely verified**.
"""

# 62. [COA-B3-0253] (5M) Draw the flow chart of floating point addition operation?
solutions["COA-B3-0253"] = """### 1. Conceptual Principle of Floating-Point Addition
Floating-point addition operates on numbers of the form:
$$X = M_x \\times 2^{E_x}, \\quad Y = M_y \\times 2^{E_y}$$
Because their exponents may differ, direct addition of mantissas is illegal. Operands must undergo exponent alignment before addition, followed by result normalization.

---

### 2. Algorithmic Steps
1. **Zero Test:** If $X = 0$, result is $Y$; if $Y = 0$, result is $X$.
2. **Exponent Comparison:** Compare $E_x$ and $E_y$.
   - If $E_x > E_y$: Shift $M_y$ right by $E_x - E_y$, set $E_y = E_x$.
   - If $E_y > E_x$: Shift $M_x$ right by $E_y - E_x$, set $E_x = E_y$.
3. **Mantissa Addition:** Add aligned mantissas: $M_z = M_x + M_y$.
4. **Normalization:**
   - If carry out $C=1$: Shift $M_z$ right by 1, increment exponent $E_z \\leftarrow E_z + 1$.
   - If leading bit of $M_z = 0$: Shift $M_z$ left, decrement exponent $E_z \\leftarrow E_z - 1$ until normalized.
5. **Exception Check:** Test for exponent overflow or underflow.

---

### 3. Flowchart for Floating-Point Addition

```
                    [ START ]
                        |
            Is X = 0 ? --------Yes------> Return Y
                 | No
            Is Y = 0 ? --------Yes------> Return X
                 | No
                 v
            Compare Exponents: Ex and Ey
                 |
      +----------+----------+
      |                     |
   Ex > Ey               Ey > Ex
      |                     |
  Shift My Right        Shift Mx Right
  Ey <- Ey + diff       Ex <- Ex + diff
      |                     |
      +----------+----------+
                 |
                 v
           Add Mantissas:
           Mz = Mx + My
                 |
           Is Carry C = 1 ?
            /          \\
        Yes/            \\No
          v              v
     Shift Mz Right   Is Leading Bit 1 ?
     Ez <- Ez + 1       /          \\
        |           No /            \\ Yes
        |             v              v
        +--------> Check for     [ Result Ready ]
                   Overflow/     [ Normalized   ]
                   Underflow
```
"""

# 63. [COA-B3-0254] (5M) Draw the flow chart for Booth multiplication and explain multiplication of 12 with 13.
solutions["COA-B3-0254"] = """### 1. Booth Multiplication Algorithm
Booth's Algorithm reduces multiplication cycles for signed and unsigned binary numbers by treating strings of consecutive 1s as a single addition and subtraction.

#### Operands:
- Multiplicand $M = 12_{10} = 001100_2$ (6 bits to prevent overflow)
- Multiplier $Q = 13_{10} = 001101_2$ (6 bits)
- $-M = \\text{2's comp of } 12 = 110011 + 1 = 110100_2$
- Expected Product: $12 \\times 13 = 156_{10} = 000010011100_2$

---

### 2. Trace Table for $12 \\times 13$

| Step | $Q_n Q_{n+1}$ | Operation | $AC$ (6 bits) | $QR$ (6 bits) | $Q_{n+1}$ | $SC$ |
| :---: | :---: | :--- | :---: | :---: | :---: | :---: |
| **Init**| — | Initial Values | `000000` | `001101` | `0` | 6 |
| **1** | `10` | $AC \\leftarrow AC - M$ ($+110100$)<br>$ASHR$ | `110100`<br>`111010` | `001101`<br>`000110` | `0`<br>`1` | 5 |
| **2** | `01` | $AC \\leftarrow AC + M$ ($+001100$)<br>$ASHR$ | `000110`<br>`000011` | `000110`<br>`100011` | `1`<br>`0` | 4 |
| **3** | `10` | $AC \\leftarrow AC - M$ ($+110100$)<br>$ASHR$ | `110111`<br>`111011` | `100011`<br>`110001` | `0`<br>`1` | 3 |
| **4** | `11` | $ASHR$ | `111101` | `111000` | `1` | 2 |
| **5** | `01` | $AC \\leftarrow AC + M$ ($+001100$)<br>$ASHR$ | `001001`<br>`000100` | `111000`<br>`111100` | `1`<br>`0` | 1 |
| **6** | `00` | $ASHR$ | `000010` | `011110` | `0` | 0 |

---

### 3. Final Verification
- Final Register Pair $[AC, QR] = 000010\\,011100_2$.
- Decimal Evaluation:
  $$2^7 + 2^4 + 2^3 + 2^2 = 128 + 16 + 8 + 4 = 156_{10}$$
- Result is **100% verified and correct!**
"""

# 64. [COA-B3-0255] (5M) Discuss about fixed point and floating-point representations.
solutions["COA-B3-0255"] = """### 1. Conceptual Distinction
Digital computer systems encode numerical quantities using either **Fixed-Point** or **Floating-Point** representations based on the dynamic range and arithmetic speed required:

1. **Fixed-Point Representation:**
   - The radix point occupies a statically defined position (e.g., at the extreme right for integers, or extreme left for fractions).
   - Simpler hardware execution; optimal for loop counters, address calculation, and integer metrics.

2. **Floating-Point Representation:**
   - Employs scientific notation: $N = \\pm M \\times r^E$, where the radix point dynamically shifts according to exponent $E$.
   - Enables representation of astronomical scales and subatomic fractions within a standard 32-bit or 64-bit word.

---

### 2. Comprehensive Comparison Table

| Metric | Fixed-Point Representation | Floating-Point Representation |
| :--- | :--- | :--- |
| **Binary Point** | Permanently fixed at a designated bit position. | Floats dynamically; scale specified by exponent bits. |
| **Number Format** | $[\\text{Sign}]\\,[\\text{Magnitude Bits}]$ | $[\\text{Sign}]\\,[\\text{Biased Exponent}]\\,[\\text{Mantissa}]$ |
| **Dynamic Range** | Limited to $[-2^{n-1}, +2^{n-1}-1]$. | Immense (e.g., $10^{-38}$ to $10^{+38}$ for 32-bit IEEE 754). |
| **Precision** | Absolute precision is fixed across all values. | Relative precision is maintained across all scales. |
| **Hardware Complexity**| Low; built using basic binary adders and shifters. | High; requires specialized Floating-Point Unit (FPU). |
| **Latency / Speed**| Single-cycle fast execution. | Multi-cycle execution (alignment, normalization). |
"""

# 65. [COA-B3-0256] (5M) Perform and explain arithmetic addition, subtraction, and overflow detection using fixed point representation.
solutions["COA-B3-0256"] = """### 1. Fixed-Point Signed 2's Complement Arithmetic
In signed fixed-point 2's complement representation:
- The MSB is the sign bit ($0 = \\text{Positive}, 1 = \\text{Negative}$).
- Positive numbers are stored in true binary form.
- Negative numbers are stored in 2's complement form ($2^n - |N|$).
- Subtraction is unified into addition: $A - B = A + (-B)$.

---

### 2. Arithmetic Addition and Subtraction Operations

#### A. Addition ($+35 + +40$):
- $+35_{10} = 00100011_2$
- $+40_{10} = 00101000_2$
- Addition:
  $$\\begin{array}{r@{\\quad}l}
    00100011 & (35) \\\\
  + 00101000 & (40) \\\\
  \\hline
    01001011 & (75_{10}, \\text{ Sign bit } = 0, \\text{ Correct})
  \\end{array}$$

#### B. Subtraction ($+35 - +40$):
- Form $-40$: 2's complement of $00101000 = 11010111 + 1 = 11011000_2$.
- Add $35 + (-40)$:
  $$\\begin{array}{r@{\\quad}l}
    00100011 & (35) \\\\
  + 11011000 & (-40) \\\\
  \\hline
    11111011 & (\\text{Negative result})
  \\end{array}$$
- Take 2's complement of $11111011$: $00000100 + 1 = 00000101_2 = -5_{10}$ (Correct).

---

### 3. Overflow Detection Logic
An **overflow** occurs when an arithmetic operation on two $n$-bit numbers yields a mathematical result requiring $n+1$ bits to represent:
- **Rule:** Overflow can only happen when adding two numbers of the **same sign** and obtaining a result of the **opposite sign**.
- **Hardware Circuit:**
  $$V = C_n \\oplus C_{n-1}$$
  where $C_n$ is the carry out of the sign bit and $C_{n-1}$ is the carry into the sign bit.
- **Example:** Add $+70$ and $+80$ in an 8-bit signed register (max capacity $+127$):
  $$01000110 (+70) + 01010000 (+80) = 10010110_2 (-106_{10})$$
  Here $C_7 = 1, C_8 = 0 \\implies V = 0 \\oplus 1 = 1$. **Overflow detected!**
"""

# 66. [COA-B3-0257] (5M) Perform floating point addition using the numbers 0.5 and -0.4375.
solutions["COA-B3-0257"] = """### 1. Problem Formulation
Perform floating-point addition of:
$$X = +0.5_{10}, \\quad Y = -0.4375_{10}$$
Expected sum: $0.5 - 0.4375 = +0.0625_{10} = 2^{-4} = 1.0_2 \\times 2^{-4}$.

---

### 2. Binary Conversion and Normalization
1. **Operand $X$:**
   - $0.5_{10} = 0.1_2 = 1.0_2 \\times 2^{-1}$
   - $S_x = 0$ (Positive)
   - $M_x = 1.000000_2$
   - $E_x = -1$

2. **Operand $Y$:**
   - $0.4375_{10} = 0.25 + 0.125 + 0.0625 = 2^{-2} + 2^{-3} + 2^{-4} = 0.0111_2$
   - Normalized: $1.11_2 \\times 2^{-2}$
   - $S_y = 1$ (Negative)
   - $M_y = 1.110000_2$
   - $E_y = -2$

---

### 3. Step-by-Step Execution

#### Step 1: Align Exponents
- Difference $d = E_x - E_y = (-1) - (-2) = 1$.
- Shift smaller number's mantissa ($M_y$) right by 1 position:
  $$M_y = 0.111000_2, \\quad E_y = -1$$

#### Step 2: Add Mantissas (Taking Signs into Account)
- Since signs differ ($S_x = 0, S_y = 1$), perform subtraction: $M_z = M_x - M_y$.
  $$\\begin{array}{r@{\\quad}l}
    1.000000 & (M_x) \\\\
  - 0.111000 & (M_y) \\\\
  \\hline
    0.001000 & (M_z)
  \\end{array}$$
- Result sign $S_z = 0$ (since $|M_x| > |M_y|$). Common exponent $E_z = -1$.

#### Step 3: Normalization
- Mantissa $M_z = 0.001000_2$ is not normalized (leading bit is 0).
- Shift left by 3 positions to bring leading 1 to MSB:
  $$M_z = 1.000000_2$$
- Decrement exponent by 3:
  $$E_z = -1 - 3 = -4$$

---

### 4. Final Output Verification
- Final floating-point value: $+1.0_2 \\times 2^{-4}$.
- Decimal value: $2^{-4} = \\frac{1}{16} = 0.0625_{10}$.
- Matches $0.5 - 0.4375 = 0.0625$ **exactly!**
"""

# 67. [COA-B3-0258] (5M) Explain the multiplication of positive numbers using a booth multiplier with a neat sketch.
solutions["COA-B3-0258"] = """### 1. Conceptual Principle
Although **Booth's Multiplier** was primarily invented to handle signed 2's complement numbers efficiently, it functions seamlessly on positive numbers as well. When multiplier bits contain continuous strings of 1s, Booth's algorithm skips intermediate additions, substituting them with one subtract at the start of the sequence and one add at the end.

---

### 2. Hardware Architecture Sketch
```
                   +------------------------+
                   | Multiplicand Reg (BR)  |
                   +------------------------+
                               |
                               v
                       +---------------+
                       | Parallel ALU  | <-----+
                       | Adder/Subtr.  |       |
                       +---------------+       |
                               |               |
                               v               |
             +--------------------+            |
             |  Accumulator (AC)  |------------+
             +--------------------+
                       |
               ASHR    v
             +--------------------+     +-------------+
             | Multiplier Reg(QR) |---->| Q_{n+1} FF  |
             +--------------------+     +-------------+
                       |                       |
                       +-----------+-----------+
                                   |
                                   v
                       +-----------------------+
                       | Booth Decision Logic  |
                       +-----------------------+
```

---

### 3. Concrete Example: Multiply Positive Numbers $(+7) \\times (+3)$
- Multiplicand $BR = +7_{10} = 00111_2$, $-BR = 11001_2$
- Multiplier $QR = +3_{10} = 00011_2$ ($SC = 5$)

| Cycle | $Q_n Q_{n+1}$ | Operation | $AC$ | $QR$ | $Q_{n+1}$ | $SC$ |
| :---: | :---: | :--- | :---: | :---: | :---: | :---: |
| **0** | Init | Load registers | `00000` | `00011` | `0` | 5 |
| **1** | `10` | $AC \\leftarrow AC - BR$ ($+11001$)<br>$ASHR$ | `11001`<br>`11100` | `00011`<br>`10001` | `0`<br>`1` | 4 |
| **2** | `11` | $ASHR$ | `11110` | `01000` | `1` | 3 |
| **3** | `01` | $AC \\leftarrow AC + BR$ ($+00111$)<br>$ASHR$ | `00101`<br>`00010` | `01000`<br>`10100` | `1`<br>`0` | 2 |
| **4** | `00` | $ASHR$ | `00001` | `01010` | `0` | 1 |
| **5** | `00` | $ASHR$ | `00000` | `10101` | `0` | 0 |

- Result: $[AC, QR] = 0000010101_2 = 16 + 4 + 1 = 21_{10}$ (Exact: $7 \\times 3 = 21$).
"""

# 68. [COA-B3-0259] (5M) List out the steps in non restoring division method to perform 8/3.
solutions["COA-B3-0259"] = """### 1. Conceptual Principle of Non-Restoring Division
In **Non-Restoring Division**, the restoration step after an unsuccessful subtraction is completely eliminated, reducing the overall execution time:
- If the partial remainder $A$ is positive:
  - Shift $[A, Q]$ left by 1 bit.
  - Subtract divisor: $A \\leftarrow A - M$.
- If the partial remainder $A$ is negative:
  - Shift $[A, Q]$ left by 1 bit.
  - Add divisor: $A \\leftarrow A + M$.
- Set quotient bit $Q_0$:
  - If $A \\ge 0 \\implies Q_0 = 1$.
  - If $A < 0 \\implies Q_0 = 0$.
- Final Correction: If the remainder is negative after the last cycle, restore it by adding $M$: $A \\leftarrow A + M$.

---

### 2. Execution Trace Table: Divide $8$ by $3$
- Dividend $= 8_{10} = 1000_2$ ($4$ bits, $SC = 4$)
- Divisor $M = 3_{10} = 0011_2$, $-M = 1101_2$
- Registers: $A = 00000_2$ (5 bits to hold sign), $Q = 1000_2$

| Step | Operation | $A$ (5 bits) | $Q$ (4 bits) | $SC$ |
| :---: | :--- | :---: | :---: | :---: |
| **Init**| Initial Setup | `00000` | `1000` | 4 |
| **1** | $A \\ge 0 \\implies$ Shift Left $[A, Q]$<br>$A \\leftarrow A - M$ ($+1101$)<br>$A < 0 \\implies Q_0 = 0$ | `00001`<br>`11110`<br>`11110` | `000_`<br>`000_`<br>`0000` | 3 |
| **2** | $A < 0 \\implies$ Shift Left $[A, Q]$<br>$A \\leftarrow A + M$ ($+0011$)<br>$A < 0 \\implies Q_0 = 0$ | `11100`<br>`11111`<br>`11111` | `000_`<br>`000_`<br>`0000` | 2 |
| **3** | $A < 0 \\implies$ Shift Left $[A, Q]$<br>$A \\leftarrow A + M$ ($+0011$)<br>$A \\ge 0 \\implies Q_0 = 1$ | `11110`<br>`00001`<br>`00001` | `000_`<br>`000_`<br>`0001` | 1 |
| **4** | $A \\ge 0 \\implies$ Shift Left $[A, Q]$<br>$A \\leftarrow A - M$ ($+1101$)<br>$A < 0 \\implies Q_0 = 0$ | `00010`<br>`11111`<br>`11111` | `001_`<br>`001_`<br>`0010` | 0 |
| **End** | $A < 0 \\implies$ Restore: $A \\leftarrow A + M$ ($+0011$) | `00010` | `0010` | — |

---

### 3. Final Result Verification
- **Quotient ($Q$):** $0010_2 = 2_{10}$
- **Remainder ($A$):** $00010_2 = 2_{10}$
- Verification: $8 = 3 \\times 2 + 2$ (Exact!).
"""

# 69. [COA-B3-0260] (5M) Perform booth multiplication on the following numbers 13(multiplicand), +11 (multiplier).
solutions["COA-B3-0260"] = """### 1. Operand Setup
- Multiplicand $M = 13_{10} = 001101_2$ (6 bits)
- Multiplier $Q = +11_{10} = 001011_2$ (6 bits)
- $-M = \\text{2's comp of } 13 = 110010 + 1 = 110011_2$
- Expected Product: $13 \\times 11 = 143_{10} = 000010001111_2$
- Register initial states: $AC = 000000_2$, $Q_{n+1} = 0$, $SC = 6$.

---

### 2. Step-by-Step Execution Trace Table

| Cycle | $Q_n Q_{n+1}$ | Operation | $AC$ (6 bits) | $QR$ (6 bits) | $Q_{n+1}$ | $SC$ |
| :---: | :---: | :--- | :---: | :---: | :---: | :---: |
| **Init**| — | Initial values | `000000` | `001011` | `0` | 6 |
| **1** | `10` | $AC \\leftarrow AC - M$ ($+110011$)<br>$ASHR$ | `110011`<br>`111001` | `001011`<br>`100101` | `0`<br>`1` | 5 |
| **2** | `11` | $ASHR$ | `111100` | `110010` | `1` | 4 |
| **3** | `01` | $AC \\leftarrow AC + M$ ($+001101$)<br>$ASHR$ | `001001`<br>`000100` | `110010`<br>`111001` | `1`<br>`0` | 3 |
| **4** | `10` | $AC \\leftarrow AC - M$ ($+110011$)<br>$ASHR$ | `110111`<br>`111011` | `111001`<br>`111100` | `0`<br>`1` | 2 |
| **5** | `01` | $AC \\leftarrow AC + M$ ($+001101$)<br>$ASHR$ | `001000`<br>`000100` | `111100`<br>`011110` | `1`<br>`0` | 1 |
| **6** | `00` | $ASHR$ | `000010` | `001111` | `0` | 0 |

---

### 3. Verification
- Final Register: $[AC, QR] = 000010\\,001111_2$.
- Binary value: $2^7 + 2^3 + 2^2 + 2^1 + 2^0 = 128 + 8 + 4 + 2 + 1 = 143_{10}$.
- Exact match: $13 \\times 11 = 143$!
"""

# Save Part 2B to file
with open('scripts/u3_p2b_data.json', 'w', encoding='utf-8') as f:
    json.dump(solutions, f, indent=2, ensure_ascii=False)

print(f"Part 2b: Questions 57 to 69 scripted successfully. Count: {len(solutions)}")
