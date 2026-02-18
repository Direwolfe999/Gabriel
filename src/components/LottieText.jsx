import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * LottieText Component
 * Animated text component with gradient effects and animations
 */
export const LottieText = ({ 
    text, 
    className = '', 
    delay = 0, 
    gradient = 'from-electric-blue to-cyber-purple' 
}) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: delay,
            },
        },
    }

    const letterVariants = {
        hidden: { 
            opacity: 0, 
            y: 20, 
            color: 'transparent' 
        },
        visible: {
            opacity: 1,
            y: 0,
            color: 'inherit',
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
        hover: {
            scale: 1.2,
            y: -5,
            transition: { duration: 0.2 },
        },
    }

    return (
        <motion.div
            className={`inline-block ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {text.split('').map((char, index) => (
                <motion.span
                    key={index}
                    className={`inline-block ${char === ' ' ? 'w-4' : ''}`}
                    variants={letterVariants}
                    whileHover="hover"
                    style={{ willChange: 'transform' }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.div>
    )
}

export default LottieText
