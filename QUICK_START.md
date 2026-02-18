# ⚡ Quick Reference Card

## 🚀 Start Here

### 1. Copy & Setup Environment
```bash
cp .env.example .env.local
# Add Supabase credentials
```

### 2. Start Dev Server
```bash
npm run dev
```

### 3. Setup Supabase (SQL)
```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255),
  description TEXT,
  image TEXT,
  tags TEXT[] DEFAULT '{}',
  liveLink VARCHAR(255),
  githubLink VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read" ON projects FOR SELECT USING (true);
```

---

## 📂 File Locations

| Purpose | File |
|---------|------|
| Main App | `src/App.jsx` |
| Navigation | `src/components/Navigation.jsx` |
| Hero Section | `src/components/Hero.jsx` |
| Portfolio Grid | `src/components/Works.jsx` |
| Project Card | `src/components/ProjectCard.jsx` |
| Contact Form | `src/components/Contact.jsx` |
| Supabase Config | `src/lib/supabaseClient.js` |
| Data Hook | `src/hooks/useFetchProjects.js` |
| Styles | `src/styles/globals.css` |
| Config | `tailwind.config.js` |

---

## 🎨 Customize

### Colors
**File**: `tailwind.config.js`
```js
colors: {
  'electric-blue': '#00d9ff',    // Your primary
  'cyber-purple': '#b000d4',     // Your secondary
}
```

### Fonts
**File**: `src/styles/globals.css`
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR-FONT:wght@300;400;600;700&display=swap');
```

### Content
**Files**: Any component JSX files
- Just edit the text, update links, change images

---

## 🔧 Common Edits

### Add Your Info to Contact
**File**: `src/components/Contact.jsx`
```jsx
'hello@example.com'    // → Your email
'https://github.com'   // → Your GitHub
'+1 234 567 8900'      // → Your phone
```

### Update Hero Title
**File**: `src/components/Hero.jsx`
```jsx
"Crafting Digital Experiences"  // Your tagline
```

### Change Theme
All color changes in `tailwind.config.js`

---

## 📦 Build & Deploy

### Build Production
```bash
npm run build
# Creates dist/ folder
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

---

## 📊 Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm install` | Install all dependencies |

---

## 🎯 What Works Already

✅ Navigation (fully animated)
✅ Hero section (with mesh gradients)
✅ Portfolio grid (responsive Bento layout)
✅ Project cards (with hover effects)
✅ Contact form (with validation)
✅ Mobile menu (hamburger navigation)
✅ Smooth scrolling (all animations)
✅ Dark theme (glassmorphism)
✅ Loading states (shimmer skeletons)
✅ Responsive design (all screen sizes)

---

## 🔒 Environment Variables

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

**Get these from**: supabase.com → Project Settings → API

---

## 📱 Test Responsive

- **Mobile**: DevTools → iPhone 12 (390x844)
- **Tablet**: iPad Pro (1024x1366)
- **Desktop**: Full screen
- **4K**: Zoom out or use 1920x1080

---

## 🐛 Quick Fixes

| Problem | Solution |
|---------|----------|
| White screen | Check console for errors |
| Styles not loading | Verify Tailwind paths in config |
| Supabase not working | Check env variables and RLS |
| Images broken | Verify image URLs are valid |
| Mobile menu stuck | Check z-index values |

---

## 📚 Documentation

| File | Contains |
|------|----------|
| README.md | Full documentation |
| SETUP.md | Setup & customization guide |
| DEPLOYMENT.md | How to deploy |
| ADVANCED.md | Advanced features & code |
| PROJECT_SUMMARY.md | Complete overview |

---

## 🎓 Key Concepts

### Framer Motion
Used for all animations. Edit `variants` in components.

### Tailwind CSS
Utility-first CSS. Edit classes in JSX.

### Supabase
Backend database. Add projects via dashboard.

### Vite
Lightning-fast bundler. Configuration in `vite.config.js`.

---

## 🌟 Pro Tips

1. **Image Size**: Keep under 100KB each for speed
2. **Project Count**: Add 3-5 best projects first
3. **Mobile Test**: Always test on real device
4. **Lighthouse Score**: Aim for 90+ in all metrics
5. **Update Often**: Keep portfolio fresh with new work

---

## 🚀 Launch Checklist

- [ ] Setup Supabase account
- [ ] Create database table
- [ ] Add environment variables
- [ ] Update personal information
- [ ] Add 3+ projects with images
- [ ] Test on mobile/tablet/desktop
- [ ] Check all links work
- [ ] Deploy to Vercel/Netlify
- [ ] Add custom domain
- [ ] Submit to portfolio sites

---

## 💬 Need Help?

1. Check README.md
2. Search component JSDoc comments
3. Check browser DevTools console
4. Review SETUP.md
5. See ADVANCED.md for code examples

---

## 🎯 Your Next Steps

1. **Now**: Copy `.env.example` to `.env.local`
2. **Next**: Add Supabase credentials
3. **Then**: Run `npm run dev`
4. **Soon**: Add your projects
5. **Today**: Deploy to production

---

**That's it! You're ready to go.** 🚀

This portfolio will impress anyone who sees it. Make it yours and let it showcase your abilities.

Good luck! 🌟
