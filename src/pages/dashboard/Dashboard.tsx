import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  TrendingUp,
  Filter,
  Search,
  LogOut,
  Zap,
  Mail,
  Phone,
  Building,
  Calendar,
  RefreshCw,
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { Badge } from '../../components/ui/Badge';
import { Modal } from '../../components/ui/Modal';
import { Loading } from '../../components/ui/Loading';
import { Lead } from '../../lib/supabase';
import { leadService } from '../../services/leads';
import { authService } from '../../services/auth';
import { SERVICES, LEAD_STATUSES } from '../../constants/services';

export function Dashboard() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [serviceFilter, setServiceFilter] = useState('all');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    loadLeads();
    subscribeToChanges();
  }, []);

  useEffect(() => {
    filterLeads();
  }, [leads, searchQuery, statusFilter, serviceFilter]);

  const loadLeads = async () => {
    setIsLoading(true);
    const { data, error } = await leadService.getLeads();

    if (error) {
      alert('Failed to load leads');
      return;
    }

    setLeads(data || []);
    setIsLoading(false);
  };

  const subscribeToChanges = () => {
    leadService.subscribeToLeads((payload) => {
      if (payload.eventType === 'INSERT') {
        setLeads((prev) => [payload.new as Lead, ...prev]);
      } else if (payload.eventType === 'UPDATE') {
        setLeads((prev) =>
          prev.map((lead) =>
            lead.id === payload.new.id ? (payload.new as Lead) : lead
          )
        );
      } else if (payload.eventType === 'DELETE') {
        setLeads((prev) => prev.filter((lead) => lead.id !== payload.old.id));
      }
    });
  };

  const filterLeads = () => {
    let filtered = [...leads];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (lead) =>
          lead.full_name.toLowerCase().includes(query) ||
          lead.email.toLowerCase().includes(query) ||
          lead.phone.includes(query)
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter((lead) => lead.status === statusFilter);
    }

    if (serviceFilter !== 'all') {
      filtered = filtered.filter(
        (lead) => lead.service_interested === serviceFilter
      );
    }

    setFilteredLeads(filtered);
  };

  const handleStatusChange = async (leadId: string, newStatus: Lead['status']) => {
    setIsUpdating(true);
    const { error } = await leadService.updateLeadStatus(leadId, newStatus);

    if (error) {
      alert('Failed to update lead status');
    }

    setIsUpdating(false);
    setSelectedLead(null);
  };

  const handleSignOut = async () => {
    await authService.signOut();
    navigate('/dashboard/login');
  };

  const stats = {
    total: leads.length,
    new: leads.filter((l) => l.status === 'new').length,
    contacted: leads.filter((l) => l.status === 'contacted').length,
    converted: leads.filter((l) => l.status === 'converted').length,
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loading size="lg" text="Loading dashboard..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  Platinum Marketing
                </h1>
                <p className="text-sm text-slate-600">Admin Dashboard</p>
              </div>
            </div>
            <Button variant="ghost" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-600">
                Total Leads
              </span>
              <Users className="w-5 h-5 text-slate-400" />
            </div>
            <div className="text-3xl font-bold text-slate-900">{stats.total}</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-600">New</span>
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
            </div>
            <div className="text-3xl font-bold text-slate-900">{stats.new}</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-600">
                Contacted
              </span>
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            </div>
            <div className="text-3xl font-bold text-slate-900">
              {stats.contacted}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-600">
                Converted
              </span>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-slate-900">
              {stats.converted}
            </div>
          </Card>
        </div>

        <Card className="p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  placeholder="Search by name, email, or phone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Select
                options={[
                  { value: 'all', label: 'All Statuses' },
                  ...LEAD_STATUSES.map((s) => ({ value: s.value, label: s.label })),
                ]}
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="min-w-[150px]"
              />

              <Select
                options={[
                  { value: 'all', label: 'All Services' },
                  ...SERVICES.map((s) => ({ value: s, label: s })),
                ]}
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="min-w-[200px]"
              />

              <Button variant="outline" onClick={loadLeads}>
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <Filter className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                      <p className="text-slate-500">No leads found</p>
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="hover:bg-slate-50 cursor-pointer"
                      onClick={() => setSelectedLead(lead)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-slate-900">
                          {lead.full_name}
                        </div>
                        {lead.company && (
                          <div className="text-sm text-slate-500">
                            {lead.company}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-slate-900 flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          {lead.email}
                        </div>
                        <div className="text-sm text-slate-500 flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          {lead.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-900 max-w-xs">
                          {lead.service_interested}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge variant={lead.status}>
                          {LEAD_STATUSES.find((s) => s.value === lead.status)
                            ?.label || lead.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        {formatDate(lead.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLead(lead);
                          }}
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </main>

      {selectedLead && (
        <Modal
          isOpen={!!selectedLead}
          onClose={() => setSelectedLead(null)}
          title="Lead Details"
        >
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">
                Full Name
              </label>
              <p className="text-slate-900">{selectedLead.full_name}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">
                  Email
                </label>
                <a
                  href={`mailto:${selectedLead.email}`}
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  <Mail className="w-4 h-4" />
                  {selectedLead.email}
                </a>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">
                  Phone
                </label>
                <a
                  href={`tel:${selectedLead.phone}`}
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  <Phone className="w-4 h-4" />
                  {selectedLead.phone}
                </a>
              </div>
            </div>

            {selectedLead.company && (
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1 flex items-center gap-1">
                  <Building className="w-4 h-4" />
                  Company
                </label>
                <p className="text-slate-900">{selectedLead.company}</p>
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">
                Service Interested In
              </label>
              <p className="text-slate-900">{selectedLead.service_interested}</p>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">
                Message
              </label>
              <p className="text-slate-900 whitespace-pre-wrap">
                {selectedLead.message}
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1 flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Submitted
              </label>
              <p className="text-slate-600">{formatDate(selectedLead.created_at)}</p>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 block mb-2">
                Update Status
              </label>
              <div className="flex flex-wrap gap-2">
                {LEAD_STATUSES.map((status) => (
                  <Button
                    key={status.value}
                    size="sm"
                    variant={
                      selectedLead.status === status.value ? 'primary' : 'outline'
                    }
                    onClick={() =>
                      handleStatusChange(selectedLead.id, status.value as Lead['status'])
                    }
                    disabled={isUpdating || selectedLead.status === status.value}
                  >
                    {status.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
