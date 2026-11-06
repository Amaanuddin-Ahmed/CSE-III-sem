const fs = require('fs');
let content = fs.readFileSync('scope-map.js', 'utf8');

// 1. Update DM mid2Keywords
const oldDmMid2 = `mid2Keywords: ['lattice', 'sublattice', 'poset', 'partially ordered', 'partial order', 'boolean algebra', 'boolean function', 'boolean expression', 'boolean simplification', 'bounded lattice', 'distributive lattice', 'lattice operations', 'complement', 'lub', 'glb', 'join and meet', 'absorption']`;
const newDmMid2 = `mid2Keywords: ['lattice', 'sublattice', 'poset', 'partially ordered', 'partial order', 'boolean algebra', 'boolean function', 'boolean expression', 'boolean simplification', 'bounded lattice', 'distributive lattice', 'lattice operations', 'complement', 'lub', 'glb', 'join and meet', 'absorption', 'hasse', 'induction', 'inductive', 'well-ordering', 'pigeonhole', 'pigeon hole', 'pigeon', 'permutation', 'combination', 'combinatorics', 'recurrence', 'generating function', 'binomial', 'factorial', 'distinct letters', 'words can be formed', 'arranged', 'selection', 'r-combination', 'inclusion-exclusion', 'inclusion exclusion', 'ways', 'coefficient', 'co-efficient', 'committee', 'expansion', 'recursive', 'how many', 'digits', 'digit', 'numbers', 'subset', 'power set', 'middle term', 'mid term', 'prove that', 'positive integer', 'stamps', 'primes']`;
content = content.replace(oldDmMid2, newDmMid2);

// 2. Update COA mid2Keywords
const oldCoaMid2 = `mid2Keywords: ['instruction code', 'computer register', 'instruction cycle', 'memory reference', 'timing and control', 'input output', 'input/output', 'interrupt', 'basic computer organization', 'program counter', 'instruction register', 'bidirectional input', 'enable/load']`;
const newCoaMid2 = `mid2Keywords: ['instruction code', 'computer register', 'instruction cycle', 'memory reference', 'timing and control', 'input output', 'input/output', 'interrupt', 'basic computer organization', 'program counter', 'instruction register', 'bidirectional input', 'enable/load', 'booth', 'multiplication', 'multiplier', 'division', 'restoring', 'non restoring', 'non-restoring', 'floating point', 'floating-point', 'fixed point', 'fixed-point', 'complement', 'compliment', 'subtraction', 'subration', 'addition', 'decimal arithmetic', 'bcd', 'normalization', 'mantissa', 'exponent', 'signed', 'unsigned', 'overflow', 'underflow', 'alu', 'control memory', 'micro programmed', 'hardwired', 'sequencing', 'binary', 'flowchart', 'hardware']`;
content = content.replace(oldCoaMid2, newCoaMid2);

// 3. Update OOPJ mid2Keywords
const oldOopjMid2 = `mid2Keywords: ['thread', 'multithreading', 'multitasking', 'lightweight process', 'process-based', 'process based', 'runnable', 'synchronization', 'synchronized', 'deadlock', 'inter-thread', 'inter thread', 'wait', 'notify', 'notifyall', 'thread priority', 'life cycle', 'daemon']`;
const newOopjMid2 = `mid2Keywords: ['thread', 'multithreading', 'multitasking', 'lightweight process', 'process-based', 'process based', 'runnable', 'synchronization', 'synchronized', 'deadlock', 'inter-thread', 'inter thread', 'wait', 'notify', 'notifyall', 'thread priority', 'life cycle', 'daemon', 'stream', 'streams', 'byte stream', 'character stream', 'string', 'stringbuffer', 'stringbuilder', 'console', 'enumeration', 'enumerations', 'enum', 'generic', 'generics', 'autoboxing', 'unboxing', 'collection', 'collections', 'arraylist', 'hashmap', 'vector', 'stack', 'queue', 'iterator']`;
content = content.replace(oldOopjMid2, newOopjMid2);

// 4. Update matchUnit3Mid2 function
const matchFnRegex = /function matchUnit3Mid2\(item\)[\s\S]*?\{[\s\S]*?return classifyUnit3\(item\) === 'mid2';[\s\S]*?\}/;
const newMatchMid2 = `function matchUnit3Mid2(item) {
  if (!item) return false;
  const subCode = item.subjectId || item.subject || '';
  if (subCode === 'COA') return true; // All 92 Unit 3 questions in COA belong to Mid-2 computer arithmetic & control bank
  return classifyUnit3(item) === 'mid2';
}`;
content = content.replace(matchFnRegex, newMatchMid2);

fs.writeFileSync('scope-map.js', content, 'utf8');
console.log('scope-map.js successfully updated!');
