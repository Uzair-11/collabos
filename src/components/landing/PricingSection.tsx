"use client";

import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingSection({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-md bg-[#DCE6D9] px-3 py-1 text-xs font-semibold text-[#1F3D2E]">
            <Sparkles className="h-3.5 w-3.5" />
            Simple, Transparent Creator Pricing
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F3D2E]">
            Keep 100% of your sponsorships. No hidden commissions.
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B66]">
            Traditional talent managers take 10%–20% off the top of every deal. CollabOS gives you the back office power for a flat, predictable subscription.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Plan 1: Free Starter */}
          <div className="rounded-2xl border border-[#E0D8C5] bg-white p-7 space-y-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1F3D2E]">Starter</h3>
                <p className="text-xs text-[#6B6B66] mt-1">For creators landing their first few sponsorships.</p>
              </div>

              <div>
                <span className="text-3xl font-serif font-bold text-[#1F3D2E]">₹0</span>
                <span className="text-xs text-[#6B6B66]"> / free forever</span>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-[#E0D8C5] text-xs text-[#2B2B28]">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1F3D2E] shrink-0" />
                  <span>Up to 3 active brand deals</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1F3D2E] shrink-0" />
                  <span>PDF invoice generator</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1F3D2E] shrink-0" />
                  <span>Deliverables checklist &amp; due dates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1F3D2E] shrink-0" />
                  <span>Manual usage rights logging</span>
                </li>
              </ul>
            </div>

            <Button
              onClick={onOpenWaitlist}
              variant="outline"
              className="btn-pine w-full h-11 text-xs font-semibold rounded-xl"
            >
              Start Free
            </Button>
          </div>

          {/* Plan 2: Creator Pro (Featured) */}
          <div className="rounded-2xl border-2 border-[#C1622E] bg-[#F6F0E4] p-7 space-y-6 flex flex-col justify-between shadow-md relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#C1622E] text-white shadow-xs">
                Most Popular
              </span>
            </div>

            <div className="space-y-4 pt-2">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1F3D2E]">Creator Pro</h3>
                <p className="text-xs text-[#6B6B66] mt-1">Full back office operations for active solo creators.</p>
              </div>

              <div>
                <span className="text-3xl font-serif font-bold text-[#1F3D2E]">₹899</span>
                <span className="text-xs text-[#6B6B66]"> / month ($15 USD)</span>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-[#E0D8C5] text-xs text-[#1F3D2E] font-medium">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#C1622E] shrink-0" />
                  <span><strong>Unlimited</strong> brand deals &amp; contracts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#C1622E] shrink-0" />
                  <span><strong>60-Second AI Contract Ingestion</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#C1622E] shrink-0" />
                  <span><strong>Automated Payment Chasing Sequences</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#C1622E] shrink-0" />
                  <span><strong>Usage Rights Expiration Alerts &amp; Extension Letter Generator</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#C1622E] shrink-0" />
                  <span>Multi-currency support (₹, $, €, £)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#C1622E] shrink-0" />
                  <span>1-Click Export for tax / accounting</span>
                </li>
              </ul>
            </div>

            <Button
              onClick={onOpenWaitlist}
              className="btn-clay w-full h-11 text-xs font-semibold rounded-xl shadow-xs flex items-center justify-center gap-1.5"
            >
              <span>Join Founder Pro Beta</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Plan 3: Talent Agencies */}
          <div className="rounded-2xl border border-[#E0D8C5] bg-white p-7 space-y-6 flex flex-col justify-between shadow-xs opacity-90">
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1F3D2E]">Agencies &amp; Managers</h3>
                <p className="text-xs text-[#6B6B66] mt-1">Manage brand deal workflows across multiple roster talent.</p>
              </div>

              <div>
                <span className="text-2xl font-serif font-bold text-[#1F3D2E]">Custom</span>
                <span className="text-xs text-[#6B6B66]"> / roster based</span>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-[#E0D8C5] text-xs text-[#2B2B28]">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1F3D2E] shrink-0" />
                  <span>Multi-creator roster management</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1F3D2E] shrink-0" />
                  <span>Team roles &amp; assistant permissions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1F3D2E] shrink-0" />
                  <span>Aggregated agency commission splits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1F3D2E] shrink-0" />
                  <span>Priority onboarding concierge</span>
                </li>
              </ul>
            </div>

            <Button
              onClick={onOpenWaitlist}
              variant="outline"
              className="btn-pine w-full h-11 text-xs font-semibold rounded-xl"
            >
              Contact for Agency Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
