import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { useFetchProjects } from '../hooks/useFetchProjects'
import IconGrid from './IconGrid'
import ChartCard from './ChartCard'

/**
 * Works Component
 * Displays projects in a Bento Box grid layout
 */
export const Works = () => {
    const { projects, loading, error } = useFetchProjects()

    // Mock data reflecting Gabriel's portfolio projects with premium images
    const mockProjects = [
        {
            id: 1,
            title: 'Send-Eat Brand Identity',
            description: 'Premium branding for Send-Eat with founder portrait and company goals',
            tags: ['Branding', 'Send-Eat', 'CEO', 'Vision'],
            image: '/images/main1.png',
            liveLink: 'https://example.com',
            githubLink: 'https://github.com',
        },
        {
            id: 2,
            title: 'Organizational Structure',
            description: 'Hierarchical structure showcasing the company operations and management',
            tags: ['Management', 'Structure', 'Organization', 'Leadership'],
            image: '/images/img2.png',
            liveLink: 'https://example.com',
            githubLink: 'https://github.com',
        },
        {
            id: 3,
            title: 'ROAS Performance',
            description: 'Marketing performance dashboard showing 3-12x ROAS through growth operations',
            tags: ['Marketing', 'ROAS', 'Growth', 'Performance'],
            image: '/images/img3.png',
            liveLink: 'https://example.com',
            githubLink: 'https://github.com',
        },
        {
            id: 4,
            title: 'Data Analysis',
            description: 'Comprehensive data analysis for business intelligence and decision making',
            tags: ['Data Analysis', 'Business Intelligence', 'Analytics', 'Reporting'],
            image: '/images/img4.png',
            liveLink: 'https://example.com',
            githubLink: 'https://github.com',
        },
        {
            id: 5,
            title: 'Creative Design',
            description: 'Creative design and visual elements for the Send-Eat brand',
            tags: ['Design', 'Creative', 'Visuals', 'Branding'],
            image: '/images/img5.png',
            liveLink: 'https://example.com',
            githubLink: 'https://github.com',
        },
        {
            id: 6,
            title: 'Additional Project',
            description: 'Showcasing additional expertise and project capabilities',
            tags: ['Projects', 'Expertise', 'Portfolio', 'Capabilities'],
            image: '/images/img6.png',
            liveLink: 'https://example.com',
            githubLink: 'https://github.com',
        },
    ]

    const displayProjects = projects.length > 0 ? projects : mockProjects

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const sectionVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    }

    return (
        <section id="works" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Data-Driven </span>
                        <span className="bg-gradient-to-r from-electric-blue to-cyber-purple bg-clip-text text-transparent">
                            Case Studies
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                        Investor-grade analytics projects—from $5.89B funding landscapes to 500K+ data points across e-commerce, retail, and SaaS.
                    </p>
                    <IconGrid />
                </motion.div>

                {/* Error State */}
                {error && !loading && (
                    <motion.div
                        className="text-center py-12 glass-effect rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <p className="text-red-400 mb-4">Error loading projects</p>
                        <p className="text-gray-400 text-sm">Showing mock data for demonstration</p>
                    </motion.div>
                )}

                {/* Bento Box Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {displayProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`${index === 0 || index === 3
                                ? 'lg:col-span-2'
                                : ''
                                }`}
                            layout
                        >
                            <ProjectCard project={project} index={index} isLoading={loading} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Works
