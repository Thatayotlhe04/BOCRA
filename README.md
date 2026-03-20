# [LIVE DEMO → bocra-theta.vercel.app](https://bocra-theta.vercel.app/)

<div align="center">

# 🔵🟢🔴🟡 BOCRA Digital Platform

**A modern, citizen-centric regulatory platform for Botswana**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com/)

### 👉 [**Open the Live Platform →**](https://bocra-theta.vercel.app/)

</div>

---

![BOCRA Platform Preview](assets/readme-media/device-hero.svg)

---

## The Problem

BOCRA's current website is outdated — a COVID-19 banner still dominates the homepage in 2026, the search overlay blocks content on every page, navigation is flat and chaotic, there's no mobile responsiveness, and citizens have no transparent way to file or track complaints. Service delivery is fragmented, manual, and opaque.

## Our Solution

A complete reimagining of BOCRA's digital presence as a **task-first, citizen-centric platform** that puts services front and center, makes complaints trackable in real time, and introduces AI-powered assistance for regulatory queries.

---

## Product Walkthrough

### Feature 01 — Complaints System

Our flagship feature transforms a frustrating offline process into a transparent, trackable digital experience.

![Complaints Walkthrough](assets/readme-media/walkthrough-complaints.svg)

**The flow:**
1. **Choose Provider** — Select from any licensed telecom, broadcasting, or postal provider in Botswana
2. **Describe the Issue** — Guided form with category selection, detailed description, incident date, and contact info
3. **Submit & Get ID** — Receive a unique tracking ID (e.g. `CMP-2026-4821`) instantly with email + SMS confirmation
4. **Live Tracking** — Uber-style timeline with pulsing status indicator, progress bar, and estimated resolution time

Every step is logged. Every status is visible. No more "we'll get back to you."

> **Try it live:** [`/complaints/track/CMP-2026-0341`](https://bocra-theta.vercel.app/complaints/track/CMP-2026-0341) — active investigation | [`/complaints/track/CMP-2026-0298`](https://bocra-theta.vercel.app/complaints/track/CMP-2026-0298) — resolved case

---

### Feature 02 — BOCRA AI Assistant

An always-on digital assistant for regulatory guidance — available on every page via the floating action button.

![BOCRA AI Walkthrough](assets/readme-media/walkthrough-ai.svg)

**Capabilities:** Answers regulatory FAQs instantly, guides complaint filing, license requirement lookups, contact info + office hours, bilingual English/Setswana support. Currently powered by canned responses with intelligent keyword matching — Gemini API integration planned for Day 3+.

---

### Feature 03 — Citizen Portal

Six integrated service modules that replace the current site's chaotic navigation with clear, task-oriented cards.

![Portal Walkthrough](assets/readme-media/walkthrough-portal.svg)

**Services:** Complaints (flagship), Licensing Portal, .BW Domain Registry, Type Approval, Cybersecurity Advisories (new — the current site has nothing like this), Documents & Public Consultations.

---

## What Makes This Different

| Current BOCRA Site | Our Platform |
|---|---|
| COVID-19 banner in 2026 | Task-oriented hero: "What do you need help with?" |
| Floating search overlay blocks content | Integrated search bar in hero + header |
| No complaint tracking | Uber-style live tracking with timeline |
| No mobile support | Mobile-first responsive design |
| English only | English + Setswana |
| No AI assistance | BOCRA AI chatbot on every page |
| Flat navigation dump | Service cards with clear hierarchy |
| No cybersecurity info | Live advisories with severity levels |

---

## Tech Stack & Architecture

```
Frontend:   Next.js 14 (App Router) + TypeScript + Tailwind CSS
Backend:    Supabase (PostgreSQL + Row Level Security + Realtime)
AI:         BOCRA AI chatbot (Gemini API)
Auth:       Supabase Auth (citizen, operator, admin roles)
Deployment: Vercel (edge network, automatic HTTPS)
```

### Project Structure

```
bocra-web/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── complaints/
│   │   ├── page.tsx                # File + Track landing
│   │   ├── new/page.tsx            # Multi-step complaint form
│   │   └── track/[id]/page.tsx     # Live timeline tracker
│   ├── licensing/page.tsx          # Licensing portal
│   ├── admin/dashboard/page.tsx    # Staff dashboard (auth-protected)
│   └── api/
│       ├── complaints/route.ts     # REST API endpoints
│       └── ai/route.ts             # BOCRA AI endpoint
├── components/
│   ├── layout/     # Header, Footer
│   ├── home/       # Hero, ComplaintStar, ServiceCards, SectorGrid,
│   │               # StatsBar, NewsGrid, DocsAndAlerts, CTABanner
│   ├── complaints/ # ComplaintsLanding, ComplaintForm, ComplaintTracker
│   ├── ai/         # BocraAI chatbot
│   ├── icons/      # 23 custom SVG icon components
│   └── ui/         # AnimatedNumber, shared utilities
├── lib/
│   ├── supabase.ts # Database client
│   └── types.ts    # TypeScript interfaces
└── tailwind.config.ts  # BOCRA brand tokens
```

---

## Security & Data Protection

- **Supabase Row Level Security** — Users can only access their own complaints
- **HTTPS enforced** via Vercel deployment
- **Input validation** on all form fields (client + server)
- **Security headers** — X-Frame-Options, CSP, HSTS
- **No sensitive data** stored in client-side state
- **Auth-protected admin routes** via middleware

## Scalability & Integration

- **REST API** at `/api/complaints` — ready for third-party integration
- **Supabase Realtime** — live complaint status updates without polling
- **Modular component architecture** — each feature is independently deployable
- **TypeScript throughout** — type-safe interfaces for all data models
- **Edge deployment** on Vercel — global CDN, auto-scaling

---

## Getting Started

```bash
git clone https://github.com/YOUR_REPO/bocra-web.git
cd bocra-web
npm install
cp .env.local.example .env.local
# Add your Supabase credentials to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Team

**BOCRA Hackathon 2026 — Youth Category**

---

<div align="center">

*Built for the BOCRA Website Development Hackathon 2026*

**Regulating for a Connected Botswana**

</div>
