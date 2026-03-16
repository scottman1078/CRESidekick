"use client"

import { BarChart3, TrendingUp, Target, DollarSign } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-500">Your business intelligence dashboard</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="h-5 w-5 text-teal-600" />
            <h2 className="text-lg font-semibold text-gray-900">GCI Trends</h2>
          </div>
          <div className="flex items-center justify-center h-64 text-gray-400">
            <p className="text-sm">GCI chart — Phase 2</p>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-teal-600" />
            <h2 className="text-lg font-semibold text-gray-900">Pipeline Velocity</h2>
          </div>
          <div className="flex items-center justify-center h-64 text-gray-400">
            <p className="text-sm">Velocity metrics — Phase 2</p>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-5 w-5 text-teal-600" />
            <h2 className="text-lg font-semibold text-gray-900">Conversion Rates</h2>
          </div>
          <div className="flex items-center justify-center h-64 text-gray-400">
            <p className="text-sm">Conversion funnel — Phase 2</p>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="h-5 w-5 text-teal-600" />
            <h2 className="text-lg font-semibold text-gray-900">Lead Source ROI</h2>
          </div>
          <div className="flex items-center justify-center h-64 text-gray-400">
            <p className="text-sm">Lead source analysis — Phase 2</p>
          </div>
        </div>
      </div>
    </div>
  )
}
