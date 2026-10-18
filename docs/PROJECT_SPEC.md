# MGIT PYQ Hub — Project Specification

## 1. Executive Summary
MGIT PYQ Hub is a mobile-first, public academic resource web application designed for students of Mahatma Gandhi Institute of Technology (MGIT), Computer Science and Engineering, Semester III. It enables students to browse past examination questions, study chapter-wise notes, identify historically recurring question patterns, generate mock papers, and consult an AI assistant for structured question walkthroughs.

## 2. Core Stakeholders & Users
- **Primary Users:** MGIT B.Tech CSE Semester III students preparing for mid-term and semester-end examinations.
- **Student Contributors:** Students uploading newly released question papers, answer keys, or chapter notes.
- **Admin / Reviewer:** Project maintainer (Amaan) verifying student submissions, managing Drive folder mappings, and moderating public content.

## 3. Scope & Coverage
The initial release covers Semester III CSE across the 7 subjects identified in the verified Google Drive archive (`SEM 3` / `1v_S2vjhz1mAkgfUk1WHkxIcyEMS_RlNr`):
1. **COA:** Computer Organization and Architecture (23 files)
2. **DM:** Discrete Mathematics (24 files)
3. **DBMS:** Database Management Systems (12 files)
4. **OOP:** Object-Oriented Programming through Java (20 files)
5. **SE:** Software Engineering (17 files)
6. **ES:** Environmental Science (5 files)
7. **I&E:** Innovation and Entrepreneurship (0 files — contribution prompt)

## 4. Key Functional Requirements
- **Unauthenticated Public Browsing:** No login required for students to search, filter, read questions, or inspect verified notes.
- **Multi-Facet Question Explorer:** Combined filtering by Subject, Chapter/Unit, Exam Year (2020–2024), Exam Session (Regular / Supplementary), and Section (Part A: 2 Marks vs Part B: 10 Marks).
- **Historical Recurrence Analysis:** Classify questions into Exact Repeat, Near-Variant, or Conceptual Overlap with historical frequency metrics.
- **Traceability to Original Source:** Every extracted question links directly to the authoritative PDF in Google Drive with page number indicator.
- **Mock Exam Generator:** Generates full-length 70-mark question papers adhering to the MGIT Autonomous blueprint with 1-click print/PDF export.
- **Student Contribution Flow:** Upload interface with rate-limiting, MIME validation, and an asynchronous moderation queue.
- **Gemini Assistant:** Context-grounded explanation assistant operating strictly through server-side endpoints.
