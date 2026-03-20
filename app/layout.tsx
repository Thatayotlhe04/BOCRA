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
      <body className="bg-surface min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
        <BocraAI />
      </body>
    </html>
  );
}
