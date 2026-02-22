"use client";
import { motion } from "framer-motion";
import { Rocket, Target, MousePointer2, Users, BarChart3, Shield, Zap, Megaphone } from "lucide-react";
import Link from "next/link";

const launchServices = [
    {
        title: "MVP Development",
        description: "Rapidly build and ship the core features of your product to start validating with real users.",
        icon: Rocket,
        color: "text-orange-500"
    },
    {
        title: "Product Strategy",
        description: "Tech stack consulting and product roadmap planning to ensure long-term scalability and market fit.",
        icon: Target,
        color: "text-blue-500"
    },
    {
        title: "Validation Landing Pages",
        description: "High-converting landing pages with waitlist systems to test market demand before you build.",
        icon: MousePointer2,
        color: "text-fuchsia-500"
    },
    {
        title: "Beta Launch Setup",
        description: "Complete setup for your alpha/beta launch, including analytics, tracking, and user feedback loops.",
        icon: Megaphone,
        color: "text-emerald-500"
    }
];

export default function StartupLaunchPage() {
    return (
        <div className="bg-black min-h-screen pt-32 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Hero section */}
                <div className="text-center mb-32 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/20 blur-[120px] -z-10" />
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
                    >
                        Startup Tech <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                            Launchpad.
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        We help founders go from idea to launch in record time. Our startup-focused approach prioritizes speed, validation, and solid engineering foundations.
                    </motion.p>
                </div>

                {/* Launch Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {launchServices.map((s, i) => (
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

                {/* Founder Testimonial/Quote */}
                <div className="mb-32 text-center py-20 border-y border-white/5 bg-white/[0.02]">
                    <div className="max-w-3xl mx-auto italic text-2xl md:text-4xl text-white font-medium mb-10 leading-snug">
                        "Webx4 didn't just build our app; they helped us define our MVP and launch safely to our first 1,000 users in just 5 weeks."
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                        <div className="text-left">
                            <div className="text-white font-bold text-lg">Alex Rivera</div>
                            <div className="text-gray-500 text-sm">Founder, Stealth AI Startup</div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group overflow-hidden rounded-[40px] bg-gradient-to-br from-orange-900/40 to-black border border-white/10"
                >
                    <div className="relative z-10 p-16 md:p-24 text-center backdrop-blur-sm">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Stop planning. Start building.</h2>
                        <Link href="/contact">
                            <button className="px-12 py-5 bg-white text-black font-extrabold text-xl rounded-full hover:scale-105 transition-transform hover:shadow-2xl hover:shadow-white/20">
                                Launch Your Startup
                            </button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
