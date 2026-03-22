-- ══════════════════════════════════════════════════════════
-- BOCRA Platform — Supabase Schema
-- Run this in your Supabase SQL Editor (Settings → SQL Editor)
-- ══════════════════════════════════════════════════════════

-- ── 1. Complaints table ──
CREATE TABLE IF NOT EXISTS complaints (
  id TEXT PRIMARY KEY,
  provider TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  incident_date DATE,
  contact_phone TEXT,
  contact_email TEXT,
  status TEXT NOT NULL DEFAULT 'submitted'
    CHECK (status IN ('submitted','acknowledged','investigating','officer','resolved','closed')),
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── 2. Complaint timeline events ──
CREATE TABLE IF NOT EXISTS complaint_timeline (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  complaint_id TEXT NOT NULL REFERENCES complaints(id) ON DELETE CASCADE,
  status TEXT NOT NULL,
  label TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── 3. Auto-update updated_at ──
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS complaints_updated_at ON complaints;
CREATE TRIGGER complaints_updated_at
  BEFORE UPDATE ON complaints
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ══════════════════════════════════════════════════════════
-- 4. ROW LEVEL SECURITY
--
-- Philosophy:
--   - Anyone can SUBMIT a complaint (INSERT is open)
--   - Nobody can BROWSE all complaints (no SELECT all)
--   - Viewing requires the exact complaint ID (enforced by API)
--   - The tracking ID acts as a bearer token
--   - Server uses service_role key which bypasses RLS
--   - This means the anon key (client-side) has ZERO read access
-- ══════════════════════════════════════════════════════════

ALTER TABLE complaints ENABLE ROW LEVEL SECURITY;
ALTER TABLE complaint_timeline ENABLE ROW LEVEL SECURITY;

-- Anyone can INSERT a complaint (citizens don't need to be logged in)
CREATE POLICY "Anyone can submit complaints"
  ON complaints FOR INSERT
  WITH CHECK (true);

-- Anon users CANNOT read complaints directly
-- All reads go through the server API using service_role key
-- This prevents anyone from browsing/scraping complaint data
CREATE POLICY "Authenticated users can view own complaints"
  ON complaints FOR SELECT
  USING (auth.uid() = user_id);

-- Timeline: insert is open (server creates these), select is restricted
CREATE POLICY "System can create timeline entries"
  ON complaint_timeline FOR INSERT
  WITH CHECK (true);

-- Timeline readable only for authenticated users' own complaints
CREATE POLICY "Users can view own complaint timeline"
  ON complaint_timeline FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM complaints
      WHERE complaints.id = complaint_timeline.complaint_id
      AND complaints.user_id = auth.uid()
    )
  );

-- ── 5. Generate sequential complaint ID ──
CREATE OR REPLACE FUNCTION generate_complaint_id()
RETURNS TEXT AS $$
DECLARE
  year_str TEXT;
  seq_num INT;
  new_id TEXT;
BEGIN
  year_str := to_char(now(), 'YYYY');
  SELECT COUNT(*) + 1 INTO seq_num FROM complaints
    WHERE id LIKE 'CMP-' || year_str || '-%';
  new_id := 'CMP-' || year_str || '-' || lpad(seq_num::text, 4, '0');
  RETURN new_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ── 6. Indexes ──
CREATE INDEX IF NOT EXISTS idx_complaints_user_id ON complaints(user_id);
CREATE INDEX IF NOT EXISTS idx_complaints_status ON complaints(status);
CREATE INDEX IF NOT EXISTS idx_complaints_created ON complaints(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_timeline_complaint_id ON complaint_timeline(complaint_id);
