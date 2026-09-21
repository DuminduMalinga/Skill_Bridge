import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

interface Institute {
  initials: string;
  bg: string;
  text: string;
  name: string;
  type: string;
  tags: [string, string];
  courses: string[];
  courseCount: string;
}

const INSTITUTES: Institute[] = [
  { initials: "VA", bg: "bg-primary-fixed", text: "text-primary", name: "Skyline Academy", type: "Training Center", tags: ["Frontend", "IT"], courses: ["Mastering Next.js 14 App Router & Server Actions"], courseCount: "1 course listed" },
  { initials: "FM", bg: "bg-secondary-fixed", text: "text-on-secondary-fixed", name: "Codecraft Masters", type: "Training Center", tags: ["IT", "Engineering"], courses: ["Advanced TypeScript Generics & Type Architecture"], courseCount: "1 course listed" },
  { initials: "MO", bg: "bg-tertiary-fixed", text: "text-tertiary", name: "Beacon Labs Open Source", type: "Professional Body", tags: ["Engineering", "IT"], courses: ["Modern State Management: Zustand, Jotai & RTK"], courseCount: "1 course listed" },
  { initials: "LE", bg: "bg-primary-fixed", text: "text-primary", name: "Ledgerly Engineering", type: "Professional Body", tags: ["Engineering", "Data Science"], courses: ["End-to-End Test Automation with Playwright & CI"], courseCount: "1 course listed" },
  { initials: "SO", bg: "bg-secondary-fixed", text: "text-on-secondary-fixed", name: "Ashworth Online", type: "University", tags: ["Design", "IT"], courses: ["Full-Stack Web Accessibility & WCAG 2.2 Deep Dive"], courseCount: "1 course listed" },
  { initials: "MI", bg: "bg-tertiary-fixed", text: "text-tertiary", name: "Meridian Institute OpenCourseWare", type: "University", tags: ["Engineering", "IT"], courses: ["Advanced React: Concurrent Features & Suspense"], courseCount: "1 course listed" },
  { initials: "SP", bg: "bg-primary-fixed", text: "text-primary", name: "Pathwise Pro", type: "Bootcamp", tags: ["IT", "Engineering"], courses: ["Production CI/CD Pipelines with GitHub & Edge Workers"], courseCount: "1 course listed" },
  { initials: "UC", bg: "bg-secondary-fixed", text: "text-on-secondary-fixed", name: "Ashcombe University CS Faculty", type: "University", tags: ["Engineering", "Data Science"], courses: ["Distributed Systems & In-Memory Redis Caching for Web"], courseCount: "1 course listed" },
  {
    initials: "RI",
    bg: "bg-tertiary-fixed",
    text: "text-tertiary",
    name: "Riverside Institute of Technology",
    type: "Training Center",
    tags: ["IT", "Business"],
    courses: ["Full-Stack Web Development Bootcamp", "Applied Data Science & Machine Learning"],
    courseCount: "5 courses listed",
  },
  {
    initials: "NC",
    bg: "bg-primary-fixed",
    text: "text-primary",
    name: "Northbridge Coding Academy",
    type: "Bootcamp",
    tags: ["IT", "Design"],
    courses: ["Intensive Product Design Sprint", "Backend Engineering with Node & PostgreSQL"],
    courseCount: "4 courses listed",
  },
  {
    initials: "AD",
    bg: "bg-secondary-fixed",
    text: "text-on-secondary-fixed",
    name: "Aurora Data Institute",
    type: "Professional Body",
    tags: ["Data Science", "Business"],
    courses: ["Analytics Engineering with dbt & Warehouses", "Statistics for Machine Learning Practitioners"],
    courseCount: "3 courses listed",
  },
];

export default function InstitutesPage() {
  return (
    <DashboardLayout>
      <section className="py-space-lg flex flex-col gap-space-sm">
        <div className="flex items-center gap-2 font-caption text-caption text-secondary">
          <Link className="hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <Link className="hover:text-primary transition-colors" to="/courses">Courses &amp; Curricula</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="font-medium text-on-surface">Institutes</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mt-1">
          <div className="max-w-2xl">
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Browse Institutes</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Discover the universities, training centers, and bootcamps behind SkillBridge courses, and see everything each one offers in one place.
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-space-sm p-1.5 bg-surface-container-lowest rounded-xl shadow-sm">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low">
              <span className="material-symbols-outlined text-[18px] text-primary">account_balance</span>
              <span className="font-label-sm text-label-sm text-on-surface"><strong className="font-semibold text-primary">11</strong> Partner Institutes</span>
            </div>
            <div className="h-4 w-[1px] bg-surface-variant hidden sm:block" />
            <Link className="flex items-center gap-1.5 px-3 py-1.5 text-primary font-label-sm text-label-sm hover:underline" to="/courses">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span>Back to Course Catalog</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-space-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg mb-space-xl">
        {INSTITUTES.map((inst) => (
          <Link key={inst.name} className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col" to="/institute-detail">
            <div className="p-space-lg flex flex-col gap-space-md flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm min-w-0">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-headline-sm text-headline-sm font-bold shrink-0 ${inst.bg} ${inst.text}`}>{inst.initials}</div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors truncate">{inst.name}</span>
                    <span className="font-caption text-caption text-secondary">{inst.type}</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {inst.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-caption text-caption font-medium">{tag}</span>
                ))}
              </div>
              <div className="flex flex-col gap-1.5 pt-1 border-t border-surface-container">
                <span className="font-caption text-caption text-secondary uppercase tracking-wider font-semibold mt-2">Featured Courses</span>
                {inst.courses.map((course) => (
                  <span key={course} className="font-body-sm text-body-sm text-on-surface flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-tertiary">check_circle</span>{course}
                  </span>
                ))}
              </div>
            </div>
            <div className="px-space-lg pb-space-md pt-2 flex items-center justify-between border-t border-surface-container">
              <span className="font-caption text-caption text-secondary">{inst.courseCount}</span>
              <span className="font-label-sm text-label-sm text-primary font-semibold">View all courses</span>
            </div>
          </Link>
        ))}
      </section>
    </DashboardLayout>
  );
}
