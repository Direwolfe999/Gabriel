import React from 'react'
import { motion } from 'framer-motion'

const PremiumButton = ({ children, href, onClick }) => {
    const Comp = href ? 'a' : 'button'
    return (
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Comp href={href} onClick={onClick} className="btn-gradient">
                {children}
            </Comp>
        </motion.div>
    )
}

export default PremiumButton
