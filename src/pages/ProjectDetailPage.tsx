import { Link, useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

const MENTOR_PHOTO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCfTWGty7bJEnmW3S09YmnK_KszjC5s07-3PNpvGLVSxpFyStm5yrohdb-8mZhSw0Sd1LK5xsfBz8TTZXJhYwyhqiRFTueeqvNSOc4X6Km-cvx9IIHwTc5wX6O0uaeu9bJXCWr2-zGYTC0Xof90A72vyzzTQRep07i30PEP87Bi7UHlR4OTCfLm2mpH6019fB2wWFntYxKe9NOwUZau8mg_0ZXUBe-g6mmCkKJpXMb0fypqc-UP3tEy0Q";

const MILESTONES = [
  {
    num: "01",
    title: "Idempotent Queue Schema & DLQ Setup",
    range: "Days 1–4",
    description:
      "Architect idempotent Postgres + Redis queue schemas with transactional deduplication keys, atomic lease claiming, and Dead Letter Queue (DLQ) support for corrupted payloads.",
    active: true,
  },
  {
    num: "02",
    title: "Next.js 14 App Router Dispatcher & Circuit Breakers",
    range: "Days 5–8",
    description:
      "Implement Server Action batch handlers and streaming endpoints equipped with circuit-breaker failover, exponential backoff with randomized jitter, and concurrency governors.",
  },
  {
    num: "03",
    title: "Real-Time Client Telemetry & Latency Dashboard",
    range: "Days 9–11",
    description:
      "Construct responsive telemetry views rendering delivery latency percentiles (p50, p95, p99), live HTTP retry waterfall streams, and automated health scorecards.",
  },
  {
    num: "04",
    title: "Integration Suite with Playwright & Chaos Harness",
    range: "Days 12–14",
    description:
      "Deliver full end-to-end integration test coverage utilizing Playwright, Jest mock servers, and simulated webhook receiver crashes to prove 0% duplicate dispatching.",
  },
];

const PERKS = [
  {
    icon: "badge",
    tone: "primary" as const,
    title: "Guaranteed Fast-Track Interview",
    description: "Bypass standard ATS resume filters and recruiter screening calls directly to Nimbus Pay's Engineering Assessment.",
    footer: "Stage 3 Direct Waiver",
  },
  {
    icon: "school",
    tone: "tertiary" as const,
    title: "Ashcombe University CS Elective Credit",
    description: "Pre-approved 15 CATS academic credit elective waiver for Year 3 software engineering practical coursework.",
    footer: "Faculty Pre-Approved",
  },
  {
    icon: "terminal",
    tone: "secondary" as const,
    title: "Nimbus Pay Open Labs PR",
    description: "Publicly merged pull request in Nimbus Pay's verified developer community organization with mentor co-sign.",
    footer: "Portfolio Evidence",
  },
];

const SIMILAR_PROJECTS = [
  {
    initial: "F",
    company: "Figma Labs",
    team: "Design Systems Core",
    match: "88% Match",
    title: "Design Token Engine & Accessible Component Suite",
    description:
      "Build high-performance AST parsing pipelines converting Figma token variables into semantic Tailwind CSS themes with strict WCAG AA contrast guarantees.",
    skills: ["Playwright E2E", "TypeScript", "AST Parsers"],
    meta: "3 wks • 3 spots left",
  },
  {
    initial: "W",
    company: "Wise",
    team: "Treasury & FX Platforms",
    match: "82% Match",
    title: "Global FX Real-Time Rate Cache & Resilient Fallback",
    description: "Implement optimistic UI state with Zustand and WebSocket reconnection backoff for live currency fluctuations handling micro-outages gracefully.",
    skills: ["Zustand & State", "WebSockets", "Next.js 14"],
    meta: "2 wks • 4 spots left",
  },
  {
    initial: "S",
    company: "Ledgerly",
    team: "Developer Experience Team",
    match: "91% Match",
    title: "Payment Intent Idempotency Middleware & Testing Sandbox",
    description: "Construct deterministic idempotency interceptors for multi-region checkout flows with simulated card declines, 3D Secure challenges, and state recovery.",
    skills: ["Redis Clustering", "TypeScript", "Playwright E2E"],
    meta: "3 wks • 1 spot left!",
    metaUrgent: true,
  },
];

export default function ProjectDetailPage() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-lg">
        <div className="flex items-center gap-space-xs font-body-sm text-on-surface-variant">
          <Link className="hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
          <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
          <Link className="hover:text-primary transition-colors" to="/projects">Projects</Link>
          <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
          <span className="text-on-surface font-semibold truncate max-w-xs md:max-w-md">Nimbus Pay — Multi-tenant Webhook Dispatcher &amp; Audit Log</span>
        </div>
        <Link className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary hover:text-on-primary-fixed-variant transition-colors group" to="/projects">
          <span className="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-x-0.5">arrow_back</span>
          <span>Back to Project Marketplace</span>
        </Link>
      </div>

      <div className="relative bg-surface-container-lowest rounded-xl p-space-xl shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] mb-space-xl overflow-hidden">
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-primary-container/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-space-md">
          <div className="flex flex-wrap items-center gap-space-sm">
            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center shadow-sm text-primary font-headline-sm font-bold tracking-tight">
              <span className="text-primary-container text-[20px] font-bold">M</span>
            </div>
            <div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface">
              <span className="font-bold">Nimbus Pay</span>
              <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }} title="Verified Industry Partner">verified</span>
              <span className="text-on-surface-variant font-normal">• FinTech Infrastructure Core Team</span>
            </div>
          </div>
          <div className="space-y-space-xs">
            <h1 className="font-headline-lg text-headline-lg text-on-surface">Multi-tenant Webhook Dispatcher &amp; Audit Log</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-4xl">
              Build high-throughput idempotent event queues handling 10k webhook deliveries per second with automated exponential backoff and interactive telemetry.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px]">signal_cellular_alt</span>
              Intermediate Level
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px]">schedule</span>
              2-Week Sprint (12 hrs/week)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px]">public</span>
              Remote • London UK Timezone
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>target</span>
              Target Gap: Next.js 14 App Router &amp; Redis State
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              Verified Fast-Track Interview Token
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start mb-space-xl">
        <div className="lg:col-span-8 flex flex-col gap-space-xl min-w-0">
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] flex flex-col gap-space-md">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary-container text-[24px]">terminal</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Overview &amp; Engineering Context</h2>
            </div>
            <div className="space-y-space-sm font-body-md text-body-md text-on-surface-variant">
              <p>
                At Nimbus Pay, thousands of third-party integrations rely on mission-critical webhook streams for instant payment reconciliation, settlement pushes, and merchant ledger updates. When destination endpoints suffer latency spikes or transient 500-series server faults, naive dispatchers easily cascade into catastrophic retry storms that saturate database connections.
              </p>
              <p>
                In this applied industry brief, you will construct a hardened event dispatch engine. Your solution will run inside an isolated staging environment simulating actual Nimbus Pay network topologies, subjected to randomized chaos injectors (network partition simulations, high jitter rates, and recipient rate-limiting).
              </p>
              <div className="p-space-md rounded-lg bg-surface-container-low flex items-start gap-space-sm mt-space-sm">
                <span className="material-symbols-outlined text-primary-container text-[20px] mt-0.5">info</span>
                <div className="font-body-sm text-body-sm text-on-surface">
                  <span className="font-semibold">Staging Sandbox Included:</span> Students receive dedicated credentials to a provisioned AWS EKS staging cluster running synthetic payment feeds alongside a pre-seeded Grafana instance for verification.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary-container text-[24px]">checklist</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Deliverables &amp; Milestones</h2>
              </div>
              <span className="font-caption text-caption text-on-surface-variant bg-surface-container-low px-2.5 py-1 rounded-full font-semibold">4 Sprint Milestones</span>
            </div>
            <div className="flex flex-col gap-space-sm relative">
              {MILESTONES.map((m) => (
                <div key={m.num} className="flex items-start gap-space-md p-space-md rounded-lg bg-surface-container-low/50 hover:bg-surface-container-low transition-colors group">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-label-sm text-label-sm shrink-0 ${
                      m.active ? "bg-primary-container text-on-primary shadow-sm" : "bg-surface-container-high text-on-surface-variant"
                    }`}
                  >
                    {m.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-space-xs">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">{m.title}</h3>
                      <span className={`font-caption text-caption font-medium ${m.active ? "text-primary font-semibold" : "text-on-surface-variant"}`}>{m.range}</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] flex flex-col gap-space-md">
            <div className="flex flex-wrap items-center justify-between gap-space-sm">
              <div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary-container text-[24px]">hub</span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">Competency Mapping for Maya Lin</h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Cross-referenced against your Year 3 Computer Science transcript and SkillBridge Git portfolio.
                </p>
              </div>
              <div className="flex items-center gap-space-xs px-3 py-1.5 rounded-lg bg-tertiary/10 text-tertiary font-label-md text-label-md">
                <span className="material-symbols-outlined text-[18px]">auto_graph</span>
                <span className="font-bold">94% Role Alignment</span>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-primary-fixed/30 flex items-start gap-space-md">
              <div className="p-2 bg-primary-container text-on-primary rounded-lg shrink-0">
                <span className="material-symbols-outlined text-[24px]">electric_bolt</span>
              </div>
              <div className="space-y-1">
                <div className="font-headline-sm text-headline-sm text-on-surface">High Impact Career Bridge</div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  This single sprint directly closes your verified gap in <strong className="text-on-surface">Next.js 14 App Router</strong> and{" "}
                  <strong className="text-on-surface">Distributed State</strong>, making your profile immediately interview-ready for Junior Full-Stack Engineer vacancies at Nimbus Pay.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
              <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <h3 className="font-label-md text-label-md text-on-surface font-semibold">Skills You Have Verified (Matched)</h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["TypeScript", "Redis", "Docker", "Git & CI/CD"].map((skill) => (
                    <span key={skill} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[14px]">done</span> {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                  <h3 className="font-label-md text-label-md text-on-surface font-semibold">Skills You Will Bridge &amp; Master</h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Next.js 14 App Router", "Idempotent Queues", "Backoff Jitter Patterns"].map((skill) => (
                    <span key={skill} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[14px]">trending_up</span> {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] flex flex-col gap-space-md">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary-container text-[24px]">support_agent</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Lead Mentor &amp; Reviewer</h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-lg p-space-md rounded-xl bg-surface-container-low">
              <div className="relative shrink-0">
                <img className="w-20 h-20 rounded-xl object-cover shadow-sm" alt="David O'Connor, Staff Infrastructure Engineer" src={MENTOR_PHOTO_URL} />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-tertiary rounded-full ring-2 ring-surface flex items-center justify-center" title="Active Nimbus Pay Mentor">
                  <span className="material-symbols-outlined text-[12px] text-on-tertiary">check</span>
                </div>
              </div>
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">David O&apos;Connor</h3>
                  <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Staff Infrastructure Engineer</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Nimbus Pay • Ex-Deliveroo • Ashcombe University Computer Science Alum</p>
                <p className="font-body-sm text-body-sm text-on-surface italic pt-1">
                  &ldquo;Looking for clean error boundaries and clear logging. Top 2 submissions get direct referrals to our graduate SWE scheme.&rdquo;
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
              <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[18px]">calendar_today</span>
                <span>Office Hours: <strong>Thursdays 5:00 PM BST (Zoom)</strong></span>
              </div>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-variant transition-colors font-label-md text-label-md">
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Message via SkillBridge</span>
              </button>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] flex flex-col gap-space-md">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary-container text-[24px]">verified</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">What You Earn &amp; Career Incentives</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              {PERKS.map((perk) => (
                <div key={perk.title} className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between gap-space-sm hover:shadow-sm transition-shadow">
                  <div className="space-y-space-xs">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        perk.tone === "primary" ? "bg-primary-fixed text-primary" : perk.tone === "tertiary" ? "bg-tertiary-fixed text-tertiary" : "bg-secondary-container text-on-surface"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">{perk.icon}</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">{perk.title}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{perk.description}</p>
                  </div>
                  <span className={`font-caption text-caption font-semibold ${perk.tone === "primary" ? "text-primary" : perk.tone === "tertiary" ? "text-tertiary" : "text-secondary"}`}>{perk.footer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-space-md sticky top-20">
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex flex-col gap-space-md">
            <div className="flex items-center justify-between gap-space-xs">
              <span className="font-label-sm text-label-sm font-bold text-on-surface">Cohort #04</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse" />
                Only 2 spots remaining
              </span>
            </div>
            <div className="space-y-1">
              <div className="font-headline-md text-headline-md text-on-surface">Accepting Applications</div>
              <div className="font-body-sm text-body-sm text-error font-medium flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">timer</span>
                Closes Sunday, Oct 26 (in 4 days)
              </div>
            </div>
            <div className="space-y-space-xs py-space-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
                <span className="text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span> Sprint Dates
                </span>
                <span className="font-semibold text-on-surface">Oct 30 – Nov 13, 2025</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
                <span className="text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">timelapse</span> Weekly Time
                </span>
                <span className="font-semibold text-on-surface">~12 hrs/wk (Flexible)</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
                <span className="text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">group</span> Cohort Cap
                </span>
                <span className="font-semibold text-on-surface">8 Students Max</span>
              </div>
            </div>
            <div className="flex flex-col gap-space-xs pt-space-xs">
              <button
                className="w-full py-3 px-space-md rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-all shadow-[0_2px_8px_rgba(79,70,229,0.3)] flex items-center justify-center gap-2 group"
                onClick={() => navigate("/applications")}
              >
                <span>Apply now for Sprint</span>
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
              <button className="w-full py-2.5 px-space-md rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">bookmark_border</span>
                <span>Save to Wishlist</span>
              </button>
            </div>
            <div className="pt-space-sm space-y-space-xs">
              <span className="font-label-sm text-label-sm text-on-surface font-semibold uppercase tracking-wider">Your Prerequisite Status</span>
              <div className="space-y-1.5 font-body-sm text-body-sm">
                {["Year 2/3 CS degree enrolled (Ashcombe University)", "Passed TypeScript Level 2 baseline", "GitHub Student account connected"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-tertiary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-space-xs rounded bg-surface-container-low/60 flex items-center gap-2 text-on-surface-variant font-caption text-caption">
              <span className="material-symbols-outlined text-[16px] text-outline">shield</span>
              <span>100% Student IP retention • Sponsored by Nimbus Pay UK</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] flex items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-primary text-[24px]">contact_support</span>
              <div className="font-body-sm text-body-sm">
                <div className="font-semibold text-on-surface">Unsure if you fit?</div>
                <div className="text-on-surface-variant">Ask our university liaison team</div>
              </div>
            </div>
            <button className="p-2 text-primary hover:bg-surface-container-low rounded-lg transition-colors">
              <span className="material-symbols-outlined text-[20px]">send</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-space-lg mb-space-xl">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="font-headline-md text-headline-md text-on-surface">Similar Applied Projects You Might Like</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Recommended based on your Next.js target gaps and verified TypeScript competency.</p>
          </div>
          <a className="font-label-md text-label-md text-primary hover:underline flex items-center gap-1 font-semibold" href="#">
            <span>Browse all 28 sprints</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {SIMILAR_PROJECTS.map((p) => (
            <div key={p.company} className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] hover:shadow-lg transition-all flex flex-col justify-between group">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center font-bold text-on-surface text-sm">{p.initial}</div>
                    <div>
                      <div className="font-label-md text-label-md font-semibold text-on-surface">{p.company}</div>
                      <div className="font-caption text-caption text-on-surface-variant">{p.team}</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-label-sm font-semibold">{p.match}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.skills.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant font-caption text-caption">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="pt-space-md mt-space-md border-t border-surface-variant/40 flex items-center justify-between">
                <span className={`font-caption text-caption ${p.metaUrgent ? "text-error font-semibold" : "text-on-surface-variant"}`}>{p.meta}</span>
                <button className="font-label-md text-label-md text-primary font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  <span>View Sprint</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
