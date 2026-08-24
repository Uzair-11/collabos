"use client";

import { useState } from "react";
import { 
  FileText, 
  ShieldAlert, 
  Sparkles, 
  Send, 
  Calendar, 
  Check, 
  Clock, 
  AlertTriangle, 
  Copy, 
  ExternalLink,
  ChevronRight,
  DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type TabKey = "deals" | "rights" | "extractor" | "chaser";

export function InteractiveProductHub() {
  const [activeTab, setActiveTab] = useState<TabKey>("deals");
  const [dealFilter, setDealFilter] = useState<"all" | "paid" | "pending" | "overdue">("all");
  
  // AI Contract extractor simulation state
  const [extracting, setExtracting] = useState(false);
  const [extractedData, setExtractedData] = useState<boolean>(true);
  const [sampleText, setSampleText] = useState(
    `Hey Sarah! We'd love to sponsor your next YouTube video for the launch of our new productivity app. We can offer $1,500 for a 60-second integrated shoutout + link in description. We'd also like 30 days of paid ad usage rights starting from publication date. Payment will be Net-30 upon publishing. Let us know if this works!`
  );

  const sampleDeals = [
    {
      id: "deal-1",
      brand: "Nike India",
      creatorTag: "@sarah.creates",
      amount: "₹45,000",
      status: "paid",
      deliverable: "1x IG Reel + 2x Stories",
      deadline: "Completed July 28",
      usageAlert: "Licensing expires in 12 days",
      usageAlertSeverity: "warning",
      paymentDate: "Paid via Bank Transfer",
    },
    {
      id: "deal-2",
      brand: "Notion",
      creatorTag: "@sarah.creates",
      amount: "$1,200",
      status: "pending",
      deliverable: "60s YouTube Integration",
      deadline: "Deliverable due in 3 days",
      usageAlert: "90-day organic exclusivity",
      usageAlertSeverity: "neutral",
      paymentDate: "Net-30 • Due Aug 30",
    },
    {
      id: "deal-3",
      brand: "Cult.fit Fitness",
      creatorTag: "@sarah.creates",
      amount: "₹60,000",
      status: "overdue",
      deliverable: "2x Dedicated YouTube Shorts",
      deadline: "Published Aug 10",
      usageAlert: "Paid ad rights active (45 days left)",
      usageAlertSeverity: "urgent",
      paymentDate: "Overdue by 5 days • Reminder Sent",
    },
  ];

  const filteredDeals = sampleDeals.filter((deal) => {
    if (dealFilter === "all") return true;
    return deal.status === dealFilter;
  });

  const handleSimulateExtraction = () => {
    setExtracting(true);
    setExtractedData(false);
    setTimeout(() => {
      setExtracting(false);
      setExtractedData(true);
    }, 900);
  };

  return (
    <section id="interactive-hub" className="py-16 md:py-24 border-y border-[#E0D8C5] bg-[#EFE6D4]/40">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-md bg-[#DCE6D9] px-3 py-1 text-xs font-semibold text-[#1F3D2E]">
            <Sparkles className="h-3.5 w-3.5" />
            Interactive Product Preview
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F3D2E]">
            Experience the calm of a dedicated creator back office
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B66]">
            See how CollabOS transforms chaotic DMs and spreadsheets into clear deal pipelines, automated invoicing, and proactive licensing protection.
          </p>
        </div>

        {/* Tab Selector Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab("deals")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "deals"
                ? "bg-[#1F3D2E] text-[#F6F0E4] shadow-sm"
                : "bg-white/80 border border-[#E0D8C5] text-[#2B2B28] hover:bg-white"
            }`}
          >
            <FileText className="h-4 w-4" />
            <span>1. Deal & Contract Tracker</span>
          </button>

          <button
            onClick={() => setActiveTab("rights")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "rights"
                ? "bg-[#1F3D2E] text-[#F6F0E4] shadow-sm"
                : "bg-white/80 border border-[#E0D8C5] text-[#2B2B28] hover:bg-white"
            }`}
          >
            <ShieldAlert className="h-4 w-4 text-[#C1622E]" />
            <span>2. Usage Rights Guard</span>
            <span className="ml-1 text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#C1622E] text-white">
              Sharp Differentiator
            </span>
          </button>

          <button
            onClick={() => setActiveTab("extractor")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "extractor"
                ? "bg-[#1F3D2E] text-[#F6F0E4] shadow-sm"
                : "bg-white/80 border border-[#E0D8C5] text-[#2B2B28] hover:bg-white"
            }`}
          >
            <Sparkles className="h-4 w-4" />
            <span>3. 60s AI Contract Ingestion</span>
          </button>

          <button
            onClick={() => setActiveTab("chaser")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "chaser"
                ? "bg-[#1F3D2E] text-[#F6F0E4] shadow-sm"
                : "bg-white/80 border border-[#E0D8C5] text-[#2B2B28] hover:bg-white"
            }`}
          >
            <Send className="h-4 w-4" />
            <span>4. Automated Payment Chaser</span>
          </button>
        </div>

        {/* Tab 1: Deal Tracker */}
        {activeTab === "deals" && (
          <div className="rounded-2xl border border-[#E0D8C5] bg-white p-6 sm:p-8 shadow-sm transition-all animate-in fade-in-50 duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E0D8C5]">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1F3D2E]">Active Sponsorship Deals</h3>
                <p className="text-xs text-[#6B6B66] mt-0.5">3 brand contracts active &bull; Total Pipeline: ₹1,85,000</p>
              </div>

              {/* Filters */}
              <div className="flex items-center gap-1.5 bg-[#F6F0E4] p-1 rounded-lg border border-[#E0D8C5]">
                {(["all", "paid", "pending", "overdue"] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setDealFilter(filter)}
                    className={`px-3 py-1 text-xs font-semibold rounded-md capitalize transition-all ${
                      dealFilter === filter
                        ? "bg-white text-[#1F3D2E] shadow-xs"
                        : "text-[#6B6B66] hover:text-[#2B2B28]"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Deal Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6">
              {filteredDeals.map((deal) => (
                <div
                  key={deal.id}
                  className="rounded-xl border border-[#E0D8C5] bg-[#F6F0E4]/50 p-5 flex flex-col justify-between hover:border-[#1F3D2E]/40 transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-medium text-[#6B6B66]">
                        {deal.brand}
                      </span>
                      <span
                        className={`badge text-xs font-semibold px-2.5 py-0.5 rounded-md ${
                          deal.status === "paid"
                            ? "badge-paid"
                            : deal.status === "pending"
                            ? "badge-pending"
                            : "badge-overdue"
                        }`}
                      >
                        {deal.status.toUpperCase()}
                      </span>
                    </div>

                    <div>
                      <p className="text-2xl font-bold font-serif text-[#1F3D2E]">{deal.amount}</p>
                      <p className="text-xs text-[#2B2B28] font-medium mt-1">{deal.deliverable}</p>
                    </div>

                    <div className="rounded-lg bg-white p-3 border border-[#E0D8C5] space-y-1.5 text-xs">
                      <div className="flex items-center justify-between text-[#6B6B66]">
                        <span>Timeline:</span>
                        <span className="text-[#2B2B28] font-medium">{deal.deadline}</span>
                      </div>
                      <div className="flex items-center justify-between text-[#6B6B66]">
                        <span>Terms:</span>
                        <span className="text-[#2B2B28] font-medium">{deal.paymentDate}</span>
                      </div>
                    </div>

                    {/* Usage Alert Box */}
                    <div
                      className={`p-2.5 rounded-lg text-xs flex items-center gap-2 ${
                        deal.usageAlertSeverity === "warning"
                          ? "bg-[#FBE4D4] text-[#93481F] border border-[#D98A5E]/40"
                          : deal.usageAlertSeverity === "urgent"
                          ? "bg-[#F6D6D0] text-[#8C2E1D] border border-[#8C2E1D]/30"
                          : "bg-[#DCE6D9] text-[#1F3D2E] border border-[#B9CCB4]"
                      }`}
                    >
                      <Clock className="h-3.5 w-3.5 shrink-0" />
                      <span className="font-medium text-[11px]">{deal.usageAlert}</span>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E0D8C5] flex items-center justify-between">
                    <button className="text-xs font-semibold text-[#1F3D2E] hover:underline flex items-center gap-1">
                      View Contract <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                    <button className="text-xs font-semibold text-[#C1622E] hover:underline">
                      Generate Invoice
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Usage Rights Guard */}
        {activeTab === "rights" && (
          <div className="rounded-2xl border border-[#E0D8C5] bg-white p-6 sm:p-8 shadow-sm transition-all animate-in fade-in-50 duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-1.5 rounded-md bg-[#FBE4D4] px-3 py-1 text-xs font-semibold text-[#93481F]">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  Why 80% of Creators Lose Money
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F3D2E]">
                  Never let brands run ads with your face after the license expires.
                </h3>
                <p className="text-sm text-[#6B6B66] leading-relaxed">
                  When a brand buys a sponsorship, they often include <strong>"30 or 60 days paid digital usage rights"</strong>. 
                  Most creators forget the date, and brands keep running high-spend Meta ads with your likeness for months for free.
                </p>
                
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DCE6D9] text-[#1F3D2E] font-bold text-xs">
                      1
                    </div>
                    <p className="text-xs text-[#2B2B28]">
                      <strong>Automated License Expiry Clock:</strong> CollabOS calculates exact expiration dates from the moment your content goes live.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DCE6D9] text-[#1F3D2E] font-bold text-xs">
                      2
                    </div>
                    <p className="text-xs text-[#2B2B28]">
                      <strong>14-Day Renewal Trigger:</strong> Get alerted 14 days before expiration so you can offer an extension package (e.g. +₹25,000 for another 60 days).
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DCE6D9] text-[#1F3D2E] font-bold text-xs">
                      3
                    </div>
                    <p className="text-xs text-[#2B2B28]">
                      <strong>1-Click Takedown / Extension Notice:</strong> Send pre-written professional renewal letters to the brand manager in one click.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rights Interactive Card */}
              <div className="lg:col-span-6">
                <div className="rounded-xl border border-[#E0D8C5] bg-[#F6F0E4] p-6 space-y-4 shadow-xs">
                  <div className="flex items-center justify-between border-b border-[#E0D8C5] pb-3">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-[#C1622E] animate-pulse" />
                      <span className="text-xs font-mono font-bold uppercase text-[#1F3D2E]">
                        Live License Monitor
                      </span>
                    </div>
                    <Badge variant="outline" className="border-[#C1622E] text-[#C1622E] bg-[#FBE4D4] text-xs">
                      ⚠️ 12 Days Remaining
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[#6B6B66]">Campaign:</span>
                      <span className="font-semibold text-[#1F3D2E]">Nike Air Max Launch Reel</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[#6B6B66]">Usage Scope:</span>
                      <span className="font-medium text-[#2B2B28]">Meta Dark Ads (Instagram / FB)</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[#6B6B66]">License Window:</span>
                      <span className="font-mono text-xs font-semibold text-[#1F3D2E]">60 Days (Expires Sep 05)</span>
                    </div>
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-[11px] text-[#6B6B66]">
                      <span>Day 1 (Published)</span>
                      <span className="font-bold text-[#C1622E]">Day 48 / 60</span>
                      <span>Day 60 (Expiry)</span>
                    </div>
                    <div className="h-3 w-full bg-[#E0D8C5] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#1F3D2E] via-[#C1622E] to-[#8C2E1D] w-[80%]" />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-2">
                    <Button className="btn-clay flex-1 text-xs font-semibold h-10">
                      Send ₹25,000 Extension Quote
                    </Button>
                    <Button variant="outline" className="btn-pine text-xs font-semibold h-10">
                      View Takedown Template
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: AI Contract Scanner */}
        {activeTab === "extractor" && (
          <div className="rounded-2xl border border-[#E0D8C5] bg-white p-6 sm:p-8 shadow-sm transition-all animate-in fade-in-50 duration-200">
            <div className="max-w-3xl mb-6">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F3D2E]">
                60-Second Onboarding: Paste any email or contract
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6B66] mt-1">
                No tedious data entry. Simply copy the deal email thread or contract text, and CollabOS extracts deliverables, fees, deadlines, and usage windows automatically.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Input Box */}
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-semibold uppercase text-[#6B6B66]">
                    Paste Brand Deal Email or Terms
                  </label>
                  <button
                    onClick={() =>
                      setSampleText(
                        `Hi Alex, confirmed! We agree on ₹80,000 for 1 dedicated YouTube video + 1 Instagram Reel for the festival campaign. Publishing deadline is September 15. We require 60 days of digital ad whitelist rights. Payment will be Net-15 upon posting live link.`
                      )
                    }
                    className="text-xs text-[#C1622E] hover:underline font-medium"
                  >
                    Load Sample Email 2
                  </button>
                </div>

                <textarea
                  value={sampleText}
                  onChange={(e) => setSampleText(e.target.value)}
                  rows={6}
                  className="w-full rounded-xl border border-[#E0D8C5] bg-[#F6F0E4]/40 p-3.5 text-xs text-[#2B2B28] font-mono leading-relaxed focus:outline-none focus:ring-1 focus:ring-[#C1622E]"
                />

                <Button
                  onClick={handleSimulateExtraction}
                  disabled={extracting}
                  className="btn-clay w-full h-11 text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  {extracting ? "Parsing terms with AI..." : "Extract Deal & Rights in 60s"}
                </Button>
              </div>

              {/* Parsed Results Box */}
              <div className="lg:col-span-6 rounded-xl border border-[#E0D8C5] bg-[#F6F0E4] p-5 relative overflow-hidden">
                <img
                  src="/logos/monochrome/watermark.svg"
                  alt=""
                  className="absolute -bottom-6 -right-6 w-36 h-36 opacity-30 pointer-events-none select-none"
                />
                <div className="flex items-center justify-between pb-3 border-b border-[#E0D8C5]">
                  <span className="text-xs font-mono font-bold uppercase text-[#1F3D2E] flex items-center gap-1.5">
                    <Check className="h-4 w-4 text-[#1F3D2E]" />
                    Extracted Contract Structure
                  </span>
                  <Badge variant="outline" className="text-[10px] bg-[#DCE6D9] text-[#1F3D2E] border-none">
                    Confidence: 99.4%
                  </Badge>
                </div>

                {extractedData ? (
                  <div className="space-y-3 pt-3 text-xs">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white p-2.5 rounded-lg border border-[#E0D8C5]">
                        <span className="text-[#6B6B66] text-[11px] block">Agreed Fee:</span>
                        <span className="font-bold text-[#1F3D2E] text-sm">$1,500 / ₹1,25,000</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-lg border border-[#E0D8C5]">
                        <span className="text-[#6B6B66] text-[11px] block">Payment Terms:</span>
                        <span className="font-bold text-[#1F3D2E] text-sm">Net-30 upon publish</span>
                      </div>
                    </div>

                    <div className="bg-white p-2.5 rounded-lg border border-[#E0D8C5]">
                      <span className="text-[#6B6B66] text-[11px] block">Deliverables Detected:</span>
                      <p className="font-medium text-[#2B2B28] mt-0.5">• 1x 60-second integrated shoutout (YouTube)</p>
                      <p className="font-medium text-[#2B2B28]">• 1x Link in description</p>
                    </div>

                    <div className="bg-white p-2.5 rounded-lg border border-[#E0D8C5]">
                      <span className="text-[#6B6B66] text-[11px] block">Usage Rights Clause:</span>
                      <p className="font-medium text-[#C1622E] mt-0.5">
                        ⚠️ 30 Days Paid Ad Whitelist (Auto-expiry alert scheduled for Day 16 & Day 28)
                      </p>
                    </div>

                    <Button size="sm" className="btn-pine w-full text-xs font-semibold h-9 mt-1">
                      Add to My Deal Pipeline
                    </Button>
                  </div>
                ) : (
                  <div className="h-48 flex items-center justify-center text-xs text-[#6B6B66]">
                    Analyzing contract text...
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Payment Chaser */}
        {activeTab === "chaser" && (
          <div className="rounded-2xl border border-[#E0D8C5] bg-white p-6 sm:p-8 shadow-sm transition-all animate-in fade-in-50 duration-200">
            <div className="max-w-3xl mb-6">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F3D2E]">
                Automated, Courteous Invoicing &amp; Payment Chasing
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6B66] mt-1">
                Stop feeling uncomfortable following up in Instagram DMs. CollabOS sends professional email sequences that get creators paid 14 days faster on average.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Sequence 1 */}
              <div className="rounded-xl border border-[#E0D8C5] bg-[#F6F0E4]/60 p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-[#DCE6D9] text-[#1F3D2E] text-[10px]">
                    Step 1 &bull; 3 Days Before Due
                  </Badge>
                </div>
                <h4 className="font-semibold text-xs text-[#1F3D2E]">The Friendly Pre-Due Nudge</h4>
                <div className="bg-white p-3 rounded-lg border border-[#E0D8C5] text-[11px] text-[#6B6B66] font-mono leading-relaxed">
                  "Hi Team, hope you loved the campaign performance! Just sending a quick heads up that Invoice #INV-102 is scheduled for payment this Thursday..."
                </div>
              </div>

              {/* Sequence 2 */}
              <div className="rounded-xl border border-[#E0D8C5] bg-[#F6F0E4]/60 p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-[#FBE4D4] text-[#93481F] text-[10px]">
                    Step 2 &bull; Day of Due Date
                  </Badge>
                </div>
                <h4 className="font-semibold text-xs text-[#1F3D2E]">The Payment Due Notice</h4>
                <div className="bg-white p-3 rounded-lg border border-[#E0D8C5] text-[11px] text-[#6B6B66] font-mono leading-relaxed">
                  "Hello, today is the due date for Invoice #INV-102 (₹45,000). Please share the UTR / wire confirmation once processed..."
                </div>
              </div>

              {/* Sequence 3 */}
              <div className="rounded-xl border border-[#E0D8C5] bg-[#F6F0E4]/60 p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-[#F6D6D0] text-[#8C2E1D] text-[10px]">
                    Step 3 &bull; 5 Days Overdue
                  </Badge>
                </div>
                <h4 className="font-semibold text-xs text-[#1F3D2E]">The Formal Overdue &amp; Pause Notice</h4>
                <div className="bg-white p-3 rounded-lg border border-[#E0D8C5] text-[11px] text-[#6B6B66] font-mono leading-relaxed">
                  "Important: Invoice #INV-102 is now 5 days past agreed terms. As per contract section 4, content licensing rights are paused until settlement..."
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
