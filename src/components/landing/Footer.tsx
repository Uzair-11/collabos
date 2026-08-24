"use client";

import { CollabOSPrimaryLight } from "@/components/logos/CollabOSLogo";

export function Footer() {
  return (
    <footer className="border-t border-[#E0D8C5] bg-[#EFE6D4]/60 py-12 text-[#6B6B66] text-xs">
      <div className="mx-auto max-w-6xl px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="space-y-2">
            <a href="#" className="inline-block group">
              <CollabOSPrimaryLight className="h-10 w-auto transition-transform group-hover:scale-[1.02]" />
            </a>
            <p className="text-xs text-[#6B6B66] max-w-sm">
              The back office for your brand deals. Built for solo creators who outgrew spreadsheets.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 font-medium text-[#2B2B28]/80">
            <a href="#features" className="hover:text-[#1F3D2E]">
              Features
            </a>
            <a href="#interactive-hub" className="hover:text-[#1F3D2E]">
              Interactive Demo
            </a>
            <a href="#rights-guard" className="hover:text-[#1F3D2E]">
              Usage Rights
            </a>
            <a href="#pricing" className="hover:text-[#1F3D2E]">
              Pricing
            </a>
            <a href="#faq" className="hover:text-[#1F3D2E]">
              FAQ
            </a>
            <a href="#early-access" className="text-[#C1622E] font-semibold hover:underline">
              Join Waitlist
            </a>
          </div>
        </div>

        <div className="border-t border-[#E0D8C5] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6B6B66]">
          <p>© 2026 CollabOS &bull; collabos.in &bull; All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#1F3D2E]" />
              System Status: Pre-Release Beta
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
