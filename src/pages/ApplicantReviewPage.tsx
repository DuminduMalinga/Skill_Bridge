import { Link } from "react-router-dom";
import CompanyLayout from "../layouts/CompanyLayout";

interface CandidateTag {
  label: string;
  icon?: string;
  tone?: "tertiary" | "secondary";
}

interface Candidate {
  name: string;
  photo: string;
  school: string;
  match: string;
  matchColor: string;
  selected?: boolean;
  dimmed?: boolean;
  tags: CandidateTag[];
  footerLeft: string;
  footerIcon?: string;
  footerRight: string;
}

const CANDIDATES: Candidate[] = [
  {
    name: "Maya Lin",
    photo:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5VuJy4HoxwDcXvJzt8Ip4IbQIAMIA5Ybq_t0Wxpk8enSwLJpJShi7a0GPNBTecNtxhGfwqE8sOAWDRtKNbaSohXf6zMrRYFeQNFplQI9KWkJImptiY46SH1iRCYpnAmHLX4UogToxbcuC0b7BudQziRL5tUohMdR1xMzsV_iUOs4ZpYX04_61GUEoh07Ryw8GQNDQIdefLcYuquBEjuXb-OR40XTEt7AWOhmb5oc0vqaLMDA2ncmLHg",
    school: "Ashcombe University BSc Computer Science (2026)",
    match: "94%",
    matchColor: "text-primary",
    selected: true,
    tags: [{ label: "Fast-Track", icon: "bolt", tone: "tertiary" as const }, { label: "3 Verified Projects", icon: "code" }, { label: "First Class", tone: "secondary" as const }],
    footerLeft: "Idempotency Tests 100%",
    footerIcon: "check_circle",
    footerRight: "Applied 2d ago",
  },
  {
    name: "Liam Vance",
    photo:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTERoxEHTcCn68CuAvkkThn2KcfAhYfaRNS7ZlY0YZgwl6JIwh1tT7mc7TAo7Au3Hec_od6igbhFc95tfmCSzLiLVssyN3ybqxGlUCOnnS92utuByV-lO6OeuZswHT0oCMEjgNrXJnetVPJljMIMpKW8QrJvcVPmgJm_KdbGV14iFuAzE88y0Uf0CfLS9q1bnbQt8JfxhJ6YmIuxDDpeBTnl2epbyJOtq2JAxijoMQzHk-opNnBIeVGw",
    school: "Kingswell College MEng Computing",
    match: "91%",
    matchColor: "text-primary",
    tags: [{ label: "Fast-Track", icon: "bolt", tone: "tertiary" as const }, { label: "2 Verified Projects" }],
    footerLeft: "Distributed Lock Harness verified",
    footerRight: "Applied 3d ago",
  },
  {
    name: "Sofia Patel",
    photo:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABfWhGK6E0WLIo6dZz5ItiJM3alqwkMGof8g1bJXXopFjz_BLZFh4VykT2QdzRTw0YeLDauLYz2NCAuSIkVi7LunZMeHzczEcRTIZ1-hqfGLbybxwxn83DusoHCXc0FuEGpP1ECTjb0-eMj_Q4AuJlF_5gfTQs0aZW6eowIQjLtGSx2Mw8Vy4jwc3B94sleTUYK_fHg2GWKtnLkqVMPI4riT_0YnRtL8YsWOpCdlJsF24ZyH1VZdYZ5g",
    school: "Edinburgh BSc Informatics",
    match: "89%",
    matchColor: "text-on-surface",
    tags: [{ label: "Fast-Track", icon: "bolt", tone: "tertiary" as const }, { label: "Go Concurrency" }],
    footerLeft: "Kafka pipeline coursework",
    footerRight: "Applied 4d ago",
  },
  {
    name: "Arjun Mehta",
    photo:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCI8F6oYOKbU3DQBCFwEIv7v6mYvk4_w37P7jhBlSLq8BzxE1ylutXlQYPAw82Ej9-CKPK4btpAcYXdevX8C4HWFtd-nvmsX6_fppPOuNz85yRNDWsCC4OdVfzQhyYkGrkFcY7TonM6LEH84u3JHTQXFFVdjbEa7gtdtiTCs3AWEZ8WhVjiKFK-hM9xE8phmnwTC-Hxj_QlBZQv2wrq2-aDIXJKsRRELCgtQusitfmhgwh5aML5IcAzDg",
    school: "King's College London",
    match: "82%",
    matchColor: "text-on-surface",
    dimmed: true,
    tags: [{ label: "TypeScript Focus" }, { label: "1 Verified Project", tone: "secondary" as const }],
    footerLeft: "Core Go pending review",
    footerRight: "Applied 5d ago",
  },
];

const REQUIREMENTS = [
  { title: "Go / Backend APIs", meta: "Verified via Systems Coursework & Sprint", pct: 90, note: "Goroutines, Channel buffering", badge: "Lab Passed" },
  { title: "TypeScript & Webhooks", meta: "Mastery Level 4 • Ashcombe University Verified", pct: 98, note: "HMAC signatures, Replay attacks", badge: "Lab Passed" },
  { title: "Redis & Idempotency", meta: "Sprint test harness verified", pct: 88, note: "SETNX key deduplication, TTL exp", badge: "Live Run" },
  { title: "Docker & CI/CD", meta: "42 verified rebased commits", pct: 95, note: "Multi-stage build, GitHub Actions", badge: "Passing" },
];

const FILTER_TABS = ["All Applicants (28)", "Fast-Track Qualified", "Under Review (12)", "Shortlisted (5)", "Archived (3)"];

export default function ApplicantReviewPage() {
  return (
    <CompanyLayout>
      <div className="flex flex-col gap-6 max-w-7xl w-full mx-auto">
        <div className="flex flex-col gap-2">
          <nav className="flex items-center gap-2 font-caption text-caption text-on-surface-variant">
            <Link className="hover:text-primary transition-colors" to="/company-dashboard">Openings</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <a className="hover:text-primary transition-colors" href="#">Nimbus Pay Webhook Dispatcher</a>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-on-surface font-medium">Candidates</span>
          </nav>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Candidate Review: Event-Driven Webhook Dispatcher</h1>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  28 Total Applicants • 8 Fast-Track Pre-Qualified
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Automated competency benchmark calibrated against Nimbus Pay Production Engineering syllabus</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container-lowest shadow-sm font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">sort</span>
                <span>Highest Skill Overlap %</span>
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">expand_more</span>
              </button>
              <button className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container-lowest shadow-sm font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">tune</span>
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 overflow-x-auto pb-1">
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface-container-low">
            {FILTER_TABS.map((tab, i) => (
              <button
                key={tab}
                className={
                  i === 0
                    ? "px-3.5 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm font-label-md text-label-md text-on-surface transition-all"
                    : "px-3.5 py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1.5"
                }
              >
                <span>{tab}</span>
                {i === 1 && <span className="px-1.5 py-0.2 rounded-full bg-primary-container text-on-primary font-caption text-[11px] font-semibold">8</span>}
              </button>
            ))}
          </div>
          <div className="hidden xl:flex items-center gap-2 text-on-surface-variant font-caption text-caption">
            <span className="material-symbols-outlined text-[16px] text-tertiary">verified</span>
            <span>Cryptographically verified academic coursework</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Candidate Stream</span>
              <span className="font-caption text-caption text-on-surface-variant">Showing 4 of 28</span>
            </div>
            {CANDIDATES.map((c) => (
              <div
                key={c.name}
                className={`p-4 rounded-xl bg-surface-container-lowest transition-all flex flex-col gap-3 cursor-pointer ${
                  c.selected ? "shadow-md relative ring-2 ring-primary" : "shadow-sm hover:shadow-md"
                } ${c.dimmed ? "opacity-80 hover:opacity-100" : ""}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shadow-sm flex-shrink-0">
                      <img className="w-full h-full object-cover" alt={c.name} src={c.photo} />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-headline-sm text-[16px] text-on-surface font-semibold truncate">{c.name}</span>
                      <span className="font-caption text-caption text-on-surface-variant truncate">{c.school}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`font-headline-sm text-headline-sm font-bold ${c.matchColor}`}>{c.match}</span>
                    <span className="font-caption text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold">Match</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {c.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-caption text-[11px] ${
                        tag.tone === "tertiary"
                          ? "bg-tertiary-container text-on-tertiary-container font-label-sm"
                          : tag.tone === "secondary"
                          ? "bg-secondary-container text-on-secondary-container"
                          : "bg-surface-container text-on-surface"
                      }`}
                    >
                      {tag.icon && <span className="material-symbols-outlined text-[13px]">{tag.icon}</span>}
                      {tag.label}
                    </span>
                  ))}
                </div>
                <div className="pt-2 flex items-center justify-between text-on-surface-variant font-caption text-caption">
                  <div className="flex items-center gap-1">
                    <span>{c.footerLeft}</span>
                  </div>
                  <span>{c.footerRight}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      alt="Maya Lin"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoPsBJorUPSP4V61bcRkH0ErnR96xN2phJLASgjSFV3fyiAiaNobz3ggaxiYRnkOZuIxhoYLh95DwXbXJ6e08kTu7AulmlEOPeYju3hhjWjXRUpHllYAK00fjwACQCaFUNjqPDOCj-43tRNqNFecsu8ndm6aQ08x0WXdx5L8NUtzEuf6JGCLjXzm7-yjihiI3BUAfkztQHGAQcounGMCjZgm-WjrLe3-1A79FaVNzjdzAu9nL3rrPEvg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Maya Lin</h2>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-[11px]">
                        <span className="material-symbols-outlined text-[14px]">bolt</span>
                        Fast-Track Pre-Qualified
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">Ashcombe University • BSc Computer Science (Expected June 2026)</p>
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <span className="inline-flex items-center gap-1 font-caption text-caption text-on-surface bg-surface-container-low px-2.5 py-1 rounded-lg">
                        <span className="material-symbols-outlined text-[15px] text-tertiary">school</span>
                        First Class Honours Track (3.92 GPA)
                      </span>
                      <a className="inline-flex items-center gap-1 font-caption text-caption text-primary hover:underline bg-surface-container-low px-2.5 py-1 rounded-lg" href="#">
                        <span className="material-symbols-outlined text-[15px]">terminal</span>
                        @mayalin-ashcombe
                      </a>
                      <span className="inline-flex items-center gap-1 font-caption text-caption text-tertiary bg-tertiary-container/20 px-2.5 py-1 rounded-lg">
                        <span className="material-symbols-outlined text-[15px]">verified_user</span>
                        SkillBridge Dossier #SB-8821
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link className="px-3.5 py-2.5 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md transition-colors flex items-center gap-1.5" title="View full profile" to="/student-profile-view">
                    <span className="material-symbols-outlined text-[20px]">person</span>
                    <span>View full profile</span>
                  </Link>
                  <button className="p-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface" title="Bookmark candidate">
                    <span className="material-symbols-outlined text-[20px]">bookmark</span>
                  </button>
                  <button className="p-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface" title="Export Candidate Dossier">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                  </button>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-surface-container-low flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="relative w-24 h-24 flex items-center justify-center flex-shrink-0">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path className="text-surface-variant" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5" />
                      <path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="94, 100" strokeLinecap="round" strokeWidth="3.5" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-headline-md text-headline-md font-bold text-on-surface leading-none">94%</span>
                      <span className="font-caption text-[10px] text-on-surface-variant font-semibold tracking-wider uppercase mt-0.5">Overlap</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">Target Role Skill Fit</h3>
                      <span className="px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-caption text-[11px] font-semibold">Tier 1 Top 2%</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-md">
                      Exceeds requirements in distributed resilience, payload signing, and low-latency HTTP handling. Automated unit tests verified 100% test coverage on concurrency race locks.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-right flex-shrink-0">
                  <span className="font-caption text-caption text-on-surface-variant">Recommended Next Step</span>
                  <span className="font-label-md text-label-md text-primary font-semibold">Waive Coding Test → Direct 1:1</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-headline-sm text-[16px] text-on-surface font-semibold">Requirement Breakdown vs. Opening Matrix</h4>
                  <span className="font-caption text-caption text-on-surface-variant">Calibrated with Ashcombe University CS Department</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {REQUIREMENTS.map((req) => (
                    <div key={req.title} className="p-4 rounded-xl bg-surface shadow-sm flex flex-col justify-between gap-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md text-on-surface font-semibold">{req.title}</span>
                          <span className="font-caption text-caption text-on-surface-variant">{req.meta}</span>
                        </div>
                        <span className="font-headline-sm text-[17px] text-primary font-bold">{req.pct}%</span>
                      </div>
                      <div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
                        <div className="bg-primary-container h-full rounded-full" style={{ width: `${req.pct}%` }} />
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant font-caption text-[11px]">
                        <span>{req.note}</span>
                        <span className="text-tertiary font-semibold flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-[13px]">verified</span> {req.badge}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-headline-sm text-[16px] text-on-surface font-semibold">Verified Deliverables &amp; Proof of Work</h4>
                <div className="p-4 rounded-xl bg-surface shadow-sm flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-primary text-[22px]">merge_type</span>
                      </div>
                      <div className="flex flex-col">
                        <a className="font-label-md text-label-md text-on-surface font-semibold hover:text-primary transition-colors" href="#">
                          Pull Request #14: High-Throughput Webhook Event Ingestion
                        </a>
                        <span className="font-caption text-caption text-on-surface-variant">
                          repo: <span className="text-on-surface">nimbuspay-open-source / webhook-dispatcher-go</span> • Merged into staging
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-[11px] font-semibold">100% Tests Passing</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-on-surface-variant font-caption text-caption">
                    <div className="flex items-center gap-1.5 bg-surface-container-low p-2 rounded-lg">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">check</span>
                      <span>Zero lint warnings (golangci-lint)</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-surface-container-low p-2 rounded-lg">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">speed</span>
                      <span>p99 Latency: 4.2ms</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-surface-container-low p-2 rounded-lg">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">memory</span>
                      <span>Zero Memory Leaks (pprof)</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-surface shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center flex-shrink-0 text-on-secondary-container">
                    <span className="material-symbols-outlined text-[20px]">school</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-label-md text-label-md text-on-surface font-semibold">Academic Tutor Endorsement</span>
                      <span className="font-caption text-caption text-on-surface-variant">• Dr. Alistair Ross (Senior Lecturer, Ashcombe University)</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                      &ldquo;Maya implemented an innovative lock-free ring buffer for our Distributed Systems module. Her codebase demonstrates production-readiness uncommon in undergraduate students. Ranked top 1% of cohort.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-surface-container-low flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="evalNotes">Recruiter &amp; Engineering Evaluation Notes</label>
                  <span className="font-caption text-caption text-on-surface-variant">Shared across hiring panel</span>
                </div>
                <textarea
                  className="w-full p-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm border-none shadow-sm focus:ring-2 focus:ring-primary-container/20 placeholder:text-outline focus:outline-none transition-all resize-none"
                  id="evalNotes"
                  placeholder="Add confidential notes (e.g., strong distributed systems grasp, ready for architectural deep dive)..."
                  rows={2}
                  defaultValue="Pre-assessment criteria exceeded. Coursework matches our internal idempotency dispatcher architecture. Ready for direct offer or final partner conversation."
                />
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                  <button className="px-4 py-2.5 rounded-lg bg-surface hover:bg-surface-container text-error font-label-md text-label-md transition-colors flex items-center justify-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">close</span>
                    Reject / Send Feedback
                  </button>
                  <div className="flex items-center gap-3">
                    <button className="px-4 py-2.5 rounded-lg bg-surface hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors flex items-center justify-center gap-1.5 shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                      Schedule 1:1 Walkthrough
                    </button>
                    <button className="px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                      <span>Confirm Fast-Track Interview Exemption</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CompanyLayout>
  );
}
