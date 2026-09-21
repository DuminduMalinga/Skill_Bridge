import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

type TabKey = "all" | "applied" | "review" | "progress" | "completed";

const TABS: { key: TabKey; label: string }[] = [
  { key: "all", label: "All (3)" },
  { key: "applied", label: "Applied (1)" },
  { key: "review", label: "Under Review (1)" },
  { key: "progress", label: "In Progress (1)" },
  { key: "completed", label: "Completed (0)" },
];

export default function ApplicationsPage() {
  const [tab, setTab] = useState<TabKey>("all");

  function isVisible(cardStatus: TabKey) {
    return tab === "all" || tab === cardStatus;
  }

  function confirmWithdraw() {
    if (window.confirm("Are you sure you want to withdraw your application for Wise: Global FX Real-Time Rate Cache?")) {
      window.alert("Application withdrawn. Your queue position has been released.");
    }
  }

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto w-full pb-space-xl">
        <div className="flex items-center justify-between py-space-sm">
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
            <Link className="hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
            <span className="material-symbols-outlined text-[16px] text-outline-variant">chevron_right</span>
            <Link className="hover:text-primary transition-colors" to="/projects">Projects</Link>
            <span className="material-symbols-outlined text-[16px] text-outline-variant">chevron_right</span>
            <span className="text-on-surface font-semibold">My Applications</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/50 text-on-secondary-fixed-variant font-label-sm text-label-sm">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
            Cohort Fall 2025 Active
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mt-space-xs mb-space-lg">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">My Applications</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold">3 Active</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Track your industry project briefs, live code reviews, and guaranteed interview fast-track milestones.
            </p>
          </div>
          <div className="flex items-center gap-space-sm flex-shrink-0">
            <Link className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-95 transition-all" to="/projects">
              <span className="material-symbols-outlined text-[20px]">explore</span>
              Browse Project Marketplace
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-lg">
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Total Applied</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-headline-lg text-headline-lg text-on-surface">3</span>
                <span className="font-caption text-caption text-on-surface-variant">Active briefs</span>
              </div>
            </div>
            <div className="w-11 h-11 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined text-[24px]">assignment_turned_in</span>
            </div>
          </div>
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">In Review / Interview</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-headline-lg text-headline-lg text-amber-600">1</span>
                <span className="font-caption text-caption text-on-surface-variant">Nimbus Pay Call</span>
              </div>
            </div>
            <div className="w-11 h-11 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
              <span className="material-symbols-outlined text-[24px]">video_call</span>
            </div>
          </div>
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">In Progress Sprints</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-headline-lg text-headline-lg text-tertiary">1</span>
                <span className="font-caption text-caption text-on-surface-variant">Figma Labs Token</span>
              </div>
            </div>
            <div className="w-11 h-11 rounded-lg bg-tertiary-fixed/30 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-[24px]">bolt</span>
            </div>
          </div>
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Fast-Track Tokens</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-headline-lg text-headline-lg text-primary-container">1</span>
                <span className="font-caption text-caption text-emerald-600 font-semibold">Exemption Ready</span>
              </div>
            </div>
            <div className="w-11 h-11 rounded-lg bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined text-[24px]">verified_user</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-sm mb-space-md">
          <div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl">
            {TABS.map((t) => (
              <button
                key={t.key}
                className={`tab-button px-3.5 py-1.5 rounded-lg font-label-md text-label-md transition-all ${
                  tab === t.key ? "bg-surface-container-lowest text-on-surface font-semibold shadow-sm" : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
                onClick={() => setTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-space-sm">
            <div className="relative flex-1 sm:w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">search</span>
              <input
                className="w-full pl-9 pr-3 py-2 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container/20 transition-all shadow-sm"
                placeholder="Search applications..."
                type="text"
              />
            </div>
            <div className="relative">
              <select className="appearance-none bg-surface-container-lowest text-on-surface font-label-md text-label-md py-2 pl-3 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container/20 cursor-pointer">
                <option>Sort by: Recently Applied</option>
                <option>Sort by: Next Deadline</option>
                <option>Sort by: Match Score</option>
              </select>
              <span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">expand_more</span>
            </div>
          </div>
        </div>

        {tab !== "completed" ? (
          <div className="flex flex-col gap-space-md">
            {isVisible("review") && (
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-space-md">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-space-sm mb-space-xs">
                      <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-headline-sm font-bold flex-shrink-0 tracking-tight">MZ</div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">Nimbus Pay</span>
                          <span className="material-symbols-outlined text-[16px] text-primary-container" title="Verified Industry Partner">verified</span>
                          <span className="text-outline-variant font-caption text-caption">•</span>
                          <span className="font-caption text-caption text-on-surface-variant">Fintech Engineering Org</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-on-surface mt-0.5">Multi-tenant Webhook Dispatcher &amp; Audit Log</h3>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-on-surface-variant font-body-sm text-body-sm my-space-sm pl-0 xl:pl-12">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                        Applied on Oct 18, 2025 <span className="text-outline">(4 days ago)</span>
                      </span>
                      <span className="text-outline-variant">•</span>
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">timer</span>
                        Sprint Window: Oct 30 – Nov 13, 2025
                      </span>
                      <span className="text-outline-variant">•</span>
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">group_work</span>
                        2-week Sprint Brief
                      </span>
                    </div>
                    <div className="mt-space-md pt-space-sm bg-surface-container-low/60 rounded-xl p-space-md">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-label-sm text-label-sm text-on-surface font-semibold flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px] text-amber-600">conversion_path</span>
                          Review &amp; Screening Trajectory
                        </span>
                        <span className="font-caption text-caption text-on-surface-variant">Next: Video Technical Interview</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 relative">
                        <div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-container-lowest shadow-sm">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-[14px]">check</span>
                          </div>
                          <div className="min-w-0">
                            <p className="font-label-sm text-label-sm text-on-surface truncate">1. Submitted</p>
                            <p className="font-caption text-caption text-on-surface-variant">Oct 18 Passed</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-container-lowest shadow-sm">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-[14px]">check</span>
                          </div>
                          <div className="min-w-0">
                            <p className="font-label-sm text-label-sm text-on-surface truncate">2. Code Screening</p>
                            <p className="font-caption text-caption text-on-surface-variant">Score: 94/100</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5 p-2 rounded-lg bg-amber-50/90 shadow-sm">
                          <div className="w-6 h-6 rounded-full bg-amber-500 text-on-primary flex items-center justify-center flex-shrink-0 animate-pulse">
                            <span className="material-symbols-outlined text-[14px]">videocam</span>
                          </div>
                          <div className="min-w-0">
                            <p className="font-label-sm text-label-sm text-amber-900 font-semibold truncate">3. Fast-Track Call</p>
                            <p className="font-caption text-caption text-amber-700">Thurs, Oct 24 • 14:00</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-container-low opacity-75">
                          <div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center flex-shrink-0 font-label-sm">4</div>
                          <div className="min-w-0">
                            <p className="font-label-sm text-label-sm text-on-surface-variant truncate">4. Sprint Kickoff</p>
                            <p className="font-caption text-caption text-outline">Oct 30 Launch</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-sm flex items-center gap-2 p-2.5 rounded-lg bg-primary-fixed/30 text-on-surface">
                      <span className="material-symbols-outlined text-primary-container text-[20px]">stars</span>
                      <p className="font-body-sm text-body-sm">
                        <strong className="font-semibold text-primary">Interview Exemption Token Active:</strong> Successfully complete the 14-day dispatcher sprint to unlock direct Round 2 Engineering Intern placement with David O&apos;Connor (Lead Platform Architect).
                      </p>
                    </div>
                  </div>
                  <div className="xl:w-64 flex flex-col justify-between gap-space-md pl-0 xl:pl-4 xl:border-l xl:border-surface-container-high flex-shrink-0">
                    <div className="flex flex-col gap-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-800 font-label-sm text-label-sm w-fit">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                        Interview Call Scheduled
                      </div>
                      <span className="font-caption text-caption text-on-surface-variant mt-1">Calendar invite sent to maya.lin@ashworth.edu</span>
                    </div>
                    <div className="flex flex-col gap-2 mt-auto">
                      <a className="w-full text-center px-4 py-2 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md hover:opacity-95 transition-all" href="#">
                        Join Interview Room
                      </a>
                      <Link className="w-full text-center px-4 py-2 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-lg font-label-md text-label-md transition-colors" to="/project-detail">
                        View Project Brief
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isVisible("progress") && (
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-space-md">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-space-sm mb-space-xs">
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 text-primary-container flex items-center justify-center font-headline-sm font-bold flex-shrink-0 tracking-tight">FG</div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">Figma Labs</span>
                          <span className="material-symbols-outlined text-[16px] text-primary-container" title="Verified Industry Partner">verified</span>
                          <span className="text-outline-variant font-caption text-caption">•</span>
                          <span className="font-caption text-caption text-on-surface-variant">Design Systems Infrastructure</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-on-surface mt-0.5">Accessible Design System Token Engine &amp; Component Suite</h3>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-on-surface-variant font-body-sm text-body-sm my-space-sm pl-0 xl:pl-12">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">play_circle</span>
                        Sprint Started Oct 12, 2025
                      </span>
                      <span className="text-outline-variant">•</span>
                      <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                        Sprint Day 5 of 21
                      </span>
                      <span className="text-outline-variant">•</span>
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">code</span>
                        Deliverable: WCAG 2.2 AAA Primitives
                      </span>
                    </div>
                    <div className="mt-space-md pt-space-sm bg-surface-container-low/60 rounded-xl p-space-md">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold">Active Milestone 2 of 4</span>
                          <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-caption text-caption font-semibold">65% Progress</span>
                        </div>
                        <span className="font-caption text-caption text-on-surface-variant">PR Review Pending (Branch: feat/aria-matrix)</span>
                      </div>
                      <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                        <div className="bg-primary-container h-full rounded-full transition-all duration-500" style={{ width: "65%" }} />
                      </div>
                      <div className="mt-3 flex items-start gap-2 text-on-surface font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5">forum</span>
                        <p>
                          <strong className="font-semibold text-on-surface">Lead Mentor Sarah Jenkins (Staff DS Engineer):</strong> &ldquo;Milestone 1 Token Parser looks clean! Approved PR #14. Keep an eye on high-contrast focus rings in next PR.&rdquo;
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 mt-space-sm">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-caption text-caption">TypeScript 5.3</span>
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-caption text-caption">Radix UI</span>
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-caption text-caption">Style Dictionary</span>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-caption text-caption font-semibold">Token: 1 Industry Co-op Fast-Track</span>
                    </div>
                  </div>
                  <div className="xl:w-64 flex flex-col justify-between gap-space-md pl-0 xl:pl-4 xl:border-l xl:border-surface-container-high flex-shrink-0">
                    <div className="flex flex-col gap-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 font-label-sm text-label-sm w-fit">
                        <span className="w-2 h-2 rounded-full bg-emerald-600" />
                        In Progress Sprint
                      </div>
                      <span className="font-caption text-caption text-on-surface-variant">Submission checkpoint due Sunday, 23:59 PST</span>
                    </div>
                    <div className="flex flex-col gap-2 mt-auto">
                      <a className="w-full text-center px-4 py-2 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md hover:opacity-95 transition-all flex items-center justify-center gap-2" href="#">
                        <span className="material-symbols-outlined text-[18px]">terminal</span>
                        Open Sprint Workspace
                      </a>
                      <Link className="w-full text-center px-4 py-2 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-lg font-label-md text-label-md transition-colors" to="/project-detail">
                        View Project Brief
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isVisible("applied") && (
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-space-md">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-space-sm mb-space-xs">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-headline-sm font-bold flex-shrink-0 tracking-tight">WS</div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">Wise</span>
                          <span className="material-symbols-outlined text-[16px] text-primary-container" title="Verified Industry Partner">verified</span>
                          <span className="text-outline-variant font-caption text-caption">•</span>
                          <span className="font-caption text-caption text-on-surface-variant">Global Payments Core Team</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-on-surface mt-0.5">Global FX Real-Time Rate Cache &amp; Resilient Fallback</h3>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-on-surface-variant font-body-sm text-body-sm my-space-sm pl-0 xl:pl-12">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        Applied Yesterday (Oct 21, 2025)
                      </span>
                      <span className="text-outline-variant">•</span>
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">layers</span>
                        Cohort #02 (Starts Nov 04)
                      </span>
                      <span className="text-outline-variant">•</span>
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">leaderboard</span>
                        Target Skill Bridge: Zustand, Distributed Caching
                      </span>
                    </div>
                    <div className="mt-space-md bg-surface-container-low/60 rounded-xl p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
                          <span className="material-symbols-outlined text-[18px]">hourglass_top</span>
                        </div>
                        <div>
                          <p className="font-label-sm text-label-sm text-on-surface font-semibold">Application under automated match evaluation</p>
                          <p className="font-caption text-caption text-on-surface-variant">Tech lead team review window closes in 48 hours.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-label-sm text-label-sm font-semibold">Queue Position: Top 10%</span>
                      </div>
                    </div>
                    <div className="mt-space-sm flex items-center gap-2 text-on-surface-variant font-caption text-caption">
                      <span className="material-symbols-outlined text-[16px]">lightbulb</span>
                      Your Ashworth CS coursework in &quot;Distributed Systems (CS244B)&quot; satisfies the prerequisite threshold.
                    </div>
                  </div>
                  <div className="xl:w-64 flex flex-col justify-between gap-space-md pl-0 xl:pl-4 xl:border-l xl:border-surface-container-high flex-shrink-0">
                    <div className="flex flex-col gap-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container/70 text-on-secondary-fixed font-label-sm text-label-sm w-fit">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        Application Received
                      </div>
                      <span className="font-caption text-caption text-on-surface-variant">Matching score: 92% based on your GitHub</span>
                    </div>
                    <div className="flex flex-col gap-2 mt-auto">
                      <Link className="w-full text-center px-4 py-2 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-lg font-label-md text-label-md transition-colors" to="/project-detail">
                        View Project Brief
                      </Link>
                      <button className="w-full text-center px-4 py-1.5 text-on-surface-variant hover:text-error font-label-sm text-label-sm transition-colors" onClick={confirmWithdraw}>
                        Withdraw Application
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-space-xl bg-surface-container-lowest rounded-xl shadow-sm mt-space-sm border-2 border-dashed border-surface-container-high">
            <div className="w-16 h-16 rounded-full bg-primary-fixed/40 text-primary-container flex items-center justify-center mb-space-md">
              <span className="material-symbols-outlined text-[32px]">folder_open</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-1">No completed projects yet</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mb-space-lg">
              Once you complete an industry sprint and pass the live code review, your verified portfolio deliverables and fast-track interview certificates will appear here.
            </p>
            <Link className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-95 transition-all" to="/projects">
              Browse Project Marketplace
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        )}

        <div className="mt-space-xl p-space-lg rounded-xl bg-surface-container-low flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">help_outline</span>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">How do Fast-Track Tokens work?</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Completing any company brief with an aggregate code quality rating of 85%+ guarantees an automatic bypass of initial screening resumes straight to the technical hiring manager.
              </p>
            </div>
          </div>
          <a className="text-primary font-label-md text-label-md font-semibold hover:underline flex-shrink-0 flex items-center gap-1" href="#">
            Read Policy Guidelines
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </a>
        </div>
      </div>
    </DashboardLayout>
  );
}
