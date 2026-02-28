"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ThreeBackground = dynamic(() => import("./ThreeBackground"), { ssr: false });
const ThreeHeroObject = dynamic(() => import("./ThreeHeroObject"), { ssr: false });

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black/20">
            <ThreeBackground />
            <ThreeHeroObject />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-violet-300 text-sm font-medium backdrop-blur-md shadow-lg shadow-violet-500/10 uppercase tracking-widest">
                        From Idea to Scalable Tech Product
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]"
                >
                    We Engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400 text-glow">Future-Proof</span> <br className="hidden md:block" /> SaaS & AI Solutions.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    Webx4 is an AI-first development studio for founders who want to build, launch, and scale high-performance products at the speed of thought.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                >
                    <Link href="/contact">
                        <button className="px-8 py-4 rounded-full bg-white text-black text-lg font-bold hover:bg-gray-200 transition-all flex items-center gap-2 group hover:shadow-xl hover:shadow-white/10 hover:-translate-y-1">
                            Book Strategy Call
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                    <Link href="/portfolio">
                        <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white text-lg font-bold hover:bg-white/10 hover:border-white/20 backdrop-blur-md transition-all hover:-translate-y-1">
                            View Case Studies
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
            </motion.div>
        </section>
    );
}
