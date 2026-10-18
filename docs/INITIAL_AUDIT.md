# MGIT PYQ Hub — Phase 0 Initial Audit Report

**Date of Execution:** 2026-10-19  
**Specification Reference:** [MGIT_PYQ_HUB_MASTER_SPEC.md](file:///c:/Users/DELL/OneDrive/Desktop/Exm%20prep/CSE-III-sem-1/MGIT_PYQ_HUB_MASTER_SPEC.md)  
**Status:** Audit Complete — Phase 0 Only (No destructive actions, no schema modifications, no secrets exposed, no deployments).

---

## 1. Local Repository State

- **Repository Location:** `c:\Users\DELL\OneDrive\Desktop\Exm prep\CSE-III-sem-1`
- **Remote Origin:** `https://github.com/Amaanuddin-Ahmed/CSE-III-sem`
- **Active Git Branch:** `main` (clean working tree, up to date with `origin/main`).
- **Commit History:**
  - `5259873` — *Started with a fresh folder -V1*
  - `341ae1a` — *Initial commit*
- **Existing Files:**
  - [MGIT_PYQ_HUB_MASTER_SPEC.md](file:///c:/Users/DELL/OneDrive/Desktop/Exm%20prep/CSE-III-sem-1/MGIT_PYQ_HUB_MASTER_SPEC.md): Full master specification (1874 lines).
  - [README.md](file:///c:/Users/DELL/OneDrive/Desktop/Exm%20prep/CSE-III-sem-1/README.md): Initial repository placeholder.
  - [myuse.txt](file:///c:/Users/DELL/OneDrive/Desktop/Exm%20prep/CSE-III-sem-1/myuse.txt): Empty file (0 bytes, non-mandatory; proposed for deletion in Phase 1).

---

## 2. Supabase Project & Schema Evidence

- **Project API URL:** `https://nnqhtpuylejrahgfklzw.supabase.co`
- **Project Reference:** `nnqhtpuylejrahgfklzw`
- **Dashboard URL:** `https://supabase.com/dashboard/project/nnqhtpuylejrahgfklzw`
- **MCP Connectivity:** Verified live via Supabase MCP tools in read-only mode.
- **Database Public Tables:** None (`tables: []`).
- **Applied Migrations:** None (`migrations: []`).
- **Storage Buckets:** None (`storage.buckets: []`).
- **Installed Extensions:**
  - `supabase_vault` (v0.3.1)
  - `uuid-ossp` (v1.1)
  - `pgcrypto` (v1.3)
  - `plpgsql` (v1.0)
  - `pg_stat_statements` (v1.11)
- **Region Verification Requirement:**  
  The project is expected to be in South Asia (Mumbai) `ap-south-1`. Because the project URL does not encode region information, the owner must verify the region label in [Supabase Infrastructure Settings](https://supabase.com/dashboard/project/nnqhtpuylejrahgfklzw/settings/infrastructure).

---

## 3. Google Drive Source Inventory

- **Drive CLI Auth Status:** `Not logged in` (the background `gdrive auth status` check confirms no local CLI credentials exist).
- **Public Folder Read Access:** Successfully retrieved and inventoried via public link `https://drive.google.com/drive/folders/1v_S2vjhz1mAkgfUk1WHkxIcyEMS_RlNr?usp=sharing`.
- **Root Folder Name:** `SEM 3` (Folder ID: `1v_S2vjhz1mAkgfUk1WHkxIcyEMS_RlNr`).
- **Subfolders & Items Discovered:**
  1. `C.O.A` (Folder ID: `1axgSIkJ5-WfD_xZpna8KFKnNxcaZ0AyX`) — **23 items**: 21 past papers (PDF) + 2 study notes (`Unit 1.pdf`, `Unit 1 Actual.pdf`).
  2. `D.M` (Folder ID: `1x4QjKc-CXLoCSDTqi6H2NUCtExuBkAMU`) — **24 items**: 22 past papers (PDF) + 2 photos (`Maths 2.jpeg`, `Maths 26 MR 22.jpeg`).
  3. `DBMS` (Folder ID: `1Af4RdwkOHfK-lM8SuNoeao0aPYiIf6hc`) — **12 items**: 12 past papers (PDF).
  4. `ES` (Folder ID: `1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0`) — **5 items**: 3 papers/keys (PDF) + 2 study notes (`Unit 1.pdf`, `Unit 2.pdf`).
  5. `O.O.P` (Folder ID: `1WbWPKT2RWOdEQttkny0cwTHYTM4g62vP`) — **20 items**: 20 Java past papers (PDF).
  6. `S.E` (Folder ID: `16MpaH50OsmOKyAse1V5oQB7vdDqKYQqX`) — **17 items**: 17 past papers (PDF).
  7. `I&E` (Innovation and Entrepreneurship) — **0 items**: Not present in source Drive folder. Will remain empty with student contribution prompt.
- **Total Files Inventoried:** **101 files**. Complete inventory table saved at [docs/inventory/source_drive_inventory.md](file:///c:/Users/DELL/OneDrive/Desktop/Exm%20prep/CSE-III-sem-1/docs/inventory/source_drive_inventory.md).
- **Integrity Guarantee:** No files have been renamed, moved, downloaded, or altered in Google Drive.

---

## 4. Unknowns & Clarifications

1. **Official Syllabus / Regulation:** An official MGIT syllabus/curriculum document for CSE Semester III will help confirm unit boundaries, unit names, and Course Outcome (`CO`) mapping rules.
2. **File Structure / Dual Resource Types:** `C.O.A` and `ES` contain both full PYQ papers and individual Unit Notes in the same folder. Routing rules in the database must classify them separately.
3. **JPEG / Photo Quality:** Two items in `D.M` are JPEGs rather than standard PDFs.
4. **Admin Login Email:** The owner will configure a private email for the administrator account (`ADMIN_LOGIN_EMAIL`) via server environment settings.

---

## 5. Risks & Mitigation Plan

| Risk | Impact | Mitigation Strategy |
|------|--------|---------------------|
| Gemini Free-Tier Quota Exhaustion | Ingestion failure if 100+ PDFs are batch-processed simultaneously | Run OCR ingestion in small, resumable pilots (3–5 papers first) with caching and exponential backoff. Keep live question browsing independent of Gemini. |
| Mixed PYQ and Notes in Same Folder | Wrong classification or navigation confusion | Use filename heuristics and manual admin verification queue to separate notes from full papers before publishing. |
| Accidental Secret Leaks | Critical security exposure | Commit only `.env.example` with harmless placeholders. Ensure `.env.local` is in `.gitignore` and verified before every commit. |
| Premature Production Publishing | Bad/hallucinated academic data visible to students | Strict separation: all extracted questions and student contributions remain in `review_required` / `pending` status until admin approval. |

---

## 6. Proposed Exact Next Steps (Phase 1)

1. **Delete Non-Mandatory Empty File:** Remove `myuse.txt` after user verification.
2. **Scaffold Project Infrastructure:**
   - Initialize Next.js 14/15 + TypeScript + Tailwind CSS framework.
   - Configure `.gitignore` with strict secret-exclusion rules.
   - Create `.env.example` with harmless placeholder variable names.
   - Create top-level `AGENTS.md` and custom skill `.agents/skills/mgit-pyq-hub/SKILL.md`.
3. **Scaffold Core Documentation in `docs/`:**
   - `docs/PROJECT_SPEC.md`
   - `docs/ARCHITECTURE.md`
   - `docs/DATABASE_SCHEMA.md`
   - `docs/DATA_INGESTION.md`
   - `docs/DRIVE_SYNC.md`
   - `docs/GEMINI_AI.md`
   - `docs/SECURITY.md`
   - `docs/ADMIN_GUIDE.md`
   - `docs/BACKUP_RESTORE.md`
   - `docs/DEPLOYMENT.md`
   - `docs/ANALYTICS.md`
   - `docs/TESTING.md`
   - `docs/TROUBLESHOOTING.md`
4. **Prepare SQL Migration Files in `supabase/migrations/`:**
   - Write clean, reviewed PostgreSQL DDL for tables, constraints, indexes, RLS policies, and admin roles.
   - Present migrations for user review before execution.
