import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Code2, TrendingUp } from 'lucide-react'
import ChartCard from './ChartCard'

/**
 * About Component - Gabriel Johnson's Professional Profile
 * Showcases his full-spectrum founder expertise
 */
export const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    }

    const skills = [
        {
            category: 'Strategic Data Intelligence',
            icon: BarChart3,
            skills: ['Power BI', 'Tableau', 'SQL', 'Python', 'Data Modeling', 'Geo-mapping'],
            color: 'text-electric-blue',
        },
        {
            category: 'Full-Stack Engineering',
            icon: Code2,
            skills: ['Backend Systems', 'React', 'Node.js', 'Scalable Architecture', 'PostgreSQL', 'MongoDB'],
            color: 'text-cyber-purple',
        },
        {
            category: 'Growth Operations',
            icon: TrendingUp,
            skills: ['Meta Ads (3-12x ROAS)', 'Email Marketing', 'CRM Automation', 'Customer Segmentation', 'Lead Gen', 'A/B Testing'],
            color: 'text-electric-blue',
        },
    ]

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">The </span>
                        <span className="bg-gradient-to-r from-electric-blue to-cyber-purple bg-clip-text text-transparent">
                            Full-Spectrum Founder
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Combining data expertise, engineering prowess, and growth hacking into one founder vision
                    </p>
                </motion.div>

                {/* Professional Narrative */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <h3 className="text-2xl font-bold text-electric-blue">
                            Why Send-Eat is Different
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Most delivery platforms are built on guesses. Send-Eat is built on <span className="text-cyber-purple font-semibold">500K+ data points</span>.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            As a data analyst at Midtown Tech Hub, I built dashboards for the ecosystem. As a web developer at Blue Marvel Capital (London),
                            I engineered scalable backend systems. As a marketing executive, I achieved 3-12x ROAS through growth operations.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Send-Eat combines all three: intelligent geographic routing, predictive customer segmentation, and optimized repeat-order mechanics
                            targeting 48%+ retention.
                        </p>

                        <div className="pt-4">
                            <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-widest">
                                Credentials
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2 text-gray-400">
                                    <span className="text-electric-blue">✓</span>
                                    BSc Computer Science, University of the People (GPA: 3.33/4.0)
                                </li>
                                <li className="flex items-center gap-2 text-gray-400">
                                    <span className="text-electric-blue">✓</span>
                                    Full-Stack Web Development Nanodegree (Udacity + ALX)
                                </li>
                                <li className="flex items-center gap-2 text-gray-400">
                                    <span className="text-electric-blue">✓</span>
                                    Data Analysis: SQL & Power BI (World Bank Tech Training)
                                </li>
                                <li className="flex items-center gap-2 text-gray-400">
                                    <span className="text-electric-blue">✓</span>
                                    Python Programming (Coursera)
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div className="space-y-4" variants={itemVariants}>
                        {/* Key Metrics */}
                        <div className="glass-effect p-6 rounded-lg border border-electric-blue/20 hover:border-electric-blue/50 transition-all">
                            <p className="text-sm text-gray-400 mb-2">Global Analysis</p>
                            <p className="text-4xl font-bold text-electric-blue">$5.89B</p>
                            <p className="text-xs text-gray-500 mt-1">In startup funding analyzed</p>
                        </div>

                        <div className="glass-effect p-6 rounded-lg border border-cyber-purple/20 hover:border-cyber-purple/50 transition-all">
                            <p className="text-sm text-gray-400 mb-2">Data Insights</p>
                            <p className="text-4xl font-bold text-cyber-purple">500K+</p>
                            <p className="text-xs text-gray-500 mt-1">Data points processed</p>
                        </div>

                        <div className="glass-effect p-6 rounded-lg border border-electric-blue/20 hover:border-electric-blue/50 transition-all">
                            <p className="text-sm text-gray-400 mb-2">Growth Performance</p>
                            <p className="text-4xl font-bold text-electric-blue">3-12x</p>
                            <p className="text-xs text-gray-500 mt-1">ROAS across channels</p>
                        </div>

                        <div className="glass-effect p-6 rounded-lg border border-cyber-purple/20 hover:border-cyber-purple/50 transition-all">
                            <p className="text-sm text-gray-400 mb-2">Send-Eat Target</p>
                            <p className="text-4xl font-bold text-cyber-purple">48%+</p>
                            <p className="text-xs text-gray-500 mt-1">Repeat order rate</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Skill Sets */}
                <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-white text-center mb-12">
                        Technical Arsenal
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {skills.map((skillSet, idx) => {
                            const Icon = skillSet.icon
                            return (
                                <motion.div
                                    key={skillSet.category}
                                    className="glass-effect p-8 rounded-lg border border-gray-dark hover:border-electric-blue/50 transition-all"
                                    variants={itemVariants}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <Icon className={`${skillSet.color} w-8 h-8`} />
                                        <h4 className="text-lg font-bold text-white">
                                            {skillSet.category}
                                        </h4>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {skillSet.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 rounded-full text-xs font-medium bg-gray-dark text-electric-blue border border-electric-blue/30 hover:border-electric-blue transition-all"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Data Analytics Charts */}
                <motion.div
                    className="mt-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-white text-center mb-12">
                        Data Analytics Performance
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ChartCard title="Sales Growth Analysis" />
                        <ChartCard title="ROAS Performance" />
                    </div>
                </motion.div>

                {/* Leadership & Community */}
                <motion.div
                    className="mt-16 glass-effect p-8 rounded-lg border border-cyber-purple/20"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-cyber-purple mb-6">
                        Community & Leadership
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm font-semibold text-gray-300 mb-2">
                                Event Collaborator, Google Developer Group Benin
                            </p>
                            <p className="text-sm text-gray-400">
                                Sep 2024 - Dec 2025 | Fostering tech community and developer growth in Benin City
                            </p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-300 mb-2">
                                Trainer, Deep-Tech Community Benin
                            </p>
                            <p className="text-sm text-gray-400">
                                Jan 2025 - Apr 2025 | Training aspiring analysts on data methodologies
                            </p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-300 mb-2">
                                Coding Coach, 3MTT NITDA
                            </p>
                            <p className="text-sm text-gray-400">
                                Jul 2023 - Sep 2024 | Mentoring next-generation developers
                            </p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-300 mb-2">
                                Participant, Techstar Startup Weekend
                            </p>
                            <p className="text-sm text-gray-400">
                                Apr 2023 - Sep 2023 | Building and pitching early-stage ideas
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
