"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CollabOSFavicon } from "@/components/logos/CollabOSLogo";

export function HeroSection({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#EFE6D4]/60 to-transparent pointer-events-none -z-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
        {/* Audience / Problem Target Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E0D8C5] bg-[#EFE6D4] px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-[#1F3D2E] shadow-xs max-w-full text-left sm:text-center">
          <CollabOSFavicon className="h-4 w-4 shrink-0" />
          <span className="truncate sm:overflow-visible">Built for creators who outgrew spreadsheets, but aren't hiring a manager</span>
        </div>

        {/* Hero Title */}
        <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1F3D2E] leading-[1.15]">
            Run your brand partnerships{" "}
            <span className="italic underline decoration-[#C1622E] decoration-wavy decoration-2 underline-offset-4 sm:underline-offset-8">
              like a business.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-[#6B6B66] leading-relaxed">
            The all-in-one operations hub for solo creators. Track sponsorship terms across DMs, automate
            unpaid invoice chasing, and protect your content licensing rights without giving up 20% to an agency.
          </p>
        </div>

        {/* Email Signup Form */}
        <div className="mx-auto max-w-md pt-1 sm:pt-2">
          {submitted ? (
            <div className="rounded-xl border border-[#B9CCB4] bg-[#DCE6D9] p-3.5 sm:p-4 text-[#1F3D2E] text-xs sm:text-sm flex items-center justify-center gap-3 animate-in fade-in zoom-in-95">
              <CheckCircle2 className="h-5 w-5 text-[#1F3D2E] shrink-0" />
              <div className="text-left">
                <p className="font-semibold">You're on the priority waitlist!</p>
                <p className="text-[11px] sm:text-xs text-[#1F3D2E]/80">We will notify you the moment beta invites roll out.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your creator email..."
                className="h-11 sm:h-12 bg-white border-[#E0D8C5] text-[#2B2B28] placeholder:text-[#6B6B66] text-xs sm:text-sm rounded-lg focus-visible:ring-[#C1622E]"
              />
              <Button
                type="submit"
                className="btn-clay h-11 sm:h-12 px-5 sm:px-6 text-xs sm:text-sm font-semibold rounded-lg shrink-0 flex items-center justify-center gap-2"
              >
                <span>Get Early Access</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          )}

          <p className="mt-2.5 text-[11px] sm:text-xs text-[#6B6B66] flex items-center justify-center gap-1.5 sm:gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-[#1F3D2E] shrink-0" />
            <span>Free tier forever &bull; No credit card required</span>
          </p>
        </div>

        {/* Quick Value Metrics Bar */}
        <div className="pt-4 sm:pt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-3xl mx-auto text-left">
          <div className="rounded-xl border border-[#E0D8C5] bg-white/90 p-3 sm:p-3.5 shadow-xs">
            <div className="flex items-center gap-1.5 text-[#C1622E] mb-1">
              <DollarSign className="h-3.5 w-3.5" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#6B6B66]">Manager Cut</span>
            </div>
            <p className="text-lg sm:text-xl font-bold text-[#1F3D2E]">0%</p>
            <p className="text-[10px] sm:text-[11px] text-[#6B6B66] leading-tight">Keep 100% of your deal earnings</p>
          </div>

          <div className="rounded-xl border border-[#E0D8C5] bg-white/90 p-3 sm:p-3.5 shadow-xs">
            <div className="flex items-center gap-1.5 text-[#1F3D2E] mb-1">
              <Clock className="h-3.5 w-3.5" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#6B6B66]">Onboarding</span>
            </div>
            <p className="text-lg sm:text-xl font-bold text-[#1F3D2E]">~60s</p>
            <p className="text-[10px] sm:text-[11px] text-[#6B6B66] leading-tight">Paste email → AI extracts terms</p>
          </div>

          <div className="rounded-xl border border-[#E0D8C5] bg-white/90 p-3 sm:p-3.5 shadow-xs">
            <div className="flex items-center gap-1.5 text-[#C1622E] mb-1">
              <Zap className="h-3.5 w-3.5" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#6B6B66]">Protection</span>
            </div>
            <p className="text-lg sm:text-xl font-bold text-[#1F3D2E]">Active</p>
            <p className="text-[10px] sm:text-[11px] text-[#6B6B66] leading-tight">Alerts before license rights expire</p>
          </div>

          <div className="rounded-xl border border-[#E0D8C5] bg-white/90 p-3 sm:p-3.5 shadow-xs">
            <div className="flex items-center gap-1.5 text-[#1F3D2E] mb-1">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#6B6B66]">Chasing</span>
            </div>
            <p className="text-lg sm:text-xl font-bold text-[#1F3D2E]">Automated</p>
            <p className="text-[10px] sm:text-[11px] text-[#6B6B66] leading-tight">No more awkward follow-up DMs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
