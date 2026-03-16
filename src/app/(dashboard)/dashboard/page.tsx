"use client"

import { useAuth } from "@/contexts/auth-context"
import { useDeals } from "@/hooks/use-deals"
import { useContacts } from "@/hooks/use-contacts"
import { useProperties } from "@/hooks/use-properties"
import {
  DollarSign,
  Users,
  Building2,
  Handshake,
  TrendingUp,
  Clock,
} from "lucide-react"

function StatCard({
  label,
  value,
  icon: Icon,
  trend,
}: {
  label: string
  value: string | number
  icon: React.ElementType
  trend?: string
}) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <Icon className="h-5 w-5 text-teal-600" />
      </div>
      <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
      {trend && (
        <p className="mt-1 text-sm text-teal-600 flex items-center gap-1">
          <TrendingUp className="h-3 w-3" />
          {trend}
        </p>
      )}
    </div>
  )
}

export default function DashboardPage() {
  const { user, profile } = useAuth()
  const { data: deals } = useDeals(user?.id)
  const { data: contacts } = useContacts(user?.id)
  const { data: properties } = useProperties(user?.id)

  const activeDeals = deals?.filter((d) => !d.actual_close_date) ?? []
  const pipelineValue = activeDeals.reduce((sum, d) => sum + (d.deal_value ?? 0), 0)
  const projectedCommission = activeDeals.reduce(
    (sum, d) => sum + (d.commission_amount ?? 0) * ((d.probability ?? 50) / 100),
    0
  )

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back{profile?.full_name ? `, ${profile.full_name.split(" ")[0]}` : ""}
        </h1>
        <p className="text-gray-500">Here&apos;s your business at a glance.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Active Deals"
          value={activeDeals.length}
          icon={Handshake}
        />
        <StatCard
          label="Pipeline Value"
          value={`$${pipelineValue.toLocaleString()}`}
          icon={DollarSign}
        />
        <StatCard
          label="Contacts"
          value={contacts?.length ?? 0}
          icon={Users}
        />
        <StatCard
          label="Properties"
          value={properties?.length ?? 0}
          icon={Building2}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="flex items-center justify-center h-48 text-gray-400">
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm">Activities will appear here once Gmail/Outlook is connected</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Projected Commission</h2>
          <p className="text-4xl font-bold text-teal-600">
            ${projectedCommission.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
          <p className="text-sm text-gray-500 mt-1">Based on pipeline probability</p>
          <div className="mt-6 flex items-center justify-center h-32 text-gray-400">
            <p className="text-sm">Pipeline chart coming in Phase 2</p>
          </div>
        </div>
      </div>
    </div>
  )
}
