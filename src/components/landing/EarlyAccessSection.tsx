"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Share2, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EarlyAccessSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "Instagram",
    audienceSize: "10K - 50K",
    dealVolume: "3 - 8 deals/year",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setSubmitted(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("https://collabos.in?ref=waitlist");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="early-access" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border-2 border-[#1F3D2E] bg-[#1F3D2E] text-[#F6F0E4] p-8 sm:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle Background pattern */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#2E5A44]/40 blur-2xl pointer-events-none" />

          {submitted ? (
            <div className="text-center space-y-6 max-w-md mx-auto py-6 animate-in fade-in zoom-in-95">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#DCE6D9] text-[#1F3D2E] mx-auto">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  You're in! Welcome to CollabOS.
                </h3>
                <p className="text-xs sm:text-sm text-[#DCE6D9]">
                  We've reserved your early founder spot for <strong>{formData.email}</strong>. You'll receive your beta access key shortly.
                </p>
              </div>

              <div className="rounded-xl bg-[#14291F] p-4 border border-[#2E5A44] space-y-3">
                <span className="text-xs text-[#B9CCB4] block">Share your invite link with creator peers:</span>
                <div className="flex items-center gap-2">
                  <Input
                    readOnly
                    value="https://collabos.in?ref=founder-vip"
                    className="h-10 bg-[#1F3D2E] border-[#2E5A44] text-[#F6F0E4] text-xs font-mono"
                  />
                  <Button
                    onClick={handleCopy}
                    size="sm"
                    className="btn-clay h-10 px-4 text-xs font-semibold shrink-0"
                  >
                    {copied ? "Copied!" : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="mb-2">
                  <img
                    src="/logos/primary/primary-lockup-reversed.svg"
                    alt="CollabOS"
                    className="h-10 w-auto"
                  />
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-md bg-[#2E5A44] px-3 py-1 text-xs font-semibold text-[#DCE6D9]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Limited Founder Beta
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Be first to run brand deals with CollabOS.
                </h2>
                <p className="text-xs sm:text-sm text-[#DCE6D9] leading-relaxed">
                  Join hundreds of solo YouTubers, Instagrammers, and content creators taking back control of their deal flow and invoicing.
                </p>
                <div className="pt-2 space-y-2 text-xs text-[#B9CCB4]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#D98A5E]" />
                    <span>Free Pro Tier for early beta cohort</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#D98A5E]" />
                    <span>Direct 1-on-1 input into upcoming features</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-7 rounded-2xl bg-[#14291F] border border-[#2E5A44] p-6 sm:p-8 space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#DCE6D9]">Your Name</label>
                      <Input
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-10 bg-[#1F3D2E] border-[#2E5A44] text-white placeholder:text-[#6B6B66] text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#DCE6D9]">Creator Email</label>
                      <Input
                        type="email"
                        required
                        placeholder="you@creator.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-10 bg-[#1F3D2E] border-[#2E5A44] text-white placeholder:text-[#6B6B66] text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#DCE6D9]">Primary Platform</label>
                      <select
                        value={formData.platform}
                        onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                        className="w-full h-10 rounded-lg bg-[#1F3D2E] border border-[#2E5A44] text-white px-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#C1622E]"
                      >
                        <option value="Instagram">Instagram</option>
                        <option value="YouTube">YouTube</option>
                        <option value="TikTok">TikTok</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="X / Twitter">X / Twitter</option>
                        <option value="Podcast">Podcast / Other</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#DCE6D9]">Follower / Sub Count</label>
                      <select
                        value={formData.audienceSize}
                        onChange={(e) => setFormData({ ...formData, audienceSize: e.target.value })}
                        className="w-full h-10 rounded-lg bg-[#1F3D2E] border border-[#2E5A44] text-white px-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#C1622E]"
                      >
                        <option value="10K - 50K">10K – 50K</option>
                        <option value="50K - 100K">50K – 100K</option>
                        <option value="100K - 500K">100K – 500K</option>
                        <option value="500K+">500K+</option>
                        <option value="< 10K">&lt; 10K (Starting Out)</option>
                      </select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="btn-clay w-full h-11 text-xs font-bold rounded-xl flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Request Early Founder Access</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
