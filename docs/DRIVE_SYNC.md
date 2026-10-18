# MGIT PYQ Hub — Google Drive Integration & Sync

## 1. Archive Architecture
- **Root Folder:** `SEM 3`
- **Root Folder ID:** `1v_S2vjhz1mAkgfUk1WHkxIcyEMS_RlNr`
- **Public URL:** `https://drive.google.com/drive/folders/1v_S2vjhz1mAkgfUk1WHkxIcyEMS_RlNr?usp=sharing`
- **Sharing Mode:** `Anyone with the link — Viewer`

---

## 2. Subject Folder Mapping (101 Verified Items)

| Subject | Code | Drive Folder ID | Item Count | Breakdown |
| :--- | :--- | :--- | :--- | :--- |
| **C.O.A** | `CS302PC` | `1axgSIkJ5-WfD_xZpna8KFKnNxcaZ0AyX` | 23 | 21 Past Papers (PDF) + 2 Study Notes |
| **D.M** | `CS303PC` | `1x4QjKc-CXLoCSDTqi6H2NUCtExuBkAMU` | 24 | 22 Past Papers (PDF) + 2 Scanned Photos |
| **DBMS** | `CS304PC` | `1Af4RdwkOHfK-lM8SuNoeao0aPYiIf6hc` | 12 | 12 Past Papers (PDF) |
| **ES** | `MC301ES` | `1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0` | 5 | 3 Exam Papers + 2 Study Notes (Unit 1, 2) |
| **O.O.P** | `CS305PC` | `1WbWPKT2RWOdEQttkny0cwTHYTM4g62vP` | 20 | 20 Java Past Papers (PDF) |
| **S.E** | `CS306PC` | `16MpaH50OsmOKyAse1V5oQB7vdDqKYQqX` | 17 | 17 Past Papers (PDF) |
| **I&E** | `MC302IE` | *Unassigned* | 0 | Sparse bank with student contribution prompt |

---

## 3. Operational Rules
1. **Source Preservation:** The original Google Drive folder is strictly read-only for sync and linking. No files may be renamed, moved, or deleted.
2. **Deep-linking to Original Documents:** The frontend constructs direct viewer links:
   `https://drive.google.com/file/d/{DRIVE_FILE_ID}/view`
3. **Handling Contributed Uploads:** When approved by an admin, new student uploads are uploaded to Google Drive via service account into designated subject/year subfolders, and the resulting file ID is stored in Supabase.
