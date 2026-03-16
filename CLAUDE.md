# CLAUDE.md

## Project Overview

**CRESidekick** is an AI-native CRM for commercial real estate brokers, teams, and brokerages. Part of the AgentDashboards platform suite.

### Product Suite

| Product | Purpose | Port |
|---------|---------|------|
| **CRESidekick** | AI-native CRE CRM | `localhost:9500` |
| AgentDashboards | Business intelligence | `localhost:2000` |
| ClosedOut | Transaction management | `localhost:3000` |
| PipelinePulse | Lead lifecycle | `localhost:4000` |

### Key URLs

- **Repo:** github.com/scottman1078/CRESidekick
- **Product Plan:** docs/product-plan.md
- **Competitive Analysis:** docs/cre-crm-competitive-analysis.md

### Brand

- **Primary color:** `#0D9488` (Teal 600)
- **Product name:** CRESidekick (one word, capital C-R-E-S)
- **AI Assistant:** NORA

## Commands

```bash
pnpm dev          # Start dev server on localhost:5000
pnpm build        # Production build
pnpm lint         # Run ESLint
pnpm start        # Start production server
```

## Architecture

### Tech Stack

- **Frontend:** Next.js 16, React 19, Tailwind CSS 4, ShadCN UI
- **Backend:** Supabase (database, auth, edge functions, realtime)
- **Data Fetching:** SWR hooks
- **Charts:** ECharts
- **Maps:** Mapbox GL JS
- **AI:** Claude API (Anthropic) — NORA engine
- **Payments:** Stripe
- **Deployment:** Vercel

### Database

- **Table prefix:** `sc_*` (e.g., sc_contacts, sc_deals, sc_properties)
- **Auth:** Supabase Auth with RLS
- **Multi-tenant:** Row Level Security per user_id

### Key Directories

```
src/
  app/
    (auth)/           # Login, signup pages
    (dashboard)/      # All authenticated pages
      dashboard/      # Main dashboard
      contacts/       # Contact management
      properties/     # Property database
      deals/          # Deal pipeline (Kanban)
      documents/      # AI document generation
      analytics/      # BI dashboards
      settings/       # Account & integrations
    api/ai/           # AI endpoints (NORA)
  components/
    layout/           # Sidebar, dashboard layout
    ui/               # ShadCN UI primitives
    contacts/         # Contact-specific components
    properties/       # Property-specific components
    deals/            # Deal pipeline components
    documents/        # Document generation components
    analytics/        # Chart/dashboard components
    maps/             # Mapbox map components
    nora/             # NORA chat interface
  hooks/              # SWR data fetching hooks
  contexts/           # React contexts (auth)
  services/           # API service modules
  types/              # TypeScript interfaces
  lib/
    supabase/         # Supabase client (browser, server, middleware)
    utils.ts          # Utility functions
docs/                 # Product docs, competitive analysis
```

### Data Flow

```
User Login → Supabase Auth → AuthContext → SWR hooks fetch with user_id → Supabase → UI renders
```

### Adding New Data Hooks

Follow the existing pattern in `src/hooks/`:

```tsx
"use client"
import useSWR from "swr"
import { createClient } from "@/lib/supabase/client"

const supabase = createClient()

export function useSomething(user_id?: string) {
  return useSWR(
    user_id ? ["something", user_id] : null,
    async () => {
      const { data, error } = await supabase
        .from("sc_something")
        .select("*")
        .eq("user_id", user_id!)
      if (error) throw error
      return data ?? []
    },
    { fallbackData: [], revalidateOnFocus: false, dedupingInterval: 60000 }
  )
}
```

## Development Notes

- All dashboard pages are wrapped in `DashboardLayout` via the route group layout
- The `(auth)` route group handles unauthenticated pages (login/signup)
- Middleware redirects unauthenticated users to `/login`
- NORA AI features use Claude API via server-side API routes
- Phase 1 (MVP) focuses on: contacts, properties, deals, auto-logging, NORA chat
- Phase 2 adds: AI documents, BI dashboards, commission tracking
