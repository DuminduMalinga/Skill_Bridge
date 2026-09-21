import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

type SkillStatus = "met" | "partial" | "missing";

interface SkillRow {
  title: string;
  category: string;
  status: SkillStatus;
  pct: number;
  pctLabel: string;
  priority?: "High Priority";
  note: string;
  noteIcon: string;
  score: string;
  action: { label: string; icon: string; to: string; emphasis: "primary" | "muted" | "quiet" };
}

const FILTERS: { key: "all" | SkillStatus; label: string }[] = [
  { key: "all", label: "All Skills (12)" },
  { key: "missing", label: "Gaps to Close (4)" },
  { key: "partial", label: "Partially Met (3)" },
  { key: "met", label: "Met (5)" },
];

const SKILLS: SkillRow[] = [
  { title: "Semantic HTML5 & Modern CSS", category: "Core Web", status: "met", pct: 100, pctLabel: "100% Met", note: "Verified via Ashcombe University COMP0004 Coursework", noteIcon: "school", score: "Full Mastery", action: { label: "Verified ✓", icon: "verified", to: "", emphasis: "muted" } },
  { title: "JavaScript Fundamentals & ES6+", category: "Core Web", status: "met", pct: 100, pctLabel: "100% Met", note: "Verified: Syllabus + Algorithmic Sandbox", noteIcon: "code", score: "Level 4 Certified", action: { label: "Verified ✓", icon: "verified", to: "", emphasis: "muted" } },
  { title: "Component Architecture & React Basics", category: "Framework", status: "met", pct: 100, pctLabel: "100% Met", note: "Verified in Ashcombe University Hackathon 2024 Winner", noteIcon: "emoji_events", score: "Production Ready", action: { label: "Verified ✓", icon: "verified", to: "", emphasis: "muted" } },
  { title: "Responsive Design & Flexbox/Grid", category: "Core Web", status: "met", pct: 100, pctLabel: "100% Met", note: "Verified: Ashcombe University HCI Lab Assessment (94%)", noteIcon: "devices", score: "Mastered", action: { label: "Verified ✓", icon: "verified", to: "", emphasis: "muted" } },
  { title: "Git & GitHub Version Control", category: "Tooling", status: "met", pct: 100, pctLabel: "100% Met", note: "Verified: 42 Commits & Rebase History", noteIcon: "commit", score: "Industry Ready", action: { label: "Verified ✓", icon: "verified", to: "", emphasis: "muted" } },
  { title: "TypeScript Generics & Strict Typing", category: "Architecture", status: "partial", pct: 65, pctLabel: "65% Partial", note: "Coursework baseline present; lacks utility generics", noteIcon: "info", score: "65 / 100", action: { label: "View courses", icon: "arrow_forward", to: "/courses", emphasis: "quiet" } },
  { title: "State Management & Zustand/Redux", category: "Framework", status: "partial", pct: 55, pctLabel: "55% Partial", note: "Basic Context API verified; missing store middleware", noteIcon: "info", score: "55 / 100", action: { label: "View courses", icon: "arrow_forward", to: "/courses", emphasis: "quiet" } },
  { title: "Web Accessibility (WCAG 2.2 AA)", category: "Standards", status: "partial", pct: 60, pctLabel: "60% Partial", note: "Semantic tags met; missing ARIA live regions & focus traps", noteIcon: "info", score: "60 / 100", action: { label: "View courses", icon: "arrow_forward", to: "/courses", emphasis: "quiet" } },
  { title: "Next.js 14 App Router & SSR", category: "Framework", status: "missing", pct: 15, pctLabel: "15% Missing", priority: "High Priority", note: "Not covered in university curriculum; critical in 90% roles", noteIcon: "cancel", score: "15 / 100", action: { label: "View courses", icon: "arrow_forward", to: "/courses", emphasis: "primary" } },
  { title: "Distributed Caching & Redis State", category: "Architecture", status: "missing", pct: 10, pctLabel: "10% Missing", priority: "High Priority", note: "Gap identified in 82% of junior engineer postings", noteIcon: "cancel", score: "10 / 100", action: { label: "View courses", icon: "arrow_forward", to: "/courses", emphasis: "primary" } },
  { title: "Automated End-to-End Testing (Playwright)", category: "Tooling", status: "missing", pct: 20, pctLabel: "20% Missing", note: "Academic unit tests only; lacks browser integration suite", noteIcon: "info", score: "20 / 100", action: { label: "View projects", icon: "terminal", to: "/projects", emphasis: "quiet" } },
  { title: "Production CI/CD & Northgate Security Edge", category: "DevOps", status: "missing", pct: 25, pctLabel: "25% Missing", note: "No automated build/deploy workflows in public repos", noteIcon: "info", score: "25 / 100", action: { label: "View projects", icon: "terminal", to: "/projects", emphasis: "quiet" } },
];

export default function SkillGapPage() {
  const [filter, setFilter] = useState<"all" | SkillStatus>("all");
  const visibleSkills = SKILLS.filter((s) => filter === "all" || s.status === filter);

  return (
    <DashboardLayout>
      <div className="flex flex-col w-full pb-16 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap items-center gap-2 font-label-sm text-label-sm">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-medium">
              <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              Skill Assessment &amp; Parity Report
            </span>
            <span className="text-outline">/</span>
            <span className="text-on-surface-variant flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-primary">apartment</span>
              Benchmark: Tier-1 Junior Frontend Engineering Openings (London / Remote Hubs)
            </span>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant font-caption text-caption self-start sm:self-auto">
            <span className="inline-block w-2 h-2 rounded-full bg-tertiary" />
            Live Index Synced: 24h ago • 148 active roles scanned
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Skill Gap Analysis</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Detailed competency breakdown comparing your academic coursework, portfolio commits, and target role requirements.
            </p>
          </div>
          <div className="relative inline-flex items-center self-start md:self-auto">
            <div className="bg-surface-container-lowest shadow-sm rounded-xl px-4 py-2.5 flex items-center gap-3 cursor-pointer hover:bg-surface-container-low transition-all">
              <span className="material-symbols-outlined text-primary text-[20px]">badge</span>
              <div className="text-left">
                <span className="block font-caption text-caption text-outline">Target Role</span>
                <span className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-1">
                  Frontend Developer
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">expand_more</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 border-b lg:border-b-0 pb-6 lg:pb-0">
              <div className="relative w-40 h-40 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" fill="transparent" r="68" stroke="#EEF2FF" strokeWidth="12" />
                  <circle className="transition-all duration-1000 ease-out" cx="80" cy="80" fill="transparent" r="68" stroke="#4F46E5" strokeDasharray="427.2" strokeDashoffset="136.7" strokeLinecap="round" strokeWidth="12" />
                  <circle className="opacity-90" cx="80" cy="80" fill="transparent" r="68" stroke="#006e4b" strokeDasharray="427.2" strokeDashoffset="252" strokeLinecap="round" strokeWidth="4" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="font-display-hero text-display-hero text-on-surface font-extrabold leading-none tracking-tight">68<span className="text-primary text-2xl">%</span></span>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider mt-1">Readiness</span>
                </div>
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>
                  +8% this month
                </div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">Industry Readiness Score</h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Cohort percentile: <span className="font-semibold text-on-surface">Top 15%</span> of Ashcombe University 3rd Year CS undergraduates.
                </p>
                <div className="text-on-surface-variant font-caption text-caption pt-1 flex items-center justify-center sm:justify-start gap-1">
                  <span className="material-symbols-outlined text-[15px] text-tertiary">check_circle</span>
                  <span>8 of 12 Core Competencies Cleared</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-surface-container-low flex flex-col justify-between">
                <div className="flex items-center justify-between text-on-surface-variant mb-2">
                  <span className="material-symbols-outlined text-[20px] text-tertiary">menu_book</span>
                  <span className="font-label-sm text-label-sm bg-surface-container-lowest px-1.5 py-0.5 rounded text-tertiary font-bold">41%</span>
                </div>
                <div>
                  <div className="font-headline-md text-headline-md font-bold text-on-surface">5</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">Academic Verified</div>
                  <div className="font-caption text-caption text-outline mt-0.5">Ashcombe University Syllabus</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low flex flex-col justify-between">
                <div className="flex items-center justify-between text-on-surface-variant mb-2">
                  <span className="material-symbols-outlined text-[20px] text-primary">terminal</span>
                  <span className="font-label-sm text-label-sm bg-surface-container-lowest px-1.5 py-0.5 rounded text-primary font-bold">27%</span>
                </div>
                <div>
                  <div className="font-headline-md text-headline-md font-bold text-on-surface">3</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">Project Verified</div>
                  <div className="font-caption text-caption text-outline mt-0.5">GitHub Repos</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low flex flex-col justify-between">
                <div className="flex items-center justify-between text-on-surface-variant mb-2">
                  <span className="material-symbols-outlined text-[20px] text-error">warning</span>
                  <span className="font-label-sm text-label-sm bg-error-container text-on-error-container px-1.5 py-0.5 rounded font-bold">32%</span>
                </div>
                <div>
                  <div className="font-headline-md text-headline-md font-bold text-on-surface">4</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">Critical Gaps</div>
                  <div className="font-caption text-caption text-outline mt-0.5">Priority to fill</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-primary-fixed flex flex-col justify-between">
                <div className="flex items-center justify-between text-on-primary-fixed mb-2">
                  <span className="material-symbols-outlined text-[20px]">timelapse</span>
                  <span className="font-label-sm text-label-sm font-bold">Target: 85%</span>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm font-bold text-on-primary-fixed">~3.5 wks</div>
                  <div className="font-label-sm text-label-sm text-on-primary-fixed-variant">To Parity</div>
                  <div className="font-caption text-caption text-on-primary-fixed-variant mt-0.5">At 6 hrs/week</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          <div className="inline-flex p-1 bg-surface-container-low rounded-xl">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`filter-tab px-4 py-1.5 rounded-lg font-label-md text-label-md transition-all ${
                  filter === f.key ? "bg-surface-container-lowest text-on-surface font-semibold shadow-sm" : "text-on-surface-variant hover:text-on-surface"
                }`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 font-caption text-caption text-on-surface-variant">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container" />
              Met (100%)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              Partial (50-70%)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
              Missing (0-25%)
            </span>
          </div>
        </div>

        <div className="w-full bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-surface-container-low flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
            <div className="w-5/12 sm:w-4/12">Competency &amp; Category</div>
            <div className="w-4/12 sm:w-5/12 hidden md:block">Current vs. Market Target</div>
            <div className="w-5/12 sm:w-3/12 text-right">Verification &amp; Next Action</div>
          </div>
          <div className="divide-y divide-surface-container-high/40">
            {visibleSkills.map((skill) => (
              <div key={skill.title} className="skill-row p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-surface-bright transition-all">
                <div className="md:w-4/12 flex items-start gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      skill.status === "met"
                        ? "bg-surface-container-low text-tertiary"
                        : skill.status === "partial"
                        ? "bg-[#FEF3C7] text-[#B45309]"
                        : "bg-error-container/60 text-error"
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-[20px]"
                      style={skill.status !== "missing" ? { fontVariationSettings: "'FILL' 1" } : undefined}
                    >
                      {skill.status === "met" ? "check_circle" : skill.status === "partial" ? "change_circle" : "radio_button_unchecked"}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-headline-sm text-body-lg font-bold text-on-surface">{skill.title}</span>
                      <span className="font-label-sm text-caption px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-medium">{skill.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-0.5 rounded-full font-label-sm text-caption font-semibold ${
                          skill.status === "met"
                            ? "bg-[#ECFDF5] text-[#047857]"
                            : skill.status === "partial"
                            ? "bg-[#FEF3C7] text-[#B45309]"
                            : "bg-surface-container-high text-on-surface"
                        }`}
                      >
                        {skill.pctLabel}
                      </span>
                      {skill.priority ? (
                        <span className="font-caption text-caption text-error font-medium flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-[12px]">flag</span> {skill.priority}
                        </span>
                      ) : (
                        <span className="font-caption text-caption text-outline">Target: 100%</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="md:w-5/12 space-y-1.5">
                  <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden flex">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        skill.status === "met" ? "bg-tertiary-container" : skill.status === "partial" ? "bg-[#F59E0B]" : "bg-outline opacity-40"
                      }`}
                      style={{ width: `${skill.pct}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center font-caption text-caption text-on-surface-variant">
                    <span className={`flex items-center gap-1 ${skill.status === "met" ? "text-tertiary font-medium" : skill.status === "partial" ? "text-[#B45309] font-medium" : ""}`}>
                      <span className={`material-symbols-outlined text-[13px] ${skill.status === "missing" ? "text-error" : ""}`}>{skill.noteIcon}</span> {skill.note}
                    </span>
                    <span className={`font-semibold ${skill.status === "met" ? "text-tertiary" : skill.status === "missing" ? "text-outline" : "text-on-surface"}`}>{skill.score}</span>
                  </div>
                </div>
                <div className="md:w-3/12 flex items-center justify-between md:justify-end gap-3">
                  {skill.action.emphasis === "muted" ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low text-tertiary font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[16px]">{skill.action.icon}</span> {skill.action.label}
                    </span>
                  ) : (
                    <Link
                      className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg transition-colors font-label-sm text-label-sm font-semibold ${
                        skill.action.emphasis === "primary"
                          ? "bg-primary-container text-on-primary hover:bg-primary shadow-sm"
                          : "bg-surface-container-low text-on-surface hover:bg-surface-container-high"
                      }`}
                      to={skill.action.to}
                    >
                      {skill.action.label} <span className="material-symbols-outlined text-[16px]">{skill.action.icon}</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary-container/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-start gap-4 max-w-3xl relative z-10">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center shrink-0 text-primary">
              <span className="material-symbols-outlined text-[28px]">rocket_launch</span>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight">You&apos;re missing 4 of 12 core skills for Frontend Developer</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Closing these 4 high-priority gaps will elevate your readiness score from <span className="font-bold text-on-surface">68% to 92%</span>, placing you in the{" "}
                <span className="font-semibold text-tertiary">top 5% of applicant pools</span> across London tech hubs.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0 relative z-10">
            <Link className="px-5 py-2.5 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md font-semibold text-center flex items-center justify-center gap-2" to="/projects">
              <span className="material-symbols-outlined text-[18px]">hub</span>
              Explore matching micro-projects
            </Link>
            <Link className="px-5 py-2.5 rounded-lg bg-primary-container text-on-primary hover:bg-primary transition-colors font-label-md text-label-md font-semibold text-center flex items-center justify-center gap-2 shadow-sm" to="/courses">
              See recommended courses
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
