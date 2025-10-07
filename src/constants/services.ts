export const SERVICES = [
  'Starter Package — Lead Launch',
  'Growth Package — Client Flow',
  'Scale Package — Automation Pro',
  'Lead Capture & CRM Integration',
  'Customer Support Ticket Management',
  'Appointment Setting',
  'Website Design, SEO & Hosting',
  'Email Marketing Campaigns',
  'AI Phone Callers',
] as const;

export const LEAD_STATUSES = [
  { value: 'new', label: 'New' },
  { value: 'contacted', label: 'Contacted' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'converted', label: 'Converted' },
  { value: 'closed', label: 'Closed' },
] as const;
