"use client";
import React from "react";
import { motion } from "framer-motion";

const technologies = [
    "OpenAI", "Next.js", "GPT-4o", "Claude 3.5", "Python", "LangChain", "Framer Motion", "Three.js", "Shopify", "Stripe", "Supabase", "React Native", "PostgreSQL", "Groq", "Pinecone", "Mistral", "Llama 3", "Vercel", "Tailwind CSS", "TypeScript"
];

export default function TechMarquee() {
    return (
        <div className="py-20 relative bg-black overflow-hidden border-y border-white/5">
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

            <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="flex whitespace-nowrap gap-12 items-center"
            >
                {[...technologies, ...technologies].map((tech, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                        <div className="w-2 h-2 rounded-full bg-violet-600 group-hover:scale-150 transition-transform" />
                        <span className="text-3xl font-bold text-white/40 hover:text-white transition-colors uppercase tracking-widest cursor-default">
                            {tech}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
