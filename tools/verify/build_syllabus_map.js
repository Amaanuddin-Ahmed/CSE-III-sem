/**
 * Builds content-audit/syllabus_map.json from the official MGIT MR25
 * B.Tech CSE III Semester syllabus (docs/_work/syllabus-test.pdf, extracted
 * text). Topic IDs are stable: SUBJECT.U<unit>.T<nn>.
 *
 * scope: "mid1" | "mid2" | "sem" (unit 3 halves; all other units are "sem"
 * and belong to both mid-terms only when the unit is in that exam).
 */
const fs = require('fs');
const path = require('path');

const S = (id, title, wording, scope, keywords) => ({ id, title, wording, scope, keywords });

const data = {
  DM: {
    name: 'Discrete Mathematics',
    code: 'CS301PC',
    units: {
      1: { title: 'Mathematical Logic', topics: [
        S('DM.U1.T01','Statements, notation and connectives','Introduction, Statements and Notation, Connectives','sem',['statement','connective','negation','conjunction','disjunction','conditional','biconditional','implication','truth value','proposition']),
        S('DM.U1.T02','Truth tables, tautology, contradiction, contingency','Normal Forms (truth-table foundations)','sem',['truth table','tautology','contradiction','contingency','logically true','logically false']),
        S('DM.U1.T03','Logical equivalence and laws','Normal Forms (equivalence)','sem',['logically equivalent','equivalence','de morgan','absorption','distribution','idempotent','identity law','domination','contrapositive','converse','inverse']),
        S('DM.U1.T04','Normal forms: PDNF and PCNF','Normal Forms','sem',['normal form','pdnf','pcnf','dnf','cnf','minterm','maxterm','principal disjunctive','principal conjunctive']),
        S('DM.U1.T05','Theory of inference for statement calculus','Theory of Inference for the Statement Calculus','sem',['inference','valid argument','rule p','rule t','rule cp','modus ponens','modus tollens','syllogism','direct proof','indirect proof','consistency']),
        S('DM.U1.T06','Predicate calculus and quantifiers','The Predicate Calculus','sem',['predicate','quantifier','universal','existential','forall','exists','bound variable','free variable','scope of quantifier']),
        S('DM.U1.T07','Inference theory of predicate calculus','Inference Theory of the Predicate Calculus','sem',['us','ug','es','eg','universal specification','universal generalization','existential specification','existential generalization','predicate inference']),
      ]},
      2: { title: 'Set Theory', topics: [
        S('DM.U2.T01','Basic concepts of set theory','Introduction, Basic Concepts of Set Theory','sem',['set','subset','proper subset','empty set','universal set','venn','element','belongs','union','intersection','complement','difference']),
        S('DM.U2.T02','Set identities and cardinality','Basic Concepts of Set Theory','sem',['power set','cartesian product','cardinality','inclusion-exclusion','set identity','distributive law','demorgan','symmetric difference']),
        S('DM.U2.T03','Relations and their properties','Relations and Ordering','sem',['relation','reflexive','symmetric','antisymmetric','transitive','matrix representation','digraph','directed graph','relation matrix']),
        S('DM.U2.T04','Equivalence relations and partitions','Relations and Ordering','sem',['equivalence relation','equivalence class','partition','congruence modulo','quotient set']),
        S('DM.U2.T05','Partial ordering, Hasse diagrams and POSets','Relations and Ordering','sem',['partial order','poset','hasse','lattice','lub','glb','maximal','minimal','greatest','least','upper bound','lower bound','chain','antichain']),
        S('DM.U2.T06','Functions: injective, surjective, bijective','Functions','sem',['function','injective','one-to-one','surjective','onto','bijective','inverse function','composition','domain','codomain','range']),
        S('DM.U2.T07','Closures and Warshall algorithm','Representation of Discrete Structures','sem',['closure','reflexive closure','symmetric closure','transitive closure','warshall','reachability']),
        S('DM.U2.T08','Counting relations and functions','Representation of Discrete Structures','sem',['number of relations','number of functions','number of injections','number of bijections','2^(n^2)']),
      ]},
      3: { title: 'Algebraic Structures', topics: [
        S('DM.U3.T01','Algebraic systems and binary operations','Introduction, Algebraic Systems','mid1',['algebraic system','algebraic structure','binary operation','closure','operation table','cayley table']),
        S('DM.U3.T02','Semigroups','Semi groups','mid1',['semigroup','semi group','associative','subsemigroup']),
        S('DM.U3.T03','Monoids','Monoids','mid1',['monoid','identity element','submonoid']),
        S('DM.U3.T04','Homomorphism and isomorphism','Algebraic Systems','mid1',['homomorphism','isomorphism','endomorphism','automorphism','kernel']),
        S('DM.U3.T05','Groups, subgroups and cyclic groups (PYQ extension)','Algebraic Systems (PYQ extension; not named in the MR25 unit text)','mid1',['group','subgroup','abelian','cyclic','coset','lagrange','order of element','inverse element','normal subgroup']),
        S('DM.U3.T06','Lattices as partially ordered sets','Lattices as Partially Ordered Sets','mid2',['lattice','sublattice','poset','join','meet','lub','glb','least upper bound','greatest lower bound']),
        S('DM.U3.T07','Lattice properties and special lattices','Lattices as Partially Ordered Sets','mid2',['bounded lattice','complemented lattice','distributive lattice','modular lattice','pentagon','diamond','absorption','idempotent','chain']),
        S('DM.U3.T08','Boolean algebra','Boolean Algebra','mid2',['boolean algebra','boolean function','boolean expression','boolean simplification','atoms','stone representation','boolean identity']),
      ]},
      4: { title: 'Elementary Combinatorics', topics: [
        S('DM.U4.T01','Basics of counting: sum and product rules','Basics of Counting','sem',['sum rule','product rule','counting principle','fundamental principle']),
        S('DM.U4.T02','Permutations','Combinations and Permutations','sem',['permutation','arrangement','npr','p(n,r)','linear arrangement']),
        S('DM.U4.T03','Combinations','Combinations and Permutations','sem',['combination','ncr','c(n,r)','selection','committee']),
        S('DM.U4.T04','Permutations and combinations with repetition','Enumerating Combinations and Permutations with Repetitions','sem',['with repetition','repetition allowed','stars and bars','multiset','non-negative solution','nonnegative solution']),
        S('DM.U4.T05','Constrained repetitions and indistinguishable objects','Enumerating Permutation with Constrained Repetitions','sem',['indistinguishable','identical objects','mississippi','constrained repetition','at least','at most','circular permutation','round table']),
        S('DM.U4.T06','Binomial coefficient and binomial theorem','Binomial Coefficient, The Binomial and Multinomial Theorems','sem',['binomial coefficient','binomial theorem','pascal','coefficient of','expansion']),
        S('DM.U4.T07','Multinomial theorem','The Binomial and Multinomial Theorems','sem',['multinomial','trinomial','multinomial coefficient']),
        S('DM.U4.T08','Principle of exclusion (inclusion-exclusion)','The Principle of Exclusion','sem',['inclusion-exclusion','inclusion exclusion','principle of exclusion','derangement','divisible by','none of']),
        S('DM.U4.T09','Pigeonhole principle (PYQ extension)','Basics of Counting (PYQ extension; not named in the MR25 unit text)','sem',['pigeonhole','pigeon hole','boxes','at least one box']),
        S('DM.U4.T10','Recurrence relations and generating functions (PYQ extension)','Course objectives name recurrence relations and generating functions; the unit text does not','sem',['recurrence','generating function','characteristic equation','characteristic root','homogeneous','fibonacci']),
      ]},
      5: { title: 'Graph Theory', topics: [
        S('DM.U5.T01','Basic concepts, degree and handshaking','Basic Concepts','sem',['graph','vertex','edge','degree','handshaking','simple graph','complete graph','regular graph','path','cycle']),
        S('DM.U5.T02','Isomorphism and subgraphs','Isomorphism and Subgraphs','sem',['isomorphism','isomorphic','subgraph','induced subgraph','degree sequence']),
        S('DM.U5.T03','Trees and their properties','Trees and their Properties','sem',['tree','forest','leaf','pendant vertex','acyclic','connected','n-1 edges']),
        S('DM.U5.T04','Spanning trees: Kruskal and Prim','Spanning Trees','sem',['spanning tree','kruskal','prim','minimum spanning tree','mst']),
        S('DM.U5.T05','Directed trees','Directed Trees','sem',['directed tree','arborescence','rooted tree','out-tree','in-tree']),
        S('DM.U5.T06','Binary trees and traversals','Binary Trees','sem',['binary tree','full binary tree','preorder','inorder','postorder','traversal','height','level']),
        S('DM.U5.T07','Planar graphs and Euler formula','Planar Graphs, Euler\'s Formula','sem',['planar','euler formula','region','face','kuratowski','k5','k3,3','3v-6']),
        S('DM.U5.T08','Multigraphs and Euler circuits','Multi-graphs and Euler Circuits','sem',['multigraph','euler circuit','euler path','eulerian','odd degree','seven bridges']),
        S('DM.U5.T09','Hamiltonian graphs','Hamiltonian Graphs','sem',['hamiltonian','dirac','ore','hamilton cycle']),
        S('DM.U5.T10','Chromatic number and four-color problem','Chromatic Numbers, The Four-Color Problem','sem',['chromatic','coloring','colouring','four color','four colour','bipartite','clique']),
      ]},
    }
  },
  COA: {
    name: 'Computer Organization and Architecture',
    code: 'CS302PC',
    units: {
      1: { title: 'Boolean Algebra, Logic Gates, Data Representation and Digital Computers', topics: [
        S('COA.U1.T01','Binary codes (BCD, excess-3, Gray, ASCII, parity)','Binary codes','sem',['bcd','excess-3','excess 3','gray code','ascii','parity','binary code','8421']),
        S('COA.U1.T02','Binary storage, registers and binary logic','Binary Storage and Registers, Binary logic','sem',['binary storage','register','binary logic','flip-flop storage','n-bit register']),
        S('COA.U1.T03','Digital logic gates and universality','Digital logic gates','sem',['logic gate','and gate','or gate','not gate','nand','nor','xor','universal gate','truth table']),
        S('COA.U1.T04','Data types and complements','Data types, Complements','sem',['data type','complement','1\'s complement','2\'s complement','r\'s complement','diminished radix','signed magnitude']),
        S('COA.U1.T05','Fixed-point representation and range','Fixed Point Representation','sem',['fixed point','fixed-point','range','overflow','sign bit','fraction','integer representation']),
        S('COA.U1.T06','Floating-point representation (IEEE 754)','Floating Point Representation','sem',['floating point','floating-point','ieee 754','ieee-754','mantissa','exponent','bias','normalization','normalisation','single precision','double precision']),
        S('COA.U1.T07','Digital computer block diagram; organization, architecture and design','Introduction, Block diagram of Digital Computer, Definition of Computer Organization, Computer Design and Computer Architecture','sem',['block diagram','digital computer','computer organization','computer architecture','computer design','stored program','von neumann']),
      ]},
      2: { title: 'Combinational and Sequential Logic', topics: [
        S('COA.U2.T01','Combinational circuits: analysis and design','Combinational Circuits, Analysis procedure Design procedure','sem',['combinational circuit','analysis procedure','design procedure','truth table','k-map','karnaugh','sop','pos']),
        S('COA.U2.T02','Binary adder and subtractor','Binary Adder- Subtractor','sem',['half adder','full adder','adder','subtractor','adder-subtractor','carry','ripple carry']),
        S('COA.U2.T03','Decimal (BCD) adder','Decimal Adder','sem',['bcd adder','decimal adder','0110','nine\'s complement','10\'s complement']),
        S('COA.U2.T04','Binary multiplier','Binary multiplier','sem',['binary multiplier','multiplicand','multiplier','partial product','and gate']),
        S('COA.U2.T05','Magnitude comparator','magnitude comparator','sem',['magnitude comparator','comparator','a>b','a=b','a<b']),
        S('COA.U2.T06','Decoders, encoders and multiplexers','Decoders, Encoders, Multiplexers','sem',['decoder','encoder','multiplexer','mux','demultiplexer','priority encoder','select line']),
        S('COA.U2.T07','HDL for combinational circuits','HDL for combinational circuits','sem',['hdl','verilog','vhdl','module','assign','always','gate-level']),
        S('COA.U2.T08','Latches and flip-flops','latches, Flip-Flops','sem',['latch','flip-flop','flip flop','sr latch','d latch','jk flip-flop','t flip-flop','master-slave','edge triggered','level triggered','race around']),
        S('COA.U2.T09','Clocked sequential analysis, state reduction and design','Analysis of clocked sequential circuits, state Reduction and Assignment, Design Procedure','sem',['state diagram','state table','state reduction','state assignment','excitation table','sequential circuit design','mealy','moore']),
        S('COA.U2.T10','Registers and shift registers','Registers, shift Registers','sem',['register','shift register','siso','sipo','piso','pipo','serial input','parallel input']),
        S('COA.U2.T11','Ripple, synchronous and other counters','Ripple counters, synchronous counters, other counters','sem',['counter','ripple counter','synchronous counter','asynchronous counter','mod-n','ring counter','johnson counter','sequence counter']),
      ]},
      3: { title: 'Register Transfer Language, Micro-operations and Basic Computer', topics: [
        S('COA.U3.T01','Register transfer language and register transfer','Register Transfer language, Register Transfer','mid1',['register transfer','rtl','register transfer language','conditional transfer','microoperation notation']),
        S('COA.U3.T02','Bus and memory transfers','Bus and memory transfers','mid1',['bus','common bus','three-state','tri-state','memory transfer','m[ar]','read','write']),
        S('COA.U3.T03','Arithmetic micro-operations','Arithmetic Micro operations','mid1',['arithmetic micro','add micro','subtract micro','increment','decrement','adder']),
        S('COA.U3.T04','Logic micro-operations','logic micro operations','mid1',['logic micro','and micro','or micro','xor micro','complement micro','selective set','selective clear']),
        S('COA.U3.T05','Shift micro-operations','shift micro operations','mid1',['shift micro','logical shift','arithmetic shift','circular shift','rotate']),
        S('COA.U3.T06','Arithmetic logic shift unit (ALSU)','Arithmetic logic shift unit','mid1',['alsu','arithmetic logic shift','alu','multiplexer stage']),
        S('COA.U3.T07','Instruction codes, computer registers and instructions','Instruction codes, Computer Registers Computer instructions','mid2',['instruction code','opcode','operand','computer register','ar','pc','dr','ac','ir','tr']),
        S('COA.U3.T08','Timing and control','Timing and Control','mid2',['timing','control unit','control signal','t0','t1','t2','sequence counter','decoder']),
        S('COA.U3.T09','Instruction cycle','Instruction cycle','mid2',['instruction cycle','fetch','decode','execute','indirect cycle','interrupt cycle']),
        S('COA.U3.T10','Memory-reference instructions','Memory Reference Instructions','mid2',['memory reference','and instruction','add instruction','lda','sta','bun','bsa','isz','effective address']),
        S('COA.U3.T11','Input-output and interrupt','Input – Output and Interrupt','mid2',['input output','i/o','inp','out','ski','sko','ion','iof','interrupt','fgi','fgo','ien']),
      ]},
      4: { title: 'Microprogrammed Control, CPU and Computer Arithmetic', topics: [
        S('COA.U4.T01','Control memory, control word and microinstruction','Control memory','sem',['control memory','control word','microinstruction','microprogram','micro-operation field']),
        S('COA.U4.T02','Address sequencing','Address sequencing','sem',['address sequencing','car','sbr','mapping','branch','next address']),
        S('COA.U4.T03','Microprogram example and control unit design','micro program example, design of control unit','sem',['microprogram example','control unit design','microinstruction format','f1 f2 f3','cd','br','ad']),
        S('COA.U4.T04','General register organization','General Register Organization','sem',['general register','sela','selb','seld','register organization','14-bit']),
        S('COA.U4.T05','Instruction formats','Instruction Formats','sem',['instruction format','instruction formats','three-address','two-address','one-address','zero-address','address field']),
        S('COA.U4.T06','Addressing modes','Addressing modes','sem',['addressing mode','immediate','direct address','indirect address','register indirect','indexed','relative','base register','autoincrement','autodecrement','effective address']),
        S('COA.U4.T07','Data transfer, manipulation and program control','Data Transfer and Manipulation, Program Control','sem',['data transfer','data manipulation','program control','status flag','branch','call','return','cisc','risc']),
        S('COA.U4.T08','Addition and subtraction','Addition and subtraction','sem',['signed magnitude addition','2\'s complement addition','subtraction','overflow','carry']),
        S('COA.U4.T09','Multiplication algorithms (Booth)','multiplication Algorithms','sem',['multiplication algorithm','booth','shift and add','signed multiplication','recoding','q-1']),
        S('COA.U4.T10','Division algorithms','Division Algorithms','sem',['division algorithm','restoring division','non-restoring','non restoring','quotient','divisor']),
        S('COA.U4.T11','Floating-point arithmetic','Floating – point Arithmetic operations','sem',['floating point addition','floating point multiplication','floating point division','align exponent','normalize','normalise','guard bit']),
        S('COA.U4.T12','Decimal arithmetic unit and operations','Decimal Arithmetic unit, Decimal Arithmetic operations','sem',['decimal arithmetic','bcd arithmetic','nine\'s complement','ten\'s complement','decimal adder']),
      ]},
      5: { title: 'Input-Output Organization and Memory Organization', topics: [
        S('COA.U5.T01','Input-output interface','Input-Output Interface','sem',['i/o interface','input-output interface','interface module','isolated i/o','memory-mapped','memory mapped']),
        S('COA.U5.T02','Asynchronous data transfer','Asynchronous data transfer','sem',['asynchronous','strobe','handshaking','handshake','baud','start bit','stop bit','serial']),
        S('COA.U5.T03','Modes of transfer','Modes of Transfer','sem',['programmed i/o','interrupt-initiated','interrupt initiated','dma','burst','cycle stealing','block transfer']),
        S('COA.U5.T04','Priority interrupt','Priority Interrupt','sem',['priority interrupt','polling','daisy chain','parallel priority','mask register','priority encoder']),
        S('COA.U5.T05','Direct memory access','Direct memory Access','sem',['dma controller','dmac','dma transfer','word count','address register']),
        S('COA.U5.T06','Memory hierarchy','Memory Hierarchy','sem',['memory hierarchy','registers','cache','main memory','auxiliary memory','cost per bit','locality']),
        S('COA.U5.T07','Main memory','Main Memory','sem',['main memory','ram','rom','sram','dram','prom','eprom','eeprom','memory chip','address line']),
        S('COA.U5.T08','Auxiliary memory','Auxiliary memory','sem',['auxiliary memory','magnetic disk','track','sector','cylinder','seek time','rotational latency','access time','raid']),
        S('COA.U5.T09','Associative memory','Associate Memory','sem',['associative memory','content addressable','cam','argument register','mask register','match register']),
        S('COA.U5.T10','Cache memory','Cache Memory','sem',['cache','hit ratio','average access time','direct mapping','associative mapping','set-associative','write-through','write-back','lru','fifo','tag','index','offset']),
      ]},
    }
  },
  OOPJ: {
    name: 'Object Oriented Programming through Java',
    code: 'CS303PC',
    units: {
      1: { title: 'Object Oriented Thinking and Java Basics', topics: [
        S('OOPJ.U1.T01','Need for OOP, OOP concepts and abstraction','Need for oop paradigm, summary of oop concepts, coping with complexity, abstraction mechanisms','sem',['oop','object oriented','encapsulation','abstraction','polymorphism','inheritance','coping with complexity']),
        S('OOPJ.U1.T02','History of Java, buzzwords, JVM/JRE/JDK','History of Java, Java buzzwords','sem',['history of java','buzzword','jvm','jre','jdk','bytecode','platform independent','write once']),
        S('OOPJ.U1.T03','Data types, variables, scope, arrays','data types, variables, scope and lifetime of variables, arrays','sem',['data type','primitive','int','byte','short','long','float','double','char','boolean','variable scope','lifetime','array','jagged']),
        S('OOPJ.U1.T04','Operators, expressions, control statements, casting','operators, expressions, control statements, type conversion and casting','sem',['operator','expression','control statement','if','switch','loop','for','while','type conversion','casting','widening','narrowing','shift operator']),
        S('OOPJ.U1.T05','Classes, objects, constructors, methods, access control, this','concepts of classes, objects, constructors, methods, access control, this keyword','sem',['class','object','constructor','method','access control','private','protected','public','default','this keyword','new']),
        S('OOPJ.U1.T06','Garbage collection','garbage collection','sem',['garbage collection','garbage collector','finalize','unreachable','system.gc']),
        S('OOPJ.U1.T07','Method/constructor overloading, parameter passing, recursion','overloading methods and constructors, parameter passing, recursion','sem',['overloading','parameter passing','call by value','pass by value','recursion','recursive','constructor overloading']),
        S('OOPJ.U1.T08','Nested and inner classes','nested and inner classes','sem',['nested class','inner class','static nested','anonymous class','local class']),
        S('OOPJ.U1.T09','String class basics','exploring String class','sem',['string','immutable','string pool','string literal','concat','substring','charat','equals']),
      ]},
      2: { title: 'Inheritance, Packages and Interfaces', topics: [
        S('OOPJ.U2.T01','Hierarchical abstractions, subclass, subtype, substitutability','Hierarchical abstractions, Base class object, subclass, subtype, substitutability','sem',['hierarchical abstraction','base class','superclass','subclass','subtype','substitutability','is-a']),
        S('OOPJ.U2.T02','Forms of inheritance','forms of inheritance specialization, specification, construction, extension, limitation, combination','sem',['forms of inheritance','specialization','specification','construction','extension','limitation','combination']),
        S('OOPJ.U2.T03','Benefits and costs of inheritance; member access rules','benefits of inheritance, costs of inheritance. Member access rules','sem',['benefit of inheritance','cost of inheritance','member access','access rule','protected']),
        S('OOPJ.U2.T04','super and final keywords','super keyword uses, using final keyword with inheritance','sem',['super','final','final variable','final method','final class','constructor chaining']),
        S('OOPJ.U2.T05','Polymorphism, overriding, abstract classes, Object class','polymorphism- method overriding, abstract classes, the Object class','sem',['polymorphism','overriding','dynamic dispatch','abstract class','object class','tostring','equals','hashcode','getclass']),
        S('OOPJ.U2.T06','Packages, CLASSPATH and importing','Defining, Creating and Accessing a Package, Understanding CLASSPATH, importing packages','sem',['package','classpath','import','javac -d','package statement']),
        S('OOPJ.U2.T07','Classes vs interfaces, defining and extending interfaces','differences between classes and interfaces, defining an interface, implementing interface, applying interfaces, variables in interface and extending interfaces','sem',['interface','implements','extends interface','default method','static method','interface variable','abstract method']),
      ]},
      3: { title: 'Exception Handling and Multithreading', topics: [
        S('OOPJ.U3.T01','Exception concepts, benefits, termination/resumptive models','Concepts of exception handling, benefits of exception handling, Termination or resumptive models','mid1',['exception handling','benefit of exception','termination model','resumptive model','error handling']),
        S('OOPJ.U3.T02','Exception hierarchy, checked vs unchecked','exception hierarchy','mid1',['throwable','exception hierarchy','checked exception','unchecked exception','runtimeexception','error']),
        S('OOPJ.U3.T03','try, catch, throw, throws and finally','usage of try, catch, throw, throws and finally','mid1',['try','catch','throw','throws','finally','try-catch','try with resources']),
        S('OOPJ.U3.T04','Built-in exceptions','built in exceptions','mid1',['arithmeticexception','arrayindexoutofbounds','nullpointerexception','numberformatexception','classcastexception','built-in exception']),
        S('OOPJ.U3.T05','Creating custom exception subclasses','creating own exception subclasses','mid1',['custom exception','user-defined exception','own exception','extends exception']),
        S('OOPJ.U3.T06','Multithreading vs multitasking','Differences between multithreading and multitasking','mid2',['multithreading','multitasking','process-based','thread-based','lightweight process']),
        S('OOPJ.U3.T07','Thread life cycle','thread life cycle','mid2',['thread life cycle','new state','runnable','blocked','waiting','timed waiting','terminated','thread state']),
        S('OOPJ.U3.T08','Creating threads','creating threads','mid2',['extend thread','implement runnable','start()','run()','thread creation','runnable interface']),
        S('OOPJ.U3.T09','Thread priorities','thread priorities','mid2',['thread priority','min_priority','max_priority','norm_priority','setpriority','getpriority']),
        S('OOPJ.U3.T10','Synchronization','synchronizing threads','mid2',['synchronized','synchronization','monitor','lock','race condition','mutual exclusion']),
        S('OOPJ.U3.T11','Inter-thread communication','inter thread communication','mid2',['wait','notify','notifyall','inter-thread','producer consumer','illegalmonitorstate']),
        S('OOPJ.U3.T12','Thread groups and daemon threads','thread groups, daemon threads','mid2',['thread group','daemon','setdaemon','isdaemon','join','yield','sleep']),
      ]},
      4: { title: 'String, Object, java.util, java.io, Events, Graphics and Layouts', topics: [
        S('OOPJ.U4.T01','Exploring the String class','Exploring String class','sem',['stringbuffer','stringbuilder','string methods','immutable string','string comparison']),
        S('OOPJ.U4.T02','Exploring the Object class','Object class','sem',['object class methods','clone','finalize','wait notify','getclass']),
        S('OOPJ.U4.T03','Exploring java.util','Exploring java.util package','sem',['java.util','collection','arraylist','linkedlist','hashset','treeset','hashmap','hashtable','iterator','scanner','random','stringtokenizer','date']),
        S('OOPJ.U4.T04','Exploring java.io','Exploring java.io package','sem',['java.io','inputstream','outputstream','reader','writer','fileinputstream','fileoutputstream','bufferedreader','printwriter','file class']),
        S('OOPJ.U4.T05','Events, sources, classes, listeners and delegation model','Events, Event sources, Event classes, Event Listeners, Delegation event model','sem',['event','event source','event class','event listener','delegation event model','actionevent','actionlistener','addactionlistener']),
        S('OOPJ.U4.T06','Mouse and keyboard events; adapter classes','handling mouse and keyboard events, Adapter classes','sem',['mouseevent','mouse listener','mouselistener','mousemotionlistener','keyevent','keylistener','adapter class']),
        S('OOPJ.U4.T07','Graphics','graphics','sem',['graphics','paint','drawline','drawrect','drawoval','fillrect','drawstring','setcolor','graphics class']),
        S('OOPJ.U4.T08','Layout managers: border, grid, flow, card, grid bag','layout manager – layout manager types – border, grid, flow, card and grid bag','sem',['layout manager','flowlayout','borderlayout','gridlayout','cardlayout','gridbaglayout','default layout']),
      ]},
      5: { title: 'Swing', topics: [
        S('OOPJ.U5.T01','Swing introduction, AWT limitations and MVC','Swing – Introduction, limitations of AWT, MVC architecture','sem',['swing','awt','lightweight','heavyweight','mvc','look and feel','pluggable']),
        S('OOPJ.U5.T02','Components, containers, JFrame and JComponent','components, containers, exploring swing- JFrame and JComponent','sem',['jframe','jcomponent','container','component','content pane','jpanel','jdialog','japplet']),
        S('OOPJ.U5.T03','JLabel, ImageIcon, JTextField, JButton, JCheckBox, JRadioButton','JLabel, ImageIcon, JTextField, JButton, JCheckBox, JRadioButton','sem',['jlabel','imageicon','jtextfield','jbutton','jcheckbox','jradiobutton','buttongroup']),
        S('OOPJ.U5.T04','JList, JComboBox, tabbed panes, scroll panes, trees and tables','JList, JComboBox, Tabbed Panes, Scroll Panes, Trees, and Tables','sem',['jlist','jcombobox','jtabbedpane','jscrollpane','jtree','jtable','tabbed pane','scroll pane']),
        S('OOPJ.U5.T05','Menus and popup menus','Menu Basics, Menu related classes - JMenuBar, JMenu, JMenuItem, JCheckBoxMenuItem, JRadioButtonMenuItem, JSeperator. creating a popup menu','sem',['jmenubar','jmenu','jmenuitem','jcheckboxmenuitem','jradiobuttonmenuitem','jseparator','jpopupmenu','popup menu']),
      ]},
    }
  },
  SE: {
    name: 'Software Engineering',
    code: 'CS304PC',
    units: {
      1: { title: 'Introduction and Process Models', topics: [
        S('SE.U1.T01','Evolving role and changing nature of software; software myths','The evolving role of software, changing nature of software, software myths','sem',['evolving role','changing nature','software myth','management myth','customer myth','practitioner myth','software definition']),
        S('SE.U1.T02','Layered technology and process framework','Software engineering- a layered technology, a process framework','sem',['layered technology','process framework','framework activity','umbrella activity','quality focus','process layer','methods','tools']),
        S('SE.U1.T03','Capability Maturity Model Integration (CMMI)','the capability maturity model integration (CMMI)','sem',['cmmi','capability maturity','maturity level','initial','managed','defined','quantitatively managed','optimizing']),
        S('SE.U1.T04','Waterfall, spiral, incremental, concurrent and component-based models','The waterfall model, Spiral model, Incremental Process Models, Concurrent Models, Component based development','sem',['waterfall','spiral','incremental','concurrent model','component based','rad','prototyping','process model']),
        S('SE.U1.T05','Agile development','Agile Development','sem',['agile','manifesto','xp','extreme programming','scrum','sprint','pair programming','refactoring','continuous integration']),
      ]},
      2: { title: 'Software Requirements', topics: [
        S('SE.U2.T01','Functional and non-functional requirements','Functional and non-functional requirements','sem',['functional requirement','non-functional','nonfunctional','product requirement','organisational requirement','external requirement','quality requirement']),
        S('SE.U2.T02','User and system requirements; interface specification','user requirements, system requirements, interface specification','sem',['user requirement','system requirement','interface specification','procedural interface','data representation']),
        S('SE.U2.T03','Software requirements document (SRS)','the software requirements document','sem',['srs','software requirements document','requirements document','srs quality','verifiable','traceable','complete','consistent']),
        S('SE.U2.T04','Feasibility studies','Feasibility studies','sem',['feasibility','technical feasibility','economic feasibility','operational feasibility','schedule feasibility','legal feasibility']),
        S('SE.U2.T05','Requirements elicitation and analysis','requirements elicitation and analysis','sem',['elicitation','interview','questionnaire','observation','use case','scenario','prototyping','jad','fast','qfd','requirements analysis']),
        S('SE.U2.T06','Requirements validation','requirements validation','sem',['requirements validation','validation','review','prototype validation','test case generation','requirements check']),
        S('SE.U2.T07','Requirements management','requirements management','sem',['requirements management','change control','traceability','requirement change','baseline']),
      ]},
      3: { title: 'Design Engineering, Architecture and UML', topics: [
        S('SE.U3.T01','Design process and design quality','Design process and design quality','mid1',['design process','design quality','good design','design guideline','design evaluation']),
        S('SE.U3.T02','Design concepts','design concepts','mid1',['abstraction','architecture','pattern','separation of concerns','modularity','information hiding','functional independence','refinement','refactoring','cohesion','coupling']),
        S('SE.U3.T03','The design model','the design model','mid1',['design model','data design','architectural design','interface design','component-level design','component level design']),
        S('SE.U3.T04','Software architecture and data design','software architecture, data design','mid1',['software architecture','data design','architecture','data structure','database design']),
        S('SE.U3.T05','Architectural styles and patterns','architectural styles and patterns, architectural design','mid1',['architectural style','architectural pattern','data-centered','data-flow','call-and-return','layered architecture','object-oriented architecture','client-server','pipe and filter']),
        S('SE.U3.T06','UML conceptual model and basic structural modeling','conceptual model of UML, basic structural modeling','mid2',['uml','conceptual model','structural modeling','thing','relationship','diagram','common mechanism','stereotype','tagged value']),
        S('SE.U3.T07','Use case diagrams','use case diagrams','mid2',['use case','actor','system boundary','include','extend','use-case diagram']),
        S('SE.U3.T08','Class diagrams','class diagrams','mid2',['class diagram','attribute','operation','visibility','multiplicity','aggregation','composition','generalization','association class']),
        S('SE.U3.T09','Sequence diagrams','sequence diagrams','mid2',['sequence diagram','lifeline','message','activation','synchronous message','asynchronous message']),
        S('SE.U3.T10','Collaboration diagrams','collaboration diagrams','mid2',['collaboration diagram','communication diagram','object','link','numbered message']),
        S('SE.U3.T11','Activity diagrams','activity diagrams','mid2',['activity diagram','action state','decision','fork','join','swimlane','initial state','final state']),
        S('SE.U3.T12','Component diagrams','component diagrams','mid2',['component diagram','component','interface','dependency','provided interface','required interface']),
      ]},
      4: { title: 'Testing Strategies and Metrics', topics: [
        S('SE.U4.T01','Strategic approach and testing for conventional software','A strategic approach to software testing, test strategies for conventional software','sem',['testing strategy','unit testing','integration testing','top-down','bottom-up','sandwich','regression testing','smoke testing','verification','validation']),
        S('SE.U4.T02','Black-box testing','black-box and white-box testing','sem',['black-box','black box','equivalence partitioning','boundary value','cause-effect','cause effect','functional testing']),
        S('SE.U4.T03','White-box testing and basis path testing','black-box and white-box testing','sem',['white-box','white box','basis path','cyclomatic','flow graph','independent path','control structure testing','condition testing','loop testing']),
        S('SE.U4.T04','Validation and system testing','validation testing, system testing','sem',['validation testing','alpha','beta','system testing','recovery testing','security testing','stress testing','performance testing','deployment testing']),
        S('SE.U4.T05','The art of debugging','the art of debugging','sem',['debugging','brute force','backtracking','cause elimination','debugging versus testing','debugger']),
        S('SE.U4.T06','Software measurement and metrics','Software measurement, metrics for software quality','sem',['software measurement','direct metric','indirect metric','size-oriented','function-oriented','function point','loc','loc metric','metric']),
        S('SE.U4.T07','Metrics for software quality','metrics for software quality','sem',['defect density','dre','defect removal efficiency','mccall','iso 9126','quality metric','reliability metric']),
      ]},
      5: { title: 'Risk Management and Quality Management', topics: [
        S('SE.U5.T01','Reactive vs proactive risk strategies; software risks','Reactive Vs proactive risk strategies, software risks','sem',['reactive','proactive','risk strategy','project risk','technical risk','business risk','known risk','predictable risk','unpredictable risk']),
        S('SE.U5.T02','Risk identification, projection and refinement','risk identification, risk projection, risk refinement','sem',['risk identification','risk projection','risk table','risk exposure','likelihood','impact','condition-transition-consequence','risk refinement']),
        S('SE.U5.T03','RMMM','RMMM','sem',['rmmm','risk mitigation','risk monitoring','risk management','contingency plan']),
        S('SE.U5.T04','Quality concepts and software quality assurance','Quality concepts, software quality assurance','sem',['quality concept','quality control','quality assurance','sqa','cost of quality','software quality']),
        S('SE.U5.T05','Software reviews and formal technical reviews','software reviews, formal technical reviews','sem',['software review','formal technical review','ftr','walkthrough','inspection','review meeting','reviewer']),
        S('SE.U5.T06','Statistical software quality assurance','statistical software quality assurance','sem',['statistical sqa','pareto','vital few','cause analysis','defect cause']),
        S('SE.U5.T07','Software reliability','software reliability','sem',['reliability','mtbf','mttf','mttr','availability','failure intensity']),
        S('SE.U5.T08','ISO 9000 quality standards','the ISO 9000 quality standards','sem',['iso 9000','iso 9001','iso 9000-3','certification','quality standard']),
      ]},
    }
  },
  DBMS: {
    name: 'Database Management Systems',
    code: 'CS305PC',
    units: {
      1: { title: 'Introduction and ER Design', topics: [
        S('DBMS.U1.T01','Applications, historical perspective, file systems vs DBMS','Database System Applications: A Historical Perspective, File Systems versus a DBMS','sem',['file system','file systems','dbms','redundancy','inconsistency','data isolation','atomicity','concurrent access','database application']),
        S('DBMS.U1.T02','Data model, levels of abstraction and data independence','the Data Model, Levels of Abstraction in a DBMS, Data Independence','sem',['data model','levels of abstraction','physical level','logical level','view level','data independence','physical data independence','logical data independence','schema','instance']),
        S('DBMS.U1.T03','Structure of a DBMS and DBA','Structure of a DBMS','sem',['structure of dbms','query processor','storage manager','buffer manager','transaction manager','dba','database administrator','ddl interpreter','dml compiler']),
        S('DBMS.U1.T04','ER model: entities, attributes and entity sets','Database Design and ER Diagrams, Entities, Attributes, and Entity Sets','sem',['er diagram','entity','attribute','entity set','key attribute','composite attribute','multivalued','derived attribute','weak entity']),
        S('DBMS.U1.T05','Relationships, relationship sets and cardinality','Relationships and Relationship Sets','sem',['relationship','relationship set','cardinality','1:1','1:n','m:n','participation','total participation','partial participation','degree']),
        S('DBMS.U1.T06','Additional ER features: weak entities, specialization, generalization, aggregation','Additional Features of the ER Model','sem',['weak entity','identifying relationship','partial key','specialization','generalization','aggregation','isa','disjoint','overlapping']),
        S('DBMS.U1.T07','Conceptual design with the ER model; ER-to-relational mapping','Conceptual Design with the ER Model','sem',['conceptual design','er to relational','map er','tables from er','schema design']),
      ]},
      2: { title: 'Relational Model, Algebra and Calculus', topics: [
        S('DBMS.U2.T01','Relational model terms','Introduction to the Relational Model','sem',['relation','tuple','attribute','domain','degree','cardinality','schema','instance','relational model']),
        S('DBMS.U2.T02','Integrity constraints and enforcement','Integrity constraint over relations, enforcing integrity constraints','sem',['integrity constraint','domain constraint','key constraint','entity integrity','referential integrity','foreign key','cascade','set null','no action']),
        S('DBMS.U2.T03','Querying relational data and views','querying relational data, introduction to views','sem',['view','query relational data','virtual table','create view','view update']),
        S('DBMS.U2.T04','Destroying and altering tables and views','destroying/altering tables and views','sem',['alter table','drop table','drop view','add column','modify column']),
        S('DBMS.U2.T05','Relational algebra','Relational Algebra','sem',['relational algebra','selection','projection','union','intersect','set difference','cross product','join','natural join','theta join','outer join','division','rename']),
        S('DBMS.U2.T06','Tuple relational calculus','Tuple relational Calculus','sem',['tuple relational calculus','trc','tuple calculus','safe expression','{t |']),
        S('DBMS.U2.T07','Domain relational calculus','Domain relational calculus','sem',['domain relational calculus','drc','domain calculus','safe','{<']),
      ]},
      3: { title: 'SQL, Constraints, Triggers and Schema Refinement', topics: [
        S('DBMS.U3.T01','Form of basic SQL query','form of basic SQL query','mid1',['select','from','where','sql query','distinct','order by','basic sql']),
        S('DBMS.U3.T02','UNION, INTERSECT and EXCEPT','UNION, INTERSECT, and EXCEPT','mid1',['union','intersect','except','union all','set operation']),
        S('DBMS.U3.T03','Nested queries','Nested Queries','mid1',['nested query','subquery','in','not in','exists','any','all','correlated']),
        S('DBMS.U3.T04','Aggregation operators','aggregation operators','mid1',['aggregate','count','sum','avg','min','max','group by','having']),
        S('DBMS.U3.T05','NULL values','NULL values','mid1',['null','is null','three-valued','three valued','unknown','count(*)']),
        S('DBMS.U3.T06','Complex integrity constraints in SQL','complex integrity constraints in SQL','mid1',['check constraint','assertion','unique constraint','primary key constraint','foreign key constraint','not null']),
        S('DBMS.U3.T07','Triggers and active databases','triggers and active databases','mid1',['trigger','active database','before trigger','after trigger','row level','statement level','event condition action']),
        S('DBMS.U3.T08','Problems caused by redundancy','Problems caused by redundancy','mid2',['redundancy','insertion anomaly','deletion anomaly','update anomaly','anomaly']),
        S('DBMS.U3.T09','Decompositions and problems related to decomposition','decompositions, problems related to decomposition','mid2',['decomposition','lossless join','lossy join','dependency preservation','lossless']),
        S('DBMS.U3.T10','Functional dependencies, Armstrong axioms and closures','reasoning about functional dependencies','mid2',['functional dependency','fd','armstrong','reflexivity','augmentation','transitivity','closure','candidate key','canonical cover','prime attribute']),
        S('DBMS.U3.T11','First, second and third normal forms','FIRST, SECOND, THIRD normal forms','mid2',['1nf','2nf','3nf','first normal','second normal','third normal','partial dependency','transitive dependency']),
        S('DBMS.U3.T12','BCNF','BCNF','mid2',['bcnf','boyce-codd','boyce codd']),
        S('DBMS.U3.T13','Lossless join decomposition','lossless join decomposition','mid2',['lossless join decomposition','lossless decomposition','binary decomposition']),
        S('DBMS.U3.T14','Multivalued dependencies and fourth normal form','multivalued dependencies, FOURTH normal form','mid2',['multivalued dependency','multi-valued','mvd','4nf','fourth normal']),
        S('DBMS.U3.T15','Fifth normal form','FIFTH normal form','mid2',['5nf','fifth normal','join dependency']),
      ]},
      4: { title: 'Transactions, Concurrency and Recovery', topics: [
        S('DBMS.U4.T01','Transaction concept and state','Transaction Concept, Transaction State','sem',['transaction','transaction state','active','partially committed','committed','failed','aborted','terminated']),
        S('DBMS.U4.T02','Atomicity and durability implementation','Implementation of Atomicity and Durability','sem',['atomicity','durability','shadow copy','shadow paging','log','stable storage']),
        S('DBMS.U4.T03','Concurrent executions and serializability','Concurrent Executions, Serializability','sem',['concurrent execution','serial schedule','serializable','serialisable','conflict','lost update','dirty read','phantom']),
        S('DBMS.U4.T04','Recoverability','Recoverability','sem',['recoverable','cascadeless','strict','recoverability','dirty read']),
        S('DBMS.U4.T05','Implementation of isolation and testing for serializability','Implementation of Isolation, Testing for serializability','sem',['isolation','isolation level','precedence graph','serialization graph','conflict serializable','view serializable']),
        S('DBMS.U4.T06','Lock-based protocols','Lock Based Protocols','sem',['lock','shared lock','exclusive lock','two-phase locking','2pl','strict 2pl','rigorous','lock point','deadlock','wait-die','wound-wait']),
        S('DBMS.U4.T07','Timestamp-based protocols','Timestamp Based Protocols','sem',['timestamp','timestamp ordering','thomas write rule','read timestamp','write timestamp']),
        S('DBMS.U4.T08','Validation-based protocols','Validation- Based Protocols','sem',['validation-based','validation based','read phase','validation phase','write phase','optimistic']),
        S('DBMS.U4.T09','Multiple granularity','Multiple Granularity','sem',['multiple granularity','granularity','intention shared','intention exclusive','is','ix','six']),
        S('DBMS.U4.T10','Recovery and atomicity; log-based recovery','Recovery and Atomicity, Log–Based Recovery','sem',['log-based recovery','log based','undo','redo','deferred modification','immediate modification','checkpoint','wal','write ahead log']),
        S('DBMS.U4.T11','Recovery with concurrent transactions','Recovery with Concurrent Transactions','sem',['recovery with concurrent','undo list','redo list','crash recovery','transaction table']),
      ]},
      5: { title: 'Storage, File Organization and Indexing', topics: [
        S('DBMS.U5.T01','Data on external storage, pages and buffer pool','Data on External Storage','sem',['external storage','page','buffer pool','buffer manager','disk','block','record']),
        S('DBMS.U5.T02','File organization','File Organization and Indexing','sem',['file organization','heap file','sorted file','hashed file','file organisation']),
        S('DBMS.U5.T03','Clustered, primary and secondary indexes','Cluster Indexes, Primary and Secondary Indexes','sem',['clustered index','cluster index','primary index','secondary index','dense index','sparse index','index']),
        S('DBMS.U5.T04','Index data structures','Index data Structures','sem',['index data structure','search key','data entry','index entry','primary key']),
        S('DBMS.U5.T05','Hash-based indexing','Hash Based Indexing','sem',['hash-based','hash based','static hashing','extendible hashing','extendable hashing','global depth','local depth','overflow chain','bucket']),
        S('DBMS.U5.T06','Tree-based indexing and ISAM','Tree based Indexing, Indexed Sequential Access Methods (ISAM)','sem',['tree-based','tree based','isam','indexed sequential','b+ tree','b tree','b-tree']),
        S('DBMS.U5.T07','Comparison of file organizations','Comparison of File Organizations','sem',['comparison of file','cost model','scan','equality search','insert cost','heap cost','sorted cost']),
        S('DBMS.U5.T08','B+ trees','B+ Trees: A Dynamic Index Structure','sem',['b+ tree','b+tree','leaf level','internal node','order','split','merge','root split','linked leaf']),
      ]},
    }
  },
  IE: {
    name: 'Innovation and Entrepreneurship',
    code: 'MS301HS',
    units: {
      1: { title: 'Fundamentals of Innovation and Entrepreneurship', topics: [
        S('IE.U1.T01','Innovation: introduction, need and features','Innovation: Introduction, need for innovation, Features','sem',['innovation','need for innovation','feature of innovation','invention','creativity']),
        S('IE.U1.T02','Types of innovation; manufacturing and service innovation','Types of innovations, innovations in manufacturing and service sectors','sem',['types of innovation','incremental','radical','disruptive','architectural','manufacturing innovation','service innovation','product innovation','process innovation']),
        S('IE.U1.T03','Fostering a culture of innovation and planning for innovation','fostering a culture of innovation, planning for innovation','sem',['culture of innovation','innovation culture','planning for innovation','innovation strategy']),
        S('IE.U1.T04','Entrepreneurship: types, attributes and mindset','Entrepreneurship: Introduction, types of entrepreneurship attributes, mindset of entrepreneurial and intrapreneurial leadership','sem',['entrepreneurship','entrepreneur','intrapreneur','entrepreneurial mindset','attributes of entrepreneur','types of entrepreneurship']),
        S('IE.U1.T05','Role of entrepreneurs, women entrepreneurship and on-campus startups','Role of entrepreneurs in economic development. Woman Entrepreneurship, Importance of on-campus startups','sem',['economic development','women entrepreneurship','woman entrepreneur','on-campus startup','campus startup','role of entrepreneur']),
      ]},
      2: { title: 'Problem and Customer Identification', topics: [
        S('IE.U2.T01','Identifying the gap/problem from an industry perspective','Identification of gap, problem, analyzing the problem from a industry perspective, real-world problems','sem',['problem identification','gap','industry perspective','real-world problem','pain point','customer problem']),
        S('IE.U2.T02','Market and customer segmentation','market and customer segmentation','sem',['market segmentation','customer segmentation','demographic','geographic','psychographic','behavioural','behavioral','segment']),
        S('IE.U2.T03','Validation of problem-customer fit and iteration','validation of customer problem fit, Iterating problem-customer fit','sem',['problem-customer fit','problem customer fit','customer discovery','get out of the building','validation','iterate']),
        S('IE.U2.T04','Competition and industry trends mapping','Competition and Industry trends mapping and assessing initial opportunity','sem',['competition','competitor','industry trend','trend mapping','opportunity assessment']),
        S('IE.U2.T05','Porter Five Forces model','Porter\'s Five Force Model','sem',['porter','five forces','five force','new entrant','supplier power','buyer power','substitute','rivalry']),
        S('IE.U2.T06','Idea generation and ideation techniques','Idea generation, Ideation techniques: Brainstorming, Brain writing, Round robin, and SCAMPER','sem',['idea generation','ideation','brainstorming','brain writing','brainwriting','round robin','scamper']),
        S('IE.U2.T07','Design thinking principles and solution mapping','Design thinking principles, Mapping of solution to problem','sem',['design thinking','empathise','empathize','define','ideate','prototype','test','solution mapping']),
      ]},
      3: { title: 'Opportunity Assessment and Prototype Development', topics: [
        S('IE.U3.T01','Global competitors and industry trends','Identify and map global competitors, review industry trends','mid1',['global competitor','competitor mapping','industry trend','global market']),
        S('IE.U3.T02','Market sizing: TAM, SAM and SOM','understand market sizing: TAM, SAM, and SOM','mid1',['tam','sam','som','market sizing','total addressable','serviceable available','serviceable obtainable']),
        S('IE.U3.T03','Assessing scope and potential scale','Assessing scope and potential scale for the opportunity','mid1',['scope','potential scale','scalability','opportunity scope','market potential']),
        S('IE.U3.T04','Prototyping','Understanding prototyping','mid2',['prototype','prototyping','wireframe','mock-up','mockup','sketch','working prototype']),
        S('IE.U3.T05','Minimum viable product (MVP)','Minimum Viable Product (MVP)','mid2',['mvp','minimum viable product','build measure learn','build-measure-learn']),
        S('IE.U3.T06','Developing a prototype: testing and validation','Developing a prototype: Testing, and validation','mid2',['prototype testing','validation','user testing','feedback','iterate prototype']),
      ]},
      4: { title: 'Business and Financial Models', topics: [
        S('IE.U4.T01','Business model and types','Introduction to Business Model and types','sem',['business model','business model type','revenue model','subscription','freemium','marketplace']),
        S('IE.U4.T02','Lean Canvas: nine blocks','Lean Canvas Approach: 9-block lean canvas model, building lean canvas for your startup','sem',['lean canvas','9-block','nine block','problem','customer segments','unique value proposition','solution','channels','revenue streams','cost structure','key metrics','unfair advantage']),
        S('IE.U4.T03','Business plan components','Business planning: components of Business plan- Sales plan, People plan and financial plan','sem',['business plan','sales plan','people plan','financial plan','business planning']),
        S('IE.U4.T04','Types of costs and financial planning for profitability','Financial Planning: Types of costs, preparing a financial plan for profitability using a financial template','sem',['fixed cost','variable cost','semi-variable','semi variable','break-even','break even','financial plan','profitability']),
        S('IE.U4.T05','Unit economics, economies of scale and financial performance','understanding the basics of Unit economics, Economies of Scale and analyzing financial performance','sem',['unit economics','cac','ltv','customer acquisition cost','lifetime value','contribution margin','economies of scale','financial performance']),
        S('IE.U4.T06','Go-to-market approach, channels and customer acquisition','Go-To-Market (GTM) approach – Selecting the Right Channel, creating digital presence, and building customer acquisition strategy','sem',['go-to-market','gtm','channel','digital presence','customer acquisition','marketing channel']),
      ]},
      5: { title: 'Startups and IPR', topics: [
        S('IE.U5.T01','Startup requirements, founding team and mentors','Startup requirements, building founding team members and mentors','sem',['startup requirement','founding team','mentor','co-founder','team building']),
        S('IE.U5.T02','Pitch preparation and venture pitching readiness','pitch preparation, venture pitching readiness','sem',['pitch','pitch deck','elevator pitch','traction','ask','venture pitching']),
        S('IE.U5.T03','Startup registration, documentation and legal aspects','start-up registration process, documentation, legal aspects in startup','sem',['startup registration','registration','legal aspect','incorporation','llp','private limited','documentation']),
        S('IE.U5.T04','Funding opportunities, institutional support and startup lifecycle','funding opportunities and schemes, institutional support to entrepreneurs, startup lifecycle','sem',['funding','bootstrapping','angel','venture capital','grant','crowdfunding','incubator','accelerator','startup lifecycle','institutional support']),
        S('IE.U5.T05','National Innovation Startup Policy (NISP)','National Innovation Startup Policy (NISP) and its features','sem',['nisp','national innovation startup policy','startup policy']),
        S('IE.U5.T06','Patents, designs, patentability and grant procedure','Patents, Designs, Patentability, Procedure for grants of patents','sem',['patent','design registration','patentability','novelty','inventive step','industrial applicability','patent grant','patent procedure']),
        S('IE.U5.T07','Patent rights, Indian and international patenting','Indian Scenario of Patenting, International Scenario: International cooperation on Intellectual Property. Patent Rights: Scope of Patent Rights','sem',['patent right','indian patent','international patent','pct','paris convention','trips','scope of patent']),
        S('IE.U5.T08','Copyright, trademark and geographical indications','Copyright, trademark, and GI','sem',['copyright','trademark','trade mark','geographical indication','gi tag','ipr']),
        S('IE.U5.T09','Licensing and transfer of technology','Licensing and transfer of technology','sem',['licensing','license','technology transfer','royalty','know-how']),
      ]},
    }
  },
  ES: {
    name: 'Environmental Science',
    code: 'VA301BS',
    units: {
      1: { title: 'Ecosystems', topics: [
        S('ES.U1.T01','Ecosystem definition, scope, importance and classification','Definition, Scope, and Importance of ecosystem. Classification','sem',['ecosystem','definition','scope','importance','classification','aquatic','terrestrial','forest ecosystem']),
        S('ES.U1.T02','Structure and function of an ecosystem','structure and function of an ecosystem','sem',['structure','function','abiotic','biotic','producer','consumer','decomposer','food chain','food web']),
        S('ES.U1.T03','Food chains and food web','Food chains, food web','sem',['food chain','food web','grazing chain','detritus chain','trophic level']),
        S('ES.U1.T04','Flow of energy and universal flow model','Flow of energy – universal flow model','sem',['energy flow','universal flow','10% law','ten percent','pyramid of energy','ecological pyramid']),
        S('ES.U1.T05','Biogeochemical cycles: nitrogen cycle','Biogeochemical cycles – Nitrogen cycle','sem',['biogeochemical','nitrogen cycle','nitrification','denitrification','nitrogen fixation','ammonification','assimilation']),
        S('ES.U1.T06','Bioaccumulation and biomagnification','Bioaccumulation, Bio magnification','sem',['bioaccumulation','biomagnification','biomagnify','ddt','food chain concentration']),
      ]},
      2: { title: 'Natural Resources', topics: [
        S('ES.U2.T01','Classification of resources','Classification of Resources','sem',['natural resource','renewable','non-renewable','nonrenewable','resource classification','inexhaustible','exhaustible']),
        S('ES.U2.T02','Water resources, over-utilization and dams','Water resources: Effects of over utilization of surface and ground water. Dams: benefits and problems','sem',['water resource','surface water','ground water','groundwater','over utilization','overutilization','dam','reservoir','flood','drought']),
        S('ES.U2.T03','Mineral resources and effects of mining','Mineral resources: Environmental effects of mining','sem',['mineral resource','mining','mine','ore','land degradation','mine drainage']),
        S('ES.U2.T04','Forest resources and deforestation','Forest resources: Benefits of forest, causes and effects of deforestation','sem',['forest resource','forest benefit','deforestation','afforestation','forest cover']),
        S('ES.U2.T05','Energy resources: renewable and non-renewable','Energy resources: Renewable and non-renewable energy sources','sem',['energy resource','renewable energy','non-renewable energy','solar','wind','hydro','biomass','geothermal','tidal','fossil fuel','coal','petroleum']),
      ]},
      3: { title: 'Biodiversity and Biotic Resources', topics: [
        S('ES.U3.T01','Biodiversity: definition and levels','Introduction, Definition, levels of biodiversity - genetic, species and ecosystem diversity','mid1',['biodiversity','genetic diversity','species diversity','ecosystem diversity','levels of biodiversity']),
        S('ES.U3.T02','Value of biodiversity','Value of biodiversity; consumptive use, productive use, social, ethical, aesthetic and optional values','mid1',['value of biodiversity','consumptive','productive use','social value','ethical value','aesthetic value','optional value','option value']),
        S('ES.U3.T03','Threats to biodiversity','Threats to biodiversity: habitat loss, poaching of wildlife, man-wildlife conflicts','mid2',['threat','habitat loss','poaching','man-wildlife','man wildlife','invasive species','extinction','endangered']),
        S('ES.U3.T04','In-situ and ex-situ conservation','conservation of biodiversity: In- Situ and Ex-situ conservation','mid2',['in-situ','ex-situ','insitu','exsitu','conservation','biosphere reserve','national park','sanctuary','seed bank','zoo','botanical garden']),
      ]},
      4: { title: 'Environmental Pollution and Control Technologies', topics: [
        S('ES.U4.T01','Classification of pollution and pollutants; soil pollution','Classification of pollution and pollutants. Soil Pollution: Impacts of modern agriculture, degradation of soil','sem',['pollution','pollutant','primary pollutant','secondary pollutant','soil pollution','soil degradation','fertilizer','pesticide','modern agriculture']),
        S('ES.U4.T02','Wastewater treatment: primary, secondary and tertiary','Pollution control technologies: Wastewater Treatment: Primary, secondary and Tertiary treatment','sem',['wastewater','sewage','primary treatment','secondary treatment','tertiary treatment','activated sludge','trickling filter','sedimentation','disinfection','bod','do']),
        S('ES.U4.T03','Climate change and its impacts','Climate change and its impacts on human environment','sem',['climate change','global warming','greenhouse','ghg','carbon dioxide','methane','sea level','impact of climate']),
        S('ES.U4.T04','Ozone depletion and ozone-depleting substances','Ozone depletion and Ozone depleting substances (ODS)','sem',['ozone','ozone depletion','ods','chlorofluorocarbon','cfc','ozone hole','montreal']),
        S('ES.U4.T05','Kyoto Protocol and Montreal Protocol','International conventions / Protocols: Kyoto protocol, and Montréal Protocol','sem',['kyoto','montreal','protocol','convention','cop','unfccc']),
      ]},
      5: { title: 'Environmental Policy, Legislation and EIA', topics: [
        S('ES.U5.T01','Environmental Protection Act','Environmental Protection act','sem',['environment protection act','environmental protection act','epa 1986','umbrella act']),
        S('ES.U5.T02','Air Act 1981 and Water Act','Legal aspects Air Act-1981, and Water Act','sem',['air act','water act','air pollution act','water pollution act','1981','1974']),
        S('ES.U5.T03','EIA: structure and baseline data acquisition','Environmental Impact Assessment (EIA): Structure, methods of baseline data acquisition','sem',['eia','environmental impact assessment','baseline data','screening','scoping','impact prediction','public hearing','environmental management plan']),
        S('ES.U5.T04','Sustainable development, green chemistry, green building and low-carbon lifestyle','Sustainable development: Concept and threats to sustainable development, Green chemistry principles, Green building, low carbon life style','sem',['sustainable development','sustainability','green chemistry','green building','low carbon','brundtland','sdg']),
      ]},
    }
  },
};

// Build ordered JSON
const out = { regulation: 'MR-25', institution: 'MGIT (Autonomous)', programme: 'B.Tech CSE Semester III', source: 'docs/_work/syllabus-test.pdf (official MGIT scheme + III semester course content)', subjects: {} };
for (const [sub, info] of Object.entries(data)) {
  out.subjects[sub] = { name: info.name, code: info.code, units: {} };
  for (const [u, unit] of Object.entries(info.units)) {
    out.subjects[sub].units[u] = { title: unit.title, topics: unit.topics };
  }
}
fs.writeFileSync(path.join(__dirname, '..', '..', 'content-audit', 'syllabus_map.json'), JSON.stringify(out, null, 2));
console.log('wrote syllabus_map.json');
let n = 0; for (const s of Object.values(out.subjects)) for (const u of Object.values(s.units)) n += u.topics.length;
console.log('topics', n);
