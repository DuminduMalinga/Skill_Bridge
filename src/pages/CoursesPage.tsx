import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

interface Course {
  image: string;
  imageAlt: string;
  provider: string;
  badge: { icon: string; label: string; tone: "primary" | "secondary" } | null;
  title: string;
  description: string;
  duration: string;
  rating: string;
  credential: string;
  access: { icon: string; label: string; tone: "tertiary" | "secondary" };
}

const COURSES: Course[] = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgr-gQz37LPjdAc0V11Yt6CfqjLsALQ5pqGemsDn5NzHAcWkqTLEWaa7tepy6Gp4vXuDHlIDJZotBNoAPBFuQtFiMfQcHCB3HLMl8jKQCGBfhB5jbewhpvavqNfPdowbZKwdp2sl1jsPzR4MQNOanqTWm96FZvKwmcxLl6pp7kW6cjmRLL9uTbsoG-j1p0LutHMwMK14LtVkv5ZnA_i3FguDG_7eMqzxehoTF9fvd-YvKr4TThBf0xBQ",
    imageAlt: "Abstract tech graphic of modern web architecture and React components in deep indigo lighting.",
    provider: "Skyline Academy",
    badge: { icon: "bolt", label: "Closes: Next.js 14 App Router", tone: "primary" },
    title: "Mastering Next.js 14 App Router & Server Actions",
    description:
      "Migrate from classical Single Page Applications to modern hybrid rendering paradigms. Architect streaming RSC architectures with zero client waterfalls.",
    duration: "3 wks • 6 hrs/wk",
    rating: "4.9 (1.4k)",
    credential: "Industry Cert",
    access: { icon: "school", label: "Ashcombe University Student Pass", tone: "tertiary" },
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDjtk3ogXVOdrKN3WmXEMqkOoUqHkANxUGUXphizJsABzrvoLm7M-MsJeVzCZKbb3fkYLz2UMTzifXkG7KtmbUaFyMXAmVNxvXBqdNkPkI7K08Ja1q1EVfj8muDkGNfRaDrJ-VNKqclaGUfXsS7qUPhtdkNqd8rhINd1FspkHtZ8tVKEFz_gP5QK52E91DYrP0jUNa0ia2qup0C66yo-NJ0whGuRgbTxbog5wmvkNgV1t45CCDxbLfIA",
    imageAlt: "Isometric visualization of type constraints and code blocks in cool blue ambient tones.",
    provider: "Codecraft Masters",
    badge: { icon: "bolt", label: "Closes: TypeScript Generics", tone: "primary" },
    title: "Advanced TypeScript Generics & Type Architecture",
    description:
      "Deep dive into conditional types, mapped types, distributive unions, and building type-safe SDK interfaces used at hyper-scale teams.",
    duration: "2 wks • 8 hrs",
    rating: "4.9 (890)",
    credential: "Industry Cert",
    access: { icon: "verified", label: "CS Dept Accredited", tone: "tertiary" },
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0eI2xeUDTlNCpBMd6gzBWrkKbcBlcRkY-gdV_QOuegQx-TX1x55eDrVirv1ukFN27Eo_QeefN3j0H94pTJZfahBvw2hcmXulR-2RwaN0yTcOnCEYKbmvGN1kmKxSUdAa_E6C2P156oXuGSVZ1PzNzvTysWec3v9g010nV1yj7VKzZvm4UmmlrGa86w-gpNHL7DS2OeIOnwWZuxPhv4S3_OGE4X911tebMtQZgUz4MboseKvdmoKKLRQ",
    imageAlt: "Graphic showing multi-directional data flows and store nodes in indigo and cyan.",
    provider: "Beacon Labs Open Source",
    badge: { icon: "bolt", label: "Closes: Zustand & State", tone: "primary" },
    title: "Modern State Management: Zustand, Jotai & RTK",
    description:
      "Stop unnecessary component re-renders. Master atomic and micro-store reactive models replacing legacy Context API boilerplate.",
    duration: "3 wks • 5 hrs/wk",
    rating: "4.8 (1.2k)",
    credential: "Partner Badge",
    access: { icon: "lock_open", label: "Free with Edu Email", tone: "tertiary" },
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCh92DKryHdAjVw8BQkX60pob9wGaIvgEU27vjz4KdnCRH7QG33JqbtlYcaaPiM1WmJ3CMot5e6xFskU8pLHH6_rKGXxYMzJDYgKKUCePpM0mr8F8YWdjFNb1nLYhWP4yM2AqsP9P9eBdgR19ylcvd6lG6JtOcl-Rsf7SEAT_6ZTlmcjw_aVwJQHkPT6bNMo0sam6hFVK_z3v13VbyI1mbB6QK-Uki6R4nJ5Ek9yQ4j8d0IAinDhoq5kg",
    imageAlt: "Minimalist render of continuous testing runners and automated pipeline ticks.",
    provider: "Ledgerly Engineering",
    badge: { icon: "bolt", label: "Closes: Playwright E2E", tone: "primary" },
    title: "End-to-End Test Automation with Playwright & CI",
    description:
      "Build bulletproof assertions, visual regression testing, network mocking, and parallel browser test suites in real GitHub Actions workflows.",
    duration: "2 wks • 6 hrs",
    rating: "4.9 (730)",
    credential: "Verified Lab",
    access: { icon: "shield_person", label: "Industry Sponsored", tone: "tertiary" },
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfPLvUf0C3j5NTXZkCMcSPYIt5TqLkJN7ZNq5RdD4mZZ59nmxdrM91kB9b2V9zXpEfo1NI_ONK5GhQt7H6nAjQws4J8e1VhbSZY4dRzHf8bSvZEmGfz6DwtU88tQnwZvokkaGAeleDuiddScPga5HYaukB-zaSFkpoO0tg6bdihDKe9ghfb47qqu2Qc3EObQFrckkweLYRnV1mvbzLqLGlDSZciNu4ms9cVHmeeWZ2YjbFLrp6sGr9ig",
    imageAlt: "High contrast diagram visualizing inclusive design and keyboard focus indicators.",
    provider: "Ashworth Online",
    badge: { icon: "tune", label: "Enhances: Accessibility (a11y)", tone: "secondary" },
    title: "Full-Stack Web Accessibility & WCAG 2.2 Deep Dive",
    description:
      "Master ARIA landmark roles, semantic token contracts, keyboard focus traps, and automated axe-core pipeline validation for compliance.",
    duration: "4 wks • 4 hrs/wk",
    rating: "4.8 (610)",
    credential: "Academic Credit",
    access: { icon: "auto_stories", label: "Elective Credit", tone: "secondary" },
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCa_bIQejdzQPjJOqw3H1NEgrah67mm65MbmX-drZyW1usacNfzSHO5b5bBmBt51g1_0kvTs6PmXeYoa4lyIrLC28J7DzDHtUW3vNLHGg92H9Jvx37zaHden2Oq0PCIv5KzwscmlZ9fiP1ixBTBdUYohFJ6D1IYo8CmazkSvWm09-onG59zqvHA-7DMWDtuzs7gJwoIrz0i3cMFrss0cxI1os1yE7Rwx3IZRQ3MujNGVasXluzSZstpKg",
    imageAlt: "Futuristic architectural wireframe representing fiber node reconciliation.",
    provider: "Meridian Institute OpenCourseWare",
    badge: { icon: "tune", label: "Core CS: UI Concurrency", tone: "secondary" },
    title: "Advanced React: Concurrent Features & Suspense",
    description:
      "Study useTransition, useDeferredValue, and custom compiler optimization techniques to maintain responsive 120 FPS interaction budgets.",
    duration: "3 wks • Self-paced",
    rating: "4.9 (2.1k)",
    credential: "Meridian Institute Credited",
    access: { icon: "library_add_check", label: "Module Equivalent", tone: "secondary" },
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANZr_fQnV1SvLf-jhsQhCEDw8aGydPZfNyvD5PDooTBCaFtOyj0dHMfwO1rxSapgvthP_bf4AWI_Dsy1WwzDUbKsDmxdHYXmtTrZ-ENuevLZmBzNAMVxKqQyzciiEwh0Iw6Hv4f0sr7ViPhzm_zuBZMcL7PXCjBKVoxAyzY1Oms1n1j17YihRMs5eUvnzdlu8JHG9GiHBR_YlrAcEXnXIdO61gJfidwWvMv_cSrO_xrhFa7iCiez9mkA",
    imageAlt: "Network pipeline nodes passing code artifacts to edge compute points in indigo.",
    provider: "Pathwise Pro",
    badge: { icon: "tune", label: "Devops for Frontend", tone: "secondary" },
    title: "Production CI/CD Pipelines with GitHub & Edge Workers",
    description:
      "Automate preview environments, build matrices, semantic PR releases, and ultra-fast edge deployments on global networks.",
    duration: "1 wk • 10 hrs",
    rating: "4.7 (520)",
    credential: "Hands-on Lab",
    access: { icon: "badge", label: "Partner Sponsored", tone: "tertiary" },
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRk7UGuGViGNlShA82iP8kehSjsGJiB6D7s1tbCUDf6N7eTrHyW6zRgzZ6jmp2onjgLrsNbwQbwFH3F-rneuiIL5OJQBnmIInEwSZakym-5kdJb6WpIv_KHpzSXXk8mOTLibEx6sVAx_OOE3esGiD0ztIkl_Fv13U4elDLLKL9Ri4fW9gOqdRkWLbpfXGQ8FMG2RfqnCUi2LkuSd4Bg7SLRTNqzArT5EtOw-Q71i1mYHThjS5-bZMl_w",
    imageAlt: "Abstract visualization of multi-tenant fast cache stores and microsecond latency clusters.",
    provider: "Ashcombe University CS Faculty",
    badge: { icon: "tune", label: "Architecture Extension", tone: "secondary" },
    title: "Distributed Systems & In-Memory Redis Caching for Web",
    description:
      "Integrate Upstash Redis for distributed rate limiting, real-time optimistic sync, and session management on distributed edge clusters.",
    duration: "4 wks • 5 hrs/wk",
    rating: "4.9 (1.8k)",
    credential: "Ashcombe University Core Module",
    access: { icon: "assignment_turned_in", label: "15 CATS Credits", tone: "tertiary" },
  },
];

export default function CoursesPage() {
  const [bookmarked, setBookmarked] = useState<Set<number>>(new Set());

  function toggleBookmark(index: number) {
    setBookmarked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <DashboardLayout>
      <section className="py-space-lg flex flex-col gap-space-sm">
        <div className="flex items-center gap-2 font-caption text-caption text-secondary">
          <Link className="hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="font-medium text-on-surface">Courses &amp; Curricula</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mt-1">
          <div className="max-w-2xl">
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Recommended Courses</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Curated university syllabi and verified industry programs mapped mathematically to your missing Frontend Developer competencies.
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-space-sm p-1.5 bg-surface-container-lowest rounded-xl shadow-sm">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-sm text-label-sm text-on-surface">Target: <strong className="font-semibold text-primary">Frontend Dev</strong></span>
            </div>
            <div className="h-4 w-[1px] bg-surface-variant hidden sm:block" />
            <div className="flex items-center gap-1.5 px-3 py-1.5 text-on-surface-variant font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[18px] text-tertiary">check_circle</span>
              <span><strong className="font-semibold text-on-surface">4</strong> Gaps Targetable</span>
            </div>
            <div className="h-4 w-[1px] bg-surface-variant hidden sm:block" />
            <div className="flex items-center gap-1.5 px-3 py-1.5 text-on-surface-variant font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[18px] text-secondary">library_books</span>
              <span><strong className="font-semibold text-on-surface">8</strong> Curated Options</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-space-sm bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col gap-space-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-sm">
          <div className="relative">
            <label className="block font-caption text-caption text-on-surface-variant mb-1 font-medium">Skill Gap Alignment</label>
            <div className="relative">
              <select className="w-full appearance-none bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg pl-3 pr-8 py-2.5 outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_rgba(79,70,229,0.2)] transition-all cursor-pointer">
                <option>All Target Skills (4 Gaps)</option>
                <option>Next.js 14 &amp; SSR (High Impact)</option>
                <option>TypeScript Generics</option>
                <option>State Management (Zustand)</option>
                <option>Automated Testing (Playwright)</option>
                <option>Web Accessibility (WCAG 2.2)</option>
              </select>
              <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-secondary text-[18px]">expand_more</span>
            </div>
          </div>
          <div className="relative">
            <label className="block font-caption text-caption text-on-surface-variant mb-1 font-medium">Proficiency Level</label>
            <div className="relative">
              <select className="w-full appearance-none bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg pl-3 pr-8 py-2.5 outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_rgba(79,70,229,0.2)] transition-all cursor-pointer">
                <option>All Levels</option>
                <option>Foundational / Bridge</option>
                <option>Intermediate Academic</option>
                <option>Advanced Production Ready</option>
              </select>
              <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-secondary text-[18px]">expand_more</span>
            </div>
          </div>
          <div className="relative">
            <label className="block font-caption text-caption text-on-surface-variant mb-1 font-medium">Time Commitment</label>
            <div className="relative">
              <select className="w-full appearance-none bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg pl-3 pr-8 py-2.5 outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_rgba(79,70,229,0.2)] transition-all cursor-pointer">
                <option>Any Duration</option>
                <option>&lt; 2 weeks (Sprint)</option>
                <option>2 – 4 weeks</option>
                <option>4+ weeks (Deep Dive)</option>
                <option>Self-paced Modular</option>
              </select>
              <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-secondary text-[18px]">expand_more</span>
            </div>
          </div>
          <div className="relative">
            <label className="block font-caption text-caption text-on-surface-variant mb-1 font-medium">Tuition Access</label>
            <div className="relative">
              <select className="w-full appearance-none bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg pl-3 pr-8 py-2.5 outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_rgba(79,70,229,0.2)] transition-all cursor-pointer">
                <option>Free with University ID</option>
                <option>Partner Sponsored (Direct)</option>
                <option>All Learning Options</option>
              </select>
              <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-secondary text-[18px]">expand_more</span>
            </div>
          </div>
          <div className="relative">
            <label className="block font-caption text-caption text-on-surface-variant mb-1 font-medium">Sort Catalog</label>
            <div className="relative">
              <select className="w-full appearance-none bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg pl-3 pr-8 py-2.5 outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_rgba(79,70,229,0.2)] transition-all cursor-pointer">
                <option>Best Match for Gaps</option>
                <option>Highest Industry Rating</option>
                <option>Shortest Completion Time</option>
                <option>Most University Credits</option>
              </select>
              <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-secondary text-[18px]">swap_vert</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Link className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low text-primary hover:bg-surface-container-high font-label-sm text-label-sm font-semibold transition-colors" to="/institutes">
            <span className="material-symbols-outlined text-[18px]">account_balance</span>
            <span>Browse by Institute</span>
          </Link>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-space-sm pt-2 border-t-0">
          <div className="flex items-center flex-wrap gap-2">
            <span className="font-caption text-caption text-secondary">Active criteria:</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-caption text-caption">
              Role: Junior Frontend Eng
              <button className="hover:text-error transition-colors flex items-center"><span className="material-symbols-outlined text-[14px]">close</span></button>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-caption text-caption">
              Verified Gaps Priority
              <button className="hover:text-error transition-colors flex items-center"><span className="material-symbols-outlined text-[14px]">close</span></button>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-caption text-caption">
              Fully Funded by University
              <button className="hover:text-error transition-colors flex items-center"><span className="material-symbols-outlined text-[14px]">close</span></button>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-caption text-caption text-on-surface-variant">Showing <strong className="text-on-surface font-semibold">8 of 42</strong> tailored courses</span>
            <button className="font-caption text-caption text-primary hover:underline font-medium">Clear all</button>
          </div>
        </div>
      </section>

      <section className="mt-space-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
        {COURSES.map((course, i) => (
          <article key={course.title} className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="relative h-44 w-full bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={course.imageAlt} src={course.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {course.badge?.tone === "primary" && (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-primary text-on-primary font-caption text-caption font-semibold flex items-center gap-1 shadow-sm">
                      <span className="material-symbols-outlined text-[13px]">star</span> Recommended
                    </span>
                  </div>
                )}
                <button
                  aria-label="Bookmark course"
                  className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center hover:bg-surface-container-lowest transition-colors shadow-sm ${
                    bookmarked.has(i) ? "text-primary" : "text-on-surface"
                  }`}
                  onClick={() => toggleBookmark(i)}
                >
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: bookmarked.has(i) ? "'FILL' 1" : "'FILL' 0" }}>
                    bookmark
                  </span>
                </button>
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-caption text-caption font-semibold">{course.provider}</span>
                </div>
              </div>
              <div className="p-space-lg">
                {course.badge && (
                  <div className="mb-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-label-sm ${
                        course.badge.tone === "primary" ? "bg-primary-fixed text-on-primary-fixed" : "bg-secondary-container text-on-secondary-fixed"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[14px]">{course.badge.icon}</span> {course.badge.label}
                    </span>
                  </div>
                )}
                <h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-2 group-hover:text-primary transition-colors">{course.title}</h3>
                <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant line-clamp-2">{course.description}</p>
                <div className="mt-4 pt-3 flex items-center justify-between text-secondary font-caption text-caption bg-surface-container-low/50 rounded-lg p-2">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">schedule</span> {course.duration}
                  </span>
                  <span className="flex items-center gap-1 font-medium text-on-surface">
                    <span className="material-symbols-outlined text-[15px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> {course.rating}
                  </span>
                  <span className="text-tertiary font-medium">{course.credential}</span>
                </div>
              </div>
            </div>
            <div className="px-space-lg pb-space-lg pt-1 flex items-center justify-between">
              <span className={`font-caption text-caption font-semibold flex items-center gap-1 ${course.access.tone === "tertiary" ? "text-tertiary-container" : "text-secondary"}`}>
                <span className="material-symbols-outlined text-[16px]">{course.access.icon}</span> {course.access.label}
              </span>
              <a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold hover:gap-2 transition-all" href="#">
                View syllabus <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </article>
        ))}

        <article className="bg-gradient-to-br from-primary-container to-primary text-on-primary rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
          <div className="flex flex-col gap-space-sm">
            <div className="w-10 h-10 rounded-xl bg-on-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">hub</span>
            </div>
            <span className="font-caption text-caption uppercase tracking-wider text-on-primary-container font-semibold">Autonomous Alignment</span>
            <h3 className="font-headline-md text-headline-md text-on-primary leading-snug">Custom University Syllabus Credit Request</h3>
            <p className="font-body-sm text-body-sm text-on-primary-container/90 mt-1">
              Have an external self-study program or certified bootcamp you want verified by your Ashcombe University CS faculty advisor to fulfill Year 3 elective requirements?
            </p>
          </div>
          <div className="mt-space-lg flex flex-col gap-2">
            <button className="w-full py-2.5 px-4 rounded-xl bg-surface-container-lowest text-primary font-label-md text-label-md font-semibold hover:bg-surface-bright transition-colors shadow-sm flex items-center justify-center gap-2">
              <span>Submit Syllabus For Review</span>
              <span className="material-symbols-outlined text-[18px]">add_circle</span>
            </button>
            <span className="text-center font-caption text-caption text-on-primary-container/80">Average faculty evaluation: 48 hours</span>
          </div>
        </article>
      </section>

      <section className="my-space-xl bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-lg">
        <div className="flex items-start md:items-center gap-space-md">
          <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-[28px]">terminal</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-caption text-caption font-semibold">Practice Sandbox</span>
              <span className="font-caption text-caption text-secondary">Verified Corporate Sprints</span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">Need real-world practice alongside courses?</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
              Directly apply your newly closed Next.js 14 and TypeScript skills in simulated partner micro-sprints designed with{" "}
              <span className="font-medium text-on-surface">Nimbus Pay</span> and <span className="font-medium text-on-surface">Wise</span> engineering leads.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-space-sm shrink-0 w-full md:w-auto">
          <Link className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-sm" to="/projects">
            <span>Explore Matching Projects</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </section>
    </DashboardLayout>
  );
}
