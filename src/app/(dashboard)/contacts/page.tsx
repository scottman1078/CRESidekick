"use client"

import { useAuth } from "@/contexts/auth-context"
import { useContacts } from "@/hooks/use-contacts"
import { Users, Plus, Search } from "lucide-react"

export default function ContactsPage() {
  const { user } = useAuth()
  const { data: contacts, isLoading } = useContacts(user?.id)

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contacts</h1>
          <p className="text-gray-500">{contacts?.length ?? 0} contacts</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-700 transition-colors">
          <Plus className="h-4 w-4" />
          Add Contact
        </button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search contacts..."
            className="w-full rounded-lg border bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-12 text-gray-400">Loading...</div>
      ) : contacts && contacts.length > 0 ? (
        <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-500">Name</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500">Company</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500">Type</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500">Email</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500">Last Contact</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {contact.first_name} {contact.last_name}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{contact.company_id ?? "—"}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">
                      {contact.contact_type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{contact.email ?? "—"}</td>
                  <td className="px-6 py-4 text-gray-500">
                    {contact.last_contacted_at
                      ? new Date(contact.last_contacted_at).toLocaleDateString()
                      : "—"}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{contact.relationship_score ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl border bg-white py-16 shadow-sm">
          <Users className="h-12 w-12 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">No contacts yet</h3>
          <p className="text-sm text-gray-500 mb-4">
            Connect Gmail/Outlook to auto-import, or add contacts manually.
          </p>
          <button className="flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-700 transition-colors">
            <Plus className="h-4 w-4" />
            Add Your First Contact
          </button>
        </div>
      )}
    </div>
  )
}
