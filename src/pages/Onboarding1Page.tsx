import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OnboardingLayout from "../layouts/OnboardingLayout";
import OnboardingProgress from "../components/ui/OnboardingProgress";

interface Subject {
  label: string;
  selected: boolean;
}

const INITIAL_SUBJECTS: Subject[] = [
  { label: "Data Structures & Algorithms", selected: true },
  { label: "Database Systems & SQL", selected: true },
  { label: "Human-Computer Interaction", selected: true },
  { label: "Software Engineering Principles", selected: true },
  { label: "Operating Systems", selected: false },
  { label: "Machine Learning Basics", selected: false },
  { label: "Computer Networks", selected: false },
  { label: "Web Architecture", selected: false },
];

export default function Onboarding1Page() {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState(INITIAL_SUBJECTS);
  const [customCourse, setCustomCourse] = useState("");

  const selectedCount = subjects.filter((s) => s.selected).length;

  function toggleSubject(index: number) {
    setSubjects((prev) => prev.map((s, i) => (i === index ? { ...s, selected: !s.selected } : s)));
  }

  function addCustomCourse() {
    const val = customCourse.trim();
    if (!val) return;
    setSubjects((prev) => [...prev, { label: val, selected: true }]);
    setCustomCourse("");
  }

  return (
    <OnboardingLayout activeNavIndex={1}>
      <OnboardingProgress step={1} />

      <div className="flex flex-col gap-space-xs mb-space-lg">
        <div className="inline-flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm w-fit">
          <span className="material-symbols-outlined text-[15px]">school</span>
          <span>Academic Baseline</span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Tell us about your degree</h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          This benchmarks your syllabus and course modules directly against live junior tech postings across top hiring partners.
        </p>
      </div>

      <form className="flex flex-col gap-space-lg" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="degree-level">
              <span>Degree Level</span>
              <span className="font-caption text-caption text-outline">Required</span>
            </label>
            <div className="relative">
              <select
                className="w-full appearance-none bg-surface-container-lowest text-on-surface font-body-md text-body-md py-2.5 pl-3.5 pr-10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 hover:bg-surface transition-all"
                id="degree-level"
                defaultValue="BSc / Bachelor of Science"
              >
                <option>BSc / Bachelor of Science</option>
                <option>BEng / Bachelor of Engineering</option>
                <option>MSc / Master of Science</option>
                <option>BA / Bachelor of Arts</option>
                <option>MEng / Master of Engineering</option>
                <option>PhD / Doctorate</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline text-[20px]">expand_more</span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="grad-year">
              <span>Expected Graduation</span>
              <span className="font-caption text-caption text-outline">Required</span>
            </label>
            <div className="relative">
              <select
                className="w-full appearance-none bg-surface-container-lowest text-on-surface font-body-md text-body-md py-2.5 pl-3.5 pr-10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 hover:bg-surface transition-all"
                id="grad-year"
                defaultValue="2025 (Final Year)"
              >
                <option>2025 (Final Year)</option>
                <option>2026 (Penultimate Year)</option>
                <option>2027 (Undergraduate)</option>
                <option>2024 (Recent Graduate)</option>
                <option>2023 or earlier</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline text-[20px]">calendar_today</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md text-on-surface" htmlFor="field-study">Field of Study</label>
            <div className="relative">
              <input
                className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md py-2.5 pl-3.5 pr-10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline"
                id="field-study"
                placeholder="e.g. Data Science, Software Engineering"
                type="text"
                defaultValue="Computer Science & Human-Computer Interaction"
              />
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">auto_stories</span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="university-input">
              <span>University / College</span>
              <span className="font-caption text-caption text-tertiary flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[13px]">check_circle</span> Verified Partner
              </span>
            </label>
            <div className="relative">
              <input
                className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md py-2.5 pl-3.5 pr-10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline"
                id="university-input"
                placeholder="Search university..."
                type="text"
                defaultValue="Ashcombe University"
              />
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">account_balance</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-space-sm mt-space-xs">
          <div className="flex items-center justify-between">
            <div>
              <label className="font-headline-sm text-headline-sm text-on-surface block">Core Subjects &amp; Modules</label>
              <p className="font-caption text-caption text-on-surface-variant mt-0.5">
                Select modules you&apos;ve passed or are currently enrolled in to auto-populate baseline skill credentials.
              </p>
            </div>
            <span className="font-label-sm text-label-sm text-primary bg-primary-fixed/60 px-2 py-0.5 rounded-full">{selectedCount} selected</span>
          </div>
          <div className="p-space-md bg-surface-container-low rounded-xl flex flex-wrap gap-2 transition-all">
            {subjects.map((subject, i) => (
              <button
                key={subject.label}
                type="button"
                onClick={() => toggleSubject(i)}
                className={`subject-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-md text-label-md transition-all shadow-sm ${
                  subject.selected ? "bg-primary text-on-primary" : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
                }`}
              >
                <span className={`material-symbols-outlined text-[16px] ${subject.selected ? "" : "text-outline"}`}>
                  {subject.selected ? "check" : "add"}
                </span>
                <span>{subject.label}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="relative flex-1">
              <input
                className="w-full bg-surface-container-lowest text-on-surface font-body-sm text-body-sm py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline"
                placeholder="Add custom course/module (e.g. Distributed Systems)..."
                type="text"
                value={customCourse}
                onChange={(e) => setCustomCourse(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addCustomCourse();
                  }
                }}
              />
            </div>
            <button
              className="flex items-center gap-1 px-3.5 py-2 bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm rounded-lg hover:bg-secondary-fixed transition-colors shadow-sm"
              type="button"
              onClick={addCustomCourse}
            >
              <span className="material-symbols-outlined text-[16px]">add_circle</span>
              <span>Add module</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-space-sm p-space-sm px-space-md bg-surface-container-low rounded-xl">
          <div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[18px]">insights</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-label-sm text-label-sm text-on-surface truncate">Instant Syllabus Extraction Ready</span>
            <span className="font-caption text-caption text-on-surface-variant truncate">
              Matching modules with 1,240+ Junior Full-Stack &amp; Product Engineer benchmarks
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-space-md mt-space-xs">
          <Link className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md py-2 px-1 transition-colors" to="/login">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Back to log in</span>
          </Link>
          <button
            className="inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-lg shadow-md hover:bg-primary transition-all duration-150 transform active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-primary/20"
            type="button"
            onClick={() => navigate("/onboarding-2")}
          >
            <span>Continue</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </form>
    </OnboardingLayout>
  );
}
