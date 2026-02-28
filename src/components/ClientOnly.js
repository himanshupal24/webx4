"use client";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const PageProgressBar = dynamic(() => import("@/components/PageProgressBar"), { ssr: false });
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { ssr: false });

export default function ClientOnly() {
    return (
        <>{/* Slide-in or persistent client-only UI */}
            <WhatsAppButton />
            <CustomCursor />
            <PageProgressBar />
        </>
    );
}
