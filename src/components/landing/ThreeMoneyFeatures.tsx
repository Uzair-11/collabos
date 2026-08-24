"use client";

import { CheckCircle2, ShieldCheck, Clock, FileSpreadsheet, BellRing, Sparkles, Scale } from "lucide-react";

export function ThreeMoneyFeatures() {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-10 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-md bg-[#DCE6D9] px-3 py-1 text-[11px] sm:text-xs font-semibold text-[#1F3D2E]">
            <Sparkles className="h-3.5 w-3.5" />
            The Three "Money Features"
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F3D2E] leading-tight">
            Built around the moments you actually get paid
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#6B6B66]">
            Generic tools like Trello or QuickBooks don't understand "usage rights", "deliverable milestones", or "sponsorship payment chasing". CollabOS was designed exclusively for brand sponsorships.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {/* Pillar 1 */}
          <div className="rounded-xl sm:rounded-2xl border border-[#E0D8C5] bg-white p-5 sm:p-7 space-y-4 shadow-xs flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFE6D4] text-[#1F3D2E]">
                <FileSpreadsheet className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F3D2E]">
                1. Deal &amp; Contract Tracker
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6B66] leading-relaxed">
                Every sponsorship's deliverables, drafts, script approvals, and posting deadlines in one consolidated timeline. Stop digging through WhatsApp chats and scattered emails.
              </p>
            </div>

            <ul className="space-y-2 pt-4 border-t border-[#E0D8C5] text-xs text-[#2B2B28]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#1F3D2E] shrink-0" />
                <span>Custom deliverable statuses (Draft, Review, Live)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#1F3D2E] shrink-0" />
                <span>Centralized link repository for published proof</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#1F3D2E] shrink-0" />
                <span>Multi-brand contact directory</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="rounded-2xl border border-[#E0D8C5] bg-white p-7 space-y-4 shadow-xs flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FBE4D4] text-[#C1622E]">
                <BellRing className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F3D2E]">
                2. Automated Invoicing &amp; Chasing
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6B66] leading-relaxed">
                Generate professional PDF invoices with 1-click tied directly to deal terms. Automatic courteous email reminders ensure brands pay on time without awkward DM confrontations.
              </p>
            </div>

            <ul className="space-y-2 pt-4 border-t border-[#E0D8C5] text-xs text-[#2B2B28]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#C1622E] shrink-0" />
                <span>Auto-calculated Net-15, Net-30, and Net-60 dates</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#C1622E] shrink-0" />
                <span>Pre-due, due date, and overdue reminder sequences</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#C1622E] shrink-0" />
                <span>Supports INR (₹), USD ($), EUR, GBP payouts</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3 - Differentiator */}
          <div className="rounded-2xl border-2 border-[#C1622E] bg-[#F6F0E4] p-7 space-y-4 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#C1622E] text-white">
                Core Differentiator
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C1622E] text-white">
                <Scale className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F3D2E]">
                3. Usage &amp; Licensing Guard
              </h3>
              <p className="text-xs sm:text-sm text-[#2B2B28] leading-relaxed">
                Log what a brand is legally allowed to do with your content and for how long. Get alerted before rights expire so you can charge licensing renewal fees or demand ad takedowns.
              </p>
            </div>

            <ul className="space-y-2 pt-4 border-t border-[#E0D8C5] text-xs text-[#1F3D2E] font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#C1622E] shrink-0" />
                <span>Track organic vs. paid dark-ad whitelist windows</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#C1622E] shrink-0" />
                <span>14-day &amp; 3-day pre-expiry renewal opportunities</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#C1622E] shrink-0" />
                <span>Average +₹40,000 to ₹1,50,000 in unlocked renewals/year</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
