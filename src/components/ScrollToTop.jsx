import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

/**
 * ScrollToTop Component
 * Smooth scroll to top button with animations
 */
export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <motion.button
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-40 p-3 bg-gradient-to-r from-electric-blue to-cyber-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 20,
                pointerEvents: isVisible ? 'auto' : 'none',
            }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
        >
            <ArrowUp size={20} />
        </motion.button>
    )
}

export default ScrollToTop
