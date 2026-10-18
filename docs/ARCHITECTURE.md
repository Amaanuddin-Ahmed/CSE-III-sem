# MGIT PYQ Hub — Technical Architecture

```mermaid
flowchart TD
    Client["Student Browser / Mobile PWA"]
    
    subgraph Frontend["Frontend Layer (Next.js / Static SPA)"]
        UI["UI Components (Tailwind CSS, Light/Dark Theme)"]
        ClientState["Client State (LocalStorage Bookmarks & Solved Cache)"]
        Router["Subject & Question Navigation"]
    end

    subgraph Backend["Backend & Edge Layer (Vercel / Next.js API)"]
        PublicAPI["Public API (/api/questions, /api/subjects)"]
        GeminiProxy["Server-side Gemini Proxy (/api/gemini/explain)"]
        UploadHandler["Contribution Upload & Validation (/api/upload)"]
        AdminAuth["Admin Authentication Middleware"]
    end

    subgraph Storage["Cloud Data & Storage Layer"]
        SupabaseDB[("Supabase PostgreSQL (Mumbai ap-south-1)")]
        GoogleDrive[("Google Drive Public Folder (SEM 3 Archive)")]
        GeminiService["Google Gemini 1.5 Flash API"]
    end

    Client --> UI
    UI --> Router
    UI <--> ClientState
    UI --> PublicAPI
    UI --> GeminiProxy
    UI --> UploadHandler
    
    PublicAPI --> SupabaseDB
    GeminiProxy --> GeminiService
    GeminiProxy --> SupabaseDB
    UploadHandler --> SupabaseDB
    UploadHandler --> GoogleDrive
    UI -.->|"Direct Paper Preview Link"| GoogleDrive
```

## 1. Architectural Highlights
- **Jamstack & Edge Deployment:** Hosted on Vercel with serverless functions for API endpoints.
- **Database:** Supabase PostgreSQL located in Mumbai (`ap-south-1`) with Row Level Security (RLS) policies.
- **Static Asset Separation:** Heavy binary PDFs remain permanently in Google Drive. The application stores only metadata, extracted question text, and Drive File IDs.
- **Zero-Secret Client:** Client bundles contain only `NEXT_PUBLIC_` anonymous keys. Privileged operations (Service Role, Gemini Key, Admin Key) execute exclusively in Node.js serverless runtimes.
- **Progressive Web App (PWA):** Service worker caching for fast local access and offline revision of bookmarked questions.
