# MGIT PYQ Hub — Operational Troubleshooting

## 1. Common Issues & Solutions

### 1.1 Drive Link "Access Denied" or "File Not Found"
- **Cause:** Google Drive sharing permissions on the file or parent folder were altered.
- **Solution:** Verify the Google Drive root folder is shared as `Anyone with the link — Viewer`. Verify the file ID matches the entry in `docs/inventory/source_drive_inventory.md`.

### 1.2 Supabase RLS "Permission Denied"
- **Cause:** Public visitor query attempted to read rows where `is_approved = false` or a mutation was executed without authorization.
- **Solution:** Verify that the query uses the Supabase anon key and includes `.eq('is_approved', true)` filter.

### 1.3 Gemini API Rate Limits (429 Too Many Requests)
- **Cause:** Ingestion batch was too large or live queries exceeded tier RPM.
- **Solution:** Enable exponential backoff with jitter and ensure explanation caching in the database is active.
