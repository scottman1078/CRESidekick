-- CRESidekick Initial Schema
-- Table prefix: sc_*
-- All tables use RLS with user_id isolation

-- ============================================================
-- USERS
-- ============================================================
create table sc_users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text not null,
  avatar_url text,
  role text not null default 'solo' check (role in ('solo', 'team_member', 'team_lead', 'admin')),
  plan text not null default 'solo' check (plan in ('solo', 'team', 'brokerage')),
  team_id uuid,
  created_at timestamptz not null default now()
);

alter table sc_users enable row level security;
create policy "Users can read own profile" on sc_users for select using (auth.uid() = id);
create policy "Users can update own profile" on sc_users for update using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into sc_users (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1))
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- ============================================================
-- COMPANIES
-- ============================================================
create table sc_companies (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references sc_users(id) on delete cascade,
  name text not null,
  industry text,
  website text,
  phone text,
  address text,
  city text,
  state text,
  zip text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_sc_companies_user on sc_companies(user_id);
alter table sc_companies enable row level security;
create policy "Users manage own companies" on sc_companies for all using (auth.uid() = user_id);

-- ============================================================
-- CONTACTS
-- ============================================================
create table sc_contacts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references sc_users(id) on delete cascade,
  first_name text not null,
  last_name text not null,
  email text,
  phone text,
  company_id uuid references sc_companies(id) on delete set null,
  title text,
  contact_type text not null default 'other' check (contact_type in ('broker', 'client', 'investor', 'tenant', 'landlord', 'developer', 'other')),
  relationship_score numeric,
  last_contacted_at timestamptz,
  source text,
  notes text,
  linkedin_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_sc_contacts_user on sc_contacts(user_id);
create index idx_sc_contacts_company on sc_contacts(company_id);
create index idx_sc_contacts_email on sc_contacts(email);
alter table sc_contacts enable row level security;
create policy "Users manage own contacts" on sc_contacts for all using (auth.uid() = user_id);

-- ============================================================
-- PROPERTIES
-- ============================================================
create table sc_properties (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references sc_users(id) on delete cascade,
  name text not null,
  address text not null,
  city text not null,
  state text not null,
  zip text not null,
  latitude numeric,
  longitude numeric,
  property_type text not null default 'other' check (property_type in ('office', 'retail', 'industrial', 'multifamily', 'land', 'mixed-use', 'other')),
  square_footage numeric,
  lot_size numeric,
  year_built integer,
  zoning text,
  owner_name text,
  owner_contact_id uuid references sc_contacts(id) on delete set null,
  assessed_value numeric,
  market_value numeric,
  cap_rate numeric,
  noi numeric,
  occupancy_rate numeric,
  parking_spaces integer,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_sc_properties_user on sc_properties(user_id);
create index idx_sc_properties_type on sc_properties(property_type);
create index idx_sc_properties_location on sc_properties(city, state);
alter table sc_properties enable row level security;
create policy "Users manage own properties" on sc_properties for all using (auth.uid() = user_id);

-- ============================================================
-- DEAL STAGES (customizable per user)
-- ============================================================
create table sc_deal_stages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references sc_users(id) on delete cascade,
  deal_type text not null check (deal_type in ('sale', 'lease', 'investment', 'development')),
  name text not null,
  "order" integer not null,
  color text not null default '#6B7280',
  created_at timestamptz not null default now()
);

create index idx_sc_deal_stages_user on sc_deal_stages(user_id);
alter table sc_deal_stages enable row level security;
create policy "Users manage own deal stages" on sc_deal_stages for all using (auth.uid() = user_id);

-- ============================================================
-- DEALS
-- ============================================================
create table sc_deals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references sc_users(id) on delete cascade,
  name text not null,
  deal_type text not null default 'sale' check (deal_type in ('sale', 'lease', 'investment', 'development')),
  stage text not null default 'Prospect',
  property_id uuid references sc_properties(id) on delete set null,
  contact_id uuid references sc_contacts(id) on delete set null,
  company_id uuid references sc_companies(id) on delete set null,
  deal_value numeric,
  commission_rate numeric,
  commission_amount numeric,
  probability numeric,
  expected_close_date date,
  actual_close_date date,
  notes text,
  ai_score numeric,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_sc_deals_user on sc_deals(user_id);
create index idx_sc_deals_stage on sc_deals(stage);
create index idx_sc_deals_property on sc_deals(property_id);
create index idx_sc_deals_contact on sc_deals(contact_id);
alter table sc_deals enable row level security;
create policy "Users manage own deals" on sc_deals for all using (auth.uid() = user_id);

-- ============================================================
-- ACTIVITIES
-- ============================================================
create table sc_activities (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references sc_users(id) on delete cascade,
  contact_id uuid references sc_contacts(id) on delete set null,
  deal_id uuid references sc_deals(id) on delete set null,
  property_id uuid references sc_properties(id) on delete set null,
  activity_type text not null check (activity_type in ('email', 'call', 'meeting', 'note', 'showing', 'task', 'sms')),
  subject text,
  description text,
  occurred_at timestamptz not null default now(),
  source text not null default 'manual' check (source in ('manual', 'gmail', 'outlook', 'twilio', 'calendar', 'mobile', 'nora')),
  ai_summary text,
  created_at timestamptz not null default now()
);

create index idx_sc_activities_user on sc_activities(user_id);
create index idx_sc_activities_contact on sc_activities(contact_id);
create index idx_sc_activities_deal on sc_activities(deal_id);
create index idx_sc_activities_occurred on sc_activities(occurred_at desc);
alter table sc_activities enable row level security;
create policy "Users manage own activities" on sc_activities for all using (auth.uid() = user_id);

-- ============================================================
-- TASKS
-- ============================================================
create table sc_tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references sc_users(id) on delete cascade,
  contact_id uuid references sc_contacts(id) on delete set null,
  deal_id uuid references sc_deals(id) on delete set null,
  property_id uuid references sc_properties(id) on delete set null,
  title text not null,
  description text,
  due_date timestamptz,
  priority text not null default 'medium' check (priority in ('low', 'medium', 'high', 'urgent')),
  status text not null default 'pending' check (status in ('pending', 'in_progress', 'completed', 'cancelled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_sc_tasks_user on sc_tasks(user_id);
create index idx_sc_tasks_due on sc_tasks(due_date);
create index idx_sc_tasks_status on sc_tasks(status);
alter table sc_tasks enable row level security;
create policy "Users manage own tasks" on sc_tasks for all using (auth.uid() = user_id);

-- ============================================================
-- INTELLIGENCE: COMPS
-- ============================================================
create table sc_comps (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references sc_users(id) on delete cascade,
  property_id uuid references sc_properties(id) on delete set null,
  comp_type text not null check (comp_type in ('sale', 'lease')),
  address text not null,
  city text not null,
  state text not null,
  property_type text,
  square_footage numeric,
  sale_price numeric,
  price_per_sqft numeric,
  cap_rate numeric,
  lease_rate numeric,
  lease_type text,
  sale_date date,
  source text,
  notes text,
  created_at timestamptz not null default now()
);

create index idx_sc_comps_user on sc_comps(user_id);
create index idx_sc_comps_property on sc_comps(property_id);
alter table sc_comps enable row level security;
create policy "Users manage own comps" on sc_comps for all using (auth.uid() = user_id);

-- ============================================================
-- INTELLIGENCE: DEMOGRAPHICS CACHE
-- ============================================================
create table sc_demographics (
  id uuid primary key default gen_random_uuid(),
  latitude numeric not null,
  longitude numeric not null,
  radius_miles numeric not null,
  population integer,
  median_household_income numeric,
  average_household_income numeric,
  daytime_population integer,
  total_households integer,
  average_household_size numeric,
  median_age numeric,
  traffic_count integer,
  fetched_at timestamptz not null default now(),
  source text,
  raw_data jsonb
);

create index idx_sc_demographics_location on sc_demographics(latitude, longitude, radius_miles);

-- ============================================================
-- INTELLIGENCE: RETAIL TENANTS (for trade area maps)
-- ============================================================
create table sc_retail_tenants (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null check (category in ('anchor', 'national', 'regional', 'local')),
  business_type text,
  latitude numeric not null,
  longitude numeric not null,
  address text,
  city text,
  state text,
  source text,
  fetched_at timestamptz not null default now()
);

create index idx_sc_retail_tenants_location on sc_retail_tenants(latitude, longitude);
create index idx_sc_retail_tenants_category on sc_retail_tenants(category);

-- ============================================================
-- INTELLIGENCE: ENRICHMENT CACHE
-- ============================================================
create table sc_enrichment_cache (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references sc_properties(id) on delete cascade,
  source text not null,
  data jsonb not null,
  fetched_at timestamptz not null default now(),
  expires_at timestamptz
);

create index idx_sc_enrichment_property on sc_enrichment_cache(property_id);

-- ============================================================
-- DOCUMENTS
-- ============================================================
create table sc_documents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references sc_users(id) on delete cascade,
  property_id uuid references sc_properties(id) on delete set null,
  deal_id uuid references sc_deals(id) on delete set null,
  document_type text not null check (document_type in ('om', 'cma', 'flyer', 'lease_proposal', 'client_report', 'investment_summary')),
  title text not null,
  status text not null default 'generating' check (status in ('generating', 'draft', 'final')),
  file_url text,
  ai_generated boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_sc_documents_user on sc_documents(user_id);
create index idx_sc_documents_property on sc_documents(property_id);
alter table sc_documents enable row level security;
create policy "Users manage own documents" on sc_documents for all using (auth.uid() = user_id);

-- ============================================================
-- DOCUMENT ASSETS (maps, images, charts)
-- ============================================================
create table sc_document_assets (
  id uuid primary key default gen_random_uuid(),
  document_id uuid not null references sc_documents(id) on delete cascade,
  asset_type text not null check (asset_type in ('map', 'image', 'chart', 'table')),
  file_url text not null,
  metadata jsonb,
  created_at timestamptz not null default now()
);

create index idx_sc_document_assets_doc on sc_document_assets(document_id);

-- ============================================================
-- MARKETING: CAMPAIGNS
-- ============================================================
create table sc_campaigns (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references sc_users(id) on delete cascade,
  name text not null,
  campaign_type text not null default 'drip' check (campaign_type in ('drip', 'blast', 'nurture')),
  subject text,
  body text,
  status text not null default 'draft' check (status in ('draft', 'active', 'paused', 'completed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_sc_campaigns_user on sc_campaigns(user_id);
alter table sc_campaigns enable row level security;
create policy "Users manage own campaigns" on sc_campaigns for all using (auth.uid() = user_id);

-- ============================================================
-- MARKETING: CAMPAIGN SENDS
-- ============================================================
create table sc_campaign_sends (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references sc_campaigns(id) on delete cascade,
  contact_id uuid not null references sc_contacts(id) on delete cascade,
  sent_at timestamptz,
  opened_at timestamptz,
  clicked_at timestamptz,
  status text not null default 'pending' check (status in ('pending', 'sent', 'delivered', 'opened', 'clicked', 'bounced', 'failed'))
);

create index idx_sc_campaign_sends_campaign on sc_campaign_sends(campaign_id);
create index idx_sc_campaign_sends_contact on sc_campaign_sends(contact_id);

-- ============================================================
-- MARKETING: LISTINGS
-- ============================================================
create table sc_listings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references sc_users(id) on delete cascade,
  property_id uuid not null references sc_properties(id) on delete cascade,
  listing_type text not null check (listing_type in ('sale', 'lease')),
  asking_price numeric,
  lease_rate numeric,
  status text not null default 'active' check (status in ('draft', 'active', 'under_contract', 'closed', 'withdrawn')),
  description text,
  syndicated_crexi boolean not null default false,
  syndicated_loopnet boolean not null default false,
  syndicated_mls boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_sc_listings_user on sc_listings(user_id);
create index idx_sc_listings_property on sc_listings(property_id);
alter table sc_listings enable row level security;
create policy "Users manage own listings" on sc_listings for all using (auth.uid() = user_id);

-- ============================================================
-- ANALYTICS: LEAD SCORES
-- ============================================================
create table sc_lead_scores (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references sc_contacts(id) on delete cascade,
  score numeric not null,
  factors jsonb not null default '{}',
  calculated_at timestamptz not null default now()
);

create index idx_sc_lead_scores_contact on sc_lead_scores(contact_id);

-- ============================================================
-- ANALYTICS: DEAL FORECASTS
-- ============================================================
create table sc_deal_forecasts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references sc_users(id) on delete cascade,
  deal_id uuid not null references sc_deals(id) on delete cascade,
  predicted_close_date date,
  predicted_value numeric,
  confidence numeric,
  factors jsonb,
  calculated_at timestamptz not null default now()
);

create index idx_sc_deal_forecasts_user on sc_deal_forecasts(user_id);
create index idx_sc_deal_forecasts_deal on sc_deal_forecasts(deal_id);
alter table sc_deal_forecasts enable row level security;
create policy "Users manage own forecasts" on sc_deal_forecasts for all using (auth.uid() = user_id);

-- ============================================================
-- ANALYTICS: KPI SNAPSHOTS (daily)
-- ============================================================
create table sc_kpi_snapshots (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references sc_users(id) on delete cascade,
  date date not null,
  gci_ytd numeric not null default 0,
  gci_trailing_12 numeric not null default 0,
  active_deals integer not null default 0,
  pipeline_value numeric not null default 0,
  avg_days_in_pipeline numeric not null default 0,
  conversion_rate numeric not null default 0,
  avg_deal_size numeric not null default 0,
  created_at timestamptz not null default now()
);

create unique index idx_sc_kpi_snapshots_user_date on sc_kpi_snapshots(user_id, date);
alter table sc_kpi_snapshots enable row level security;
create policy "Users manage own KPI snapshots" on sc_kpi_snapshots for all using (auth.uid() = user_id);

-- ============================================================
-- INTEGRATION: CREXI
-- ============================================================
create table sc_crexi_sync (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references sc_listings(id) on delete cascade,
  crexi_listing_id text,
  last_synced_at timestamptz,
  sync_status text not null default 'pending' check (sync_status in ('pending', 'synced', 'error')),
  error_message text
);

create index idx_sc_crexi_sync_listing on sc_crexi_sync(listing_id);

create table sc_crexi_leads (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references sc_users(id) on delete cascade,
  listing_id uuid references sc_listings(id) on delete set null,
  contact_id uuid references sc_contacts(id) on delete set null,
  crexi_event_type text not null,
  lead_data jsonb,
  processed boolean not null default false,
  received_at timestamptz not null default now()
);

create index idx_sc_crexi_leads_user on sc_crexi_leads(user_id);
alter table sc_crexi_leads enable row level security;
create policy "Users manage own Crexi leads" on sc_crexi_leads for all using (auth.uid() = user_id);

-- ============================================================
-- INTEGRATION: EMAIL & CALENDAR SYNC
-- ============================================================
create table sc_email_sync (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references sc_users(id) on delete cascade,
  provider text not null check (provider in ('gmail', 'outlook')),
  access_token text,
  refresh_token text,
  token_expires_at timestamptz,
  last_synced_at timestamptz,
  sync_cursor text,
  status text not null default 'disconnected' check (status in ('disconnected', 'connected', 'syncing', 'error')),
  created_at timestamptz not null default now()
);

create unique index idx_sc_email_sync_user_provider on sc_email_sync(user_id, provider);
alter table sc_email_sync enable row level security;
create policy "Users manage own email sync" on sc_email_sync for all using (auth.uid() = user_id);

create table sc_calendar_sync (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references sc_users(id) on delete cascade,
  provider text not null check (provider in ('google', 'outlook')),
  access_token text,
  refresh_token text,
  token_expires_at timestamptz,
  last_synced_at timestamptz,
  sync_cursor text,
  status text not null default 'disconnected' check (status in ('disconnected', 'connected', 'syncing', 'error')),
  created_at timestamptz not null default now()
);

create unique index idx_sc_calendar_sync_user_provider on sc_calendar_sync(user_id, provider);
alter table sc_calendar_sync enable row level security;
create policy "Users manage own calendar sync" on sc_calendar_sync for all using (auth.uid() = user_id);

-- ============================================================
-- UPDATED_AT TRIGGER (auto-update on all tables with updated_at)
-- ============================================================
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger tr_sc_companies_updated before update on sc_companies for each row execute function update_updated_at();
create trigger tr_sc_contacts_updated before update on sc_contacts for each row execute function update_updated_at();
create trigger tr_sc_properties_updated before update on sc_properties for each row execute function update_updated_at();
create trigger tr_sc_deals_updated before update on sc_deals for each row execute function update_updated_at();
create trigger tr_sc_tasks_updated before update on sc_tasks for each row execute function update_updated_at();
create trigger tr_sc_documents_updated before update on sc_documents for each row execute function update_updated_at();
create trigger tr_sc_campaigns_updated before update on sc_campaigns for each row execute function update_updated_at();
create trigger tr_sc_listings_updated before update on sc_listings for each row execute function update_updated_at();

-- ============================================================
-- DEFAULT DEAL STAGES (inserted per new user via trigger)
-- ============================================================
create or replace function create_default_deal_stages()
returns trigger as $$
begin
  insert into sc_deal_stages (user_id, deal_type, name, "order", color) values
    (new.id, 'sale', 'Prospect', 1, '#6B7280'),
    (new.id, 'sale', 'Contacted', 2, '#3B82F6'),
    (new.id, 'sale', 'Proposal', 3, '#EAB308'),
    (new.id, 'sale', 'Negotiation', 4, '#F97316'),
    (new.id, 'sale', 'Under Contract', 5, '#8B5CF6'),
    (new.id, 'sale', 'Closed', 6, '#0D9488'),
    (new.id, 'lease', 'Prospect', 1, '#6B7280'),
    (new.id, 'lease', 'Tour Scheduled', 2, '#3B82F6'),
    (new.id, 'lease', 'Proposal', 3, '#EAB308'),
    (new.id, 'lease', 'Negotiation', 4, '#F97316'),
    (new.id, 'lease', 'Lease Signed', 5, '#8B5CF6'),
    (new.id, 'lease', 'Occupied', 6, '#0D9488');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_sc_user_created
  after insert on sc_users
  for each row execute function create_default_deal_stages();
