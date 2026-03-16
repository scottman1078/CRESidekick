"use client"

import useSWR from "swr"
import { createClient } from "@/lib/supabase/client"
import type { Deal } from "@/types"

const supabase = createClient()

async function fetchDeals(user_id: string): Promise<Deal[]> {
  const { data, error } = await supabase
    .from("sc_deals")
    .select("*")
    .eq("user_id", user_id)
    .order("updated_at", { ascending: false })

  if (error) throw error
  return data ?? []
}

export function useDeals(user_id?: string) {
  return useSWR(
    user_id ? ["deals", user_id] : null,
    () => fetchDeals(user_id!),
    {
      fallbackData: [],
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  )
}
