// CRESidekick — Core Types
// Table prefix: sc_*

export interface Contact {
  id: string
  user_id: string
  first_name: string
  last_name: string
  email: string | null
  phone: string | null
  company_id: string | null
  title: string | null
  contact_type: "broker" | "client" | "investor" | "tenant" | "landlord" | "developer" | "other"
  relationship_score: number | null
  last_contacted_at: string | null
  source: string | null
  notes: string | null
  linkedin_url: string | null
  created_at: string
  updated_at: string
}

export interface Company {
  id: string
  user_id: string
  name: string
  industry: string | null
  website: string | null
  phone: string | null
  address: string | null
  city: string | null
  state: string | null
  zip: string | null
  notes: string | null
  created_at: string
  updated_at: string
}

export interface Property {
  id: string
  user_id: string
  name: string
  address: string
  city: string
  state: string
  zip: string
  latitude: number | null
  longitude: number | null
  property_type: "office" | "retail" | "industrial" | "multifamily" | "land" | "mixed-use" | "other"
  square_footage: number | null
  lot_size: number | null
  year_built: number | null
  zoning: string | null
  owner_name: string | null
  owner_contact_id: string | null
  assessed_value: number | null
  market_value: number | null
  cap_rate: number | null
  noi: number | null
  occupancy_rate: number | null
  parking_spaces: number | null
  notes: string | null
  created_at: string
  updated_at: string
}

export interface Deal {
  id: string
  user_id: string
  name: string
  deal_type: "sale" | "lease" | "investment" | "development"
  stage: string
  property_id: string | null
  contact_id: string | null
  company_id: string | null
  deal_value: number | null
  commission_rate: number | null
  commission_amount: number | null
  probability: number | null
  expected_close_date: string | null
  actual_close_date: string | null
  notes: string | null
  ai_score: number | null
  created_at: string
  updated_at: string
}

export interface Activity {
  id: string
  user_id: string
  contact_id: string | null
  deal_id: string | null
  property_id: string | null
  activity_type: "email" | "call" | "meeting" | "note" | "showing" | "task" | "sms"
  subject: string | null
  description: string | null
  occurred_at: string
  source: "manual" | "gmail" | "outlook" | "twilio" | "calendar" | "mobile" | "nora"
  ai_summary: string | null
  created_at: string
}

export interface Document {
  id: string
  user_id: string
  property_id: string | null
  deal_id: string | null
  document_type: "om" | "cma" | "flyer" | "lease_proposal" | "client_report" | "investment_summary"
  title: string
  status: "generating" | "draft" | "final"
  file_url: string | null
  ai_generated: boolean
  created_at: string
  updated_at: string
}

export interface LeadScore {
  id: string
  contact_id: string
  score: number
  factors: Record<string, number>
  calculated_at: string
}

export interface KpiSnapshot {
  id: string
  user_id: string
  date: string
  gci_ytd: number
  gci_trailing_12: number
  active_deals: number
  pipeline_value: number
  avg_days_in_pipeline: number
  conversion_rate: number
  avg_deal_size: number
}

export interface DealStage {
  id: string
  user_id: string
  deal_type: Deal["deal_type"]
  name: string
  order: number
  color: string
}

export interface User {
  id: string
  email: string
  full_name: string
  avatar_url: string | null
  role: "solo" | "team_member" | "team_lead" | "admin"
  plan: "solo" | "team" | "brokerage"
  team_id: string | null
  created_at: string
}
