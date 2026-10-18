# 🏛️ MGIT PYQ Hub — CSE Semester III

[![Curriculum](https://img.shields.io/badge/Curriculum-MGIT%20Autonomous%20%7C%20CSE%20Semester%20III-1e3a8a.svg)](https://mgit.ac.in)
[![Source Drive](https://img.shields.io/badge/Google%20Drive-101%20Verified%20Files-2563eb.svg)](https://drive.google.com/drive/folders/1v_S2vjhz1mAkgfUk1WHkxIcyEMS_RlNr?usp=sharing)
[![License: MIT](https://img.shields.io/badge/License-MIT-slate.svg)](LICENSE)

> **Your all-in-one platform for MGIT CSE Semester III Previous Year Questions, Notes and Study Resources.**

---

## 📖 Overview

**MGIT PYQ Hub** is a clean, formal web application specifically engineered for **Mahatma Gandhi Institute of Technology (MGIT)** Computer Science and Engineering students (B.Tech II Year, Semester I / Semester III).

Instead of sifting through fragmented folders, handwritten copies, or unorganized PDFs, MGIT PYQ Hub organizes **101 authentic past papers and lecture notes** from the official SEM 3 Google Drive repository into a streamlined, accessible academic interface.

---

## 📚 Subject Coverage (MGIT CSE Semester III)

The platform strictly covers all **7 syllabus subjects**:

| Code | Subject | Short Code | Verified Drive Files | Notes Available |
| :--- | :--- | :---: | :---: | :---: |
| **CS303PC** | Discrete Mathematics | `DM` | 24 Items (22 PYQs + 2 Scanned) | Contribution Mode |
| **CS302PC** | Computer Organization & Architecture | `COA` | 23 Items (21 PYQs + 2 Notes) | Unit 1 Notes Verified |
| **CS305PC** | Object-Oriented Programming through Java | `OOPJ` | 20 Java Past Papers | Contribution Mode |
| **CS301PC** | Database Management Systems | `DBMS` | 12 Past Papers | Contribution Mode |
| **CS304PC** | Software Engineering | `SE` | 17 Past Papers | Contribution Mode |
| **MC301HS** | Environmental Studies | `ES` | 5 Items (3 PYQs + 2 Notes) | Unit 1 & 2 Notes Verified |
| **MC302IE** | Innovation and Entrepreneurship | `I&E` | Drive Bank Pending | Open for Contributions |

---

## ✨ Key Features & Architecture

### 1. Clean, Formal Academic Design
- **Calm, Neutral Palette**: Built with a soft neutral gradient background (`#f7f9fa` to `#edf1f5`) ensuring crisp contrast without stark sterile white or harsh dark themes.
- **2-Column Responsive Grid**: Clear subject navigation with large subject icons, short codes, and resource metrics.
- **Zero Gimmicks**: Strictly avoids neon colors, distracting gradients, fake testimonials, and checkmark bullets.

### 2. Dynamic Google Drive Integration
- **Context-Aware Drive Navigation**: Top header features a prominent Drive button that automatically links to the **Entire SEM 3 PYQ Folder** (`1v_S2vjhz1mAkgfUk1WHkxIcyEMS_RlNr`) on the homepage, and dynamically adapts to the specific subject's Drive folder (e.g. COA, DM, OOPJ, DBMS, SE, ES) whenever that subject is opened.

### 3. Dual-Division Subject Exploration
When selecting any subject, the workspace opens into two focused divisions:
- **Notes & Resources**: Chapter-wise dropdown menu (Unit 1 to Unit 5, or All Chapters) displaying verified lecture notes with direct Google Drive view links.
- **Previous Year Questions (PYQs)**:
  - **Academic Year Checkboxes**: Filter questions interactively across years (2024, 2023, 2022, 2021, 2020, 2019) with a live dynamic count banner.
  - **Part A vs Part B Toggle**: Filter by Part A (2 Marks short questions) or Part B (5/10 Marks long answer essay questions).
  - **Question Detail Modal**: Clicking any question opens an in-depth analysis showing recurrence records, the exact source PDF paper name in Google Drive, page numbers, and concise tips (`Tip: ...`).

### 4. Controlled Student Contribution Workflow
- Every subject provides a **+ Contribute** action in both Notes and PYQs divisions.
- A **Contribution Guideline Pop-up** instructs contributors not to upload random or unverified files.
- Mobile and desktop file pickers support multiple-file selection (`.pdf`, `.png`, `.jpg`) with metadata tagging (Subject, Resource Type, Unit 1–5 or "Mixed", and Academic Year).
- All contributions are safely placed into a private moderation queue for verification.

### 5. Private Admin Portal
- Accessible via the **Login as Admin** button in the header.
- Displays live statistics, moderation review queue, and one-click Approve / Reject moderation controls.

### 6. Floating Gemini AI Study Assistant
- A subtle floating button in the bottom-right corner provides instant access to syllabus-aligned concept explanations and study tips.
- Interactive prompt chips for rapid guidance on COA Addressing Modes, DBMS Normalization, DM Recurrence Relations, and Java OOP principles.

### 7. Direct Feedback & Attribution
- Dedicated feedback division connecting directly to WhatsApp: [Got an Idea to Improve ? Let me know](https://wa.me/916303191696).
- Attribution: **Made by Amaan..**

---

## 📁 Repository Structure

```
CSE-III-sem/
├── index.html                   # Main single-page application interface
├── style.css                    # Formal academic light stylesheet
├── app.js                       # Interactive UI, filters, modal logic & admin queue
├── pyq-data.js                  # Authentic questions database, notes & Drive metadata
├── MGIT_PYQ_HUB_MASTER_SPEC.md  # Master product & technical specification
├── README.md                    # Project documentation
├── LICENSE                      # MIT License
├── .gitignore                   # Safe version control ignores
├── .env.example                 # Environment variables template
├── docs/                        # Complete Phase 0 & Phase 1 documentation
│   ├── PROJECT_SPEC.md
│   ├── ARCHITECTURE.md
│   ├── DATABASE_SCHEMA.md
│   ├── DATA_INGESTION.md
│   ├── DRIVE_SYNC.md
│   ├── GEMINI_AI.md
│   ├── SECURITY.md
│   ├── ADMIN_GUIDE.md
│   ├── BACKUP_RESTORE.md
│   ├── DEPLOYMENT.md
│   ├── ANALYTICS.md
│   ├── TESTING.md
│   ├── TROUBLESHOOTING.md
│   ├── INITIAL_AUDIT.md
│   └── inventory/
│       └── source_drive_inventory.md # 101-file verified Drive inventory
└── .agents/
    └── skills/
        └── mgit-pyq-hub/
            └── SKILL.md         # Antigravity operational skill
```

---

## 🚀 Getting Started

### Local Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Amaanuddin-Ahmed/CSE-III-sem.git
   cd CSE-III-sem
   ```
2. Open [`index.html`](index.html) in any modern web browser:
   - On Windows: Double-click `index.html` or run `start index.html` in PowerShell.

---

## 🔒 Security & Privacy Notice
- Never commit private API keys, administrator credentials, or `.env` secrets into Git.
- Student file uploads and database exports are held in private storage and strictly quarantined prior to administrative approval.

---

## 💬 Feedback & Connect

- **WhatsApp**: [Got an Idea to Improve ? Let me know](https://wa.me/916303191696)
- **Maintainer**: Amaan
