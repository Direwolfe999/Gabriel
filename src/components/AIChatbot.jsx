import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Sparkles, Bot, User } from 'lucide-react'

/**
 * AI Chatbot Component
 * Premium chat interface with Groq AI integration
 */
export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Gabriel's AI assistant. How can I help you learn more about Send-Eat and Gabriel's work?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputText.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputText.trim(),
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    try {
      // Call Groq API for real AI response
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'mixtral-8x7b-32768',
          messages: [
            {
              role: 'system',
              content: `You are Gabriel's AI assistant. Gabriel Johnson is the CEO & Founder of Send-Eat, a data-driven delivery platform. He specializes in:
              - Data Analytics & Visualization (Power BI, Tableau, SQL, Python)
              - Full-Stack Web Development (React, Node.js, PostgreSQL)
              - Growth Operations & Digital Marketing
              - Business Intelligence & Data Science
              
              His key projects include analyzing $5.89B in startup funding, 500K+ sales data points, and building Send-Eat targeting 48%+ repeat order rates.
              
              Be friendly, professional, and provide detailed information about Gabriel's expertise and Send-Eat.`,
            },
            ...messages.map(msg => ({
              role: msg.sender === 'user' ? 'user' : 'assistant',
              content: msg.text,
            })),
            {
              role: 'user',
              content: inputText.trim(),
            },
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        const botMessage = {
          id: messages.length + 2,
          text: data.choices[0].message.content,
          sender: 'bot',
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
      } else {
        throw new Error('API request failed')
      }
    } catch (error) {
      console.error('Error fetching AI response:', error)
      // Fallback response if API fails
      const fallbackResponses = [
        "I apologize, but I'm having trouble connecting to my knowledge base right now. Would you like to learn more about Gabriel's data analysis expertise or Send-Eat's platform?",
        "Thank you for your question! Gabriel specializes in data-driven decision making and growth strategies for Send-Eat. Would you like to know more about his specific skills?",
      ]
      const fallbackMessage = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
      setMessages((prev) => [...prev, {
        id: messages.length + 2,
        text: fallbackMessage,
        sender: 'bot',
        timestamp: new Date(),
      }])
    } finally {
      setIsTyping(false)
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <motion.button
        onClick={toggleChat}
        className="p-4 bg-gradient-to-r from-electric-blue to-cyber-purple text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-24 right-0 w-80 max-w-[90vw] glass-effect rounded-2xl border border-electric-blue/20 shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-electric-blue/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-electric-blue to-cyber-purple rounded-lg">
                    <Sparkles size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">AI Assistant</h3>
                    <p className="text-xs text-electric-blue">Online</p>
                  </div>
                </div>
                <button
                  onClick={toggleChat}
                  className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 max-h-96 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {message.sender === 'bot' && (
                      <div className="p-2 bg-gradient-to-r from-electric-blue to-cyber-purple rounded-full self-start">
                        <Bot size={16} className="text-white" />
                      </div>
                    )}

                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-electric-blue to-cyber-purple text-white'
                          : 'bg-white/5 border border-white/10 text-gray-300'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-60 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>

                    {message.sender === 'user' && (
                      <div className="p-2 bg-gradient-to-r from-cyber-purple to-electric-blue rounded-full self-start">
                        <User size={16} className="text-white" />
                      </div>
                    )}
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    className="flex gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="p-2 bg-gradient-to-r from-electric-blue to-cyber-purple rounded-full self-start">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                      <div className="flex gap-1">
                        <motion.div
                          className="w-2 h-2 bg-electric-blue rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-electric-blue rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-electric-blue rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-electric-blue/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 glass-effect rounded-lg border border-electric-blue/20 text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue"
                  disabled={isTyping}
                />
                <motion.button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className="p-2 bg-gradient-to-r from-electric-blue to-cyber-purple text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AIChatbot
