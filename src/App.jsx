import React, { useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import Contact from './components/Contact'
import AIChatbot from './components/AIChatbot'
import ScrollToTop from './components/ScrollToTop'
import './styles/globals.css'

/**
 * Main App Component
 * Premium portfolio site for Gabriel Johnson - CEO/Founder of Send-Eat
 */
function App() {
    // Check and apply saved theme on initial load
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'light') {
            document.documentElement.classList.add('light')
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
            document.documentElement.classList.remove('light')
        }
    }, [])

    return (
        <div className="min-h-screen text-white overflow-x-hidden transition-colors duration-500">
            {/* Animated mesh gradient background */}
            <div className="mesh-gradient" />

            {/* Navigation */}
            <Navigation />

            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />

            {/* Works Section */}
            <Works />

            {/* Contact Section */}
            <Contact />

            {/* Scroll to Top */}
            <ScrollToTop />

            {/* AI Chatbot */}
            <AIChatbot />

            {/* AI Chatbot */}
            <AIChatbot />

            {/* Footer */}
            <footer className="bg-dark-secondary border-t border-electric-blue/10 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2026 Gabriel Johnson. CEO & Founder of Send-Eat.{' '}
                        <span className="text-electric-blue">Data</span> •{' '}
                        <span className="text-cyber-purple">Engineering</span> •{' '}
                        <span className="text-electric-blue">Growth</span>.
                    </p>
                </div>
            </footer>
        </div>
    )
}


export default App
