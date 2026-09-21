import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OnboardingLayout from "../layouts/OnboardingLayout";

interface ProjectEntry {
  id: number;
  name: string;
  description: string;
  skills: string[];
  url: string;
  placeholder?: boolean;
}

const INITIAL_PROJECTS: ProjectEntry[] = [
  {
    id: 1,
    name: "FinTech Budgeting Mobile App (Santander Hackathon)",
    description: "Designed end-to-end design system in Figma and prototyped core transaction management flows with 4 teammates.",
    skills: ["Figma", "Prototyping", "Design Systems", "User Testing"],
    url: "https://github.com/mayalin/fintech-budgeting-app",
  },
  {
    id: 2,
    name: "Distributed Task Queue in Python",
    description: "Implemented an asynchronous worker queue with Redis and SQLite for CS340 systems assignment.",
    skills: ["Python", "Redis", "Concurrency"],
    url: "https://github.com/mayalin/distributed-queue",
  },
];

export default function Onboarding3Page() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [nextId, setNextId] = useState(3);
  const [resumeFileName, setResumeFileName] = useState<string | null>(null);

  function addProject() {
    setProjects((prev) => [...prev, { id: nextId, name: "", description: "", skills: [], url: "", placeholder: true }]);
    setNextId((n) => n + 1);
  }

  function removeProject(id: number) {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  }

  function handleResumeUpload(files: FileList | null) {
    if (files && files[0]) {
      setResumeFileName(files[0].name);
    }
  }

  return (
    <OnboardingLayout activeNavIndex={-1}>
      <div className="flex flex-col gap-space-sm pb-space-lg mb-space-lg">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Step 3 of 3</span>
          <span className="font-caption text-caption text-tertiary flex items-center gap-1 font-medium">
            <span className="material-symbols-outlined text-[14px]">shield</span> Ready to Finalize
          </span>
        </div>
        <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
          <div className="bg-primary-container h-full w-full rounded-full transition-all duration-500" />
        </div>
        <div className="grid grid-cols-3 gap-space-xs pt-space-xs">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="w-4 h-4 rounded-full bg-tertiary-fixed flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-on-tertiary-fixed text-[12px] font-bold">check</span>
            </span>
            <span className="font-caption text-caption text-on-surface truncate">1. Degree Details</span>
          </div>
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="w-4 h-4 rounded-full bg-tertiary-fixed flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-on-tertiary-fixed text-[12px] font-bold">check</span>
            </span>
            <span className="font-caption text-caption text-on-surface truncate">2. Skills &amp; Proficiency</span>
          </div>
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-on-primary" />
            </span>
            <span className="font-caption text-caption text-primary font-semibold truncate">3. Past Projects</span>
          </div>
        </div>
      </div>

      <div className="mb-space-xl">
        <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Show your work</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">
          Link your academic projects, hackathons, or personal repos to substantiate your skill ratings.
        </p>
      </div>

      <div className="relative mb-space-xl p-space-lg rounded-xl bg-surface-container-low shadow-sm transition-all hover:bg-surface-container">
        {resumeFileName ? (
          <div className="flex items-center gap-space-md">
            <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary flex-shrink-0">
              <span className="material-symbols-outlined text-[22px]">check</span>
            </div>
            <div className="flex-1">
              <div className="font-label-md text-label-md font-semibold text-on-surface">Parsed: {resumeFileName}</div>
              <p className="font-caption text-caption text-tertiary">Found 2 verified projects and 7 technical skills automatically populated.</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-space-md text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center flex-shrink-0 text-primary">
              <span className="material-symbols-outlined text-[28px]">upload_file</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="font-headline-sm text-headline-sm text-on-surface">Auto-fill from Resume or CV</span>
                <span className="font-caption text-caption bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-medium">Fastest</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                SkillBridge extracts coursework, hackathons, and github artifacts directly into verified projects. Max file size: 10MB.
              </p>
              <div className="mt-space-md flex flex-wrap items-center justify-center sm:justify-start gap-space-sm">
                <label className="cursor-pointer inline-flex items-center gap-1.5 bg-surface-container-lowest text-primary px-3.5 py-1.5 rounded-lg shadow-sm hover:bg-surface-container-high transition-colors font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[18px]">add_circle</span>
                  <span>Browse PDF file</span>
                  <input accept=".pdf,.docx" className="hidden" type="file" onChange={(e) => handleResumeUpload(e.target.files)} />
                </label>
                <span className="font-caption text-caption text-secondary">or drag and drop here</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-space-lg">
        {projects.map((project, index) => (
          <div key={project.id} className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow relative group">
            <div className="flex items-start justify-between gap-space-md mb-space-md">
              <div className="flex items-center gap-2">
                <span
                  className={`w-6 h-6 rounded-md flex items-center justify-center font-caption text-caption font-semibold ${
                    index === 0 ? "bg-primary-fixed text-primary" : "bg-surface-container-high text-on-surface-variant"
                  }`}
                >
                  {index + 1}
                </span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  {project.placeholder ? "New Project" : index === 0 ? "Featured Project" : project.name || "Project"}
                </span>
              </div>
              <button
                aria-label="Delete project"
                className="text-on-surface-variant hover:text-error transition-colors p-1 rounded hover:bg-surface-container-high"
                type="button"
                onClick={() => removeProject(project.id)}
              >
                <span className="material-symbols-outlined text-[18px]">delete</span>
              </button>
            </div>
            <div className="flex flex-col gap-space-md">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-1">Project Name</label>
                <input
                  className="w-full bg-surface-container-low px-3 py-2 rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest transition-colors outline-none"
                  type="text"
                  defaultValue={project.name}
                  placeholder={project.placeholder ? "e.g. Autonomous Robotic Arm Controller" : undefined}
                />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-1">Impact &amp; Architecture</label>
                <textarea
                  className="w-full bg-surface-container-low px-3 py-2 rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest transition-colors outline-none resize-none"
                  rows={2}
                  defaultValue={project.description}
                  placeholder={project.placeholder ? "Briefly describe what you built, constraints solved, and key technical wins..." : undefined}
                />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-1.5">Skills Demonstrated</label>
                <div className="flex flex-wrap gap-1.5 items-center">
                  {project.skills.map((skill) => (
                    <span key={skill} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-caption text-caption">
                      <span className="material-symbols-outlined text-[14px]">check</span> {skill}
                    </span>
                  ))}
                  <button className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface font-caption text-caption transition-colors" type="button">
                    <span className="material-symbols-outlined text-[14px]">add</span> Add skill{project.placeholder ? " tag" : ""}
                  </button>
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-1">Repository or Live URL</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">link</span>
                  <input
                    className="w-full bg-surface-container-low pl-9 pr-9 py-2 rounded-lg font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest transition-colors outline-none"
                    type="text"
                    defaultValue={project.url}
                    placeholder={project.placeholder ? "https://..." : undefined}
                  />
                  {project.url && (
                    <a className="absolute right-3 text-secondary hover:text-primary transition-colors" href={project.url} rel="noreferrer" target="_blank">
                      <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="mt-space-md w-full py-3 px-space-md rounded-xl bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md flex items-center justify-center gap-2 transition-colors"
        type="button"
        onClick={addProject}
      >
        <span className="material-symbols-outlined text-[20px]">add_circle</span>
        <span>Add another project</span>
      </button>

      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-space-md mt-space-xl pt-space-lg">
        <Link className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors py-2" to="/onboarding-2">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span>Back to Skills</span>
        </Link>
        <div className="flex items-center gap-space-sm w-full sm:w-auto">
          <button
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-lg py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:opacity-95 active:scale-[0.99] transition-all"
            type="button"
            onClick={() => navigate("/dashboard")}
          >
            <span>Finish setup → go to Dashboard</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </OnboardingLayout>
  );
}
