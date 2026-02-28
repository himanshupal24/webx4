import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientOnly from "@/components/ClientOnly";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Webx4 | Future-Ready Web Development Agency",
  description: "We build high-performance, world-class websites that scale globally. Expert Next.js, 3D Design, and AI solutions.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <meta name="google-site-verification" content="vbgMVngGMIndHCalQ0rq2bLTWYDrjLtRxg5oei6l0M0" />
      <body className="antialiased selection:bg-violet-500/30 selection:text-violet-200 cursor-none">
        <Navbar />
        <ClientOnly />
        <main className="min-h-screen flex flex-col pt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
