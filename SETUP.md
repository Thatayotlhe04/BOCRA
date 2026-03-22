# Backend Setup

## 1. Supabase Project

1. Go to [supabase.com](https://supabase.com) → New Project → name it `bocra-web`
2. Once created, go to **Settings → API** and copy three things:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role secret key** → `SUPABASE_SERVICE_ROLE_KEY`

## 2. Database Schema

1. In Supabase dashboard → **SQL Editor**
2. Paste the contents of `supabase-schema.sql`
3. Click **Run**

## 3. Auth

1. Go to **Authentication → Providers** — Email is enabled by default
2. Optional: disable "Confirm email" in **Auth → Settings** for faster demo

## 4. Environment

```bash
cp .env.local.example .env.local
# Fill in all three keys
npm install
npm run dev
```

## Security Architecture (for your pitch)

**Row Level Security is enabled.** Here's what that means:

- `INSERT` is open — any citizen can submit a complaint without logging in
- `SELECT` is blocked at the database level for anonymous users
- All complaint lookups go through our server API using the service_role key
- The API only returns data for an **exact** complaint ID match
- There is **no endpoint to browse all complaints** — that would be a data leak
- The tracking ID (CMP-2026-XXXX) acts as a bearer token
- Emails are masked in API responses (jo***@example.com)
- Sensitive keys (service_role) are server-only, never exposed to the browser

**Pitch it as:** "The complaint tracking ID functions like a password. Without it, the data is invisible — even at the database level, Row Level Security prevents unauthorized access."

## What Works

- File complaint → persisted in Supabase → returns tracking ID
- Track by exact ID → fetches from database with timeline
- Sign up / sign in via Supabase Auth
- Demo complaints CMP-2026-0341 and CMP-2026-0298 always work (mock fallback)
- Functional search bar
- All navigation links work
- RLS enabled with proper policies
