# Platinum Marketing - Netlify Deployment Guide

## Quick Deploy to Netlify

### Option 1: Deploy via Netlify CLI (Recommended for Transfer)

1. **Install Netlify CLI** (if not already installed):
```bash
npm install -g netlify-cli
```

2. **Login to your Netlify account**:
```bash
netlify login
```

3. **Deploy from this directory**:
```bash
netlify deploy --prod
```

4. **Follow the prompts**:
   - Choose "Create & configure a new site"
   - Select your team
   - Enter site name: `platinum-marketing` (or your preferred name)
   - Confirm the build directory: `dist`

### Option 2: Deploy via Netlify Web Interface

1. **Build the project locally**:
```bash
npm install
npm run build
```

2. **Go to [Netlify](https://app.netlify.com/)**
3. Click "Add new site" → "Deploy manually"
4. Drag and drop the `dist` folder

### Option 3: Connect GitHub Repository

1. Push this code to a GitHub repository
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Select GitHub and choose your repository
5. Build settings will be auto-detected from `netlify.toml`

---

## Environment Variables

After deployment, you MUST add these environment variables in Netlify:

1. Go to **Site settings** → **Environment variables**
2. Add the following variables:

```
VITE_SUPABASE_URL=https://0ec90b57d6e95fcbda19832f.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJib2x0IiwicmVmIjoiMGVjOTBiNTdkNmU5NWZjYmRhMTk4MzJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4ODE1NzQsImV4cCI6MTc1ODg4MTU3NH0.9I8-U0x86Ak8t2DGaIk0HfvTSLsAyzdnz-Nw00mMkKw
```

3. **Redeploy** the site after adding environment variables

---

## Project Transfer / Claim URL

To transfer this project to your Netlify account:

### Method 1: Using Netlify Drop (Easiest)

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to: **https://app.netlify.com/drop**

3. Drag and drop the `dist` folder

4. Netlify will provide you with a **unique URL** that you can claim to your account

### Method 2: Using Netlify CLI with Site ID

After initial deployment with CLI, Netlify creates a `.netlify` folder with a `state.json` file containing your site ID. You can share this site ID to transfer ownership.

---

## Build Configuration

The project is configured with the following settings (in `netlify.toml`):

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18
- **Redirects**: All routes redirect to `/index.html` for SPA routing

---

## Post-Deployment Checklist

- [ ] Site is accessible at the Netlify URL
- [ ] Environment variables are set correctly
- [ ] Admin dashboard login works (`/dashboard/login`)
- [ ] Lead capture form submits successfully (`/landing`)
- [ ] All pages load without errors
- [ ] Contact information displays correctly
- [ ] Pricing packages render properly

---

## Custom Domain Setup

To add a custom domain:

1. Go to **Site settings** → **Domain management**
2. Click "Add custom domain"
3. Follow the DNS configuration instructions
4. Enable HTTPS (automatic with Netlify)

---

## Supabase Configuration

The site is already connected to Supabase. Ensure:

1. Supabase project is active
2. Database migrations have been applied
3. Admin user exists in `admin_users` table
4. RLS policies are enabled

---

## Support

For issues or questions:
- **Email**: helloplatinummarketing@gmail.com
- **Phone**: 07594217753

---

## Project Structure

```
platinum-marketing/
├── dist/                  # Build output (generated)
├── src/
│   ├── components/       # React components
│   ├── pages/           # Page components
│   ├── services/        # API services
│   ├── lib/             # Utilities
│   └── constants/       # Constants
├── supabase/
│   ├── migrations/      # Database migrations
│   └── functions/       # Edge functions
├── netlify.toml         # Netlify configuration
├── .env                 # Environment variables (local)
└── package.json         # Dependencies
```

---

**Deployment Date**: October 2025
**Version**: 1.0.0
**Built with**: React + Vite + Supabase + Netlify
