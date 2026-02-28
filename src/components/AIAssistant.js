"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Sparkles, User, ArrowRight } from "lucide-react";

export default function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hey! I'm Webx4's AI agent. Want to know how we can build your dream SaaS or AI product?" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input;
        setInput("");
        setMessages(prev => [...prev, { role: "user", content: userMsg }]);
        setIsTyping(true);

        // Simulate AI response logic
        setTimeout(() => {
            let response = "That sounds interesting! We've built similar systems. Would you like to check our portfolio or book a free strategy call?";

            if (userMsg.toLowerCase().includes("pricing") || userMsg.toLowerCase().includes("cost")) {
                response = "We provide custom quotes based on project complexity. Most MVPs start around $5k-$10k. Want to discuss your requirements?";
            } else if (userMsg.toLowerCase().includes("video") || userMsg.toLowerCase().includes("editing")) {
                response = "Our video editing is premium-only. We handle brand films, social content, and VFX. Check the 'Video Production' service page!";
            } else if (userMsg.toLowerCase().includes("ai") || userMsg.toLowerCase().includes("automation")) {
                response = "AI is our core expertise. From LLM agents to workflow automations, we handle the full stack. What specific problem are you looking to solve?";
            }

            setMessages(prev => [...prev, { role: "assistant", content: response }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-6 w-[350px] md:w-[400px] h-[550px] bg-black/90 backdrop-blur-2xl rounded-[32px] border border-white/10 shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-violet-600/20 to-transparent">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex items-center justify-center relative">
                                    <Bot className="w-6 h-6 text-white" />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold leading-none mb-1">Webx4 AI</h3>
                                    <p className="text-gray-400 text-xs flex items-center gap-1">
                                        <Sparkles className="w-3 h-3 text-violet-400" />
                                        Always Online
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-white/10' : 'bg-violet-600'}`}>
                                            {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                                        </div>
                                        <div className={`py-3 px-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-white text-black font-medium' : 'bg-white/5 border border-white/10 text-gray-200'}`}>
                                            {msg.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="flex gap-3 items-center text-gray-500 italic text-xs ml-11">
                                        <span className="flex gap-1">
                                            <span className="w-1 h-1 bg-violet-400 rounded-full animate-bounce" />
                                            <span className="w-1 h-1 bg-violet-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                                            <span className="w-1 h-1 bg-violet-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                                        </span>
                                        Thinking...
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-6 bg-white/5 border-t border-white/10">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="w-full h-12 bg-white/5 border border-white/10 rounded-full px-6 pr-12 text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all placeholder:text-gray-500"
                                />
                                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg shadow-violet-600/20">
                                    <Send className="w-4 h-4 text-white" />
                                </button>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {["Book a Call", "View Pricing", "Our Tech"].map((suggestion) => (
                                    <button
                                        key={suggestion}
                                        type="button"
                                        onClick={() => setInput(suggestion)}
                                        className="text-[10px] uppercase tracking-wider font-bold text-gray-500 hover:text-violet-400 border border-white/5 hover:border-violet-500/30 rounded-full px-3 py-1 bg-white/5 transition-all"
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${isOpen ? 'bg-white text-black' : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white'}`}
            >
                {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
                {!isOpen && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-white border-4 border-black rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-violet-600 rounded-full animate-ping" />
                    </div>
                )}
            </motion.button>
        </div>
    );
}
