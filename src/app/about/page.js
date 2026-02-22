"use client";
import { motion } from "framer-motion";
import { Users, Globe, Award, Zap, Heart, Target } from "lucide-react";
import Link from "next/link";
import ThreeTechSphere from "@/components/ThreeTechSphere";

export default function AboutPage() {
    return (
        <div className="bg-black min-h-screen pt-32 pb-20 overflow-hidden">

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 mb-32 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
                            The Next Era.
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                        Webx4 is an AI-first Digital & SaaS Development Studio. We bridge the gap between ambitious ideas and scalable, market-ready tech products.
                    </p>
                </motion.div>
            </div>

            {/* Stats Section with Glassmorphism */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Projects Shipped", val: "20+", icon: Zap },
                        { label: "Global Clients", val: "2+", icon: Globe },
                        { label: "Team Experts", val: "15", icon: Users },
                        { label: "Industry Awards", val: "NA", icon: Award },
                    ].map((stat, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            key={stat.label}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors"
                        >
                            <stat.icon className="w-8 h-8 text-violet-500 mb-4" />
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.val}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Story / Values Section */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-8">Our Philosophy</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="p-4 rounded-full bg-blue-900/20 text-blue-400 h-fit">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Precision Engineering</h3>
                                    <p className="text-gray-400">We don't rely on bloated templates. Every line of code is written with performance and scalability in mind.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="p-4 rounded-full bg-purple-900/20 text-purple-400 h-fit">
                                    <Heart size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">User-Obsessed Design</h3>
                                    <p className="text-gray-400">A website that fails to convert is just digital decoration. We prioritize UX patterns that drive results.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square rounded-3xl bg-black border border-white/10 overflow-hidden relative">
                            <ThreeTechSphere />
                        </div>
                    </div>
                </div>
            </div>

            {/* Team CTA */}
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-8">Meet the Team</h2>
                <p className="text-gray-400 mb-12">
                    We are a distributed team of designers, developers, and strategists working from
                    London, New York, Tokyo, and Berlin.
                </p>
                <Link href="/contact">
                    <button className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                        Join Our Journey
                    </button>
                </Link>
            </div>

        </div>
    );
}
