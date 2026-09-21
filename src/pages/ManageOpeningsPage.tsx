import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import CompanyLayout from "../layouts/CompanyLayout";

type ListingType = "sprint" | "internship" | "fulltime";

interface Listing {
  badge: { label: string; icon: string; tone: string };
  price: string;
  closes?: string;
  closesUrgent?: boolean;
  locationTag: string;
  title: string;
  tags: string[];
  moreTagsCount?: number;
  skillPct: number;
  skillIndexLabel: string;
  applicants: number;
  fastTrack: number;
  segments: [number, number, number];
  subStats: [string, string];
  type: ListingType;
  draft?: boolean;
  active?: boolean;
}

const LISTINGS: Listing[] = [
  {
    badge: { label: "Project Sprint", icon: "bolt", tone: "bg-primary-fixed text-on-primary-fixed-variant" },
    price: "£1,400 Stipend",
    closes: "Closes in 12 days",
    locationTag: "London / Remote",
    title: "Event-Driven Webhook Dispatcher Sprint",
    tags: ["TypeScript", "Redis", "Go", "Docker"],
    moreTagsCount: 2,
    skillPct: 84,
    skillIndexLabel: "Cohort average",
    applicants: 28,
    fastTrack: 8,
    segments: [28.5, 42.8, 28.7],
    subStats: ["12 Reviewed", "8 Pre-screened"],
    type: "sprint",
    active: true,
  },
  {
    badge: { label: "Internship", icon: "school", tone: "bg-secondary-container text-on-secondary-fixed" },
    price: "Paid • London / Hybrid",
    closes: "Closes in 24 days",
    locationTag: "Summer 2025",
    title: "Backend Distributed Systems Intern (Summer 2025)",
    tags: ["Rust", "Distributed Storage", "gRPC", "Kubernetes"],
    moreTagsCount: 4,
    skillPct: 91,
    skillIndexLabel: "Top university talent",
    applicants: 64,
    fastTrack: 14,
    segments: [21.8, 53.1, 25.1],
    subStats: ["34 Evaluated", "18 Coding Tested"],
    type: "internship",
    active: true,
  },
  {
    badge: { label: "Full-Time Graduate", icon: "work", tone: "bg-surface-container-high text-on-surface" },
    price: "£42,000 p.a.",
    closes: "Closes in 18 days",
    locationTag: "Hybrid • Shoreditch HQ",
    title: "Junior Frontend Platform Engineer",
    tags: ["React / Next.js", "TypeScript", "Design Systems", "Tailwind CSS"],
    moreTagsCount: 1,
    skillPct: 79,
    skillIndexLabel: "Production portfolio",
    applicants: 35,
    fastTrack: 9,
    segments: [25.7, 37.1, 37.2],
    subStats: ["13 Live Interview", "13 Screening"],
    type: "fulltime",
    active: true,
  },
  {
    badge: { label: "Project Sprint", icon: "bolt", tone: "bg-primary-fixed text-on-primary-fixed-variant" },
    price: "£1,800 Stipend",
    closes: "Closes in 8 days",
    closesUrgent: true,
    locationTag: "Micro-Sprint",
    title: "Real-Time FX Order Matching Engine Brief",
    tags: ["C++ / Rust", "WebSocket", "Orderbook Logic", "Lock-Free Queues"],
    skillPct: 94,
    skillIndexLabel: "High precision match",
    applicants: 15,
    fastTrack: 3,
    segments: [20, 60, 20],
    subStats: ["9 Technical Interview", "3 Pending"],
    type: "sprint",
    active: true,
  },
];

const DRAFT_LISTING = {
  title: "Security & Auth Middleware Sprint",
  tags: ["OAuth 2.1", "Node.js", "JWT Validation", "Pen-testing"],
};

const FILTER_TYPES: { key: "all" | ListingType; label: string }[] = [
  { key: "all", label: "All Types" },
  { key: "sprint", label: "Project Sprints" },
  { key: "internship", label: "Internships" },
  { key: "fulltime", label: "Full-Time" },
];

export default function ManageOpeningsPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | ListingType>("all");
  const [draftActive, setDraftActive] = useState(false);

  const visibleListings = useMemo(() => {
    const query = search.toLowerCase().trim();
    return LISTINGS.filter((l) => {
      const matchesType = typeFilter === "all" || l.type === typeFilter;
      const matchesSearch = !query || l.title.toLowerCase().includes(query) || l.tags.some((t) => t.toLowerCase().includes(query));
      return matchesType && matchesSearch;
    });
  }, [search, typeFilter]);

  return (
    <CompanyLayout>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-xl">
        <div>
          <div className="flex items-center gap-space-sm mb-space-xs">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">Employer Talent Pipeline</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-[11px]">Live Cohort Q2</span>
          </div>
          <div className="flex flex-wrap items-baseline gap-space-md">
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Manage Openings</h1>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest shadow-sm">
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse" />
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                <strong className="text-on-surface font-semibold">6</strong> Active <span className="mx-1 text-outline-variant">•</span>
                <strong className="text-on-surface font-semibold">2</strong> Drafts <span className="mx-1 text-outline-variant">•</span>
                <strong className="text-on-surface font-semibold">4</strong> Archived
              </span>
            </div>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-2xl">
            Review applicant skill-readiness indexes, fast-track high-alignment university talent, and monitor experiential project sprints.
          </p>
        </div>
        <div className="flex items-center gap-space-sm self-start lg:self-auto">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container-low transition-all">
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant">file_download</span>
            Export Overview
          </button>
          <Link className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md shadow-md hover:bg-primary transition-all group" to="/post-opportunity">
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:rotate-90 duration-200">add</span>
            <span>Post New Opening</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md mb-space-xl">
        <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-on-surface-variant">
            <span className="font-label-sm text-label-sm uppercase tracking-wide">Total Applicants</span>
            <span className="material-symbols-outlined text-primary text-[20px]">group</span>
          </div>
          <div className="mt-space-md">
            <div className="flex items-baseline gap-2">
              <span className="font-headline-lg text-headline-lg text-on-surface font-bold">142</span>
              <span className="font-label-sm text-label-sm text-tertiary-container flex items-center font-semibold">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>+18.4%
              </span>
            </div>
            <p className="font-caption text-caption text-on-surface-variant mt-1">Across 6 active listings</p>
          </div>
        </div>
        <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-on-surface-variant">
            <span className="font-label-sm text-label-sm uppercase tracking-wide">Fast-Track Vetted</span>
            <span className="material-symbols-outlined text-tertiary-container text-[20px]">verified</span>
          </div>
          <div className="mt-space-md">
            <div className="flex items-baseline gap-2">
              <span className="font-headline-lg text-headline-lg text-on-surface font-bold">34</span>
              <span className="font-label-sm text-label-sm text-tertiary-container font-semibold">24% qualified</span>
            </div>
            <p className="font-caption text-caption text-on-surface-variant mt-1">≥85% skill alignment benchmark</p>
          </div>
        </div>
        <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-on-surface-variant">
            <span className="font-label-sm text-label-sm uppercase tracking-wide">Avg Readiness Score</span>
            <span className="material-symbols-outlined text-surface-tint text-[20px]">speed</span>
          </div>
          <div className="mt-space-md">
            <div className="flex items-baseline gap-2">
              <span className="font-headline-lg text-headline-lg text-on-surface font-bold">78.6%</span>
              <span className="font-label-sm text-label-sm text-primary font-semibold">+4.2 pts</span>
            </div>
            <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-primary-container h-full rounded-full" style={{ width: "78.6%" }} />
            </div>
          </div>
        </div>
        <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-on-surface-variant">
            <span className="font-label-sm text-label-sm uppercase tracking-wide">Avg Time to Hire</span>
            <span className="material-symbols-outlined text-secondary text-[20px]">schedule</span>
          </div>
          <div className="mt-space-md">
            <div className="flex items-baseline gap-2">
              <span className="font-headline-lg text-headline-lg text-on-surface font-bold">11.4d</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">industry avg 28d</span>
            </div>
            <p className="font-caption text-caption text-on-surface-variant mt-1">Micro-sprints reduce ramp by 60%</p>
          </div>
        </div>
      </div>

      <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm mb-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        <div className="relative flex-1 max-w-md">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
          <input
            className="w-full pl-10 pr-4 py-2.5 bg-surface rounded-xl font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-low transition-all"
            placeholder="Filter by title, stack (e.g. Go, Redis, Next.js), or role..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap items-center gap-space-sm">
          <div className="flex items-center bg-surface p-1 rounded-xl">
            {FILTER_TYPES.map((f) => (
              <button
                key={f.key}
                className={`px-3 py-1.5 rounded-lg font-label-sm text-label-sm transition-all ${
                  typeFilter === f.key ? "bg-surface-container-lowest text-on-surface shadow-sm" : "text-on-surface-variant hover:text-on-surface"
                }`}
                onClick={() => setTypeFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="relative">
            <select className="appearance-none bg-surface text-on-surface font-label-sm text-label-sm pl-3 pr-8 py-2.5 rounded-xl focus:outline-none cursor-pointer">
              <option value="all">Status: Active &amp; Drafts</option>
              <option value="active">Active Only (4)</option>
              <option value="draft">Drafts Only (1)</option>
              <option value="closed">Closed / Archived</option>
            </select>
            <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]">expand_more</span>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-surface hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors">
            <span className="material-symbols-outlined text-[18px]">swap_vert</span>
            <span>Latest Activity</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-space-md">
        {visibleListings.map((listing) => (
          <div key={listing.title} className="group bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-lg">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-space-sm mb-space-xs">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-[11px] font-semibold tracking-wide uppercase ${listing.badge.tone}`}>
                    <span className="material-symbols-outlined text-[13px]">{listing.badge.icon}</span> {listing.badge.label}
                  </span>
                  <span className="font-label-sm text-label-sm text-tertiary-container font-semibold">{listing.price}</span>
                  <span className="text-outline-variant">•</span>
                  <span className={`inline-flex items-center gap-1 font-caption text-caption ${listing.closesUrgent ? "text-error font-medium" : "text-on-surface-variant"}`}>
                    <span className="material-symbols-outlined text-[15px]">alarm</span> {listing.closes}
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-caption text-[11px]">{listing.locationTag}</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors truncate">{listing.title}</h2>
                <div className="flex flex-wrap items-center gap-2 mt-space-sm">
                  {listing.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm">{tag}</span>
                  ))}
                  {listing.moreTagsCount && (
                    <span className="px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface-variant font-caption text-caption">+{listing.moreTagsCount} more</span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-space-xl py-2 xl:px-space-lg">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5" />
                      <path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray={`${listing.skillPct}, 100`} strokeLinecap="round" strokeWidth="3.5" />
                    </svg>
                    <span className="absolute font-label-sm text-label-sm font-bold text-on-surface">{listing.skillPct}%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">Skill Index</span>
                    <span className="font-caption text-caption text-on-surface-variant">{listing.skillIndexLabel}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-44">
                  <div className="flex justify-between items-baseline">
                    <span className="font-label-sm text-label-sm text-on-surface font-medium">{listing.applicants} Applicants</span>
                    <span className="font-caption text-caption font-semibold text-tertiary-container">{listing.fastTrack} Fast-Track</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full flex overflow-hidden">
                    <div className="bg-tertiary-container h-full" style={{ width: `${listing.segments[0]}%` }} />
                    <div className="bg-primary-container h-full" style={{ width: `${listing.segments[1]}%` }} />
                    <div className="bg-secondary h-full" style={{ width: `${listing.segments[2]}%` }} />
                  </div>
                  <div className="flex justify-between font-caption text-[11px] text-on-surface-variant">
                    <span>{listing.subStats[0]}</span>
                    <span>{listing.subStats[1]}</span>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-center gap-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked={listing.active} className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container" />
                  </label>
                  <span className="font-caption text-[11px] text-on-surface-variant font-medium">Active</span>
                </div>
              </div>
              <div className="flex items-center justify-end gap-space-sm pt-2 xl:pt-0">
                <Link className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" to="/applicant-review">
                  <span>View Candidates</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-[11px] font-bold">{listing.applicants}</span>
                </Link>
                <button className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" title="Edit Opening">
                  <span className="material-symbols-outlined text-[20px]">edit_square</span>
                </button>
                <button className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" title="More options">
                  <span className="material-symbols-outlined text-[20px]">more_vert</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {(typeFilter === "all") && !search.trim() && (
          <div className="group bg-surface-container-lowest/80 p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-lg">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-space-sm mb-space-xs">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-semibold tracking-wide uppercase">
                    <span className="material-symbols-outlined text-[13px]">edit_note</span> Draft
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Unpublished Brief</span>
                  <span className="text-outline-variant">•</span>
                  <span className="inline-flex items-center gap-1 text-on-surface-variant font-caption text-caption">
                    <span className="material-symbols-outlined text-[15px]">update</span> Last edited 2 hours ago
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface/75 font-semibold group-hover:text-primary transition-colors truncate">{DRAFT_LISTING.title}</h2>
                <div className="flex flex-wrap items-center gap-2 mt-space-sm">
                  {DRAFT_LISTING.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-space-xl py-2 xl:px-space-lg">
                <div className="flex items-center gap-3 opacity-60">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant font-label-sm text-label-sm font-semibold">--%</div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface font-medium">Pending Review</span>
                    <span className="font-caption text-caption text-on-surface-variant">No data collected</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-44 opacity-60">
                  <div className="flex justify-between items-baseline">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">0 Applicants</span>
                    <span className="font-caption text-caption text-on-surface-variant">Draft status</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full" />
                  <div className="flex justify-between font-caption text-[11px] text-on-surface-variant">
                    <span>Sprint not published</span>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-center gap-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input checked={draftActive} onChange={(e) => setDraftActive(e.target.checked)} className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container" />
                  </label>
                  <span className="font-caption text-[11px] text-on-surface-variant font-medium">Draft</span>
                </div>
              </div>
              <div className="flex items-center justify-end gap-space-sm pt-2 xl:pt-0">
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">publish</span>
                  <span>Publish Sprint</span>
                </button>
                <button className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" title="Edit Opening">
                  <span className="material-symbols-outlined text-[20px]">edit_square</span>
                </button>
                <button className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" title="More options">
                  <span className="material-symbols-outlined text-[20px]">more_vert</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-space-xl p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Showing <strong className="text-on-surface font-semibold">1 – 5</strong> of <strong className="text-on-surface font-semibold">12</strong> total openings
          </span>
          <div className="h-4 w-[1px] bg-surface-variant hidden sm:block" />
          <span className="font-caption text-caption text-on-surface-variant hidden sm:inline-flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-tertiary-container" /> Synchronized with university talent pool
          </span>
        </div>
        <div className="flex items-center gap-space-xs">
          <button className="px-3 py-1.5 rounded-lg bg-surface text-on-surface-variant font-label-sm text-label-sm opacity-50 cursor-not-allowed flex items-center gap-1" disabled>
            <span className="material-symbols-outlined text-[16px]">chevron_left</span> Previous
          </button>
          <button className="w-8 h-8 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center font-semibold">1</button>
          <button className="w-8 h-8 rounded-lg hover:bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center justify-center transition-colors">2</button>
          <button className="w-8 h-8 rounded-lg hover:bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center justify-center transition-colors">3</button>
          <button className="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors">
            Next <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>
      </div>
    </CompanyLayout>
  );
}
