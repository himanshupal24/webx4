"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Do you build custom products or use templates?",
        answer: "Every product is built from scratch. We don't believe in templates. We engineer bespoke SaaS architectures and AI-native systems tailored to your specific business logic and scaling requirements."
    },
    {
        question: "How fast can you build an MVP?",
        answer: "For startups, speed is life. Our 'Rapid Launch' protocol allows us to deliver high-fidelity, functional MVPs in as little as 4-6 weeks, allowing you to validate your idea with real users as quickly as possible."
    },
    {
        question: "How does the AI-first approach benefit my business?",
        answer: "Instead of just building a static interface, we integrate intelligent layers like automated workflows, custom chatbots, and predictive analytics that help you reduce operational overhead and increase user engagement from day one."
    },
    {
        question: "Do you handle backend scaling?",
        answer: "Absolutely. We build on serverless and edge-optimized infrastructures like Vercel and AWS, ensuring your product can scale from 100 to 1,000,000 users without any manual intervention or performance degradation."
    },
    {
        question: "What is your typical engagement model?",
        answer: "We offer both fixed-price project builds for MVPs and long-term 'Tech Partner' retainers where we act as your dedicated engineering team, constantly iterating and scaling your product."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-32 bg-black">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">Common Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-medium text-white">{faq.question}</span>
                                {openIndex === i ? <Minus className="text-violet-500" /> : <Plus className="text-gray-400" />}
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
