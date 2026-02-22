import { Check } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Pricing | Webx4 Agency",
    description: "Flexible engagement models for world-class web development.",
};

const plans = [
    {
        name: "Startup MVP",
        description: "Perfect for founders looking to validate and launch fast.",
        features: ["Product Roadmap", "Custom Design", "Core Feature Build", "Waitlist System", "Tech Consulting"],
        popular: false
    },
    {
        name: "AI & SaaS Suite",
        description: "Scale your business with intelligent automation and SaaS architecture.",
        features: ["Full-Stack SaaS", "AI Agent Integration", "Subscription Setup", "Admin Dashboard", "API Development"],
        popular: true
    },
    {
        name: "Enterprise Product",
        description: "Complex platforms and global infrastructure for established companies.",
        features: ["Scalable Architecture", "Advanced Security", "Custom AI Models", "24/7 Support", "Performance Audit", "SLA"],
        popular: false
    }
];

export default function PricingPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-black">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Engagement Models</h1>
                <p className="text-gray-400 max-w-2xl mx-auto mb-20">
                    We don't offer cookie-cutter prices because we don't build cookie-cutter websites.
                    Every project is scoped to your specific goals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-violet-500 bg-violet-900/10' : 'border-white/10 bg-white/5'} flex flex-col`}>
                            {plan.popular && (
                                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-0 md:-mt-4 md:mr-8 bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Most Common
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                            <p className="text-gray-400 text-sm mb-8 h-10">{plan.description}</p>

                            <div className="mb-8">
                                <span className="text-3xl font-bold text-white">Custom Quote</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map(f => (
                                    <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className="w-5 h-5 text-violet-400 shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/contact" className={`w-full py-4 rounded-xl font-bold text-center transition-all ${plan.popular ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                                Request Quote
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
