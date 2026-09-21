import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

interface Course {
  image: string;
  imageAlt: string;
  badge: { icon: string; label: string; tone: "primary" | "secondary" };
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
    imageAlt: "Abstract tech graphic of full-stack web application architecture with layered component diagrams.",
    badge: { icon: "bolt", label: "Beginner", tone: "primary" },
    title: "Full-Stack Web Development Bootcamp",
    description: "Design, build, and deploy production-grade full-stack applications through a project-based, mentor-supported curriculum.",
    duration: "12 wks • 10 hrs/wk",
    rating: "4.8 (410)",
    credential: "Industry Cert",
    access: { icon: "lock_open", label: "Paid", tone: "tertiary" },
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRk7UGuGViGNlShA82iP8kehSjsGJiB6D7s1tbCUDf6N7eTrHyW6zRgzZ6jmp2onjgLrsNbwQbwFH3F-rneuiIL5OJQBnmIInEwSZakym-5kdJb6WpIv_KHpzSXXk8mOTLibEx6sVAx_OOE3esGiD0ztIkl_Fv13U4elDLLKL9Ri4fW9gOqdRkWLbpfXGQ8FMG2RfqnCUi2LkuSd4Bg7SLRTNqzArT5EtOw-Q71i1mYHThjS5-bZMl_w",
    imageAlt: "Abstract visualization of data pipelines and machine learning model nodes.",
    badge: { icon: "tune", label: "Intermediate", tone: "secondary" },
    title: "Applied Data Science & Machine Learning",
    description: "Hands-on labs across the full ML lifecycle, from data wrangling with Pandas to model evaluation with scikit-learn.",
    duration: "8 wks • 8 hrs/wk",
    rating: "4.7 (295)",
    credential: "Verified Lab",
    access: { icon: "shield_person", label: "Fully Funded", tone: "tertiary" },
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDjtk3ogXVOdrKN3WmXEMqkOoUqHkANxUGUXphizJsABzrvoLm7M-MsJeVzCZKbb3fkYLz2UMTzifXkG7KtmbUaFyMXAmVNxvXBqdNkPkI7K08Ja1q1EVfj8muDkGNfRaDrJ-VNKqclaGUfXsS7qUPhtdkNqd8rhINd1FspkHtZ8tVKEFz_gP5QK52E91DYrP0jUNa0ia2qup0C66yo-NJ0whGuRgbTxbog5wmvkNgV1t45CCDxbLfIA",
    imageAlt: "Isometric visualization of interface wireframes and design system tokens.",
    badge: { icon: "bolt", label: "Beginner", tone: "primary" },
    title: "UX/UI Design Foundations",
    description: "Learn user research, wireframing, and interactive prototyping in Figma, building a portfolio-ready case study.",
    duration: "6 wks • 5 hrs/wk",
    rating: "4.9 (520)",
    credential: "Industry Cert",
    access: { icon: "lock_open", label: "Free with University ID", tone: "tertiary" },
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANZr_fQnV1SvLf-jhsQhCEDw8aGydPZfNyvD5PDooTBCaFtOyj0dHMfwO1rxSapgvthP_bf4AWI_Dsy1WwzDUbKsDmxdHYXmtTrZ-ENuevLZmBzNAMVxKqQyzciiEwh0Iw6Hv4f0sr7ViPhzm_zuBZMcL7PXCjBKVoxAyzY1Oms1n1j17YihRMs5eUvnzdlu8JHG9GiHBR_YlrAcEXnXIdO61gJfidwWvMv_cSrO_xrhFa7iCiez9mkA",
    imageAlt: "Network pipeline nodes passing marketing campaign data to analytics dashboards.",
    badge: { icon: "tune", label: "Intermediate", tone: "secondary" },
    title: "Digital Marketing & Growth Strategy",
    description: "Build full-funnel campaigns across SEO, paid media, and analytics, with a live capstone growth plan.",
    duration: "5 wks • 4 hrs/wk",
    rating: "4.6 (188)",
    credential: "Hands-on Lab",
    access: { icon: "badge", label: "Paid", tone: "tertiary" },
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfPLvUf0C3j5NTXZkCMcSPYIt5TqLkJN7ZNq5RdD4mZZ59nmxdrM91kB9b2V9zXpEfo1NI_ONK5GhQt7H6nAjQws4J8e1VhbSZY4dRzHf8bSvZEmGfz6DwtU88tQnwZvokkaGAeleDuiddScPga5HYaukB-zaSFkpoO0tg6bdihDKe9ghfb47qqu2Qc3EObQFrckkweLYRnV1mvbzLqLGlDSZciNu4ms9cVHmeeWZ2YjbFLrp6sGr9ig",
    imageAlt: "Diagram visualizing cloud security postures and compliance checklists.",
    badge: { icon: "tune", label: "Advanced", tone: "secondary" },
    title: "Cloud Security & Compliance Fundamentals",
    description: "Master IAM design, compliance frameworks, and AWS security tooling through guided incident-response labs.",
    duration: "4 wks • 6 hrs/wk",
    rating: "New",
    credential: "Draft",
    access: { icon: "schedule", label: "Launching soon", tone: "secondary" },
  },
];

export default function InstituteDetailPage() {
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
          <Link className="hover:text-primary transition-colors" to="/courses">Courses &amp; Curricula</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <Link className="hover:text-primary transition-colors" to="/institutes">Institutes</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="font-medium text-on-surface">Riverside Institute of Technology</span>
        </div>
        <Link className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary hover:text-on-primary-fixed-variant transition-colors group w-fit" to="/institutes">
          <span className="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-x-1">arrow_back</span>
          <span>Back to Institutes</span>
        </Link>
      </section>

      <section className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg mb-space-xl flex flex-col md:flex-row md:items-center gap-space-lg">
        <div className="w-20 h-20 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-tertiary font-headline-lg text-headline-lg font-bold shrink-0">RI</div>
        <div className="flex-1 flex flex-col gap-space-sm">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Riverside Institute of Technology</h1>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-caption text-caption font-semibold">
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span> Verified Institute Partner
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Delivering accredited, industry-aligned technology and business programs that bridge the gap between classroom and career.
          </p>
          <div className="flex flex-wrap items-center gap-space-sm mt-1">
            <span className="flex items-center gap-1.5 font-caption text-caption text-secondary"><span className="material-symbols-outlined text-[16px]">account_balance</span> Training Center</span>
            <span className="flex items-center gap-1.5 font-caption text-caption text-secondary"><span className="material-symbols-outlined text-[16px]">location_on</span> London, UK</span>
            <span className="flex items-center gap-1.5 font-caption text-caption text-primary"><span className="material-symbols-outlined text-[16px]">language</span> riversidetech.ac</span>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {["IT", "Business", "Design", "Data Science"].map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-caption text-caption font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-space-sm mb-space-md">
        <h2 className="font-headline-sm text-headline-sm text-on-surface">All Courses by Riverside Institute of Technology</h2>
        <p className="font-caption text-caption text-secondary">Showing 5 of 5 courses</p>
      </section>

      <section className="mt-space-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg mb-space-xl">
        {COURSES.map((course, i) => (
          <article key={course.title} className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="relative h-44 w-full bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={course.imageAlt} src={course.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <button
                  aria-label="Bookmark course"
                  className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center hover:bg-surface-container-lowest transition-colors shadow-sm ${
                    bookmarked.has(i) ? "text-primary" : "text-on-surface"
                  }`}
                  onClick={() => toggleBookmark(i)}
                >
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: bookmarked.has(i) ? "'FILL' 1" : "'FILL' 0" }}>bookmark</span>
                </button>
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-caption text-caption font-semibold">Riverside Institute</span>
                </div>
              </div>
              <div className="p-space-lg">
                <div className="mb-3">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-label-sm ${
                      course.badge.tone === "primary" ? "bg-primary-fixed text-on-primary-fixed" : "bg-secondary-container text-on-secondary-fixed"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[14px]">{course.badge.icon}</span> {course.badge.label}
                  </span>
                </div>
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
      </section>
    </DashboardLayout>
  );
}
