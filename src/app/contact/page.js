"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [status, setStatus] = useState("idle");

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) setStatus("success");
            else setStatus("error");
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    }

    return (
        <div className="pt-32 pb-20 min-h-screen bg-black relative overflow-hidden">
            {/* Abstract BG */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-900/10 to-transparent pointer-events-none" />

            <div className="max-w-2xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-xl shadow-2xl"
                >
                    <h1 className="text-4xl font-bold text-white mb-2">Start a Project</h1>
                    <p className="text-gray-400 mb-8">Tell us about your goals. We'll get back to you in 24h.</p>

                    {status === "success" ? (
                        <div className="text-center py-12">
                            <div className="text-5xl mb-4">✨</div>
                            <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                            <p className="text-gray-400">We'll be in touch shortly to schedule your consultation.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Name</label>
                                    <input required name="name" type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-violet-500 focus:outline-none transition-colors focus:ring-1 focus:ring-violet-500/50" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Email</label>
                                    <input required name="email" type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-violet-500 focus:outline-none transition-colors focus:ring-1 focus:ring-violet-500/50" placeholder="john@company.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Phone (Optional)</label>
                                <input name="phone" type="tel" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-violet-500 focus:outline-none transition-colors focus:ring-1 focus:ring-violet-500/50" placeholder="+91 00000 00000" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Project Type</label>
                                    <select name="type" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-violet-500 focus:outline-none transition-colors focus:ring-1 focus:ring-violet-500/50">
                                        <option>SaaS Product Development</option>
                                        <option>AI & Automation Solutions</option>
                                        <option>Startup Tech Launch</option>
                                        <option>Creator Economy Tech</option>
                                        <option>Web3 & Emerging Tech</option>
                                        <option>Growth Engineering</option>
                                        <option>Custom Web App</option>
                                        <option>Shopify / E-Commerce</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Budget Range</label>
                                    {/* <select name="budget" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-violet-500 focus:outline-none transition-colors focus:ring-1 focus:ring-violet-500/50">
                                        <option>5k</option>
                                        <option>10k</option>
                                        <option>25k</option>
                                        <option>50k</option>
                                        <option>100k</option>
                                        <option>250k</option>
                                        <option>500k</option>
                                        <option>1M+</option>
                                    </select> */}
                                    {/* enter the budget */}
                                    <input name="budget" type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-violet-500 focus:outline-none transition-colors focus:ring-1 focus:ring-violet-500/50" placeholder="Enter your budget" />

                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Details</label>
                                <textarea required name="details" rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-violet-500 focus:outline-none transition-colors focus:ring-1 focus:ring-violet-500/50" placeholder="Tell us about your project requirements..." />
                            </div>

                            <button
                                disabled={status === "loading"}
                                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 mt-2"
                            >
                                {status === "loading" ? "Sending..." : "Send Request"}
                            </button>
                            {status === "error" && (
                                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
