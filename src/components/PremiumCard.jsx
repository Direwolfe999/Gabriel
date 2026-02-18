import React from 'react'
import { motion } from 'framer-motion'

/**
 * PremiumCard Component
 * Enhanced glassmorphism card with gradient borders and animations
 */
export const PremiumCard = ({
    children,
    className = '',
    delay = 0,
    hoverEffect = true
}) => {
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: delay,
                ease: 'easeOut',
            },
        },
        hover: {
            y: -8,
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: 'easeOut'
            },
        },
    }

    return (
        <motion.div
            className={`relative overflow-hidden rounded-xl ${className}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={hoverEffect ? "hover" : undefined}
        >
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 via-cyber-purple/20 to-electric-blue/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300" />

            {/* Glassmorphism content */}
            <div className="relative glass-effect border border-electric-blue/10 rounded-xl p-6 hover:border-electric-blue/30 transition-all duration-300">
                {children}
            </div>
        </motion.div>
    )
}

export default PremiumCard
