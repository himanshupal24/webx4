"use client";
import { motion } from "framer-motion";
import { Users, Layout, Share2, BarChart2, Zap, DollarSign, Smartphone, Heart } from "lucide-react";
import Link from "next/link";

const creatorServices = [
    {
        title: "Creator SaaS Tools",
        description: "Bespoke tools for your audience, from calculators and generators to private membership platforms.",
        icon: Users,
        color: "text-emerald-500"
    },
    {
        title: "Advanced Link-in-Bio",
        description: "Custom-branded, high-performance link systems that you own entirely—no monthly subscriptions.",
        icon: Share2,
        color: "text-blue-500"
    },
    {
        title: "Analytics Dashboards",
        description: "Unified views of your growth across all platforms with custom metrics and automated reporting.",
        icon: BarChart2,
        color: "text-violet-500"
    },
    {
        title: "Monetization Platforms",
        description: "Your own subscription systems, course platforms, or digital stores with 0% platform fees.",
        icon: DollarSign,
        color: "text-orange-500"
    }
];

export default function CreatorTechPage() {
    return (
        <div className="bg-black min-h-screen pt-32 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Hero section */}
                <div className="text-center mb-32 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-600/20 blur-[120px] -z-10" />
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
                    >
                        Creator Economy <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                            Infrastructure.
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        We build technology for the next generation of digital entrepreneurs. Own your platform, own your data, and scale your influence into a tech product.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {creatorServices.map((s, i) => (
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

                {/* Creator Focus */}
                <div className="bg-white/5 rounded-[40px] p-12 md:p-20 mb-32 border border-white/10 text-center">
                    <Heart className="w-16 h-16 text-pink-500 mx-auto mb-8 animate-pulse" />
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Stop renting. Start owning.</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Platform algorithms change, but when you own your own tech stack, you control your destiny. We help creators transition from influencers to SaaS founders.
                    </p>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group overflow-hidden rounded-[40px] bg-gradient-to-br from-emerald-900/40 to-black border border-white/10"
                >
                    <div className="relative z-10 p-16 md:p-24 text-center backdrop-blur-sm">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to productize your audience?</h2>
                        <Link href="/contact">
                            <button className="px-12 py-5 bg-white text-black font-extrabold text-xl rounded-full hover:scale-105 transition-transform hover:shadow-2xl hover:shadow-white/20">
                                Build Your Creator App
                            </button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
