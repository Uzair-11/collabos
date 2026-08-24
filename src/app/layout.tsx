import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader, Baloo_2 } from "next/font/google";
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

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://collabos.in"),
  title: "CollabOS — Run Your Brand Partnerships Like a Business",
  description:
    "The back office for your brand deals. Track sponsorship deliverables, automate payment chasing, and protect your content licensing rights without hiring an agency.",
  icons: {
    icon: [
      { url: "/logos/icon/favicon.svg", type: "image/svg+xml" },
      { url: "/logos/icon/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/logos/icon/app-icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
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
    images: [{ url: "/logos/primary/primary-lockup-light.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CollabOS — The Back Office For Your Brand Deals",
    description:
      "Automated invoicing, deal tracking, and usage rights alerts built specifically for solo creators.",
    images: ["/logos/primary/primary-lockup-light.png"],
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
      className={`${sans.variable} ${serif.variable} ${baloo.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F6F0E4] text-[#2B2B28] selection:bg-[#C1622E] selection:text-white">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
