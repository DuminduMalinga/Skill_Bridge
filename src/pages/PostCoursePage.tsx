import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InstituteLayout from "../layouts/InstituteLayout";

type CourseFormat = "online" | "in-person" | "hybrid";

const FORMATS: { key: CourseFormat; badge: string; badgeTone: string; title: string; description: string }[] = [
  { key: "online", badge: "Most popular", badgeTone: "bg-primary-container text-on-primary", title: "Online", description: "Fully remote, self-paced or live-streamed sessions accessible from anywhere." },
  { key: "in-person", badge: "On Campus", badgeTone: "bg-secondary-container text-on-secondary-container", title: "In-person", description: "Classroom or lab-based sessions delivered at your institute campus." },
  { key: "hybrid", badge: "Blended", badgeTone: "bg-secondary-container text-on-secondary-container", title: "Hybrid", description: "A mix of online modules and in-person workshops or labs." },
];

const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const FUNDING_OPTIONS = ["Free", "Free with University ID", "Paid", "Fully Funded by University", "University Credit"];

export default function PostCoursePage() {
  const navigate = useNavigate();
  const [format, setFormat] = useState<CourseFormat>("online");
  const [title, setTitle] = useState("Full-Stack Web Development Bootcamp");
  const [level, setLevel] = useState(LEVELS[1]);
  const [duration, setDuration] = useState("12 wks • 10 hrs/wk");
  const [funding, setFunding] = useState(FUNDING_OPTIONS[2]);
  const [industryCert, setIndustryCert] = useState(true);
  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js", "REST APIs"]);
  const [skillInput, setSkillInput] = useState("");
  const [publishState, setPublishState] = useState<"idle" | "publishing" | "published">("idle");

  function addSkill(name?: string) {
    const val = (name ?? skillInput).trim();
    if (!val) return;
    setSkills((prev) => [...prev, val]);
    if (!name) setSkillInput("");
  }

  function removeSkill(index: number) {
    setSkills((prev) => prev.filter((_, i) => i !== index));
  }

  function handlePublish() {
    setPublishState("publishing");
    setTimeout(() => {
      setPublishState("published");
      setTimeout(() => navigate("/institute-dashboard"), 1400);
    }, 800);
  }

  return (
    <InstituteLayout>
      <div className="max-w-7xl mx-auto w-full pb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg mb-space-xl">
          <div className="flex flex-col max-w-2xl">
            <div className="flex items-center gap-space-sm mb-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">Course Publishing Studio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
              <span className="font-label-sm text-label-sm text-on-surface-variant">Riverside Institute Portal</span>
              <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-semibold">Live Sandbox</span>
            </div>
            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">Post a New Course</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
              Publish a new program with the skills it covers, level, and format so the right students find it.
            </p>
          </div>
          <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
            <div className="relative w-12 h-12 flex-shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5" />
                <path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="78, 100" strokeLinecap="round" strokeWidth="3.5" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-headline-sm text-xs font-bold text-on-surface">610+</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm font-semibold text-on-surface">Matched Students</span>
              <span className="font-caption text-caption text-on-surface-variant">Ready to discover new courses</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-8 flex flex-col gap-space-xl">
            <section className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-sm text-[12px] font-bold">1</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Course Format</h2>
                </div>
                <span className="font-caption text-caption text-on-surface-variant">Step 1 of 4</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">Choose how students will engage with this course.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                {FORMATS.map((f) => {
                  const active = format === f.key;
                  return (
                    <label
                      key={f.key}
                      className={`group relative flex flex-col p-space-md rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
                        active ? "bg-surface-container-lowest shadow-md scale-[1.01]" : "bg-surface-container-low"
                      }`}
                      onClick={() => setFormat(f.key)}
                    >
                      <input checked={active} className="sr-only" name="course_format" readOnly type="radio" value={f.key} />
                      <div className="flex items-center justify-between mb-space-sm">
                        <span className={`px-2 py-0.5 rounded-full font-label-sm text-[11px] font-semibold ${f.badgeTone}`}>{f.badge}</span>
                        <span className={`material-symbols-outlined text-[20px] ${active ? "text-primary" : "text-outline"}`}>{active ? "check_circle" : "radio_button_unchecked"}</span>
                      </div>
                      <span className="font-headline-sm text-[16px] text-on-surface font-semibold mb-1">{f.title}</span>
                      <p className="font-caption text-caption text-on-surface-variant leading-relaxed">{f.description}</p>
                    </label>
                  );
                })}
              </div>
            </section>

            <section className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-sm text-[12px] font-bold">2</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Core Course Details</h2>
                </div>
                <span className="font-caption text-caption text-on-surface-variant">Step 2 of 4</span>
              </div>
              <div className="space-y-space-md">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
                    <span>Course Title</span>
                    <span className="font-caption text-caption text-on-surface-variant font-normal">Clear, skill-oriented titles perform best</span>
                  </label>
                  <input
                    className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-primary-container/40 transition-all"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">Level</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">signal_cellular_alt</span>
                      <select
                        className="w-full pl-10 pr-9 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm appearance-none outline-none focus:ring-2 focus:ring-primary-container/40 transition-all cursor-pointer"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                      >
                        {LEVELS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant pointer-events-none">expand_more</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">Duration</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">schedule</span>
                      <input
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-primary-container/40 transition-all"
                        placeholder="e.g. 3 wks • 6 hrs/wk"
                        type="text"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">Price / Funding Type</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">payments</span>
                      <select
                        className="w-full pl-10 pr-9 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm appearance-none outline-none focus:ring-2 focus:ring-primary-container/40 transition-all cursor-pointer"
                        value={funding}
                        onChange={(e) => setFunding(e.target.value)}
                      >
                        {FUNDING_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant pointer-events-none">expand_more</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 justify-end">
                    <label className="flex items-center gap-space-sm p-space-md rounded-lg bg-surface-container-low cursor-pointer">
                      <input
                        checked={industryCert}
                        onChange={(e) => setIndustryCert(e.target.checked)}
                        className="w-4 h-4 rounded text-primary-container bg-surface focus:ring-primary-container/20 cursor-pointer accent-primary-container"
                        type="checkbox"
                      />
                      <span className="font-label-md text-label-md text-on-surface font-medium flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[18px] text-tertiary-container">workspace_premium</span>
                        Industry Cert on completion
                      </span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md text-on-surface font-semibold">Description</label>
                  <textarea
                    className="w-full p-space-md rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-primary-container/40 transition-all"
                    placeholder="Describe the course outcomes, teaching format, and who it's for..."
                    rows={3}
                    defaultValue="Learn to design, build, and deploy production-grade full-stack applications from first principles through a project-based, mentor-supported curriculum."
                  />
                </div>
              </div>
            </section>

            <section className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-sm text-[12px] font-bold">3</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Skills Covered</h2>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-primary-container/10 text-primary font-label-sm text-[12px] font-semibold">SkillBridge Taxonomy</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                List the specific skills students will gain. These power skill-gap matching on the student marketplace.
              </p>
              <div className="relative mb-space-lg">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">search</span>
                <input
                  className="w-full pl-10 pr-28 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container/40 transition-all"
                  placeholder="Add a skill (e.g. React, Python, Figma, SQL)..."
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addSkill();
                    }
                  }}
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-primary-container text-on-primary font-label-sm text-label-sm rounded-lg hover:bg-primary transition-colors" onClick={() => addSkill()} type="button">
                  + Add Skill
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={`${skill}-${i}`} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm">
                    {skill}
                    <button className="hover:text-error transition-colors flex items-center" onClick={() => removeSkill(i)} type="button">
                      <span className="material-symbols-outlined text-[14px]">close</span>
                    </button>
                  </span>
                ))}
              </div>
              <div className="mt-space-md flex flex-wrap items-center gap-space-xs pt-space-xs">
                <span className="font-caption text-caption text-on-surface-variant">Recommended pairings:</span>
                {["SQL", "Git & GitHub", "Testing & CI/CD"].map((tag) => (
                  <button key={tag} className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high font-label-sm text-[11px] transition-colors" onClick={() => addSkill(tag)} type="button">
                    + {tag}
                  </button>
                ))}
              </div>
            </section>

            <section className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-sm text-[12px] font-bold">4</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Syllabus &amp; Publishing</h2>
                </div>
                <span className="font-caption text-caption text-on-surface-variant">Step 4 of 4</span>
              </div>
              <div className="space-y-space-md mb-space-lg">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
                    <span>Syllabus Link or Repository</span>
                    <span className="font-caption text-caption text-primary">Public or Org-Scoped</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">link</span>
                    <input
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-primary-container/40 transition-all font-mono text-[13px]"
                      type="text"
                      defaultValue="riversidetech.ac/courses/fullstack-bootcamp"
                    />
                  </div>
                  <span className="font-caption text-caption text-on-surface-variant">Students land here from &quot;View syllabus&quot; on your course card.</span>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container transition-all">
                  <div className="w-10 h-10 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined text-[22px]">upload_file</span>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">Attach Full Syllabus (.PDF or Markdown)</span>
                  <span className="font-caption text-caption text-on-surface-variant mt-0.5">Drag and drop or click to upload (Max 15MB)</span>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-space-lg">
            <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm sticky top-24">
              <div className="flex items-center justify-between pb-space-sm mb-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">visibility</span>
                  <span className="font-label-md text-label-md font-semibold text-on-surface">Course Card Preview</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm bg-surface-container-low">
                <div className="relative h-24 w-full bg-surface-container-high flex items-end p-2">
                  <span className="px-2 py-0.5 rounded-md bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-caption text-caption font-semibold">Riverside Institute</span>
                </div>
                <div className="p-space-md">
                  <span className="font-headline-sm text-[15px] text-on-surface font-semibold leading-snug">{title || "Course Title"}</span>
                  <div className="mt-2 flex items-center justify-between text-secondary font-caption text-caption">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> {duration || "Duration"}</span>
                    {industryCert && <span className="text-tertiary font-medium">Industry Cert</span>}
                  </div>
                </div>
              </div>
              <div className="space-y-space-sm my-space-lg">
                <div className="flex justify-between items-center text-body-sm">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Matching Students</span>
                  <span className="font-label-sm text-label-sm font-semibold text-on-surface">~610 Students</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                  <div className="bg-primary-container h-full rounded-full w-3/4" />
                </div>
              </div>
              <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-secondary-container/40">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">school</span>
                <p className="font-caption text-caption text-on-surface-variant">Courses appear in the student marketplace and the Institute Directory automatically once published.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-space-xl p-space-md bg-surface-container-lowest rounded-xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container" />
            <div className="flex flex-col">
              <span className="font-label-md text-label-md font-semibold text-on-surface">Draft Auto-Saved</span>
              <span className="font-caption text-caption text-on-surface-variant">Last updated just now • Version 1.0</span>
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
                  <span>Publish Course</span>
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
            <span className="font-label-md text-label-md font-bold">Course Published Live!</span>
            <span className="font-caption text-caption text-outline-variant">Now visible to ~610 matching students in the marketplace.</span>
          </div>
        </div>
      </div>
    </InstituteLayout>
  );
}
