import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BocraAI from "@/components/ai/BocraAI";

export const metadata: Metadata = {
  title: "BOCRA — Botswana Communications Regulatory Authority",
  description: "File complaints, track requests, and access regulatory services for telecommunications, broadcasting, postal, and internet services in Botswana.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-surface min-h-screen text-gray-700">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded-md focus:z-[100]">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <BocraAI />
      </body>
    </html>
  );
}
