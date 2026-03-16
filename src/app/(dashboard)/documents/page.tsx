"use client"

import { FileText, Plus, Sparkles } from "lucide-react"

export default function DocumentsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
          <p className="text-gray-500">AI-generated OMs, CMAs, flyers, and proposals</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-700 transition-colors">
          <Sparkles className="h-4 w-4" />
          Generate Document
        </button>
      </div>

      <div className="flex flex-col items-center justify-center rounded-xl border bg-white py-16 shadow-sm">
        <FileText className="h-12 w-12 text-gray-300 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-1">AI Document Generation</h3>
        <p className="text-sm text-gray-500 mb-6 text-center max-w-md">
          Tell NORA to generate an OM, CMA, or flyer for any property.
          Documents include retail trade area maps, demographics, comps, and financials.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg">
          {[
            { label: "Offering Memorandum", time: "~30s" },
            { label: "Comparative Market Analysis", time: "~15s" },
            { label: "Property Flyer", time: "~10s" },
          ].map((doc) => (
            <button
              key={doc.label}
              className="rounded-lg border p-4 text-left hover:border-teal-300 hover:bg-teal-50 transition-colors"
            >
              <p className="text-sm font-medium text-gray-900">{doc.label}</p>
              <p className="text-xs text-gray-400 mt-1">{doc.time}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
