# 🏛️ MGIT PYQ Hub — CSE Semester III

[![Curriculum](https://img.shields.io/badge/Curriculum-MGIT%20%7C%20CSE%20Semester%20III-1e3a8a.svg)](https://mgit.ac.in)
[![Source Drive](https://img.shields.io/badge/Google%20Drive-101%20Verified%20Files-2563eb.svg)](https://drive.google.com/drive/folders/1v_S2vjhz1mAkgfUk1WHkxIcyEMS_RlNr?usp=sharing)
[![License: MIT](https://img.shields.io/badge/License-MIT-slate.svg)](LICENSE)

> **Your all-in-one platform for MGIT CSE Semester III Previous Year Questions, Notes and Study Resources.**

---

## 📖 Overview

**MGIT PYQ Hub** is a clean, formal web application specifically engineered for **Mahatma Gandhi Institute of Technology (MGIT)** Computer Science and Engineering students (B.Tech II Year, Semester I / Semester III).

Instead of sifting through fragmented folders, handwritten copies, or unorganized PDFs, MGIT PYQ Hub organizes **101 authentic past papers and lecture notes** from the official SEM 3 Google Drive repository into a streamlined, accessible academic interface.

---

## 📚 Subject Coverage (MGIT CSE Semester III)

The platform strictly covers all **7 syllabus subjects**, each organized with dedicated **Notes** and **PYQs** subfolders:

| Subject | Short Code | Verified Past Papers | Notes & Materials | Direct Drive Links |
| :--- | :---: | :---: | :---: | :---: |
| Discrete Mathematics | `DM` | 24 Papers (PDF/Scanned) | Ready for Contributions | Dedicated Notes & PYQs Folders |
| Computer Organization & Architecture | `COA` | 21 Past Papers | 2 Verified Unit Notes | Dedicated Notes & PYQs Folders |
| Object-Oriented Programming through Java | `OOPJ` | 20 Past Papers | 14 Verified Notes & Question Banks | Dedicated Notes & PYQs Folders |
| Database Management Systems | `DBMS` | 12 Past Papers | 1 Comprehensive Units 1–3 Guide | Dedicated Notes & PYQs Folders |
| Software Engineering | `SE` | 17 Past Papers | Ready for Contributions | Dedicated Notes & PYQs Folders |
| Environmental Studies | `ES` | 3 Papers & Solution Keys | 4 Comprehensive Unit Notes | Dedicated Notes & PYQs Folders |
| Innovation and Entrepreneurship | `I&E` | Drive Bank Initialized | Ready for Contributions | Dedicated Notes & PYQs Folders |

---

## ✨ Key Features & Architecture

### 1. Two-Step Subject Navigation
- **Focused Study Category Selection**: When a student selects any subject, the hub presents two clear, tactile choice cards:
  - **[ 📄 Notes & Resources ]**: Unit-wise lecture notes, question bank answers, and faculty slides.
  - **[ 📚 Previous Year Questions (PYQs) ]**: Curated semester exam questions with recurrence tracking, filters, and direct PDF links.
- **Dynamic Category Breadcrumb**: Once inside a category, students can toggle between Notes and PYQs with a single click, or return to choose another subject.

### 2. Direct-to-Paper PDF Links
- Every question card links directly to its verified Google Drive question paper PDF (`driveFileId`), eliminating the need to browse through dozens of unorganized files.

### 3. Integrated Google Gemini AI Study Assistant
- Uses a server-side Gemini proxy (`/api/gemini`) so students can use the study assistant without exposing the API key in browser code. Configure `GEMINI_API_KEY` privately in Vercel.
- Delivers academic concept explanations, code implementations, formula derivations, and university examination scoring blueprints.

### 4. Modern, Human-Centric Typography
- Crafted with modern fonts (**Plus Jakarta Sans** and **Inter**) with comfortable line-height, soft borders, and zero AI-generated visual clutter.

### 5. Flexible Multi-Format Contributions
- Students can contribute study notes, question papers, and assignment solutions supporting **PDF, Word (.docx), PowerPoint (.pptx), and Images**.
- Removed roll number requirement to ensure privacy and frictionless contribution. All submissions enter a secure moderation queue.

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
