import { useState } from "react";
import { Link } from "react-router-dom";
import OnboardingLayout from "../layouts/OnboardingLayout";

type ProficiencyLevel = "Beginner" | "Intermediate" | "Advanced";

interface SkillEntry {
  name: string;
  level: ProficiencyLevel;
}

const INITIAL_SKILLS: SkillEntry[] = [
  { name: "Python", level: "Intermediate" },
  { name: "Figma", level: "Advanced" },
  { name: "SQL & PostgreSQL", level: "Intermediate" },
  { name: "React.js", level: "Beginner" },
  { name: "User Research & Wireframing", level: "Intermediate" },
];

const SUGGESTIONS = ["TypeScript", "Docker", "Tailwind CSS", "GraphQL", "Git"];

const LEVELS: ProficiencyLevel[] = ["Beginner", "Intermediate", "Advanced"];

export default function Onboarding2Page() {
  const [skills, setSkills] = useState(INITIAL_SKILLS);
  const [searchValue, setSearchValue] = useState("");

  function addSkill(name: string) {
    const val = name.trim();
    if (!val) return;
    setSkills((prev) => [...prev, { name: val, level: "Intermediate" }]);
  }

  function handleAddFromSearch() {
    addSkill(searchValue);
    setSearchValue("");
  }

  function setLevel(index: number, level: ProficiencyLevel) {
    setSkills((prev) => prev.map((s, i) => (i === index ? { ...s, level } : s)));
  }

  function removeSkill(index: number) {
    setSkills((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <OnboardingLayout activeNavIndex={3}>
      <div className="w-full pb-space-lg mb-space-lg">
        <div className="flex items-center justify-between gap-space-sm mb-space-sm">
          <div className="flex items-center gap-space-xs text-tertiary">
            <span className="material-symbols-outlined text-[18px] text-tertiary">check_circle</span>
            <span className="font-label-sm text-label-sm font-semibold tracking-tight text-on-surface">1. Degree Details</span>
          </div>
          <span className="w-4 h-[1px] bg-outline-variant/40 hidden sm:block" />
          <div className="flex items-center gap-space-xs text-primary">
            <div className="w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-[11px] font-bold">2</div>
            <span className="font-label-sm text-label-sm font-bold text-primary">Skills &amp; Proficiency</span>
          </div>
          <span className="w-4 h-[1px] bg-outline-variant/40 hidden sm:block" />
          <div className="flex items-center gap-space-xs text-secondary">
            <div className="w-5 h-5 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-label-sm text-[11px] font-medium">3</div>
            <span className="font-label-sm text-label-sm text-secondary">Past Projects</span>
          </div>
        </div>
        <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-500 ease-out" style={{ width: "66.66%" }} />
        </div>
      </div>

      <div className="space-y-space-xs mb-space-xl">
        <div className="inline-flex items-center gap-space-xs px-2.5 py-0.5 rounded-full bg-surface-container-low text-primary text-[11px] font-label-sm uppercase tracking-wider font-semibold">
          Step 2 of 3
        </div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">What can you already do?</h1>
        <p className="font-body-md text-body-md text-secondary max-w-2xl leading-relaxed">
          Add competencies from coursework, self-study, or internships. Rate your confidence honestly so we can spot high-value bridge opportunities.
        </p>
      </div>

      <div className="space-y-space-md mb-space-xl">
        <div className="relative flex items-center">
          <div className="absolute left-3.5 flex items-center pointer-events-none text-secondary">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </div>
          <input
            className="w-full pl-10 pr-24 py-2.5 bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg shadow-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all"
            placeholder="Search or add skills (e.g. Python, Figma, React, SQL...)"
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddFromSearch();
            }}
          />
          <button
            className="absolute right-1.5 px-space-md py-1.5 bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md rounded-md transition-colors"
            type="button"
            onClick={handleAddFromSearch}
          >
            Add
          </button>
        </div>
        <div className="flex items-center flex-wrap gap-2 pt-0.5">
          <span className="font-caption text-caption text-secondary font-medium mr-1">Suggested:</span>
          {SUGGESTIONS.map((suggestion) => (
            <button
              key={suggestion}
              className="group flex items-center gap-1 px-3 py-1 bg-surface-container-low hover:bg-primary/10 text-on-surface hover:text-primary rounded-full font-label-sm text-label-sm transition-all shadow-sm"
              type="button"
              onClick={() => addSkill(suggestion)}
            >
              <span className="text-primary font-bold group-hover:scale-110 transition-transform">+</span> {suggestion}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-space-sm mb-space-xl">
        <div className="flex items-center justify-between pb-1">
          <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-secondary">Added Skills ({skills.length})</span>
          <span className="font-caption text-caption text-secondary">Adjust level by clicking confidence badges</span>
        </div>
        {skills.map((skill, i) => (
          <div key={skill.name} className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm p-3.5 bg-surface-container-low/60 hover:bg-surface-container-low rounded-lg transition-all shadow-sm">
            <div className="flex items-center gap-space-sm min-w-0">
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="font-label-md text-label-md font-semibold text-on-surface truncate">{skill.name}</span>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-3 flex-shrink-0">
              <div className="flex items-center bg-surface-container-lowest p-0.5 rounded-lg shadow-sm">
                {LEVELS.map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setLevel(i, level)}
                    className={`px-2.5 py-1 font-label-sm text-label-sm rounded transition-all ${
                      skill.level === level ? "bg-primary text-on-primary font-semibold shadow-sm" : "text-secondary"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
              <button
                className="p-1 text-secondary hover:text-error hover:bg-error-container/40 rounded transition-colors"
                type="button"
                title={`Remove ${skill.name}`}
                onClick={() => removeSkill(i)}
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full p-space-md bg-surface-container-low rounded-lg flex items-start gap-space-sm mb-space-xl">
        <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">lightbulb</span>
        <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
          <span className="font-semibold text-on-surface">Pro-tip:</span> Being realistic about early skills helps SkillBridge align you with foundational micro-sprints and campus credits rather than prematurely over-indexing your workload.
        </p>
      </div>

      <div className="flex items-center justify-between pt-space-md">
        <Link className="inline-flex items-center gap-1 text-secondary hover:text-on-surface font-label-md text-label-md transition-colors py-2 px-1" to="/onboarding-1">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span>Back to Degree Details</span>
        </Link>
        <Link
          className="inline-flex items-center gap-2 bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label-md text-label-md font-semibold px-6 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
          to="/onboarding-3"
        >
          <span>Continue</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
      </div>
    </OnboardingLayout>
  );
}
