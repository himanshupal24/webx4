"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ExternalLink, Video, Film, Scissors, Sparkles } from "lucide-react";

const showreelItems = [
    {
        id: 1,
        title: "Neon Pulse Brand Film",
        category: "Visual Storytelling",
        thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070",
        color: "from-rose-500 to-red-600"
    },
    {
        id: 2,
        title: "Visionary Keynote",
        category: "Post-Production",
        thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2071",
        color: "from-blue-500 to-indigo-600"
    },
    {
        id: 3,
        title: "Aesthetic Reel Kit",
        category: "Social Media",
        thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=2070",
        color: "from-emerald-500 to-teal-600"
    },
    {
        id: 4,
        title: "The DevLog Podcast",
        category: "Audio-Visual Editing",
        thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=2070",
        color: "from-orange-500 to-amber-600"
    }
];

export default function VideoShowreel() {
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <section className="py-32 relative bg-black overflow-hidden" id="showreel">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">
                            New: High-End <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-600">Video Content.</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl italic">
                            "We don't just cut clips. We craft cinematic experiences that stop the scroll and convert viewers."
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {showreelItems.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => setActiveVideo(item)}
                            className="group relative aspect-[16/9] rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/30 transition-all hover:shadow-2xl hover:shadow-red-500/20"
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />

                            {/* Image Placeholder */}
                            <Image
                                src={item.thumbnail}
                                alt={item.title}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                sizes="(max-w-7xl) 25vw, 100vw"
                            />

                            {/* Info */}
                            <div className="absolute bottom-6 left-6 right-6 z-20">
                                <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1 block group-hover:text-white transition-colors">
                                    {item.category}
                                </span>
                                <h3 className="text-xl font-bold text-white group-hover:translate-x-1 transition-transform">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Play Button */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className={`w-16 h-16 rounded-full bg-gradient-to-tr ${item.color} flex items-center justify-center shadow-lg shadow-black/50`}>
                                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Video Modal (Mock) */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
                    >
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors p-3 hover:bg-white/5 rounded-full"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <div className="max-w-6xl w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                            {/* Mock video background */}
                            <Image
                                src={activeVideo.thumbnail}
                                alt={activeVideo.title}
                                fill
                                className="object-cover blur-sm opacity-50"
                                priority
                            />

                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                                <Sparkles className="w-20 h-20 text-rose-500 mb-8 animate-pulse" />
                                <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                                    Cinematic <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-600">Post-Production</span>
                                </h3>
                                <p className="text-xl text-gray-400 max-w-2xl mb-12">
                                    Our video storytelling is exclusive to premium brands. We don't just edit; we engineer engagement, emotion, and action.
                                </p>
                                <button className="px-12 py-5 bg-white text-black font-extrabold rounded-full hover:scale-105 transition-transform flex items-center gap-3 shadow-2xl shadow-white/10">
                                    Start Your Production <ExternalLink className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
