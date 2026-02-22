"use client";
import React from "react";
import { Zap, Target, BarChart, ShieldCheck, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "AI-First Approach",
        description: "We don't just 'add' AI. We build AI-native systems that evolve with your business.",
        icon: Cpu,
        gradient: "from-violet-500 to-fuchsia-500"
    },
    {
        title: "Startup-Focused",
        description: "We speak founder. Rapid prototyping and MVP development designed for speed and scale.",
        icon: Zap,
        gradient: "from-orange-500 to-amber-500"
    },
    {
        title: "Scalable Architecture",
        description: "Enterprise-grade foundations that handle millions of requests without breaking a sweat.",
        icon: ShieldCheck,
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "Long-term Tech Partner",
        description: "We're not freelancers; we're your extended tech team. We scale as you grow.",
        icon: Target,
        gradient: "from-emerald-500 to-teal-500"
    }
];

export default function WhyWebx4() {
    return (
        <section className="py-32 relative bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
                        >
                            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Webx4?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 mb-12 leading-relaxed"
                        >
                            We don't just build websites — we build <span className="text-white font-semibold italic">products</span>. Our philosophy is rooted in engineering excellence and market-driven development.
                        </motion.p>

                        <div className="space-y-8">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                    className="flex gap-6 items-start group"
                                >
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${f.gradient} bg-opacity-10 border border-white/5 group-hover:scale-110 transition-transform`}>
                                        <f.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{f.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-transparent blur-[100px] rounded-full" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden flex items-center justify-center p-12"
                        >
                            <div className="text-center">
                                <div className="text-8xl mb-6">🚀</div>
                                <h3 className="text-3xl font-bold text-white mb-4 italic">"Not just websites — we build products."</h3>
                                <p className="text-violet-300 font-mono tracking-widest uppercase text-sm">Webx4 Engineering Philosophy</p>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-white/20 rounded-tl-3xl" />
                            <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-white/20 rounded-br-3xl" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
