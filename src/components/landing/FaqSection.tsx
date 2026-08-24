"use client";

import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is CollabOS, and what is it NOT?",
      a: "CollabOS is the back office operations hub for your brand deals. It is NOT a talent agency, and NOT a brand marketplace that finds deals for you (avoiding messy two-sided marketplace dynamics). It is designed to manage, organize, invoice, and track the sponsorships you have already landed so you never lose revenue or waste time in admin chaos.",
    },
    {
      q: "Why can't I just use Google Sheets, Notion, or Trello?",
      a: "Generic tools work initially, but they don't understand the creator business model. They don't have native concepts of 'usage rights windows', 'draft submission milestones', 'whitelisting expiry dates', or 'automated Net-30 invoice chasing'. CollabOS replaces 4 disconnected tools with one purposeful creator CRM.",
    },
    {
      q: "How does Usage Rights Tracking protect my earnings?",
      a: "When brands sponsor a post, contracts typically grant 30, 60, or 90 days of digital advertising rights (running paid Meta/TikTok dark ads with your face). Without tracking, brands frequently keep running ads for 6+ months after rights expire. CollabOS alerts you before expiration so you can either invoice for a paid extension (e.g. +₹25,000) or issue a formal takedown request.",
    },
    {
      q: "Do brand managers need to sign up for CollabOS?",
      a: "No! CollabOS is 100% creator-facing and self-serve. Brands receive standard, beautiful PDF invoices, approval links, and courteous emails directly in their inbox. They never have to download software or create an account.",
    },
    {
      q: "How does the 60-second AI Contract Onboarding work?",
      a: "Instead of manually typing contract fields into a spreadsheet, you paste your brand email thread or contract text into CollabOS. Our creator AI automatically extracts the fee, payment terms (Net-30/Net-15), deliverable list, publication deadline, and licensing duration into your calendar in under 60 seconds.",
    },
    {
      q: "Is CollabOS built for Indian creators or international creators?",
      a: "Both! CollabOS natively supports multi-currency invoicing (INR ₹ with GST formats, USD $, EUR €, GBP £). Whether you are landing local brand partnerships or global sponsorships, the workflow is seamless.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#EFE6D4]/30 border-y border-[#E0D8C5]">
      <div className="mx-auto max-w-4xl px-6 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-md bg-[#DCE6D9] px-3 py-1 text-xs font-semibold text-[#1F3D2E]">
            <Sparkles className="h-3.5 w-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F3D2E]">
            Everything you need to know about CollabOS
          </h2>
          <p className="text-sm text-[#6B6B66]">
            Straightforward answers on how we help solo creators manage sponsorships.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#E0D8C5] bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#1F3D2E]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#6B6B66] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#C1622E]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#6B6B66] leading-relaxed border-t border-[#E0D8C5]/60 bg-[#F6F0E4]/30">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
