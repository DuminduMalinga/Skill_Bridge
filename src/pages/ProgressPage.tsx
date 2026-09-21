import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

type BadgeStatus = "earned" | "progress" | "locked";

interface Badge {
  title: string;
  description: string;
  icon: string;
  iconGradient: string;
  status: BadgeStatus;
  fastTrack?: boolean;
  footerLeft: string;
  footerLeftIcon: string;
  footerRight: string;
  progressPct?: number;
}

const BADGE_TABS: { key: "all" | BadgeStatus; label: string }[] = [
  { key: "all", label: "All Badges (20)" },
  { key: "earned", label: "Earned (12)" },
  { key: "progress", label: "In Progress (4)" },
  { key: "locked", label: "Locked (4)" },
];

const BADGES: Badge[] = [
  {
    title: "First Project Delivered",
    description: "Completed first production industry brief with Nimbus Pay webhook queue engine.",
    icon: "workspace_premium",
    iconGradient: "from-amber-400 to-amber-600",
    status: "earned",
    footerLeft: "Nimbus Pay Verified",
    footerLeftIcon: "verified",
    footerRight: "Oct 2025",
  },
  {
    title: "Skill Gap: SQL Schema",
    description: "Closed gap via Ashcombe University Database Systems and normalized Nimbus Pay ledger schema design.",
    icon: "database",
    iconGradient: "from-emerald-500 to-teal-700",
    status: "earned",
    footerLeft: "Ashcombe University Faculty",
    footerLeftIcon: "school",
    footerRight: "Sep 2025",
  },
  {
    title: "TypeScript Virtuoso",
    description: "Level 4 Certified Generics, conditional mapped types, and custom AST parser rules.",
    icon: "security",
    iconGradient: "from-blue-500 to-indigo-700",
    status: "earned",
    footerLeft: "SkillBridge L4",
    footerLeftIcon: "verified",
    footerRight: "Oct 2025",
  },
  {
    title: "Fast-Track Token Holder",
    description: "Qualified for Nimbus Pay Engineering Round 1 bypass on summer 2026 associate cohort.",
    icon: "confirmation_number",
    iconGradient: "from-amber-500 via-orange-500 to-red-500",
    status: "earned",
    fastTrack: true,
    footerLeft: "Token ID: #MNZ-882",
    footerLeftIcon: "key",
    footerRight: "Oct 2025",
  },
  {
    title: "Clean Commits & CI/CD",
    description: "40+ rebase clean commits verified on GitHub with lint and semantic release hooks.",
    icon: "account_tree",
    iconGradient: "from-purple-500 to-indigo-800",
    status: "earned",
    footerLeft: "Git Validator",
    footerLeftIcon: "verified",
    footerRight: "Sep 2025",
  },
  {
    title: "E2E Testing Architect",
    description: "Zero flaky tests across 60 Playwright assertions in dynamic chaos mock harness.",
    icon: "science",
    iconGradient: "from-teal-500 to-emerald-800",
    status: "earned",
    footerLeft: "100% Passed",
    footerLeftIcon: "fact_check",
    footerRight: "Aug 2025",
  },
  {
    title: "Rapid Learner",
    description: "Completed 2 recommended bridge courses with high distinction in under 3 weeks.",
    icon: "local_fire_department",
    iconGradient: "from-rose-500 to-red-600",
    status: "earned",
    footerLeft: "2.4x Velocity",
    footerLeftIcon: "speed",
    footerRight: "Aug 2025",
  },
  {
    title: "Peer Review Contributor",
    description: "Reviewed 5 student code solutions in Ashcombe University Lab with architectural feedback.",
    icon: "forum",
    iconGradient: "from-cyan-500 to-blue-600",
    status: "earned",
    footerLeft: "5 Approved",
    footerLeftIcon: "thumb_up",
    footerRight: "Sep 2025",
  },
  {
    title: "Design System Tokenizer",
    description: "Figma Labs Token Sync: 3 of 4 milestones finished in Figma Labs design token sprint.",
    icon: "token",
    iconGradient: "",
    status: "progress",
    progressPct: 75,
    footerLeft: "Next: DTCG export",
    footerLeftIcon: "",
    footerRight: "1 Step Remaining",
  },
  {
    title: "State Machine Master",
    description: "Wise FX Rate Cache: Zustand integration & finite state transition checkpoint pending.",
    icon: "device_hub",
    iconGradient: "",
    status: "progress",
    progressPct: 50,
    footerLeft: "Next: FX Sync Hook",
    footerLeftIcon: "",
    footerRight: "2 Steps Left",
  },
  {
    title: "Full-Stack Deployer",
    description: "Deploy 3 production apps to Skyline/AWS with zero-downtime rolling CI/CD triggers.",
    icon: "cloud_upload",
    iconGradient: "",
    status: "locked",
    footerLeft: "Requirement: 3/3 Apps",
    footerLeftIcon: "",
    footerRight: "1 of 3 Done",
  },
  {
    title: "Interview Exemption Trio",
    description: "Earn 3 verified fast-track bypass tokens from tier-1 technology corporate partners.",
    icon: "vpn_key",
    iconGradient: "",
    status: "locked",
    footerLeft: "Requirement: 3 Tokens",
    footerLeftIcon: "",
    footerRight: "1 of 3 Held",
  },
  {
    title: "Open Source Maintainer",
    description: "Have an upstream Pull Request merged into an officially tracked partner framework repo.",
    icon: "volunteer_activism",
    iconGradient: "",
    status: "locked",
    footerLeft: "Requirement: 1 Merged PR",
    footerLeftIcon: "",
    footerRight: "In Review",
  },
  {
    title: "Zero-Downtime Resilience",
    description: "Pass automated chaos fault injection suite with 99.99% availability during peak load test.",
    icon: "shield_with_heart",
    iconGradient: "",
    status: "locked",
    footerLeft: "Requirement: 99.99% SLA",
    footerLeftIcon: "",
    footerRight: "Locked",
  },
];

export default function ProgressPage() {
  const [filter, setFilter] = useState<"all" | BadgeStatus>("all");
  const visibleBadges = BADGES.filter((b) => filter === "all" || b.status === filter);

  return (
    <DashboardLayout>
      <div className="flex flex-col w-full pb-space-xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <div className="flex items-center gap-space-xs text-on-surface-variant font-caption text-caption mb-1">
              <span className="hover:text-primary transition-colors cursor-pointer">Dashboard</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-on-surface font-medium">Progress &amp; Achievements</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Progress &amp; Achievements</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-2xl">
              Track your trajectory toward industry benchmark readiness, milestone tokens, and verified engineering credentials.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex items-center gap-space-sm bg-surface-container-lowest px-3.5 py-2 rounded-xl shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] border border-black/[0.03]">
              <div className="flex flex-col">
                <span className="font-caption text-[11px] text-on-surface-variant leading-none">Target: Junior Frontend &amp; Systems</span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="font-label-md text-label-md text-primary font-semibold">Current: 68%</span>
                  <span className="text-outline-variant font-caption text-caption">•</span>
                  <span className="font-caption text-caption text-tertiary-container font-medium flex items-center">
                    <span className="material-symbols-outlined text-[14px] mr-0.5">trending_up</span>+24% in 90d
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center bg-surface-container-low p-1 rounded-xl shadow-[0_1px_2px_0_rgba(0,0,0,0.02)]">
              <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-sm text-label-sm shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all">Last 6 Months</button>
              <button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors">Last Quarter</button>
              <button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors">All Time</button>
            </div>
          </div>
        </div>

        <div className="w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] border border-black/[0.03] mb-space-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-6 pb-4 border-b border-surface-container">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-headline-sm text-headline-sm text-on-surface">Industry Readiness Score Over Time</h2>
                <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed/30 text-tertiary font-label-sm text-[11px] font-semibold">Top 25% Ashcombe University Cohort</span>
              </div>
              <p className="font-caption text-caption text-on-surface-variant mt-0.5">Your score evaluated against peer cohorts and UK Tier-1 tech company recruitment thresholds</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-caption font-caption">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary-container ring-2 ring-primary-fixed" />
                <span className="text-on-surface font-medium">Maya Lin (68%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-0.5 bg-tertiary-container rounded" />
                <span className="text-on-surface-variant">Tier-1 Threshold (75%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-0.5 bg-outline-variant rounded" />
                <span className="text-on-surface-variant">Ashcombe University CS Median (56%)</span>
              </div>
            </div>
          </div>
          <div className="relative w-full overflow-x-auto">
            <div className="min-w-[760px] relative">
              <svg className="w-full h-72 overflow-visible select-none" preserveAspectRatio="none" viewBox="0 0 920 320">
                <defs>
                  <linearGradient id="primaryAreaGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="projectedGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0" />
                  </linearGradient>
                  <filter height="140%" id="shadowPoint" width="140%" x="-20%" y="-20%">
                    <feDropShadow dx="0" dy="2" floodColor="#4f46e5" floodOpacity="0.3" stdDeviation="3" />
                  </filter>
                </defs>
                <g className="text-[11px] font-caption fill-outline">
                  <line stroke="#f3f3f3" strokeWidth="1" x1="60" x2="880" y1="40" y2="40" />
                  <text textAnchor="end" x="36" y="44">80%</text>
                  <line stroke="#006e4b" strokeDasharray="4,4" strokeOpacity="0.4" strokeWidth="1.5" x1="60" x2="880" y1="65" y2="65" />
                  <text className="fill-tertiary-container font-semibold" textAnchor="end" x="36" y="69">75%</text>
                  <line stroke="#f3f3f3" strokeWidth="1" x1="60" x2="880" y1="130" y2="130" />
                  <text textAnchor="end" x="36" y="134">60%</text>
                  <line stroke="#f3f3f3" strokeWidth="1" x1="60" x2="880" y1="210" y2="210" />
                  <text textAnchor="end" x="36" y="214">40%</text>
                  <line stroke="#f3f3f3" strokeWidth="1" x1="60" x2="880" y1="280" y2="280" />
                  <text textAnchor="end" x="36" y="284">20%</text>
                </g>
                <g className="text-[12px] font-caption fill-on-surface-variant font-medium">
                  <text textAnchor="middle" x="80" y="306">May</text>
                  <text textAnchor="middle" x="210" y="306">Jun</text>
                  <text textAnchor="middle" x="340" y="306">Jul</text>
                  <text textAnchor="middle" x="470" y="306">Aug</text>
                  <text textAnchor="middle" x="600" y="306">Sep</text>
                  <text className="fill-primary font-bold" textAnchor="middle" x="730" y="306">Oct (Current)</text>
                  <text className="fill-outline" textAnchor="middle" x="850" y="306">Nov/Dec</text>
                </g>
                <path d="M 80,218 Q 210,202 340,186 T 600,158 T 730,146" fill="none" stroke="#c7c4d8" strokeDasharray="3,3" strokeWidth="2" />
                <line stroke="#006e4b" strokeDasharray="6,4" strokeOpacity="0.6" strokeWidth="1.5" x1="80" x2="880" y1="65" y2="65" />
                <path d="M 80,194 C 145,178 145,174 210,174 C 275,174 275,158 340,158 C 405,158 405,138 470,138 C 535,138 535,122 600,122 C 665,122 665,98 730,98 L 730,280 L 80,280 Z" fill="url(#primaryAreaGrad)" />
                <path d="M 730,98 C 790,75 800,50 850,40 L 850,280 L 730,280 Z" fill="url(#projectedGrad)" />
                <path d="M 730,98 C 790,75 800,50 850,40" fill="none" stroke="#4f46e5" strokeDasharray="5,5" strokeOpacity="0.7" strokeWidth="2.5" />
                <path d="M 80,194 C 145,178 145,174 210,174 C 275,174 275,158 340,158 C 405,158 405,138 470,138 C 535,138 535,122 600,122 C 665,122 665,98 730,98" fill="none" stroke="#4f46e5" strokeLinecap="round" strokeWidth="3" />
                <circle cx="80" cy="194" fill="#ffffff" r="4.5" stroke="#4f46e5" strokeWidth="2.5" />
                <circle cx="210" cy="174" fill="#ffffff" r="4.5" stroke="#4f46e5" strokeWidth="2.5" />
                <circle cx="340" cy="158" fill="#ffffff" r="4.5" stroke="#4f46e5" strokeWidth="2.5" />
                <circle cx="470" cy="138" fill="#ffffff" r="5.5" stroke="#4f46e5" strokeWidth="3" />
                <circle cx="600" cy="122" fill="#ffffff" r="5.5" stroke="#4f46e5" strokeWidth="3" />
                <circle cx="730" cy="98" fill="#4f46e5" filter="url(#shadowPoint)" r="7" stroke="#ffffff" strokeWidth="3" />
                <circle cx="850" cy="40" fill="#ffffff" r="4" stroke="#4f46e5" strokeDasharray="2,2" strokeWidth="2" />
                <g className="cursor-pointer">
                  <line stroke="#4f46e5" strokeDasharray="2,2" strokeWidth="1.5" x1="470" x2="470" y1="138" y2="108" />
                  <rect fill="#1e1b4b" height="22" rx="6" width="160" x="390" y="86" />
                  <text className="fill-white text-[10.5px] font-label-sm font-medium" textAnchor="middle" x="470" y="101">Closed Git CI/CD &amp; Docker</text>
                </g>
                <g className="cursor-pointer">
                  <line stroke="#4f46e5" strokeDasharray="2,2" strokeWidth="1.5" x1="600" x2="600" y1="122" y2="72" />
                  <rect fill="#006e4b" height="22" rx="6" width="160" x="520" y="50" />
                  <text className="fill-white text-[10.5px] font-label-sm font-medium" textAnchor="middle" x="600" y="65">Nimbus Pay Project Accepted</text>
                </g>
                <g className="cursor-pointer">
                  <line stroke="#4f46e5" strokeWidth="1.5" x1="730" x2="730" y1="98" y2="40" />
                  <rect fill="#4f46e5" height="22" rx="6" width="160" x="650" y="18" />
                  <text className="fill-white text-[11px] font-label-sm font-semibold" textAnchor="middle" x="730" y="33">Current: Top 25% (68%)</text>
                </g>
                <g>
                  <rect fill="#f3f3f3" height="20" rx="5" width="140" x="760" y="50" />
                  <text className="fill-on-surface-variant text-[10px] font-caption font-medium" textAnchor="middle" x="830" y="64">Goal: Fast-Track (75%+)</text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-xl">
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] border border-black/[0.03] flex flex-col justify-between hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-space-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">school</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Courses Completed</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#047857] font-label-sm text-[11px] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">check_circle</span> 100% On-Track
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-headline-lg text-headline-lg text-on-surface font-bold">4</span>
                <span className="font-caption text-caption text-tertiary-container font-semibold">+2 this quarter</span>
              </div>
              <p className="font-caption text-caption text-on-surface-variant line-clamp-2">Skyline Next.js 14, Advanced TypeScript, Ashcombe University HCI Lab, Compilers &amp; OS</p>
            </div>
            <div className="mt-4 pt-3 border-t border-surface-container flex items-center justify-between font-caption text-caption text-on-surface-variant">
              <span>Verified Credential Points</span>
              <span className="text-on-surface font-semibold">120 / 120 ECTS</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] border border-black/[0.03] flex flex-col justify-between hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-space-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-[#b45309]">
                    <span className="material-symbols-outlined text-[20px]">terminal</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Projects Delivered</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-[#b45309] font-label-sm text-[11px] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">stars</span> 1 Fast-Track Earned
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-headline-lg text-headline-lg text-on-surface font-bold">3</span>
                <span className="font-caption text-caption text-on-surface-variant font-medium">1 In Progress • Figma Labs</span>
              </div>
              <p className="font-caption text-caption text-on-surface-variant line-clamp-2">Nimbus Pay Webhook Dispatcher (Passed), Deliveroo Map, Ashcombe University Open PR</p>
            </div>
            <div className="mt-4 pt-3 border-t border-surface-container flex items-center justify-between font-caption text-caption text-on-surface-variant">
              <span>Production Acceptance Rate</span>
              <span className="text-on-surface font-semibold">100% (Passed Review)</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] border border-black/[0.03] flex flex-col justify-between hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-space-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-tertiary-fixed/30 flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-[20px]">bolt</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Skills Gained (Q3/Q4)</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#047857] font-label-sm text-[11px] font-semibold">75% Verified</span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-headline-lg text-headline-lg text-on-surface font-bold">8 Skills</span>
                <span className="font-caption text-caption text-tertiary-container font-semibold">+3 Verified by Employers</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {["Next.js 14", "TypeScript Generics", "Redis", "Playwright E2E", "Zustand"].map((s) => (
                  <span key={s} className="px-2 py-0.5 bg-surface-container-low text-on-surface-variant font-caption text-[11px] rounded-full">{s}</span>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-surface-container flex items-center justify-between font-caption text-caption text-on-surface-variant">
              <span>Verified by Nimbus Pay &amp; Ashcombe University</span>
              <span className="text-on-surface font-semibold">6 of 8 Validated</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md mb-space-lg">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-headline-md text-headline-md text-on-surface">Milestone Badges &amp; Credentials</h2>
                <span className="text-outline-variant font-caption text-caption">•</span>
                <span className="font-caption text-caption text-on-surface-variant font-medium">12 of 20 Unlocked • 4 In Progress</span>
              </div>
              <p className="font-caption text-caption text-on-surface-variant mt-0.5">Tamper-evident cryptographically signed engineering tokens recognized by partner companies</p>
            </div>
            <div className="flex items-center bg-surface-container-low p-1 rounded-xl shadow-[0_1px_2px_0_rgba(0,0,0,0.02)]">
              {BADGE_TABS.map((t) => (
                <button
                  key={t.key}
                  className={`px-3.5 py-1.5 rounded-lg font-label-sm text-label-sm transition-all ${
                    filter === t.key ? "bg-surface-container-lowest text-primary shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]" : "text-on-surface-variant hover:text-on-surface"
                  }`}
                  onClick={() => setFilter(t.key)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {visibleBadges.map((badge) => (
              <div
                key={badge.title}
                className={`rounded-xl p-space-md shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] flex flex-col justify-between hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-all duration-200 ${
                  badge.status === "locked"
                    ? "bg-surface-container-lowest/60 opacity-60 hover:opacity-100 border border-black/[0.03] shadow-none"
                    : badge.fastTrack
                    ? "bg-gradient-to-b from-surface-container-lowest to-amber-500/[0.03] border border-amber-500/20"
                    : badge.status === "progress"
                    ? "bg-surface-container-lowest border-2 border-primary-container/30"
                    : "bg-surface-container-lowest border border-black/[0.03]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${
                        badge.status === "locked"
                          ? "bg-surface-container-high text-on-surface-variant"
                          : badge.status === "progress"
                          ? "bg-surface-container text-primary-container"
                          : `bg-gradient-to-br text-white ${badge.iconGradient}${badge.fastTrack ? " shadow-md ring-2 ring-amber-300" : ""}`
                      }`}
                    >
                      <span className="material-symbols-outlined text-[26px]">{badge.icon}</span>
                    </div>
                    {badge.status === "earned" && !badge.fastTrack && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-[#047857] font-label-sm text-[11px] font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">check</span> Earned
                      </span>
                    )}
                    {badge.fastTrack && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-[#b45309] font-label-sm text-[11px] font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">stars</span> Fast-Track
                      </span>
                    )}
                    {badge.status === "progress" && (
                      <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-[11px] font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">sync</span> {badge.progressPct}% Done
                      </span>
                    )}
                    {badge.status === "locked" && (
                      <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px] font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">lock</span> Locked
                      </span>
                    )}
                  </div>
                  <h3 className="font-headline-sm text-[16px] leading-snug text-on-surface font-semibold mb-1">{badge.title}</h3>
                  <p className="font-caption text-caption text-on-surface-variant mb-3">{badge.description}</p>
                </div>
                {badge.status === "progress" ? (
                  <div className="pt-3 border-t border-surface-container flex flex-col gap-1.5">
                    <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary-container h-full rounded-full" style={{ width: `${badge.progressPct}%` }} />
                    </div>
                    <div className="flex items-center justify-between text-caption font-caption text-on-surface-variant">
                      <span>{badge.footerLeft}</span>
                      <span className="text-primary font-semibold">{badge.footerRight}</span>
                    </div>
                  </div>
                ) : (
                  <div className={`pt-3 border-t flex items-center justify-between text-caption font-caption ${badge.status === "locked" ? "border-surface-container text-outline" : badge.fastTrack ? "border-amber-200/50" : "border-surface-container"}`}>
                    {badge.status === "locked" ? (
                      <>
                        <span>{badge.footerLeft}</span>
                        <span>{badge.footerRight}</span>
                      </>
                    ) : (
                      <>
                        <span className={`font-medium flex items-center gap-1 ${badge.fastTrack ? "text-[#b45309] font-semibold" : badge.footerLeftIcon === "speed" || badge.footerLeftIcon === "verified" && badge.footerLeft === "SkillBridge L4" ? "text-primary" : "text-[#006e4b]"}`}>
                          <span className="material-symbols-outlined text-[13px]">{badge.footerLeftIcon}</span> {badge.footerLeft}
                        </span>
                        <span className="text-outline">{badge.footerRight}</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-space-lg w-full bg-surface-container-lowest rounded-xl p-space-md shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] border border-black/[0.03] flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-10 h-10 rounded-xl bg-tertiary-fixed/30 text-tertiary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">verified_user</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-label-md text-label-md text-on-surface font-bold">Public Credential Profile Active</h4>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-[#047857] font-label-sm text-[11px] font-semibold">Live URL</span>
              </div>
              <p className="font-caption text-caption text-on-surface-variant">Employers at Nimbus Pay, Wise, and Deliveroo can verify your token signatures at skillbridge.io/p/maya-lin</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button className="px-3.5 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">share</span> Share Profile
            </button>
            <button className="px-3.5 py-2 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md shadow-sm transition-colors flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">download</span> Export PDF Dossier
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
