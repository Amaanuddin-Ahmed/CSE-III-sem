import json
import re

# 1. Load pyq-data.js and add the 9 new notes to NOTES_DATA
with open("pyq-data.js", "r", encoding="utf-8") as f:
    pyq_content = f.read()

# Update notesCount in SUBJECTS_DATA.COA
pyq_content = re.sub(
    r'("COA":\s*\{[^}]*"notesCount":\s*)\d+',
    r'\g<1>28',
    pyq_content
)

new_notes = [
  {
    "id": "NOTE-COA-20",
    "subjectId": "COA",
    "chapter": 3,
    "title": "COA Unit 3: Basic Computer Organization & RTL",
    "fileName": "COA Unit 3 - Basic Computer Organization.pdf",
    "fileSize": "4.2 MB",
    "driveFileId": "1xhpvC4T0M2F3_uN1zsav9yGsm5PQafQP",
    "folderUrl": "https://drive.google.com/drive/folders/1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x",
    "description": "Comprehensive Unit 3 notes covering Basic Computer Organization, Instruction Codes, Registers, Timing & Control, Instruction Cycle, Memory-Reference Instructions, and Interrupts."
  },
  {
    "id": "NOTE-COA-21",
    "subjectId": "COA",
    "chapter": 4,
    "title": "COA Unit 4: Microprogrammed Control, CPU & Arithmetic",
    "fileName": "COA Unit 4 - Microprogrammed Control, CPU & Arithmetic.pdf",
    "fileSize": "5.1 MB",
    "driveFileId": "1WruGyxZOkj6CRDu_3hLEyfCZr124wlkY",
    "folderUrl": "https://drive.google.com/drive/folders/1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x",
    "description": "Complete Unit 4 guide covering Microprogrammed Control (control memory, address sequencing), Central Processing Unit (general register organization, addressing modes), and Computer Arithmetic (Booth's multiplication & division)."
  },
  {
    "id": "NOTE-COA-22",
    "subjectId": "COA",
    "chapter": 5,
    "title": "COA Unit 5: I/O Organization & Memory Hierarchy",
    "fileName": "COA Unit 5 - IO & Memory Organization.pdf",
    "fileSize": "4.8 MB",
    "driveFileId": "1sSN9DCdAt-nHofelFY60ORDB2MPLQaOp",
    "folderUrl": "https://drive.google.com/drive/folders/1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x",
    "description": "Complete Unit 5 notes covering Input-Output Organization (peripheral devices, interface, DMA, priority interrupts) and Memory Organization (hierarchy, cache mapping, virtual memory, cache coherence)."
  },
  {
    "id": "NOTE-COA-23",
    "subjectId": "COA",
    "chapter": 5,
    "title": "COA Unit 5: Input-Output Organization (Detailed Class Notes)",
    "fileName": "Input Output Organization.pdf",
    "fileSize": "2.4 MB",
    "driveFileId": "18dWWsJwuNHhkeiMqM6YDTi_2LCfZ7fsN",
    "folderUrl": "https://drive.google.com/drive/folders/1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x",
    "description": "Detailed lecture notes dedicated to Peripheral Devices, I/O Interface Units, Handshaking/Strobe Asynchronous Transfer, Daisy Chain Priority Interrupt, and Direct Memory Access (DMA)."
  },
  {
    "id": "NOTE-COA-24",
    "subjectId": "COA",
    "chapter": 5,
    "title": "COA Unit 5: Memory Organization (Classroom PPT)",
    "fileName": "Memory_Organization_Class_PPT.pdf",
    "fileSize": "3.2 MB",
    "driveFileId": "10MPj03F-qgsdpkw-YGtLk6HERmg5Se3j",
    "folderUrl": "https://drive.google.com/drive/folders/1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x",
    "description": "Classroom slide deck covering Memory Hierarchy, Main Memory RAM/ROM chips, Associative Memory hardware, Cache Memory Direct/Associative/Set-Associative Mapping, and Paging."
  },
  {
    "id": "NOTE-COA-25",
    "subjectId": "COA",
    "chapter": 3,
    "chapters": [3, 4, 5],
    "title": "COA Mid-2 Assignment 2 & Model Questions",
    "fileName": "COA ASSIGNMENT 2.pdf",
    "fileSize": "1.2 MB",
    "driveFileId": "16ZpwA-M20ubZXURbjleGoTPTA52TmlmS",
    "folderUrl": "https://drive.google.com/drive/folders/1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x",
    "description": "Official MGIT Mid-2 Assignment 2 covering high-yield long and short numerical and analytical questions from Units 3, 4, and 5 with step-by-step model solutions."
  },
  {
    "id": "NOTE-COA-26",
    "subjectId": "COA",
    "chapter": 3,
    "chapters": [1, 2, 3, 4, 5],
    "title": "COA Unit-wise Question Bank with Answers (Units 1–5)",
    "fileName": "COA-Unitwise Question Bank with Answers..pdf",
    "fileSize": "6.5 MB",
    "driveFileId": "11NPKrShqUBi80IeyziAgL2Mqvutgi2qD",
    "folderUrl": "https://drive.google.com/drive/folders/1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x",
    "description": "Comprehensive university question bank containing previous examination questions organized unit-by-unit (Units 1 to 5) with model university exam answers and diagrams."
  },
  {
    "id": "NOTE-COA-27",
    "subjectId": "COA",
    "chapter": 4,
    "chapters": [1, 2, 3, 4, 5],
    "title": "COA Complete Questions Bank (Units 1–5)",
    "fileName": "COA Complete questions.PDF",
    "fileSize": "2.8 MB",
    "driveFileId": "1jmdCc6ovYAbW5OviNf2tCxSSzMofQvxw",
    "folderUrl": "https://drive.google.com/drive/folders/1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x",
    "description": "Master compilation of external university and mid-exam questions across all five units for comprehensive practice and revision."
  },
  {
    "id": "NOTE-COA-28",
    "subjectId": "COA",
    "chapter": 5,
    "chapters": [1, 2, 3, 4, 5],
    "title": "COA Comprehensive Question Bank (Short & Long)",
    "fileName": "COA qstn bank.PDF",
    "fileSize": "3.4 MB",
    "driveFileId": "1_UgGuGEsdpZsUobfc9MKONgZM2Ru2GXG",
    "folderUrl": "https://drive.google.com/drive/folders/1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x",
    "description": "Question bank covering two-mark and five-mark questions with answers across syllabus units for rapid exam preparation."
  }
]

# Format JSON block for new notes
new_notes_json = ",\n" + ",\n".join(json.dumps(n, indent=2) for n in new_notes)

# Insert before `];\n\nconst QUESTIONS_DATABASE = [`
target_str = '];\n\nconst QUESTIONS_DATABASE = ['
if target_str in pyq_content:
    pyq_content = pyq_content.replace(target_str, new_notes_json + '\n' + target_str)
    with open("pyq-data.js", "w", encoding="utf-8") as f:
        f.write(pyq_content)
    print("Successfully added 9 new notes to pyq-data.js!")
else:
    print("ERROR: Could not find target insertion point in pyq-data.js")
