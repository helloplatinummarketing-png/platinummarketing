# Platinum Marketing - Setup Guide

## Welcome!

Your Platinum Marketing agency website is ready to go! This guide will help you get started.

## What's Included

### Public Website
- **Home** - Hero section with value proposition and call-to-action
- **About** - Company story and core values
- **Services** - All 6 services with detailed features
- **Pricing** - Three-tier pricing plans
- **Blog** - Article showcase with placeholder content
- **Contact** - Contact information and office details

### Lead Capture System
- **Landing Page** (`/landing`) - Standalone conversion-optimized page with form
- Form captures: Name, Email, Phone, Company, Service, Message
- All submissions stored in Supabase database
- Email confirmation system ready (Edge Function deployed)

### Admin Dashboard
- **Dashboard** (`/dashboard`) - Real-time lead management
- View all leads in a searchable, filterable table
- Update lead status (New, Contacted, In Progress, Converted, Closed)
- Real-time updates when new leads arrive
- Analytics showing total leads, new leads, contacted, and converted

## Quick Start

### 1. Create an Admin User

To access the dashboard, you need to create an admin account in Supabase:

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** > **Users**
3. Click **Add User** and create a new user with email and password
4. Go to **SQL Editor** and run this query to make them an admin:

```sql
INSERT INTO admin_users (id, email)
SELECT id, email FROM auth.users WHERE email = 'your-admin@email.com';
```

Replace `your-admin@email.com` with the email you used.

### 2. Access the Dashboard

- Visit `/dashboard/login`
- Sign in with your admin credentials
- You'll be redirected to the dashboard where you can view and manage leads

### 3. Test the Lead Capture

- Visit `/landing` to see the lead capture form
- Submit a test lead
- Watch it appear in real-time in your dashboard!

## Features Overview

### Lead Management
- **Real-time Updates** - New leads appear instantly in the dashboard
- **Status Tracking** - Move leads through your sales pipeline
- **Search & Filter** - Find leads by name, email, phone, service, or status
- **Detailed View** - Click any lead to see full information

### Email Automation
- Edge Function deployed for sending confirmation emails
- Automatically triggered when leads submit the form
- Professional HTML email template with lead details

### Security
- Row Level Security (RLS) enabled on all tables
- Protected dashboard routes requiring authentication
- Secure form submission with validation

## Customization

### Branding
- Logo: Update the `Zap` icon in Header and Footer components
- Colors: Modify the Tailwind classes (currently using blue/cyan theme)
- Content: Edit page content in `src/pages/*`

### Services
- Edit the services list in `src/constants/services.ts`
- Update service details in the Services page

### Email Templates
- Customize the email template in the Edge Function
- Located in `supabase/functions/send-lead-confirmation/index.ts`

## Deployment

This project is ready to deploy to Vercel:

1. Push your code to GitHub
2. Connect to Vercel
3. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy!

## Database Schema

### `leads` Table
- Stores all lead submissions from the landing page
- Columns: id, full_name, email, phone, company, service_interested, message, status, created_at, updated_at

### `admin_users` Table
- Stores admin accounts with access to the dashboard
- References `auth.users` table

## Support

For questions or issues:
- Email: hello@platinummarketing.io
- Phone: (555) 123-4567

## Next Steps

1. Create your admin account (see above)
2. Test the lead capture form
3. Customize branding and content
4. Set up your custom domain
5. Configure production email service (optional)
6. Launch and start capturing leads!

---

**Built with:** React, TypeScript, Tailwind CSS, Supabase, and Vite
