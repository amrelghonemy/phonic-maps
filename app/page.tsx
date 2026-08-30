"use client";
import { LanguageProvider } from "@/components/language-context";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Partners } from "@/components/partners";
import { Features } from "@/components/features";
import { AISection } from "@/components/ai-section";
import { Stats } from "@/components/stats";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Features />
        <AISection />
        <Stats />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
