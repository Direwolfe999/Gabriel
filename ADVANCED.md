# 🎨 Advanced Customization Guide

## Custom Animation Presets

### Slow & Elegant (Corporate)
```jsx
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
}
```

### Fast & Energetic (Startup)
```jsx
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'backOut' },
  },
}
```

### Bounce Effect
```jsx
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'bounceOut' },
  },
}
```

---

## Custom Color Schemes

### Dark Ocean
```js
colors: {
  'primary': '#001f3f',
  'accent': '#0074d9',
  'highlight': '#7fdbca',
}
```

### Sunset
```js
colors: {
  'primary': '#1a1a2e',
  'accent': '#ff6b6b',
  'highlight': '#ffd93d',
}
```

### Cyberpunk Neon
```js
colors: {
  'primary': '#0a0a0a',
  'accent': '#ff006e',
  'highlight': '#00f5ff',
}
```

---

## Custom Fonts

Edit `src/styles/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR-FONT:wght@300;400;600;700&display=swap');

body {
  font-family: 'YOUR-FONT', sans-serif;
}
```

Popular choices:
- `Poppins` - Modern, friendly
- `Inter` - Clean, professional (current)
- `Playfair Display` - Elegant, luxurious
- `JetBrains Mono` - Technical, developer
- `Syne` - Bold, creative

---

## Advanced Sections to Add

### 1. Skills Section with Progress Bars
```jsx
export const Skills = () => {
  const skills = [
    { name: 'React', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Framer Motion', level: 88 },
  ]

  return (
    <section className="py-20">
      {skills.map(skill => (
        <div key={skill.name}>
          <h3>{skill.name}</h3>
          <motion.div
            className="h-2 bg-electric-blue"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      ))}
    </section>
  )
}
```

### 2. Blog/Articles Section
```jsx
export const Blog = () => {
  const posts = [
    {
      title: 'Building Premium UX',
      date: '2024-02-17',
      image: 'image.jpg',
    },
  ]

  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map(post => (
          <ProjectCard key={post.title} project={post} />
        ))}
      </div>
    </section>
  )
}
```

### 3. Testimonials Section
```jsx
export const Testimonials = () => {
  const testimonials = [
    {
      text: 'Great work!',
      author: 'John Doe',
      company: 'Tech Co',
      image: 'avatar.jpg',
    },
  ]

  return (
    <section className="py-20">
      {testimonials.map(t => (
        <motion.div
          key={t.author}
          className="glass-effect p-6 rounded-lg"
          whileHover={{ y: -10 }}
        >
          <p className="text-gray-400 mb-4">"{t.text}"</p>
          <p className="font-bold">{t.author}</p>
          <p className="text-sm text-electric-blue">{t.company}</p>
        </motion.div>
      ))}
    </section>
  )
}
```

### 4. Timeline/Experience Section
```jsx
export const Experience = () => {
  const experience = [
    {
      role: 'Senior Developer',
      company: 'Tech Co',
      date: '2022-Present',
      description: 'Led frontend development',
    },
  ]

  return (
    <section className="py-20">
      <div className="space-y-8">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.role}
            className="glass-effect p-6 rounded-lg border-l-4 border-electric-blue"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-xl font-bold text-electric-blue">{exp.role}</h3>
            <p className="text-gray-400">{exp.company} • {exp.date}</p>
            <p className="text-sm mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
```

---

## Advanced Animations

### Parallax Effect
```jsx
import { useScroll, useTransform } from 'framer-motion'

export const ParallaxHero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -100])

  return (
    <motion.div style={{ y }}>
      <img src="hero.jpg" alt="Hero" />
    </motion.div>
  )
}
```

### Scroll Progress Bar
```jsx
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue to-cyber-purple"
      style={{ scaleX: scrollYProgress }}
      transformTemplate={({ scaleX }) => `scaleX(${scaleX})`}
    />
  )
}
```

### Animated Counter
```jsx
import { useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

export const Counter = ({ value }) => {
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, latest =>
    Math.round(latest),
  )

  useEffect(() => {
    const control = animate(motionValue, value, { duration: 2 })
    return () => control.stop()
  }, [value])

  return <motion.span>{rounded}</motion.span>
}
```

---

## Performance Tweaks

### Lazy Load Components
```jsx
import { lazy, Suspense } from 'react'

const Works = lazy(() => import('./components/Works'))

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Works />
    </Suspense>
  )
}
```

### Image Optimization
```jsx
export const OptimizedImage = ({ src, alt }) => {
  return (
    <picture>
      <source
        srcSet={src.replace(/\.[^.]+$/, '.webp')}
        type="image/webp"
      />
      <img src={src} alt={alt} loading="lazy" />
    </picture>
  )
}
```

---

## Dark/Light Mode Toggle

```jsx
import { useState, useEffect } from 'react'

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-lg bg-gray-dark"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  )
}
```

---

## Form Validation & Handling

```jsx
import { useState } from 'react'

export const AdvancedForm = () => {
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.email?.includes('@')) {
      newErrors.email = 'Invalid email'
    }
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Name too short'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    // Send to API
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields with error handling */}
    </form>
  )
}
```

---

## SEO Optimization

### Meta Tags
```html
<!-- index.html -->
<meta name="description" content="Your description">
<meta name="keywords" content="react, portfolio, design">
<meta property="og:title" content="Gabriel Johnson">
<meta property="og:image" content="preview.jpg">
<meta name="twitter:card" content="summary_large_image">
```

### Structured Data
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Gabriel Johnson",
  "url": "https://example.com",
  "jobTitle": "Senior Developer"
}
</script>
```

---

## Analytics Integration

```jsx
// Google Analytics
import ReactGA from 'react-ga4'

ReactGA.initialize('G-XXXXXXXX')

export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path })
}
```

---

## Advanced Tailwind Config

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(0, 217, 255, 0.5)' },
          '50%': { textShadow: '0 0 30px rgba(0, 217, 255, 0.8)' },
        },
      },
    },
  },
}
```

---

This guide should help you take your portfolio to the next level! 🚀
