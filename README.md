# BOCRA Website Redesign

A modern, accessible, citizen-centric digital platform for the Botswana Communications Regulatory Authority.

Built for the **BOCRA Website Development Hackathon 2026**.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Database:** Supabase (PostgreSQL + Auth + Realtime)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local
# Fill in your Supabase credentials

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
├── page.tsx                    # Homepage
├── complaints/
│   ├── page.tsx                # File + Track landing
│   ├── new/page.tsx            # Multi-step complaint form
│   └── track/[id]/page.tsx     # Timeline tracker
├── licensing/page.tsx          # Licensing portal
├── admin/dashboard/page.tsx    # Staff dashboard
└── api/
    ├── complaints/route.ts     # REST API
    └── ai/route.ts             # BOCRA AI endpoint

components/
├── layout/   # Header, Footer
├── home/     # Hero, ComplaintStar, ServiceCards, SectorGrid, StatsBar, NewsGrid, DocsAndAlerts, CTABanner
├── complaints/ # ComplaintsLanding, ComplaintForm, ComplaintTracker
├── ai/       # BocraAI chatbot
├── icons/    # 23 SVG icon components
└── ui/       # AnimatedNumber, shared utilities
```

## Key Features

- **Complaints System** — Guided 4-step filing with real-time tracking timeline
- **BOCRA AI** — AI-powered assistant for regulatory queries
- **Bilingual** — English / Setswana support
- **Mobile-First** — Responsive design optimized for phone users
- **Accessibility** — WCAG 2.1 AA compliant components
- **Security** — Supabase RLS, security headers, input validation

## Team

BOCRA Hackathon 2026 — Youth Category
