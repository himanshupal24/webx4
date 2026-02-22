import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhyWebx4 from "@/components/WhyWebx4";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black min-h-screen selection:bg-purple-500/30">
      <Hero />

      {/* Trust Bar */}
      <section className="py-10 border-y border-white/5 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-60">
          {["Vercel", "Stripe", "Linear", "Shopify", "Framer"].map(brand => (
            <span key={brand} className="text-xl font-bold text-white uppercase tracking-widest">{brand}</span>
          ))}
        </div>
      </section>

      <ServicesSection />
      <WhyWebx4 />
      <Testimonials />
      <FAQ />

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-black z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Scale?</h2>
          <p className="text-xl text-gray-400 mb-10">Get a custom proposal within 24 hours.</p>
          <Link href="/contact">
            <button className="inline-block px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
