"use client";
import { motion } from "framer-motion";
import { Bot, Zap, MessageSquare, Workflow, Brain, Database, Cpu, Search } from "lucide-react";
import Link from "next/link";

const aiServices = [
    {
        title: "AI Chatbot Development",
        description: "Custom LLM-powered bots for customer support, lead generation, and internal knowledge bases.",
        icon: MessageSquare,
        color: "text-fuchsia-500"
    },
    {
        title: "Workflow Automation",
        description: "Eliminate repetitive tasks with intelligent automations using Zapier, Make, or custom Python scripts.",
        icon: Workflow,
        color: "text-blue-500"
    },
    {
        title: "Predictive Analytics",
        description: "Harness your data to predict market trends, customer behavior, and business outcomes.",
        icon: Brain,
        color: "text-violet-500"
    },
    {
        title: "WhatsApp & CRM Automation",
        description: "Streamline communication and sales funnels with intelligent, automated messaging systems.",
        icon: Zap,
        color: "text-green-500"
    }
];

export default function AIAutomationPage() {
    return (
        <div className="bg-black min-h-screen pt-32 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Hero section */}
                <div className="text-center mb-32 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-fuchsia-600/20 blur-[120px] -z-10" />
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
                    >
                        AI & Intelligent <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-500">
                            Automation.
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        We build the brains of your business. Our AI solutions reduce overhead, increase efficiency, and provide a 24/7 intelligent workforce.
                    </motion.p>
                </div>

                {/* AI Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {aiServices.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all group relative overflow-hidden"
                        >
                            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                <s.icon className="w-48 h-48" />
                            </div>
                            <s.icon className={`w-12 h-12 ${s.color} mb-8 group-hover:scale-110 transition-transform`} />
                            <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">{s.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* AI Stack */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold text-white text-center mb-16 italic">"Powered by the most advanced models."</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {["OpenAI", "Claude", "Llama 3", "LangChain", "Pinecone", "Python", "Mistral", "Groq"].map((tech) => (
                            <div key={tech} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center font-bold text-white/50 hover:text-white transition-colors">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group overflow-hidden rounded-[40px] bg-gradient-to-br from-fuchsia-900/40 to-black border border-white/10"
                >
                    <div className="relative z-10 p-16 md:p-24 text-center backdrop-blur-sm">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Automate your growth today.</h2>
                        <Link href="/contact">
                            <button className="px-12 py-5 bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white font-extrabold text-xl rounded-full hover:scale-105 transition-transform hover:shadow-2xl hover:shadow-fuchsia-500/30">
                                Book AI Audit
                            </button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
