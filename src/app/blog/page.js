"use client";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const blogPosts = [
    {
        slug: "ai-first-saas-strategy-2026",
        title: "Why AI-First SaaS is the Only Way to Win in 2026",
        excerpt: "Discover why integrating artificial intelligence at the core of your SaaS architecture is no longer optional for modern startups.",
        content: `
            <p className="mb-6">Artificial Intelligence is no longer just a feature; it is the foundation. In 2026, the most successful SaaS platforms are those built with an 'AI-first' mindset from day one. At Webx4, we've seen a 40% increase in user retention for products that move from reactive tools to proactive AI agents.</p>
            <h3 className="text-3xl font-bold text-white mb-4 mt-12">1. The Shift from Tools to Agents</h3>
            <p className="mb-6">Traditional SaaS provided tools for users to perform tasks. Modern SaaS provides agents that perform tasks for users. This shift in the value proposition is what defines the next generation of software. By leveraging LLMs and autonomous agents, your product can now handle complex workflows that previously required manual oversight.</p>
            <h3 className="text-3xl font-bold text-white mb-4 mt-12">2. Data as the New Moat</h3>
            <p className="mb-6">Algorithms are becoming commoditized. The real competitive advantage lies in how you structure, process, and leverage unique data sets to train your specific AI models. We help companies design data architectures that satisfy both privacy requirements and the training needs of bespoke AI agents.</p>
            <h3 className="text-3xl font-bold text-white mb-4 mt-12">3. Dynamic & Generative Interfaces</h3>
            <p className="mb-6">Static dashboards are dead. The UIs of 2026 are generative, adapting in real-time to the user's current intent and workflow stage. This level of personalization is only possible when AI is integrated deeply into the frontend architecture.</p>
        `,
        date: "Feb 20, 2026",
        author: "Webx4 Engineering",
        category: "AI & SaaS",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-violet-600 to-indigo-900"
    },
    {
        slug: "building-scalable-mvp-6-weeks",
        title: "How to Build a Scalable MVP in Under 6 Weeks",
        excerpt: "Learn the lean engineering principles we use at Webx4 to take founders from idea to a high-performance beta launch ready for scale.",
        content: `
            <p className="mb-6">Speed is the currency of startups. But speed without scalability is a recipe for disaster. At Webx4, we've perfected a 'Lean Engineering' framework that allows us to ship market-ready products in record time without cutting corners on architecture.</p>
            <h3 className="text-3xl font-bold text-white mb-4 mt-12">The 3-Phase Sprint Model</h3>
            <p className="mb-6">We break the 6-week window into three distinct phases: Discovery (Week 1), Architecture (Week 2), and Core Build (Weeks 3-6). This ensures that by the time code is being written, the foundation is rock solid.</p>
            <h3 className="text-3xl font-bold text-white mb-4 mt-12">Choosing the Right Tech Stack</h3>
            <p className="mb-6">We focus on technologies that offer immediate speed and long-term horizontal scaling. Typically, this involves Next.js for the frontend, Supabase or PostgreSQL for the data layer, and serverless compute for high-demand operations.</p>
        `,
        date: "Feb 15, 2026",
        author: "Product Team",
        category: "Startup Strategy",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-blue-600 to-cyan-900"
    },
    {
        slug: "agentic-ai-workflows-2026",
        title: "Mastering Agentic AI: The Future of Workflow Orchestration",
        excerpt: "Moving beyond chatbots—how autonomous AI agents are redefining business operations in 2026.",
        date: "Feb 24, 2026",
        author: "AI Labs @ Webx4",
        category: "AI & SaaS",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-fuchsia-600 to-violet-900"
    },
    {
        slug: "real-world-asset-tokenization",
        title: "RWA Tokenization: Bridging DeFi and Traditional Finance",
        excerpt: "How the tokenization of real-world assets is creating the most liquid financial market in history.",
        date: "Feb 22, 2026",
        author: "Web3 Team",
        category: "Web3",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-emerald-600 to-teal-900"
    },
    {
        slug: "platform-engineering-for-startups",
        title: "Why Startups are Choosing Platform Engineering Over DevOps",
        excerpt: "Scaling developer productivity through internal self-service portals and infrastructure abstraction.",
        date: "Feb 18, 2026",
        author: "DevOps Lead",
        category: "Architecture",
        readTime: "11 min read",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-blue-600 to-indigo-900"
    },
    {
        slug: "finops-cloud-cost-optimization",
        title: "FinOps 2.0: AI-Driven Cloud Cost Optimization",
        excerpt: "Managing your cloud burn with intelligent precision to maintain high margins in a scaling SaaS.",
        date: "Feb 12, 2026",
        author: "Finance Tech Team",
        category: "Scaling",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1551288049-bbbda536ad3a?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-orange-600 to-red-900"
    },
    {
        slug: "edge-computing-ai-latency",
        title: "Computing at the Edge: Solving the AI Latency Problem",
        excerpt: "Why high-performance AI applications are moving compute closer to the user in 2026.",
        date: "Feb 08, 2026",
        author: "Infrastructure Lead",
        category: "Architecture",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-cyan-600 to-blue-900"
    },
    {
        slug: "vertical-saas-industry-disruption",
        title: "The Dominance of Vertical SaaS in Specialized Industries",
        excerpt: "How niche-focused software is outperforming generic incumbents through deep industry integration.",
        date: "Feb 02, 2026",
        author: "Strategy Consultant",
        category: "AI & SaaS",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1557833165-4f4bdcf2363b?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-purple-600 to-indigo-900"
    },
    {
        slug: "account-abstraction-web3-usage",
        title: "Account Abstraction: Finally Making Web3 User-Friendly",
        excerpt: "The technical shift that's removing the friction from blockchain onboarding for the masses.",
        date: "Jan 30, 2026",
        author: "Web3 Architect",
        category: "Web3",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-indigo-600 to-violet-900"
    },
    {
        slug: "quantum-resistant-security-2026",
        title: "Quantum-Resistant Security: Future-Proofing Your Data",
        excerpt: "Implementing post-quantum cryptography to secure your product against tomorrow's threats.",
        date: "Jan 25, 2026",
        author: "Security Lead",
        category: "Architecture",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-zinc-600 to-black"
    },
    {
        slug: "zero-knowledge-proofs-privacy",
        title: "ZKP: The Privacy-Preserving Technology of the Decade",
        excerpt: "How Zero-Knowledge Proofs are enabling secure data verification without compromising user privacy.",
        date: "Jan 20, 2026",
        author: "Web3 Engineer",
        category: "Web3",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-emerald-600 to-green-900"
    },
    {
        slug: "sustainable-ai-energy-optimization",
        title: "Sustainable AI: Training Green Models for a Better Future",
        excerpt: "Methods for reducing the carbon footprint of large-scale AI training and inference.",
        date: "Jan 18, 2026",
        author: "AI Engineer",
        category: "AI & SaaS",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-lime-600 to-emerald-900"
    },
    {
        slug: "ai-governance-ethical-frameworks",
        title: "AI Governance: Building Ethical and Legal Frameworks",
        excerpt: "Why explainable AI and transparent data usage are non-negotiable for enterprise SaaS in 2026.",
        date: "Jan 14, 2026",
        author: "Legal Tech Team",
        category: "AI & SaaS",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-slate-600 to-gray-900"
    },
    {
        slug: "multimodal-interfaces-modern-saas",
        title: "Voice, Vision, and Text: Multimodal Interfaces in SaaS",
        excerpt: "How blending multiple input types is creating the most intuitive software experiences ever built.",
        date: "Jan 12, 2026",
        author: "UX Design Lead",
        category: "UI/UX Design",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-violet-600 to-fuchsia-900"
    },
    {
        slug: "gitops-ia-maturation-2026",
        title: "The Maturation of GitOps and Infrastructure-as-Code",
        excerpt: "Moving toward fully auditable and self-healing cloud infrastructure for global applications.",
        date: "Jan 08, 2026",
        author: "DevOps Engineer",
        category: "Architecture",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-amber-600 to-orange-900"
    },
    {
        slug: "augmented-scientific-research-ai",
        title: "AI in Lab: How Augmented Research is Shifting Science",
        excerpt: "The role of generative AI in hypothesizing and accelerating scientific discovery in hardware.",
        date: "Jan 04, 2026",
        author: "Hardware Team",
        category: "AI & SaaS",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1532187875605-2fe3583b1945?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-rose-600 to-pink-900"
    },
    {
        slug: "decentralized-identity-frameworks",
        title: "DID: The Future of Self-Sovereign Identity Online",
        excerpt: "Giving users full control over their digital footprint through decentralized identity frameworks.",
        date: "Jan 02, 2026",
        author: "Web3 Specialist",
        category: "Web3",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1551288049-bbbda536ad3a?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-blue-600 to-cyan-900"
    },
    {
        slug: "micro-saas-niche-problems",
        title: "The Rise of Micro-SaaS: Solving Tiny Problems for Big Profit",
        excerpt: "Why solo developers are making 6-figures solving highly specific niche problems with SaaS.",
        date: "Dec 30, 2025",
        author: "Success Story Team",
        category: "Startup Strategy",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-teal-600 to-emerald-900"
    },
    {
        slug: "quarterly-tech-retrospective-2025",
        title: "2025 Tech Retrospective: What We Learned for 2026",
        excerpt: "A deep dive into the biggest technical wins and failures of the past year.",
        date: "Dec 28, 2025",
        author: "Editorial Team",
        category: "Startup Strategy",
        readTime: "15 min read",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-gray-600 to-slate-900"
    },
    {
        slug: "usage-based-pricing-models",
        title: "Usage-Based Pricing: The New Standard for SaaS",
        excerpt: "Why the move away from flat seat-based pricing is driving higher revenue for modern companies.",
        date: "Dec 24, 2025",
        author: "Growth Strategy",
        category: "Scaling",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-emerald-600 to-cyan-900"
    }
];

const categories = ["All", "AI & SaaS", "Startup Strategy", "Creator Economy", "Scaling", "Automation", "Web3", "Architecture", "UI/UX Design"];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <div className="bg-black min-h-screen pt-32 pb-20">
            {/* SEO Background Decor */}
            <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-b from-violet-900/10 to-transparent pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6">

                {/* Blog Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-violet-400 font-mono tracking-widest uppercase text-sm mb-4 block"
                    >
                        Insights & Engineering
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
                    >
                        Webx4 <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Journal.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Learn how we build, scale, and automate the next generation of digital products. High-performance guides for founders and creators.
                    </motion.p>
                </div>

                {/* Categories Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-20">
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                ? "bg-white text-black shadow-lg shadow-white/10"
                                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Featured Post (Latest) */}
                <Link href={`/blog/${blogPosts[0].slug}`}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="group relative h-[500px] rounded-[40px] overflow-hidden mb-20 cursor-pointer border border-white/10 shadow-2xl"
                    >
                        <div className="absolute inset-0">
                            <img src={blogPosts[0].image} alt="Featured" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                        </div>
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-700" />

                        <div className="absolute inset-0 p-12 flex flex-col justify-end">
                            <div className="flex items-center gap-4 text-violet-300 mb-6 font-medium">
                                <span className="px-3 py-1 rounded-md bg-white/10 backdrop-blur-md">{blogPosts[0].category}</span>
                                <span className="flex items-center gap-2"><Calendar size={14} /> {blogPosts[0].date}</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 group-hover:translate-x-4 transition-transform duration-500 max-w-4xl">
                                {blogPosts[0].title}
                            </h2>
                            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8 group-hover:translate-x-4 transition-transform duration-500 delay-75">
                                {blogPosts[0].excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                                Read Full Story <ArrowRight size={20} />
                            </div>
                        </div>
                    </motion.div>
                </Link>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.slice(1).map((post, i) => (
                        <Link key={i} href={`/blog/${post.slug}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-2 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all flex flex-col h-full cursor-pointer hover:border-violet-500/50"
                            >
                                <div className="aspect-video rounded-[24px] overflow-hidden mb-6 border border-white/5">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                                </div>
                                <div className="px-4 pb-6 flex-grow">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">{post.category}</span>
                                        <span className="text-gray-500 text-xs flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <div className="px-4 pb-6 flex items-center justify-between border-t border-white/5 pt-4">
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <User size={14} /> {post.author}
                                    </div>
                                    <div className="text-xs text-violet-400 font-bold flex items-center gap-1">
                                        Explore <ArrowRight size={14} />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 p-12 md:p-20 rounded-[40px] bg-gradient-to-br from-violet-900/20 via-black to-black border border-white/10 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/10 blur-[100px] rounded-full" />
                    <Search className="w-16 h-16 text-violet-500 mx-auto mb-8 opacity-50" />
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Deep Dives in Your Inbox.</h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        We share exclusive technical breakdowns and AI strategies that we don't post anywhere else. No spam, just engineering.
                    </p>
                    <form className="max-w-md mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-violet-500 transition-colors"
                        />
                        <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                            Subscribe
                        </button>
                    </form>
                </motion.div>

            </div>
        </div>
    );
}
