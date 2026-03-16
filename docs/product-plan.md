# CRESidekick — Product Plan

**Product:** CRESidekick
**Date:** March 12, 2026
**Author:** AgentDashboards, LLC
**Status:** Planning

---

## Table of Contents

1. [Vision & Positioning](#vision--positioning)
2. [Target Market](#target-market)
3. [Pricing Strategy](#pricing-strategy)
4. [Core Feature Set](#core-feature-set)
5. [AI Engine (NORA-Powered)](#ai-engine-nora-powered)
6. [Crexi Integration](#crexi-integration)
7. [Property Data & Intelligence Layer](#property-data--intelligence-layer)
8. [AI Document Generation (OMs, CMAs, Flyers)](#ai-document-generation)
9. [Tech Stack & Architecture](#tech-stack--architecture)
10. [Product Roadmap](#product-roadmap)
11. [Competitive Differentiation](#competitive-differentiation)

---

## 1. Vision & Positioning

**One sentence:** The first AI-native CRM for commercial real estate that replaces the admin, not just assists — at 1/3 the price of Buildout.

**The problem:** CRE brokers pay $120–$250/user/month for CRMs built in 2011 with AI bolted on after the fact. They still spend 10–15 minutes per lead on manual data entry. They juggle 4–7 separate tools. And they get zero business intelligence from their CRM.

**The solution:** A CRM where AI is the core, not a feature. You talk to it, it logs everything automatically, it generates your OMs and CMAs, it scores your deals, and it gives you a real-time dashboard of your business health — all for $29–49/user/month.

**How we're different from every CRM in the market:**

| What They Do | What We Do |
| --- | --- |
| Forms and tabs you fill out manually | Conversational interface — talk to NORA |
| Bolt-on AI features (extra cost) | AI is the product — zero manual entry |
| Deal tracking only | Full BI: GCI trends, pipeline velocity, lead source ROI |
| Template-based document generation | AI-generated OMs with retail maps, comps, and financials |
| Siloed data | Crexi + MLS + public records + FUB/Lofty integrated |
| $120–$250/user/month | $29–$49/user/month |

---

## 2. Target Market

### Primary: CRE Brokers & Small Teams (5–50 agents)

- ~150,000 CRE brokers in the US
- Underserved by enterprise platforms (too expensive) and generic CRMs (not CRE-native)
- The 5–20 person brokerage is the sweet spot — priced out of Buildout, too specialized for HubSpot

### Secondary: Hybrid Agents (Residential + Commercial)

- ~500,000 agents who do both residential and commercial deals
- Currently forced to use 2 separate CRMs or a generic one that serves neither well
- No platform bridges both — this is a 3x TAM multiplier

### Tertiary: CRE Investment Teams

- Small-to-mid investment shops (not institutional — they use DealPath/Juniper Square)
- Need deal pipeline + investor tracking + document generation at a reasonable price

### User Personas

| Persona | Pain | What They Want |
| --- | --- | --- |
| **Solo CRE Broker** | Paying $129/mo for ClientLook, still doing manual docs | Mobile-first, $29/mo |
| **Team Lead (10 agents)** | Paying $1,490/mo for Buildout, team has no analytics | Team dashboards, pipeline visibility, $490/mo |
| **Hybrid Agent** | Using FUB for residential + RealNex for commercial | One CRM for both, smart UI that adapts |
| **Small Investment Shop** | Can't afford DealPath, using spreadsheets | Deal pipeline, AI underwriting, investor tracking |

---

## 3. Pricing Strategy

### The Math: Why We Can Be 70% Cheaper

| Cost Factor | Incumbents | Us |
| --- | --- | --- |
| Salesforce license | $25–$75/user baked in | $0 — we own our stack |
| Legacy code maintenance | Massive (10+ year codebases) | $0 — greenfield build |
| AI compute (2026 prices) | Expensive (bolted on) | ~$2–5/user/mo (native, optimized) |
| Implementation services | $5K–$50K per customer | $0 — self-service onboarding |
| Sales team (enterprise) | Huge overhead | PLG + content-led growth |

### Pricing Tiers

| Plan | Price | For | Includes |
| --- | --- | --- | --- |
| **Solo** | $29/user/month | Individual brokers | Full CRM + AI + mobile + 50 AI doc generations/mo |
| **Team** | $49/user/month | Teams 2–25 | Everything in Solo + team dashboards, pipeline sharing, admin controls, 200 AI docs/mo |
| **Brokerage** | $39/user/month (10+ seats) | Brokerages 25+ | Everything in Team + custom branding, brokerage-wide reporting, API access, unlimited AI docs |

**No add-ons. No implementation fees. No hidden costs.**

### Revenue Projections (Conservative)

| Milestone | Users | MRR | ARR |
| --- | --- | --- | --- |
| Month 6 | 200 | $7,800 | $93,600 |
| Month 12 | 1,000 | $39,000 | $468,000 |
| Month 18 | 3,000 | $117,000 | $1,404,000 |
| Month 24 | 8,000 | $312,000 | $3,744,000 |

---

## 4. Core Feature Set

### 4.1 Contact & Relationship Management

**What we take from the best:**
- ClientLook's simplicity (training-free)
- Affinity/4Degrees' auto-logging (zero manual entry)
- Attio's AI-native record management

**Features:**
- **Zero-entry contact creation** — connects Gmail/Outlook via OAuth, auto-creates contacts from emails and calendar events
- **Relationship intelligence** — scores every contact by communication frequency, recency, and response time
- **Company ↔ Contact ↔ Property linking** — automatic association via AI entity extraction
- **Smart deduplication** — AI identifies and merges duplicate contacts
- **Contact enrichment** — auto-pulls LinkedIn data, company info, property ownership records
- **Activity timeline** — unified view of all emails, calls, meetings, notes, showings (auto-populated)

### 4.2 Property Database

**What we take from the best:**
- Crexi's massive data (via integration)
- RealNex's property records with ownership/loan details
- AscendixRE's geo search and map visualization

**Features:**
- **Property records** with ownership, loan details, tenant info, transaction history
- **Interactive map search** — draw a boundary, filter by property type, price, cap rate, tenancy
- **Sales and lease comps** — pulled from public records and MLS (where available)
- **Stacking plans** — visual tenant/space/rate layout
- **Retail trade area maps** — demographic overlays, traffic counts, retail density, competitor mapping (critical for OMs — see Section 8)
- **Auto-enrichment** — property records enriched via ATTOM, county assessor, Census data

### 4.3 Deal Pipeline

**What we take from the best:**
- Buildout's deal lifecycle management
- DealPath's workflow automation
- AscendixRE's drag-and-drop pipeline

**Features:**
- **Visual Kanban pipeline** — drag-and-drop deals across custom stages
- **AI deal scoring** — probability based on activity level, days in stage, engagement signals, comp data
- **Pipeline forecasting** — predicted closings by month, weighted by AI probability
- **Commission tracking** — splits, tiered payouts, referral fees, brokerage caps
- **Multi-deal-type support** — sales, leases, investments, development (different stages per type)
- **Automated stage progression** — AI detects when a deal should advance

### 4.4 Marketing & Outreach

**What we take from the best:**
- SharpLaunch's property websites
- RealNex's 60+ marketing templates
- AscendixRE's Composer document generation

**Features:**
- **AI email campaigns** — contextual drip sequences that personalize per lead using CRM data
- **One-click property flyers** — AI generates from property data, no template selection needed
- **Listing syndication** — push listings to Crexi, LoopNet, and MLS via API
- **AI-generated OMs** — full offering memorandums with retail maps, financials, comps, aerials (see Section 8)
- **Property microsites** — auto-generated landing pages for each listing

### 4.5 Analytics & Business Intelligence

**What we take from the best:**
- AgentDashboards' BI expertise (our core moat)
- DealPath's configurable dashboards
- No CRM currently offers this depth

**Features:**
- **Personal KPI dashboard** — GCI (YTD, trailing 12), pipeline velocity, conversion rates, avg deal size
- **Lead source ROI** — which sources produce closings?
- **Team leaderboards** — performance comparisons across agents
- **Commission forecasting** — projected income based on pipeline + probability
- **Revenue intelligence** — revshare tracking, cap progress, net income projections
- **Activity metrics** — calls made, emails sent, showings scheduled, proposals generated
- **Custom report builder** — drag-and-drop report creation with AI suggestions

### 4.6 Mobile Experience

**What we take from the best:**
- ClientLook's iOS/Android apps
- Nobody's offline capability (we'll be first)

**Features:**
- **Native iOS + Android app** (React Native)
- **Offline mode** — contact/property lookup, voice notes, photo capture work without signal
- **Voice-to-CRM** — 30-second voice memos auto-transcribe and update records
- **GPS-triggered property cards** — arriving at a location surfaces the property data automatically
- **Quick capture** — photo a business card → AI creates contact; photo a property → AI creates/updates record
- **Push notifications** — new leads, deal stage changes, task reminders

---

## 5. AI Engine (NORA-Powered)

NORA is the cross-product AI assistant across the AgentDashboards suite. In the CRM, NORA powers:

### 5.1 Conversational Interface

Users interact with the CRM via natural language:

```
"Add a new contact — Mike Chen from CBRE, met at ICSC. Looking for 50K sqft industrial in Dallas."
→ Creates contact, links to CBRE, adds note, creates saved search alert

"Show me all my deals that haven't been touched in 2 weeks"
→ Returns filtered list with suggested actions for each

"Draft a follow-up email to Sarah about the Westfield property showing yesterday"
→ Generates personalized email pulling from showing notes, property data, Sarah's preferences
```

### 5.2 Auto-Logging Engine

| Data Source | Connection Method | What Gets Logged |
| --- | --- | --- |
| Gmail/Outlook | OAuth | Every email → matched to contact, auto-logged |
| Google/Outlook Calendar | OAuth | Every meeting → activity record with attendees |
| Twilio | Webhook | Call logs, transcripts, SMS conversations |
| Zoom/Teams/Google Meet | Bot joins call | Meeting transcription, AI summary, action items |
| Mobile app | Native | Voice notes, photos, GPS check-ins |

**Zero manual data entry. Period.**

### 5.3 AI Features by Category

| Feature | AI Model | Cost/Use | Priority |
| --- | --- | --- | --- |
| Auto-logging & entity extraction | Claude Haiku / GPT-4o-mini | ~$0.001/email | P0 |
| Voice-to-CRM transcription | Whisper / Deepgram | ~$0.006/minute | P0 |
| Lead scoring | Custom ML model | Negligible (batch) | P0 |
| Email drafting | Claude Sonnet | ~$0.01/email | P0 |
| Conversational queries | Claude Sonnet | ~$0.02/query | P1 |
| Meeting summaries | Claude Sonnet | ~$0.05/meeting | P1 |
| OM/CMA generation | Claude Opus + templates | ~$0.15/document | P1 |
| Deal forecasting | Custom ML model | Negligible (batch) | P2 |
| Workflow suggestions | Claude Haiku | ~$0.002/suggestion | P2 |
| Property data enrichment | API calls + Claude | ~$0.05/property | P2 |

**Estimated AI cost per user/month: $3–7** (well within the $29–49 pricing)

### 5.4 Smart Automation Suggestions

NORA observes user behavior and suggests automations:

```
"I noticed you always send a follow-up email 2 days after a showing. Want me to automate that?"

"You've manually moved 12 leads to 'Nurture' after no response in 5 days. Should I do this automatically?"

"Three of your leads viewed the same property 3+ times this week. Want me to alert you when this happens?"
```

---

## 6. Crexi Integration

### Integration Architecture

Based on research, Crexi offers two integration surfaces:

| Integration | Direction | Method | Access |
| --- | --- | --- | --- |
| **Listing API** | Push listings TO Crexi | REST API (JSON/XML) | Partnership agreement + API key |
| **CRM Integration Hub** | Pull leads FROM Crexi | OAuth webhook | PRO/Enterprise plan, beta |

**Crexi's 153M property records and 46M comps have NO API access.** Intelligence data is UI-only.

### What We Can Build

### Phase 1: Listing Syndication (Partnership API)

```
Our CRM → Crexi Listing API
```

- When a user creates a listing in our CRM, one-click syndication pushes it to Crexi marketplace
- Daily sync keeps listing data current (price changes, status updates)
- Listing performance metrics pulled back into our analytics
- **Requirement:** Sign partnership agreement with Crexi (`integrations@crexi.com`)

### Phase 2: Lead Capture (CRM Integration Hub)

```
Crexi Lead Events → Webhook → Our CRM
```

- Crexi engagement events flow into our CRM automatically:
    - Flyer downloads
    - Property inquiries
    - OM requests
    - Contact form submissions
- Leads auto-created with Crexi source attribution
- AI auto-scores incoming Crexi leads based on engagement signals
- **Requirement:** Our CRM added to Crexi's Integration Hub (currently Salesforce, HubSpot, Pipedrive, Zoho, FUB)

### Phase 3: Deep Data Partnership (Business Development)

- Negotiate programmatic access to Crexi Intelligence data:
    - Property records for auto-enrichment
    - Sales comps for CMA/OM generation
    - Ownership data for prospecting
    - Lease data for market analysis
- This requires a custom partnership — no existing API supports this
- **Fallback:** Use ATTOM, CoStar API, or county assessor data as alternatives

### Phase 4: Crexi Fuse Embed

- Embed user's Crexi listings on their CRM-generated property microsites
- Auto-update when listings change on Crexi
- **Requirement:** Crexi CSM provides embed code (Crexi Fuse)

### Crexi Integration User Flow

```
1. Broker creates listing in CRM
   ↓
2. One-click "Publish to Crexi" → Listing API pushes to marketplace
   ↓
3. Buyer finds listing on Crexi, downloads flyer
   ↓
4. Crexi fires webhook → Lead auto-created in CRM with full context
   ↓
5. NORA scores lead, drafts follow-up email, alerts broker
   ↓
6. Broker closes deal → CRM tracks commission → Analytics updated
```

---

## 7. Property Data & Intelligence Layer

Since Crexi's deep data isn't API-accessible, we build our own intelligence layer:

### Data Sources

| Source | Data | Cost | Access |
| --- | --- | --- | --- |
| **ATTOM Data** | Property records, ownership, valuations, tax, mortgage | $0.02–0.10/record | API |
| **Census/ACS** | Demographics, income, population, housing | Free | API |
| **Google Maps Platform** | Geocoding, places, traffic, retail locations | $5–7/1K requests | API |
| **Mapbox** | Custom maps, demographic overlays, drive-time analysis | $0.50/1K tile requests | API |
| **OpenStreetMap** | Retail locations, building footprints | Free | API |
| **County Assessor** | Parcel data, zoning, assessed value | Free–$0.05/record | API/scrape |
| **SafeGraph / Placer.ai** | Foot traffic, retail density, trade area analytics | $$ (partnership) | API |
| **MLS (via RESO/Spark)** | Listings, comps, property details | Broker membership | API |
| **Crexi (Phase 3)** | 153M properties, 46M comps, ownership, lease data | Partnership TBD | TBD |

### Retail Map Data (Critical for OMs)

For generating OMs with retail trade area maps, we need:

| Data Point | Source | Use in OM |
| --- | --- | --- |
| **Retail tenant locations** | Google Places API, OpenStreetMap, SafeGraph | Map of nearby retailers (Starbucks, CVS, Target, etc.) |
| **Traffic counts (ADT)** | State DOT data (free), ATTOM | Average daily traffic on adjacent roads |
| **Demographics ring** | Census ACS, Esri Demographics | 1/3/5-mile population, income, age, household size |
| **Drive-time polygons** | Mapbox Isochrone API, Google Distance Matrix | 5/10/15-minute drive-time trade areas |
| **Competitor locations** | Google Places API, Yelp Fusion | Similar businesses within trade area |
| **Foot traffic** | SafeGraph, Placer.ai | Monthly visit estimates for subject + nearby properties |
| **Daytime population** | Census LEHD (free) | Workers within trade area (lunch traffic) |
| **Consumer spending** | Esri Tapestry, ATTOM | Spending patterns by category within trade area |
| **Vacancy rates** | CoStar (expensive), manual comps | Market vacancy context |
| **Planned development** | County planning department, Dodge Data | Upcoming projects within trade area |

---

## 8. AI Document Generation

### The Vision

No templates. No fill-in-the-blank. The user says "Generate an OM for 123 Main St" and NORA produces a polished, investor-ready document with:

- Professional cover page with aerial photo
- Executive summary
- Property details and photos
- **Retail trade area map with tenant locations, demographics rings, and traffic counts**
- Financial analysis (NOI, cap rate, cash-on-cash, IRR projections)
- Comparable sales
- Lease summary / rent roll
- Market overview with trends
- Location map with amenities

### OM Generation — Retail Maps Feature (Detailed)

This is a key differentiator. No CRM auto-generates retail maps in OMs today. RealNex has templates; Ascendix has Composer. But none pull live retail data and render maps automatically.

### How It Works:

```
1. User triggers OM generation for a property
   ↓
2. System pulls property coordinates (geocode if needed)
   ↓
3. Google Places API queries for retail/restaurant/service businesses
   within 0.25, 0.5, and 1-mile radius
   ↓
4. Categorizes tenants: Anchor, National, Regional, Local
   - Anchors: Walmart, Target, Costco, Home Depot
   - National: Starbucks, McDonald's, CVS, Chase Bank
   - Regional: Regional grocery, restaurant chains
   - Local: Independent businesses
   ↓
5. Mapbox/Google Maps renders a branded map with:
   - Subject property pinned (highlighted)
   - Color-coded retail tenant pins by category
   - 1/3/5-mile demographic rings overlaid
   - Major road labels with ADT traffic counts
   - Drive-time polygon (5/10/15 min)
   ↓
6. Demographics table generated:
   ┌─────────────────┬──────────┬──────────┬──────────┐
   │ Metric          │ 1 Mile   │ 3 Mile   │ 5 Mile   │
   ├─────────────────┼──────────┼──────────┼──────────┤
   │ Population      │ 12,450   │ 89,200   │ 245,000  │
   │ Avg HH Income   │ $78,500  │ $72,100  │ $68,900  │
   │ Daytime Pop     │ 18,200   │ 105,000  │ 310,000  │
   │ Total HH        │ 5,100    │ 35,800   │ 98,500   │
   │ Avg HH Size     │ 2.4      │ 2.5      │ 2.5      │
   │ Traffic Count    │ 32,000   │ —        │ —        │
   └─────────────────┴──────────┴──────────┴──────────┘
   ↓
7. NORA generates narrative text:
   "The property benefits from strong retail synergy, anchored by
   [Target] and [Whole Foods] within 0.5 miles. The 1-mile trade
   area serves 12,450 residents with average household income of
   $78,500. Daily traffic on [Main St] averages 32,000 vehicles..."
   ↓
8. All assembled into branded PDF with cover page, TOC, and
   professional formatting
```

### Other AI-Generated Documents

| Document | Data Sources | Generation Time |
| --- | --- | --- |
| **Offering Memorandum (OM)** | Property data + comps + demographics + retail map + financials | ~30 seconds |
| **Comparative Market Analysis (CMA)** | MLS comps + public records + market trends | ~15 seconds |
| **Property Flyer** | Property photos + key stats + map | ~10 seconds |
| **Lease Proposal** | Deal terms + tenant info + property data | ~10 seconds |
| **Monthly Client Report** | Market trends + portfolio performance + alerts | ~20 seconds |
| **Investment Summary** | Financial projections + comps + market data | ~20 seconds |

---

## 9. Tech Stack & Architecture

### Frontend

- **Next.js 16** + React 19 + Tailwind CSS 4 (consistent with AD/CO/PP)
- **React Native** for iOS/Android mobile app
- **ShadCN UI** component library
- **Mapbox GL JS** for interactive maps (retail maps, property search, trade areas)
- **ECharts** for BI dashboards (consistent with AD)

### Backend

- **Supabase** — database, auth, edge functions, realtime (consistent with platform)
- **Table prefix:** `sc_*` (CRESidekick)
- **Row Level Security** for multi-tenant data isolation

### AI Layer

- **Claude API** (Anthropic) — NORA conversational engine, document generation, email drafting
- **Claude Haiku** — high-volume tasks (email classification, entity extraction, scoring)
- **Claude Sonnet** — generation tasks (emails, summaries, queries)
- **Claude Opus** — complex tasks (OM generation, financial analysis)
- **Whisper / Deepgram** — speech-to-text for voice-to-CRM
- **Custom ML models** — lead scoring, deal forecasting (trained on platform data)

### Integrations

- **Gmail/Outlook** — OAuth for auto-logging
- **Google Calendar / Outlook Calendar** — meeting sync
- **Twilio** — calls, SMS (shared infrastructure with PP/AD/CO)
- **Crexi** — Listing API + CRM Integration Hub
- **ATTOM Data** — property records, ownership, valuations
- **Google Maps/Places** — geocoding, retail locations, traffic
- **Mapbox** — custom maps, isochrones, demographic overlays
- **Census API** — demographics (free)
- **MLS (RESO/Spark)** — listings and comps
- **Stripe** — payments (shared infrastructure)

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                     CRESidekick                         │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐ │
│  │ Web App  │  │Mobile App│  │ NORA Chat│  │  API   │ │
│  │(Next.js) │  │ (React   │  │(Claude)  │  │(REST)  │ │
│  │          │  │  Native) │  │          │  │        │ │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └───┬────┘ │
│       │              │              │             │      │
│  ┌────┴──────────────┴──────────────┴─────────────┴───┐ │
│  │              Supabase (Database + Auth)             │ │
│  │         sc_* tables + RLS + Edge Functions          │ │
│  └────┬──────────────┬──────────────┬─────────────────┘ │
│       │              │              │                    │
│  ┌────┴────┐   ┌─────┴─────┐  ┌────┴───────────┐      │
│  │ AI      │   │ Data      │  │ Integrations   │      │
│  │ Layer   │   │ Layer     │  │                │      │
│  │ Claude  │   │ ATTOM     │  │ Gmail/O365     │      │
│  │ Whisper │   │ Census    │  │ Twilio         │      │
│  │ Custom  │   │ Google    │  │ MLS/RESO       │      │
│  │ ML      │   │ Mapbox    │  │ Stripe         │      │
│  │         │   │ MLS       │  │ Crexi          │      │
│  └─────────┘   └───────────┘  └────────────────┘      │
│                                                         │
│  ┌─────────────────────────────────────────────────────┐│
│  │         Shared Platform (AD/CO/PP/EO/TT)            ││
│  │  profiles │ Supabase Auth │ Twilio │ NORA │ Stripe  ││
│  └─────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘
```

### Database Schema (Key Tables)

```sql
-- Core CRM
sc_contacts          -- People (brokers, clients, investors, tenants)
sc_companies         -- Organizations
sc_properties        -- Property records with enrichment data
sc_deals             -- Deal pipeline records
sc_activities        -- Emails, calls, meetings, notes
sc_tasks             -- To-dos and follow-ups

-- Intelligence
sc_comps             -- Sales and lease comparables
sc_demographics      -- Cached demographic data by location
sc_retail_tenants    -- Retail tenant database for trade area maps
sc_enrichment_cache  -- Cached ATTOM/Census data per property

-- Documents
sc_documents         -- Generated OMs, CMAs, flyers, proposals
sc_document_assets   -- Maps, images, charts used in docs
sc_templates         -- User-customized branding/layouts

-- Marketing
sc_campaigns         -- Email campaign definitions
sc_campaign_sends    -- Individual sends with tracking
sc_listings          -- Active listings with syndication status

-- Analytics
sc_lead_scores       -- AI-generated lead scores with factors
sc_deal_forecasts    -- Pipeline forecasts with probabilities
sc_kpi_snapshots     -- Daily KPI snapshots for trending

-- Integration
sc_crexi_sync        -- Crexi listing sync status
sc_crexi_leads       -- Inbound leads from Crexi
sc_email_sync        -- Gmail/Outlook sync state per user
sc_calendar_sync     -- Calendar sync state per user
```

---

## 10. Product Roadmap

### Phase 1: MVP (Months 0–3) — "Zero-Entry CRM"

**Goal:** Launch a CRM that requires no manual data entry.

| Feature | Priority | Notes |
| --- | --- | --- |
| Contact/Company/Property records | P0 | Core data model |
| Gmail/Outlook auto-logging (OAuth) | P0 | The killer feature — zero manual entry |
| Calendar sync (auto-activity logging) | P0 | Meetings auto-logged |
| Visual deal pipeline (Kanban) | P0 | Drag-and-drop with custom stages |
| NORA conversational interface | P0 | Natural language queries and record creation |
| Voice-to-CRM (mobile) | P0 | Post-call voice memos auto-update records |
| AI lead scoring | P0 | Behavioral signals + engagement data |
| Basic property search (map) | P0 | Map-based search with filters |
| Mobile app (iOS + Android) | P0 | React Native, offline-capable |
| Supabase Auth (shared platform) | P0 | SSO with AD/CO/PP |

**Price: $29/user/month (Solo plan only)**

### Phase 2: Intelligence (Months 3–6) — "AI Documents + Analytics"

| Feature | Priority | Notes |
| --- | --- | --- |
| AI OM generation with retail maps | P1 | Key differentiator — see Section 8 |
| AI CMA/BOV generation | P1 | Comps-based document generation |
| AI property flyer generation | P1 | One-click marketing materials |
| BI dashboards (GCI, pipeline, conversion) | P1 | AgentDashboards DNA |
| Commission tracking (splits, caps, referrals) | P1 | Revenue intelligence |
| AI email drafting (contextual) | P1 | One-click emails from CRM context |
| Meeting transcription + AI summaries | P1 | Zoom/Teams/Meet bot joins calls |
| Property data enrichment (ATTOM, Census) | P1 | Auto-enrich property records |
| Team features (sharing, permissions) | P1 | Multi-agent support |
| Crexi Listing API integration | P1 | Push listings to Crexi marketplace |

**Launch Team plan: $49/user/month**

### Phase 3: Platform (Months 6–12) — "Connected Ecosystem"

| Feature | Priority | Notes |
| --- | --- | --- |
| Crexi lead capture (CRM Integration Hub) | P2 | Inbound leads from Crexi |
| MLS integration (RESO/Spark) | P2 | Listings and comps from MLS |
| Listing syndication (LoopNet, Crexi, MLS) | P2 | Multi-platform publish |
| AI workflow automation suggestions | P2 | "I noticed you always do X — automate?" |
| Deal forecasting (ML model) | P2 | Predict monthly closings |
| Email campaigns (drip sequences) | P2 | AI-personalized nurture sequences |
| Property microsites (auto-generated) | P2 | Landing pages per listing |
| Investor tracking module | P2 | For investment-focused users |
| API access (open platform) | P2 | Third-party integrations |
| Brokerage plan + custom branding | P2 | White-label capabilities |

**Launch Brokerage plan: $39/user/month (10+ seats)**

### Phase 4: Dominance (Months 12–18) — "The Operating System"

| Feature | Priority | Notes |
| --- | --- | --- |
| Cross-product data flow (PP → CRESidekick → CO → AD) | P3 | Full lifecycle |
| NORA cross-product AI assistant | P3 | One AI across all 5 products |
| Residential + CRE unified mode | P3 | Smart UI adapts to deal type |
| Crexi deep data partnership | P3 | Programmatic access to 153M records |
| Advanced AI (underwriting agent, market agent) | P3 | Autonomous AI agents |
| Marketplace (third-party integrations) | P3 | AppExchange-style ecosystem |
| White-label for brokerages | P3 | Fully branded deployments |

---

## 11. Competitive Differentiation

### Why We Win: Feature-by-Feature vs. Top 3

| Feature | Buildout ($149/user) | AscendixRE ($99/user) | CRESidekick ($29–49/user) |
| --- | --- | --- | --- |
| Manual data entry required | Yes | Yes | **No — auto-logging** |
| Conversational interface | No | No | **Yes — NORA** |
| Voice-to-CRM | No | No | **Yes** |
| AI OM with retail maps | No | Templates only | **Yes — AI-generated with live data** |
| BI dashboards | Basic | Salesforce reports | **Full AgentDashboards-grade BI** |
| Commission intelligence | Basic | Basic | **Deep (splits, caps, forecasting)** |
| Lead scoring | Limited | Salesforce Einstein | **Native AI scoring** |
| Mobile offline | No | Salesforce offline | **Yes — native app** |
| Meeting auto-summaries | No | No | **Yes** |
| Crexi integration | No | No | **Yes (listing + leads)** |
| Residential + CRE | No | No | **Phase 4** |
| Self-service onboarding | No ($5K+ impl) | No ($2K+ impl) | **Yes — free** |
| Salesforce dependency | Yes (REThink) | Yes | **No** |
| Price (10 users/year) | $17,880 | $11,880 | **$3,480–$5,880** |

### Our Moats

1. **AI-native architecture** — Can't be replicated by bolting AI onto 15-year-old codebases
2. **Platform suite** — PP + CO + AD + CRESidekick = lead-to-close-to-intelligence pipeline nobody else has
3. **NORA** — Cross-product AI assistant with context across all user data
4. **Price** — 70% cheaper due to no Salesforce tax, no legacy overhead, efficient AI compute
5. **BI DNA** — AgentDashboards' analytics expertise embedded into CRM from day one
6. **Retail maps** — First CRM to auto-generate trade area maps with live data
7. **Zero-entry** — The first CRE CRM that truly requires no manual data entry

---

## Appendix: Crexi Integration Contacts & Requirements

| Item | Detail |
| --- | --- |
| Partnership email | `integrations@crexi.com` |
| Listing API docs | `https://api-docs.crexi.com/` (password-protected, requires agreement) |
| API gateway | `https://exchange.crexi.com/index.html` |
| Format | JSON or XML |
| Auth | API key (issued after partnership agreement) |
| CRM Hub requirement | Our CRM added to Crexi's Integration Hub partner list |
| Crexi Fuse | Embed code provided by Crexi CSM |
| Intelligence data API | Does NOT exist — requires custom partnership negotiation |

---

*Product plan based on competitive analysis of 15+ CRE platforms, Crexi API research, and AI CRM feature survey conducted March 12, 2026.*
