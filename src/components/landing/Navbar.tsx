"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E0D8C5] bg-[#F6F0E4]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        {/* Brand Logo & Wordmark */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C1622E] text-white font-bold text-lg shadow-sm transition-transform group-hover:scale-105">
            C
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#1F3D2E] leading-none">
              CollabOS
            </span>
            <span className="text-[11px] font-mono tracking-wider text-[#6B6B66] uppercase mt-0.5">
              collabos.in
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#2B2B28]/80">
          <a href="#features" className="transition-colors hover:text-[#1F3D2E]">
            Features
          </a>
          <a href="#interactive-hub" className="transition-colors hover:text-[#1F3D2E]">
            Interactive Demo
          </a>
          <a href="#rights-guard" className="transition-colors hover:text-[#1F3D2E]">
            Usage Rights
          </a>
          <a href="#calculator" className="transition-colors hover:text-[#1F3D2E]">
            ROI Calculator
          </a>
          <a href="#pricing" className="transition-colors hover:text-[#1F3D2E]">
            Pricing
          </a>
          <a href="#faq" className="transition-colors hover:text-[#1F3D2E]">
            FAQ
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={onOpenWaitlist}
            className="btn-clay h-10 px-5 text-sm font-semibold rounded-lg shadow-sm flex items-center gap-2"
          >
            <span>Get Early Access</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-[#1F3D2E] hover:bg-[#EFE6D4]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation panel */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[#E0D8C5] bg-[#F6F0E4] px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#2B2B28]">
            <a
              href="#features"
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-[#1F3D2E]"
            >
              Features
            </a>
            <a
              href="#interactive-hub"
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-[#1F3D2E]"
            >
              Interactive Demo
            </a>
            <a
              href="#rights-guard"
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-[#1F3D2E]"
            >
              Usage Rights Guard
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-[#1F3D2E]"
            >
              ROI Calculator
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-[#1F3D2E]"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-[#1F3D2E]"
            >
              FAQ
            </a>
          </nav>
          <Button
            onClick={() => {
              setMobileOpen(false);
              onOpenWaitlist();
            }}
            className="w-full btn-clay h-11 text-sm font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2"
          >
            <span>Get Early Access</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </header>
  );
}
