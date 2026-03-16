"use client"

import { useAuth } from "@/contexts/auth-context"
import { useDeals } from "@/hooks/use-deals"
import { Handshake, Plus, DollarSign } from "lucide-react"
import { cn } from "@/lib/utils"

const DEFAULT_STAGES = [
  { name: "Prospect", color: "bg-gray-100 text-gray-700" },
  { name: "Contacted", color: "bg-blue-50 text-blue-700" },
  { name: "Proposal", color: "bg-yellow-50 text-yellow-700" },
  { name: "Negotiation", color: "bg-orange-50 text-orange-700" },
  { name: "Under Contract", color: "bg-purple-50 text-purple-700" },
  { name: "Closed", color: "bg-teal-50 text-teal-700" },
]

export default function DealsPage() {
  const { user } = useAuth()
  const { data: deals, isLoading } = useDeals(user?.id)

  const activeDeals = deals?.filter((d) => !d.actual_close_date) ?? []
  const pipelineValue = activeDeals.reduce((sum, d) => sum + (d.deal_value ?? 0), 0)

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Deal Pipeline</h1>
          <p className="text-gray-500">
            {activeDeals.length} active deals &middot; ${pipelineValue.toLocaleString()} pipeline
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-700 transition-colors">
          <Plus className="h-4 w-4" />
          Add Deal
        </button>
      </div>

      {isLoading ? (
        <div className="text-center py-12 text-gray-400">Loading...</div>
      ) : deals && deals.length > 0 ? (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {DEFAULT_STAGES.map((stage) => {
            const stageDeals = deals.filter((d) => d.stage === stage.name)
            return (
              <div key={stage.name} className="flex-shrink-0 w-72">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={cn("text-sm font-semibold rounded-full px-3 py-1", stage.color)}>
                    {stage.name}
                  </h3>
                  <span className="text-xs text-gray-400">{stageDeals.length}</span>
                </div>
                <div className="space-y-3">
                  {stageDeals.map((deal) => (
                    <div
                      key={deal.id}
                      className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <h4 className="font-medium text-gray-900 mb-1">{deal.name}</h4>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 mb-2">
                        {deal.deal_type}
                      </span>
                      {deal.deal_value && (
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <DollarSign className="h-3 w-3" />
                          {deal.deal_value.toLocaleString()}
                        </div>
                      )}
                      {deal.probability !== null && deal.probability !== undefined && (
                        <div className="mt-2">
                          <div className="flex justify-between text-xs text-gray-400 mb-1">
                            <span>AI Score</span>
                            <span>{deal.probability}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-gray-100">
                            <div
                              className="h-1.5 rounded-full bg-teal-500"
                              style={{ width: `${deal.probability}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl border bg-white py-16 shadow-sm">
          <Handshake className="h-12 w-12 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">No deals yet</h3>
          <p className="text-sm text-gray-500 mb-4">
            Create your first deal or tell NORA about it.
          </p>
          <button className="flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-700 transition-colors">
            <Plus className="h-4 w-4" />
            Add Your First Deal
          </button>
        </div>
      )}
    </div>
  )
}
