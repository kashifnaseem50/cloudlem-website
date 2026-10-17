
"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, BookOpenCheck, BriefcaseBusiness,
  Building2, CalendarCheck2, ChartNoAxesCombined, Check,
  CheckCircle2, ChevronLeft, ChevronRight, ClipboardCheck,
  CreditCard, FileCheck2, FileSpreadsheet, FolderSync,
  Handshake, Landmark, Layers3, LockKeyhole, Mail,
  Pause, Play, Plus, Quote, ReceiptText, RefreshCcw,
  Scale, ShieldCheck, ShoppingBag, Star, Store, TrendingUp,
  Users, WalletCards, type LucideIcon,
} from "lucide-react";

const EMAIL = "info@cloudlem.com";
const PURPLE = "#75449B";

const money = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  tag: string;
};

const services: Service[] = [
  {
    title: "Monthly Bookkeeping",
    description: "Consistent transaction categorization, account reconciliation, and financial-record support.",
    icon: BookOpenCheck,
    tag: "Recurring",
  },
  {
    title: "Catch-Up Bookkeeping",
    description: "Bring overdue books up to date with a clearly scoped historical bookkeeping project.",
    icon: FolderSync,
    tag: "One-time",
  },
  {
    title: "Bookkeeping Cleanup",
    description: "Investigate historical discrepancies and restore order to accounting records.",
    icon: RefreshCcw,
    tag: "One-time",
  },
  {
    title: "Bank Reconciliation",
    description: "Match bank statements against recorded transactions and investigate differences.",
    icon: Landmark,
    tag: "Recurring",
  },
  {
    title: "Credit Card Reconciliation",
    description: "Review card transactions, statements, and reconciliation items.",
    icon: CreditCard,
    tag: "Recurring",
  },
  {
    title: "Accounts Payable",
    description: "Organize vendor bills, payment due dates, and outstanding obligations.",
    icon: ReceiptText,
    tag: "Operations",
  },
  {
    title: "Accounts Receivable",
    description: "Track customer invoices, outstanding balances, and follow-up records.",
    icon: WalletCards,
    tag: "Operations",
  },
  {
    title: "Financial Reporting",
    description: "Prepare agreed profit-and-loss, balance-sheet, and related financial reports.",
    icon: ChartNoAxesCombined,
    tag: "Reporting",
  },
  {
    title: "Expense Categorization",
    description: "Classify business expenses consistently and maintain clear supporting records.",
    icon: FileSpreadsheet,
    tag: "Recurring",
  },
  {
    title: "General Ledger Support",
    description: "Maintain ledger organization and review entries within the agreed scope.",
    icon: Layers3,
    tag: "Operations",
  },
  {
    title: "Bookkeeping Setup",
    description: "Establish a chart of accounts and practical recording workflows.",
    icon: ClipboardCheck,
    tag: "One-time",
  },
  {
    title: "Year-End Book Preparation",
    description: "Organize accounts and records for review by your accountant or tax professional.",
    icon: FileCheck2,
    tag: "Project",
  },
];

type Plan = {
  name: "Basic" | "Standard" | "Premium";
  price: number;
  transactions: number;
  accounts: number;
  reports: string[];
  invoicing: boolean;
  reminders: boolean;
  payroll: number;
  reviewCall: boolean;
  description: string;
  audience: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Basic",
    price: 59,
    transactions: 50,
    accounts: 1,
    reports: ["Financial"],
    invoicing: false,
    reminders: false,
    payroll: 0,
    reviewCall: false,
    description: "The essentials for keeping simple books organized.",
    audience: "Freelancers, startups, and smaller businesses.",
  },
  {
    name: "Standard",
    price: 99,
    transactions: 150,
    accounts: 3,
    reports: ["Financial", "Balance Sheet"],
    invoicing: true,
    reminders: false,
    payroll: 5,
    reviewCall: false,
    description: "Expanded reporting and day-to-day financial operations.",
    audience: "Small businesses, online stores, and service firms.",
    popular: true,
  },
  {
    name: "Premium",
    price: 149,
    transactions: 300,
    accounts: 5,
    reports: ["Financial", "Balance Sheet", "Cash Flow"],
    invoicing: true,
    reminders: true,
    payroll: 10,
    reviewCall: true,
    description: "Broader support for businesses with growing activity.",
    audience: "Growing businesses with more transactions and accounts.",
  },
];

const compare: {
  label: string;
  value: (p: Plan) => string;
}[] = [
  { label: "Monthly price (USD)", value: p => `$${p.price}` },
  { label: "Transactions / month", value: p => `Up to ${p.transactions}` },
  { label: "Bank/card accounts", value: p => `Up to ${p.accounts}` },
  {
    label: "Financial reports",
    value: p => p.reports.includes("Financial") ? "Included" : "—",
  },
  {
    label: "Balance Sheet",
    value: p => p.reports.includes("Balance Sheet") ? "Included" : "—",
  },
  {
    label: "Cash Flow report",
    value: p => p.reports.includes("Cash Flow") ? "Included" : "—",
  },
  {
    label: "Invoicing & bill tracking",
    value: p => p.invoicing ? "Included" : "—",
  },
  {
    label: "Payment reminders",
    value: p => p.reminders ? "Included" : "—",
  },
  {
    label: "Payroll calculations & payslips*",
    value: p => p.payroll ? `Up to ${p.payroll} staff*` : "—",
  },
  {
    label: "Monthly review call",
    value: p => p.reviewCall ? "Included" : "—",
  },
];

const industries = [
  { title: "Small Businesses", text: "Practical support for everyday transactions.", icon: Store },
  { title: "E-commerce", text: "Sales, fees, expenses, and reconciliations.", icon: ShoppingBag },
  { title: "Agencies & Studios", text: "Financial records for project-based businesses.", icon: BriefcaseBusiness },
  { title: "Professional Services", text: "Structured records for service-focused firms.", icon: Building2 },
  { title: "Consultants", text: "Income, expenses, and invoicing activity.", icon: Users },
  { title: "Retail", text: "Transaction and expense organization.", icon: ReceiptText },
  { title: "Growing Teams", text: "Consistent bookkeeping as activity expands.", icon: TrendingUp },
  { title: "Other Businesses", text: "Discuss a tailored scope for your needs.", icon: Handshake },
];

const faqs = [
  {
    q: "Can we hire Cloudlem for monthly bookkeeping?",
    a: "Yes. Request a monthly engagement and we will agree on accounts, transactions, reporting, access, and responsibilities before work begins.",
  },
  {
    q: "Do you accept one-time projects?",
    a: "Yes. Catch-up, cleanup, reconciliation, and bookkeeping setup can be scoped as one-time projects.",
  },
  {
    q: "What does yearly bookkeeping include?",
    a: "Yearly bookkeeping can mean an ongoing annual contract or a once-a-year project covering a full year's records. We'll confirm the scope, delivery schedule, and custom pricing before work begins.",
  },
  {
    q: "How much does bookkeeping cost?",
    a: "Our monthly packages are Basic ($59), Standard ($99), and Premium ($149) in USD. Work outside the included limits or one-time engagements is quoted separately.",
  },
  {
    q: "Can international businesses inquire?",
    a: "Yes. We welcome inquiries from businesses worldwide; applicable local rules, software, and service availability are confirmed during scoping.",
  },
  {
    q: "Do you work with QuickBooks, Xero, or other tools?",
    a: "Tell us the platform you use. We review compatibility and access before confirming support. Displaying a platform does not imply a certification or partnership.",
  },
  {
    q: "What does the payroll feature include?",
    a: "The Standard and Premium package descriptions contemplate payroll calculations and payslip support. Availability depends on the country, qualified delivery capacity, and an agreed written scope; tax filings and statutory remittances are not included by default.",
  },
  {
    q: "What financial records should clients provide?",
    a: "Clients should supply complete, authentic, accurate, and timely records relevant to the agreed work, such as bank and credit-card statements, invoices, receipts, and supporting documents. Known errors or missing records should be disclosed promptly. Sensitive documents should be shared through an agreed secure process, not the public inquiry form.",
  },
  {
    q: "Does Cloudlem provide tax preparation and filing?",
    a: "Cloudlem provides bookkeeping and financial reporting. For eligible clients, tax preparation or filing may be arranged through appropriately qualified professionals, where legally permitted and under a separate written agreement. These services are not included in standard bookkeeping packages, and avoiding tax penalties cannot be guaranteed.",
  },
];

type Testimonial = {
  quote: string;
  name: string;
  context: string;
  rating?: number;
  date?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Chirs SIlva LLC",
    context: "QuickBooks Online transaction organization",
    quote: "Mueen did a great job organizing my QBO transactions. Everything was properly categorized and accurately reconciled. He was efficient, detail-oriented, and made the whole process smooth and easy. I would definitely recommend him",
  },
  {
    name: "Property management client",
    context: "Property Management Accountant for Multi-Property Review",
    rating: 5,
    date: "Apr 15–16, 2026",
    quote: "Mueen did an outstanding job handling our multi-property financials. He identified errors, corrected reports, and gave us a clear and accurate financial picture. He explained everything in a simple way and delivered exactly what we needed. Highly recommended, professional, experienced, and someone we’ll definitely work with again",
  },
];

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.13 }}
      transition={{
        duration: reduced ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function Heading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto mb-11 max-w-[760px] text-center">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8754A5]">
        {eyebrow}
      </p>
      <h2 className="text-[clamp(2rem,3.5vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.055em] text-[#30243B]">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-[650px] text-[14px] leading-[1.85] text-[#706477] sm:text-[15px]">
          {description}
        </p>
      )}
    </Reveal>
  );
}

function Photo({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative min-h-[310px] overflow-hidden rounded-[16px] border border-[#E4D6ED] bg-[linear-gradient(135deg,#F4EDF9,#DDE6EA)] shadow-[0_18px_48px_rgba(72,39,92,0.09)] sm:min-h-[390px]">
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width:1024px) 45vw,95vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex min-h-[390px] items-center justify-center">
          <FileSpreadsheet
            size={72}
            strokeWidth={1}
            className="text-[#9670B2]"
          />
        </div>
      )}

      <div className="absolute bottom-5 left-5 rounded-[9px] border border-white/80 bg-white/95 px-4 py-3 text-[11px] font-semibold text-[#4C3560] shadow-lg">
        <CheckCircle2 size={14} className="mr-2 inline text-[#8952AE]" />
        {label}
      </div>
    </div>
  );
}

/* ==========================================
   FINANCIAL DASHBOARD
========================================== */

function FinancialDashboard() {
  const months = [
    { label: "Apr", income: 38140, expenses: 27620 },
    { label: "May", income: 40780, expenses: 29280 },
    { label: "Jun", income: 41820, expenses: 30840 },
    { label: "Jul", income: 44650, expenses: 32360 },
    { label: "Aug", income: 45980, expenses: 33050 },
    { label: "Sep", income: 48320, expenses: 34890 },
  ];

  const expenseMix = [
    { name: "Payroll", value: 18900, color: "#75449B" },
    { name: "Operations", value: 6450, color: "#A87BCA" },
    { name: "Marketing", value: 4130, color: "#C4A2DB" },
    { name: "Software", value: 2890, color: "#D8C3E7" },
    { name: "Other", value: 2520, color: "#ECE3F2" },
  ];

  const current = months[months.length - 1];
  const net = current.income - current.expenses;
  const margin = ((net / current.income) * 100).toFixed(1);

  const totalExpense = expenseMix.reduce(
    (sum, e) => sum + e.value,
    0
  );

  const x = (i: number) => 43 + i * 59;
  const y = (n: number) => 153 - (n / 60000) * 133;

  const path = (key: "income" | "expenses") =>
    months
      .map(
        (v, i) =>
          `${i ? "L" : "M"}${x(i)} ${y(v[key])}`
      )
      .join(" ");

  let running = 0;

  const donut = `conic-gradient(${expenseMix
    .map((e) => {
      const start = running;
      running += (e.value / totalExpense) * 100;
      return `${e.color} ${start.toFixed(2)}% ${running.toFixed(2)}%`;
    })
    .join(",")})`;

  return (
    <div className="relative mx-auto w-full max-w-[610px] overflow-hidden rounded-[17px] border border-[#DCD2E5] bg-white shadow-[0_30px_75px_rgba(54,37,72,0.14)]">

      <div className="flex items-center gap-3 border-b border-[#EEE6F1] bg-[#FCFAFD] px-5 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-2 w-2 rounded-full bg-[#E8B6B6]" />
          <i className="h-2 w-2 rounded-full bg-[#E7D5A0]" />
          <i className="h-2 w-2 rounded-full bg-[#A9D5BD]" />
        </span>
        <span className="text-[11px] font-semibold text-[#62536C]">
          Monthly financial overview
        </span>
        <span className="ml-auto rounded-full bg-[#F0E7F8] px-2.5 py-1 text-[9px] font-bold uppercase text-[#8754A5]">
          Illustrative
        </span>
      </div>

      <div className="p-4 sm:p-6">
        <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#9989A2]">
          Financial performance
        </p>

        <h3 className="mt-1 text-[19px] font-semibold tracking-[-0.04em]">
          A clearer picture of your books
        </h3>

        <p className="mt-1 text-[11px] text-[#83768C]">
          Sample business · USD · September 2026
        </p>

        <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
          {[
            ["Total income", current.income, "#337E74", "September"],
            ["Total expenses", current.expenses, PURPLE, "September"],
            ["Net result", net, "#337E74", `${margin}% margin`],
          ].map(([name, amount, color, note]) => (
            <div
              key={String(name)}
              className="min-w-0 rounded-[10px] border border-[#EAE2EF] bg-[#FDFBFE] p-2.5 sm:p-3.5"
            >
              <p className="text-[9px] text-[#86768F] sm:text-[10px]">
                {name}
              </p>
              <p
                className="mt-2 text-[clamp(0.82rem,1.55vw,1.3rem)] font-bold tracking-[-0.045em]"
                style={{ color: String(color) }}
              >
                {money(Number(amount))}
              </p>
              <p className="mt-1 text-[9px] text-[#9A8DA2]">
                {note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-[1.5fr_1fr]">
          <div className="min-w-0 rounded-[11px] border border-[#EAE3EF] p-3.5">
            <p className="text-[11px] font-semibold">
              Income vs. expenses
            </p>
            <p className="mt-1 text-[9px] text-[#9A8BA3]">
              April–September · USD
            </p>
            <div className="mt-2 flex gap-3 text-[9px]">
              <span className="text-[#75449B]">● Income</span>
              <span className="text-[#3D9D92]">● Expenses</span>
            </div>

            <svg
              viewBox="0 0 365 185"
              role="img"
              aria-label="Sample income and expense trends from April to September"
              className="mt-2 w-full"
            >
              <defs>
                <linearGradient
                  id="bkIncomeGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#BCA1D6" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#BCA1D6" stopOpacity="0" />
                </linearGradient>
              </defs>

              {[0, 15000, 30000, 45000, 60000].map((tick) => (
                <g key={tick}>
                  <line
                    x1="43"
                    x2="346"
                    y1={y(tick)}
                    y2={y(tick)}
                    stroke="#EEE6F1"
                    strokeDasharray="3 4"
                  />
                  <text
                    x="35"
                    y={y(tick) + 3}
                    fontSize="9"
                    fill="#9C8EA5"
                    textAnchor="end"
                  >
                    {tick === 0 ? "0" : `${tick / 1000}k`}
                  </text>
                </g>
              ))}

              <path
                d={`${path("income")} L ${x(5)} 153 L ${x(0)} 153 Z`}
                fill="url(#bkIncomeGradient)"
              />

              <path
                d={path("income")}
                fill="none"
                stroke="#75449B"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d={path("expenses")}
                fill="none"
                stroke="#3D9D92"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {months.map((m, i) => (
                <g key={m.label}>
                  <circle
                    cx={x(i)}
                    cy={y(m.income)}
                    r="3.3"
                    fill="#75449B"
                  >
                    <title>
                      {`${m.label} income ${money(m.income)}`}
                    </title>
                  </circle>

                  <circle
                    cx={x(i)}
                    cy={y(m.expenses)}
                    r="3.3"
                    fill="#3D9D92"
                  >
                    <title>
                      {`${m.label} expenses ${money(m.expenses)}`}
                    </title>
                  </circle>

                  <text
                    x={x(i)}
                    y="178"
                    fontSize="10"
                    fill="#86798E"
                    textAnchor="middle"
                  >
                    {m.label}
                  </text>
                </g>
              ))}
            </svg>

            <p className="border-t border-[#F0EAF3] pt-2 text-[10px] text-[#7E7087]">
              September net result:{" "}
              <strong className="text-[#337E74]">{money(net)}</strong>
            </p>
          </div>

          <div className="rounded-[11px] border border-[#EAE3EF] p-3.5">
            <p className="text-[11px] font-semibold">
              Expense breakdown
            </p>
            <p className="mt-1 text-[9px] text-[#9A8BA3]">
              September 2026
            </p>

            <div
              role="img"
              aria-label="Expense distribution by category"
              className="mx-auto mt-4 flex h-[112px] w-[112px] items-center justify-center rounded-full"
              style={{ background: donut }}
            >
              <div className="flex h-[74px] w-[74px] flex-col items-center justify-center rounded-full bg-white text-center">
                <strong className="text-[12px]">
                  {money(totalExpense)}
                </strong>
                <span className="text-[8px] text-[#9988A2]">
                  Total expenses
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-1.5">
              {expenseMix.map((e) => (
                <div
                  key={e.name}
                  className="flex items-center justify-between text-[9px] text-[#75677E]"
                >
                  <span className="flex items-center gap-1.5">
                    <i
                      className="h-2 w-2 rounded-sm"
                      style={{ background: e.color }}
                    />
                    {e.name}
                  </span>
                  <strong>
                    {((e.value / totalExpense) * 100).toFixed(0)}%
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-[11px] border border-[#EAE3EF] p-3.5">
          <p className="mb-2 text-[11px] font-semibold">
            Recent ledger activity
          </p>

          {[
            ["Sep 30", "Customer payment received", 6250],
            ["Sep 27", "Contractor expenses", -4800],
            ["Sep 25", "Software subscriptions", -590],
          ].map(([date, label, value]) => (
            <div
              key={String(date)}
              className="grid grid-cols-[47px_minmax(0,1fr)_auto] gap-2 border-t border-[#F0EAF3] py-2 text-[10px]"
            >
              <span className="text-[#9A8BA3]">{date}</span>
              <span className="truncate text-[#695A73]">{label}</span>
              <span
                className={
                  Number(value) > 0
                    ? "font-semibold text-[#337E74]"
                    : "font-semibold text-[#695A73]"
                }
              >
                {Number(value) > 0 ? "+" : "−"}
                {money(Math.abs(Number(value)))}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

/* ==========================================
   PRICING
========================================== */

function Pricing({
  onChoose,
}: {
  onChoose: (p: Plan["name"]) => void;
}) {
  return (
    <section
      id="bookkeeping-pricing"
      className="scroll-mt-24 bg-[linear-gradient(180deg,#FFFFFF,#F3EDF8,#FFFFFF)] py-20 sm:py-24"
    >
      <div className="container-systems">
        <Heading
          eyebrow="Transparent monthly pricing"
          title="Bookkeeping packages"
          description="Choose a plan for regular bookkeeping. One-time projects, extra transactions, and specialized work can be quoted separately."
        />

        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <Reveal key={p.name} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-[17px] border bg-white p-7 shadow-[0_12px_38px_rgba(82,48,104,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(82,48,104,0.11)] sm:p-8 ${
                  p.popular
                    ? "border-[#A579C3] ring-1 ring-[#C8A8DC]"
                    : "border-[#E4D8EC]"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 right-6 rounded-full bg-[#75449B] px-4 py-1.5 text-[10px] font-bold uppercase text-white">
                    Most popular
                  </span>
                )}

                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#8754A5]">
                      {p.name}
                    </p>

                    <p className="mt-4">
                      <strong className="text-[clamp(2.7rem,4vw,3.5rem)] tracking-[-0.06em]">
                        ${p.price}
                      </strong>
                      <span className="ml-1.5 text-[13px] text-[#8D8095]">
                        / month
                      </span>
                    </p>
                  </div>

                  <BookOpenCheck
                    size={27}
                    className="text-[#8754A5]"
                  />
                </div>

                <p className="mt-4 min-h-[46px] text-[13px] leading-6 text-[#706377]">
                  {p.description}
                </p>

                <div className="mt-6 border-t border-[#EAE1EE] pt-6">
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[#8754A5]">
                    What’s included
                  </p>

                  <ul className="space-y-3">
                    {[
                      `Up to ${p.transactions} transactions/month`,
                      `Up to ${p.accounts} bank/card account${p.accounts === 1 ? "" : "s"}`,
                      ...p.reports.map((r) => `${r} report`),
                      ...(p.invoicing ? ["Invoicing & bill tracking"] : []),
                      ...(p.reminders ? ["Customer payment reminders"] : []),
                      ...(p.payroll
                        ? [`Payroll calculations & payslips — up to ${p.payroll} staff*`]
                        : []),
                      ...(p.reviewCall ? ["Monthly review call"] : []),
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[12px] leading-6 text-[#60536A]"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-1 shrink-0 text-[#8754A5]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8">
                  <p className="mb-5 border-t border-[#EAE1EE] pt-5 text-[12px] leading-6 text-[#817288]">
                    <strong>Best for:</strong> {p.audience}
                  </p>

                  <Link
                    href="#request-proposal"
                    onClick={() => onChoose(p.name)}
                    className={`flex min-h-12 items-center justify-center gap-2 rounded-[8px] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.07em] ${
                      p.popular
                        ? "bg-[#75449B] text-white hover:bg-[#633787]"
                        : "border border-[#BEA4D1] bg-[#F8F3FB] text-[#694184] hover:bg-[#F0E5F7]"
                    }`}
                  >
                    Choose {p.name}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-[15px] border border-[#E3D8EA] bg-white">
          <div className="bg-[#FBF9FD] px-6 py-5">
            <h3 className="text-[20px] font-semibold">
              Compare the packages
            </h3>
            <p className="mt-2 text-[12px] text-[#766A80]">
              A consistent view of each plan’s inclusions and limits.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] border-collapse text-left text-[12px] sm:text-[13px]">
              <thead className="bg-[#F1E8F7]">
                <tr>
                  <th scope="col" className="px-5 py-4">
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th
                      key={p.name}
                      scope="col"
                      className="px-4 py-4 text-center"
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-[#EEE8F2]">
                {compare.map((row) => (
                  <tr key={row.label} className="even:bg-[#FCFAFD]">
                    <th
                      scope="row"
                      className="px-5 py-3.5 font-medium text-[#62546D]"
                    >
                      {row.label}
                    </th>
                    {plans.map((p) => (
                      <td
                        key={p.name}
                        className="px-4 py-3.5 text-center text-[#60516B]"
                      >
                        {row.value(p)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-6 rounded-[12px] border border-[#E4D8EB] bg-white/80 p-5 text-[12px] leading-7 text-[#776B7F]">
          <ShieldCheck
            size={19}
            className="mr-2 inline text-[#8957A9]"
          />
          <strong>Service scope:</strong> *Payroll calculation and payslip
          support is subject to country requirements, delivery capacity,
          and written agreement. Tax filings, statutory remittances,
          audits, and regulated accounting services are not included by
          default. Software subscriptions and excess transactions may
          cost extra.
        </p>

        <div className="mt-8 text-center">
          <Link
            href="#request-proposal"
            className="inline-flex items-center gap-2 rounded-[8px] border border-[#AD8CC3] bg-white px-6 py-3 text-[11px] font-bold uppercase text-[#75449B]"
          >
            Request a custom proposal
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   ACCOUNTING SOFTWARE ECOSYSTEM
========================================== */

type Platform = {
  name: string;
  wordmark: string;
  color: string;
  logo?: string;
};

const platforms: Platform[] = [
  {
    name: "QuickBooks Online",
    wordmark: "QuickBooks",
    color: "#168A36",
    logo: "/images/logos/quickbooks.svg",
  },
  {
    name: "Xero",
    wordmark: "Xero",
    color: "#13A8DC",
    logo: "/images/logos/xero.svg",
  },
  { name: "Sage", wordmark: "sage", color: "#00A778" },
  { name: "Zoho Books", wordmark: "Zoho Books", color: "#B14F75" },
  { name: "Wave", wordmark: "Wave", color: "#2468D8" },
  { name: "Microsoft Excel", wordmark: "Excel", color: "#16804A" },
  { name: "Google Sheets", wordmark: "Sheets", color: "#27885A" },
];

function PlatformCard({ platform }: { platform: Platform }) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <li className="bk-tool-slot relative h-[110px] w-[185px] shrink-0 sm:w-[205px]">
      <div className="bk-tool-card absolute inset-0 flex flex-col items-center justify-center rounded-[14px] border border-[#E4D7EC] bg-white px-4 shadow-[0_7px_20px_rgba(61,34,84,.09)]">
        <div className="flex h-[51px] items-center justify-center">
          {platform.logo && !logoFailed ? (
            <Image
              src={platform.logo}
              alt={`${platform.name} logo`}
              width={125}
              height={47}
              unoptimized
              className="max-h-[47px] max-w-[125px] object-contain"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <strong
              className="text-[23px] tracking-[-0.06em]"
              style={{ color: platform.color }}
            >
              {platform.wordmark}
            </strong>
          )}
        </div>

        <span className="mt-1 text-[10px] text-[#82758C]">
          {platform.name}
        </span>
      </div>
    </li>
  );
}

function AccountingTools() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const manualRef = useRef<HTMLUListElement>(null);
  const pendingScrollRef = useRef(0);

  const [visible, setVisible] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [manual, setManual] = useState(false);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.05 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sync = () => setTabHidden(document.hidden);
    sync();

    document.addEventListener("visibilitychange", sync);

    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  const spotlight = (container: HTMLElement) => {
    const box = container.getBoundingClientRect();
    const center = box.left + box.width / 2;

    container.querySelectorAll<HTMLElement>(".bk-tool-slot").forEach((slot) => {
      const rect = slot.getBoundingClientRect();

      const influence = Math.max(
        0,
        1 -
          Math.abs(rect.left + rect.width / 2 - center) /
            (rect.width * 1.65)
      );

      const card = slot.querySelector<HTMLElement>(".bk-tool-card");
      if (!card) return;

      card.style.transform =
        `translateY(${-23 * influence}px) scale(${1 + 0.15 * influence})`;

      card.style.borderColor =
        influence > 0.6 ? "#BF9BDA" : "#E4D7EC";

      card.style.boxShadow =
        `0 ${8 + 20 * influence}px ${20 + 35 * influence}px rgba(94,52,124,${(
          0.09 +
          0.14 * influence
        ).toFixed(3)})`;

      slot.style.zIndex = String(Math.round(influence * 10));
    });
  };

  useEffect(() => {
    if (reduced || manual || !visible || tabHidden) return;

    const viewport = viewportRef.current;
    if (!viewport) return;

    let frame = 0;

    const tick = () => {
      spotlight(viewport);
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frame);
  }, [reduced, manual, visible, tabHidden]);

  const updateManual = () => {
    const el = manualRef.current;
    if (!el) return;

    setCanPrevious(el.scrollLeft > 3);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 3);
    spotlight(el);
  };

  useEffect(() => {
    if (!manual) return;

    const el = manualRef.current;
    if (!el) return;

    el.scrollLeft = Math.min(
      pendingScrollRef.current,
      el.scrollWidth - el.clientWidth
    );

    const raf = requestAnimationFrame(updateManual);

    window.addEventListener("resize", updateManual);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", updateManual);
    };
  }, [manual]);

  const toggle = () => {
    if (!manual && trackRef.current) {
      try {
        const matrix = new DOMMatrixReadOnly(
          getComputedStyle(trackRef.current).transform
        );

        pendingScrollRef.current = Math.max(0, -matrix.m41);
      } catch {
        pendingScrollRef.current = 0;
      }
    }

    setManual((v) => !v);
  };

  const browse = (direction: -1 | 1) => {
    const el = manualRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction * 221,
      behavior: reduced ? "auto" : "smooth",
    });
  };

  const stopped = !visible || tabHidden || hovered || focused;

  return (
    <section
      ref={sectionRef}
      id="accounting-software"
      aria-labelledby="accounting-software-heading"
      className="relative overflow-hidden border-y border-[#EEE7F2] bg-[linear-gradient(180deg,#FBFAFC,#F5F0F8)] py-16 sm:py-20"
    >
      <div className="container-systems">
        <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8754A5]">
              Accounting software ecosystem
            </p>

            <h2
              id="accounting-software-heading"
              className="text-[clamp(2rem,3.2vw,3rem)] font-semibold leading-[1.12] tracking-[-0.05em]"
            >
              The tools you use.
              <span className="block text-[#75449B]">
                A clearer bookkeeping process.
              </span>
            </h2>
          </div>

          <p className="max-w-[480px] text-[14px] leading-8 text-[#6D6274]">
            Your accounting software should fit your workflow. Tell us
            what you use, and we’ll discuss access, compatibility,
            and reporting needs before agreeing on the scope.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#E7DFEB] pt-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#493B50]">
              Accounting platforms & tools
            </p>
            <p className="mt-1 text-[12px] text-[#807587]">
              Familiar tools, presented in a Cloudlem-style carousel
            </p>
          </div>

          {!reduced && (
            <div className="flex items-center gap-2">
              {manual && (
                <>
                  <button
                    type="button"
                    onClick={() => browse(-1)}
                    disabled={!canPrevious}
                    aria-label="Previous platforms"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8C9E2] bg-white text-[#75449B] disabled:opacity-35"
                  >
                    <ChevronLeft size={19} />
                  </button>

                  <button
                    type="button"
                    onClick={() => browse(1)}
                    disabled={!canNext}
                    aria-label="Next platforms"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8C9E2] bg-white text-[#75449B] disabled:opacity-35"
                  >
                    <ChevronRight size={19} />
                  </button>
                </>
              )}

              <button
                type="button"
                aria-pressed={manual}
                onClick={toggle}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#D8C9E2] bg-white px-4 py-2 text-[12px] font-semibold text-[#75449B] hover:bg-[#F8F2FC]"
              >
                {manual ? <Play size={15} /> : <Pause size={15} />}
                {manual ? "Resume auto-scroll" : "Pause & browse"}
              </button>
            </div>
          )}
        </div>
      </div>

      {!reduced && !manual && (
        <div
          ref={viewportRef}
          role="region"
          aria-label="Scrolling accounting platforms"
          tabIndex={0}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setFocused(false);
            }
          }}
          className="relative overflow-hidden py-14"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-[#F8F5FA] to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-[#F8F5FA] to-transparent sm:w-20" />

          <div
            ref={trackRef}
            className="bk-tools-track flex w-max items-center"
            style={{
              animationPlayState: stopped ? "paused" : "running",
            }}
          >
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 gap-4 pr-4"
              >
                {platforms.map((p) => (
                  <PlatformCard
                    key={`${copy}-${p.name}`}
                    platform={p}
                  />
                ))}
              </ul>
            ))}
          </div>
        </div>
      )}

      {!reduced && manual && (
        <div className="py-12">
          <ul
            ref={manualRef}
            tabIndex={0}
            aria-label="Browse accounting platforms"
            onScroll={updateManual}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                browse(-1);
              }

              if (e.key === "ArrowRight") {
                e.preventDefault();
                browse(1);
              }
            }}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-9 pt-8 [scrollbar-width:thin]"
          >
            {platforms.map((p) => (
              <PlatformCard key={p.name} platform={p} />
            ))}
          </ul>

          <p className="text-center text-[11px] text-[#807587]">
            Swipe or use the arrows to browse
          </p>
        </div>
      )}

      {reduced && (
        <div className="container-systems mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="rounded-[13px] border border-[#E4D7EC] bg-white p-5 text-center"
            >
              <strong
                style={{ color: p.color }}
                className="text-[20px]"
              >
                {p.wordmark}
              </strong>
              <p className="mt-2 text-[11px] text-[#82758C]">
                {p.name}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="container-systems">
        <p className="mt-1 text-center text-[11px] leading-6 text-[#85798C]">
          Software compatibility is agreed during scoping. Product names
          and logos do not imply certification or a partnership.
        </p>
      </div>

      <style>{`
        @keyframes bkToolsMarquee {
          from { transform: translate3d(0,0,0); }
          to { transform: translate3d(-50%,0,0); }
        }

        .bk-tools-track {
          animation: bkToolsMarquee 35s linear infinite;
          will-change: transform;
        }

        .bk-tool-card {
          transform-origin: center;
        }

        @media (prefers-reduced-motion: reduce) {
          .bk-tools-track {
            animation: none !important;
          }

          .bk-tool-card {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ==========================================
   CO-FOUNDER
========================================== */

function CoFounder() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section
      id="bookkeeping-cofounder"
      className="border-t border-[#E9E3ED] bg-[#F7F6F8] py-9 text-[#181818]"
    >
      <div className="container-systems grid items-stretch gap-5 lg:grid-cols-[0.78fr_1.12fr_0.78fr] lg:gap-8">
        <div className="flex items-center">
          <div className="w-full rounded-[9px] border border-[#E7DDEC] bg-white px-6 py-8 shadow-sm">
            <Quote
              size={24}
              strokeWidth={1.5}
              className="mb-5 text-[#8750AC]"
              aria-hidden="true"
            />

            <p className="text-[17px] font-medium leading-[1.55] tracking-[-0.02em]">
              Bookkeeping should make your finances easier to understand,
              not add another layer of complexity.
            </p>

            <div className="mt-5 h-px w-9 bg-[#A77BC5]" />

            <p className="mt-3 text-[10px] font-semibold text-[#756B7B]">
              Cloudlem Bookkeeping · Our approach
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-[9px] border border-[#E7DDEC] bg-[#F0E9F4] px-7 py-8">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#8952AB]">
            Our Co-Founder
          </p>

          <h2 className="text-[2rem] font-semibold tracking-[-0.045em] sm:text-[2.25rem]">
            Mueen Khan.
          </h2>

          <p className="mt-2 text-[11px] font-semibold text-[#8250A1]">
            Co-Founder, Bookkeeping
          </p>

          <p className="mt-5 text-[13px] leading-7 text-[#554C5C]">
            Our bookkeeping offering focuses on clearly organized records,
            accurate reconciliation, and financial reports businesses
            can understand. Every engagement starts with the client’s needs,
            an agreed scope, and practical communication throughout the work.
          </p>

          <Link
            href="/about"
            className="group mt-6 inline-flex w-fit items-center gap-3 rounded-[5px] bg-[#75449B] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white hover:bg-[#633787]"
          >
            Meet our story
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-[9px] border border-[#E7DDEC] bg-[#E8DEED] lg:min-h-[350px]">
          {!photoFailed ? (
            <Image
              src="/images/bookkeeping/mueen-cofounder.jpeg"
              alt="Mueen K., Cloudlem Co-Founder"
              fill
              sizes="(min-width:1024px) 28vw, 100vw"
              className="object-cover object-center"
              onError={() => setPhotoFailed(true)}
            />
          ) : (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center bg-[linear-gradient(135deg,#F3ECF8,#DFD1E9)] text-[#784E94]">
              <strong className="text-6xl tracking-[-0.07em]">
                MK
              </strong>
              <span className="mt-3 text-[11px]">
                Co-Founder, Cloudlem
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   TESTIMONIALS
========================================== */

function Testimonials() {
  return (
    <section
      id="bookkeeping-testimonials"
      className="bg-white py-20 sm:py-24"
    >
      <div className="container-systems">
        <Heading
          eyebrow="Feedback on Mueen’s work"
          title="Words from bookkeeping clients"
          description="Feedback from bookkeeping and financial-record assignments attributed to Mueen; shown as supplied."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <Reveal key={t.context} className="h-full">
              <article className="flex h-full flex-col rounded-[15px] border border-[#E7DFED] bg-[#FAF8FC] p-7 shadow-[0_7px_26px_rgba(53,30,67,.04)] sm:p-8">
                <div className="flex items-start justify-between gap-3">
                  <Quote size={25} className="text-[#8750AC]" />

                  {t.rating && (
                    <div
                      aria-label={`${t.rating} out of 5 stars`}
                      className="flex items-center gap-0.5 text-[#E39737]"
                    >
                      {Array.from(
                        { length: t.rating },
                        (_, i) => (
                          <Star
                            key={i}
                            size={15}
                            fill="currentColor"
                          />
                        )
                      )}

                      <strong className="ml-1 text-[11px] text-[#5A4A60]">
                        {t.rating.toFixed(1)}
                      </strong>
                    </div>
                  )}
                </div>

                <p className="mt-5 text-[12px] font-semibold text-[#75449B]">
                  {t.context}
                </p>

                <blockquote className="mt-4 flex-1 text-[14px] italic leading-[1.9] text-[#554C5C]">
                  “{t.quote}”
                </blockquote>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-[#E4D9EB] pt-5">
                  <p className="text-[13px] font-semibold text-[#30243B]">
                    {t.name}
                  </p>

                  {t.date && (
                    <p className="text-[11px] text-[#85778B]">
                      {t.date}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   FINANCIAL INTEGRITY & PROFESSIONAL ETHICS
========================================== */

const integrityPrinciples = [
  {
    title: "Accurate client records",
    description:
      "Clients provide complete, authentic, accurate, and timely financial information, including relevant statements, invoices, receipts, and supporting documents.",
    icon: FileCheck2,
  },
  {
    title: "Ethical bookkeeping",
    description:
      "Cloudlem handles agreed bookkeeping work carefully, treats financial information confidentially, and raises identified discrepancies for clarification.",
    icon: ShieldCheck,
  },
  {
    title: "Tax and compliance readiness",
    description:
      "Organized books support tax preparation and compliance reviews. Tax preparation and filing, when available, require eligible clients, qualified professionals, and a separate scope.",
    icon: Scale,
  },
  {
    title: "Shared accountability",
    description:
      "Clients disclose known issues and respond to questions; Cloudlem communicates findings and follows agreed review, reporting, and delivery responsibilities.",
    icon: Handshake,
  },
];

function FinancialIntegrity() {
  return (
    <section
      id="bookkeeping-ethics"
      aria-label="Financial integrity and professional ethics"
      className="scroll-mt-24 border-y border-[#E9DFEF] bg-[#FBF9FD] py-20 sm:py-24"
    >
      <div className="container-systems">
        <Heading
          eyebrow="Our professional commitment"
          title="Financial integrity & ethical bookkeeping"
          description="Reliable financial reporting begins with accurate information, transparent communication, and shared responsibility."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {integrityPrinciples.map((principle) => {
            const Icon = principle.icon;
            return (
              <Reveal key={principle.title} className="h-full">
                <article className="flex h-full items-start gap-4 rounded-[14px] border border-[#E6DAED] bg-white p-6 shadow-[0_7px_24px_rgba(72,44,90,.045)] sm:p-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#F2E9F8] text-[#75449B]">
                    <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#30243B]">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-7 text-[#706477]">
                      {principle.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-7 rounded-[13px] border border-[#DED0E8] bg-[#F4EDF9] p-6 sm:p-7">
          <h3 className="flex items-center gap-2 text-[15px] font-semibold text-[#523466]">
            <ShieldCheck size={19} aria-hidden="true" />
            Client responsibility for financial accuracy
          </h3>
          <p className="mt-3 text-[13px] leading-7 text-[#665670]">
            Financial records and reports depend on the quality of the information
            supplied. Incomplete, misleading, or delayed records can affect
            reporting accuracy and tax-related decisions. Accurate bookkeeping
            helps reduce avoidable reporting errors, but cannot guarantee that
            taxes, filing deadlines, or penalties will be unaffected.
          </p>
          <p className="mt-3 text-[12px] leading-6 text-[#7C6B86]">
            Tax services are not part of standard bookkeeping packages. Where
            offered, eligibility, jurisdiction, qualified professional involvement,
            and responsibilities will be confirmed in a separate written agreement.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   MAIN BOOKKEEPING HOMEPAGE
========================================== */

const inputClass =
  "mt-2 block w-full rounded-[8px] border border-[#DFD5E5] bg-white px-4 py-3 text-[13px] text-[#30243B] outline-none transition-colors placeholder:text-[#A69BAE] focus:border-[#8754AA] focus:ring-2 focus:ring-[#8754AA]/15";

const selectableServices = [
  services[0].title,
  "Yearly Bookkeeping",
  ...services.slice(1).map((service) => service.title),
  "Other / Custom Bookkeeping Support",
];

const engagementTypes = [
  "Monthly contract",
  "Yearly bookkeeping",
  "One-time project",
  "Not sure yet",
] as const;

const yearlyArrangements = [
  {
    value: "Annual contract — ongoing bookkeeping",
    description: "Regular bookkeeping throughout the year under an annual agreement.",
  },
  {
    value: "Once-a-year project — full-year records",
    description: "Organize and reconcile an entire year's records as one project.",
  },
] as const;

export default function BookkeepingPage() {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [engagement, setEngagement] = useState("");
  const [yearlyArrangement, setYearlyArrangement] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [servicesError, setServicesError] = useState(false);
  const [notice, setNotice] = useState("");
  const [noticeKind, setNoticeKind] = useState<"success" | "error">("success");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const chooseEngagement = (value: string) => {
    setEngagement(value);
    if (value !== "Yearly bookkeeping") setYearlyArrangement("");
    if (value !== "Monthly contract") setSelectedPackage("");
  };

  const chooseMonthlyPackage = (name: Plan["name"]) => {
    chooseEngagement("Monthly contract");
    setSelectedPackage(name);
  };

  const toggleService = (name: string, checked: boolean) => {
    setSelectedServices((current) =>
      checked ? [...current, name] : current.filter((item) => item !== name)
    );
    if (checked) setServicesError(false);
  };

  const handleProposal = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    if (selectedServices.length === 0) {
      setServicesError(true);
      setNoticeKind("error");
      setNotice("Please select at least one bookkeeping service.");
      document.getElementById("bookkeeping-service-choices")?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
      return;
    }

    const data = new FormData(form);
    const get = (field: string) => String(data.get(field) ?? "").trim();
    const servicesRequested = data.getAll("services").map(String);

    const details = [
      "CLOUDLEM BOOKKEEPING INQUIRY",
      "",
      `Engagement: ${engagement}`,
      ...(engagement === "Yearly bookkeeping"
        ? [`Yearly Arrangement: ${yearlyArrangement}`]
        : []),
      `Bookkeeping Services: ${servicesRequested.join(", ")}`,
      `Selected Package: ${engagement === "Monthly contract" ? (selectedPackage || "Custom / Not selected") : "Custom quote / Not applicable"}`,
      `Country / Region: ${get("country") || "Not specified"}`,
      `Accounting Software: ${get("software") || "Not specified"}`,
      `Client Financial Accuracy Acknowledgment: ${get("financialAccuracyAcknowledged") === "yes" ? "Confirmed — client agrees to provide complete, authentic, accurate, and timely relevant records, disclose known discrepancies, and supply supporting documentation if engaged." : "Not confirmed"}`,
      "",
      "PROJECT REQUIREMENTS:",
      get("message"),
    ].join("\n");

    const payload = {
      serviceTitle: servicesRequested.length === 1
        ? `Bookkeeping - ${servicesRequested[0]}`
        : "Bookkeeping - Multiple Services",
      name: get("name"),
      email: get("email"),
      company: get("company"),
      details,
      website: get("website"),
    };

    setIsSubmitting(true);
    setNotice("");
    try {
      const response = await fetch("/api/service-inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result: { success?: boolean; error?: string } = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(result.error || "Unable to submit your inquiry.");
      }

      setNoticeKind("success");
      setNotice("Success! Your bookkeeping inquiry has been submitted. Our team will review your requirements.");
      form.reset();
      setSelectedPackage("");
      setEngagement("");
      setYearlyArrangement("");
      setSelectedServices([]);
      setServicesError(false);
    } catch (error) {
      setNoticeKind("error");
      setNotice(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-w-0 overflow-x-clip bg-white text-[#30243B]">

      {/* HERO */}

      <section
        id="bookkeeping-home"
        className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_80%_33%,rgba(229,214,239,.55),transparent_50%),linear-gradient(120deg,#FFFFFF_0%,#FAF8FC_54%,#F1EAF7_100%)]"
      >
        <div className="container-systems grid min-h-[670px] items-center gap-12 pb-20 pt-36 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:pb-24 lg:pt-40">
          <Reveal>
            <p className="inline-flex items-center rounded-full border border-[#E1D1EA] bg-[#F2E9F8] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-[#8753A5]">
              Cloudlem Bookkeeping Services
            </p>

            <h1 className="mt-6 max-w-[660px] text-[clamp(2.65rem,4.6vw,4.65rem)] font-semibold leading-[1.08] tracking-[-0.06em]">
              Financial clarity for{" "}
              <span className="text-[#202c2e]">
                growing businesses.
              </span>
            </h1>

            <p className="mt-6 max-w-[580px] text-[15px] leading-[1.85] text-[#695E72] sm:text-[16px]">
              Bookkeeping support built around your business. Organize
              transactions, reconcile accounts, and understand your
              financial position, whether you need an ongoing contract
              or a one-time project.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#request-proposal"
                className="inline-flex min-h-12 items-center gap-2 rounded-[7px] bg-[#75449B] px-6 py-3 text-[11px] font-bold uppercase text-white hover:bg-[#633787]"
              >
                Request a proposal
                <ArrowRight size={16} />
              </Link>

              <Link
                href="#bookkeeping-services"
                className="inline-flex min-h-12 items-center gap-2 rounded-[7px] border border-[#D8C7E3] bg-white px-6 py-3 text-[11px] font-bold uppercase text-[#5E3D73] hover:bg-[#F6EEF9]"
              >
                Explore services
                <ArrowUpRight size={16} />
              </Link>

              <Link
                href="#bookkeeping-pricing"
                className="inline-flex min-h-12 items-center gap-2 rounded-[7px] border border-[#D8C7E3] bg-white px-6 py-3 text-[11px] font-bold uppercase text-[#75449B] hover:bg-[#F6EEF9]"
              >
                View packages
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-[11px] text-[#7C6E84]">
              {[
                "Monthly bookkeeping",
                "Yearly bookkeeping",
                "One-time projects",
                "International inquiries",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2"
                >
                  <Check size={14} className="text-[#8754AA]" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <FinancialDashboard />
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}

      <section
        id="bookkeeping-services"
        className="scroll-mt-24 bg-[#F7F4FA] py-20 sm:py-24"
      >
        <div className="container-systems">
          <Heading
            eyebrow="What we do"
            title="Bookkeeping services"
            description="From routine monthly bookkeeping to financial cleanup, explore the work you can discuss with Cloudlem."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => {
              const Icon = s.icon;

              return (
                <Reveal key={s.title} className="h-full">
                  <article className="group flex h-full min-h-[208px] flex-col rounded-[11px] border border-[#E8E1ED] bg-white p-5 shadow-[0_3px_12px_rgba(81,49,103,.025)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C4A7D8] hover:shadow-[0_15px_30px_rgba(81,49,103,.08)]">
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-[9px] bg-[#F1E8F7] text-[#8353A5]">
                        <Icon size={21} strokeWidth={1.7} />
                      </span>

                      <span className="text-[9px] font-bold uppercase text-[#A28BAB]">
                        {s.tag}
                      </span>
                    </div>

                    <h3 className="mt-5 text-[16px] font-semibold leading-[1.25]">
                      {s.title}
                    </h3>

                    <p className="mt-3 text-[12px] leading-[1.75] text-[#746A7A]">
                      {s.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT OPTIONS */}

      <section className="bg-white py-20 sm:py-24">
        <div className="container-systems">
          <Heading
            eyebrow="Flexible arrangements"
            title="Three ways to work with Cloudlem"
            description="Choose monthly support, an annual bookkeeping arrangement, or a clearly scoped one-time project."
          />

          <div className="mx-auto grid max-w-[1190px] gap-5 lg:grid-cols-3">
            {[
              {
                name: "Monthly bookkeeping",
                engagement: "Monthly contract",
                eyebrow: "Recurring services",
                icon: CalendarCheck2,
                description:
                  "Consistent monthly categorization, reconciliations, and agreed financial reporting.",
                points: [
                  "Recurring monthly workflow",
                  "Defined tasks and reports",
                  "Regular communication",
                ],
              },
              {
                name: "Yearly bookkeeping",
                engagement: "Yearly bookkeeping",
                eyebrow: "Annual services",
                icon: CalendarCheck2,
                description:
                  "Choose an ongoing annual bookkeeping contract or a once-a-year project for your full year's records.",
                points: [
                  "Annual contract with regular bookkeeping",
                  "Or one-time full-year record processing",
                  "Custom scope and pricing",
                ],
              },
              {
                name: "One-time projects",
                engagement: "One-time project",
                eyebrow: "Project-based services",
                icon: FolderSync,
                description:
                  "Targeted support for cleanup, catch-up work, bookkeeping setup, and reconciliation.",
                points: [
                  "Clearly defined scope",
                  "Agreed deliverables",
                  "Optional ongoing support",
                ],
              },
            ].map((m) => {
              const Icon = m.icon;

              return (
                <Reveal key={m.name} className="h-full">
                  <article className="flex h-full flex-col rounded-[14px] border border-[#DCC9E9] bg-[#F3EBF8] p-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8351A3]">
                      {m.eyebrow}
                    </p>

                    <Icon size={28} className="mt-6 text-[#75449B]" />

                    <h3 className="mt-5 text-[24px] font-semibold">
                      {m.name}
                    </h3>

                    <p className="mt-4 text-[14px] leading-7 text-[#695873]">
                      {m.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {m.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-center gap-2 text-[12px] text-[#66566F]"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-[#8754A5]"
                          />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="#request-proposal"
                      onClick={() => chooseEngagement(m.engagement)}
                      className="mt-auto inline-flex items-center gap-2 pt-8 text-[12px] font-bold text-[#75449B]"
                    >
                      Discuss an engagement
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Pricing onChoose={chooseMonthlyPackage} />

      <FinancialIntegrity />

      {/* LIGHT CTA */}

      <section className="border-y border-[#DCCBE8] bg-[#EFE5F6] py-12">
        <div className="container-systems flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8455A1]">
              Ready to begin?
            </p>
            <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.7rem)] font-semibold tracking-[-0.045em]">
              Bring more clarity to your finances.
            </h2>
            <p className="mt-3 text-[13px] text-[#6F5F78]">
              Tell us what needs organizing. We’ll discuss a suitable
              way forward.
            </p>
          </div>

          <Link
            href="#request-proposal"
            className="inline-flex min-h-11 items-center gap-2 rounded-[6px] bg-[#75449B] px-6 py-3 text-[11px] font-bold uppercase text-white hover:bg-[#633787]"
          >
            Request a proposal
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <AccountingTools />

      {/* INDUSTRIES */}

      <section className="bg-white py-20 sm:py-24">
        <div className="container-systems">
          <Heading
            eyebrow="Who we work with"
            title="Industries we support"
            description="Different businesses have different bookkeeping needs. We review your processes and records before defining an engagement."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((item) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} className="h-full">
                  <article className="h-full rounded-[10px] border border-[#EAE3ED] bg-white p-5 transition-colors hover:border-[#C5A9D6]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#F0E8F6] text-[#8654A5]">
                      <Icon size={20} />
                    </span>

                    <h3 className="mt-4 text-[15px] font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-7 text-[#746A7A]">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT CLOUDLEM */}

      <section className="bg-[#F8F5FA] py-20 sm:py-24">
        <div className="container-systems grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Photo
              src="/images/services/finance-accounting.png"
              alt="Bookkeeping records workspace"
              label="Business-focused bookkeeping support"
            />
          </Reveal>

          <Reveal>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.17em] text-[#8754A5]">
              Part of Cloudlem
            </p>

            <h2 className="text-[clamp(2.05rem,3.4vw,3.1rem)] font-semibold leading-[1.12] tracking-[-0.05em]">
              A financial operations partner you can talk to.
            </h2>

            <p className="mt-6 text-[14px] leading-8 text-[#6D6274]">
              Cloudlem brings technology, business operations, and
              financial-record services together. Our bookkeeping offering
              centers on clearly defined requirements, practical
              workflows, and agreed deliverables.
            </p>

            <p className="mt-4 text-[14px] leading-8 text-[#6D6274]">
              Whether you need to address overdue records or want
              continuing support, start by telling us what your
              business needs.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 text-[12px] font-bold uppercase text-[#75449B]"
            >
              Learn about Cloudlem
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CoFounder />
      <Testimonials />

      {/* FAQ */}

      <section className="bg-[#F8F5FC] py-20 sm:py-24">
        <div className="container-systems grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.17em] text-[#8754A5]">
              Frequently asked questions
            </p>

            <h2 className="text-[clamp(2rem,3.2vw,3rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
              Good questions deserve clear answers.
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-[#73667B]">
              A few things businesses ask before discussing an engagement.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-[10px] border border-[#E7DDEB] bg-white px-6 py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[14px] font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    size={18}
                    className="shrink-0 text-[#8754A5] transition-transform group-open:rotate-45"
                  />
                </summary>

                <p className="mt-4 border-t border-[#EEE7F2] pt-4 text-[13px] leading-7 text-[#746A7B]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* PROPOSAL FORM */}

      <section
        id="request-proposal"
        className="scroll-mt-24 bg-[linear-gradient(145deg,#F1E8F7_0%,#FFFFFF_90%)] py-20 sm:py-24"
      >
        <div className="container-systems grid items-start gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.17em] text-[#8754A5]">
              Let’s work together
            </p>

            <h2 className="text-[clamp(2.3rem,4vw,3.9rem)] font-semibold leading-[1.1] tracking-[-0.06em]">
              Bring more clarity to your{" "}
              <span className="text-[#75449B]">
                bookkeeping.
              </span>
            </h2>

            <p className="mt-6 max-w-[490px] text-[15px] leading-8 text-[#716478]">
              Tell us about the bookkeeping work your company would
              like to outsource. We can discuss monthly packages,
              yearly arrangements, one-time engagements, and a suitable proposal.
            </p>

            <div className="mt-9 space-y-6 border-t border-[#E1D5E9] pt-7">
              <div className="flex gap-3">
                <Handshake
                  size={22}
                  className="shrink-0 text-[#8754A5]"
                />
                <div>
                  <p className="text-[14px] font-semibold">
                    For business clients
                  </p>
                  <p className="mt-1 text-[12px] leading-6 text-[#786A80]">
                    This form is for companies requesting bookkeeping
                    services, not job applications.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <LockKeyhole
                  size={22}
                  className="shrink-0 text-[#8754A5]"
                />
                <div>
                  <p className="text-[14px] font-semibold">
                    Keep financial information private
                  </p>
                  <p className="mt-1 text-[12px] leading-6 text-[#786A80]">
                    Do not include financial documents, credentials,
                    or full account numbers in an initial inquiry.
                  </p>
                </div>
              </div>

              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#75449B]"
              >
                <Mail size={17} />
                {EMAIL}
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-[16px] border border-[#E4D7EC] bg-white p-6 shadow-[0_18px_60px_rgba(72,44,90,.09)] sm:p-9">
              <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8754A5]">
                Client inquiry
              </p>

              <h3 className="mt-2 text-[28px] font-semibold tracking-[-0.04em]">
                Request a proposal
              </h3>

              <p className="mt-2 text-[13px] leading-6 text-[#796D80]">
                Select your engagement and the services you need. We'll discuss a suitable proposal.
              </p>

              <form
                className="mt-7 space-y-4"
                onSubmit={handleProposal}
              >
                <div
  aria-hidden="true"
  className="absolute -left-[10000px] h-px w-px overflow-hidden"
>
  <label htmlFor="bookkeeping-website">
    Leave this field empty
  </label>
  <input
    id="bookkeeping-website"
    type="text"
    name="website"
    tabIndex={-1}
    autoComplete="off"
  />
</div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-[12px] font-semibold">
                    Full name *
                    <input
                      name="name"
                      required
                      maxLength={100}
                      autoComplete="name"
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </label>

                  <label className="block text-[12px] font-semibold">
                    Company name *
                    <input
                      name="company"
                      required
                      maxLength={120}
                      autoComplete="organization"
                      className={inputClass}
                      placeholder="Business name"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-[12px] font-semibold">
                    Work email *
                    <input
                      name="email"
                      type="email"
                      required
                      maxLength={254}
                      autoComplete="email"
                      className={inputClass}
                      placeholder="you@company.com"
                    />
                  </label>

                  <label className="block text-[12px] font-semibold">
                    Country / region
                    <input
                      name="country"
                      autoComplete="country-name"
                      maxLength={80}
                      className={inputClass}
                      placeholder="Your location"
                    />
                  </label>
                </div>

                <fieldset className="space-y-3">
                  <legend className="text-[12px] font-semibold">
                    Engagement type *
                  </legend>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {engagementTypes.map((value) => (
                      <label
                        key={value}
                        className={`flex cursor-pointer items-center gap-2.5 rounded-[9px] border px-3.5 py-3 text-[12px] transition-colors ${
                          engagement === value
                            ? "border-[#8754AA] bg-[#F6EFFA] text-[#55346C]"
                            : "border-[#E2D8E8] bg-white text-[#675A70] hover:border-[#C7A9DB]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="engagement"
                          value={value}
                          checked={engagement === value}
                          onChange={() => chooseEngagement(value)}
                          required
                          className="h-4 w-4 shrink-0 accent-[#75449B]"
                        />
                        {value}
                      </label>
                    ))}
                  </div>
                </fieldset>

                {engagement === "Yearly bookkeeping" && (
                  <fieldset className="space-y-3 rounded-[10px] border border-[#DCC9E9] bg-[#FBF8FD] p-4">
                    <legend className="px-1 text-[12px] font-semibold text-[#55346C]">
                      What kind of yearly bookkeeping? *
                    </legend>
                    {yearlyArrangements.map((option) => (
                      <label key={option.value} className="flex cursor-pointer items-start gap-3">
                        <input
                          type="radio"
                          name="yearlyArrangement"
                          value={option.value}
                          required
                          checked={yearlyArrangement === option.value}
                          onChange={() => setYearlyArrangement(option.value)}
                          className="mt-1 h-4 w-4 shrink-0 accent-[#75449B]"
                        />
                        <span>
                          <strong className="block text-[12px] text-[#493752]">{option.value}</strong>
                          <span className="mt-1 block text-[11px] leading-5 text-[#84748C]">{option.description}</span>
                        </span>
                      </label>
                    ))}
                    <p className="text-[11px] leading-5 text-[#84748C]">
                      Annual scope, billing, and pricing are confirmed in your proposal.
                    </p>
                  </fieldset>
                )}

                <fieldset id="bookkeeping-service-choices" className="space-y-3 scroll-mt-28">
                  <legend className="text-[12px] font-semibold">
                    Bookkeeping services *
                  </legend>
                  <p className="text-[11px] text-[#85778B]">
                    Select all that apply ({selectedServices.length} selected).
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {selectableServices.map((name) => {
                      const selected = selectedServices.includes(name);
                      return (
                        <label
                          key={name}
                          className={`flex cursor-pointer items-start gap-2.5 rounded-[8px] border px-3 py-2.5 text-[11px] leading-5 transition-colors ${
                            selected
                              ? "border-[#A77FC3] bg-[#F5EDF9] text-[#54376A]"
                              : "border-[#E7DEEC] bg-white text-[#6B5E74] hover:border-[#C7A9DB]"
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="services"
                            value={name}
                            checked={selected}
                            onChange={(event) => toggleService(name, event.target.checked)}
                            className="mt-0.5 h-4 w-4 shrink-0 accent-[#75449B]"
                          />
                          {name}
                        </label>
                      );
                    })}
                  </div>
                  {servicesError && (
                    <p role="alert" className="text-[12px] font-medium text-[#AD3151]">
                      Please select at least one bookkeeping service.
                    </p>
                  )}
                </fieldset>

                {engagement === "Monthly contract" && (
                  <label className="block text-[12px] font-semibold">
                    Monthly package
                    <select
                      name="package"
                      className={inputClass}
                      value={selectedPackage}
                      onChange={(event) => setSelectedPackage(event.target.value)}
                    >
                      <option value="">Not sure / custom scope</option>
                      {plans.map((plan) => (
                        <option key={plan.name} value={plan.name}>
                          {plan.name} — ${plan.price}/month
                        </option>
                      ))}
                    </select>
                  </label>
                )}

                <label className="block text-[12px] font-semibold">
                  Accounting software
                  <input
                    name="software"
                    maxLength={100}
                    className={inputClass}
                    placeholder="QuickBooks, Xero, Excel, etc."
                  />
                </label>

                <label className="block text-[12px] font-semibold">
                  Tell us about your project *
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    maxLength={3500}
                    rows={4}
                    className={`${inputClass} resize-y leading-6`}
                    placeholder="Describe your bookkeeping needs, approximate transaction volume, and timeline."
                  />
                </label>

                <label className="flex items-start gap-3 rounded-[10px] border border-[#E2D5EB] bg-[#FBF8FD] p-4 text-[12px] leading-6 text-[#665670]">
                  <input
                    type="checkbox"
                    name="financialAccuracyAcknowledged"
                    value="yes"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-[#75449B]"
                  />
                  <span>
                    <strong className="block font-semibold text-[#493554]">
                      Client financial accuracy acknowledgment *
                    </strong>
                    I understand that accurate bookkeeping and financial reporting
                    depend on complete, authentic, and timely information. If an
                    engagement proceeds, I agree to disclose known discrepancies
                    and provide relevant financial records and supporting documents
                    through an agreed secure process.
                  </span>
                </label>

                <label className="flex items-start gap-3 text-[11px] leading-6 text-[#776B7E]">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-[#75449B]"
                  />
                  <span>
                    I agree that Cloudlem may use this information
                    to respond to my business inquiry.
                  </span>
                </label>

                <button
                 type="submit"
                    disabled={isSubmitting}
                         className="flex min-h-12 w-full items-center justify-center gap-2 rounded-[7px] bg-[#75449B] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.09em] text-white hover:bg-[#633787] disabled:cursor-not-allowed disabled:opacity-60"
>
                          {isSubmitting
                         ? "Submitting..."
                           : "Submit Proposal Request"}

  {!isSubmitting && <ArrowRight size={17} />}
</button>

                {notice && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`rounded-[8px] border px-4 py-3 text-[12px] leading-6 ${
                      noticeKind === "success"
                        ? "border-[#BCE1CD] bg-[#EEFAF2] text-[#256447]"
                        : "border-[#F0C2CD] bg-[#FFF1F4] text-[#992C49]"
                    }`}
                  >
                    {notice}
                  </p>
                )}

              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="border-t border-[#EAE2ED] bg-white">
        <div className="container-systems flex flex-wrap items-center justify-between gap-4 py-7">
          <span className="text-[12px] text-[#827488]">
            Cloudlem Bookkeeping · Part of Cloudlem
          </span>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase text-[#75449B]"
          >
            Explore Cloudlem
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
