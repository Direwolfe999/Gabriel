import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggler from './ThemeToggler'

/**
 * Navigation Component
 * Floating dock-style navbar with smooth animations
 */
export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Cases', href: '#works' },
        { label: 'Contact', href: '#contact' },
    ]

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    return (
        <>
            {/* Desktop Navigation */}
            <motion.nav
                className={`hidden md:flex fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-6 glass-effect px-8 py-4 rounded-full transition-all duration-300 ${isScrolled ? 'py-3 shadow-lg' : ''
                    }`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex items-center gap-8">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-gray-300 hover:text-electric-blue transition-colors relative group"
                            variants={itemVariants}
                        >
                            {item.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-blue to-cyber-purple group-hover:w-full transition-all duration-300" />
                        </motion.a>
                    ))}
                    <div className="w-px h-6 bg-gray-700 mx-2" />
                    <ThemeToggler />
                </div>
            </motion.nav>

            {/* Mobile Navigation Toggle */}
            <motion.button
                className="md:hidden fixed top-6 right-6 z-50 p-3 glass-effect rounded-lg"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.95 }}
            >
                {isOpen ? (
                    <X size={24} className="text-electric-blue" />
                ) : (
                    <Menu size={24} className="text-electric-blue" />
                )}
            </motion.button>

            {/* Mobile Menu */}
            <motion.div
                className={`md:hidden fixed inset-0 z-40 glass-effect flex flex-col items-center justify-center gap-8 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'
                    }`}
                initial={false}
                animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                {navItems.map((item) => (
                    <motion.a
                        key={item.label}
                        href={item.href}
                        className="text-2xl font-bold text-electric-blue hover:text-cyber-purple transition-colors"
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: isOpen ? 0.1 : 0 }}
                    >
                        {item.label}
                    </motion.a>
                ))}
            </motion.div>
        </>
    )
}

export default Navigation
