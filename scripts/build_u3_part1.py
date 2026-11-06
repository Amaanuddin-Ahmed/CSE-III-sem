import json

solutions_part1 = {}

# Helper to register answer
def reg(qid, qtext, marks, md):
    solutions_part1[qid] = {
        "id": qid,
        "question": qtext,
        "marks": marks,
        "chapter": 3,
        "answerMd": md.strip()
    }

# 1. COA-A3-0192 [2M]
reg("COA-A3-0192", "What is meant by normalization in floating point representation?", 2, """
### Normalization in Floating-Point Representation

**Definition:**
A floating-point number is said to be **normalized** if the most significant digit (MSB) of the mantissa is non-zero. 

In binary floating-point representation, a normalized number takes the form:
$$\\pm (1.b_1 b_2 b_3 \\dots b_k)_2 \\times 2^e \\quad \\text{or} \\quad \\pm (0.1 b_2 b_3 \\dots b_k)_2 \\times 2^e$$

#### Key Reasons for Normalization:
1. **Uniqueness:** It ensures that every real number has a single, unique binary representation (avoiding ambiguity like $0.01 \\times 2^3 = 0.1 \\times 2^2$).
2. **Maximum Precision:** Shifting leading zeros out of the mantissa preserves the maximum number of significant precision bits in a fixed-size register.
3. **Hidden Bit Optimization:** In IEEE 754, since the leading bit before the binary point is always $1$ ($1.M$), it is omitted from storage (the "hidden bit"), providing an extra bit of precision for free.
""")

# 2. COA-A3-0193 [2M]
reg("COA-A3-0193", "Do the subtraction using 2s complements 1010-1010011.", 2, """
### Subtraction Using 2's Complement: $1010_2 - 1010011_2$

#### Step 1: Equalize Word Lengths
- Minuend ($A$) = $1010_2$ (4 bits)
- Subtrahend ($B$) = $1010011_2$ (7 bits)
- Pad Minuend with leading zeros to 7 bits: $A = 0001010_2$ ($+10_{10}$)
- Subtrahend $B = 1010011_2$ ($+83_{10}$)

#### Step 2: Find 2's Complement of Subtrahend ($B$)
1. 1's complement of $1010011$: Invert all bits $\\rightarrow 0101100$
2. 2's complement: Add $1$:
   $$0101100 + 1 = 0101101_2$$

#### Step 3: Add Minuend ($A$) and 2's Complement of $B$
$$\\begin{array}{r@{\\quad}l}
  0001010 & (A) \\\\
+ 0101101 & (\\text{2's complement of } B) \\\\
\\hline
  0110111 & (\\text{Sum})
\\end{array}$$

#### Step 4: Interpret the Result
- **Carry-out = 0:** The absence of an end carry indicates the result is **negative** and is in 2's complement form.
- Magnitude: Take 2's complement of $0110111$:
  - 1's complement: $1001000$
  - Add 1: $1001001_2 = 73_{10}$
- **Final Answer:** $-0110111_2$ (or in decimal: $10 - 83 = -73_{10}$).
""")

# 3. COA-A3-0194 [2M]
reg("COA-A3-0194", "What are the various ways to represent the negative value in fixed point numbers?", 2, """
### Representation of Negative Numbers in Fixed-Point Format

In computer arithmetic, negative fixed-point numbers are represented using three primary conventions:

| Representation | Format Description | Zero Representation | Example ($-5$ in 4-bit) |
| :--- | :--- | :--- | :--- |
| **Signed Magnitude** | MSB is sign bit ($0 = +, 1 = -$), remaining bits represent magnitude. | Two zeros ($+0 = 0000, -0 = 1000$) | `1101` |
| **Signed 1's Complement** | Negative numbers formed by inverting every bit of the positive value. | Two zeros ($+0 = 0000, -0 = 1111$) | `1010` |
| **Signed 2's Complement** | Formed by taking 1's complement and adding $1$. Standard in modern ALUs. | **Single zero** ($0000$) | `1011` |

#### Architectural Advantage of 2's Complement:
- Eliminates dual zero representation.
- Subtraction is executed using standard addition circuitry without needing end-around carry correction.
""")

# 4. COA-A3-0195 [2M]
reg("COA-A3-0195", "Find the largest and smallest values that could be stored in an 8 bit signed register & unsigned register?", 2, """
### Register Value Ranges for 8-Bit Storage

#### 1. Unsigned 8-Bit Register:
All 8 bits are used solely for numeric magnitude ($2^7$ to $2^0$).
- **Formula:** Range is $0$ to $2^n - 1$ where $n = 8$.
- **Smallest Value:** $00000000_2 = \\mathbf{0}$
- **Largest Value:** $11111111_2 = 2^8 - 1 = \\mathbf{+255}$

#### 2. Signed 8-Bit Register (2's Complement):
MSB is the sign bit ($0$ for positive, $1$ for negative); remaining 7 bits denote value.
- **Formula:** Range is $-2^{n-1}$ to $+2^{n-1} - 1$.
- **Smallest (Most Negative) Value:** $10000000_2 = -2^7 = \\mathbf{-128}$
- **Largest (Most Positive) Value:** $01111111_2 = 2^7 - 1 = \\mathbf{+127}$

#### Summary Table:
| Register Type | Smallest Stored Value | Largest Stored Value | Total Combinations |
| :--- | :--- | :--- | :--- |
| **Unsigned 8-bit** | $0$ | $+255$ | $256$ |
| **Signed 8-bit (2's Comp)** | $-128$ | $+127$ | $256$ |
""")

# 5. COA-A3-0196 [2M]
reg("COA-A3-0196", "What is meant by normalization in floating point representation? Why do we need it?", 2, """
### Floating-Point Normalization & Its Necessity

#### Definition:
A floating-point number is **normalized** when its mantissa is shifted such that the most significant non-zero bit immediately follows (or precedes) the radix point:
$$N = \\pm M \\times r^E \\quad \\text{where } \\frac{1}{r} \\le |M| < 1 \\text{ (fractional)} \\quad \\text{or} \\quad 1.0 \\le |M| < 2.0 \\text{ (IEEE 754)}$$

#### Why Normalization is Required in Computer Architecture:
1. **Ensures Unique Representation:** Without normalization, a number like $0.5_{10}$ could be written ambiguously as $0.5 \\times 10^0 = 0.05 \\times 10^1 = 0.005 \\times 10^2$. Normalization enforces a single canonical bit pattern.
2. **Maximizes Numeric Precision:** By stripping leading zeros, all available mantissa register bits store significant data rather than useless padding.
3. **Hidden Bit (Implicit Leading 1):** In IEEE 754 formats, since the first bit is always $1$, it is not stored in memory, providing an extra bit of precision for arithmetic calculations.
""")

# 6. COA-A3-0197 [2M]
reg("COA-A3-0197", "Write about Floating point representation with an example.", 2, """
### Floating-Point Representation

In computer systems, real numbers with fractional parts or very large/small magnitudes are stored using scientific floating-point notation:
$$N = \\pm M \\times r^E$$
Where:
- **Sign ($S$):** 1-bit indicator ($0 = \\text{positive}$, $1 = \\text{negative}$).
- **Mantissa / Significand ($M$):** Represents the precision bits of the number.
- **Base / Radix ($r$):** The base (typically $2$ for binary).
- **Exponent ($E$):** Indicates the position of the binary radix point.

#### Concrete Example:
Represent $+13.625_{10}$ in binary floating-point format:
1. Integer part: $13_{10} = 1101_2$
2. Fractional part: $0.625_{10} = 0.101_2$ (since $0.5 + 0.125 = 2^{-1} + 2^{-3}$)
3. Complete binary value: $1101.101_2$
4. **Normalized Form:** Shift binary point 3 places left:
   $$+1.101101_2 \\times 2^3$$
   - **Sign bit:** $0$ (positive)
   - **Biased Exponent (single precision, bias 127):** $E = 3 + 127 = 130_{10} = 10000010_2$
   - **Mantissa bits stored:** $10110100000000000000000$
""")

# 7. COA-A3-0198 [2M]
reg("COA-A3-0198", "Explain signed magnitude representation of fixed point numbers.", 2, """
### Signed Magnitude Representation

In signed magnitude representation, an $n$-bit register divides the word into two distinct fields:
1. **Sign Bit (MSB):** 
   - $0$ denotes a **positive** number.
   - $1$ denotes a **negative** number.
2. **Magnitude Bits ($n-1$ bits):** Directly store the absolute binary value of the number.

```
       1 bit               (n - 1) bits
+-----------------+-------------------------------+
| Sign Bit (MSB)  |       Magnitude Field         |
+-----------------+-------------------------------+
```

#### Example (8-bit word):
- $+25_{10}$: Magnitude $25 = 0011001_2 \\rightarrow \\mathbf{00011001_2}$
- $-25_{10}$: Magnitude $25 = 0011001_2 \\rightarrow \\mathbf{10011001_2}$

#### Limitations in Hardware:
- **Two representations of Zero:** $+0 = 00000000$ and $-0 = 10000000$, wasting a code point.
- Addition and subtraction require separate comparison circuits to determine which magnitude is larger.
""")

# 8. COA-A3-0199 [2M]
reg("COA-A3-0199", "Give the example to represent floating point numbers.", 2, """
### Example of Floating-Point Number Representation

Consider representing the real number $\\mathbf{-22.75_{10}}$ in binary floating-point form:

#### Step 1: Convert to Fixed Binary
- Integer part: $22_{10} = 10110_2$
- Fractional part: $0.75_{10} = 0.5 + 0.25 = 2^{-1} + 2^{-2} = (0.11)_2$
- Combined binary: $-(10110.11)_2$

#### Step 2: Normalize
Shift the radix point 4 positions left to obtain a leading 1:
$$-(1.011011)_2 \\times 2^4$$

#### Step 3: Extract Fields for 32-bit Storage (IEEE 754 Single Precision)
- **Sign Bit ($S$):** $1$ (negative)
- **Exponent Field ($E$):** Real exponent $+4$, add bias $127 \\rightarrow 4 + 127 = 131_{10} = 10000011_2$
- **Fraction/Mantissa ($M$):** Stored fractional bits: `01101100000000000000000`

#### Final Stored 32-Bit Word:
`1 | 10000011 | 01101100000000000000000`
(Hexadecimal: `0xC1B60000`)
""")

# 9. COA-A3-0200 [2M]
reg("COA-A3-0200", "What is circular shift? Explain with example.", 2, """
### Circular Shift (Rotate Operation)

**Definition:**
A **circular shift** (also called a **rotate**) circulates the bits of a register around the two ends without losing any data. The bit shifted out of one end is circulated back into the opposite end.

#### Types of Circular Shift:
1. **Circular Shift Left (ROL):** Bits shift left by 1 position; MSB circulates into LSB.
2. **Circular Shift Right (ROR):** Bits shift right by 1 position; LSB circulates into MSB.

```
Circular Shift Right (ROR):
      +-------------------------------------------+
      |                                           |
      v                                           |
  +-------+-------+-------+-------+               |
  | Bit 3 | Bit 2 | Bit 1 | Bit 0 | --------------+
  +-------+-------+-------+-------+
```

#### Concrete Example:
Let an 8-bit register contain $R = 10110001_2$:
- **After Circular Shift Right (ROR):**
  - Bit 0 ($1$) rotates into Bit 7 position.
  - Result: $\\mathbf{11011000_2}$
- **After Circular Shift Left (ROL):**
  - Bit 7 ($1$) rotates into Bit 0 position.
  - Result: $\\mathbf{01100011_2}$
""")

# 10. COA-A3-0201 [1M]
reg("COA-A3-0201", "Explain 2's complement.", 1, """
### 2's Complement Representation

**Definition:**
The 2's complement of an $n$-bit binary number $N$ is defined mathematically as:
$$\\text{2's Complement}(N) = 2^n - N = (\\text{1's Complement}(N)) + 1$$

#### Method to Obtain 2's Complement:
1. Invert all bits ($0 \\rightarrow 1$ and $1 \\rightarrow 0$).
2. Add $1$ to the least significant bit (LSB).

*Example:* For $N = 101100_2$:
- 1's complement = $010011_2$
- Adding 1: $010011 + 1 = \\mathbf{010100_2}$

**Primary Advantage:** Allows subtraction to be carried out using ordinary binary addition circuits ($A - B = A + \\text{2's comp}(B)$) without requiring end-around carry.
""")

# 11. COA-A3-0202 [1M]
reg("COA-A3-0202", "Explain Decimal Arithmetic unit.", 1, """
### Decimal Arithmetic Unit

**Definition:**
A **Decimal Arithmetic Unit** is a dedicated digital hardware circuit that performs arithmetic operations (addition, subtraction, multiplication, division) directly on numbers represented in **Binary Coded Decimal (BCD)** format.

#### Core Operation Principle:
1. When two BCD digits (each 4 bits, range $0000$ to $1001$) are added using a binary adder, the sum can exceed $9$ ($1001_2$).
2. **BCD Correction Rule:** If the binary sum $> 9$ or generates an output carry ($C_{out} = 1$), the result is invalid in BCD.
3. The circuit automatically adds **binary $6$ ($0110_2$)** to skip the 6 invalid 4-bit states ($1010$ through $1111$) and produce the correct BCD digit and carry.
""")

# 12. COA-A3-0203 [2M]
reg("COA-A3-0203", "Perform 2's complement of (i) 10010010 Gi) 01101100.", 2, """
### Performing 2's Complement

To obtain the 2's complement of any binary number:
1. Invert all bits (take 1's complement).
2. Add binary $1$ to the LSB.

---

#### (i) Given Number: $10010010_2$
1. **1's Complement:** Invert all bits:
   $$01101101_2$$
2. **Add 1:**
   $$\\begin{array}{r@{\\quad}l}
     01101101 \\\\
   +        1 \\\\
   \\hline
     \\mathbf{01101110_2}
   \\end{array}$$
*(Shortcut verification: Copy bits right-to-left up to and including the first '1': `...10`, then invert remaining bits $\\rightarrow 01101110_2$).*

---

#### (ii) Given Number: $01101100_2$
1. **1's Complement:** Invert all bits:
   $$10010011_2$$
2. **Add 1:**
   $$\\begin{array}{r@{\\quad}l}
     10010011 \\\\
   +        1 \\\\
   \\hline
     \\mathbf{10010100_2}
   \\end{array}$$
*(Shortcut verification: Retain trailing `...100`, invert remaining bits $\\rightarrow 10010100_2$).*
""")

# 13. COA-A3-0204 [2M]
reg("COA-A3-0204", "Identify the two types of data types used in computer arithmetic.", 2, """
### Two Fundamental Data Types in Computer Arithmetic

Computer hardware architectures fundamentally classify numerical data into two core data types:

| Data Type | Description | Hardware Representation | Primary Use Case |
| :--- | :--- | :--- | :--- |
| **1. Fixed-Point Numbers** | The radix point has a permanently fixed position (either at the extreme right for **integers** or extreme left for **fractions**). | Stored as signed magnitude, 1's complement, or 2's complement binary integers. | Loop counters, address calculations, integer operations in ALUs. |
| **2. Floating-Point Numbers** | The radix point can "float" dynamically using scientific notation: $N = \\pm M \\times r^E$ (Mantissa and Exponent). | Formatted according to the **IEEE 754 standard** (Sign, Biased Exponent, Fraction). | Scientific computing, graphics rendering, simulations requiring very large dynamic range. |
""")

# 14. COA-A3-0205 [2M]
reg("COA-A3-0205", "Define fixed-point representation used in data representation.", 2, """
### Fixed-Point Representation

**Definition:**
**Fixed-point representation** is a method of storing numerical data where the binary radix point occupies a predetermined, fixed position within the binary register.

#### Two Standard Conventions:
1. **Fixed-Point Integer:** The binary point is assumed to be at the extreme right of the least significant bit (LSB).
   $$N = (b_{n-1} b_{n-2} \\dots b_1 b_0.)_2$$
2. **Fixed-Point Fraction:** The binary point is assumed to be at the immediate right of the sign bit (extreme left).
   $$N = (0. b_{-1} b_{-2} \\dots b_{-m})_2$$

#### Register Format (Signed Integer):
```
+-------------+------------------------------------+
| Sign (1 bit)|       Magnitude (n - 1 bits)       | . (Implicit point)
+-------------+------------------------------------+
  MSB                                            LSB
```
- **Positive:** $0$ in MSB followed by binary magnitude.
- **Negative:** Represented standardly in **signed 2's complement** form.
""")

# 15. COA-A3-0206 [2M]
reg("COA-A3-0206", "Give the flow chart of restoring algorithm.", 2, """
### Flowchart of Restoring Division Algorithm

In restoring division for unsigned binary numbers:
- **Registers:** $A$ (Accumulator, initialized to $0$), $Q$ (Dividend, contains dividend bits), $M$ (Divisor), $n$ (Sequence Counter = word length).

```
                 +-----------------------+
                 | Start: A = 0, Q = Div |
                 | M = Divisor, Count = n|
                 +-----------------------+
                             |
                             v
                 +-----------------------+
                 | Shift Left (A, Q)     |
                 | A = A - M             |
                 +-----------------------+
                             |
                 +-----------v-----------+
                 |     Is Sign of A      |
                 |    Negative (A < 0)?  |
                 +-----------------------+
                    /                 \\
            YES    /                   \\   NO
                  v                     v
        +-------------------+  +-------------------+
        | Q[0] = 0          |  | Q[0] = 1          |
        | Restore: A = A + M|  | (No restore needed|
        +-------------------+  +-------------------+
                  \\                     /
                   \\                   /
                    v                 v
                 +-----------------------+
                 | Count = Count - 1     |
                 +-----------------------+
                             |
                 +-----------v-----------+
                 |      Count == 0?      |
                 +-----------------------+
                    /                 \\
             NO    /                   \\   YES
                  +                     v
         (Loop back to shift)  +-------------------+
                               | End: Q = Quotient |
                               |      A = Remainder|
                               +-------------------+
```
""")

# 16. COA-A3-0207 [2M]
reg("COA-A3-0207", "Apply i) 10010 ii) 111000 iii) 0101010 iv) 111111. - Classify the cache mapping techniques.", 2, """
### Classification of Cache Mapping Techniques & Bit Field Partitioning

Cache mapping defines how a main memory address is mapped into cache memory lines. Given memory address bit-strings:
`i) 10010 (5-bit)` `ii) 111000 (6-bit)` `iii) 0101010 (7-bit)` `iv) 111111 (6-bit)`

#### Three Cache Mapping Classifications:
1. **Direct Mapping:**
   - Each memory block maps to exactly one cache line: $\\text{Line} = \\text{Block} \\pmod{\\text{Total Lines}}$.
   - Address partitioned into: `[ TAG | LINE/INDEX | WORD OFFSET ]`.
   - *Application on `ii) 111000`:* If 2 bits offset, 2 bits line index $\\rightarrow$ `TAG = 11`, `LINE = 10`, `WORD = 00`.
2. **Associative Mapping (Fully Associative):**
   - Any memory block can be loaded into any vacant cache line.
   - Address partitioned into: `[ TAG | WORD OFFSET ]`.
   - *Application on `iv) 111111`:* If 2-bit word offset $\\rightarrow$ `TAG = 1111`, `WORD = 11`.
3. **Set-Associative Mapping ($k$-way):**
   - Cache divided into sets of $k$ lines. Block maps to set: $\\text{Set} = \\text{Block} \\pmod{\\text{Total Sets}}$.
   - Address partitioned into: `[ TAG | SET INDEX | WORD OFFSET ]`.
   - *Application on `iii) 0101010`:* `TAG = 010`, `SET = 10`, `OFFSET = 10`.
""")

# 17. COA-A3-0208 [1M]
reg("COA-A3-0208", "Convert the following into binary numbers: i.", 1, """
### Binary Number Conversion

#### Standard Conversions for Fundamental Decimal/Hex/Octal Values:

1. **Decimal to Binary Conversion (Example: $45_{10}$):**
   - Divide by 2 repeatedly and record remainders:
     - $45 / 2 = 22$ rem **1** (LSB)
     - $22 / 2 = 11$ rem **0**
     - $11 / 2 = 5$ rem **1**
     - $5 / 2 = 2$ rem **1**
     - $2 / 2 = 1$ rem **0**
     - $1 / 2 = 0$ rem **1** (MSB)
   - Reading bottom-up: $45_{10} = \\mathbf{101101_2}$

2. **Fractional Conversion (Example: $0.625_{10}$):**
   - $0.625 \\times 2 = 1.25$ (integer **1**)
   - $0.25 \\times 2 = 0.5$ (integer **0**)
   - $0.5 \\times 2 = 1.0$ (integer **1**)
   - Result: $0.625_{10} = \\mathbf{0.101_2}$
""")

# 18. COA-A3-0209 [1M]
reg("COA-A3-0209", "Draw the hardware configuration for signed-magnitude addition and subtraction.", 1, """
### Hardware Configuration for Signed-Magnitude Addition & Subtraction

In signed-magnitude arithmetic, numbers are stored in registers with separate magnitude and sign flip-flops:
- **Accumulator Register $A$** with Sign flip-flop $A_s$.
- **B Register $B$** with Sign flip-flop $B_s$.
- **Parallel Adder** with control logic and an output carry bit $E$.

```
              +---------------+           +---------------+
              | A_s (Sign A)  |           | B_s (Sign B)  |
              +-------+-------+           +-------+-------+
                      |                           |
                      +------------+--------------+
                                   |
                                   v
                         [ Sign Control Logic ]
                                   |
                      +------------+------------+
                      |                         |
                      v                         v
              +---------------+         +---------------+
              |   A Register  |<========|   B Register  |
              |  (Magnitude)  |         |  (Magnitude)  |
              +-------+-------+         +-------+-------+
                      |                         |
                      v                         v
                 +-----------------------------------+
                 |         Parallel Adder            |
                 +-----------------+-----------------+
                                   |
                                   v
                             [ Sum to A ]
```
""")

# 19. COA-A3-0210 [2M]
reg("COA-A3-0210", "Solve (1001101 - 10101001) using 2's complement.", 2, """
### Solving $(1001101_2 - 10101001_2)$ Using 2's Complement

#### Step 1: Equalize Word Lengths
- Minuend ($A$) = $1001101_2$ (7 bits) $\\rightarrow$ pad to 8 bits: $A = 01001101_2$ ($+77_{10}$)
- Subtrahend ($B$) = $10101001_2$ (8 bits) $\\rightarrow B = 10101001_2$ ($+169_{10}$ unsigned)

#### Step 2: Compute 2's Complement of $B$
1. 1's complement of $10101001$: Invert bits $\\rightarrow 01010110$
2. Add 1: $01010110 + 1 = \\mathbf{01010111_2}$

#### Step 3: Add Minuend ($A$) and 2's Complement of $B$
$$\\begin{array}{r@{\\quad}l}
  01001101 & (A) \\\\
+ 01010111 & (\\text{2's comp of } B) \\\\
\\hline
  10100100 & (\\text{Sum})
\\end{array}$$

#### Step 4: Interpret the Result
- **Carry-out = 0:** No end carry means the result is **negative** and is in 2's complement form.
- Magnitude: Take 2's complement of $10100100$:
  - Invert bits: $01011011$
  - Add 1: $01011011 + 1 = 01011100_2 = 92_{10}$
- **Final Result:** $\\mathbf{-01011100_2}$ (in decimal: $77 - 169 = \\mathbf{-92_{10}}$).
""")

# 20. COA-A3-0211 [2M]
reg("COA-A3-0211", "Add given signed decimal number +86 and -17.", 2, """
### Adding Signed Numbers: $(+86) + (-17)$ Using 8-Bit Binary 2's Complement

#### Step 1: Convert Numbers to 8-Bit Binary
1. **Represent $+86_{10}$:**
   - $86 = 64 + 16 + 4 + 2 = (01010110)_2$
2. **Represent $-17_{10}$:**
   - $+17 = (00010001)_2$
   - 1's complement = $11101110$
   - 2's complement = $11101110 + 1 = (11101111)_2$

#### Step 2: Perform Binary Addition
$$\\begin{array}{r@{\\quad}l@{\\quad}l}
  01010110 & (+86) \\\\
+ 11101111 & (-17) \\\\
\\hline
(1)\\, 01000101 & (\\text{End carry discarded in 2's complement})
\\end{array}$$

#### Step 3: Verification
- Result: $01000101_2$
- Since MSB is $0$, the result is positive.
- Value = $64 + 4 + 1 = \\mathbf{+69_{10}}$.
- Verification: $86 + (-17) = \\mathbf{+69_{10}}$ (Exact match).
""")

print("Part 1: Questions 1 to 20 scripted.")

with open('scripts/u3_p1_data.json', 'w', encoding='utf-8') as f:
    json.dump(solutions_part1, f, indent=2)
