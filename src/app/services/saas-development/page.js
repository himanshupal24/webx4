"use client";
import { motion } from "framer-motion";
import { Cpu, Layout, CreditCard, Shield, Zap, BarChart, Server, Layers } from "lucide-react";
import Link from "next/link";

const features = [
    {
        title: "Full-Stack Architecture",
        description: "Robust, enterprise-grade foundations using Next.js, Node.js, and scalable cloud infrastructure.",
        icon: Layers,
        color: "text-blue-500"
    },
    {
        title: "Subscription Systems",
        description: "Seamless Stripe or LemonSqueezy integrations for global billing and user management.",
        icon: CreditCard,
        color: "text-emerald-500"
    },
    {
        title: "Dashboard Development",
        description: "Premium user interfaces and admin panels designed for maximum productivity and insight.",
        icon: Layout,
        color: "text-violet-500"
    },
    {
        title: "Scalable Backends",
        description: "High-performance API systems and databases built to handle millions of requests.",
        icon: Server,
        color: "text-orange-500"
    }
];

export default function SaaSDevelopmentPage() {
    return (
        <div className="bg-black min-h-screen pt-32 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Hero section */}
                <div className="text-center mb-32 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/20 blur-[120px] -z-10" />
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
                    >
                        SaaS Product <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                            Engineering.
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        From MVP development to full-scale SaaS architecture. We build products that are secure, scalable, and ready to dominate the market.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all group"
                        >
                            <f.icon className={`w-12 h-12 ${f.color} mb-8 group-hover:scale-110 transition-transform`} />
                            <h3 className="text-2xl font-bold text-white mb-4">{f.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">{f.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Stack */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold text-white text-center mb-16">The Webx4 SaaS Stack</h2>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
                        {["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS", "Vercel", "Docker"].map((tech) => (
                            <span key={tech} className="text-xl md:text-3xl font-bold text-white">{tech}</span>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group overflow-hidden rounded-[40px]"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-violet-600/20 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 p-16 md:p-24 text-center border border-white/10 backdrop-blur-sm">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to build your next big thing?</h2>
                        <Link href="/contact">
                            <button className="px-12 py-5 bg-white text-black font-extrabold text-xl rounded-full hover:scale-105 transition-transform hover:shadow-2xl hover:shadow-white/20">
                                Start Your SaaS Journey
                            </button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
