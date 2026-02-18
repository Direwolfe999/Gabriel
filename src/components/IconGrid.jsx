import React from 'react'
import { motion } from 'framer-motion'
import { FaDatabase, FaChartLine, FaRocket, FaServer, FaCode, FaChartBar, FaMobileAlt, FaCloud } from 'react-icons/fa'

const IconGrid = () => {
    const items = [
        { icon: FaDatabase, label: 'Data Engineering', color: 'text-electric-blue' },
        { icon: FaChartLine, label: 'Analytics', color: 'text-cyber-purple' },
        { icon: FaRocket, label: 'Growth', color: 'text-electric-blue' },
        { icon: FaServer, label: 'Infrastructure', color: 'text-cyber-purple' },
        { icon: FaCode, label: 'Development', color: 'text-electric-blue' },
        { icon: FaChartBar, label: 'Visualization', color: 'text-cyber-purple' },
        { icon: FaMobileAlt, label: 'Mobile', color: 'text-electric-blue' },
        { icon: FaCloud, label: 'Cloud', color: 'text-cyber-purple' },
    ]

    return (
        <div className="max-w-6xl mx-auto my-12">
            <div className="icon-grid">
                {items.map((it, index) => {
                    const Icon = it.icon
                    return (
                        <motion.div
                            key={it.label}
                            className="icon-pill card-premium group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ 
                                scale: 1.1, 
                                rotate: 5,
                                boxShadow: '0 10px 30px rgba(0, 217, 255, 0.3)'
                            }}
                        >
                            <Icon size={24} className={it.color} />
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default IconGrid
