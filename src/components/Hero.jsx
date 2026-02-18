import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import LottieText from './LottieText'

/**
 * Hero Component - Data-Driven CEO & Founder
 * Premium landing section showcasing Send-Eat founder narrative
 */
export const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
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

    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    }

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 opacity-20 blur-3xl -z-10">
                <motion.div
                    className="absolute top-20 left-20 w-72 h-72 bg-electric-blue rounded-full mix-blend-screen"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-72 h-72 bg-cyber-purple rounded-full mix-blend-screen"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, delay: 2 }}
                />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        className="text-center lg:text-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Badge */}
                        <motion.div
                            className="flex items-center justify-center lg:justify-start gap-2 mb-6"
                            variants={itemVariants}
                        >
                            <div className="h-px w-8 bg-gradient-to-r from-transparent to-electric-blue" />
                            <span className="text-sm font-medium text-electric-blue flex items-center gap-1">
                                <Sparkles size={16} />
                                CEO • Data Analyst • Full-Stack Developer • Founder
                            </span>
                            <div className="h-px w-8 bg-gradient-to-l from-transparent to-electric-blue" />
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                            variants={itemVariants}
                        >
                            <span className="bg-gradient-to-r from-electric-blue via-cyber-purple to-electric-blue bg-clip-text text-transparent animate-pulse">
                                <LottieText text="Data-Driven CEO & Founder" delay={0.5} />
                            </span>
                            <br />
                            <span className="text-white">
                                <LottieText text="Building systems that scale" delay={0.8} />
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
                            variants={itemVariants}
                        >
                            Full-stack founder combining strategic data intelligence, scalable backend engineering, and growth operations expertise.
                            Leveraging <span className="text-electric-blue font-semibold">$5.89B+ funding insights</span> and
                            <span className="text-cyber-purple font-semibold"> 500K+ sales analytics</span> to build Send-Eat—a data-optimized
                            delivery ecosystem targeting <span className="text-electric-blue font-semibold">48%+ repeat order rates</span>.
                        </motion.p>

                        {/* Hero Images with Gradient Effects */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="relative group overflow-hidden rounded-2xl"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src="/images/img1.png"
                                    alt="Gabriel Johnson - CEO & Founder"
                                    className="w-full h-80 object-cover rounded-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-electric-blue/80 to-cyber-purple/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                                    <div className="text-white">
                                        <h3 className="text-xl font-bold mb-2">Strategic Leader</h3>
                                        <p className="text-sm text-gray-200">Combining data expertise with visionary leadership</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="relative group overflow-hidden rounded-2xl"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src="/images/img2.png"
                                    alt="Send-Eat Delivery Platform"
                                    className="w-full h-80 object-cover rounded-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-cyber-purple/80 to-electric-blue/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                                    <div className="text-white">
                                        <h3 className="text-xl font-bold mb-2">Send-Eat Platform</h3>
                                        <p className="text-sm text-gray-200">Data-optimized delivery ecosystem</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Key Stats */}
                        <motion.div
                            className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto"
                            variants={itemVariants}
                        >
                            <div className="glass-effect p-4 rounded-lg">
                                <p className="text-2xl font-bold text-electric-blue">500K+</p>
                                <p className="text-xs text-gray-400">Sales Data Points</p>
                            </div>
                            <div className="glass-effect p-4 rounded-lg">
                                <p className="text-2xl font-bold text-cyber-purple">5.89B</p>
                                <p className="text-xs text-gray-400">Funding Analyzed</p>
                            </div>
                            <div className="glass-effect p-4 rounded-lg">
                                <p className="text-2xl font-bold text-electric-blue">48%+</p>
                                <p className="text-xs text-gray-400">Repeat Rate Goal</p>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            variants={itemVariants}
                        >
                            <motion.a
                                href="#works"
                                className="px-8 py-4 bg-gradient-to-r from-electric-blue to-cyber-purple text-dark font-bold rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-electric-blue/50 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Case Studies
                                <ArrowRight size={20} />
                            </motion.a>

                            <motion.a
                                href="#contact"
                                className="px-8 py-4 glass-effect text-electric-blue font-bold rounded-lg border border-electric-blue/30 hover:border-electric-blue hover:shadow-lg hover:shadow-electric-blue/20 transition-all"
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 217, 255, 0.1)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Connect About Send-Eat
                            </motion.a>
                        </motion.div>

                        {/* Scroll indicator */}
                        <motion.div
                            className="absolute bottom-10 left-1/2 -translate-x-1/2"
                            variants={floatingVariants}
                            animate="animate"
                        >
                            <div className="flex flex-col items-center gap-2">
                                <p className="text-xs text-gray-500 uppercase tracking-widest">Scroll to explore</p>
                                <div className="w-6 h-10 border-2 border-electric-blue/30 rounded-full flex justify-center">
                                    <motion.div
                                        className="w-1 h-2 bg-electric-blue rounded-full mt-2"
                                        animate={{ y: [0, 8, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        className="relative"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="relative z-10"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <img
                                src="/images/2.png"
                                alt="Gabriel Johnson - CEO & Founder"
                                className="w-full h-auto rounded-2xl shadow-2xl shadow-cyber-purple/20"
                            />
                        </motion.div>
                        {/* Decorative elements */}
                        <motion.div
                            className="absolute -top-4 -right-4 w-24 h-24 bg-electric-blue rounded-full blur-3xl opacity-20"
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute -bottom-4 -left-4 w-24 h-24 bg-cyber-purple rounded-full blur-3xl opacity-20"
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
