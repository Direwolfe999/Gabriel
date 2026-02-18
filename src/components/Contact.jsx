import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Twitter, Send } from 'lucide-react'

/**
 * Contact Component
 * Premium contact section with glowing CTA and social links
 */
export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => {
            setFormData({ name: '', email: '', message: '' })
            setSubmitted(false)
        }, 3000)
    }

    const socialLinks = [
        {
            label: 'GitHub',
            icon: Github,
            href: 'https://github.com',
            color: 'hover:text-electric-blue',
        },
        {
            label: 'LinkedIn',
            icon: Linkedin,
            href: 'https://linkedin.com',
            color: 'hover:text-cyber-purple',
        },
        {
            label: 'Twitter',
            icon: Twitter,
            href: 'https://twitter.com',
            color: 'hover:text-electric-blue',
        },
    ]

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

    return (
        <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Let's </span>
                        <span className="bg-gradient-to-r from-electric-blue to-cyber-purple bg-clip-text text-transparent">
                            Collaborate
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Have an exciting project? I'd love to hear about it!
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Contact Info */}
                    <motion.div className="space-y-8" variants={itemVariants}>
                        <div>
                            <h3 className="text-2xl font-bold text-electric-blue mb-6">Get In Touch</h3>
                            <p className="text-gray-400 mb-8">
                                I'm always interested in hearing about new projects and opportunities.
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="space-y-4">
                            <motion.a
                                href="mailto:hello@example.com"
                                className="flex items-center gap-3 glass-effect p-4 rounded-lg hover:border-electric-blue/50 transition-all group"
                                whileHover={{ x: 10 }}
                            >
                                <div className="p-3 rounded-full bg-electric-blue/10 group-hover:bg-electric-blue/20 transition-all">
                                    <Mail size={20} className="text-electric-blue" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="text-electric-blue font-medium">hello@example.com</p>
                                </div>
                            </motion.a>

                            <motion.a
                                href="tel:+1234567890"
                                className="flex items-center gap-3 glass-effect p-4 rounded-lg hover:border-cyber-purple/50 transition-all group"
                                whileHover={{ x: 10 }}
                            >
                                <div className="p-3 rounded-full bg-cyber-purple/10 group-hover:bg-cyber-purple/20 transition-all">
                                    <Phone size={20} className="text-cyber-purple" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <p className="text-cyber-purple font-medium">+1 (234) 567-8900</p>
                                </div>
                            </motion.a>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-widest">
                                Follow
                            </h4>
                            <div className="flex gap-4">
                                {socialLinks.map((link) => {
                                    const Icon = link.icon
                                    return (
                                        <motion.a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-3 glass-effect rounded-full transition-all ${link.color}`}
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Icon size={20} />
                                        </motion.a>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        variants={itemVariants}
                    >
                        {/* Name Input */}
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring' }}>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 glass-effect rounded-lg border border-gray-dark focus:border-electric-blue focus:outline-none transition-all text-white placeholder-gray-500"
                                placeholder="Gabriel Johnson"
                            />
                        </motion.div>

                        {/* Email Input */}
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring' }}>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 glass-effect rounded-lg border border-gray-dark focus:border-electric-blue focus:outline-none transition-all text-white placeholder-gray-500"
                                placeholder="you@example.com"
                            />
                        </motion.div>

                        {/* Message Input */}
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring' }}>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full px-4 py-3 glass-effect rounded-lg border border-gray-dark focus:border-electric-blue focus:outline-none transition-all text-white placeholder-gray-500 resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div className="w-full relative group" whileHover="hover" initial="initial">
                            <motion.div
                                className="absolute inset-0 rounded-lg bg-gradient-to-r from-electric-blue to-cyber-purple opacity-0 group-hover:opacity-100 blur group-hover:blur-lg transition-all"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.6 }}
                            />

                            <motion.button
                                type="submit"
                                className="relative w-full px-6 py-3 bg-gradient-to-r from-electric-blue to-cyber-purple text-dark font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={submitted}
                            >
                                {submitted ? (
                                    <>
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="text-green-400"
                                        >
                                            ✓
                                        </motion.span>
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        >
                                            <Send size={18} />
                                        </motion.div>
                                    </>
                                )}
                            </motion.button>
                        </motion.div>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
