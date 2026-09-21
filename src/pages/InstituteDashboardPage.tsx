import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InstituteLayout from "../layouts/InstituteLayout";

interface Avatar {
  initials: string;
  bg: string;
  text: string;
}

interface CourseRow {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  format: string;
  stack: string;
  level: string;
  levelClass: string;
  students: number | null;
  badge?: string;
  avatars?: Avatar[];
  moreCount?: number;
  draft?: boolean;
  status: "open" | "closed";
}

const COURSES: CourseRow[] = [
  {
    icon: "terminal",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
    title: "Full-Stack Web Development Bootcamp",
    format: "Online",
    stack: "JavaScript, React, Node.js",
    level: "Beginner",
    levelClass: "bg-primary-fixed text-primary",
    students: 86,
    badge: "Industry Cert",
    avatars: [
      { initials: "AL", bg: "bg-primary-container", text: "text-on-primary" },
      { initials: "RM", bg: "bg-secondary-fixed", text: "text-on-secondary-fixed" },
      { initials: "SK", bg: "bg-tertiary", text: "text-on-tertiary" },
    ],
    moreCount: 83,
    status: "open",
  },
  {
    icon: "query_stats",
    iconBg: "bg-surface-tint/10",
    iconColor: "text-primary",
    title: "Applied Data Science & Machine Learning",
    format: "Hybrid",
    stack: "Python, Pandas, scikit-learn",
    level: "Intermediate",
    levelClass: "bg-secondary-container text-on-secondary-fixed",
    students: 64,
    badge: "Fully Funded",
    avatars: [
      { initials: "EK", bg: "bg-primary", text: "text-on-primary" },
      { initials: "DT", bg: "bg-secondary", text: "text-on-secondary" },
      { initials: "JN", bg: "bg-primary-fixed", text: "text-primary" },
    ],
    moreCount: 61,
    status: "open",
  },
  {
    icon: "design_services",
    iconBg: "bg-tertiary-fixed",
    iconColor: "text-tertiary",
    title: "UX/UI Design Foundations",
    format: "Online",
    stack: "Figma, Design Systems, Prototyping",
    level: "Beginner",
    levelClass: "bg-primary-fixed text-primary",
    students: 102,
    badge: "Industry Cert",
    avatars: [
      { initials: "LC", bg: "bg-primary-fixed", text: "text-primary" },
      { initials: "PR", bg: "bg-surface-tint", text: "text-on-primary" },
    ],
    moreCount: 100,
    status: "open",
  },
  {
    icon: "business_center",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
    title: "Digital Marketing & Growth Strategy",
    format: "Hybrid",
    stack: "SEO, Analytics, Paid Media",
    level: "Intermediate",
    levelClass: "bg-tertiary-container/10 text-tertiary-container",
    students: 47,
    badge: "Paid",
    avatars: [
      { initials: "MK", bg: "bg-on-surface-variant", text: "text-surface" },
      { initials: "TS", bg: "bg-primary", text: "text-on-primary" },
    ],
    moreCount: 45,
    status: "open",
  },
  {
    icon: "shield",
    iconBg: "bg-surface-container-high",
    iconColor: "text-secondary",
    title: "Cloud Security & Compliance Fundamentals",
    format: "Online",
    stack: "AWS, IAM, Compliance Frameworks",
    level: "Advanced",
    levelClass: "bg-secondary-container text-on-secondary-fixed",
    students: null,
    draft: true,
    status: "closed",
  },
];

type FilterKey = "all" | "open" | "closed";

export default function InstituteDashboardPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<FilterKey>("all");
  const [search, setSearch] = useState("");

  const visibleCourses = useMemo(() => {
    const query = search.toLowerCase().trim();
    return COURSES.filter((c) => {
      const matchesStatus = filter === "all" || c.status === filter;
      const matchesSearch = !query || c.title.toLowerCase().includes(query) || c.stack.toLowerCase().includes(query);
      return matchesStatus && matchesSearch;
    });
  }, [filter, search]);

  return (
    <InstituteLayout>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8">
        <div className="flex flex-col gap-1.5 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary mr-1.5 animate-pulse" />
              Publishing Active
            </span>
            <span className="font-caption text-caption text-secondary">Cohort 2024–2025</span>
          </div>
          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
            Welcome back, <span className="text-primary font-bold">Riverside Institute</span>
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Here&apos;s an overview of your posted courses, student enrollment, and engagement across the SkillBridge marketplace.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md">
            <span className="material-symbols-outlined text-[18px]">tune</span>
            <span>Filter Courses</span>
          </button>
          <button
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            onClick={() => navigate("/post-course")}
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span>Post a new course</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-caption text-caption uppercase tracking-wider text-secondary font-semibold">Active Courses</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-display-hero text-display-hero text-on-surface leading-none">5</span>
                <span className="font-caption text-caption text-tertiary bg-tertiary-fixed/60 px-2 py-0.5 rounded-md font-medium">+1 new</span>
              </div>
            </div>
            <div className="w-11 h-11 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[22px]">library_books</span>
            </div>
          </div>
          <div className="pt-6 mt-4 flex items-center justify-between text-on-surface-variant font-caption text-caption">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-medium text-on-surface">3 Online</span>
              <span className="text-secondary">•</span>
              <span className="w-2 h-2 rounded-full bg-surface-tint" />
              <span className="font-medium text-on-surface">2 Hybrid</span>
            </div>
            <span className="text-secondary">1 pending review</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-caption text-caption uppercase tracking-wider text-secondary font-semibold">Total Enrollments</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-display-hero text-display-hero text-on-surface leading-none">318</span>
                <span className="font-caption text-caption text-tertiary bg-tertiary-fixed/60 px-2 py-0.5 rounded-md font-medium flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[13px]">trending_up</span> 22 this wk
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
                <span className="material-symbols-outlined text-[14px] mr-1">workspace_premium</span> 41 Certified
              </span>
              <span className="font-caption text-caption text-secondary">this term</span>
            </div>
            <svg className="w-16 h-5 text-tertiary" fill="none" viewBox="0 0 64 20">
              <path d="M2 17L14 14L28 16L40 7L52 10L62 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-caption text-caption uppercase tracking-wider text-secondary font-semibold">Students Reached</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-display-hero text-display-hero text-on-surface leading-none">612</span>
                <span className="font-caption text-caption text-on-secondary-container bg-secondary-fixed px-2 py-0.5 rounded-md font-medium">9 Campuses</span>
              </div>
            </div>
            <div className="w-11 h-11 rounded-lg bg-surface-container-low flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-[22px]">school</span>
            </div>
          </div>
          <div className="pt-6 mt-4 flex items-center justify-between font-caption text-caption">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-tertiary">4.8 / 5</span>
              <span className="text-on-surface-variant">average course rating</span>
            </div>
            <div className="w-20 bg-surface-container rounded-full h-1.5 overflow-hidden">
              <div className="bg-tertiary h-1.5 rounded-full" style={{ width: "96%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl shadow-sm flex flex-col overflow-hidden">
        <div className="p-6 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="font-headline-sm text-headline-sm text-on-surface">Posted Courses</h2>
            <p className="font-caption text-caption text-secondary">Manage your published programs and review student enrollment.</p>
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
                  {key === "all" ? "All (5)" : key === "open" ? "Live (4)" : "Draft (1)"}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-secondary text-[18px]">search</span>
              <input
                className="pl-8 pr-3 py-1.5 text-body-sm font-body-sm bg-surface-container-low rounded-lg text-on-surface placeholder:text-secondary focus:outline-none focus:ring-1 focus:ring-primary w-44 transition-all focus:w-56"
                placeholder="Search courses..."
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
                <th className="py-3 px-6 font-semibold">Course Details</th>
                <th className="py-3 px-4 font-semibold">Level</th>
                <th className="py-3 px-4 font-semibold">Enrolled Students</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-6 text-right font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container text-body-sm font-body-sm text-on-surface">
              {visibleCourses.map((c) => (
                <tr key={c.title} className={`hover:bg-surface-bright transition-colors group ${c.status === "closed" ? "opacity-80" : ""}`}>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-semibold shrink-0 ${c.iconBg} ${c.iconColor}`}>
                        <span className="material-symbols-outlined text-[20px]">{c.icon}</span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors truncate">{c.title}</span>
                        <span className="font-caption text-caption text-secondary truncate mt-0.5">
                          {c.format} • <span className="font-medium text-on-surface-variant">{c.stack}</span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full font-label-sm text-label-sm font-medium ${c.levelClass}`}>{c.level}</span>
                  </td>
                  <td className="py-4 px-4">
                    {c.draft ? (
                      <div className="flex items-center gap-2 text-secondary">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        <span className="font-body-sm text-body-sm text-secondary">0 students (Draft / Launching)</span>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-on-surface">{c.students} students</span>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant text-[11px] font-semibold">{c.badge}</span>
                        </div>
                        <div className="flex items-center -space-x-1.5">
                          {c.avatars?.map((a) => (
                            <div key={a.initials} className={`w-5 h-5 rounded-full text-[9px] flex items-center justify-center ring-2 ring-surface-container-lowest font-bold ${a.bg} ${a.text}`}>
                              {a.initials}
                            </div>
                          ))}
                          <span className="pl-2 font-caption text-caption text-secondary">+{c.moreCount}</span>
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    {c.status === "open" ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed/40 text-on-tertiary-fixed-variant font-label-sm text-label-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                        Live
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        Draft
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        className={`inline-flex items-center gap-1 font-label-md text-label-md font-semibold px-3 py-1 rounded-lg hover:bg-surface-container transition-colors ${
                          c.status === "open" ? "text-primary hover:text-on-primary-fixed" : "text-secondary hover:text-on-surface"
                        }`}
                        to="/institute-dashboard"
                      >
                        <span>View enrollments</span>
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
            Showing <span className="font-medium text-on-surface">{visibleCourses.length > 0 ? `1-${visibleCourses.length}` : "0"}</span> of 5 courses
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
    </InstituteLayout>
  );
}
