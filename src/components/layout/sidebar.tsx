"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Building2,
  Handshake,
  FileText,
  BarChart3,
  Settings,
  MessageSquare,
  LogOut,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/auth-context"

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/contacts", label: "Contacts", icon: Users },
  { href: "/properties", label: "Properties", icon: Building2 },
  { href: "/deals", label: "Deals", icon: Handshake },
  { href: "/documents", label: "Documents", icon: FileText },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const { profile, signOut } = useAuth()

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <Building2 className="h-7 w-7 text-teal-600" />
        <span className="text-xl font-bold text-gray-900">CRESidekick</span>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-teal-50 text-teal-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="border-t p-3">
        <button
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-teal-700 bg-teal-50 hover:bg-teal-100 transition-colors mb-2"
        >
          <MessageSquare className="h-5 w-5" />
          Ask NORA
        </button>

        <div className="flex items-center justify-between px-3 py-2">
          <div className="truncate">
            <p className="text-sm font-medium text-gray-900 truncate">
              {profile?.full_name ?? "Loading..."}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {profile?.plan ?? "solo"} plan
            </p>
          </div>
          <button
            onClick={signOut}
            className="text-gray-400 hover:text-gray-600"
            title="Sign out"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  )
}
