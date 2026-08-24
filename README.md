# CollabOS — The Back Office for Your Brand Deals

> **"Run your brand partnerships like a business."**  
> *Domain: [collabos.in](https://collabos.in)*

CollabOS is the business operations hub built specifically for solo creators and influencers who land brand sponsorships. It replaces scattered DMs, spreadsheets, and messy email chains with a unified back office that tracks deliverables, automates invoice chasing, and guards content licensing rights.

---

## 🎯 The Problem Solved

Growing creators (10K–500K followers) land valuable brand sponsorships, but have to manage the business operations entirely manually:
- Contract terms, deliverables, and deadlines tracked across emails, DMs, and notes
- Invoices created manually, often late, with no reminder system
- No easy way to track paid, pending, and overdue brands
- **Content usage & licensing rights** (how long a brand can run paid ads with your content) rarely tracked — leading to lost licensing renewal revenue
- Not yet earning enough to justify hiring a talent manager (who typically takes 10%–20% of earnings)

---

## ✨ Core Features (v1 MVP)

1. **Deal & Contract Tracker**: Terms, deliverables, and deadlines for every brand deal in one consolidated pipeline.
2. **Automated Invoicing & Payment Chasing**: Professional PDF invoice generation tied to deal terms with polite automated reminder sequences.
3. **Usage & Licensing Rights Guard (Core Differentiator)**: Track organic vs. paid dark-ad whitelist windows; get notified before rights expire to trigger paid extensions (e.g. +₹25,000) or issue takedown notices.
4. **60-Second AI Contract Ingestion**: Paste any brand email or contract snippet to auto-extract deliverables, payment terms, deadlines, and usage clauses.

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling & UI**: Tailwind CSS v4 + shadcn/ui + Lucide React
- **Brand Palette**: Pine Ink (`#1F3D2E`), Parchment (`#F6F0E4`), Clay (`#C1622E`), Slate Ink (`#2B2B28`), Sage Mist (`#DCE6D9`)
- **Database & ORM**: PostgreSQL + Drizzle ORM (Prepared)
- **Backend & Auth**: Supabase (Prepared)
- **Validation**: Zod

---

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Uzair-11/collabos.git
   cd collabos
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📄 License

MIT © [CollabOS](https://collabos.in)
