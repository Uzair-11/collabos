import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CollabOS — Run Your Brand Partnerships Like a Business",
  description:
    "The back office for your brand deals. Track sponsorship deliverables, automate payment chasing, and protect your content licensing rights without hiring an agency.",
  keywords: [
    "creator brand deals",
    "sponsorship tracker",
    "creator invoicing",
    "usage rights tracking",
    "creator economy tool",
    "influencer back office",
    "CollabOS",
  ],
  authors: [{ name: "CollabOS Team" }],
  openGraph: {
    title: "CollabOS — Run Your Brand Partnerships Like a Business",
    description:
      "The back office for creators. Track deliverables, automate invoice chasing, and protect licensing rights.",
    url: "https://collabos.in",
    siteName: "CollabOS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CollabOS — The Back Office For Your Brand Deals",
    description:
      "Automated invoicing, deal tracking, and usage rights alerts built specifically for solo creators.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F6F0E4] text-[#2B2B28] selection:bg-[#C1622E] selection:text-white">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
