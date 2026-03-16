"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ChevronDown,
  FileText,
  Handshake,
  Menu,
  MessageSquare,
  Moon,
  Smartphone,
  Sparkles,
  Sun,
  Users,
  X,
  Zap,
} from "lucide-react"
// Styled link helpers (no asChild needed)
const btnBase = "inline-flex items-center justify-center rounded-lg font-semibold transition-colors"
const btnPrimary = `${btnBase} text-white bg-slate-900 dark:bg-teal-600 hover:bg-slate-800 dark:hover:bg-teal-500`
const btnGhost = `${btnBase} bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15 text-slate-900 dark:text-white`

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const dark = mounted && resolvedTheme === "dark"

  const painPoints = [
    { stat: "$149+", label: "Per User/Mo", desc: "What incumbents charge for bolted-on AI" },
    { stat: "10–15 min", label: "Per Lead", desc: "Manual data entry per new lead" },
    { stat: "4–7 tools", label: "Fragmented", desc: "Tools the average CRE broker juggles" },
    { stat: "0", label: "BI Dashboards", desc: "CRMs with agent-level analytics" },
  ]

  const features = [
    {
      icon: MessageSquare,
      title: "Talk to Your CRM",
      tagline: "NORA handles the busywork",
      features: [
        "Natural language queries and record creation",
        "AI drafts follow-up emails from context",
        "Auto-logs every call, email, and meeting",
        "Voice-to-CRM from your phone",
        "Smart automation suggestions",
      ],
      highlight: "Zero manual data entry. Period.",
    },
    {
      icon: FileText,
      title: "AI-Generated OMs",
      tagline: "No templates. No fill-in-the-blank.",
      features: [
        "Polished OMs with retail trade area maps",
        "Live demographics, comps, and financials",
        "CMAs from MLS + public records",
        "One-click property flyers",
        "Investor-ready documents in 30 seconds",
      ],
      highlight: "First CRM to auto-generate retail maps in OMs",
    },
    {
      icon: BarChart3,
      title: "Built-In Business Intelligence",
      tagline: "AgentDashboards DNA inside your CRM",
      features: [
        "GCI trends — YTD and trailing 12",
        "Pipeline velocity and conversion rates",
        "Lead source ROI tracking",
        "Commission forecasting with probability",
        "Team leaderboards and performance",
      ],
      highlight: "No CRM offers this depth of analytics",
    },
    {
      icon: Smartphone,
      title: "Mobile-First with Offline",
      tagline: "Works at a showing with no signal",
      features: [
        "Native iOS + Android app",
        "Offline contact and property lookup",
        "Voice memos auto-update records",
        "GPS-triggered property cards",
        "Photo a business card → AI creates contact",
      ],
      highlight: "Nobody else has offline CRE mobile",
    },
  ]

  const howItWorks = [
    { step: "01", title: "Sign up in 60 seconds", description: "No implementation fees, no Salesforce license, no IT department. Create your account and you're in." },
    { step: "02", title: "Connect Gmail or Outlook", description: "One-click OAuth. Every email, meeting, and calendar event auto-logs to your CRM. Zero manual entry from day one." },
    { step: "03", title: "Talk to NORA", description: "Add contacts, create deals, generate OMs, and check your pipeline — all through natural language. Your AI sidekick handles the rest." },
  ]

  const pricingTiers = [
    {
      name: "Solo",
      price: "$29",
      period: "/user/mo",
      description: "For individual brokers",
      features: ["Full CRM + AI", "Gmail/Outlook auto-logging", "Mobile app with offline", "50 AI doc generations/mo", "Map-based property search", "AI lead scoring"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Team",
      price: "$49",
      period: "/user/mo",
      description: "For teams of 2–25",
      features: ["Everything in Solo", "Team BI dashboards", "Pipeline sharing + visibility", "Commission tracking", "Admin controls", "200 AI docs/mo"],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Brokerage",
      price: "$39",
      period: "/user/mo (10+)",
      description: "For brokerages 25+",
      features: ["Everything in Team", "Custom branding", "Brokerage-wide reporting", "API access", "Unlimited AI docs", "Crexi integration"],
      cta: "Get Started",
      highlighted: false,
    },
  ]

  const faqs = [
    { q: "How is CRESidekick different from Buildout or AscendixRE?", a: "Those platforms were built 10+ years ago with AI bolted on after the fact. CRESidekick is AI-native — NORA is the product, not an add-on. You talk to your CRM instead of filling out forms. And at $29–49/user vs $99–249, you save 50–80%." },
    { q: "Do I need to manually enter data?", a: "No. Connect Gmail or Outlook and every email, meeting, and call is auto-logged. Voice memos on mobile auto-transcribe. NORA creates contacts from conversation context. Zero manual data entry." },
    { q: "Can it generate Offering Memorandums?", a: "Yes — and unlike template tools, NORA pulls live data: retail trade area maps with tenant locations, demographic rings, traffic counts, comps, and financial projections. A polished, investor-ready OM in about 30 seconds." },
    { q: "Does it work with residential deals too?", a: "Phase 4 of our roadmap adds a unified residential + commercial mode with smart UI that adapts to deal type. Currently focused on CRE, with residential support coming in 2027." },
    { q: "Is there a free trial?", a: "Yes — 14-day free trial on any plan, no credit card required. Self-service signup, live in under 2 minutes." },
    { q: "What data sources power the property intelligence?", a: "ATTOM for ownership and valuations, Census/ACS for demographics, Google Places for retail locations, Mapbox for maps and isochrones, MLS via RESO for comps, and Crexi integration for listings." },
  ]

  return (
    <div
      className={cn(
        "font-sans h-screen overflow-y-auto overflow-x-hidden transition-colors duration-300",
        "bg-white dark:bg-slate-950"
      )}
    >
      {/* ─── Navigation ─── */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md border-b transition-colors duration-300",
          "bg-white/90 dark:bg-slate-950/90 border-gray-100 dark:border-white/5"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-teal-500/15 flex items-center justify-center">
              <Building2 className="h-4.5 w-4.5 text-teal-500" />
            </div>
            <span className={cn("text-lg font-bold tracking-tight", "text-slate-900 dark:text-white")}>
              CRE<span className="text-teal-500">Sidekick</span>
            </span>
          </Link>
          <div className={cn("hidden md:flex items-center gap-6 text-sm font-medium", "text-gray-600 dark:text-gray-400")}>
            <a href="#features" className="transition-colors hover:text-gray-900 dark:hover:text-white">Features</a>
            <a href="#how-it-works" className="transition-colors hover:text-gray-900 dark:hover:text-white">How It Works</a>
            <a href="#pricing" className="transition-colors hover:text-gray-900 dark:hover:text-white">Pricing</a>
            <a href="#faq" className="transition-colors hover:text-gray-900 dark:hover:text-white">FAQ</a>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {mounted && (
              <button
                onClick={() => setTheme(dark ? "light" : "dark")}
                className="p-2 rounded-lg transition-colors text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
              >
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
            <Link href="/login" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Sign In
            </Link>
            <Link href="/signup" className={`${btnPrimary} h-9 px-4 text-sm`}>Get Started Free</Link>
          </div>
          <div className="flex md:hidden items-center gap-2">
            {mounted && (
              <button onClick={() => setTheme(dark ? "light" : "dark")} className="p-2 rounded-lg text-gray-500 dark:text-gray-400">
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
            <button className="p-2 text-gray-600 dark:text-gray-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className={cn("md:hidden mt-4 pb-4 border-t pt-4 space-y-3", "border-gray-100 dark:border-white/5")}>
            {["Features", "How It Works", "Pricing", "FAQ"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="block text-sm text-gray-600 dark:text-gray-400" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-gray-600 dark:text-gray-300">Sign In</Link>
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)} className={`${btnPrimary} w-fit h-8 px-3 text-sm`}>Get Started Free</Link>
            </div>
          </div>
        )}
      </nav>

      {/* ─── Hero ─── */}
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/25 mb-8">
            <Sparkles className="h-4 w-4 text-teal-500" />
            <span className="text-sm font-medium text-teal-500">AI-Native CRM for Commercial Real Estate</span>
          </div>

          <h1 className={cn("text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight", "text-slate-900 dark:text-white")}>
            Stop paying $150/user for a CRM
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 dark:from-teal-400 to-teal-500 dark:to-emerald-400">
              that still needs manual entry.
            </span>
          </h1>

          <p className={cn("text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed", "text-gray-700 dark:text-gray-300")}>
            CRESidekick auto-logs everything, generates your OMs with retail maps,
            and gives you real business intelligence —{" "}
            <span className="font-semibold text-slate-900 dark:text-white">starting at $29/user/month.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link href="/signup" className={`${btnPrimary} text-lg px-10 py-3.5 shadow-lg group dark:shadow-teal-500/20`}>
              <Zap className="mr-2 h-5 w-5 text-teal-500 dark:text-white" />
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-500">
            Free 14-day trial. No credit card required. Live in under 2 minutes.
          </p>
        </div>

        {/* Pain Points */}
        <div className="max-w-4xl mx-auto mt-16 mb-14">
          <p className="text-center text-xs text-gray-500 uppercase tracking-wider font-semibold mb-5">The CRE CRM problem</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {painPoints.map((point, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl border transition-colors border-gray-200 dark:border-white/5 hover:border-teal-500/30 dark:hover:border-teal-500/20 bg-white dark:bg-white/[0.02]">
                <span className="text-xl font-bold text-red-500 dark:text-red-400">{point.stat}</span>
                <span className="text-sm font-semibold text-center text-slate-900 dark:text-white">{point.label}</span>
                <span className="text-xs text-center leading-tight text-gray-600 dark:text-gray-500">{point.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={cn("text-3xl sm:text-4xl font-bold mb-4", "text-slate-900 dark:text-white")}>
              Everything your CRM should be
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Built AI-first, not AI-bolted-on. Every feature is powered by NORA, your AI sidekick.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <div key={i} className={cn(
                "group relative p-6 sm:p-8 rounded-2xl border transition-all duration-300",
                "bg-white dark:bg-white/[0.03] border-gray-200 dark:border-white/5",
                "hover:border-teal-500/30 hover:shadow-lg dark:hover:bg-white/[0.05]"
              )}>
                <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-4 transition-colors bg-teal-500/10 group-hover:bg-teal-500/15 dark:group-hover:bg-teal-500/20">
                  <feature.icon className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-teal-600 dark:text-teal-400 font-medium mb-4">{feature.tagline}</p>
                <ul className="space-y-2 mb-4">
                  {feature.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Check className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 bg-teal-500/10 rounded-full px-3 py-1 inline-block">
                  {feature.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={cn("text-3xl sm:text-4xl font-bold mb-4", "text-slate-900 dark:text-white")}>
              Live in under 2 minutes
            </h2>
            <p className="text-gray-600 dark:text-gray-400">No implementation fees. No IT department. No Salesforce license.</p>
          </div>
          <div className="space-y-8">
            {howItWorks.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="h-12 w-12 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-teal-500">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={cn("text-3xl sm:text-4xl font-bold mb-4", "text-slate-900 dark:text-white")}>
              Simple, transparent pricing
            </h2>
            <p className="text-gray-600 dark:text-gray-400">No add-ons. No implementation fees. No Salesforce license.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  "relative p-6 sm:p-8 rounded-2xl border transition-all",
                  tier.highlighted
                    ? "border-teal-500/50 shadow-lg bg-teal-500/5 shadow-teal-500/10"
                    : "border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.03]"
                )}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{tier.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{tier.description}</p>
                <p className="mb-6">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">{tier.price}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{tier.period}</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Check className="h-4 w-4 text-teal-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={cn(
                    btnBase, "w-full h-10 text-sm",
                    tier.highlighted
                      ? "bg-teal-600 hover:bg-teal-500 text-white"
                      : "bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15 text-slate-900 dark:text-white"
                  )}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-8">
            All plans include a 14-day free trial. Compare: Buildout is $149/user, AscendixRE is $99/user.
          </p>
        </div>
      </section>

      {/* ─── Comparison ─── */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={cn("text-3xl sm:text-4xl font-bold mb-4", "text-slate-900 dark:text-white")}>
              Why brokers switch to CRESidekick
            </h2>
          </div>
          <div className="rounded-2xl border overflow-hidden bg-white dark:bg-white/[0.03] border-gray-200 dark:border-white/5">
            <div className="grid grid-cols-3 text-sm font-semibold border-b border-gray-200 dark:border-white/5">
              <div className="p-4 text-gray-500">Feature</div>
              <div className="p-4 text-center text-gray-500">Incumbents</div>
              <div className="p-4 text-center text-teal-500">CRESidekick</div>
            </div>
            {[
              ["Manual data entry", "Required", "Zero — auto-logging"],
              ["AI documents (OMs)", "Templates only", "AI-generated with live data"],
              ["BI dashboards", "Basic / Salesforce", "Full AgentDashboards-grade"],
              ["Mobile offline", "No", "Yes — native app"],
              ["Price (10 users/yr)", "$12K–$18K", "$3,480–$5,880"],
              ["Implementation", "$2K–$50K", "Free — self-service"],
            ].map(([feature, incumbent, us], i) => (
              <div key={i} className={cn("grid grid-cols-3 text-sm", i % 2 === 0 ? "bg-gray-50/50 dark:bg-white/[0.01]" : "")}>
                <div className="p-4 font-medium text-slate-900 dark:text-white">{feature}</div>
                <div className="p-4 text-center text-gray-500">{incumbent}</div>
                <div className="p-4 text-center font-medium text-teal-600 dark:text-teal-400">{us}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={cn("text-3xl sm:text-4xl font-bold mb-4", "text-slate-900 dark:text-white")}>
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.03] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-slate-900 dark:text-white pr-4">{faq.q}</span>
                  <ChevronDown className={cn("h-5 w-5 text-gray-400 shrink-0 transition-transform", openFaq === i && "rotate-180")} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={cn("text-3xl sm:text-4xl font-bold mb-4", "text-slate-900 dark:text-white")}>
            Ready to ditch the $150/user CRM?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Join the brokers who stopped doing data entry and started closing deals.
          </p>
          <Link href="/signup" className={`${btnPrimary} text-lg px-10 py-3.5 group`}>
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-sm text-gray-500 mt-4">14-day free trial. No credit card required.</p>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-gray-100 dark:border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-teal-500" />
            <span className="font-bold text-slate-900 dark:text-white">CRE<span className="text-teal-500">Sidekick</span></span>
          </div>
          <p className="text-sm text-gray-500">Built by AgentDashboards, LLC</p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/login" className="hover:text-gray-900 dark:hover:text-white transition-colors">Sign In</Link>
            <Link href="/signup" className="hover:text-gray-900 dark:hover:text-white transition-colors">Sign Up</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
