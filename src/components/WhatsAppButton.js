"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const phoneNumber = "919971686542"; // Replace with actual number
    const message = "Hi Webx4! I'm interested in your services. Let's discuss a project.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] text-white relative group"
            >
                <MessageCircle className="w-8 h-8 fill-current" />

                {/* Tooltip */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-black text-sm font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-gray-100">
                    Chat with us on WhatsApp
                    <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-8 border-transparent border-l-white" />
                </div>

                {/* Ping animation effect */}
                <div className="absolute -inset-1 bg-[#25D366] rounded-full opacity-25 animate-ping -z-10" />
            </motion.a>
        </div>
    );
}
