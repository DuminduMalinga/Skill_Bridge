import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyLayout from "../layouts/CompanyLayout";

type RoleType = "sprint" | "internship" | "grad";
type Threshold = "Verified Mastery" | "Lab Coursework" | "Foundational";

const ROLE_TYPES: { key: RoleType; badge: string; title: string; description: string; footerIcon: string; footerLabel: string }[] = [
  {
    key: "sprint",
    badge: "Recommended",
    title: "Industry Micro-Sprint",
    description: "4-8 week scoped deliverables. Students solve production-grade issues verified against test suites.",
    footerIcon: "bolt",
    footerLabel: "Fastest to first commit",
  },
  {
    key: "internship",
    badge: "3-6 Months",
    title: "Summer Internship",
    description: "Full cohort structured placement with dedicated engineering mentorship & mid-term reviews.",
    footerIcon: "calendar_today",
    footerLabel: "Summer 2025 cycle",
  },
  {
    key: "grad",
    badge: "Permanent",
    title: "Graduate / Full-Time",
    description: "Full-time entry pipeline targeted at top-percentile academic capstone achievers.",
    footerIcon: "workspace_premium",
    footerLabel: "Direct team placement",
  },
];

interface SkillCalibration {
  id: string;
  abbr: string;
  abbrBg: string;
  abbrText: string;
  name: string;
  priority: "Mandatory" | "Preferred";
  note: string;
  threshold: Threshold;
}

const THRESHOLDS: Threshold[] = ["Verified Mastery", "Lab Coursework", "Foundational"];

const INITIAL_SKILLS: SkillCalibration[] = [
  { id: "go", abbr: "Go", abbrBg: "bg-primary-container/15", abbrText: "text-primary", name: "Go (Concurrency & Channels)", priority: "Mandatory", note: "Matches CS302 Distributed Systems or lab equivalent", threshold: "Verified Mastery" },
  { id: "redis", abbr: "Re", abbrBg: "bg-tertiary-fixed", abbrText: "text-on-tertiary-fixed", name: "Redis Streams & Pub/Sub", priority: "Mandatory", note: "In-memory caching architectures, stream consumer groups", threshold: "Lab Coursework" },
  { id: "docker", abbr: "Dk", abbrBg: "bg-secondary-container", abbrText: "text-on-secondary-container", name: "Docker & GitHub Actions CI", priority: "Preferred", note: "Container multi-stage builds & automated testing runs", threshold: "Foundational" },
  { id: "idempotent", abbr: "Id", abbrBg: "bg-secondary-container", abbrText: "text-on-secondary-container", name: "Idempotent Webhooks & REST", priority: "Preferred", note: "Signature verification (HMAC-SHA256), replay attack mitigation", threshold: "Lab Coursework" },
];

const MATCHED_CANDIDATES = [
  { name: "Elena Rostova", school: "Kingswell College • CS Yr 3", match: "96% Match", photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKy2gixJ2lJYaCc8RupMN4L3t6g9JNnk0cXZ74p7Qz8xZNDa9kwOdOI5dSFL7v2sXZMtSoJx957wobMFYIHdsBY4dii1aWtXyhA31bSisO7zL1VZDDGMdg-25WhVfYglvDvLgL3ujFH4PSFjzTgsVDz0mLPQUmtI7LAu2W_T50CmYtZ4EH0sqKWwoSUd_cpNFBUXpmB0Jqd-McWZTwJk2k_p7mU82GX5gEdHPZeA2wPtrsrtEXhHnxCA" },
  { name: "Marcus Vance", school: "Ashcombe University • MEng Software Eng", match: "91% Match", photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJL4jBi_vEqD5hUDhwEWnPDu_F9tgsfdIuTaN3aN_f80wZ77DBGWfJjEcqz_blbOAok1UxOojVjBVN7r27ExwA_LJPuA9OPCzW5zlutrfyrjzPnF4j0KoSVACQbrBZ0Q9R8mfEldiEIN12VpPPOTa1iX9y8yy4bRn9CVSElQeN7_Tj9ZUEP3sCxlp8enUhqvrpX4VNR2nxy6uHf-_g30l-TwXgt7EBdIklULN9x1e0w_iUkgRmRF2B5w" },
  { name: "Aria Patel", school: "Elmsworth University • Mathematics & CS", match: "88% Match", photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCssTJDbYVgGNGwW7PA6hVi4Z3deC4fZmRoXgM2K6K3jcDFLXtKCeCupqmuvF5df6sEyhYuIMq3ZHFlEvlmzp4ayK3XpIrRo0IfLpwOCWwpQEQDaRJAhkQWCdluOix1G578Gp40p_5_7sAIaz-yX22c-qtjCJ9i7GU-BEBk0qWf3WrlJSHO1ULDa8wvWRrXDDVokoPqWHUD4iVY_ATS5PHbtdiHcMjQoHvkvOp5nt7yMVq1uZUOt7S0g" },
];

export default function PostOpportunityPage() {
  const navigate = useNavigate();
  const [roleType, setRoleType] = useState<RoleType>("sprint");
  const [skills, setSkills] = useState(INITIAL_SKILLS);
  const [fastTrack, setFastTrack] = useState(true);
  const [publishState, setPublishState] = useState<"idle" | "publishing" | "published">("idle");

  function setSkillThreshold(id: string, threshold: Threshold) {
    setSkills((prev) => prev.map((s) => (s.id === id ? { ...s, threshold } : s)));
  }

  function removeSkill(id: string) {
    setSkills((prev) => prev.filter((s) => s.id !== id));
  }

  function handlePublish() {
    setPublishState("publishing");
    setTimeout(() => {
      setPublishState("published");
      setTimeout(() => navigate("/company-dashboard"), 1400);
    }, 800);
  }

  return (
    <CompanyLayout>
      <div className="max-w-7xl mx-auto w-full pb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg mb-space-xl">
          <div className="flex flex-col max-w-2xl">
            <div className="flex items-center gap-space-sm mb-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">Talent Calibration Studio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
              <span className="font-label-sm text-label-sm text-on-surface-variant">NexTech Labs Portal</span>
              <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-semibold">Live Sandbox</span>
            </div>
            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">Post a New Opening</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
              Create an industry micro-sprint, summer internship, or graduate role calibrated against verified university skill benchmarks.
            </p>
          </div>
          <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
            <div className="relative w-12 h-12 flex-shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5" />
                <path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="78, 100" strokeLinecap="round" strokeWidth="3.5" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-headline-sm text-xs font-bold text-on-surface">340+</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm font-semibold text-on-surface">Calibrated Students</span>
              <span className="font-caption text-caption text-on-surface-variant">Ready for immediate algorithmic matching</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-8 flex flex-col gap-space-xl">
            <section className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-sm text-[12px] font-bold">1</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Role Engagement Format</h2>
                </div>
                <span className="font-caption text-caption text-on-surface-variant">Step 1 of 4</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                Choose how engineering talent engages with your squad. Micro-sprints yield production-verified proof before full commitment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                {ROLE_TYPES.map((role) => {
                  const active = roleType === role.key;
                  return (
                    <label
                      key={role.key}
                      className={`group relative flex flex-col p-space-md rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
                        active ? "bg-surface-container-lowest shadow-md scale-[1.01]" : "bg-surface-container-low"
                      }`}
                      onClick={() => setRoleType(role.key)}
                    >
                      <input checked={active} className="sr-only" name="opening_type" readOnly type="radio" value={role.key} />
                      <div className="flex items-center justify-between mb-space-sm">
                        <span className={`px-2 py-0.5 rounded-full font-label-sm text-[11px] font-semibold ${role.key === "sprint" ? "bg-primary-container text-on-primary" : "bg-secondary-container text-on-secondary-container"}`}>
                          {role.badge}
                        </span>
                        <span className={`material-symbols-outlined text-[20px] ${active ? "text-primary" : "text-outline"}`}>{active ? "check_circle" : "radio_button_unchecked"}</span>
                      </div>
                      <span className="font-headline-sm text-[16px] text-on-surface font-semibold mb-1">{role.title}</span>
                      <p className="font-caption text-caption text-on-surface-variant leading-relaxed">{role.description}</p>
                      <div className={`mt-space-md pt-space-xs flex items-center gap-1 font-label-sm text-[12px] ${role.key === "sprint" ? "text-primary" : "text-on-surface-variant"}`}>
                        <span className="material-symbols-outlined text-[16px]">{role.footerIcon}</span>
                        <span>{role.footerLabel}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </section>

            <section className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-sm text-[12px] font-bold">2</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Core Calibration Details</h2>
                </div>
                <span className="font-caption text-caption text-on-surface-variant">Step 2 of 4</span>
              </div>
              <div className="space-y-space-md">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
                    <span>Opening Title</span>
                    <span className="font-caption text-caption text-on-surface-variant font-normal">Clear &amp; sprint-oriented titles yield 40% higher qualification rates</span>
                  </label>
                  <input
                    className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-primary-container/40 transition-all"
                    type="text"
                    defaultValue="Event-Driven Webhook Dispatcher Micro-Sprint"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">Department / Engineering Squad</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">hub</span>
                      <input
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-primary-container/40 transition-all"
                        type="text"
                        defaultValue="Core Banking & Ledger Infrastructure"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">Location &amp; Arrangement</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">location_on</span>
                      <input
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-primary-container/40 transition-all"
                        type="text"
                        defaultValue="London, UK / Hybrid (1 Day/Wk)"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
                      <span>Compensation / Stipend</span>
                      <span className="font-caption text-caption text-tertiary-container font-medium">Standardized tier</span>
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">payments</span>
                      <input
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-primary-container/40 transition-all"
                        type="text"
                        defaultValue="£1,400 per sprint completion"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">Estimated Sprint Timeline</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">timer</span>
                      <input
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-primary-container/40 transition-all"
                        type="text"
                        defaultValue="5 Weeks (approx. 12 hrs/week)"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">Application Closing Window</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">event</span>
                      <input
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-primary-container/40 transition-all"
                        type="date"
                        defaultValue="2025-04-18"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">Expected Onboarding Start</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">rocket_launch</span>
                      <input
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-primary-container/40 transition-all"
                        type="date"
                        defaultValue="2025-05-02"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md text-on-surface font-semibold">Deliverable Objective Brief</label>
                  <textarea
                    className="w-full p-space-md rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-primary-container/40 transition-all"
                    placeholder="Describe the engineering challenge, architectural scope, and outcome expectations..."
                    rows={3}
                    defaultValue="Develop a high-throughput webhook delivery worker in Go using Redis Streams for job scheduling and dead-letter queues. The student will write comprehensive integration tests achieving >90% branch coverage and benchmark p99 delivery latency under 15ms."
                  />
                </div>
              </div>
            </section>

            <section className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-sm text-[12px] font-bold">3</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Skill Benchmark Taxonomy</h2>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-primary-container/10 text-primary font-label-sm text-[12px] font-semibold">SkillBridge Calibration V3</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                Map specific competency thresholds. Candidates with accredited course modules, lab assessments, or prior GitHub commits are weighted automatically.
              </p>
              <div className="relative mb-space-lg">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">search</span>
                <input
                  className="w-full pl-10 pr-28 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container/40 transition-all"
                  placeholder="Add additional skill criteria (e.g. gRPC, Apache Kafka, Kubernetes)..."
                  type="text"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-primary-container text-on-primary font-label-sm text-label-sm rounded-lg hover:bg-primary transition-colors">+ Add Skill</button>
              </div>
              <div className="space-y-space-sm">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                    <div className="flex items-center gap-space-md min-w-0">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold font-headline-sm text-sm ${skill.abbrBg} ${skill.abbrText}`}>{skill.abbr}</div>
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">{skill.name}</span>
                          <span
                            className={`px-2 py-0.2 rounded-full font-label-sm text-[10px] font-bold uppercase ${
                              skill.priority === "Mandatory" ? "bg-error-container text-on-error-container" : "bg-secondary text-on-secondary font-medium"
                            }`}
                          >
                            {skill.priority}
                          </span>
                        </div>
                        <span className="font-caption text-caption text-on-surface-variant truncate">{skill.note}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <span className="font-caption text-caption text-on-surface-variant hidden md:inline">Target:</span>
                      <div className="inline-flex p-0.5 rounded-lg bg-surface-container-lowest shadow-sm">
                        {THRESHOLDS.map((t) => (
                          <button
                            key={t}
                            className={`px-2.5 py-1 rounded-md font-label-sm text-[12px] transition-colors ${
                              skill.threshold === t ? "bg-primary text-on-primary font-semibold" : "text-on-surface-variant hover:text-on-surface"
                            }`}
                            onClick={() => setSkillThreshold(skill.id, t)}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                      <button className="p-1 rounded-lg text-on-surface-variant hover:text-error hover:bg-error-container/20 transition-colors" onClick={() => removeSkill(skill.id)}>
                        <span className="material-symbols-outlined text-[18px]">close</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-space-md flex flex-wrap items-center gap-space-xs pt-space-xs">
                <span className="font-caption text-caption text-on-surface-variant">Recommended pairings:</span>
                {["+ Prometheus Metrics", "+ OpenTelemetry", "+ PostgreSQL Partitioning"].map((tag) => (
                  <button key={tag} className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high font-label-sm text-[11px] transition-colors">
                    {tag}
                  </button>
                ))}
              </div>
            </section>

            <section className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-sm text-[12px] font-bold">4</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Verification Deliverables &amp; Screening</h2>
                </div>
                <span className="font-caption text-caption text-on-surface-variant">Step 4 of 4</span>
              </div>
              <div className="space-y-space-md mb-space-lg">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
                    <span>Starter Sandbox Repository or Technical Brief</span>
                    <span className="font-caption text-caption text-primary">Public or Org-Scoped</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">code</span>
                    <input
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-primary-container/40 transition-all font-mono text-[13px]"
                      type="text"
                      defaultValue="github.com/nextech-labs/webhook-sprint-benchmark-template"
                    />
                  </div>
                  <span className="font-caption text-caption text-on-surface-variant">Students fork this repository. Automated test suites validate correctness, concurrency race detection, and load limits.</span>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container transition-all">
                  <div className="w-10 h-10 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined text-[22px]">upload_file</span>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">Attach Architectural Spec Sheet (.PDF or Markdown)</span>
                  <span className="font-caption text-caption text-on-surface-variant mt-0.5">Drag and drop or click to upload (Max 15MB)</span>
                </div>
              </div>
              <div className={`p-space-md rounded-xl transition-all ${fastTrack ? "bg-surface-container-low" : "bg-surface-container-low opacity-60"}`}>
                <div className="flex items-start justify-between gap-space-md">
                  <div className="flex items-start gap-space-md">
                    <div className="w-10 h-10 rounded-xl bg-tertiary-container/10 flex items-center justify-center text-tertiary-container flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[24px]">verified</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-space-xs">
                        <span className="font-label-md text-label-md font-bold text-on-surface">Automated Fast-Track Token</span>
                        <span className="px-2 py-0.2 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[10px] font-bold tracking-wide">SMART MATCH</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                        Automatically grant Round 1 technical interview exemption to candidates scoring <strong className="text-on-surface font-semibold">≥85% skill match</strong> with independently verified project delivery history.
                      </p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-1">
                    <input checked={fastTrack} onChange={(e) => setFastTrack(e.target.checked)} className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container" />
                  </label>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-space-lg">
            <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm sticky top-24">
              <div className="flex items-center justify-between pb-space-sm mb-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">analytics</span>
                  <span className="font-label-md text-label-md font-semibold text-on-surface">Match Calibration Health</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse" />
              </div>
              <div className="flex items-center gap-space-lg mb-space-lg">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                    <path className="text-tertiary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="88, 100" strokeLinecap="round" strokeWidth="3.5" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-headline-sm text-sm font-bold text-on-surface">88%</span>
                    <span className="font-caption text-[9px] uppercase tracking-wider font-semibold text-on-surface-variant">Clarity</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-[16px] text-on-surface font-semibold">High Signal Ratio</span>
                  <p className="font-caption text-caption text-on-surface-variant mt-1">Your strict Go &amp; Redis verification thresholds filter out uncalibrated resumes before review.</p>
                </div>
              </div>
              <div className="space-y-space-sm mb-space-lg">
                <div className="flex justify-between items-center text-body-sm">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Eligible Academic Pipeline</span>
                  <span className="font-label-sm text-label-sm font-semibold text-on-surface">~48 Students</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                  <div className="bg-primary-container h-full rounded-full w-3/4" />
                </div>
                <div className="flex justify-between items-center text-body-sm pt-2">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Fast-Track Eligible (≥85%)</span>
                  <span className="font-label-sm text-label-sm font-semibold text-tertiary-container">19 Students</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                  <div className="bg-tertiary-fixed-dim h-full rounded-full w-2/5" />
                </div>
              </div>
              <div className="p-space-md rounded-xl bg-surface-container-low mb-space-lg">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-space-sm font-semibold text-[11px]">Instant Calibrated Matches</span>
                <div className="flex flex-col gap-space-sm">
                  {MATCHED_CANDIDATES.map((c) => (
                    <div key={c.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-surface-container-highest">
                          <img className="w-full h-full object-cover" alt={c.name} src={c.photo} />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm font-semibold text-on-surface">{c.name}</span>
                          <span className="font-caption text-[11px] text-on-surface-variant">{c.school}</span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-bold">{c.match}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-secondary-container/40">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">school</span>
                <p className="font-caption text-caption text-on-surface-variant">
                  SkillBridge automatically confirms transcripts, completed departmental GitHub submissions, and supervised faculty coursework.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-space-xl p-space-md bg-surface-container-lowest rounded-xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container" />
            <div className="flex flex-col">
              <span className="font-label-md text-label-md font-semibold text-on-surface">Draft Auto-Saved</span>
              <span className="font-caption text-caption text-on-surface-variant">Last updated 1 minute ago • Version 1.3</span>
            </div>
          </div>
          <div className="flex items-center gap-space-md w-full sm:w-auto justify-end">
            <button className="px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors" type="button">
              Save Draft
            </button>
            <button className="px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-1.5" type="button">
              <span className="material-symbols-outlined text-[18px]">visibility</span>
              <span>Preview Listing</span>
            </button>
            <button
              className={`px-space-lg py-2.5 rounded-lg text-on-primary font-label-md text-label-md transition-all shadow-sm hover:shadow-md flex items-center gap-2 ${
                publishState === "published" ? "bg-tertiary-container" : "bg-primary-container hover:bg-primary"
              }`}
              type="button"
              disabled={publishState !== "idle"}
              onClick={handlePublish}
            >
              {publishState === "idle" && (
                <>
                  <span>Publish Opening</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </>
              )}
              {publishState === "publishing" && (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                  <span>Publishing...</span>
                </>
              )}
              {publishState === "published" && (
                <>
                  <span>Published!</span>
                  <span className="material-symbols-outlined text-[18px]">done</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div
          className={`fixed bottom-8 right-8 z-50 transform transition-all duration-300 p-space-md bg-inverse-surface text-inverse-on-surface rounded-xl shadow-xl flex items-center gap-space-md max-w-md ${
            publishState === "published" ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-[20px]">done</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-md text-label-md font-bold">Opening Published Live!</span>
            <span className="font-caption text-caption text-outline-variant">Notifying 48 calibrated students matching Go &amp; Redis benchmark criteria.</span>
          </div>
        </div>
      </div>
    </CompanyLayout>
  );
}
