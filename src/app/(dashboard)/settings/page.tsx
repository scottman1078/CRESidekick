"use client"

import { useAuth } from "@/contexts/auth-context"
import { Settings, Mail, Calendar, Phone, CreditCard } from "lucide-react"

export default function SettingsPage() {
  const { profile } = useAuth()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500">Manage your account and integrations</p>
      </div>

      <div className="space-y-6 max-w-2xl">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="h-5 w-5 text-teal-600" />
            <h2 className="text-lg font-semibold text-gray-900">Profile</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                defaultValue={profile?.full_name ?? ""}
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                defaultValue={profile?.email ?? ""}
                disabled
                className="mt-1 w-full rounded-lg border bg-gray-50 px-3 py-2 text-sm text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Integrations</h2>
          <div className="space-y-3">
            {[
              { icon: Mail, label: "Gmail / Outlook", desc: "Auto-log emails and create contacts", status: "Connect" },
              { icon: Calendar, label: "Google / Outlook Calendar", desc: "Auto-log meetings", status: "Connect" },
              { icon: Phone, label: "Twilio (Calls & SMS)", desc: "Track calls and messages", status: "Connect" },
            ].map((integration) => (
              <div key={integration.label} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center gap-3">
                  <integration.icon className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{integration.label}</p>
                    <p className="text-xs text-gray-500">{integration.desc}</p>
                  </div>
                </div>
                <button className="text-sm font-medium text-teal-600 hover:text-teal-700">
                  {integration.status}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="h-5 w-5 text-teal-600" />
            <h2 className="text-lg font-semibold text-gray-900">Subscription</h2>
          </div>
          <p className="text-sm text-gray-500">
            Current plan: <span className="font-medium text-gray-900 capitalize">{profile?.plan ?? "solo"}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
