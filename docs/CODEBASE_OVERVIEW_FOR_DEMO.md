# BOCRA Website Codebase Overview (User + Admin Demo Prep)

This guide explains how the current prototype works so your team can confidently narrate the product in a demo video.

---

## 1) What this project is

- **Framework**: Next.js 14 App Router + React + TypeScript + Tailwind.
- **Backend**: Supabase (Postgres + Auth), with server-side API routes in Next.js.
- **Core implemented feature**: End-to-end complaint submission, tracking, and admin status progression.
- **Other portals** (Licensing, Domains, Type Approval, Cybersecurity, Documents): mostly polished prototype UI with static/mock content and placeholder interactions.
- **Virtual assistant**: implemented client-side using a local knowledge base (not an external AI API).

---

## 2) High-level architecture

### Frontend (Next.js App Router)

- `app/layout.tsx` wraps every page with:
  - Global header
  - Global footer
  - Floating BOCRA assistant widget
- Public pages are split by route (`/`, `/complaints`, `/portals/*`, `/licensing`, etc.).
- Complaint UX is componentized under `components/complaints/*`.
- Admin UX is at `app/admin/dashboard/page.tsx`.

### Backend (API routes)

- Complaint create/read API: `app/api/complaints/route.ts`.
- Complaint status update API: `app/api/complaints/status/route.ts`.
- Admin analytics + status update API: `app/api/admin/route.ts`.
- Assistant API route exists but currently returns `501` placeholder: `app/api/ai/route.ts`.

### Data layer (Supabase)

- Browser client: `lib/supabase.ts` (anon key).
- Server client: `lib/supabase-server.ts` (service role preferred).
- Schema + RLS policies + ID generation function are in `supabase-schema.sql`.

---

## 3) User-side functionality (what is fully working)

## 3.1 Homepage and navigation

- Landing page (`/`) composes hero, featured complaint CTA, service cards, feature walkthrough, BOCRA info, portals, news, docs/alerts, and CTA banner.
- Header provides links to Home, Complaints, Portals anchor, News anchor, and Staff Login.
- Search in Hero navigates users to key routes (complaints, licensing, portals).

**Demo tip:** Open on desktop first, then show mobile menu to demonstrate responsive nav.

## 3.2 Complaint entry point (`/complaints`)

- Users can either:
  - Start new complaint (`/complaints/new`), or
  - Track existing complaint by ID.
- Complaint ID format validation is done client-side (must start with `CMP-`).
- Two hardcoded demo IDs are provided in UI:
  - `CMP-2026-0341`
  - `CMP-2026-0298`

## 3.3 Complaint submission flow (`/complaints/new`)

The multi-step form is implemented in `ComplaintForm`:

1. **Eligibility gate**: user confirms they contacted provider first.
2. **Provider selection**.
3. **Issue details**: category + description (+ optional date/phone/email).
4. **Evidence step**: UI-only (no actual upload persistence implemented yet).
5. **Review + submit**.

Submission behavior:

- Frontend calls `POST /api/complaints`.
- API validates required fields and description length.
- API attempts to generate sequential complaint ID via Supabase RPC (`generate_complaint_id`).
- API inserts complaint row and initial timeline event.
- On success, UI shows returned ID and offers “Track This Complaint”.
- If API fails, frontend still generates a random fallback ID for demo continuity.

## 3.4 Complaint tracking flow (`/complaints/track/[id]`)

- Tracker first checks built-in showcase data for the two demo IDs.
- If ID is not in mock list, it calls `GET /api/complaints?id=<ID>`.
- API enforces exact ID pattern and exact ID lookup (no list-all endpoint).
- Response masks email for privacy before returning complaint data.
- UI renders status hero + progress + timeline + details cards.

---

## 4) Admin-side functionality (what is fully working)

## 4.1 Staff login (`/login`)

- Uses Supabase Auth password sign-in from browser client.
- Successful sign-in redirects to `/admin/dashboard`.

## 4.2 Admin dashboard (`/admin/dashboard`)

- On load, checks Supabase session; if not authenticated, redirects to login.
- Fetches dashboard analytics from `GET /api/admin`:
  - total complaints
  - by status
  - by provider
  - by category
  - 7-day daily counts
  - recent complaint list
  - resolution rate
- If fetch fails, dashboard falls back to built-in demo dataset for presentation.

## 4.3 Admin complaint progression

- In “Manage Complaints”, each row offers next-status progression.
- Clicking action calls `PATCH /api/admin` with `{ id, status }`.
- API updates complaint status + appends timeline entry.
- Dashboard reloads data after successful update.

---

## 5) Security and privacy model (important for team narration)

- **RLS enabled** on `complaints` and `complaint_timeline` tables.
- Anonymous users can `INSERT` complaints but cannot freely read records.
- Complaint lookup occurs through server API using service-role access.
- Public lookup requires **exact complaint ID**, reducing browse/scrape risk.
- API masks email before sending complaint data back to client.
- No public “list all complaints” endpoint exists.

This model supports the narrative: *“The complaint ID acts like a bearer reference token for tracking.”*

---

## 6) What is prototype/static today (set expectations for demo)

These areas are intentionally UI-forward and not fully connected to backend workflows yet:

- **Licensing page**: “coming soon” placeholder body.
- **Portals pages** (`domains`, `type-approval`, `cybersecurity`, `documents`): rich UI + static arrays/mock data; controls are not fully wired to persistent backend.
- **Virtual Assistant API route** is placeholder; assistant itself responds from local `knowledge-base.ts` matcher.
- **Evidence upload step** in complaint form is currently presentational (no stored file upload pipeline visible in code).

For demo narration, frame these as “designed interfaces with staged rollout after complaints module.”

---

## 7) Suggested demo flow (user + admin)

### Public / citizen side (about 2.5–3.5 mins)

1. Homepage: show search + quick actions.
2. Complaints landing: show split between “File New” and “Track”.
3. File new complaint through steps (use realistic sample content).
4. Submit and capture generated complaint ID.
5. Open tracker for that ID (or use demo IDs for polished timeline).
6. Briefly show Portals to communicate breadth of roadmap.

### Admin side (about 1.5–2.5 mins)

1. Staff login.
2. Dashboard KPIs/charts.
3. Manage Complaints table.
4. Click status progression on one item.
5. Open that complaint’s tracking page to show timeline changed.

---

## 8) Narration guardrails (to avoid over-claiming)

When presenting, keep claims aligned to code:

- ✅ Safe to claim: end-to-end complaint submission/tracking/admin status updates exist.
- ✅ Safe to claim: Supabase-backed storage and RLS model are implemented.
- ⚠️ Avoid claiming as fully implemented unless extended later:
  - rate limiting
  - file evidence persistence
  - full backend-powered licensing/domain/type-approval workflows
  - generative AI backend responses

Use wording like: “implemented in complaints module” vs “roadmap/next phase” for other modules.

---

## 9) Quick route map for your team

- `/` — Homepage
- `/complaints` — Complaints landing
- `/complaints/new` — Complaint form wizard
- `/complaints/track/[id]` — Complaint tracker
- `/login` — Staff login
- `/admin/dashboard` — Admin dashboard
- `/licensing` — Licensing placeholder
- `/portals` — Portal hub
- `/portals/domains` — Domains UI prototype
- `/portals/type-approval` — Type approval UI prototype
- `/portals/cybersecurity` — Cybersecurity advisories UI prototype
- `/portals/documents` — Documents + consultations UI prototype

---

## 10) Team prep checklist before recording

- Confirm environment variables are set correctly.
- Ensure `supabase-schema.sql` was executed in project database.
- Verify one staff account exists in Supabase Auth for admin demo.
- Rehearse complaint sample text so form completion is smooth.
- Keep two backup IDs handy for tracker: `CMP-2026-0341` and `CMP-2026-0298`.

