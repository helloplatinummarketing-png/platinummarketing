/*
  # Platinum Marketing - Database Schema

  ## Overview
  This migration creates the core database structure for the Platinum Marketing agency website,
  including lead capture and admin authentication functionality.

  ## New Tables

  ### 1. `leads` Table
  Stores all lead submissions from the landing page contact form.
  
  **Columns:**
  - `id` (uuid, primary key) - Unique identifier for each lead
  - `full_name` (text, required) - Lead's full name
  - `email` (text, required) - Lead's email address
  - `phone` (text, required) - Lead's phone number
  - `company` (text, optional) - Lead's company name
  - `service_interested` (text, required) - Which service the lead is interested in
  - `message` (text, required) - Lead's message or inquiry details
  - `status` (text, default 'new') - Lead status: new, contacted, in_progress, converted, closed
  - `created_at` (timestamptz) - Timestamp when lead was created
  - `updated_at` (timestamptz) - Timestamp when lead was last updated

  ### 2. `admin_users` Table
  Stores admin user accounts for dashboard access.
  
  **Columns:**
  - `id` (uuid, primary key) - References auth.users id
  - `email` (text, unique, required) - Admin email address
  - `created_at` (timestamptz) - Account creation timestamp

  ## Security (Row Level Security)

  ### Leads Table Policies:
  1. **Public Insert**: Anyone can submit leads through the landing page form
  2. **Admin Read**: Only authenticated admin users can view leads
  3. **Admin Update**: Only authenticated admin users can update lead status
  4. **Admin Delete**: Only authenticated admin users can delete leads

  ### Admin Users Table Policies:
  1. **Admin Read**: Authenticated users can read their own admin profile

  ## Indexes
  - Index on `leads.status` for efficient filtering by lead status
  - Index on `leads.service_interested` for filtering by service type
  - Index on `leads.created_at` for sorting by date
  - Index on `leads.email` for fast email lookups

  ## Notes
  - Lead status values: 'new', 'contacted', 'in_progress', 'converted', 'closed'
  - Service options match the six services offered by Platinum Marketing
  - All timestamps use UTC timezone
  - Email addresses should be validated on the client side before submission
*/

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  service_interested text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for efficient queries
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_service ON leads(service_interested);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Leads table policies
CREATE POLICY "Anyone can insert leads"
  ON leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated admins can view all leads"
  ON leads FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
    )
  );

CREATE POLICY "Authenticated admins can update leads"
  ON leads FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
    )
  );

CREATE POLICY "Authenticated admins can delete leads"
  ON leads FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
    )
  );

-- Admin users table policies
CREATE POLICY "Admins can read own profile"
  ON admin_users FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at on leads table
DROP TRIGGER IF EXISTS update_leads_updated_at ON leads;
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();