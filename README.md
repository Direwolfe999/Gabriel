# Premium Portfolio Website

A high-end, modern portfolio site built with React, Vite, Tailwind CSS, Framer Motion, and Supabase. Featuring glassmorphism effects, mesh gradients, and smooth animations.

## ✨ Features

- **Modern Dark Theme** with Electric Blue and Cyber Purple gradients
- **Glassmorphism UI** with frosted glass effects
- **Animated Mesh Gradients** for dynamic backgrounds
- **Framer Motion Animations** with reveal-on-scroll effects
- **Shimmer Loading States** for better perceived performance
- **Responsive Bento Box Layout** for project showcase
- **Supabase Integration** for dynamic project data
- **Premium Components**:
  - Floating dock-style navigation
  - Hero section with animated gradients
  - Project cards with hover animations
  - Glowing CTA buttons
  - Contact form with validation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (compatible with 20+)
- npm or yarn
- Supabase account

### Installation

```bash
# Install dependencies
npm install

# Create .env.local from .env.example
cp .env.example .env.local

# Add your Supabase credentials to .env.local
```

### Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Create a `projects` table with the following schema:

```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT,
  tags TEXT[] DEFAULT '{}',
  liveLink TEXT,
  githubLink TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Enable read access for all users" ON projects
  FOR SELECT USING (true);
```

3. Copy your Supabase URL and Anon Key to `.env.local`

### Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx      # Floating navbar
│   ├── Hero.jsx           # Landing section
│   ├── Works.jsx          # Portfolio section (Bento layout)
│   ├── ProjectCard.jsx    # Reusable project card
│   └── Contact.jsx        # Contact section
├── hooks/
│   └── useFetchProjects.js # Custom hook for data fetching
├── lib/
│   └── supabaseClient.js  # Supabase initialization
├── styles/
│   └── globals.css        # Global styles and animations
├── App.jsx                # Main app component
└── main.jsx               # Entry point
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  'electric-blue': '#00d9ff',
  'cyber-purple': '#b000d4',
  // Add your colors here
}
```

### Typography
Fonts are loaded from Google Fonts in `src/styles/globals.css`. Update font imports to change fonts.

### Animations
All animations use Framer Motion. Edit component variants to adjust animation timings and effects.

## 🔧 Configuration

### Environment Variables

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## 📦 Dependencies

- **react** - UI library
- **framer-motion** - Animation library
- **tailwindcss** - Utility-first CSS
- **@supabase/supabase-js** - Backend database
- **lucide-react** - Icon library
- **vite** - Build tool

## 🚀 Deployment

### Vercel

```bash
npm run build
# Push to GitHub and connect to Vercel
```

### Netlify

```bash
npm run build
# Deploy the dist/ folder
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
```

## 📝 SQL Schema for Supabase

Complete schema setup for the projects table:

```sql
-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image TEXT,
  tags TEXT[] DEFAULT '{}',
  liveLink VARCHAR(255),
  githubLink VARCHAR(255),
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX projects_featured_idx ON projects(featured);
CREATE INDEX projects_created_at_idx ON projects(created_at DESC);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read" ON projects
  FOR SELECT USING (true);
```

## 🎯 Best Practices

1. **Image Optimization**: Use Next-Gen image formats (WebP, AVIF)
2. **Performance**: Implement lazy loading for images
3. **SEO**: Update meta tags in `index.html`
4. **Accessibility**: Follow WCAG 2.1 guidelines
5. **Security**: Keep Supabase RLS policies strict

## 🐛 Troubleshooting

### Build errors with Node 18
Use Node 20+ or use `npm install --legacy-peer-deps`

### Supabase connection issues
- Verify credentials in `.env.local`
- Check RLS policies allow public read
- Ensure VITE_ prefix on env variables

### Images not loading
- Check image URLs are valid
- Verify CORS settings in Supabase
- Use fallback images in components

## 📚 Resources

- [React Documentation](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [Supabase Docs](https://supabase.com/docs)
- [Vite Documentation](https://vitejs.dev)

## 🤝 Contributing

Feel free to fork this project and make improvements!

## 📄 License

MIT License - feel free to use this project for personal or commercial use.

## 👨‍💻 Author

Gabriel Johnson - Senior Creative Developer

---

**Built with ❤️ using React, Framer Motion, and Tailwind CSS**
