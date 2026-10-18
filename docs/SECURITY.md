# MGIT PYQ Hub — Security & Threat Modeling

## 1. Secrets Handling Policy
- **No Secrets in Version Control:** `.env`, `.env.local`, credentials JSON files, and private keys are strictly blocked via `.gitignore`.
- **Exposed Key Protocol:** If any secret is accidentally pasted in a chat or commit, it must be treated as compromised immediately, rotated in the provider dashboard, and wiped from git history.
- **Environment Isolation:** Secrets live exclusively in local `.env.local` (developer machine) and Vercel Environment Variables (production).

---

## 2. API & Upload Security
- **File Validation on Contributed Uploads:**
  - Allowed MIME types: `application/pdf`, `image/jpeg`, `image/png`.
  - Maximum upload size: 15 MB per file.
  - File extension and magic number binary header inspection before routing.
- **Rate Limiting:**
  - Public submission endpoints enforce IP-based rate limiting (maximum 5 uploads per hour per IP) using Upstash Redis or memory cache.
  - Spam and automated bot submissions are prevented with Cloudflare Turnstile or reCAPTCHA v3.
- **Moderation Sandbox:** All student uploads enter the `contributions` table with `status = 'pending'` and are inaccessible to public visitors until an admin manually approves them.

---

## 3. Database & Row Level Security (RLS)
- Supabase RLS is enabled on all public tables.
- Public read access is strictly filtered by `is_approved = true`.
- Deletion and update privileges are denied for anonymous visitors and allowed only via service-role server endpoints.
