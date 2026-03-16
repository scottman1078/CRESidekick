"use client"

import useSWR from "swr"
import { createClient } from "@/lib/supabase/client"
import type { Contact } from "@/types"

const supabase = createClient()

async function fetchContacts(user_id: string): Promise<Contact[]> {
  const { data, error } = await supabase
    .from("sc_contacts")
    .select("*")
    .eq("user_id", user_id)
    .order("updated_at", { ascending: false })

  if (error) throw error
  return data ?? []
}

export function useContacts(user_id?: string) {
  return useSWR(
    user_id ? ["contacts", user_id] : null,
    () => fetchContacts(user_id!),
    {
      fallbackData: [],
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  )
}
