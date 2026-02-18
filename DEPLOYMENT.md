# 🚀 Deployment Guide

## Quick Deployment Steps

### 1. **Vercel (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
# - VITE_SUPABASE_URL
# - VITE_SUPABASE_ANON_KEY
```

### 2. **Netlify**

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist

# Or connect GitHub repo in Netlify dashboard
```

### 3. **GitHub Pages**

```bash
# Update vite.config.js
# base: '/your-repo-name/'

npm run build

# Deploy to GitHub Pages (automatic with Actions)
```

## Environment Variables

Add these to your deployment platform:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Pre-Deployment Checklist

- [ ] Update site title and meta description in `index.html`
- [ ] Add your real Supabase credentials
- [ ] Test form submission
- [ ] Verify all images load correctly
- [ ] Test on mobile devices
- [ ] Check lighthouse score (aim for 90+)
- [ ] Update social media links
- [ ] Add your actual projects to Supabase

## Performance Optimization

- **Image Optimization**: Convert images to WebP format
- **Code Splitting**: Vite handles this automatically
- **CSS Purging**: Tailwind removes unused styles
- **Minification**: Automatic in production build

## Troubleshooting

**Q: Supabase connection fails after deployment?**
A: Ensure environment variables are set correctly and RLS policies allow public read.

**Q: Images not loading?**
A: Check CORS settings in Supabase storage and verify image URLs.

**Q: Build fails with Node version error?**
A: Set Node version to 18+ in deployment platform settings.

---

For more help, see main README.md
