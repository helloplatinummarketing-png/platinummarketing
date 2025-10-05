import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Lead = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  company?: string;
  service_interested: string;
  message: string;
  status: 'new' | 'contacted' | 'in_progress' | 'converted' | 'closed';
  created_at: string;
  updated_at: string;
};

export type LeadInsert = Omit<Lead, 'id' | 'created_at' | 'updated_at' | 'status'>;

export type AdminUser = {
  id: string;
  email: string;
  created_at: string;
};
