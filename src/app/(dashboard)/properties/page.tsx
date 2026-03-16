"use client"

import { useAuth } from "@/contexts/auth-context"
import { useProperties } from "@/hooks/use-properties"
import { Building2, Plus, Search, Map } from "lucide-react"

export default function PropertiesPage() {
  const { user } = useAuth()
  const { data: properties, isLoading } = useProperties(user?.id)

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Properties</h1>
          <p className="text-gray-500">{properties?.length ?? 0} properties</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Map className="h-4 w-4" />
            Map View
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-700 transition-colors">
            <Plus className="h-4 w-4" />
            Add Property
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by address, city, or property type..."
            className="w-full rounded-lg border bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-12 text-gray-400">Loading...</div>
      ) : properties && properties.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div
              key={property.id}
              className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">
                  {property.property_type}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{property.name}</h3>
              <p className="text-sm text-gray-500 mb-4">
                {property.address}, {property.city}, {property.state} {property.zip}
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {property.square_footage && (
                  <div>
                    <span className="text-gray-400">Size</span>
                    <p className="font-medium text-gray-900">
                      {property.square_footage.toLocaleString()} SF
                    </p>
                  </div>
                )}
                {property.cap_rate && (
                  <div>
                    <span className="text-gray-400">Cap Rate</span>
                    <p className="font-medium text-gray-900">{property.cap_rate}%</p>
                  </div>
                )}
                {property.market_value && (
                  <div>
                    <span className="text-gray-400">Value</span>
                    <p className="font-medium text-gray-900">
                      ${property.market_value.toLocaleString()}
                    </p>
                  </div>
                )}
                {property.occupancy_rate !== null && property.occupancy_rate !== undefined && (
                  <div>
                    <span className="text-gray-400">Occupancy</span>
                    <p className="font-medium text-gray-900">{property.occupancy_rate}%</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl border bg-white py-16 shadow-sm">
          <Building2 className="h-12 w-12 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">No properties yet</h3>
          <p className="text-sm text-gray-500 mb-4">
            Add properties manually or let NORA import from your emails.
          </p>
          <button className="flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-700 transition-colors">
            <Plus className="h-4 w-4" />
            Add Your First Property
          </button>
        </div>
      )}
    </div>
  )
}
