import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import ChartCard from './ChartCard'

/**
 * ProjectCard Component
 * Displays individual project with glassmorphism, animations, and shimmer loading
 * 
 * @param {Object} project - Project data object
 * @param {string} project.id - Unique project ID
 * @param {string} project.title - Project title
 * @param {string} project.description - Project description
 * @param {string[]} project.tags - Array of technology tags
 * @param {string} project.image - Project image URL
 * @param {string} project.liveLink - Live project URL
 * @param {string} project.githubLink - GitHub repository URL
 * @param {boolean} isLoading - Loading state
 * @param {number} index - Index for staggered animation
 */
export const ProjectCard = ({ project, isLoading = false, index = 0 }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.1,
                ease: 'easeOut',
            },
        },
        hover: {
            y: -8,
            transition: { duration: 0.3 },
        },
    }

    const imageVariants = {
        hidden: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: { duration: 0.4 },
        },
    }

    const overlayVariants = {
        hidden: { opacity: 0 },
        hover: {
            opacity: 1,
            transition: { duration: 0.3 },
        },
    }

    // Skeleton loading state
    if (isLoading) {
        return (
            <motion.div
                className="glass-effect rounded-lg overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Image skeleton */}
                <div className="w-full h-48 bg-gray-dark shimmer-skeleton" />

                {/* Content skeleton */}
                <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-dark shimmer-skeleton rounded w-3/4" />
                    <div className="h-4 bg-gray-dark shimmer-skeleton rounded w-full" />
                    <div className="h-4 bg-gray-dark shimmer-skeleton rounded w-5/6" />

                    {/* Tags skeleton */}
                    <div className="flex gap-2 flex-wrap pt-4">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="h-6 bg-gray-dark shimmer-skeleton rounded-full w-16"
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        )
    }

    if (!project) return null

    return (
        <motion.div
            className="glass-effect rounded-lg overflow-hidden group cursor-pointer h-full"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Image Container */}
            <motion.div
                className="relative w-full h-48 overflow-hidden bg-gray-dark"
                variants={imageVariants}
            >
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src =
                            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
                    }}
                />

                {/* Hover Overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent flex items-end justify-center pb-4"
                    variants={overlayVariants}
                    initial="hidden"
                >
                    <div className="flex gap-4">
                        {project.liveLink && (
                            <motion.a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-electric-blue text-dark hover:bg-cyber-purple transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ExternalLink size={20} />
                            </motion.a>
                        )}
                        {project.githubLink && (
                            <motion.a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-cyber-purple text-white hover:bg-electric-blue transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Github size={20} />
                            </motion.a>
                        )}
                    </div>
                </motion.div>
            </motion.div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-56">
                <div>
                    <h3 className="text-xl font-bold text-electric-blue mb-2 group-hover:text-cyber-purple transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-3 mb-4">
                        {project.description}
                    </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag) => (
                        <motion.span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-gray-dark text-electric-blue border border-electric-blue/30"
                            whileHover={{ scale: 1.05 }}
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard
