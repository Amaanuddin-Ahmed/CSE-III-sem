# MGIT PYQ Hub — Administrator & Reviewer Guide

## 1. Accessing the Admin Console
- Navigate to `/admin` or click the unobtrusive **Login as Admin** link in the website footer.
- Authentication uses Supabase Auth with dedicated administrator credentials or a protected environment password.
- Ordinary students do not need to sign in and will never see moderation controls.

---

## 2. Moderation Workflow
1. **Review Pending Contributions:**
   - Go to **Admin Dashboard** > **Contributions Queue**.
   - Inspect the uploaded PDF or image, verified subject, and chapter claim.
   - Click **Approve** (routes file to Google Drive and marks record as approved) or **Reject** with a brief reason.
2. **Managing Drive Folder Mappings:**
   - Check the **Drive Mappings** tab to verify that subject IDs correctly link to their respective Google Drive folder IDs.
   - For newly created subjects or semester additions, map the folder ID here.
3. **Unpublishing Question Papers or Notes:**
   - If an approved document contains copyrighted material, errors, or personal data, toggle `is_approved = false` to remove it immediately from public browsing without deleting the file.
