# AGENTS.md — Guidelines for Coding Agents & LLM Pair Programmers

## 1. Project Context
- **Project Name:** MGIT PYQ Hub
- **Purpose:** Public academic resource website for Mahatma Gandhi Institute of Technology (MGIT) CSE Semester III students.
- **Repository:** `https://github.com/Amaanuddin-Ahmed/CSE-III-sem`
- **Source of Truth:** [`MGIT_PYQ_HUB_MASTER_SPEC.md`](file:///c:/Users/DELL/OneDrive/Desktop/Exm%20prep/CSE-III-sem/MGIT_PYQ_HUB_MASTER_SPEC.md)
- **Primary Google Drive:** `https://drive.google.com/drive/folders/1v_S2vjhz1mAkgfUk1WHkxIcyEMS_RlNr?usp=sharing` (101 verified files across 6 subject subfolders + 1 empty/contribution bank).
- **Supabase Reference:** `nnqhtpuylejrahgfklzw` (`https://nnqhtpuylejrahgfklzw.supabase.co`).

---

## 2. Mandatory Rules for Agents

### 2.1 No Hallucination / Invention Policy
- Never invent real MGIT questions, exam years, repetition counts, paper links, or chapter allocations.
- Always use verified data from the 101 inventoried files or explicit student uploads.
- Do not promise "100% exam prediction" or "sure-shot" guarantees. Always describe recurring topics in terms of **historical frequency**.

### 2.2 Security & Secrets Protection
- **NEVER** print, request, echo, or commit API keys (`GEMINI_API_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_SECRET_KEY`) into conversation chat, GitHub, or source code.
- Always use `.env.example` placeholders. Instruct the owner to configure actual keys privately in `.env.local` or provider dashboards.
- All Gemini API calls using secret keys must occur **strictly server-side** (e.g. Next.js API route / Supabase Edge Function), never in client-side bundles.

### 2.3 Non-Destructive Operation Policy
- Never mass delete, move, or rename source files in Google Drive.
- Source PDFs are authoritative reference records. Always link to them using their stable Google Drive File IDs.
- Schema changes must be written as idempotent SQL migrations in `supabase/migrations/` and reviewed before application.

### 2.4 User Interface & Theme
- Provide a clean, elegant light mode with soft pastel accents and gentle gradient backgrounds so it is never harsh or pale.
- Ensure seamless mobile responsiveness for students using smartphones.
- Footer must include:
  - Exact attribution: **Made by Amaan**
  - Feedback link: **Got an idea? Help improve it** (`https://wa.me/916303191696`)
  - No public admin entry point. Contributions are reviewed out-of-band by the owner.

---

## 3. Custom Skill Reference
A specialized Antigravity skill for this repository is located at:
`.agents/skills/mgit-pyq-hub/SKILL.md`
