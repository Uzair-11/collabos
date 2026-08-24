"use client";

import { useState } from "react";
import { Calculator, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// Deterministic number formatter to avoid SSR/CSR locale mismatches
const formatNumber = (num: number) =>
  Math.round(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export function RoiCalculator({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
  const [dealsPerMonth, setDealsPerMonth] = useState(4);
  const [avgDealPrice, setAvgDealPrice] = useState(45000);
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  const symbol = currency === "INR" ? "₹" : "$";

  const currentPrice = currency === "INR" ? avgDealPrice : Math.round(avgDealPrice * 0.012);
  const annualRevenue = dealsPerMonth * currentPrice * 12;
  const managerFeeSaved = Math.round(annualRevenue * 0.15); // 15% manager cut
  const licensingRecovered = Math.round(annualRevenue * 0.12); // ~12% recovered renewals
  const hoursSavedPerYear = dealsPerMonth * 4 * 12; // 4 hours admin per deal

  return (
    <section id="calculator" className="py-16 md:py-24 bg-[#EFE6D4]/30 border-y border-[#E0D8C5]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-md bg-[#DCE6D9] px-3 py-1 text-xs font-semibold text-[#1F3D2E]">
            <Calculator className="h-3.5 w-3.5" />
            Creator Economics Calculator
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F3D2E]">
            How much are manual spreadsheets costing you?
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B66]">
            Estimate how much revenue you protect by tracking license renewals and avoiding agency commission cuts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Card */}
          <div className="lg:col-span-6 rounded-2xl border border-[#E0D8C5] bg-white p-7 space-y-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#E0D8C5] pb-4">
                <h3 className="font-serif text-lg font-bold text-[#1F3D2E]">Your Brand Deal Volume</h3>
                <div className="flex items-center gap-1 bg-[#F6F0E4] p-1 rounded-lg border border-[#E0D8C5]">
                  <button
                    onClick={() => setCurrency("INR")}
                    className={`px-2.5 py-1 text-xs font-bold rounded ${
                      currency === "INR" ? "bg-[#1F3D2E] text-white" : "text-[#6B6B66]"
                    }`}
                  >
                    INR (₹)
                  </button>
                  <button
                    onClick={() => setCurrency("USD")}
                    className={`px-2.5 py-1 text-xs font-bold rounded ${
                      currency === "USD" ? "bg-[#1F3D2E] text-white" : "text-[#6B6B66]"
                    }`}
                  >
                    USD ($)
                  </button>
                </div>
              </div>

              {/* Slider 1: Deals per Month */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label className="font-semibold text-[#2B2B28]">Brand deals landed per month:</label>
                  <span className="font-mono font-bold text-[#1F3D2E] text-base px-3 py-0.5 rounded bg-[#EFE6D4]">
                    {dealsPerMonth} {dealsPerMonth === 1 ? "deal" : "deals"} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={15}
                  step={1}
                  value={dealsPerMonth}
                  onChange={(e) => setDealsPerMonth(Number(e.target.value))}
                  className="w-full accent-[#C1622E] h-2 bg-[#E0D8C5] rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#6B6B66]">
                  <span>1 deal</span>
                  <span>7 deals</span>
                  <span>15 deals</span>
                </div>
              </div>

              {/* Slider 2: Average Deal Price */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label className="font-semibold text-[#2B2B28]">Average fee per sponsorship:</label>
                  <span className="font-mono font-bold text-[#1F3D2E] text-base px-3 py-0.5 rounded bg-[#EFE6D4]">
                    {symbol}
                    {formatNumber(currentPrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min={currency === "INR" ? 10000 : 200}
                  max={currency === "INR" ? 250000 : 5000}
                  step={currency === "INR" ? 5000 : 100}
                  value={currency === "INR" ? avgDealPrice : Math.round(avgDealPrice * 0.012)}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (currency === "INR") {
                      setAvgDealPrice(val);
                    } else {
                      setAvgDealPrice(Math.round(val / 0.012));
                    }
                  }}
                  className="w-full accent-[#C1622E] h-2 bg-[#E0D8C5] rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#6B6B66]">
                  <span>{symbol}{currency === "INR" ? "10,000" : "200"}</span>
                  <span>{symbol}{currency === "INR" ? "1,25,000" : "2,500"}</span>
                  <span>{symbol}{currency === "INR" ? "2,50,000" : "5,000"}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#6B6B66] bg-[#F6F0E4] p-3 rounded-lg border border-[#E0D8C5]">
              💡 <strong>Creator Insight:</strong> Growing creators typically lose 1-2 unpaid invoices per year and leave 3-4 rights extension opportunities on the table without automated tracking.
            </p>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-6 rounded-2xl border-2 border-[#1F3D2E] bg-[#1F3D2E] text-[#F6F0E4] p-7 space-y-6 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between border-b border-[#2E5A44] pb-4">
                <div>
                  <span className="text-xs font-mono text-[#DCE6D9] uppercase tracking-wider">
                    Projected Annual Sponsorship Flow
                  </span>
                  <p className="text-3xl font-bold font-serif text-white mt-0.5">
                    {symbol}
                    {formatNumber(annualRevenue)}
                    <span className="text-xs font-normal text-[#DCE6D9]"> / year</span>
                  </p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-[#C1622E] text-white flex items-center justify-center font-bold">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="rounded-xl bg-[#14291F] p-4 border border-[#2E5A44]">
                  <span className="text-xs text-[#DCE6D9] block">Manager Commission Saved:</span>
                  <p className="text-xl font-bold text-[#D98A5E] mt-1 font-mono">
                    +{symbol}
                    {formatNumber(managerFeeSaved)}
                  </p>
                  <p className="text-[10px] text-[#B9CCB4] mt-0.5">Based on standard 15% agency cut</p>
                </div>

                <div className="rounded-xl bg-[#14291F] p-4 border border-[#2E5A44]">
                  <span className="text-xs text-[#DCE6D9] block">Licensing Renewals Protected:</span>
                  <p className="text-xl font-bold text-[#DCE6D9] mt-1 font-mono">
                    +{symbol}
                    {formatNumber(licensingRecovered)}
                  </p>
                  <p className="text-[10px] text-[#B9CCB4] mt-0.5">Re-negotiated expired usage rights</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-[#14291F]/60 p-3.5 border border-[#2E5A44] flex items-center justify-between text-xs">
                <span className="text-[#DCE6D9]">Admin &amp; DM Chasing Time Saved:</span>
                <span className="font-bold text-white font-mono">{hoursSavedPerYear} hours / year</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#2E5A44] space-y-3">
              <Button
                onClick={onOpenWaitlist}
                className="btn-clay w-full h-12 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Protect My Brand Earnings</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="text-center text-[11px] text-[#B9CCB4]">
                CollabOS subscription is ₹899/mo (~$11/mo) — pays for itself with 1 recovered deal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
