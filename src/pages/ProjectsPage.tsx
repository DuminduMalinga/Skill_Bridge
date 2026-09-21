import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

interface ProjectCard {
  initials: string;
  initialsColor: string;
  company: string;
  meta: string;
  level: string;
  title: string;
  description: string;
  skills: { label: string; verified?: boolean }[];
  duration: string;
  spots: string;
  spotsUrgent?: boolean;
  perkIcon: string;
  perkText: string;
  perkTone: "primary" | "muted";
  bestMatch?: boolean;
}

const PROJECTS: ProjectCard[] = [
  {
    initials: "MZ",
    initialsColor: "text-[#E5484D]",
    company: "Nimbus Pay",
    meta: "Remote • 2-week Sprint",
    level: "Intermediate",
    title: "Multi-tenant Webhook Dispatcher & Audit Log",
    description:
      "Build high-throughput idempotent event queues handling 10k webhook deliveries per second with automatic backoff retries and Next.js 14 live telemetry dashboard.",
    skills: [{ label: "Next.js 14 App Router", verified: true }, { label: "TypeScript" }, { label: "Redis" }],
    duration: "2 wks • 12 hrs/wk",
    spots: "🔥 2 spots left of 8",
    spotsUrgent: true,
    perkIcon: "verified",
    perkText: "Verified Mentor Review + Guaranteed Nimbus Pay Engineering Fast-Track Interview",
    perkTone: "primary",
    bestMatch: true,
  },
  {
    initials: "FG",
    initialsColor: "text-primary",
    company: "Figma Labs",
    meta: "Remote / Hybrid (London) • 3-wk Cohort",
    level: "Advanced",
    title: "Accessible Design System Token Engine & Component Suite",
    description:
      "Refactor core UI primitive components to meet strict WCAG 2.2 AAA compliance standards accompanied by automated visual regression test suites.",
    skills: [{ label: "Playwright E2E", verified: true }, { label: "TypeScript Generics" }, { label: "Tailwind CSS" }],
    duration: "3 wks • 10 hrs/wk",
    spots: "3 spots left of 10",
    perkIcon: "workspace_premium",
    perkText: "Official Figma Community Showcase Feature + Senior Design System Lead Mentorship",
    perkTone: "primary",
    bestMatch: true,
  },
  {
    initials: "WS",
    initialsColor: "text-tertiary",
    company: "Wise",
    meta: "Remote • 2-week Sprint",
    level: "Intermediate",
    title: "Global FX Real-Time Rate Cache & Resilient Fallback",
    description:
      "Implement distributed caching strategies with zero-downtime circuit breaker fallbacks for currency volatility events and streaming client state.",
    skills: [{ label: "Zustand & State", verified: true }, { label: "Next.js 14" }, { label: "REST APIs" }],
    duration: "2 wks • 14 hrs/wk",
    spots: "4 spots left of 12",
    perkIcon: "speed",
    perkText: "Fast-Track Guarantee: Technical Interview Round 1 Exemption",
    perkTone: "primary",
    bestMatch: true,
  },
  {
    initials: "ST",
    initialsColor: "text-[#6366F1]",
    company: "Ledgerly",
    meta: "Remote • 3-week Sprint",
    level: "Advanced",
    title: "Payment Intent Idempotency Middleware & Testing Sandbox",
    description:
      "Construct robust edge API integration layers with comprehensive mocks, end-to-end integration assertions, and automated failure injection.",
    skills: [{ label: "Playwright E2E" }, { label: "TypeScript" }, { label: "CI/CD GitHub Actions" }],
    duration: "3 wks • 12 hrs/wk",
    spots: "🔥 1 spot left (Final Review)",
    spotsUrgent: true,
    perkIcon: "code",
    perkText: "Ledgerly Developer Relations Direct Code Review + Certified Sandbox Credential",
    perkTone: "muted",
  },
  {
    initials: "VC",
    initialsColor: "text-on-surface",
    company: "Skyline Partner Lab",
    meta: "Remote • 2-week Sprint",
    level: "Advanced",
    title: "Streaming Server Actions & Edge Middleware Pipeline",
    description: "Optimize server component streaming boundaries and edge authentication middleware for high-traffic content platforms.",
    skills: [{ label: "Next.js 14 App Router" }, { label: "Server Actions" }, { label: "Edge Workers" }],
    duration: "2 wks • 8 hrs/wk",
    spots: "5 spots left of 10",
    perkIcon: "school",
    perkText: "Verified Ashcombe University CS Coursework Elective Credit + Skyline Ecosystem Showcase",
    perkTone: "muted",
  },
  {
    initials: "DV",
    initialsColor: "text-[#00CDBC]",
    company: "Deliveroo",
    meta: "Hybrid (London HQ) • 4-wk Cohort",
    level: "Intermediate",
    title: "Courier Dispatch Live Map & WebGL Route Visualizer",
    description: "Design and implement high-performance reactive geospatial map markers with smooth state transitions and offline client sync.",
    skills: [{ label: "React & Hooks" }, { label: "State Management" }, { label: "WebGL / Canvas" }],
    duration: "4 wks • 10 hrs/wk",
    spots: "6 spots left of 15",
    perkIcon: "apartment",
    perkText: "On-site London Tech Office Hack Day + Lead Engineer Office Hours",
    perkTone: "muted",
  },
];

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl w-full mx-auto pb-16">
        <div className="flex items-center justify-between py-space-sm mb-space-xs">
          <div className="flex items-center gap-space-xs font-caption text-caption text-on-surface-variant">
            <Link className="hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
            <span>/</span>
            <span className="text-on-surface font-medium">Project Marketplace</span>
          </div>
          <div className="flex items-center gap-space-sm text-caption font-caption text-on-surface-variant">
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-tertiary-container" />
              Live Match Engine Active
            </span>
            <span>•</span>
            <span>Curriculum Sync: Ashcombe University CS Year 3</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-lg">
          <div className="max-w-2xl">
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Industry Project Marketplace</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              Real-world engineering briefs verified by tech leads. Build production features, close your missing Frontend competencies, and earn guaranteed interview fast-tracks.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-xs">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest shadow-sm text-on-surface text-label-sm font-label-sm">
              <span className="material-symbols-outlined text-[16px] text-primary">target</span>
              Target: <span className="font-semibold text-primary">Frontend Developer</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest shadow-sm text-on-surface text-label-sm font-label-sm">
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse" />
              <span className="font-semibold text-on-surface">3 Verified Fast-Tracks</span> Available
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">6 Matching Sprints</div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md mb-space-lg flex flex-col gap-space-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-sm items-center">
            <div className="lg:col-span-4 relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
              <input
                className="w-full pl-9 pr-3 py-2 text-body-sm font-body-sm rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container/20 transition-all"
                placeholder="Filter by company or project keywords..."
                type="text"
                defaultValue="Next.js, TypeScript"
              />
            </div>
            <div className="lg:col-span-2 relative">
              <select className="w-full px-3 py-2 text-body-sm font-body-sm rounded-lg bg-surface-container-low text-on-surface appearance-none focus:outline-none focus:ring-2 focus:ring-primary-container/20 cursor-pointer" defaultValue="Next.js 14">
                <option>All Skills</option>
                <option>Next.js 14</option>
                <option>TypeScript</option>
                <option>Zustand / State</option>
                <option>Playwright E2E</option>
                <option>Redis / Caching</option>
                <option>Tailwind CSS</option>
              </select>
              <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]">expand_more</span>
            </div>
            <div className="lg:col-span-2 relative">
              <select className="w-full px-3 py-2 text-body-sm font-body-sm rounded-lg bg-surface-container-low text-on-surface appearance-none focus:outline-none focus:ring-2 focus:ring-primary-container/20 cursor-pointer">
                <option>All Levels</option>
                <option>Foundational</option>
                <option>Intermediate</option>
                <option>Advanced / Production</option>
              </select>
              <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]">expand_more</span>
            </div>
            <div className="lg:col-span-2 relative">
              <select className="w-full px-3 py-2 text-body-sm font-body-sm rounded-lg bg-surface-container-low text-on-surface appearance-none focus:outline-none focus:ring-2 focus:ring-primary-container/20 cursor-pointer">
                <option>Any Duration</option>
                <option>1-2 Weeks Sprint</option>
                <option>2-3 Weeks</option>
                <option>4 Weeks Cohort</option>
              </select>
              <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]">expand_more</span>
            </div>
            <div className="lg:col-span-2 relative">
              <select className="w-full px-3 py-2 text-body-sm font-body-sm rounded-lg bg-surface-container-low text-on-surface appearance-none focus:outline-none focus:ring-2 focus:ring-primary-container/20 cursor-pointer" defaultValue="Remote Only">
                <option>Work Type</option>
                <option>Remote Only</option>
                <option>Hybrid (London)</option>
                <option>On-Site</option>
              </select>
              <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]">expand_more</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-space-xs">
            <div className="flex flex-wrap items-center gap-space-xs">
              <span className="font-caption text-caption text-on-surface-variant font-medium mr-1">Active:</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-caption text-caption font-semibold">
                Role Gap: Next.js &amp; TypeScript
                <button aria-label="Remove filter" className="hover:opacity-75 transition-opacity"><span className="material-symbols-outlined text-[14px]">close</span></button>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-caption text-caption font-medium">
                Remote Allowed
                <button aria-label="Remove filter" className="hover:opacity-75 transition-opacity"><span className="material-symbols-outlined text-[14px]">close</span></button>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-caption text-caption font-medium">
                Verified Mentorship
                <button aria-label="Remove filter" className="hover:opacity-75 transition-opacity"><span className="material-symbols-outlined text-[14px]">close</span></button>
              </span>
              <button className="font-caption text-caption text-primary hover:underline font-semibold ml-1">Clear all</button>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-space-md">
              <span className="font-caption text-caption text-on-surface-variant">Showing <strong className="text-on-surface font-semibold">6</strong> of 18 live briefs</span>
              <div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface cursor-pointer hover:text-primary">
                <span>Sort:</span>
                <span className="font-semibold text-primary">Highest Gap Match</span>
                <span className="material-symbols-outlined text-[16px] text-primary">arrow_drop_down</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {PROJECTS.map((project) => (
            <div key={project.title} className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-space-lg flex flex-col justify-between relative group">
              {project.bestMatch && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-container text-on-primary font-caption text-caption font-semibold shadow-sm">
                  <span className="material-symbols-outlined text-[13px]">stars</span>
                  ★ Best match for you
                </div>
              )}
              <div>
                <div className={`flex items-start justify-between gap-space-sm mb-space-md ${project.bestMatch ? "pt-1" : ""}`}>
                  <div className="flex items-center gap-space-sm">
                    <div className={`w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-sm text-headline-sm font-bold shadow-xs ${project.initialsColor}`}>
                      {project.initials}
                    </div>
                    <div>
                      <h3 className="font-label-md text-label-md font-semibold text-on-surface leading-tight">{project.company}</h3>
                      <span className="font-caption text-caption text-on-surface-variant">{project.meta}</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-secondary-fixed text-on-secondary-fixed font-caption text-caption font-semibold">{project.level}</span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs group-hover:text-primary transition-colors">{project.title}</h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-space-md">{project.description}</p>
                <div className="flex flex-wrap items-center gap-1.5 mb-space-md">
                  {project.skills.map((skill) =>
                    skill.verified ? (
                      <span key={skill.label} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-caption text-caption font-medium">
                        <span className="material-symbols-outlined text-[13px] text-tertiary">check_circle</span>
                        {skill.label}
                      </span>
                    ) : (
                      <span key={skill.label} className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-caption text-caption font-medium">{skill.label}</span>
                    )
                  )}
                </div>
                <div className="flex items-center justify-between font-caption text-caption text-on-surface-variant mb-space-md py-space-xs px-space-sm rounded-lg bg-surface-container-low">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant">schedule</span>
                    <span>{project.duration}</span>
                  </div>
                  <div className={`inline-flex items-center gap-1 font-semibold ${project.spotsUrgent ? "text-[#B45309]" : "text-on-surface"}`}>
                    <span>{project.spots}</span>
                  </div>
                </div>
                <div className={`p-space-sm rounded-lg mb-space-lg flex items-start gap-2 ${project.perkTone === "primary" ? "bg-primary-fixed/40" : "bg-surface-container"}`}>
                  <span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0">{project.perkIcon}</span>
                  <p className="font-caption text-caption text-on-surface font-medium leading-snug">{project.perkText}</p>
                </div>
              </div>
              <div>
                <Link
                  className="w-full py-2.5 px-4 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-semibold transition-all shadow-sm flex items-center justify-center gap-1.5 group-hover:translate-y-[-1px]"
                  to="/project-detail"
                >
                  Apply for Sprint
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-space-xl bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex items-start gap-space-md max-w-3xl">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[26px]">lightbulb</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Can&apos;t find what matches your current gap?</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Have an industry partner or open-source repo in mind? Submit an autonomous project proposal to earn Ashcombe University CS modular credit and SkillBridge verification.
              </p>
            </div>
          </div>
          <button className="shrink-0 px-space-lg py-2.5 rounded-lg bg-surface-container-low hover:bg-secondary-container text-primary font-label-md text-label-md font-semibold transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Propose Custom Project Brief
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
