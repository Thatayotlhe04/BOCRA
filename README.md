# BOCRA Digital Services Prototype

A **Next.js + Supabase** prototype for BOCRA digital transformation use-cases, including:

- Public information and service pages.
- Consumer complaint submission and tracking.
- Staff/admin workflow entry points.

## 1) Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Supabase (database, auth, RPC)

## 2) Prerequisites

- Node.js 18+ (recommended: 20 LTS)
- npm
- A Supabase project

## 3) Local Installation & Run

1. Install dependencies:

```bash
npm install
```

2. Create environment file:

```bash
cp .env.local.example .env.local
```

3. Set the following variables in `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

4. Apply database schema:

- Open Supabase SQL Editor.
- Run the SQL in `supabase-schema.sql`.

5. Run development server:

```bash
npm run dev
```

6. Open:

- `http://localhost:3000`

## 4) Build & Production Run

```bash
npm run build
npm run start
```

## 5) Available Scripts

- `npm run dev` — development mode
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — lint checks

## 6) Demo Flows

### Complaint submission flow

1. Go to **Complaints**.
2. Start filing a complaint.
3. Complete eligibility, provider, issue details, and review.
4. Submit and record tracking ID (`CMP-YYYY-XXXX`).

### Complaint tracking flow

1. Open complaint tracker page.
2. Enter exact complaint ID.
3. View status and timeline updates.

## 7) Submission Checklist Mapping

- ✅ URL link to deployed solution (add your deployed URL in submission form).
- ⚠️ Walkthrough video (record and include link/file).
- ⚠️ Installation/executable files for all platforms (for this web app, provide source + deployment URL; optional desktop packaging if required by organizers).
- ✅ Source code (this repository).
- ✅ README explaining setup and tools.

## 8) Security Notes

- Complaint lookup requires exact complaint ID.
- Row-level security and server-side access model are designed in Supabase setup.
- No public endpoint is provided to list all complaints.

## 9) Zero-Cost Delivery Strategy

- Host frontend on free tier platforms (e.g., Vercel free tier).
- Use Supabase free tier for backend/database.
- Use OBS Studio (free) or built-in OS recorder for walkthrough video.
- Use GitHub for source hosting and release bundle.
