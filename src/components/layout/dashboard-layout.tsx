"use client"

import { Sidebar } from "./sidebar"
import { AuthProvider } from "@/contexts/auth-context"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <div className="p-8">{children}</div>
        </main>
      </div>
    </AuthProvider>
  )
}
