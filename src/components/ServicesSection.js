"use client";
import React from "react";
import { Globe, ShoppingCart, Code, Layers, Rocket, Bot, Cpu, Link as LinkIcon, Users, TrendingUp, Video } from "lucide-react";

const services = [
    {
        title: "SaaS Product Development",
        description: "From MVP to full-scale architecture. We build subscription systems, admin panels, and scalable backends.",
        icon: Cpu,
        color: "from-blue-500 to-cyan-500",
        href: "/services/saas-development",
        shape: "box",
        hex: "#06b6d4"
    },
    {
        title: "AI & Automation Solutions",
        description: "AI chatbots, workflow automation, and custom internal tools to supercharge your business efficiency.",
        icon: Bot,
        color: "from-purple-500 to-pink-500",
        href: "/services/ai-automation",
        shape: "sphere",
        hex: "#a855f7"
    },
    {
        title: "Startup Tech Launch",
        description: "Strategic tech stack consulting, waitlist systems, and beta launch setups for rapid market validation.",
        icon: Rocket,
        color: "from-orange-400 to-red-500",
        href: "/services/startup-launch",
        shape: "octahedron",
        hex: "#f97316"
    },
    {
        title: "Creator Economy Tech",
        description: "Custom SaaS tools for creators, analytics dashboards, and advanced link-in-bio systems.",
        icon: Users,
        color: "from-green-400 to-emerald-600",
        href: "/services/creator-tech",
        shape: "torus",
        hex: "#10b981"
    },
    {
        title: "Growth Engineering",
        description: "Conversion-optimized funnels, technical SEO, and performance tracking systems built for scale.",
        icon: TrendingUp,
        color: "from-yellow-400 to-orange-500",
        href: "/services/growth-engineering",
        shape: "box",
        hex: "#eab308"
    },
    {
        title: "Web3 & Emerging Tech",
        description: "Blockchain integration, smart contract UIs, and decentralized dashboards for the next web.",
        icon: LinkIcon,
        color: "from-indigo-500 to-blue-600",
        href: "/services/web3-development",
        shape: "sphere",
        hex: "#6366f1"
    },
    {
        title: "Website Development",
        description: "High-performance, SEO-optimized marketing sites built with Next.js and Framer Motion.",
        icon: Globe,
        color: "from-cyan-400 to-blue-500",
        href: "/services/web-development",
        shape: "octahedron",
        hex: "#22d3ee"
    },
    {
        title: "Shopify Stores",
        description: "Premium e-commerce experiences designed to convert global traffic into lifetime customers.",
        icon: ShoppingCart,
        color: "from-emerald-400 to-green-600",
        href: "/services/shopify-stores",
        shape: "torus",
        hex: "#34d399"
    },
    {
        title: "Custom Web Apps",
        description: "Scalable internal tools and complex web applications with bespoke business logic.",
        icon: Code,
        color: "from-violet-500 to-purple-600",
        href: "/services/custom-web-apps",
        shape: "box",
        hex: "#a78bfa"
    },
    {
        title: "WordPress Development",
        description: "Advanced WordPress solutions with custom themes and performance-first headless setups.",
        icon: Layers,
        color: "from-orange-500 to-amber-600",
        href: "/services/wordpress-development",
        shape: "sphere",
        hex: "#f59e0b"
    },
    {
        title: "Premium Video Editing",
        description: "Professional storytelling through high-end editing, motion graphics, and color grading for modern brands.",
        icon: Video,
        color: "from-red-500 to-rose-600",
        href: "/services/video-editing",
        shape: "octahedron",
        hex: "#f43f5e"
    }
];

import Link from "next/link";
import ThreeCardIcon from "./ThreeCardIcon";

export default function ServicesSection() {
    return (
        <section className="py-32 relative bg-black overflow-hidden" id="services">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6">
                        Productized Services.
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                        We don't just build websites. We engineer high-demand digital assets designed for the 2026 tech landscape. Scalable, intelligent, and performance-first.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <Link key={i} href={s.href} className="flex">
                            <div className="group w-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden flex flex-col">
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

                                <div className="mb-8 relative">
                                    <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <ThreeCardIcon type={s.shape} color={s.hex} />
                                </div>

                                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500 border border-white/5">
                                    <s.icon className="text-white w-8 h-8" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                    {s.title}
                                </h3>
                                <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                                    {s.description}
                                </p>

                                <div className="flex items-center gap-2 text-white font-medium text-sm group-hover:gap-4 transition-all">
                                    View Service Details
                                    <TrendingUp className="w-4 h-4 text-violet-400" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link href="/contact">
                        <button className="px-10 py-5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-lg hover:scale-105 transition-transform hover:shadow-2xl hover:shadow-violet-500/20 active:scale-95">
                            Build With Webx4
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
