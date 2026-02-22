"use client";
import { motion } from "framer-motion";
import { Link as LinkIcon, Shield, Layout, Database, Cpu, Zap, Globe, Coins } from "lucide-react";
import Link from "next/link";

const web3Services = [
    {
        title: "Blockchain Integration",
        description: "Connect your traditional web applications to blockchain networks for transparent, decentralized data.",
        icon: LinkIcon,
        color: "text-indigo-500"
    },
    {
        title: "Smart Contract UI",
        description: "Beautiful, intuitive interfaces for interacting with complex smart contracts on Ethereum, Solana, and more.",
        icon: Layout,
        color: "text-blue-500"
    },
    {
        title: "Web3 Dashboards",
        description: "Custom performance dashboards for DAO governance, tokenomics tracking, and NFT marketplaces.",
        icon: Coins,
        color: "text-cyan-500"
    },
    {
        title: "Security & Auditing",
        description: "Front-end security audits to ensure your dApp is resistant to common exploits and phishing attacks.",
        icon: Shield,
        color: "text-violet-500"
    }
];

export default function Web3DevelopmentPage() {
    return (
        <div className="bg-black min-h-screen pt-32 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Hero section */}
                <div className="text-center mb-32 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/20 blur-[120px] -z-10" />
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
                    >
                        Web3 & Emerging <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
                            Technologies.
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        We build the bridge between Web2 usability and Web3 decentralization. Scalable, secure, and user-friendly decentralized applications.
                    </motion.p>
                </div>

                {/* Web3 Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {web3Services.map((s, i) => (
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

                {/* Decentralized Focus */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-32">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">User-Centric dApps.</h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Web3 is complex, but the user experience shouldn't be. We focus on creating decentralized applications that feel as smooth as the apps your users already love.
                        </p>
                        <ul className="space-y-4">
                            {["Wallet Integration (RainbowKit, Wagmi)", "IPFS & Arweave Storage", "Real-time Blockchain Indexing", "Multi-chain Support"].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-white">
                                    <Zap className="w-5 h-5 text-indigo-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 aspect-video rounded-3xl bg-gradient-to-br from-indigo-600/20 to-violet-600/20 border border-white/10 p-12 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                        <div className="text-8xl group-hover:scale-110 transition-transform">💎</div>
                        <div className="absolute top-4 left-4 font-mono text-indigo-500/50 text-xs">NETWORK: ETHEREUM_MAINNET</div>
                        <div className="absolute bottom-4 right-4 font-mono text-indigo-500/50 text-xs">BLOCK: #18420912</div>
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group overflow-hidden rounded-[40px] bg-gradient-to-br from-indigo-900/40 to-black border border-white/10"
                >
                    <div className="relative z-10 p-16 md:p-24 text-center backdrop-blur-sm">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to enter the decentralized world?</h2>
                        <Link href="/contact">
                            <button className="px-12 py-5 bg-white text-black font-extrabold text-xl rounded-full hover:scale-105 transition-transform hover:shadow-2xl hover:shadow-white/20">
                                Start Web3 Project
                            </button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
