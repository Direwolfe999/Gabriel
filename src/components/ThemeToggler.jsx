import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

/**
 * Theme Toggler Component
 * Provides smooth light/dark mode switching with animations
 */
export const ThemeToggler = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)

    // Check saved theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'light') {
            setIsDarkMode(false)
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.add('light')
        } else {
            setIsDarkMode(true)
            document.documentElement.classList.remove('light')
            document.documentElement.classList.add('dark')
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = !isDarkMode
        setIsDarkMode(newTheme)

        // Save to localStorage
        localStorage.setItem('theme', newTheme ? 'dark' : 'light')

        // Update DOM
        if (newTheme) {
            document.documentElement.classList.remove('light')
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.add('light')
        }
    }

    return (
        <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full glass-effect hover:bg-electric-blue/20 transition-all"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {isDarkMode ? (
                <Sun size={20} className="text-electric-blue" />
            ) : (
                <Moon size={20} className="text-cyber-purple" />
            )}
        </motion.button>
    )
}

export default ThemeToggler
