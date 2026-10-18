# MGIT PYQ Hub — Deployment Guide

## 1. Vercel Deployment (Production App)
1. **Connect GitHub:**
   - Log in to [Vercel](https://vercel.com).
   - Click **Add New** > **Project** and import `Amaanuddin-Ahmed/CSE-III-sem`.
2. **Configure Environment Variables:**
   Under **Project Settings** > **Environment Variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL`: `https://nnqhtpuylejrahgfklzw.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: *(From Supabase Dashboard)*
   - `SUPABASE_SERVICE_ROLE_KEY`: *(From Supabase Dashboard)*
   - `GEMINI_API_KEY`: *(From Google AI Studio)*
   - `NEXT_PUBLIC_DRIVE_ROOT_FOLDER_ID`: `1v_S2vjhz1mAkgfUk1WHkxIcyEMS_RlNr`
   - `ADMIN_SECRET_KEY`: *(Your private admin secret)*
3. **Deploy:** Click **Deploy**. Vercel will build and assign your production domain.

---

## 2. GitHub Pages Deployment (Static Client Alternative)
1. Open [Amaanuddin-Ahmed/CSE-III-sem](https://github.com/Amaanuddin-Ahmed/CSE-III-sem).
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main` / `root`
4. Click **Save**. The static client will be accessible at:
   `https://Amaanuddin-Ahmed.github.io/CSE-III-sem/`
