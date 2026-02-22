"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Reuse the same data or import it. For simplicity in this demo environment, I'll include a subset or a way to handle the content.
const blogPosts = [
    {
        slug: "ai-first-saas-strategy-2026",
        title: "Why AI-First SaaS is the Only Way to Win in 2026",
        content: `
            <p className="mb-8 text-xl leading-relaxed text-gray-300">Artificial Intelligence is no longer just a feature; it is the foundation. In 2026, the most successful SaaS platforms are those built with an 'AI-first' mindset from day one. At Webx4, we've seen a 40% increase in user retention for products that move from reactive tools to proactive AI agents.</p>
            <h3 className="text-3xl font-bold text-white mb-6 mt-16">1. The Shift from Tools to Agents</h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-400">Traditional SaaS provided tools for users to perform tasks. Modern SaaS provides agents that perform tasks for users. This shift in the value proposition is what defines the next generation of software. By leveraging LLMs and autonomous agents, your product can now handle complex workflows that previously required manual oversight.</p>
            <h3 className="text-3xl font-bold text-white mb-6 mt-16">2. Data as the New Moat</h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-400">Algorithms are becoming commoditized. The real competitive advantage lies in how you structure, process, and leverage unique data sets to train your specific AI models. We help companies design data architectures that satisfy both privacy requirements and the training needs of bespoke AI agents.</p>
            <h3 className="text-3xl font-bold text-white mb-6 mt-16">3. Dynamic & Generative Interfaces</h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-400">Static dashboards are dead. The UIs of 2026 are generative, adapting in real-time to the user's current intent and workflow stage. This level of personalization is only possible when AI is integrated deeply into the frontend architecture.</p>
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
        content: `
            <p className="mb-8 text-xl leading-relaxed text-gray-300">Speed is the currency of startups. But speed without scalability is a recipe for disaster. At Webx4, we've perfected a 'Lean Engineering' framework that allows us to ship market-ready products in record time without cutting corners on architecture.</p>
            <h3 className="text-3xl font-bold text-white mb-6 mt-16">The 3-Phase Sprint Model</h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-400">We break the 6-week window into three distinct phases: Discovery (Week 1), Architecture (Week 2), and Core Build (Weeks 3-6). This ensures that by the time code is being written, the foundation is rock solid.</p>
            <h3 className="text-3xl font-bold text-white mb-6 mt-16">Choosing the Right Tech Stack</h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-400">We focus on technologies that offer immediate speed and long-term horizontal scaling. Typically, this involves Next.js for the frontend, Supabase or PostgreSQL for the data layer, and serverless compute for high-demand operations.</p>
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
        content: `
            <p className="mb-8 text-xl leading-relaxed text-gray-300">Agentic AI is moving from research papers to real-world production. In 2026, the focus has shifted from simple chat interactions to autonomous systems that can reason, plan, and execute multi-step workflows with minimal human intervention.</p>
            <h3 className="text-3xl font-bold text-white mb-6 mt-16">What is Agentic AI?</h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-400">Unlike standard chatbots, agentic systems have tool-use capabilities. They can write and execute code, interact with APIs, and manage state over long-running processes. This makes them ideal for complex tasks like autonomous customer support, automated lead qualification, and even creative coding assistants.</p>
            <h3 className="text-3xl font-bold text-white mb-6 mt-16">Building for Autonomy</h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-400">At Webx4, we specialize in building the infrastructure required to host these agents safely and efficiently. This includes implementing guardrails, observability for LLM traces, and feedback loops that allow agents to self-correct.</p>
        `,
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
        content: `
            <p className="mb-8 text-xl leading-relaxed text-gray-300">The tokenization of Real-World Assets (RWA) is no longer a niche crypto experiment. Major financial institutions are now moving trillions of dollars onto blockchain rails to benefit from 24/7 settlement, fractional ownership, and programmability.</p>
            <h3 className="text-3xl font-bold text-white mb-6 mt-16">Why Tokenize Now?</h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-400">Tokenization allows for the digitization of everything from real estate and private equity to commodities and fine art. This creates massive liquidity in previously illiquid markets and allows for automated compliance through smart contracts.</p>
        `,
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
        content: `
            <p className="mb-8 text-xl leading-relaxed text-gray-300">DevOps promised to break down silos, but for many startups, it just meant developers had to manage complex infrastructure themselves. Platform Engineering is the next evolution, focusing on building Internal Developer Platforms (IDPs) that offer self-service capabilities.</p>
        `,
        date: "Feb 18, 2026",
        author: "DevOps Lead",
        category: "Architecture",
        readTime: "11 min read",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1600",
        imageGradient: "from-blue-600 to-indigo-900"
    },
    { slug: "finops-cloud-cost-optimization", title: "FinOps 2.0: AI-Driven Cloud Cost Optimization", date: "Feb 12, 2026", author: "Finance Tech Team", category: "Scaling", readTime: "7 min read", image: "https://images.unsplash.com/photo-1551288049-bbbda536ad3a?auto=format&fit=crop&q=80&w=1600", imageGradient: "from-orange-600 to-red-900", content: "<p>Managing cloud costs in 2026 requires AI-driven precision.</p>" },
    { slug: "edge-computing-ai-latency", title: "Computing at the Edge: Solving the AI Latency Problem", date: "Feb 08, 2026", author: "Infrastructure Lead", category: "Architecture", readTime: "8 min read", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1600", imageGradient: "from-cyan-600 to-blue-900", content: "<p>Edge computing is the foundation of real-time AI.</p>" },
    { slug: "vertical-saas-industry-disruption", title: "The Dominance of Vertical SaaS in Specialized Industries", date: "Feb 02, 2026", author: "Strategy Consultant", category: "AI & SaaS", readTime: "9 min read", image: "https://images.unsplash.com/photo-1557833165-4f4bdcf2363b?auto=format&fit=crop&q=80&w=1600", imageGradient: "from-purple-600 to-indigo-900", content: "<p>Niche software is winning against generalist giants.</p>" },
    { slug: "account-abstraction-web3-usage", title: "Account Abstraction: Finally Making Web3 User-Friendly", date: "Jan 30, 2026", author: "Web3 Architect", category: "Web3", readTime: "6 min read", image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=1600", imageGradient: "from-indigo-600 to-violet-900", content: "<p>Smart contract wallets are the future of onboarding.</p>" },
    { slug: "quantum-resistant-security-2026", title: "Quantum-Resistant Security: Future-Proofing Your Data", date: "Jan 25, 2026", author: "Security Lead", category: "Architecture", readTime: "12 min read", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600", imageGradient: "from-zinc-600 to-black", content: "<p>Preparing for the quantum threat today.</p>" },
    { slug: "zero-knowledge-proofs-privacy", title: "ZKP: The Privacy-Preserving Technology of the Decade", date: "Jan 20, 2026", author: "Web3 Engineer", category: "Web3", readTime: "10 min read", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600", imageGradient: "from-emerald-600 to-green-900", content: "<p>Verify anything without showing everything.</p>" },
    { slug: "sustainable-ai-energy-optimization", title: "Sustainable AI: Training Green Models for a Better Future", date: "Jan 18, 2026", author: "AI Engineer", category: "AI & SaaS", readTime: "8 min read", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600", imageGradient: "from-lime-600 to-emerald-900", content: "<p>Reducing AI energy consumption for environmental scale.</p>" },
    { slug: "ai-governance-ethical-frameworks", title: "AI Governance: Building Ethical and Legal Frameworks", date: "Jan 14, 2026", author: "Legal Tech Team", category: "AI & SaaS", readTime: "9 min read", image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1600", imageGradient: "from-slate-600 to-gray-900", content: "<p>Navigating the complex landscape of AI compliance.</p>" },
    { slug: "multimodal-interfaces-modern-saas", title: "Voice, Vision, and Text: Multimodal Interfaces in SaaS", date: "Jan 12, 2026", author: "UX Design Lead", category: "UI/UX Design", readTime: "7 min read", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600", imageGradient: "from-violet-600 to-fuchsia-900", content: "<p>Designing for the senses in modern software.</p>" },
    { slug: "gitops-ia-maturation-2026", title: "The Maturation of GitOps and Infrastructure-as-Code", date: "Jan 08, 2026", author: "DevOps Engineer", category: "Architecture", readTime: "8 min read", image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=1600", imageGradient: "from-amber-600 to-orange-900", content: "<p>Self-healing infrastructure through Git-centric workflows.</p>" },
    { slug: "augmented-scientific-research-ai", title: "AI in Lab: How Augmented Research is Shifting Science", date: "Jan 04, 2026", author: "Hardware Team", category: "AI & SaaS", readTime: "10 min read", image: "https://images.unsplash.com/photo-1532187875605-2fe3583b1945?auto=format&fit=crop&q=80&w=1600", imageGradient: "from-rose-600 to-pink-900", content: "<p>Accelerating R&D with generative intelligence.</p>" },
    { slug: "decentralized-identity-frameworks", title: "DID: The Future of Self-Sovereign Identity Online", date: "Jan 02, 2026", author: "Web3 Specialist", category: "Web3", readTime: "9 min read", image: "https://images.unsplash.com/photo-1551288049-bbbda536ad3a?auto=format&fit=crop&q=80&w=1600", imageGradient: "from-blue-600 to-cyan-900", content: "<p>Owning your digital identity without central authorities.</p>" },
    { slug: "micro-saas-niche-problems", title: "The Rise of Micro-SaaS: Solving Tiny Problems for Big Profit", date: "Dec 30, 2025", author: "Success Story Team", category: "Startup Strategy", readTime: "6 min read", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600", imageGradient: "from-teal-600 to-emerald-900", content: "<p>Focused solutions for deep market segments.</p>" },
    { slug: "quarterly-tech-retrospective-2025", title: "2025 Tech Retrospective: What We Learned for 2026", date: "Dec 28, 2025", author: "Editorial Team", category: "Startup Strategy", readTime: "15 min read", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1600", imageGradient: "from-gray-600 to-slate-900", content: "<p>Looking back at the year that defined the AI revolution.</p>" },
    { slug: "usage-based-pricing-models", title: "Usage-Based Pricing: The New Standard for SaaS", date: "Dec 24, 2025", author: "Growth Strategy", category: "Scaling", readTime: "7 min read", image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1600", imageGradient: "from-emerald-600 to-cyan-900", content: "<p>Aligning customer value with pricing reality.</p>" }
];

export default function BlogPostPage() {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug) || blogPosts[0]; // Fallback to first for demo

    return (
        <div className="bg-black min-h-screen pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6">

                <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-12 transition-colors group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Journal
                </Link>

                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-4 py-1 rounded-full bg-violet-500/20 text-violet-400 text-sm font-bold border border-violet-500/20 uppercase tracking-widest">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-6 text-gray-500 text-sm">
                            <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                            <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tighter">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-between border-y border-white/10 py-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=100" alt="author" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="text-white font-bold">{post.author}</div>
                                <div className="text-gray-500 text-sm">Webx4 Studio Engineering Team</div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                <Share2 size={20} />
                            </button>
                        </div>
                    </div>
                </motion.header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="aspect-video rounded-[40px] overflow-hidden mb-16 border border-white/10 shadow-2xl shadow-violet-500/10"
                >
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </motion.div>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="prose prose-invert prose-lg max-w-none"
                >
                    <div
                        className="text-gray-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-24 p-12 rounded-[40px] bg-gradient-to-br from-violet-900/20 via-black to-black border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 blur-[100px] rounded-full" />
                        <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Ready to build your next big thing?</h3>
                        <p className="text-gray-400 mb-10 text-xl relative z-10">
                            We help founders and creators turn ambitious ideas into scalable products. From AI integration to high-performance SaaS architecture.
                        </p>
                        <Link href="/contact" className="relative z-10">
                            <button className="px-12 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-xl shadow-white/10">
                                Book Strategy Session
                            </button>
                        </Link>
                    </div>
                </motion.article>

            </div>
        </div>
    );
}
