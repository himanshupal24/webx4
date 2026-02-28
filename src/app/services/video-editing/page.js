"use client";
import { motion } from "framer-motion";
import { Video, Film, Scissors, Layers, PlayCircle, Monitor, Camera, Sparkles } from "lucide-react";
import Link from "next/link";

const videoServices = [
    {
        title: "Commercial & Brand Films",
        description: "High-impact brand storytelling designed to capture attention and convert viewers into loyal customers.",
        icon: Film,
        color: "text-rose-500"
    },
    {
        title: "Social Media Content",
        description: "Viral-ready short-form content for Instagram Reels, TikTok, and YouTube Shorts that boosts engagement.",
        icon: PlayCircle,
        color: "text-red-500"
    },
    {
        title: "Motion Graphics & VFX",
        description: "Custom 2D/3D animations and visual effects that give your videos a premium, professional edge.",
        icon: Layers,
        color: "text-orange-500"
    },
    {
        title: "Post-Production Mastery",
        description: "Advanced color grading, sound design, and precision editing to bring your raw footage to life.",
        icon: Scissors,
        color: "text-pink-500"
    }
];

export default function VideoEditingPage() {
    return (
        <div className="bg-black min-h-screen pt-32 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Hero section */}
                <div className="text-center mb-32 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rose-600/20 blur-[120px] -z-10" />
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
                    >
                        Premium Video <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-600">
                            Production.
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        We turn raw footage into cinematic stories. Our editing team blends creativity with technical precision to deliver content that stands out in the digital noise.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {videoServices.map((s, i) => (
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

                {/* Software Stack */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold text-white text-center mb-16 italic">"Mastering the industry's elite tools."</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D", "Blender", "Topaz AI", "Audition", "CapCut Pro"].map((tech) => (
                            <div key={tech} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center font-bold text-white/50 hover:text-white transition-colors">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Portfolio Link CTA */}
                <div className="mb-32 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">See our work in action.</h2>
                    <Link href="/portfolio">
                        <button className="px-10 py-4 border border-white/20 rounded-full text-white hover:bg-white/10 transition-all flex items-center gap-3 mx-auto">
                            <Sparkles className="w-5 h-5 text-rose-400" />
                            Explore Video Portfolio
                        </button>
                    </Link>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group overflow-hidden rounded-[40px] bg-gradient-to-br from-rose-900/40 to-black border border-white/10"
                >
                    <div className="relative z-10 p-16 md:p-24 text-center backdrop-blur-sm">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to start your next production?</h2>
                        <Link href="/contact">
                            <button className="px-12 py-5 bg-gradient-to-r from-rose-600 to-red-600 text-white font-extrabold text-xl rounded-full hover:scale-105 transition-transform hover:shadow-2xl hover:shadow-rose-500/30">
                                Get a Free Quote
                            </button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
