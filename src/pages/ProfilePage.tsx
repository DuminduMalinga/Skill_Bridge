import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

const AVATAR_URL =
  "https://lh3.googleusercontent.com/aida/AEtjO1X4U_DaYnl2TTfmwLoWpCsD3lhiWKuRWG_Qwl4-z0xrgNCTB8mqISZNCawnkUfhGBlNOsMhLKcr58OrfqzTk7w41HMtgJbUg28gZ88pGtezLtFRnfDIFFKMNZpFw-zEuWIeTcFHNh-K7cW_gFqUDjc0_zrRYw2qp652jp8JizfcqnSRwONE9mmliVb61CWUYGGKFP45Fvsb9Ip9YJE21bftNMoxNHSpSanlIJzUc_hwX57tlRWgOHHb5074";

type TabKey = "skills" | "projects" | "experience" | "education";

const TABS: { key: TabKey; label: string; count: number }[] = [
  { key: "skills", label: "Skills & Proficiencies", count: 14 },
  { key: "projects", label: "Projects & Sprints", count: 4 },
  { key: "experience", label: "Experience", count: 3 },
  { key: "education", label: "Education & Coursework", count: 2 },
];

const VERIFIED_SKILLS = [
  { title: "Semantic HTML5 & Modern CSS", meta: "Ashcombe University COMP0004 • 100% Mastery", level: "Mastery" },
  { title: "JavaScript (ES6+) & TypeScript", meta: "Level 4 Certified • Nimbus Pay Verified", level: "Advanced" },
  { title: "React & Architecture", meta: "Ashcombe University Hackathon Winner 2024", level: "Advanced" },
  { title: "Responsive Design & Tailwind", meta: "Ashcombe University HCI Lab • 94% Mark", level: "Mastery" },
  { title: "Git & GitHub CI/CD", meta: "42 commits & rebase verified", level: "Advanced" },
  { title: "Docker & Linux Primitives", meta: "Ashcombe University OS Coursework Finalist", level: "Advanced" },
];

const IN_PROGRESS_SKILLS = [
  { title: "Next.js 14 App Router & SSR", meta: "Self-studying via Skyline Labs", level: "Intermediate" },
  { title: "Zustand & Distributed State", meta: "Sprint in progress: Figma Labs", level: "Intermediate" },
  { title: "Automated E2E (Playwright)", meta: "Applied in personal toolkit", level: "Intermediate" },
  { title: "Redis & Idempotency Queues", meta: "Sprint in progress: Nimbus Pay", level: "Beginner" },
  { title: "WebGL & Canvas Graphics", meta: "Hobbyist experimental work", level: "Beginner" },
];

const PROJECT_CARDS = [
  {
    tag: "Figma Labs Co-op Sprint",
    status: "Day 5 of 21",
    statusPulse: true,
    title: "Accessible Design System Token Engine & Component Suite",
    description: "Architecting cross-platform token synchronizer and headless primitives for high-contrast accessibility compliance across web apps.",
    skills: ["TypeScript", "Playwright", "Tailwind CSS", "Radix UI"],
    footerIcon: "schedule",
    footerText: "PR review pending by Figma Staff Eng",
    linkLabel: "View Live Code",
    linkIcon: "launch",
  },
  {
    tag: "Nimbus Pay Infrastructure Sprint",
    status: "Upcoming (Starts Mon)",
    title: "Multi-tenant Webhook Dispatcher & Audit Log",
    description: "High-throughput idempotent delivery system using Redis retry queues and signed verification headers to secure financial events.",
    skills: ["Next.js 14", "Redis", "Docker", "Go Primitives"],
    footerIcon: "verified_user",
    footerText: "Verified fast-track token allocated",
    linkLabel: "View Brief",
    linkIcon: "arrow_forward",
  },
  {
    tag: "Independent & Wise Matching",
    status: "Completed",
    title: "Global FX Real-Time Rate Cache & Resilient Fallback",
    description: "Resilient currency ticker client using WebSockets with automatic backoff, indexed local storage persistence, and circuit breaker patterns.",
    skills: ["Zustand", "WebSockets", "REST APIs"],
    footerIcon: "stars",
    footerText: "Wise Engineering Commendation",
    linkLabel: "View Repository",
    linkIcon: "launch",
  },
  {
    tag: "Ashcombe University Year 2 Capstone",
    status: "1st Place Award",
    title: "CampusConnect: Peer Tutoring Platform",
    description: "Full-stack appointment scheduling and interactive whiteboard platform serving 1,200+ Ashcombe University Engineering undergraduates.",
    skills: ["React", "Node.js", "PostgreSQL"],
    footerIcon: "emoji_events",
    footerText: "Faculty Showcase Winner 2024",
    linkLabel: "View Case Study",
    linkIcon: "arrow_forward",
  },
];

const EXPERIENCE_ENTRIES = [
  {
    dot: "bg-primary",
    title: "Software Engineering Intern (Incoming)",
    badge: "Offer Accepted",
    date: "Summer 2026",
    org: "Nimbus Pay • London, UK",
    description:
      "Selected via the SkillBridge accelerated partner path. Fast-track waiver granted after scoring in the 98th percentile on the Nimbus Pay Distributed Systems Challenge.",
  },
  {
    dot: "bg-tertiary-container",
    title: "Teaching Assistant: Principles of Programming",
    date: "Sep 2024 – Present",
    org: "Ashcombe University Department of Computer Science • London, UK",
    description:
      "Mentoring 80+ first-year undergraduates through weekly Python problem sets, memory layout fundamentals, and recursion lab reviews. Supervised code clarity grading and office hours.",
  },
  {
    dot: "bg-outline",
    title: "Open Source Contributor & Maintainer",
    date: "2023 – Present",
    org: "React Community & Radix UI Primitives",
    description:
      "18 merged pull requests across headless UI repositories. Enhanced ARIA compliant keyboard navigation for dropdown menus and focus trap handlers in complex dialog portals.",
  },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<TabKey>("skills");

  return (
    <DashboardLayout>
      <div className="max-w-7xl w-full mx-auto pb-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 mb-2">
          <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
            <Link className="hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
            <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
            <span className="text-on-surface font-semibold">Student Profile</span>
          </div>
          <div className="flex items-center gap-3">
            <Link className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors group" to="/student-profile-view">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary transition-colors">visibility</span>
              <span>Public Profile View</span>
            </Link>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-[0_1px_3px_0_rgba(0,0,0,0.08)] hover:bg-surface-tint active:scale-[0.99] transition-all">
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Download Resume (PDF)</span>
            </button>
          </div>
        </div>

        <section className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.04),0_1px_2px_-1px_rgba(0,0,0,0.02)] mb-8 relative">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="relative shrink-0">
                <img alt="Maya Lin" className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-[0_4px_12px_rgba(0,0,0,0.06)]" src={AVATAR_URL} />
                <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-surface-container-lowest shadow-[0_1px_3px_rgba(0,0,0,0.1)]" title="Verified Ashcombe University Identity">
                  <span className="material-symbols-outlined text-[16px] text-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Maya Lin</h1>
                  <span className="font-caption text-caption text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded-md">she/her</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/60 text-primary font-label-sm text-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container" />
                    Active Candidate
                  </span>
                  <button className="p-1 rounded-md text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors" title="Edit Name & Pronouns">
                    <span className="material-symbols-outlined text-[16px]">edit</span>
                  </button>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant font-medium mb-3 max-w-2xl">
                  Final Year Computer Science Undergrad at Ashcombe University • Aspiring Frontend &amp; Distributed Systems Engineer
                </p>
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-on-surface-variant font-body-sm text-body-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-primary">school</span>
                    <span>Ashcombe University</span>
                  </div>
                  <span className="text-outline-variant">•</span>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant">terminal</span>
                    <span>BSc Computer Science, 2026</span>
                  </div>
                  <span className="text-outline-variant">•</span>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant">location_on</span>
                    <span>London, UK • Remote/Hybrid</span>
                  </div>
                  <span className="text-outline-variant">•</span>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-tertiary-container">grade</span>
                    <span className="font-semibold text-on-surface">First Class Track (3.92 GPA)</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 bg-transparent">
                  <a className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant hover:text-primary px-2.5 py-1 rounded-md bg-surface-container-low hover:bg-surface-container transition-colors" href="#">
                    <span className="material-symbols-outlined text-[16px]">code</span>
                    <span>github.com/mayalin-ashcombe</span>
                  </a>
                  <a className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant hover:text-primary px-2.5 py-1 rounded-md bg-surface-container-low hover:bg-surface-container transition-colors" href="#">
                    <span className="material-symbols-outlined text-[16px]">person_book</span>
                    <span>linkedin.com/in/maya-lin</span>
                  </a>
                  <a className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant hover:text-primary px-2.5 py-1 rounded-md bg-surface-container-low hover:bg-surface-container transition-colors" href="#">
                    <span className="material-symbols-outlined text-[16px]">link</span>
                    <span>mayalin.dev</span>
                  </a>
                  <button className="p-1 rounded text-on-surface-variant hover:text-primary transition-colors" title="Manage links">
                    <span className="material-symbols-outlined text-[16px]">edit</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between w-full lg:w-auto gap-4 shrink-0">
              <div className="flex items-center gap-2">
                <Link className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors" to="/progress">
                  <span className="material-symbols-outlined text-[18px]">emoji_events</span>
                  <span>Progress</span>
                </Link>
                <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors">
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                  <span>Edit Profile</span>
                </button>
                <button className="p-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="Share Public URL">
                  <span className="material-symbols-outlined text-[18px]">share</span>
                </button>
              </div>
              <div className="bg-surface p-3.5 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.03)] flex items-center gap-3">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-secondary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                    <path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="68, 100" strokeLinecap="round" strokeWidth="3" />
                  </svg>
                  <span className="absolute font-headline-sm text-[13px] font-bold text-on-surface">68%</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold">Industry Ready</span>
                  <span className="font-caption text-caption text-on-surface-variant">Top Tier Quartile</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`tab-btn inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-label-md text-label-md transition-all ${
                activeTab === tab.key ? "bg-primary text-on-primary" : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              <span>{tab.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-caption font-semibold ${activeTab === tab.key ? "bg-surface-container-lowest/20" : "bg-surface-container-low"}`}>{tab.count}</span>
            </button>
          ))}
        </div>

        {activeTab === "skills" && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <h2 className="font-headline-md text-headline-md text-on-surface">Skills &amp; Competencies</h2>
                <button className="p-1 text-on-surface-variant hover:text-primary rounded" title="Edit Skills">
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                </button>
              </div>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md transition-colors">
                <span className="material-symbols-outlined text-[18px]">add</span>
                <span>Add Skill</span>
              </button>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-7 shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-secondary-container/40 text-tertiary-container">
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">Industry &amp; Academically Verified Skills</span>
                  <span className="font-caption text-caption text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded">6 verified</span>
                </div>
                <span className="font-caption text-caption text-on-surface-variant hidden sm:inline">Validated via Ashcombe University exams &amp; employer sprints</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {VERIFIED_SKILLS.map((skill) => (
                  <div key={skill.title} className="group relative flex items-start justify-between p-3.5 rounded-xl bg-surface hover:bg-surface-container-low transition-all">
                    <div className="flex flex-col min-w-0 pr-2">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-label-md text-label-md text-on-surface font-semibold truncate">{skill.title}</span>
                        <span className="material-symbols-outlined text-[15px] text-tertiary-container shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      </div>
                      <span className="font-caption text-caption text-on-surface-variant truncate">{skill.meta}</span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-container/50 text-tertiary">{skill.level}</span>
                      <button className="opacity-0 group-hover:opacity-100 p-1 text-on-surface-variant hover:text-primary transition-opacity" title="Edit skill item">
                        <span className="material-symbols-outlined text-[15px]">edit</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-7 shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-surface-container-high text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">bolt</span>
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">Self-Reported &amp; In-Progress Skills</span>
                  <span className="font-caption text-caption text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded">5 active</span>
                </div>
                <span className="font-caption text-caption text-on-surface-variant hidden sm:inline">Earn employer verification via active sprints</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {IN_PROGRESS_SKILLS.map((skill) => (
                  <div key={skill.title} className="group flex flex-col justify-between p-3.5 rounded-xl bg-surface hover:bg-surface-container-low transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-md text-label-md text-on-surface font-semibold truncate">{skill.title}</span>
                        <span className="font-caption text-caption text-on-surface-variant">{skill.meta}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant">{skill.level}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <a className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary hover:underline" href="#">
                        <span>+ Verify with Project</span>
                        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </a>
                      <button className="opacity-0 group-hover:opacity-100 p-1 text-on-surface-variant hover:text-primary transition-opacity">
                        <span className="material-symbols-outlined text-[15px]">edit</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "projects" && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <h2 className="font-headline-md text-headline-md text-on-surface">Projects &amp; Real-World Sprints</h2>
                <button className="p-1 text-on-surface-variant hover:text-primary rounded" title="Edit Projects list">
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                </button>
              </div>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md transition-colors">
                <span className="material-symbols-outlined text-[18px]">add</span>
                <span>Add Project</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECT_CARDS.map((project) => (
                <div key={project.title} className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-md bg-secondary-container/40 text-primary font-label-sm text-label-sm font-semibold">{project.tag}</span>
                        <span
                          className={
                            project.statusPulse
                              ? "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/60 text-tertiary font-caption text-caption font-semibold"
                              : "px-2 py-0.5 rounded-full bg-surface-container font-caption text-caption text-on-surface-variant font-medium"
                          }
                        >
                          {project.statusPulse && <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container animate-pulse" />}
                          {project.status}
                        </span>
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 p-1 text-on-surface-variant hover:text-primary transition-opacity">
                        <span className="material-symbols-outlined text-[16px]">edit</span>
                      </button>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.skills.map((skill) => (
                        <span key={skill} className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 bg-surface-container-low/40 -mx-6 -mb-6 px-6 py-3.5 rounded-b-2xl">
                    <span className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px] text-tertiary-container">{project.footerIcon}</span>
                      {project.footerText}
                    </span>
                    <a className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary hover:underline" href="#">
                      <span>{project.linkLabel}</span>
                      <span className="material-symbols-outlined text-[15px]">{project.linkIcon}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <h2 className="font-headline-md text-headline-md text-on-surface">Experience &amp; Industry Sprints</h2>
                <button className="p-1 text-on-surface-variant hover:text-primary rounded" title="Edit Experience list">
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                </button>
              </div>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md transition-colors">
                <span className="material-symbols-outlined text-[18px]">add</span>
                <span>Add Experience</span>
              </button>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]">
              <div className="relative pl-6 sm:pl-8 flex flex-col gap-8">
                <div className="absolute left-2.5 sm:left-3 top-3 bottom-3 w-0.5 bg-surface-container-high" />
                {EXPERIENCE_ENTRIES.map((entry) => (
                  <div key={entry.title} className="relative group">
                    <div className={`absolute -left-[27px] sm:-left-[35px] top-1 w-3 h-3 rounded-full ring-4 ring-surface-container-lowest ${entry.dot}`} />
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">{entry.title}</h3>
                        {entry.badge && <span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-secondary-container/40 text-primary font-semibold">{entry.badge}</span>}
                      </div>
                      <span className="font-caption text-caption text-on-surface-variant">{entry.date}</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface font-medium mb-2">{entry.org}</p>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">{entry.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "education" && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <h2 className="font-headline-md text-headline-md text-on-surface">Education &amp; Academic Coursework</h2>
                <button className="p-1 text-on-surface-variant hover:text-primary rounded" title="Edit Education details">
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                </button>
              </div>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md transition-colors">
                <span className="material-symbols-outlined text-[18px]">add</span>
                <span>Add Education</span>
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">account_balance</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Ashcombe University</h3>
                      <span className="px-2 py-0.5 rounded-full bg-secondary-container/50 text-tertiary font-label-sm text-label-sm font-semibold">Verified Enrollment</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface font-medium">BSc (Hons) Computer Science • 2023 – 2026 (Expected)</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 max-w-2xl">
                      Grade: First Class Honours Baseline (3.92 Equivalent GPA). Modules include: Algorithms, Distributed Systems, Software Engineering Architecture, Human-Computer Interaction, Operating Systems.
                    </p>
                  </div>
                </div>
                <button className="p-1.5 text-on-surface-variant hover:text-primary rounded self-end sm:self-start" title="Edit Ashcombe University record">
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                </button>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-on-surface-variant shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">history_edu</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">The Henrietta Barnett School</h3>
                    <p className="font-body-md text-body-md text-on-surface font-medium">A-Levels &amp; GCSEs • London, UK</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 max-w-2xl">
                      A-Levels: Mathematics (A*), Further Mathematics (A*), Computer Science (A*), Physics (A). Head of Robotics Society.
                    </p>
                  </div>
                </div>
                <button className="p-1.5 text-on-surface-variant hover:text-primary rounded self-end sm:self-start" title="Edit secondary school record">
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
