import { supabase, Lead, LeadInsert } from '../lib/supabase';

export const leadService = {
  async createLead(lead: LeadInsert): Promise<{ data: Lead | null; error: any }> {
    try {
      const { data, error } = await supabase
        .from('leads')
        .insert([lead])
        .select()
        .single();

      return { data, error };
    } catch (error) {
      return { data: null, error };
    }
  },

  async getLeads(): Promise<{ data: Lead[] | null; error: any }> {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      return { data, error };
    } catch (error) {
      return { data: null, error };
    }
  },

  async getLeadsByStatus(status: string): Promise<{ data: Lead[] | null; error: any }> {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .eq('status', status)
        .order('created_at', { ascending: false });

      return { data, error };
    } catch (error) {
      return { data: null, error };
    }
  },

  async getLeadsByService(service: string): Promise<{ data: Lead[] | null; error: any }> {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .eq('service_interested', service)
        .order('created_at', { ascending: false });

      return { data, error };
    } catch (error) {
      return { data: null, error };
    }
  },

  async updateLeadStatus(
    id: string,
    status: Lead['status']
  ): Promise<{ data: Lead | null; error: any }> {
    try {
      const { data, error } = await supabase
        .from('leads')
        .update({ status })
        .eq('id', id)
        .select()
        .single();

      return { data, error };
    } catch (error) {
      return { data: null, error };
    }
  },

  async deleteLead(id: string): Promise<{ error: any }> {
    try {
      const { error } = await supabase
        .from('leads')
        .delete()
        .eq('id', id);

      return { error };
    } catch (error) {
      return { error };
    }
  },

  subscribeToLeads(callback: (payload: any) => void) {
    return supabase
      .channel('leads-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'leads',
        },
        callback
      )
      .subscribe();
  },
};
