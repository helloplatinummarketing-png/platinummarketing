/*
  # Fix RLS Performance and Database Issues

  ## Summary
  This migration addresses security and performance issues identified by Supabase:
  1. Optimizes RLS policies to use subqueries instead of direct auth.uid() calls for better performance at scale
  2. Removes unused indexes that were created but never used
  3. Fixes function search path mutability issue

  ## Changes Made

  ### 1. RLS Policy Optimization
  - Replace direct `auth.uid()` calls with `(select auth.uid())` in RLS policies
  - This prevents re-evaluation for each row and improves query performance
  - Affects: leads table (3 policies) and admin_users table (1 policy)

  ### 2. Remove Unused Indexes
  - Removed: idx_leads_status
  - Removed: idx_leads_service  
  - Removed: idx_leads_created_at
  - Removed: idx_leads_email
  - These indexes were not being used by queries and waste storage space

  ### 3. Fix Function Search Path
  - Set search_path explicitly for update_updated_at_column() function to be immutable
  - Prevents security issues with role-mutable search paths

  ## Security Notes
  - All RLS policies remain equally restrictive
  - Performance is improved by reducing per-row function evaluation
  - Admins can still only see/update/delete leads
  - Lead insertion remains public
*/

-- Drop unused indexes
DROP INDEX IF EXISTS idx_leads_status;
DROP INDEX IF EXISTS idx_leads_service;
DROP INDEX IF EXISTS idx_leads_created_at;
DROP INDEX IF EXISTS idx_leads_email;

-- Drop old policies to replace them with optimized versions
DROP POLICY IF EXISTS "Authenticated admins can view all leads" ON leads;
DROP POLICY IF EXISTS "Authenticated admins can update leads" ON leads;
DROP POLICY IF EXISTS "Authenticated admins can delete leads" ON leads;
DROP POLICY IF EXISTS "Admins can read own profile" ON admin_users;

-- Drop and recreate trigger and function with secure search_path
DROP TRIGGER IF EXISTS update_leads_updated_at ON leads;

DROP FUNCTION IF EXISTS update_updated_at_column();
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Recreate trigger
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Recreate leads policies with optimized RLS using subqueries
CREATE POLICY "Authenticated admins can view all leads"
  ON leads FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = (select auth.uid())
    )
  );

CREATE POLICY "Authenticated admins can update leads"
  ON leads FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = (select auth.uid())
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = (select auth.uid())
    )
  );

CREATE POLICY "Authenticated admins can delete leads"
  ON leads FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = (select auth.uid())
    )
  );

-- Recreate admin_users policy with optimized RLS
CREATE POLICY "Admins can read own profile"
  ON admin_users FOR SELECT
  TO authenticated
  USING ((select auth.uid()) = id);