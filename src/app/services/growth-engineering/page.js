"use client";
import { motion } from "framer-motion";
import { TrendingUp, MousePointerClick, Search, Gauge, BarChart, Target, Zap, Shield } from "lucide-react";
import Link from "next/link";

const growthServices = [
    {
        title: "Conversion-Optimized Funnels",
        description: "Data-driven landing pages and checkout flows engineered to maximize ROAS and user acquisition.",
        icon: MousePointerClick,
        color: "text-yellow-500"
    },
    {
        title: "Technical SEO",
        description: "Next-level search optimization including site architecture, speed, Schema, and Core Web Vitals.",
        icon: Search,
        color: "text-blue-500"
    },
    {
        title: "Speed Optimization",
        description: "We optimize every kilobyte to ensure your site loads instantly, improving both SEO and UX.",
        icon: Gauge,
        color: "text-emerald-500"
    },
    {
        title: "Advanced Tracking",
        description: "Server-side tracking and custom data systems for accurate attribution and growth insights.",
        icon: BarChart,
        color: "text-orange-500"
    }
];

export default function GrowthEngineeringPage() {
    return (
        <div className="bg-black min-h-screen pt-32 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Hero section */}
                <div className="text-center mb-32 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-600/20 blur-[120px] -z-10" />
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
                    >
                        Growth & Performance <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                            Engineering.
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Growth isn't just about ads—it's about engineering. We optimize your digital infrastructure to convert every visitor into a customer.
                    </motion.p>
                </div>

                {/* Growth Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {growthServices.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all group"
                        >
                            <s.icon className={`w-12 h-12 ${s.color} mb-8 group-hover:scale-110 transition-transform`} />
                            <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">{s.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
                    {[
                        { label: "Avg. Speed Improvement", value: "400%" },
                        { label: "Lighthouse Score", value: "100" },
                        { label: "Conversion Lift", value: "35%+" },
                        { label: "Server Response", value: "< 50ms" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center p-8 border border-white/5 rounded-2xl bg-white/[0.02]">
                            <div className="text-3xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                            <div className="text-gray-500 text-sm font-bold uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group overflow-hidden rounded-[40px] bg-gradient-to-br from-yellow-900/30 to-black border border-white/10"
                >
                    <div className="relative z-10 p-16 md:p-24 text-center backdrop-blur-sm">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to scale your conversions?</h2>
                        <Link href="/contact">
                            <button className="px-12 py-5 bg-white text-black font-extrabold text-xl rounded-full hover:scale-105 transition-transform hover:shadow-2xl hover:shadow-white/20">
                                Optimize My Funnel
                            </button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
