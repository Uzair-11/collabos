"use client";

import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { InteractiveProductHub } from "@/components/landing/InteractiveProductHub";
import { ThreeMoneyFeatures } from "@/components/landing/ThreeMoneyFeatures";
import { RoiCalculator } from "@/components/landing/RoiCalculator";
import { PricingSection } from "@/components/landing/PricingSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { EarlyAccessSection } from "@/components/landing/EarlyAccessSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  const scrollToWaitlist = () => {
    const el = document.getElementById("early-access");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F0E4] text-[#2B2B28] font-sans selection:bg-[#C1622E] selection:text-white">
      {/* Top Banner */}
      <div className="bg-[#1F3D2E] text-[#F6F0E4] py-2 px-4 text-center text-xs font-medium border-b border-[#14291F]">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[#C1622E] animate-pulse" />
          <span>
            <strong>CollabOS Beta Cohort:</strong> Opening priority onboarding for creators with 10K–500K followers.
          </span>
          <button
            onClick={scrollToWaitlist}
            className="underline text-[#DCE6D9] hover:text-white font-semibold ml-1 cursor-pointer"
          >
            Claim Access &rarr;
          </button>
        </div>
      </div>

      {/* Navigation */}
      <Navbar onOpenWaitlist={scrollToWaitlist} />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection onOpenWaitlist={scrollToWaitlist} />
        <InteractiveProductHub />
        <ThreeMoneyFeatures />
        <RoiCalculator onOpenWaitlist={scrollToWaitlist} />
        <PricingSection onOpenWaitlist={scrollToWaitlist} />
        <FaqSection />
        <EarlyAccessSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
