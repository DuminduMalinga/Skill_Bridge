import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CompanyLayout from "../layouts/CompanyLayout";

interface Avatar {
  initials: string;
  bg: string;
  text: string;
}

interface Posting {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  team: string;
  stack: string;
  type: string;
  typeClass: string;
  applicants: number | null;
  fastTrack?: number;
  avatars?: Avatar[];
  moreCount?: number;
  draft?: boolean;
  status: "open" | "closed";
  closedNote?: string;
}

const POSTINGS: Posting[] = [
  {
    icon: "hub",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
    title: "Event-Driven Webhook Dispatcher Sprint",
    team: "Core Banking Infrastructure",
    stack: "Go, Redis, Kafka",
    type: "Project-based",
    typeClass: "bg-primary-fixed text-primary",
    applicants: 28,
    fastTrack: 8,
    avatars: [
      { initials: "AL", bg: "bg-primary-container", text: "text-on-primary" },
      { initials: "RM", bg: "bg-secondary-fixed", text: "text-on-secondary-fixed" },
      { initials: "SK", bg: "bg-tertiary", text: "text-on-tertiary" },
    ],
    moreCount: 25,
    status: "open",
  },
  {
    icon: "dns",
    iconBg: "bg-surface-tint/10",
    iconColor: "text-primary",
    title: "Backend Distributed Systems Intern",
    team: "Platform Engineering",
    stack: "Rust, gRPC, Kubernetes",
    type: "Internship",
    typeClass: "bg-secondary-container text-on-secondary-fixed",
    applicants: 64,
    fastTrack: 14,
    avatars: [
      { initials: "EK", bg: "bg-primary", text: "text-on-primary" },
      { initials: "DT", bg: "bg-secondary", text: "text-on-secondary" },
      { initials: "JN", bg: "bg-primary-fixed", text: "text-primary" },
    ],
    moreCount: 61,
    status: "open",
  },
  {
    icon: "layers",
    iconBg: "bg-tertiary-fixed",
    iconColor: "text-tertiary",
    title: "Junior Frontend Platform Engineer",
    team: "Design Systems & Web Client",
    stack: "React, TypeScript, Next.js",
    type: "Full-time",
    typeClass: "bg-tertiary-container/10 text-tertiary-container",
    applicants: 35,
    fastTrack: 9,
    avatars: [
      { initials: "LC", bg: "bg-primary-fixed", text: "text-primary" },
      { initials: "PR", bg: "bg-surface-tint", text: "text-on-primary" },
    ],
    moreCount: 33,
    status: "open",
  },
  {
    icon: "shield",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
    title: "Real-Time Fraud Detection Stream Processor",
    team: "Security & Risk",
    stack: "C++, WebSockets, Lock-Free Queues",
    type: "Project-based",
    typeClass: "bg-primary-fixed text-primary",
    applicants: 15,
    fastTrack: 3,
    avatars: [
      { initials: "MK", bg: "bg-on-surface-variant", text: "text-surface" },
      { initials: "TS", bg: "bg-primary", text: "text-on-primary" },
    ],
    moreCount: 13,
    status: "open",
  },
  {
    icon: "key",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
    title: "Security & Auth Infrastructure Sprint",
    team: "Infra Security",
    stack: "OAuth 2.1, Node.js, JWT Validation",
    type: "Project-based",
    typeClass: "bg-primary-fixed text-primary",
    applicants: null,
    draft: true,
    status: "open",
  },
  {
    icon: "phone_iphone",
    iconBg: "bg-surface-container-high",
    iconColor: "text-secondary",
    title: "Summer 2024 iOS Core App Internship",
    team: "Mobile Apps",
    stack: "Swift, SwiftUI",
    type: "Internship",
    typeClass: "bg-secondary-container text-on-secondary-fixed",
    applicants: 82,
    closedNote: "Completed Cohort",
    status: "closed",
  },
];

type FilterKey = "all" | "open" | "closed";

export default function CompanyDashboardPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<FilterKey>("all");
  const [search, setSearch] = useState("");

  const visiblePostings = useMemo(() => {
    const query = search.toLowerCase().trim();
    return POSTINGS.filter((p) => {
      const matchesStatus = filter === "all" || p.status === filter;
      const matchesSearch = !query || p.title.toLowerCase().includes(query) || p.team.toLowerCase().includes(query) || p.stack.toLowerCase().includes(query);
      return matchesStatus && matchesSearch;
    });
  }, [filter, search]);

  return (
    <CompanyLayout>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8">
        <div className="flex flex-col gap-1.5 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary mr-1.5 animate-pulse" />
              Recruiting Active
            </span>
            <span className="font-caption text-caption text-secondary">Cohort 2024–2025</span>
          </div>
          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
            Welcome back, <span className="text-primary font-bold">Nimbus Pay Engineering</span>
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Here&apos;s an overview of your active candidate pipeline, open listings, and student engagement across partner universities.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md">
            <span className="material-symbols-outlined text-[18px]">tune</span>
            <span>Filter Pipeline</span>
          </button>
          <button
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            onClick={() => navigate("/post-opportunity")}
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span>Post a new opportunity</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-caption text-caption uppercase tracking-wider text-secondary font-semibold">Active Postings</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-display-hero text-display-hero text-on-surface leading-none">6</span>
                <span className="font-caption text-caption text-tertiary bg-tertiary-fixed/60 px-2 py-0.5 rounded-md font-medium">+1 new</span>
              </div>
            </div>
            <div className="w-11 h-11 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[22px]">work_outline</span>
            </div>
          </div>
          <div className="pt-6 mt-4 flex items-center justify-between text-on-surface-variant font-caption text-caption">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-medium text-on-surface">4 Projects</span>
              <span className="text-secondary">•</span>
              <span className="w-2 h-2 rounded-full bg-surface-tint" />
              <span className="font-medium text-on-surface">2 Internships</span>
            </div>
            <span className="text-secondary">1 pending review</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-caption text-caption uppercase tracking-wider text-secondary font-semibold">Total Applicants</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-display-hero text-display-hero text-on-surface leading-none">142</span>
                <span className="font-caption text-caption text-tertiary bg-tertiary-fixed/60 px-2 py-0.5 rounded-md font-medium flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[13px]">trending_up</span> 18 this wk
                </span>
              </div>
            </div>
            <div className="w-11 h-11 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[22px]">group</span>
            </div>
          </div>
          <div className="pt-6 mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[14px] mr-1">bolt</span> 34 Fast-Track
              </span>
              <span className="font-caption text-caption text-secondary">vetted directly</span>
            </div>
            <svg className="w-16 h-5 text-tertiary" fill="none" viewBox="0 0 64 20">
              <path d="M2 17L14 14L28 16L40 7L52 10L62 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-caption text-caption uppercase tracking-wider text-secondary font-semibold">Students Engaged</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-display-hero text-display-hero text-on-surface leading-none">389</span>
                <span className="font-caption text-caption text-on-secondary-container bg-secondary-fixed px-2 py-0.5 rounded-md font-medium">12 Campuses</span>
              </div>
            </div>
            <div className="w-11 h-11 rounded-lg bg-surface-container-low flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-[22px]">school</span>
            </div>
          </div>
          <div className="pt-6 mt-4 flex items-center justify-between font-caption text-caption">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-tertiary">94.2%</span>
              <span className="text-on-surface-variant">curriculum skill alignment</span>
            </div>
            <div className="w-20 bg-surface-container rounded-full h-1.5 overflow-hidden">
              <div className="bg-tertiary h-1.5 rounded-full" style={{ width: "94.2%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl shadow-sm flex flex-col overflow-hidden">
        <div className="p-6 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="font-headline-sm text-headline-sm text-on-surface">Active Opportunities &amp; Postings</h2>
            <p className="font-caption text-caption text-secondary">Manage and review candidates matched against engineering benchmarks.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="inline-flex p-1 bg-surface-container-low rounded-lg">
              {(["all", "open", "closed"] as FilterKey[]).map((key) => (
                <button
                  key={key}
                  className={`px-3 py-1.5 rounded-md font-label-sm text-label-sm transition-all ${
                    filter === key ? "font-semibold bg-surface-container-lowest text-on-surface shadow-sm" : "text-secondary hover:text-on-surface"
                  }`}
                  onClick={() => setFilter(key)}
                >
                  {key === "all" ? "All (6)" : key === "open" ? "Open (5)" : "Closed (1)"}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-secondary text-[18px]">search</span>
              <input
                className="pl-8 pr-3 py-1.5 text-body-sm font-body-sm bg-surface-container-low rounded-lg text-on-surface placeholder:text-secondary focus:outline-none focus:ring-1 focus:ring-primary w-44 transition-all focus:w-56"
                placeholder="Search postings..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                <th className="py-3 px-6 font-semibold">Opportunity Details</th>
                <th className="py-3 px-4 font-semibold">Type</th>
                <th className="py-3 px-4 font-semibold">Pipeline &amp; Fast-Track</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-6 text-right font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container text-body-sm font-body-sm text-on-surface">
              {visiblePostings.map((p) => (
                <tr key={p.title} className={`hover:bg-surface-bright transition-colors group ${p.status === "closed" ? "opacity-80" : ""}`}>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-semibold shrink-0 ${p.iconBg} ${p.iconColor}`}>
                        <span className="material-symbols-outlined text-[20px]">{p.icon}</span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors truncate">{p.title}</span>
                        <span className="font-caption text-caption text-secondary truncate mt-0.5">
                          {p.team} • <span className="font-medium text-on-surface-variant">{p.stack}</span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full font-label-sm text-label-sm font-medium ${p.typeClass}`}>{p.type}</span>
                  </td>
                  <td className="py-4 px-4">
                    {p.draft ? (
                      <div className="flex items-center gap-2 text-secondary">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        <span className="font-body-sm text-body-sm text-secondary">0 applicants (Draft / Launching)</span>
                      </div>
                    ) : p.closedNote ? (
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-secondary">{p.applicants} applicants</span>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-surface-container-high text-secondary text-[11px] font-semibold">{p.closedNote}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-on-surface">{p.applicants} applicants</span>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant text-[11px] font-semibold">{p.fastTrack} Fast-Track</span>
                        </div>
                        <div className="flex items-center -space-x-1.5">
                          {p.avatars?.map((a) => (
                            <div key={a.initials} className={`w-5 h-5 rounded-full text-[9px] flex items-center justify-center ring-2 ring-surface-container-lowest font-bold ${a.bg} ${a.text}`}>
                              {a.initials}
                            </div>
                          ))}
                          <span className="pl-2 font-caption text-caption text-secondary">+{p.moreCount}</span>
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    {p.status === "open" ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed/40 text-on-tertiary-fixed-variant font-label-sm text-label-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                        Open
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        Closed
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        className={`inline-flex items-center gap-1 font-label-md text-label-md font-semibold px-3 py-1 rounded-lg hover:bg-surface-container transition-colors ${
                          p.status === "open" ? "text-primary hover:text-on-primary-fixed" : "text-secondary hover:text-on-surface"
                        }`}
                        to="/applicant-review"
                      >
                        <span>View applicants</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </Link>
                      <button className="p-1 text-secondary hover:text-on-surface rounded hover:bg-surface-container transition-colors">
                        <span className="material-symbols-outlined text-[18px]">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-surface-container-lowest flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-caption text-caption text-secondary">
            Showing <span className="font-medium text-on-surface">{visiblePostings.length > 0 ? `1-${visiblePostings.length}` : "0"}</span> of 6 postings
          </span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg bg-surface-container-low text-secondary/50 font-label-sm text-label-sm cursor-not-allowed" disabled>Previous</button>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 rounded-md bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center font-semibold">1</button>
            </div>
            <button className="px-3 py-1.5 rounded-lg bg-surface-container-low text-secondary/50 font-label-sm text-label-sm cursor-not-allowed" disabled>Next</button>
          </div>
        </div>
      </div>
    </CompanyLayout>
  );
}
