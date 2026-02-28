"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket, Sparkles, Brain, Cpu, Database } from "lucide-react";

const steps = [
    {
        title: "AI-Powered Discovery",
        desc: "We use LLMs to analyze market gaps, competitor features, and technical feasibility in seconds.",
        icon: Search,
        aiIcon: Brain,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Intelligent Architecture",
        desc: "Designing scalable, serverless infrastructures integrated with vector databases and AI agents.",
        icon: PenTool,
        aiIcon: Database,
        color: "purple-500",
        bg: "bg-purple-500/10"
    },
    {
        title: "Rapid AI Co-Pilot Dev",
        desc: "Accelerating full-stack development using advanced AI code generation and automated testing.",
        icon: Code,
        aiIcon: Cpu,
        color: "pink-500",
        bg: "bg-pink-500/10"
    },
    {
        title: "Autonomous Deployment",
        desc: "Zero-downtime CI/CD pipelines ensuring your product scales globally from day one.",
        icon: Rocket,
        aiIcon: Sparkles,
        color: "cyan-500",
        bg: "bg-cyan-500/10"
    }
];

export default function AIWorkflow() {
    return (
        <section className="py-32 relative bg-black overflow-hidden" id="workflow">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-600/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">
                        The AI-Enhanced <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">Workflow.</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed italic">
                        "Traditional development is slow. Our AI-augmented process delivers 3x speed with 10x reliability."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-24 right-24 h-0.5 bg-gradient-to-r from-violet-500/0 via-violet-500/50 to-cyan-500/0 z-0" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl relative hover:bg-white/[0.08] transition-all group z-10"
                        >
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 group-hover:bg-violet-600 transition-all duration-300">
                                0{i + 1}
                            </div>

                            <div className="mb-8 pt-4 flex justify-center">
                                <div className="relative">
                                    <step.icon className="w-16 h-16 text-white group-hover:animate-pulse" />
                                    <div className="absolute -top-2 -right-2 bg-gradient-to-tr from-violet-500 to-fuchsia-500 p-2 rounded-full shadow-lg">
                                        <step.aiIcon className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-violet-400 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed text-center group-hover:text-gray-300 transition-colors">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
