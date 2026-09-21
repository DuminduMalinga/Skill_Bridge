import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

const ROLES = ["Frontend Developer", "Full-Stack Engineer", "Mobile Developer (React Native)"];

const COURSES = [
  {
    provider: "Ashcombe University × Beacon Labs",
    rating: "4.9",
    title: "Advanced React & Concurrent Features",
    description: "Master useTransition, Suspense architectures, and hydration bailouts under heavy memory pressure.",
    tag: "Concurrency & Suspense",
    meta: "4 wks • Self-paced",
  },
  {
    provider: "Ledgerly Engineering",
    rating: "4.8",
    title: "Production TypeScript & Contract Design",
    description: "Strict type inference, conditional types, and schema synchronization using Zod and OpenAPI.",
    tag: "TypeScript Generics",
    meta: "3 wks • 12 hrs",
  },
  {
    provider: "Skyline Design Labs",
    rating: "4.9",
    title: "Modern CSS Architecture & Tailwind at Scale",
    description: "Build bulletproof, themeable UI systems utilizing token registries and sub-pixel precision layouts.",
    tag: "Design Systems",
    meta: "2 wks • 8 hrs",
  },
  {
    provider: "SkillBridge Core",
    rating: "4.7",
    title: "Next.js Server Actions & Streaming SSR",
    description: "Eliminate boilerplate REST endpoints with direct database mutations via React Server Components.",
    tag: "SSR & Hydration",
    meta: "3 wks • 10 hrs",
  },
];

const PROJECTS = [
  {
    initials: "MZ",
    company: "Nimbus Pay",
    sprint: "Partner Sandbox • 2-wk sprint",
    match: "94% Match",
    title: "Multi-tenant Webhook Dispatcher",
    description: "Build high-throughput idempotent event queues handling 10k webhook deliveries per second with automatic backoff retries.",
    skills: ["Redis", "TypeScript", "Docker"],
    incentive: (
      <>
        <strong>Verified Mentor Review</strong> + Nimbus Pay Fast-Track Interview Token.
      </>
    ),
  },
  {
    initials: "FG",
    company: "Figma Labs",
    sprint: "Partner Cohort • 3-wk sprint",
    match: "88% Match",
    title: "Accessible Design System Library",
    description: "Refactor core UI primitive components to meet strict WCAG AAA compliance standards accompanied by automated visual tests.",
    skills: ["React", "WCAG 2.2", "Storybook", "Tailwind"],
    incentive: (
      <>
        <strong>Portfolio Artifact</strong> + Official Figma Community Showcase Feature.
      </>
    ),
  },
  {
    initials: "WS",
    company: "Wise",
    sprint: "FinTech Core • 2-wk sprint",
    match: "82% Match",
    title: "Global FX Rate Cache & Fallback",
    description: "Implement distributed caching strategies with zero-downtime circuit breaker fallbacks for currency volatility events.",
    skills: ["Go / Python", "REST APIs", "Latency Tuning"],
    incentive: (
      <>
        <strong>Fast-Track Guarantee</strong>: Technical Interview Round 1 Exemption.
      </>
    ),
  },
];

export default function DashboardPage() {
  const [roleIndex, setRoleIndex] = useState(0);

  return (
    <DashboardLayout>
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pt-space-lg">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs text-primary font-label-md text-label-md">
            <span className="inline-block w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            <span>Active Career Sprint</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Welcome back, Maya <span className="inline-block animate-bounce">👋</span>
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Here is your skill progression benchmarked against live junior engineering openings across London & remote hubs.
          </p>
        </div>
        <div className="flex items-center gap-space-sm self-start md:self-auto bg-surface-container-lowest px-space-md py-2 rounded-full shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]">
          <span className="material-symbols-outlined text-[18px] text-tertiary">check_circle</span>
          <span className="font-caption text-caption text-on-surface-variant">
            Synced with <strong className="text-on-surface font-label-sm">Ashcombe University CS Syllabus</strong> • Updated today
          </span>
          <button className="p-1 rounded-full text-secondary hover:text-primary hover:bg-surface-container-low transition-colors" title="Force Sync">
            <span className="material-symbols-outlined text-[16px]">sync</span>
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-space-md">
              <div className="relative inline-block">
                <button
                  className="flex items-center gap-space-xs bg-surface-container-low hover:bg-surface-container px-3 py-1.5 rounded-full transition-colors text-left"
                  onClick={() => setRoleIndex((i) => (i + 1) % ROLES.length)}
                >
                  <span className="material-symbols-outlined text-[18px] text-primary">code</span>
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold">Target role: {ROLES[roleIndex]}</span>
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">expand_more</span>
                </button>
              </div>
              <span className="font-caption text-caption uppercase tracking-wider text-secondary">Cohort Top 15%</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center gap-space-lg my-space-md">
              <div className="relative w-36 h-36 flex-shrink-0 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle className="stroke-surface-container" cx="60" cy="60" fill="none" r="50" strokeWidth="10" />
                  <circle
                    className="stroke-primary-container transition-all duration-1000 ease-out"
                    cx="60"
                    cy="60"
                    fill="none"
                    r="50"
                    strokeDasharray="314.15"
                    strokeDashoffset="100.5"
                    strokeLinecap="round"
                    strokeWidth="10"
                  />
                  <circle className="fill-on-tertiary-container" cx="60" cy="10" r="3.5" />
                </svg>
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="font-display-hero text-headline-lg font-bold text-on-surface leading-none">68%</span>
                  <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider mt-1">Readiness</span>
                </div>
              </div>
              <div className="flex flex-col gap-space-xs text-center sm:text-left">
                <div className="inline-flex items-center justify-center sm:justify-start gap-1 text-tertiary font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[18px]">trending_up</span>
                  <span>+8% gain this month</span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">Industry Readiness Score</h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  12 of 18 core junior competencies verified through sandbox commits.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-space-md mt-space-sm bg-surface-container-low/40 -mx-space-lg -mb-space-lg px-space-lg py-space-md flex items-center justify-between">
            <span className="font-body-sm text-body-sm text-secondary">6 competencies remaining</span>
            <Link className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-primary-container transition-colors group-hover:translate-x-0.5" to="/skill-gap">
              <span>View full gap breakdown</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-sm">
                <span className="p-2 rounded-lg bg-surface-container text-tertiary">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                </span>
                <span className="px-2 py-0.5 rounded-full font-label-sm text-caption bg-tertiary-fixed text-on-tertiary-fixed font-medium">+3 this week</span>
              </div>
              <span className="font-body-sm text-body-sm text-secondary">Skills matched</span>
              <div className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
                14 <span className="font-body-md text-body-md text-secondary font-normal">/ 20</span>
              </div>
            </div>
            <div className="pt-space-md">
              <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mb-space-xs">
                <div className="bg-tertiary-container h-full rounded-full w-[70%]" />
              </div>
              <p className="font-caption text-caption text-on-surface-variant">70% target role coverage</p>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-sm">
                <span className="p-2 rounded-lg bg-surface-container text-primary">
                  <span className="material-symbols-outlined text-[20px]">play_circle</span>
                </span>
                <span className="font-label-sm text-caption text-secondary font-medium">2 Active</span>
              </div>
              <span className="font-body-sm text-body-sm text-secondary">Active Learning</span>
              <div className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
                2 <span className="font-body-md text-body-md text-secondary font-normal">courses</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-space-xs">
              <div>
                <div className="flex justify-between font-caption text-caption text-on-surface-variant mb-0.5">
                  <span className="truncate pr-2">Next.js 14 Router</span>
                  <span className="font-medium text-on-surface">70%</span>
                </div>
                <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
                  <div className="bg-primary-container h-full rounded-full w-[70%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-caption text-caption text-on-surface-variant mb-0.5">
                  <span className="truncate pr-2">Zustand State</span>
                  <span className="font-medium text-on-surface">35%</span>
                </div>
                <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
                  <div className="bg-primary-container h-full rounded-full w-[35%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-sm">
                <span className="p-2 rounded-lg bg-surface-container text-amber-600">
                  <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                </span>
                <span className="px-2 py-0.5 rounded-full font-label-sm text-caption bg-amber-100 text-amber-900 font-medium">1 Callback</span>
              </div>
              <span className="font-body-sm text-body-sm text-secondary">Project briefs</span>
              <div className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
                3 <span className="font-body-md text-body-md text-secondary font-normal">applied</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 pt-space-xs">
              <div className="flex items-center justify-between font-caption text-caption">
                <span className="text-on-surface font-medium truncate">Nimbus Pay FinTech</span>
                <span className="text-tertiary font-semibold flex items-center gap-0.5">Interview</span>
              </div>
              <div className="flex items-center justify-between font-caption text-caption">
                <span className="text-secondary truncate">Wise API Cache</span>
                <span className="text-on-surface-variant">Reviewing</span>
              </div>
              <div className="flex items-center justify-between font-caption text-caption">
                <span className="text-secondary truncate">Figma Labs Token</span>
                <span className="text-on-surface-variant">Submitted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-space-md">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs">
          <div>
            <div className="flex items-center gap-space-xs">
              <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Recommended courses for you</h2>
              <span className="px-2.5 py-0.5 rounded-full font-label-sm text-caption bg-primary-fixed text-on-primary-fixed font-semibold">AI Curated</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Targeted modules to close your remaining 32% gap for Junior Frontend Developer.
            </p>
          </div>
          <Link className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-primary-container font-semibold transition-colors" to="/courses">
            <span>View all courses</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {COURSES.map((course) => (
            <div
              key={course.title}
              className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-caption text-caption text-secondary font-medium">{course.provider}</span>
                  <span className="flex items-center text-amber-500 font-label-sm text-caption font-semibold">
                    <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                    <span className="ml-0.5 text-on-surface">{course.rating}</span>
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-2 leading-snug mb-space-xs">{course.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-space-md">{course.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-space-md">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-caption bg-tertiary-fixed text-on-tertiary-fixed">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                    <span>{course.tag}</span>
                  </span>
                </div>
              </div>
              <div className="pt-space-sm mt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-xl flex items-center justify-between">
                <span className="font-caption text-caption text-on-surface-variant">{course.meta}</span>
                <button className="font-label-sm text-label-sm text-primary hover:text-primary-container font-semibold inline-flex items-center gap-1">
                  Start <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-space-md">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs">
          <div>
            <div className="flex items-center gap-space-xs">
              <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Projects that match your skills</h2>
              <span className="px-2 py-0.5 rounded-full font-label-sm text-caption bg-tertiary-fixed text-on-tertiary-fixed font-semibold">Verified Briefs</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Real partner engineering briefs verified by industry tech leads to prove production capabilities.
            </p>
          </div>
          <Link className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-primary-container font-semibold transition-colors" to="/projects">
            <span>Explore all projects</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center font-bold text-on-surface text-caption">
                      {project.initials}
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold block leading-tight">{project.company}</span>
                      <span className="font-caption text-caption text-secondary">{project.sprint}</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full font-label-sm text-caption bg-tertiary-fixed text-on-tertiary-fixed font-bold inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                    {project.match}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-space-sm mb-space-xs">{project.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-space-md">
                  {project.skills.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded-md font-caption text-caption bg-surface-container text-on-surface">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-xs mb-space-lg">
                  <span className="material-symbols-outlined text-[18px] text-primary flex-shrink-0 mt-0.5">workspace_premium</span>
                  <span className="font-caption text-caption text-on-surface leading-tight">{project.incentive}</span>
                </div>
              </div>
              <button className="w-full py-2.5 px-4 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
                <span>Apply to Sprint</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
}
