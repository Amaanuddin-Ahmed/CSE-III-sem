# MGIT PYQ Hub — Privacy-Preserving Analytics

## 1. Analytics Goals
Understand which subjects, chapters, and question types students find most difficult or visit most frequently, while preserving complete visitor anonymity.

## 2. Infrastructure
- **Traffic & Web Vitals:** Handled via Vercel Web Analytics (cookieless, GDPR-compliant).
- **Feature & Subject Usage Counters:** Aggregated anonymously in Supabase tables (`subject_views_count`, `question_views_count`) using incrementing RPC functions. No personal student identifiers, IPs, or device fingerprints are recorded.
