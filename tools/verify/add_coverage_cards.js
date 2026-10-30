#!/usr/bin/env node
/*
 * One-time migration: add one flashcard for each MR-25 syllabus topic that the
 * rebuilt Semester-End deck did not yet cover. Cards use new IDs only and are
 * appended to content-audit/canonical/<SUBJECT>.json. Re-running is safe: an
 * existing ID is skipped instead of duplicated.
 *
 * Content is standard textbook material for the named topic; no PYQ years or
 * statistics are claimed.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const CANON = path.join(__dirname, '..', '..', 'content-audit', 'canonical');

const ADDITIONS = {
  DM: [
    {
      id: 'FC-SEM-DM-59', unit: 3, topicId: 'DM.U3.T07',
      topic: 'Lattice properties and special lattices', highYield: false,
      front: 'Define a bounded, complemented, and distributive lattice.',
      back: '1. Bounded: has least element 0 and greatest element 1.\n2. Complemented: every a has b with a∨b=1 and a∧b=0.\n3. Distributive: a∧(b∨c)=(a∧b)∨(a∧c).\n4. A non-distributive lattice contains the pentagon N5 or diamond M3.\nKeywords: bounded, complemented, distributive, pentagon, diamond'
    },
    {
      id: 'FC-SEM-DM-60', unit: 4, topicId: 'DM.U4.T07',
      topic: 'Multinomial theorem', highYield: false,
      front: 'State the multinomial theorem for (x1 + x2 + ... + xk)^n.',
      back: '1. Expand as the sum over n1+...+nk=n of n!/(n1!...nk!) x1^n1...xk^nk.\n2. The coefficient n!/(n1!...nk!) is the multinomial coefficient.\n3. For k=2 it reduces to the binomial theorem.\nKeywords: multinomial, coefficient, binomial'
    },
    {
      id: 'FC-SEM-DM-61', unit: 5, topicId: 'DM.U5.T05',
      topic: 'Directed trees', highYield: false,
      front: 'What is a directed tree (arborescence)?',
      back: '1. A directed tree has one root with in-degree 0.\n2. Every other vertex has in-degree exactly 1.\n3. Its underlying undirected graph is a tree.\n4. An out-tree directs edges away from the root; an in-tree directs them toward it.\nKeywords: arborescence, root, in-degree, out-tree, in-tree'
    },
    {
      id: 'FC-SEM-DM-62', unit: 5, topicId: 'DM.U5.T06',
      topic: 'Binary trees and traversals', highYield: true,
      front: 'List preorder, inorder, and postorder binary tree traversals.',
      back: '1. Preorder: visit root, then left subtree, then right subtree.\n2. Inorder: visit left subtree, root, then right subtree.\n3. Postorder: visit left subtree, right subtree, then root.\n4. In a full binary tree every node has 0 or 2 children.\nKeywords: preorder, inorder, postorder, full binary tree'
    },
    {
      id: 'FC-SEM-DM-63', unit: 5, topicId: 'DM.U5.T09',
      topic: 'Hamiltonian graphs', highYield: true,
      front: "What is a Hamiltonian cycle, and state Dirac's theorem.",
      back: "1. A Hamiltonian cycle visits every vertex once and returns to start.\n2. Dirac: if n≥3 and every vertex degree ≥ n/2, a Hamiltonian cycle exists.\n3. Ore: if deg(u)+deg(v) ≥ n for every non-adjacent pair, one exists.\nKeywords: Hamiltonian, Dirac, Ore, cycle"
    }
  ],
  COA: [
    {
      id: 'FC-SEM-COA-61', unit: 2, topicId: 'COA.U2.T04',
      topic: 'Binary multiplier', highYield: false,
      front: 'How does a basic binary multiplier form partial products?',
      back: '1. Each multiplier bit ANDs the multiplicand to form one partial product.\n2. Partial products are shifted left by the bit position.\n3. Shifted partial products are added to give the product.\n4. An n-bit multiply needs up to 2n product bits.\nKeywords: multiplicand, multiplier, partial product, shift, add'
    },
    {
      id: 'FC-SEM-COA-62', unit: 2, topicId: 'COA.U2.T07',
      topic: 'HDL for combinational circuits', highYield: false,
      front: 'How is a combinational circuit described in Verilog?',
      back: '1. Declare inputs and outputs in a module header.\n2. Use assign for continuous dataflow expressions.\n3. Use always @(*) with blocking assignments for behavioral code.\n4. Gate primitives such as and, or, not model structural designs.\nKeywords: Verilog, module, assign, always, gate-level'
    },
    {
      id: 'FC-SEM-COA-63', unit: 3, topicId: 'COA.U3.T08',
      topic: 'Timing and control', highYield: false,
      front: 'What generates control signals in a basic computer?',
      back: '1. A sequence counter and decoder produce timing signals T0, T1, ...\n2. The control unit combines timing with instruction bits and flags.\n3. Control signals activate registers, memory, and ALU operations.\n4. Hardwired control uses gates; microprogrammed control uses a control store.\nKeywords: timing, control unit, sequence counter, microprogram'
    },
    {
      id: 'FC-SEM-COA-64', unit: 3, topicId: 'COA.U3.T09',
      topic: 'Instruction cycle', highYield: true,
      front: 'List the phases of the instruction cycle.',
      back: '1. Fetch: read the instruction from memory into IR.\n2. Decode: determine the operation and addressing mode.\n3. Execute: perform the operation, possibly reading or writing memory.\n4. Interrupt: service a pending interrupt before the next fetch.\nKeywords: fetch, decode, execute, interrupt, instruction cycle'
    },
    {
      id: 'FC-SEM-COA-65', unit: 4, topicId: 'COA.U4.T04',
      topic: 'General register organization', highYield: false,
      front: 'What does a general register organization with seven registers use?',
      back: '1. Seven registers feed two multiplexers selected by SELA and SELB.\n2. An ALU combines them; SELD chooses the destination register.\n3. A 3-bit selection code addresses one of eight inputs.\n4. Control signals load the selected destination on the clock edge.\nKeywords: general register, SELA, SELB, SELD, multiplexer'
    },
    {
      id: 'FC-SEM-COA-66', unit: 4, topicId: 'COA.U4.T08',
      topic: 'Addition and subtraction', highYield: false,
      front: "How is subtraction performed with two's-complement addition?",
      back: "1. Take the two's complement of the subtrahend.\n2. Add it to the minuend using the same binary adder.\n3. Discard the final carry out of the sign bit.\n4. Overflow occurs when same-sign operands give an opposite-sign result.\nKeywords: two's complement, subtraction, adder, overflow, carry"
    },
    {
      id: 'FC-SEM-COA-67', unit: 4, topicId: 'COA.U4.T11',
      topic: 'Floating-point arithmetic', highYield: true,
      front: 'Outline floating-point addition.',
      back: '1. Compare exponents and align the smaller mantissa by shifting right.\n2. Add or subtract the aligned mantissas.\n3. Normalize the result and round it.\n4. Adjust the exponent for any normalization shift.\nKeywords: align exponent, mantissa, normalize, round, floating point'
    },
    {
      id: 'FC-SEM-COA-68', unit: 4, topicId: 'COA.U4.T12',
      topic: 'Decimal arithmetic unit and operations', highYield: false,
      front: 'Why is BCD addition corrected with a +6 adjustment?',
      back: "1. Adding two BCD digits can produce a sum above 9.\n2. Adding 0110 skips the six invalid BCD codes 1010-1111.\n3. A carry out propagates to the next BCD digit.\n4. Nine's and ten's complements support BCD subtraction.\nKeywords: BCD, correction, +6, nine's complement, decimal adder"
    },
    {
      id: 'FC-SEM-COA-69', unit: 5, topicId: 'COA.U5.T08',
      topic: 'Auxiliary memory', highYield: false,
      front: 'Define seek time, rotational latency, and access time for a disk.',
      back: '1. Seek time: moving the head to the required track.\n2. Rotational latency: waiting for the sector to reach the head.\n3. Access time = seek + rotational latency + transfer time.\n4. A cylinder is all tracks at one arm position.\nKeywords: auxiliary memory, track, sector, cylinder, access time'
    }
  ],
  OOPJ: [
    {
      id: 'FC-SEM-OOPJ-63', unit: 1, topicId: 'OOPJ.U1.T08',
      topic: 'Nested and inner classes', highYield: false,
      front: 'Distinguish static nested, inner, local, and anonymous classes.',
      back: '1. Static nested: declared static; no outer instance needed.\n2. Inner: non-static member class; holds an outer instance.\n3. Local: declared inside a method; scope limited to that block.\n4. Anonymous: unnamed class defined and instantiated in one expression.\nKeywords: nested class, inner class, static nested, local, anonymous'
    },
    {
      id: 'FC-SEM-OOPJ-64', unit: 1, topicId: 'OOPJ.U1.T09',
      topic: 'String class basics', highYield: true,
      front: 'Why is a Java String immutable, and what is the string pool?',
      back: "1. A String's character data cannot change after construction.\n2. Methods such as concat and substring return new String objects.\n3. String literals are interned in a shared pool.\n4. equals compares content; == compares references.\nKeywords: String, immutable, string pool, literal, equals"
    },
    {
      id: 'FC-SEM-OOPJ-65', unit: 3, topicId: 'OOPJ.U3.T04',
      topic: 'Built-in exceptions', highYield: false,
      front: 'Name four common built-in Java runtime exceptions.',
      back: '1. ArithmeticException: integer division by zero.\n2. ArrayIndexOutOfBoundsException: index outside the array bounds.\n3. NullPointerException: using a null reference.\n4. NumberFormatException: invalid numeric string conversion.\nKeywords: ArithmeticException, ArrayIndexOutOfBoundsException, NullPointerException, NumberFormatException'
    },
    {
      id: 'FC-SEM-OOPJ-67', unit: 4, topicId: 'OOPJ.U4.T07',
      topic: 'Graphics', highYield: false,
      front: 'Which Graphics methods draw shapes and text in Java AWT?',
      back: '1. drawLine, drawRect, and drawOval outline shapes.\n2. fillRect and fillOval draw filled shapes.\n3. drawString renders text at a baseline point.\n4. setColor and setFont change the current drawing state.\nKeywords: Graphics, drawLine, drawRect, drawOval, drawString, setColor'
    }
  ],
  DBMS: [
    {
      id: 'FC-SEM-DBMS-65', unit: 2, topicId: 'DBMS.U2.T07',
      topic: 'Domain relational calculus', highYield: false,
      front: 'How does domain relational calculus express a query?',
      back: '1. Variables range over attribute domains, not whole tuples.\n2. A query is {<x1,...,xn> | P(x1,...,xn)}.\n3. Predicates use comparisons and logical connectives.\n4. Safe expressions restrict results to values in the database.\nKeywords: domain relational calculus, DRC, domain variable, safe expression'
    },
    {
      id: 'FC-SEM-DBMS-66', unit: 3, topicId: 'DBMS.U3.T08',
      topic: 'Problems caused by redundancy', highYield: true,
      front: 'Which anomalies does data redundancy cause?',
      back: '1. Insertion anomaly: cannot insert a fact without unrelated data.\n2. Deletion anomaly: deleting one fact erases another.\n3. Update anomaly: the same fact must be updated in many rows.\n4. Normalization reduces redundancy by decomposition.\nKeywords: redundancy, insertion anomaly, deletion anomaly, update anomaly'
    },
    {
      id: 'FC-SEM-DBMS-67', unit: 3, topicId: 'DBMS.U3.T12',
      topic: 'BCNF', highYield: true,
      front: 'State the condition for Boyce-Codd Normal Form.',
      back: '1. For every nontrivial functional dependency X → Y, X must be a superkey.\n2. BCNF is stricter than 3NF.\n3. A relation in 3NF may still violate BCNF.\n4. Decompose on the violating dependency to reach BCNF.\nKeywords: BCNF, functional dependency, superkey, decomposition'
    },
    {
      id: 'FC-SEM-DBMS-68', unit: 3, topicId: 'DBMS.U3.T13',
      topic: 'Lossless join decomposition', highYield: true,
      front: 'What makes a binary decomposition lossless?',
      back: '1. Decompose R into R1 and R2.\n2. Lossless if R1 ∩ R2 contains a key of R1 or R2.\n3. Then projecting and rejoining reconstructs exactly R.\n4. A lossy decomposition creates spurious tuples.\nKeywords: lossless join, binary decomposition, common attribute, superkey'
    },
    {
      id: 'FC-SEM-DBMS-69', unit: 4, topicId: 'DBMS.U4.T04',
      topic: 'Recoverability', highYield: false,
      front: 'Distinguish recoverable, cascadeless, and strict schedules.',
      back: '1. Recoverable: a transaction commits only after reading uncommitted data commits.\n2. Cascadeless: reads only committed data, preventing cascading rollback.\n3. Strict: neither reads nor writes uncommitted data.\n4. Strict is the strongest of the three.\nKeywords: recoverable, cascadeless, strict, dirty read, rollback'
    },
    {
      id: 'FC-SEM-DBMS-70', unit: 4, topicId: 'DBMS.U4.T05',
      topic: 'Implementation of isolation and testing for serializability', highYield: false,
      front: 'How is conflict serializability tested?',
      back: '1. Build a precedence graph with a node per transaction.\n2. Add edge Ti → Tj for each conflict where Ti precedes Tj.\n3. The schedule is conflict serializable if the graph is acyclic.\n4. Isolation levels trade consistency against concurrency.\nKeywords: precedence graph, conflict serializable, acyclic, isolation level'
    }
  ],
  SE: [
    {
      id: 'FC-SEM-SE-67', unit: 3, topicId: 'SE.U3.T04',
      topic: 'Software architecture and data design', highYield: false,
      front: 'What do software architecture and data design specify?',
      back: '1. Architecture defines components, their interfaces, and interactions.\n2. It captures structural properties and major design decisions.\n3. Data design specifies data structures, files, and database schemas.\n4. Both refine the requirements model into an implementation blueprint.\nKeywords: software architecture, component, interface, data design, schema'
    },
    {
      id: 'FC-SEM-SE-68', unit: 3, topicId: 'SE.U3.T10',
      topic: 'Collaboration diagrams', highYield: false,
      front: 'What does a UML collaboration diagram show?',
      back: '1. Objects are drawn as rectangles connected by links.\n2. Numbered messages show the order of interaction.\n3. It emphasizes structural organization over time.\n4. UML 2 renamed it the communication diagram.\nKeywords: collaboration diagram, communication diagram, object, link, message'
    },
    {
      id: 'FC-SEM-SE-69', unit: 3, topicId: 'SE.U3.T11',
      topic: 'Activity diagrams', highYield: false,
      front: 'Which elements make up a UML activity diagram?',
      back: '1. Initial and final states mark start and end.\n2. Action states represent individual activities.\n3. Decision and merge nodes branch and rejoin flows.\n4. Fork and join nodes model concurrent flows; swimlanes assign responsibility.\nKeywords: activity diagram, action state, decision, fork, join, swimlane'
    },
    {
      id: 'FC-SEM-SE-70', unit: 4, topicId: 'SE.U4.T07',
      topic: 'Metrics for software quality', highYield: false,
      front: 'Which metrics indicate software quality?',
      back: '1. Defect density: defects per thousand lines of code.\n2. Defect removal efficiency: defects found before delivery divided by total defects.\n3. Reliability metrics use failure intensity and mean time between failures.\n4. McCall and ISO 9126 group quality into characteristics.\nKeywords: defect density, DRE, reliability, McCall, ISO 9126'
    },
    {
      id: 'FC-SEM-SE-71', unit: 5, topicId: 'SE.U5.T06',
      topic: 'Statistical software quality assurance', highYield: false,
      front: 'How does statistical SQA use Pareto analysis?',
      back: '1. Collect defect data and classify defects by cause.\n2. Plot causes by frequency in descending order.\n3. The vital few causes account for most defects.\n4. Fix those causes first to maximize quality improvement.\nKeywords: statistical SQA, Pareto, vital few, defect cause'
    }
  ]
};

let added = 0;
let updated = 0;
for (const [subject, cards] of Object.entries(ADDITIONS)) {
  const file = path.join(CANON, subject + '.json');
  const doc = JSON.parse(fs.readFileSync(file, 'utf8'));
  const index = new Map(doc.flash.map((c, i) => [c.id, i]));
  for (const c of cards) {
    const card = { id: c.id, subjectId: subject, unit: c.unit, topicId: c.topicId, topic: c.topic, highYield: c.highYield, front: c.front, back: c.back };
    if (index.has(c.id)) {
      doc.flash[index.get(c.id)] = card;
      updated++;
    } else {
      doc.flash.push(card);
      index.set(c.id, doc.flash.length - 1);
      added++;
    }
  }
  fs.writeFileSync(file, JSON.stringify(doc, null, 2) + '\n', 'utf8');
}

console.log(`coverage cards: ${added} added, ${updated} refreshed`);
