# BOCRA Web Platform Prototype For Hackathon

A production-style **Next.js + TypeScript + Tailwind + Supabase** web application prototype for Botswana Communications Regulatory Authority (BOCRA) public digital services.

It includes:
- A service-oriented public homepage
- Complaint filing and tracking workflows
- Licensing search portal
- Thematic information portals (domains, cybersecurity, documents, type approval)
- AI assistant API integration point
- Admin and login entry points

---
live: https://bocra-theta.vercel.app/
## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Environment Variables](#environment-variables)
6. [Database Setup (Supabase)](#database-setup-supabase)
7. [Available Scripts](#available-scripts)
8. [Runbook: Common Workflows](#runbook-common-workflows)
9. [API Routes](#api-routes)
10. [Deployment](#deployment)
11. [Troubleshooting](#troubleshooting)
12. [Security Notes](#security-notes)
13. [Contributing](#contributing)

---

## Features

- **Modern landing experience** with service discovery and quick actions.
- **Searchable service launcher** with keyboard-friendly dropdown navigation.
- **Complaints module**:
  - Multi-step complaint submission
  - Complaint tracking by tracking ID
- **Licensing module** for licence records browsing/search.
- **Public portals** for domains, type approval, cybersecurity, and documents.
- **Server-side APIs** for complaints, admin, and AI interactions.
- **Reusable UI components** and icon system.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **UI:** React 18, Tailwind CSS
- **Backend/Data:** Supabase (Auth, DB, server client)
- **Animation:** Framer Motion
- **Linting:** ESLint (Next.js preset)

---

## Project Structure

```text
BOCRA/
├── app/
│   ├── api/
│   │   ├── admin/route.ts
│   │   ├── ai/route.ts
│   │   └── complaints/route.ts
│   ├── admin/dashboard/page.tsx
│   ├── complaints/
│   │   ├── new/page.tsx
│   │   └── page.tsx
│   ├── licensing/page.tsx
│   ├── login/page.tsx
│   ├── portals/
│   │   ├── cybersecurity/page.tsx
│   │   ├── documents/page.tsx
│   │   ├── domains/page.tsx
│   │   ├── type-approval/page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ai/BocraAI.tsx
│   ├── complaints/
│   │   ├── ComplaintForm.tsx
│   │   ├── ComplaintTracker.tsx
│   │   └── ComplaintsLanding.tsx
│   ├── home/
│   │   ├── AboutBOCRA.tsx
│   │   ├── CTABanner.tsx
│   │   ├── ComplaintStar.tsx
│   │   ├── DocsAndAlerts.tsx
│   │   ├── FeatureWalkthrough.tsx
│   │   ├── Hero.tsx
│   │   ├── NewsGrid.tsx
│   │   ├── SectorGrid.tsx
│   │   ├── ServiceCards.tsx
│   │   └── StatsBar.tsx
│   ├── icons/index.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   └── ui/AnimatedNumber.tsx
├── lib/
│   ├── knowledge-base.ts
│   ├── supabase-server.ts
│   ├── supabase.ts
│   └── types.ts
├── supabase-schema.sql
├── SETUP.md
├── README.md
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js **18+** (Node.js 20 LTS recommended)
- npm
- Supabase project (for backend/database functionality)

### Install

```bash
npm install
```

### Configure environment

```bash
cp .env.local.example .env.local
```

Populate `.env.local` with your values (see [Environment Variables](#environment-variables)).

### Start development server

```bash
npm run dev
```

Open: `http://localhost:3000`

---

## Environment Variables

Required (see `.env.local.example`):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

Recommended:
- Keep `SUPABASE_SERVICE_ROLE_KEY` server-side only.
- Do not expose service role values in client code.

---

## Database Setup (Supabase)

1. Open your Supabase project.
2. Go to **SQL Editor**.
3. Execute `supabase-schema.sql`.
4. Confirm required tables/policies/functions are created.

---

## Available Scripts

- `npm run dev` — Start local development server
- `npm run build` — Build production bundle
- `npm run start` — Run production server
- `npm run lint` — Run ESLint checks

---

## Runbook: Common Workflows

### File a complaint

1. Visit `/complaints/new`
2. Complete the step-based form
3. Submit and capture generated tracking ID (format: `CMP-YYYY-XXXX`)

### Track a complaint

1. Visit `/complaints`
2. Enter exact complaint ID
3. Review status and timeline

### Use licensing lookup

1. Visit `/licensing`
2. Search/filter records via the page controls

---

## API Routes

- `GET/POST /api/complaints` — complaint lookup/creation flows
- `GET/POST /api/admin` — admin-facing operations entry
- `POST /api/ai` — AI assistant integration endpoint

> Route behavior depends on configured Supabase project state and environment variables.

---

## Deployment

A typical deployment path:

1. Push repository to GitHub
2. Import project in Vercel
3. Add all required environment variables
4. Deploy

After deploy:
- Validate homepage and primary flows
- Validate API route responses in production
- Validate Supabase connectivity

---

## Troubleshooting

- **Build fails due to env values**
  - Verify `.env.local` keys and spelling.
- **Complaint APIs fail locally**
  - Confirm Supabase schema is applied.
- **UI looks unstyled**
  - Ensure Tailwind setup files are unchanged and `app/globals.css` is loaded through `app/layout.tsx`.

---

## Security Notes

- Complaint tracking should require exact complaint IDs.
- Use Row Level Security (RLS) policies in Supabase for access control.
- Never leak service role keys to browser-side code.

---

## Contributing

1. Create a feature branch
2. Make focused changes
3. Run lint/build checks
4. Open PR with:
   - summary
   - test evidence
   - screenshots for UI changes

---

If you need a shorter onboarding version, see `SETUP.md` for a quick-start style guide.
