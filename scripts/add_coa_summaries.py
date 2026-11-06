import json
import re

with open("notes-summaries.js", "r", encoding="utf-8") as f:
    content = f.read()

new_summaries = {
  "NOTE-COA-20": {
    "noteId": "NOTE-COA-20",
    "subjectId": "COA",
    "chapter": 3,
    "title": "COA Unit 3: Basic Computer Organization & RTL",
    "pageCount": 48,
    "quality": "good",
    "limited": False,
    "limitedReason": "",
    "overview": "Exhaustive coverage of Morris Mano Basic Computer Architecture, Register Transfer Language (RTL), common bus architecture, register set, complete instruction cycle execution, memory-reference instructions, and input-output interrupt handling.",
    "topics": [
      {
        "title": "Register Transfer Language (RTL) & Common Bus System",
        "summary": "RTL is a symbolic notation used to describe micro-operations among registers. A common bus connects multiple registers using multiplexers or tri-state bus buffers.",
        "points": [
          "Transfer notation: P: R2 <- R1 means if control condition P = 1, then data in register R1 is transferred into R2 at the active clock edge.",
          "Common Bus System: Eliminates individual point-to-point connections by using a set of 16-bit multiplexers.",
          "Bus Selection Logic: 3 selection lines (S2, S1, S0) select which register places its output onto the 16-bit bus (e.g. 001 for AR, 010 for PC, 011 for DR, 100 for AC, 101 for IR, 110 for TR, 111 for Memory).",
          "Memory Transfer: Read: DR <- M[AR]; Write: M[AR] <- DR."
        ],
        "formulas": [
          "Control Function: P · T2: R2 ← R1",
          "Tri-State Buffer Bus: Normal state (0 or 1) when Enable E = 1, High-Impedance (Hi-Z) open circuit when E = 0",
          "Memory Read Cycle: Read: DR ← M[AR], Address on Bus selected by AR"
        ],
        "example": "If S2 S1 S0 = 010 and LD of AR is active, the content of PC (Program Counter) is transferred into AR (Address Register) in one clock cycle."
      },
      {
        "title": "Basic Computer Registers & Hardware Configuration",
        "summary": "The Mano Basic Computer features 8 designated registers interfacing with a 4096 × 16 memory unit.",
        "points": [
          "DR (Data Register, 16-bit): Holds memory operands read from memory.",
          "AR (Address Register, 12-bit): Holds the 12-bit physical memory address.",
          "AC (Accumulator, 16-bit): General-purpose processor register and ALU operand/result destination.",
          "IR (Instruction Register, 16-bit): Holds the current instruction code being executed.",
          "PC (Program Counter, 12-bit): Holds the address of the next sequential instruction to be fetched.",
          "TR (Temporary Register, 16-bit): Holds temporary data during processing.",
          "INPR (Input Register, 8-bit) & OUTR (Output Register, 8-bit): Hold 8-bit alphanumeric character data from/to I/O devices."
        ],
        "formulas": [
          "Memory Addressing: 12 bits address space → 2^12 = 4096 words",
          "Word Length: 16 bits per word (2 bytes)"
        ],
        "example": "To fetch an operand from memory address 7AF, AR is loaded with 7AF (12 bits), and memory read places the 16-bit word into DR."
      },
      {
        "title": "Instruction Formats & Direct/Indirect Addressing",
        "summary": "A 16-bit instruction word is divided into Mode (Bit 15), Opcode (Bits 14-12), and Address (Bits 11-0).",
        "points": [
          "Bit 15 (I bit): Addressing mode bit (0 = Direct Addressing, 1 = Indirect Addressing).",
          "Bits 14-12: 3-bit Opcode specifying one of 8 basic operations (000 to 110 are memory-reference; 111 specifies register-reference if I=0 or I/O if I=1).",
          "Bits 11-0: 12-bit Address field specifying operand address or 12-bit operation code.",
          "Direct Addressing: The address field contains the actual effective address of the operand.",
          "Indirect Addressing: The address field points to a memory location containing the effective address of the operand."
        ],
        "formulas": [
          "Direct Effective Address: EA = IR(0–11)",
          "Indirect Effective Address: EA = M[IR(0–11)]"
        ],
        "example": "If IR = 1001 0010 0100 0101 (Hex 9245): I = 1 (Indirect), Opcode = 001 (ADD), Address = 245. Memory at 245 holds 300. Effective address = 300; operand is fetched from M[300]."
      },
      {
        "title": "Timing, Control Unit & The 4-Phase Instruction Cycle",
        "summary": "Hardwired control uses a 3×8 decoder for opcodes, a 4-bit Sequence Counter (SC), and a 4×16 decoder producing timing signals T0 to T15.",
        "points": [
          "T0: AR <- PC (Fetch: Transfer PC address to AR)",
          "T1: IR <- M[AR], PC <- PC + 1 (Fetch: Read instruction word into IR, increment PC)",
          "T2: Decode opcode in IR(12-14), AR <- IR(0-11), I <- IR(15) (Decode)",
          "T3: If I = 1 and Opcode != 111, AR <- M[AR] (Determine effective address if indirect)",
          "Execution: Executed during timing signals T4, T5, T6 depending on decoded operation D0-D6."
        ],
        "formulas": [
          "Fetch RTL: T0: AR ← PC",
          "Fetch RTL: T1: IR ← M[AR], PC ← PC + 1",
          "Decode RTL: T2: D0...D7 ← Decode IR(12–14), AR ← IR(0–11), I ← IR(15)"
        ],
        "example": "During T1, as IR is loaded from M[AR], the PC is simultaneously incremented so it automatically points to the next sequential instruction."
      },
      {
        "title": "Memory-Reference Instructions & Execution Micro-operations",
        "summary": "Seven memory-reference instructions implemented using control outputs D0 through D6.",
        "points": [
          "AND (D0): AC <- AC ∧ M[AR] (Logical AND operand with AC).",
          "ADD (D1): AC <- AC + M[AR], E <- Cout (Add operand to AC with carry out to E).",
          "LDA (D2): AC <- M[AR] (Load operand from memory into AC via DR).",
          "STA (D3): M[AR] <- AC (Store accumulator contents into memory location).",
          "BUN (D4): PC <- AR (Branch Unconditionally to specified address).",
          "BSA (D5): M[AR] <- PC, AR <- AR + 1, PC <- AR (Branch and Save Return Address in subroutine call).",
          "ISZ (D6): Increment memory word M[AR] <- M[AR] + 1; if (M[AR] + 1 == 0) then PC <- PC + 1 (Loop control)."
        ],
        "formulas": [
          "BSA Micro-ops: D5T4: M[AR] ← PC, AR ← AR + 1; D5T5: PC ← AR, SC ← 0",
          "ISZ Micro-ops: D6T4: DR ← M[AR]; D6T5: DR ← DR + 1; D6T6: M[AR] ← DR, if (DR = 0) then (PC ← PC + 1), SC ← 0"
        ],
        "example": "In BSA subroutine call: if PC = 21 and AR = 135, M[135] receives 21, and PC becomes 136, starting subroutine execution at location 136."
      },
      {
        "title": "Input-Output Configuration & Interrupt Cycle",
        "summary": "Input and output devices communicate via 8-bit registers (INPR, OUTR) and 1-bit flags (FGI, FGO) controlled by Interrupt Enable (IEN).",
        "points": [
          "FGI (Input Flag): Set to 1 when a key is struck on keyboard; cleared to 0 when AC reads INPR.",
          "FGO (Output Flag): Set to 1 when printer/display is ready for character; cleared to 0 when OUTR is written.",
          "IEN (Interrupt Enable Flip-Flop): Set by ION instruction and cleared by IOF instruction.",
          "Interrupt Trigger Condition: T0'T1'T2' (IEN)(FGI + FGO): R <- 1 (Sets interrupt flip-flop R at end of instruction cycle).",
          "Interrupt Cycle Micro-operations: R T0: AR <- 0, TR <- PC; R T1: M[AR] <- TR, PC <- 0; R T2: PC <- PC + 1, IEN <- 0, R <- 0, SC <- 0."
        ],
        "formulas": [
          "Interrupt Condition: R ← 1 when (IEN) · (FGI + FGO) · T0'T1'T2'",
          "Save Return: M[0] ← PC, PC ← 1"
        ],
        "example": "When an interrupt occurs, current PC is saved in memory word 0 (M[0]), and PC is set to 1 to begin the Interrupt Service Routine (ISR)."
      }
    ],
    "mustKnow": [
      "Basic Mano computer registers: PC (12), AR (12), IR (16), DR (16), AC (16), TR (16)",
      "Instruction word: bit 15 is mode I (0=direct, 1=indirect), bits 14–12 opcode, bits 11–0 address",
      "Fetch micro-operations: T0: AR ← PC; T1: IR ← M[AR], PC ← PC + 1",
      "Effective address for indirect addressing: AR ← M[AR] executed at timing signal T3 when I=1",
      "BSA saves return address in memory at effective address M[AR] ← PC, AR ← AR + 1, and PC ← AR",
      "Interrupt cycle saves return address in M[0], clears IEN ← 0, and branches to address 1 (PC ← 1)"
    ]
  },

  "NOTE-COA-21": {
    "noteId": "NOTE-COA-21",
    "subjectId": "COA",
    "chapter": 4,
    "title": "COA Unit 4: Microprogrammed Control, CPU & Arithmetic",
    "pageCount": 56,
    "quality": "good",
    "limited": False,
    "limitedReason": "",
    "overview": "Complete architectural guide to Microprogrammed Control Units, Control Memory, Address Sequencing, CPU General Register and Stack Organization, Instruction Formats, Addressing Modes, and Computer Arithmetic algorithms (Booth's multiplication and restoring/non-restoring division).",
    "topics": [
      {
        "title": "Microprogrammed Control Organization & Control Memory",
        "summary": "A control unit whose binary control variables are stored in a memory (ROM) is called a microprogrammed control unit.",
        "points": [
          "Control Memory: Read-Only Memory (ROM) storing microprograms; each word is a microinstruction containing control word bits.",
          "Microinstruction: Contains bits that initiate micro-operations in CPU datapath and determine the next address.",
          "Hardwired vs Microprogrammed: Hardwired uses combinational logic gates and flip-flops (faster, optimized, rigid, difficult to modify); Microprogrammed uses control ROM (slower, modular, flexible, easily reprogrammable).",
          "Sequencer / Next-Address Generator: Circuitry that determines the next control memory address to be loaded into Control Address Register (CAR)."
        ],
        "formulas": [
          "Control Word Partition: [F1 | F2 | F3 | CD | BR | AD]",
          "CAR Size: If control memory has 128 words, CAR requires 7 bits (2^7 = 128)"
        ],
        "example": "If a new machine instruction is added to a processor, a microprogrammed control unit only requires burning a new microprogram in ROM, with zero hardware wire modifications."
      },
      {
        "title": "Address Sequencing & Microinstruction Branching",
        "summary": "Address sequencing logic determines how the control address register (CAR) transitions from one microinstruction to the next.",
        "points": [
          "Four address sequencing capabilities: 1. Incrementing CAR (CAR <- CAR + 1); 2. Conditional branch based on status flags; 3. Mapping from machine instruction opcode to CAR address; 4. Subroutine call and return using Subroutine Register (SBR).",
          "Opcode Mapping: A 4-bit opcode (e.g. 0101) is mapped into a 7-bit CAR address by prefixing 0 and appending 00 (e.g. 0 0101 00), allocating 4 consecutive microinstructions per routine.",
          "Subroutine Register (SBR): Stores return address upon microprogram call (SBR <- CAR + 1) and restores it upon return (CAR <- SBR)."
        ],
        "formulas": [
          "Opcode Mapping: CAR(6) = 0, CAR(5..2) = Opcode, CAR(1..0) = 00",
          "Subroutine Call: SBR ← CAR + 1, CAR ← Branch Address",
          "Subroutine Return: CAR ← SBR"
        ],
        "example": "Opcode 1011 (Decimal 11) maps to binary address 0 1011 00 = 44 in control memory; the micro-routine for instruction 11 starts at address 44."
      },
      {
        "title": "CPU General Register Organization & Stack Architecture",
        "summary": "The CPU datapath includes general-purpose register files, bus multiplexers, arithmetic logic unit (ALU), and stack pointer registers.",
        "points": [
          "Register File Organization: 7 general-purpose registers (R1 to R7) connected through two multiplexer buses (A-bus and B-bus) to 16 ALU operations.",
          "Destination Decoder: Selects which destination register receives the ALU result on clock pulse.",
          "Stack Organization: LIFO (Last-In-First-Out) storage structure maintained by a Stack Pointer (SP) register.",
          "PUSH Micro-operations: SP <- SP - 1, M[SP] <- DR (Decrements SP, stores word); check for STACK_FULL.",
          "POP Micro-operations: DR <- M[SP], SP <- SP + 1 (Reads word, increments SP); check for STACK_EMPTY.",
          "Reverse Polish Notation (RPN): Postfix evaluation eliminates parentheses and operator precedence ambiguity."
        ],
        "formulas": [
          "PUSH: SP ← SP - 1, M[SP] ← DR, if (SP = 0) then FULL ← 1, EMTY ← 0",
          "POP: DR ← M[SP], SP ← SP + 1, if (SP = Limit) then EMTY ← 1, FULL ← 0",
          "Infix to Postfix: A * B + C * D → AB * CD * +"
        ],
        "example": "Evaluating postfix expression 5 3 + 2 *: Push 5, Push 3, + pops 3 and 5, pushes 8; Push 2; * pops 2 and 8, pushes 16 (Result = 16)."
      },
      {
        "title": "Instruction Formats & 10 Addressing Modes",
        "summary": "Instruction formats dictate number of explicit memory/register addresses. Addressing modes determine how the effective address is computed.",
        "points": [
          "Three-Address: ADD R1, A, B (R1 <- M[A] + M[B]).",
          "Two-Address: ADD R1, A (R1 <- R1 + M[A]).",
          "One-Address: ADD A (AC <- AC + M[A], uses Accumulator).",
          "Zero-Address: ADD (Pops top two stack elements, adds, pushes result).",
          "Immediate Mode: Operand is specified directly in instruction (Operand = Address field).",
          "Direct Mode: Effective address = Address field (EA = A).",
          "Indirect Mode: Effective address = Memory at Address field (EA = M[A]).",
          "Register Mode: Operand is stored in specified CPU register (Operand = R).",
          "Register Indirect Mode: Effective address is stored in specified CPU register (EA = [R]).",
          "Relative Addressing Mode: EA = PC + Address field (Used in branch instructions for position-independent code).",
          "Indexed Addressing Mode: EA = Index Register (XR) + Address field (Used for array traversal).",
          "Base Register Addressing Mode: EA = Base Register (BAR) + Address field (Used in OS memory relocation)."
        ],
        "formulas": [
          "Relative Mode: EA = PC + Address",
          "Indexed Mode: EA = XR + Address",
          "Auto-increment: EA = [R], R ← R + 1; Auto-decrement: R ← R - 1, EA = [R]"
        ],
        "example": "If PC = 825 and relative branch offset is +35, Effective Address = 825 + 35 = 860."
      },
      {
        "title": "Computer Arithmetic: Booth's Multiplication Algorithm",
        "summary": "Booth's algorithm multiplies signed binary numbers in 2's complement representation by inspecting pairs of bits (Q0 and Q-1).",
        "points": [
          "Hardware Registers: Multiplicand register B, Accumulator AC (initialized to 0), Multiplier register Q, 1-bit register Q-1 (initialized to 0), Sequence Counter SC (set to n).",
          "Decision Rule 10: Subtract multiplicand from AC (AC <- AC - B = AC + B' + 1), then Arithmetic Shift Right (ashr AC & Q).",
          "Decision Rule 01: Add multiplicand to AC (AC <- AC + B), then Arithmetic Shift Right (ashr AC & Q).",
          "Decision Rule 00 or 11: Shift only (ashr AC & Q).",
          "Arithmetic Shift Right (ashr): Preserves sign bit (MSB remains unchanged, bit 15 shifts to 14, Q0 shifts into Q-1)."
        ],
        "formulas": [
          "Condition 10: AC ← AC - B, then ashr(AC, Q, Q-1)",
          "Condition 01: AC ← AC + B, then ashr(AC, Q, Q-1)",
          "Condition 00 or 11: ashr(AC, Q, Q-1)",
          "Loop: SC ← SC - 1 until SC = 0"
        ],
        "example": "Multiplying 7 (0111) by -3 (1101): Multiplicand B = 0111, Multiplier Q = 1101, Q-1 = 0. Step 1 (Q0 Q-1 = 10): AC = AC - B = 1001, ashr gives AC=1100, Q=1110, Q-1=1. Final 8-bit result is 1110 1011 (-21 in decimal)."
      },
      {
        "title": "Division Algorithms: Restoring & Non-Restoring",
        "summary": "Binary division algorithms for unsigned and signed numbers using iterative shift and subtract operations.",
        "points": [
          "Restoring Division: 1. Shift left A and Q; 2. Subtract divisor B from A (A <- A - B); 3. If sign bit of A is 1 (A < 0), set Q0 = 0 and restore A (A <- A + B); 4. If sign bit of A is 0 (A >= 0), set Q0 = 1 (no restoration needed); 5. Decrement SC; repeat until SC = 0.",
          "Non-Restoring Division: Eliminates restoration step! 1. If A >= 0, shift left A and Q, subtract B (A <- 2A - B); 2. If A < 0, shift left A and Q, add B (A <- 2A + B); 3. If resulting A >= 0, set Q0 = 1; else set Q0 = 0; 4. At the end, if A < 0, restore A by adding B (A <- A + B)."
        ],
        "formulas": [
          "Restoring: Shift left AQ, A ← A - B; If A < 0: Q0 = 0, A ← A + B; If A ≥ 0: Q0 = 1",
          "Non-Restoring: If A ≥ 0: Shift left AQ, A ← 2A - B; If A < 0: Shift left AQ, A ← 2A + B; Set Q0 = (sign(A) == 0 ? 1 : 0)"
        ],
        "example": "Dividing 11 (1011) by 3 (0011): Restoring algorithm executes 4 cycles of shift-subtract-restore, yielding Quotient Q = 0011 (3) and Remainder A = 0010 (2)."
      }
    ],
    "mustKnow": [
      "Control memory stores microprograms; hardwired control uses combinational circuits (faster, less flexible), microprogrammed uses ROM (flexible, easier to modify)",
      "Mapping from 4-bit opcode to 7-bit CAR: 0xxxx00 placing routines at 4-word intervals",
      "Effective address in Relative Addressing: EA = PC + Address; Indexed Addressing: EA = XR + Address",
      "Booth's multiplier rule: 10 -> Subtract B, 01 -> Add B, 00 or 11 -> Shift only (ashr)",
      "Arithmetic Shift Right (ashr) preserves the MSB (sign bit) while shifting bits right into Q-1",
      "Non-restoring division: if A < 0, shift left and ADD divisor; if A >= 0, shift left and SUBTRACT divisor"
    ]
  },

  "NOTE-COA-22": {
    "noteId": "NOTE-COA-22",
    "subjectId": "COA",
    "chapter": 5,
    "title": "COA Unit 5: I/O Organization & Memory Hierarchy",
    "pageCount": 52,
    "quality": "good",
    "limited": False,
    "limitedReason": "",
    "overview": "Exhaustive syllabus reference for Unit 5 covering Input-Output Interfaces, Asynchronous Handshaking Protocols, DMA Controllers, Priority Interrupt Systems, Memory Hierarchy, Main Memory Design, Cache Mapping Techniques, Virtual Memory, and Cache Coherence.",
    "topics": [
      {
        "title": "Input-Output Interface & Isolated vs Memory-Mapped I/O",
        "summary": "I/O interfaces resolve speed, data format, and operating mode mismatches between CPU and external peripheral devices.",
        "points": [
          "Interface Functions: Data conversion, status monitoring, synchronization, address decoding, and electrical signal adaptation.",
          "Isolated I/O: Separate address spaces for memory and I/O devices; uses dedicated CPU instructions (IN, OUT) and separate control lines (IOR, IOW). Maximum memory space is preserved.",
          "Memory-Mapped I/O: Shared address space; I/O ports are treated as memory addresses; accessed using standard memory instructions (MOV, LD, ST) and control lines (MEMR, MEMW). Consumes part of memory address space."
        ],
        "formulas": [
          "Isolated I/O: Distinct control lines: IOR, IOW vs MEMR, MEMW",
          "Memory-Mapped I/O: Unified control lines: MEMR, MEMW with shared 2^n address space"
        ],
        "example": "In 8086 architecture, IN AL, 60H uses isolated I/O with IOR control line, while MOV AL, [0FF00H] can access an I/O device in memory-mapped I/O."
      },
      {
        "title": "Asynchronous Data Transfer: Strobe vs Handshaking",
        "summary": "Data transfer between two independent units without a common clock requires asynchronous coordination.",
        "points": [
          "Strobe Method: Source sends data and pulses a strobe line for a fixed duration. Disadvantage: No acknowledgment; sender does not know if receiver received data, leading to data loss if receiver is busy.",
          "Source-Initiated Handshaking: 1. Source places data on bus and asserts 'Data Valid'; 2. Destination accepts data and asserts 'Data Accepted'; 3. Source drops 'Data Valid'; 4. Destination drops 'Data Accepted'.",
          "Destination-Initiated Handshaking: 1. Destination asserts 'Ready for Data'; 2. Source places data and asserts 'Data Valid'; 3. Destination accepts data and drops 'Ready for Data'; 4. Source drops 'Data Valid'."
        ],
        "formulas": [
          "Handshake Sequence: Data on Bus → Data Valid (high) → Data Accepted (high) → Data Valid (low) → Data Accepted (low)"
        ],
        "example": "In a printer interface, handshaking ensures the CPU does not send a second character until the printer has acknowledged printing the first character."
      },
      {
        "title": "Modes of Transfer & Direct Memory Access (DMA)",
        "summary": "Modes of data transfer include Programmed I/O, Interrupt-Initiated I/O, and Direct Memory Access (DMA).",
        "points": [
          "Programmed I/O: CPU continuously polls device status register in a busy-wait loop; completely wastes CPU processing cycles.",
          "Interrupt-Initiated I/O: CPU issues read/write command and continues other work; I/O interface raises an interrupt when ready, triggering ISR.",
          "DMA (Direct Memory Access): Dedicated DMA Controller (DMAC) takes control of system bus to transfer data directly between memory and high-speed I/O device without CPU intervention.",
          "Bus Arbitration Handshake: DMAC asserts Bus Request (BR); CPU completes current bus cycle, puts buses into Hi-Z, and asserts Bus Grant (BG).",
          "Transfer Modes: Burst Mode (DMAC transfers entire block before returning bus) vs Cycle Stealing (DMAC transfers 1 word per CPU bus cycle, interleaving with CPU execution)."
        ],
        "formulas": [
          "DMA Controller Registers: Address Register (AR), Word Count Register (WC), Control/Status Register",
          "DMA Termination: When WC decrements to 0, DMAC de-asserts BR and raises an interrupt to CPU"
        ],
        "example": "Transferring a 4KB sector from SSD to RAM: With DMA, CPU executes only 2 setup instructions and receives 1 completion interrupt; without DMA, CPU must execute 4096 individual load/store instructions."
      },
      {
        "title": "Priority Interrupt Systems: Daisy Chain & Parallel Priority",
        "summary": "Hardware priority resolvers establish which device gets serviced first when simultaneous interrupts occur.",
        "points": [
          "Daisy-Chain Serial Priority: Physical serial connection where Interrupt Acknowledge (INTA) signal ripples through devices in series. Device closest to CPU has highest priority; if it requested interrupt, it intercepts INTA and places its Vector Address (VAD) on the data bus.",
          "Parallel Priority: Uses an Interrupt Register, an Interrupt Mask Register, and a Priority Encoder (e.g. 4×2 or 8×3 encoder) to identify the highest active interrupt in a single clock cycle.",
          "Interrupt Service Routine (ISR): CPU pushes PC and processor flags onto stack, loads VAD into PC, executes handler, and executes IRET to resume original program."
        ],
        "formulas": [
          "Parallel Priority Encoder: Highest bit position with 1 determines output code",
          "VAD (Vector Address): Pointer to memory location storing the starting address of the ISR"
        ],
        "example": "If Device 1 (keyboard, priority 1) and Device 3 (disk, priority 3) interrupt simultaneously in a daisy-chain: Device 1 intercepts INTA first; Device 3 must wait until Device 1 finishes."
      },
      {
        "title": "Memory Hierarchy & Performance Metrics",
        "summary": "Memory systems organize storage into a hierarchy to achieve high speed, large capacity, and low cost per bit.",
        "points": [
          "Hierarchy levels: CPU Registers (< 1ns) < Cache SRAM (1-10ns) < Main Memory DRAM (50-100ns) < Secondary Storage SSD/HDD (0.1-10ms) < Magnetic Tape.",
          "Locality of Reference: Temporal Locality (recently accessed instructions/data will be accessed again soon) and Spatial Locality (instructions/data adjacent to current address will be accessed soon).",
          "Hit Ratio (H): Fraction of memory accesses satisfied by the cache: H = Hits / (Hits + Misses). Miss Ratio = 1 - H.",
          "Average Access Time (Ta): Ta = H * Tc + (1 - H) * Tm, where Tc is cache access time and Tm is main memory access time."
        ],
        "formulas": [
          "Hit Ratio: H = N_hit / (N_hit + N_miss)",
          "Average Access Time: Ta = H · Tc + (1 - H) · Tm",
          "Speedup: S = Tm / Ta"
        ],
        "example": "If Tc = 10ns, Tm = 100ns, and Hit Ratio H = 0.95: Ta = 0.95(10) + 0.05(100) = 9.5 + 5 = 14.5ns. Speedup S = 100 / 14.5 = 6.9x."
      },
      {
        "title": "Cache Memory Mapping Techniques & Write Policies",
        "summary": "Three mapping methods determine how main memory blocks are placed into cache lines.",
        "points": [
          "Direct Mapping: Each memory block maps to exactly one cache line given by Line = Block mod (Cache Lines). Address is partitioned into [Tag | Index | Word Offset]. Fast and simple, but suffers from conflict misses (thrashing).",
          "Associative Mapping: Any memory block can be placed in any cache line. Address is partitioned into [Tag | Word Offset]. Eliminates conflict misses, but requires expensive parallel comparators.",
          "Set-Associative Mapping: Cache is divided into sets of k lines (k-way set associative). Block maps to Set = Block mod (Number of Sets). Address is partitioned into [Tag | Set | Word Offset].",
          "Write-Through: Updates cache and main memory simultaneously on every write. Eliminates inconsistency, but slows down writes.",
          "Write-Back: Writes only to cache and sets a Dirty Bit (Modified Bit). Written to main memory only when line is evicted/replaced."
        ],
        "formulas": [
          "Direct Mapping Index: Index bits = log2(Number of Cache Lines)",
          "Word Offset: Offset bits = log2(Block Size in bytes)",
          "Tag Bits: Tag = Total Physical Address Bits - Index - Word Offset",
          "Set-Associative: Set bits = log2(Number of Sets), where Number of Sets = (Cache Lines) / k"
        ],
        "example": "32-bit address, 64KB cache, 64-byte block: Word offset = log2(64) = 6 bits. Total blocks = 64KB / 64B = 1024. For Direct Mapping: Index = log2(1024) = 10 bits; Tag = 32 - 10 - 6 = 16 bits. For 4-Way Set Associative: Sets = 1024 / 4 = 256; Set index = log2(256) = 8 bits; Tag = 32 - 8 - 6 = 18 bits."
      },
      {
        "title": "Virtual Memory & Cache Coherence",
        "summary": "Virtual memory provides an illusion of a large main memory. Cache coherence ensures multi-processor cache consistency.",
        "points": [
          "Virtual Memory Concept: Translates CPU logical (virtual) addresses into physical memory addresses via a Page Table.",
          "Paging: Logical address space is divided into fixed-size Pages; physical memory into Frames of identical size.",
          "Address Translation: Logical Address = [Page Number (p) | Offset (d)]. Frame number (f) is retrieved from Page Table at entry p: Physical Address = [f | d].",
          "Page Fault: Occurs when valid/invalid bit in page table is 0 (page not in RAM); OS handles page fault by fetching page from disk.",
          "TLB (Translation Lookaside Buffer): High-speed hardware associative cache holding recently used page table entries, accelerating address translation.",
          "Cache Coherence Problem: In multiprocessor systems, multiple caches hold copies of the same memory block; writes by one CPU create stale copies in others.",
          "Coherence Protocols: Snoopy Bus Protocol (caches monitor bus for write transactions; Write-Invalidate marks peer copies invalid, Write-Update broadcasts new data) and Directory-Based Protocol."
        ],
        "formulas": [
          "Virtual Address Split: [Page Number p | Offset d]",
          "Effective Memory Access Time with TLB: EMAT = Hit_TLB · (T_TLB + T_m) + (1 - Hit_TLB) · (T_TLB + 2 · T_m)",
          "MESI Protocol States: Modified (M), Exclusive (E), Shared (S), Invalid (I)"
        ],
        "example": "Virtual page size 4KB (12 bits offset). Virtual address 0x0003_1ABC has page number 0x0003 and offset 0x1ABC. If Page Table entry 3 holds frame 0x0015, Physical Address = 0x0015_1ABC."
      }
    ],
    "mustKnow": [
      "Average memory access time: Ta = H · Tc + (1 - H) · Tm",
      "Isolated I/O uses distinct control signals (IOR, IOW) and dedicated IN/OUT instructions; Memory-Mapped I/O uses MEMR/MEMW and shared memory space",
      "In Daisy-Chain priority, the device closest to the CPU has the highest priority and passes VAD (Vector Address)",
      "Direct mapping cache index: Line = Block mod (Cache Lines); Tag = Address - Index - Offset",
      "Set-Associative cache index: Set = Block mod (Number of Sets); achieves low miss rate with k comparators per set",
      "Dirty bit (Modified bit) is set to 1 when a cache line is modified, indicating it must be written back to RAM upon eviction",
      "Cache coherence is solved via Snoopy Bus Protocols (Write-Invalidate / Write-Update) or Directory-based schemes"
    ]
  },

  "NOTE-COA-23": {
    "noteId": "NOTE-COA-23",
    "subjectId": "COA",
    "chapter": 5,
    "title": "COA Unit 5: Input-Output Organization (Detailed Class Notes)",
    "pageCount": 38,
    "quality": "good",
    "limited": False,
    "limitedReason": "",
    "overview": "Specialized lecture notes focusing on peripheral device interfaces, asynchronous data communication handshakes, priority interrupt hardware, DMA controller block diagram, and cycle stealing mechanisms.",
    "topics": [
      {
        "title": "Peripheral Devices & I/O Interface Hardware",
        "summary": "Hardware modules that interface external electromechanical devices with the internal CPU and system bus.",
        "points": [
          "Interface registers: Port A/B Data Registers, Status Register (flags for busy, error, parity), Control Register (mode settings).",
          "Address decoding: Selects the specific interface module and internal register via CS (Chip Select) and Register Select (RS1, RS0) lines."
        ],
        "formulas": [
          "Register Selection: RS1 RS0 = 00 (Port A), 01 (Port B), 10 (Control Reg), 11 (Status Reg)"
        ],
        "example": "CPU writing control word 0x82 to control register configures Port A for input and Port B for output."
      },
      {
        "title": "Asynchronous Data Communication & Handshaking",
        "summary": "Detailed analysis of source-initiated and destination-initiated two-wire handshaking timing diagrams.",
        "points": [
          "Eliminates timing skew: Transfer occurs at the rate of the slower device.",
          "Timeout detection: If acknowledgment is not received within a timeout window, an error flag is set."
        ],
        "formulas": [
          "Full Handshake: Data Valid -> Data Accepted -> Data Valid Low -> Data Accepted Low"
        ],
        "example": "Centronics parallel printer port uses STROBE# and BUSY/ACK# signals to implement hardware handshaking."
      },
      {
        "title": "DMA Architecture & Bus Mastership",
        "summary": "Internal block diagram of DMA Controller (8237/8257) and transfer cycle phases.",
        "points": [
          "Address Register: Initialized with starting memory address, auto-increments after each word transfer.",
          "Word Count Register: Initialized with number of words to transfer, auto-decrements; triggers TC (Terminal Count) interrupt when 0.",
          "Cycle Stealing: CPU gives up system bus for exactly one bus cycle while fetching from instruction cache without stalling execution."
        ],
        "formulas": [
          "Bus Overhead: Overhead (%) = (Transfer Rate in bytes/sec) / (Bus Bandwidth in bytes/sec) * 100"
        ],
        "example": "A disk transferring 2MB/sec over a 100MB/sec system bus consumes only 2% of the bus bandwidth using cycle stealing."
      }
    ],
    "mustKnow": [
      "Handshaking eliminates timing skew and rate mismatches because each transfer step requires explicit acknowledgment",
      "In DMA cycle stealing, the DMA controller transfers 1 word and relinquishes the bus for 1 CPU cycle",
      "DMA controller registers: Address Register (increments), Word Count Register (decrements to 0, generates interrupt)",
      "Interrupt Vector Address (VAD) is sent by the interrupting device directly onto the data bus to locate the ISR in memory"
    ]
  },

  "NOTE-COA-24": {
    "noteId": "NOTE-COA-24",
    "subjectId": "COA",
    "chapter": 5,
    "title": "COA Unit 5: Memory Organization (Classroom PPT)",
    "pageCount": 42,
    "quality": "good",
    "limited": False,
    "limitedReason": "",
    "overview": "Classroom slide deck covering memory hierarchy, RAM/ROM chip interconnects, CAM match logic, cache mapping architectures, replacement algorithms, and virtual address translation.",
    "topics": [
      {
        "title": "Memory Hierarchy & Locality Principles",
        "summary": "Engineering rationale behind the multi-level memory hierarchy based on cost, access time, and locality of reference.",
        "points": [
          "Temporal Locality: Recently accessed memory words are likely to be accessed again soon (loop constructs, subroutines).",
          "Spatial Locality: Words near recently accessed memory words are likely to be accessed soon (sequential instructions, array processing)."
        ],
        "formulas": [
          "Average Access Time: Ta = H · Tc + (1 - H) · Tm"
        ],
        "example": "A tight while loop illustrates temporal locality (same instructions repeated) and spatial locality (instructions stored contiguously)."
      },
      {
        "title": "Content Addressable Memory (CAM) Architecture",
        "summary": "Hardware implementation of associative memory where words are accessed simultaneously based on bit patterns rather than numeric addresses.",
        "points": [
          "Hardware components: Argument Register A, Key Register (Mask) K, Associative Memory Array of m words × n bits, Match Register M.",
          "Match Logic: Compares masked bits of A with every word simultaneously. Bit match logic: x_ij = A_j F_ij + A_j' F_ij'. Word match: M_i = product of (x_ij + K_j')."
        ],
        "formulas": [
          "Match Condition: M_i = ∏ (x_ij + K_j') from j=1 to n",
          "Masking: If K_j = 0, the j-th bit is ignored in the comparison across all words"
        ],
        "example": "If Argument A = 10110, Key K = 11100, only the first 3 bits (101) are compared against all stored words; words matching 101xx set their match bit to 1."
      },
      {
        "title": "Cache Mapping Architectures & Replacement Policies",
        "summary": "Comparison of Direct, Fully Associative, and Set-Associative mapping with replacement policies.",
        "points": [
          "Direct Mapping: Simplest hardware, but vulnerable to collision thrashing.",
          "Set-Associative: 2-way, 4-way, or 8-way sets balance hardware cost and low miss rate.",
          "Replacement Policies: LRU (Least Recently Used), FIFO (First-In-First-Out), LFU (Least Frequently Used), Random."
        ],
        "formulas": [
          "Set Index Bits: log2(Number of Sets)",
          "Word Offset Bits: log2(Block Size in bytes)"
        ],
        "example": "In LRU replacement for a 4-way set, a 2-bit counter tracks which line was accessed longest ago and replaces it upon a cache miss."
      }
    ],
    "mustKnow": [
      "Temporal Locality: recently accessed memory is likely to be accessed again soon (loops)",
      "Spatial Locality: memory addresses near recently accessed items are likely to be accessed soon (arrays)",
      "Direct mapping: fast and simple, but suffers from conflict misses (thrashing)",
      "Fully associative: zero conflict misses, but requires expensive parallel comparator hardware",
      "Set-associative: compromises between direct and associative, achieving low miss rate with k comparators per set",
      "Dirty bit (Modified bit) is set to 1 when a cache line is modified, indicating it must be written back to RAM upon eviction"
    ]
  },

  "NOTE-COA-25": {
    "noteId": "NOTE-COA-25",
    "subjectId": "COA",
    "chapter": 3,
    "title": "COA Mid-2 Assignment 2 & Model Questions",
    "pageCount": 16,
    "quality": "good",
    "limited": False,
    "limitedReason": "",
    "overview": "Official MGIT Mid-2 Assignment problem set covering high-yield numerical and theoretical questions across Units 3, 4, and 5 with worked step-by-step model solutions.",
    "topics": [
      {
        "title": "Mano Basic Computer Execution Problems",
        "summary": "Worked problems on instruction decoding, effective address calculation, and BSA subroutine execution.",
        "points": [
          "Traces of memory-reference instructions with direct and indirect modes.",
          "Step-by-step register updates during fetch, decode, and execute phases."
        ],
        "formulas": [
          "BSA: M[AR] ← PC, AR ← AR + 1, PC ← AR",
          "ISZ: M[AR] ← M[AR] + 1; If M[AR] = 0, PC ← PC + 1"
        ],
        "example": "Given PC = 100, AR = 250, BSA 250 saves return address 101 at memory location 250, and execution continues at location 251."
      },
      {
        "title": "Booth's Multiplication Worked Numericals",
        "summary": "Complete step-by-step register tables for signed 2's complement multiplication.",
        "points": [
          "Columns: Operation, AC (Accumulator), Q (Multiplier), Q-1 (Previous bit), SC (Sequence Counter).",
          "Worked example for (-9) × (+6) and (+13) × (-11)."
        ],
        "formulas": [
          "Rule 10: AC ← AC - B, ashr",
          "Rule 01: AC ← AC + B, ashr",
          "Rule 00/11: ashr only"
        ],
        "example": "Multiplying -9 (10111) by +6 (00110) in 5-bit registers yields 10-bit result 1111001010 (-54 in decimal)."
      },
      {
        "title": "Cache Memory Address Partition Worked Numericals",
        "summary": "Detailed computations for Tag, Index/Set, and Word offset bits across mapping schemes.",
        "points": [
          "Calculations for main memory size, cache capacity, and block size combinations.",
          "Tag directory overhead and total memory bit budget."
        ],
        "formulas": [
          "Tag = Total Address Bits - Index Bits - Word Offset Bits",
          "Average Access Time: Ta = H · Tc + (1 - H) · Tm"
        ],
        "example": "With 16MB RAM (24 bits), 32KB cache, 16-byte block: Word offset = 4 bits. Direct mapping index = log2(32KB/16B) = 11 bits; Tag = 24 - 11 - 4 = 9 bits. 2-way set associative: Sets = 2048 / 2 = 1024; Set bits = 10; Tag = 24 - 10 - 4 = 10 bits."
      }
    ],
    "mustKnow": [
      "Booth multiplication register table requires columns: Operation, AC, Q, Q-1, SC",
      "In Booth's algorithm, initial AC = 0, Q-1 = 0, and SC = number of bits n",
      "Cache address field formula: Total = log2(RAM); Offset = log2(Block); Index = log2(Lines/Sets); Tag = Total - Index - Offset",
      "In BSA, PC of next instruction is saved at M[effective address], and execution resumes at effective address + 1",
      "Speedup factor S = Tm / (H · Tc + (1 - H) · Tm)"
    ]
  },

  "NOTE-COA-26": {
    "noteId": "NOTE-COA-26",
    "subjectId": "COA",
    "chapter": 3,
    "title": "COA Unit-wise Question Bank with Answers (Units 1–5)",
    "pageCount": 78,
    "quality": "good",
    "limited": False,
    "limitedReason": "",
    "overview": "Comprehensive university question bank providing verified answers, structural diagrams, and standard university solutions across all five syllabus units (Units 1 to 5).",
    "topics": [
      {
        "title": "Units 1 & 2: Fundamentals, Complements & Digital Logic",
        "summary": "Number representations, complement arithmetic, IEEE 754 floating point, K-Map simplification, Adders, Multiplexers, and Counters.",
        "points": [
          "2's complement subtraction: A - B = A + (2's comp of B); end carry indicates positive result, lack of carry indicates negative result.",
          "CLA (Carry Lookahead Adder) reduces addition time from O(n) to O(1) delay."
        ],
        "formulas": [
          "CLA Generate: Gi = Ai · Bi; Propagate: Pi = Ai ⊕ Bi",
          "Carry: Ci+1 = Gi + Pi · Ci"
        ],
        "example": "Full Adder implementation using two 4-to-1 Multiplexers."
      },
      {
        "title": "Unit 3: RTL, Mano Computer Architecture & Instruction Cycle",
        "summary": "Bus system, register transfers, 4-phase instruction cycle, complete timing decoder, and memory-reference instructions.",
        "points": [
          "T0 to T2 are common to all instructions (fetch and decode).",
          "Interrupt cycle is initiated at the end of execution if IEN and I/O flag are active."
        ],
        "formulas": [
          "T0: AR ← PC; T1: IR ← M[AR], PC ← PC + 1; T2: AR ← IR(0–11), I ← IR(15)"
        ],
        "example": "Execution of ISZ 150 increments word at 150; if it becomes 0, PC is incremented to skip the next instruction."
      },
      {
        "title": "Units 4 & 5: Microprogrammed Control, CPU, Arithmetic & Memory/IO",
        "summary": "Control unit design, CPU registers, stack operations, addressing modes, Booth's multiplication, DMA, priority interrupts, cache mapping, and paging.",
        "points": [
          "Booth's multiplication handles positive and negative multipliers without special sign correction.",
          "DMA Controller frees CPU from byte-by-byte data transfer."
        ],
        "formulas": [
          "Average Access Time: Ta = H · Tc + (1 - H) · Tm",
          "Direct Mapping: Line = Block mod (Cache Lines)"
        ],
        "example": "Daisy chain priority resolver hardware circuit and vector address passing."
      }
    ],
    "mustKnow": [
      "Unit 1: IEEE 754 Single Precision: 1 sign bit, 8 exponent bits (bias 127), 23 mantissa bits",
      "Unit 2: J-K Flip Flop excitation table: 0->0 (J=0, K=X), 0->1 (J=1, K=X), 1->0 (J=X, K=1), 1->1 (J=X, K=0)",
      "Unit 3: Memory reference instructions: AND (0), ADD (1), LDA (2), STA (3), BUN (4), BSA (5), ISZ (6)",
      "Unit 4: Zero-address stack instructions pop operands automatically and push result",
      "Unit 5: Cache line size must balance spatial locality benefits against longer miss penalty transfer delays"
    ]
  },

  "NOTE-COA-27": {
    "noteId": "NOTE-COA-27",
    "subjectId": "COA",
    "chapter": 4,
    "title": "COA Complete Questions Bank (Units 1–5)",
    "pageCount": 36,
    "quality": "good",
    "limited": False,
    "limitedReason": "",
    "overview": "Master compilation of university semester exam and internal mid-term questions across all five syllabus units for comprehensive practice.",
    "topics": [
      {
        "title": "Short Answer Questions (2 Marks) Review",
        "summary": "Core definitions, register sizes, micro-operation notations, difference tables, and cache hit ratio concepts.",
        "points": [
          "What is the difference between Computer Organization and Computer Architecture?",
          "What are the elements of a machine instruction?",
          "Define micro-operation and register transfer language.",
          "What is meant by normalization in floating point numbers?",
          "Differentiate between write-through and write-back cache policies."
        ],
        "formulas": [
          "Hit Ratio: H = Hits / Total Accesses",
          "Speedup: S = Tm / Ta"
        ],
        "example": "2-mark answer: Write-Through updates cache and RAM simultaneously; Write-Back updates only cache and sets a dirty bit."
      },
      {
        "title": "Long Answer Questions (5 & 10 Marks) Review",
        "summary": "In-depth design questions, circuit diagrams, algorithm flowcharts, and worked numericals.",
        "points": [
          "Explain the Instruction Cycle of Mano Basic Computer with neat flowchart.",
          "Describe Booth's multiplication algorithm with flowchart and multiply (-9) by (+6).",
          "Explain Direct, Associative, and Set-Associative cache mapping techniques with diagrams.",
          "Explain the working of DMA Controller with block diagram and transfer modes.",
          "Explain Daisy Chain priority interrupt hardware with neat sketch."
        ],
        "formulas": [
          "Direct Mapping: Index = log2(Lines), Word = log2(Block), Tag = Total - Index - Word",
          "Booth: Q0 Q-1 = 10 (Subtract B), 01 (Add B), 00/11 (ashr only)"
        ],
        "example": "10-mark solution structure: Definition, Architecture Block Diagram, Step-by-step Operation, Illustrative Example, Conclusion."
      }
    ],
    "mustKnow": [
      "Repeated exam question: Differentiate between Hardwired Control and Microprogrammed Control",
      "Repeated exam question: Explain Booth's algorithm with flowchart and solve a signed numerical",
      "Repeated exam question: Explain Direct, Associative, and Set-Associative cache mapping",
      "Repeated exam question: Explain DMA transfer modes (burst vs cycle stealing)",
      "Repeated exam question: Explain Daisy Chain priority interrupt hardware with diagram"
    ]
  },

  "NOTE-COA-28": {
    "noteId": "NOTE-COA-28",
    "subjectId": "COA",
    "chapter": 5,
    "title": "COA Comprehensive Question Bank (Short & Long)",
    "pageCount": 44,
    "quality": "good",
    "limited": False,
    "limitedReason": "",
    "overview": "University question repository covering Part A conceptual 2-mark definitions and Part B comprehensive 5-mark design questions with point-by-point scoring guidelines.",
    "topics": [
      {
        "title": "High-Yield Part A Conceptual Definitions",
        "summary": "Key architectural terms and concise technical explanations required for full 2-mark scores.",
        "points": [
          "Bus Arbitration: Mechanism determining which bus master gains control of the shared bus.",
          "Cache Coherence: Ensuring multiple processor caches hold consistent data for the same physical memory block.",
          "Spatial vs Temporal Locality: Nearby addresses vs recently accessed addresses.",
          "Cycle Stealing: DMA transferring one memory word per CPU cycle without stalling processor.",
          "Vector Address (VAD): Address sent by interrupting device identifying starting address of ISR."
        ],
        "formulas": [
          "Average Access Time: Ta = H · Tc + (1 - H) · Tm",
          "TLB Hit Time: EMAT = H_tlb · (T_tlb + Tm) + (1 - H_tlb) · (T_tlb + 2Tm)"
        ],
        "example": "VAD is placed directly on data bus by interrupting device during the Interrupt Acknowledge (INTA) cycle."
      },
      {
        "title": "High-Yield Part B Comprehensive Design & Numericals",
        "summary": "Step-by-step university exam solutions with diagrams, register tables, and formulas.",
        "points": [
          "Evaluating arithmetic expressions using 3-address, 2-address, 1-address, and 0-address instructions.",
          "Memory hierarchy design and cache address bit partitioning.",
          "Paging address translation using page table and TLB.",
          "Booth multiplication and restoring division step-by-step traces."
        ],
        "formulas": [
          "Evaluating X = (A + B) * (C + D): 0-address uses PUSH A, PUSH B, ADD, PUSH C, PUSH D, ADD, MUL, POP X",
          "Page Address: Physical Address = [Frame f | Offset d]"
        ],
        "example": "For expression X = (A + B) * (C + D), zero-address stack architecture requires 8 stack instructions without explicit memory address operands."
      }
    ],
    "mustKnow": [
      "Evaluating X = (A+B)*(C+D): 3-address: ADD R1,A,B; ADD R2,C,D; MUL X,R1,R2. 0-address (Stack): PUSH A, PUSH B, ADD, PUSH C, PUSH D, ADD, MUL, POP X",
      "Bus Arbitration determines which bus master controls the shared system bus",
      "Virtual Memory translates logical addresses to physical frames using a Page Table",
      "TLB is a fast hardware cache for page table entries, avoiding extra main memory references",
      "Strobe control lacks acknowledgment; Handshaking guarantees reliable reception with mutual signals"
    ]
  }
}

# Add each summary into content before `};\nif (typeof window !== 'undefined') window.NOTE_SUMMARIES = NOTE_SUMMARIES;`
target_str = '};\nif (typeof window !== \'undefined\') window.NOTE_SUMMARIES = NOTE_SUMMARIES;'

formatted_entries = []
for note_id, summary_obj in new_summaries.items():
    formatted_entries.append(f' "{note_id}": ' + json.dumps(summary_obj, indent=1))

summaries_str = ",\n" + ",\n".join(formatted_entries)

if target_str in content:
    content = content.replace(target_str, summaries_str + '\n' + target_str)
    with open("notes-summaries.js", "w", encoding="utf-8") as f:
        f.write(content)
    print("Successfully added summaries for NOTE-COA-20 through NOTE-COA-28 into notes-summaries.js!")
else:
    print("ERROR: Target string not found in notes-summaries.js")
