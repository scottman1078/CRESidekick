"use client"

import useSWR from "swr"
import { createClient } from "@/lib/supabase/client"
import type { Property } from "@/types"

const supabase = createClient()

async function fetchProperties(user_id: string): Promise<Property[]> {
  const { data, error } = await supabase
    .from("sc_properties")
    .select("*")
    .eq("user_id", user_id)
    .order("updated_at", { ascending: false })

  if (error) throw error
  return data ?? []
}

export function useProperties(user_id?: string) {
  return useSWR(
    user_id ? ["properties", user_id] : null,
    () => fetchProperties(user_id!),
    {
      fallbackData: [],
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  )
}
