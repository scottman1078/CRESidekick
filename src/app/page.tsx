import Link from "next/link"
import {
  Building2,
  MessageSquare,
  BarChart3,
  FileText,
  Zap,
  Shield,
  Smartphone,
} from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Talk to Your CRM",
    description:
      "NORA, your AI assistant, handles data entry, drafts emails, and answers questions about your pipeline — all via natural language.",
  },
  {
    icon: Zap,
    title: "Zero Manual Entry",
    description:
      "Connect Gmail or Outlook and every email, meeting, and call is auto-logged. Never type a contact into your CRM again.",
  },
  {
    icon: FileText,
    title: "AI-Generated OMs",
    description:
      "Say 'Generate an OM for 123 Main St' and get a polished document with retail maps, demographics, comps, and financials in 30 seconds.",
  },
  {
    icon: BarChart3,
    title: "Built-In BI Dashboards",
    description:
      "GCI trends, pipeline velocity, conversion rates, lead source ROI, and commission forecasting — no CRM offers this depth.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First with Offline",
    description:
      "Native app with offline mode, voice-to-CRM, GPS-triggered property cards, and business card scanning.",
  },
  {
    icon: Shield,
    title: "70% Less Than Buildout",
    description:
      "$29–49/user/month with no add-ons, no Salesforce license, no implementation fees. Full AI included.",
  },
]

const pricing = [
  {
    name: "Solo",
    price: "$29",
    description: "For individual brokers",
    features: ["Full CRM + AI", "Mobile app with offline", "50 AI doc generations/mo", "Gmail/Outlook auto-logging"],
  },
  {
    name: "Team",
    price: "$49",
    description: "For teams of 2–25",
    features: ["Everything in Solo", "Team dashboards", "Pipeline sharing", "Admin controls", "200 AI docs/mo"],
    highlighted: true,
  },
  {
    name: "Brokerage",
    price: "$39",
    description: "For 25+ seats",
    features: ["Everything in Team", "Custom branding", "Brokerage-wide reporting", "API access", "Unlimited AI docs"],
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Building2 className="h-7 w-7 text-teal-600" />
            <span className="text-xl font-bold text-gray-900">CRESidekick</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          The AI-native CRM for
          <br />
          <span className="text-teal-600">commercial real estate</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
          Stop paying $150/user for a CRM that still needs manual data entry.
          CRESidekick auto-logs everything, generates your OMs, and gives you real business intelligence — starting at $29/user/month.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/signup"
            className="rounded-lg bg-teal-600 px-8 py-3 text-base font-medium text-white hover:bg-teal-700 transition-colors"
          >
            Start Free Trial
          </Link>
          <Link
            href="#features"
            className="rounded-lg border px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            See Features
          </Link>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-4">
            Everything your CRM should be
          </h2>
          <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
            Built AI-first, not AI-bolted-on. Every feature is powered by NORA, your AI sidekick.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-xl bg-white border p-8 shadow-sm">
                <feature.icon className="h-8 w-8 text-teal-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-center text-gray-500 mb-16">
            No add-ons. No implementation fees. No Salesforce license.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl border p-8 ${
                  plan.highlighted
                    ? "border-teal-600 ring-1 ring-teal-600 shadow-lg"
                    : "shadow-sm"
                }`}
              >
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.description}</p>
                <p className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">/user/month</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`mt-8 block w-full rounded-lg py-2.5 text-center text-sm font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-teal-600 text-white hover:bg-teal-700"
                      : "border text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="h-5 w-5 text-teal-600" />
            <span className="font-bold text-gray-900">CRESidekick</span>
          </div>
          <p className="text-sm text-gray-500">
            Built by AgentDashboards, LLC
          </p>
        </div>
      </footer>
    </div>
  )
}
