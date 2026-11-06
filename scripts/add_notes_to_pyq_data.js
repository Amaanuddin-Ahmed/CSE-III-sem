const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../pyq-data.js');
let content = fs.readFileSync(targetPath, 'utf8');

const newNotes = [
  {
    "id": "NOTE-DM-22",
    "subjectId": "DM",
    "chapter": 4,
    "title": "DM Unit 4: Basics of Counting (Part A Alternate)",
    "fileName": "Elementary combinatorics-Unit-IV-Basics of Counting-Part-A.pdf",
    "fileSize": "2.2 MB",
    "driveFileId": "1Td2zWkBVV6cQDcyPtzB9e9aJKlU-C442",
    "folderUrl": "https://drive.google.com/drive/folders/1XXvoFAhADv1nh8oteiHOTj1mZ2f72fIM",
    "description": "Unit 4 lecture deck focusing on the sum rule, product rule, subtraction rule (inclusion-exclusion principle), division rule, and Pigeonhole Principle with worked combinatorial examples."
  },
  {
    "id": "NOTE-DBMS-09",
    "subjectId": "DBMS",
    "chapter": 5,
    "title": "DBMS Unit 5: Hashing, Indexing & B+ Trees (Lecture Slides)",
    "fileName": "Unit 5 Hashing,B+ Tress.ppt",
    "fileSize": "3.8 MB",
    "driveFileId": "1FOJmovEWb5u_9QViyMkkmrJh9rp2LIbZ",
    "folderUrl": "https://drive.google.com/drive/folders/1DCTxebYJ3A3H2MMmZxNQEdYP-PS6w7jJ",
    "description": "University lecture presentation on file organization, static vs extendible hashing, linear hashing, primary and secondary indexes, dense vs sparse indexes, and B+ tree search, insert, and delete operations."
  },
  {
    "id": "NOTE-DBMS-10",
    "subjectId": "DBMS",
    "chapter": 4,
    "chapters": [1, 2, 3, 4, 5],
    "title": "DBMS Comprehensive Unit-wise Question Bank (Units 1–5)",
    "fileName": "DBMS_Important_QuestionBank.docx",
    "fileSize": "240 KB",
    "driveFileId": "1g-nBIf98gWHRdRKDaZSPEYoLYyx3QDof",
    "folderUrl": "https://drive.google.com/drive/folders/1DCTxebYJ3A3H2MMmZxNQEdYP-PS6w7jJ",
    "description": "Official department question bank with high-yield exam questions, conceptual derivations, ER modeling problems, normalization exercises, and transaction schedules."
  },
  {
    "id": "NOTE-DBMS-11",
    "subjectId": "DBMS",
    "chapter": 4,
    "chapters": [1, 2, 3, 4, 5],
    "title": "DBMS Objective Question Bank: MCQs & Fill-in-the-Blanks",
    "fileName": "MCQS and Blanks.docx",
    "fileSize": "180 KB",
    "driveFileId": "1_ZsydtyJ0rptHOv8v4yuuHZx6kd_pmbu",
    "folderUrl": "https://drive.google.com/drive/folders/1DCTxebYJ3A3H2MMmZxNQEdYP-PS6w7jJ",
    "description": "Curated bank of multiple-choice questions, fill-in-the-blanks, and terminology definitions designed for rapid mid-term and semester-end objective tests."
  }
];

// Check if already in pyq-data.js
for (const n of newNotes) {
  if (content.includes(`"id": "${n.id}"`)) {
    console.log(`Note ${n.id} already in pyq-data.js`);
  } else {
    // Append right before the closing bracket of NOTES_DATA
    const match = content.match(/const NOTES_DATA = \[[\s\S]*?\n\];/);
    if (!match) {
      console.error('Could not find NOTES_DATA in pyq-data.js');
      process.exit(1);
    }
    const insertPos = content.indexOf('\n];\n\nconst QUESTIONS_DATABASE') !== -1 
      ? content.indexOf('\n];\n\nconst QUESTIONS_DATABASE')
      : content.lastIndexOf('\n];');

    const formatted = ',\n' + JSON.stringify(n, null, 2).split('\n').map(l => '  ' + l).join('\n');
    content = content.slice(0, insertPos) + formatted + content.slice(insertPos);
    console.log(`Added ${n.id} to pyq-data.js`);
  }
}

fs.writeFileSync(targetPath, content, 'utf8');
console.log('pyq-data.js successfully updated.');
