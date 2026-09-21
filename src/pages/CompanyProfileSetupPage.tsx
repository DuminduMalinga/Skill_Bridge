import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const BRAND_LOGO_URL =
  "https://lh3.googleusercontent.com/aida/AEtjO1V5rM_dtcWnlE8HaAN7eXi0PejiuC50-cFY30ckgoRdke4DrEzb3gqcqcDA9w7-ZYqajI6T2fN3Dcj0AVBsUSOBs62FyBgRlR3IpGeJHrSbgepRk1NhTR-EGkQ9f1h9yJEWrPn1K0uqIU1lAwE3sAgJzzIbA2-_W2QT_WcGNyl5TSBQ2klCwJIwky8LHtS-Ho4i1Bj04lYWNGtc45Rwm7kwZy6rday0VEUe13n9--5vZ3v-F6S52ceIgsZ8";

const NAV_TABS = ["Company Profile", "Skill Framework", "Team Access", "Curriculum Alignment"];

const INDUSTRIES = [
  "Financial Technology / FinTech",
  "Artificial Intelligence & ML",
  "Enterprise Software & Cloud",
  "E-Commerce & Logistics",
  "Cybersecurity & Defense",
  "HealthTech & BioInformatics",
  "CleanTech & Renewable Energy",
];

const SIZES = ["Seed / Early Stage (1–10)", "Growth Stage (11–50)", "Mid-Market (51–250)", "Enterprise (250–1,000)", "Global Tech Enterprise (1,000+)"];

type SubmitState = "idle" | "saving" | "verified";

export default function CompanyProfileSetupPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("Nimbus Pay Technologies");
  const [industry, setIndustry] = useState(INDUSTRIES[0]);
  const [size, setSize] = useState(SIZES[3]);
  const [website, setWebsite] = useState("nimbuspay.com");
  const [tagline, setTagline] = useState("Building transparent, real-time banking infrastructure that empowers people to make the most of their money.");
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const initial = name.trim().length > 0 ? name.trim().charAt(0).toUpperCase() : "C";

  const score = Math.min(
    100,
    20 + (name.trim().length > 2 ? 20 : 0) + (industry ? 15 : 0) + (size ? 15 : 0) + (website.trim().length > 3 ? 15 : 0) + (tagline.trim().length >= 10 ? 15 : 0)
  );

  function handleLogoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => setLogoPreview(event.target?.result as string);
    reader.readAsDataURL(file);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitState("saving");
    setTimeout(() => {
      setSubmitState("verified");
      setTimeout(() => navigate("/company-dashboard"), 900);
    }, 900);
  }

  return (
    <div className="bg-background font-body-md text-on-surface min-h-screen flex flex-col justify-between antialiased selection:bg-primary-container selection:text-on-primary">
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <img alt="SkillBridge logo" className="h-8 w-auto object-contain" src={BRAND_LOGO_URL} />
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">SkillBridge</span>
            <span className="hidden sm:inline-block text-outline-variant">|</span>
            <span className="hidden sm:inline-block font-label-sm text-label-sm text-secondary tracking-wide uppercase">Enterprise Setup</span>
          </div>
          <nav className="hidden md:flex items-center gap-space-md">
            {NAV_TABS.map((tab, i) => (
              <a
                key={tab}
                aria-current={i === 0 ? "page" : undefined}
                className={
                  i === 0
                    ? "font-label-md transition-colors px-3 py-1.5 bg-secondary-container text-on-secondary-container rounded-lg"
                    : "font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors px-3 py-1.5"
                }
                href="#"
              >
                {tab}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-space-md">
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5" href="#">
              <span className="material-symbols-outlined text-[18px] text-secondary">help</span>
              <span className="hidden md:inline">Need help? Contact support</span>
            </a>
            <div className="h-4 w-px bg-surface-container-highest hidden sm:block" />
            <a className="font-label-sm text-label-sm text-secondary hover:text-error transition-colors" href="#">Log out</a>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full pt-16 flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-space-xl flex flex-col items-center justify-center">
          <div className="flex flex-col w-full">
            <div className="w-full max-w-5xl mx-auto mb-space-lg">
              <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm">
                <div className="flex items-center gap-space-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
                    Step 1 of 1 • Rapid Setup
                  </span>
                  <span className="text-outline-variant font-caption text-caption">•</span>
                  <span className="text-secondary font-label-sm text-label-sm">Estimated time: 2 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm text-secondary">Setup Completion</span>
                  <div className="w-28 h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary-container rounded-full transition-all duration-500 ease-out" style={{ width: `${score}%` }} />
                  </div>
                  <span className="font-label-sm text-label-sm text-primary font-semibold">{score}%</span>
                </div>
              </div>
            </div>

            <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              <section className="lg:col-span-7 flex flex-col gap-space-lg bg-surface-container-lowest p-space-lg sm:p-space-xl rounded-xl shadow-sm">
                <header className="flex flex-col gap-space-xs">
                  <div className="flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[18px]">apartment</span>
                    Employer Identity
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface">Set up your company profile</h1>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed">
                    Tell university talent, faculty partners, and prospective interns about your engineering vision, industry domain, and team culture.
                  </p>
                </header>
                <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="companyNameInput">
                      <span>Company Name <span className="text-error">*</span></span>
                      <span className="font-caption text-caption text-secondary">Public to all students</span>
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3.5 material-symbols-outlined text-outline text-[20px] pointer-events-none">domain</span>
                      <input
                        className="w-full pl-10 pr-4 py-2.5 bg-surface-container-lowest text-on-surface rounded-lg shadow-sm placeholder:text-outline font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container/30 transition-all"
                        id="companyNameInput"
                        placeholder="e.g. Nimbus Pay, DeepMind, Ledgerly"
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface" htmlFor="industrySelect">Primary Industry <span className="text-error">*</span></label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3.5 material-symbols-outlined text-outline text-[20px] pointer-events-none">category</span>
                        <select
                          className="w-full pl-10 pr-9 py-2.5 bg-surface-container-lowest text-on-surface rounded-lg shadow-sm font-body-md text-body-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-container/30 transition-all cursor-pointer"
                          id="industrySelect"
                          required
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                        >
                          {INDUSTRIES.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <span className="absolute right-3 material-symbols-outlined text-outline text-[20px] pointer-events-none">expand_more</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface" htmlFor="companySizeSelect">Company Size <span className="text-error">*</span></label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3.5 material-symbols-outlined text-outline text-[20px] pointer-events-none">groups</span>
                        <select
                          className="w-full pl-10 pr-9 py-2.5 bg-surface-container-lowest text-on-surface rounded-lg shadow-sm font-body-md text-body-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-container/30 transition-all cursor-pointer"
                          id="companySizeSelect"
                          required
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                        >
                          {SIZES.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <span className="absolute right-3 material-symbols-outlined text-outline text-[20px] pointer-events-none">expand_more</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface" htmlFor="websiteInput">Company Website <span className="text-error">*</span></label>
                    <div className="flex items-center rounded-lg shadow-sm bg-surface-container-lowest overflow-hidden focus-within:ring-2 focus-within:ring-primary-container/30 transition-all">
                      <span className="px-3.5 py-2.5 bg-surface-container-low text-secondary font-label-md text-label-md select-none">https://</span>
                      <input
                        className="w-full px-3 py-2.5 bg-transparent text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none"
                        id="websiteInput"
                        placeholder="nimbuspay.com"
                        required
                        type="text"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label className="font-label-md text-label-md text-on-surface">Company Logo Mark</label>
                      <span className="font-caption text-caption text-secondary">SVG, PNG, or JPG (400×400px suggested)</span>
                    </div>
                    <div
                      className="relative flex flex-col sm:flex-row items-center gap-space-md p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <div className="w-16 h-16 rounded-xl bg-primary flex-shrink-0 flex items-center justify-center text-on-primary font-headline-md text-headline-md shadow-md transition-transform group-hover:scale-105 overflow-hidden">
                        {logoPreview ? <img src={logoPreview} className="w-full h-full object-cover rounded-xl" alt="Logo preview" /> : initial}
                      </div>
                      <div className="flex-1 flex flex-col text-center sm:text-left gap-1">
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                          <span className="font-label-md text-label-md text-on-surface font-semibold">nimbuspay-vector-brandmark.svg</span>
                          <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-caption text-caption">84 KB</span>
                        </div>
                        <p className="font-caption text-caption text-secondary">
                          Drag and drop a new logo mark here, or <button className="text-primary font-medium hover:underline inline" type="button">browse computer</button>
                        </p>
                      </div>
                      <button
                        className="px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface text-secondary hover:text-on-surface font-label-sm text-label-sm shadow-sm transition-all"
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          fileInputRef.current?.click();
                        }}
                      >
                        Replace
                      </button>
                      <input ref={fileInputRef} accept="image/png, image/jpeg, image/svg+xml" className="hidden" type="file" onChange={handleLogoChange} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label className="font-label-md text-label-md text-on-surface" htmlFor="taglineInput">One-line Mission &amp; Engineering Focus <span className="text-error">*</span></label>
                      <span className="font-caption text-caption text-secondary">{tagline.length} / 140</span>
                    </div>
                    <textarea
                      className="w-full px-3.5 py-2.5 bg-surface-container-lowest text-on-surface rounded-lg shadow-sm placeholder:text-outline font-body-md text-body-md resize-none focus:outline-none focus:ring-2 focus:ring-primary-container/30 transition-all leading-relaxed"
                      id="taglineInput"
                      maxLength={140}
                      placeholder="e.g. Building next-generation distributed systems to give 9+ million customers unprecedented financial agency."
                      required
                      rows={2}
                      value={tagline}
                      onChange={(e) => setTagline(e.target.value)}
                    />
                  </div>
                  <div className="flex items-start gap-space-sm p-3.5 rounded-lg bg-surface-container-low">
                    <span className="material-symbols-outlined text-tertiary-container text-[20px] flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold">Automatic Academic Accreditation Check</span>
                      <p className="font-caption text-caption text-secondary leading-normal">
                        Based on your registered enterprise domain (<span className="font-medium text-on-surface">@nimbuspay.com</span>), the{" "}
                        <span className="text-tertiary-container font-medium">SkillBridge Verified Industry Partner</span> seal will automatically activate upon submission.
                      </p>
                    </div>
                  </div>
                  <div className="pt-space-sm flex flex-col sm:flex-row items-center gap-space-md">
                    <button
                      className={`w-full sm:w-auto px-6 py-3 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 shadow-md transition-all hover:translate-y-[-1px] active:translate-y-[0px] ${
                        submitState === "verified" ? "bg-tertiary-container text-on-tertiary" : "bg-primary-container hover:bg-primary text-on-primary"
                      }`}
                      type="submit"
                      disabled={submitState !== "idle"}
                    >
                      {submitState === "idle" && (
                        <>
                          <span>Continue to Employer Dashboard</span>
                          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </>
                      )}
                      {submitState === "saving" && <span>Saving Profile &amp; Redirecting...</span>}
                      {submitState === "verified" && (
                        <>
                          <span className="material-symbols-outlined text-[18px]">check_circle</span>
                          <span>Profile Verified! Loading Dashboard...</span>
                        </>
                      )}
                    </button>
                    <span className="font-caption text-caption text-secondary text-center sm:text-left">
                      You can modify all company specs anytime under <a className="text-primary hover:underline font-medium" href="#">Organization Settings</a>.
                    </span>
                  </div>
                </form>
              </section>

              <aside className="lg:col-span-5 flex flex-col gap-space-md sticky top-24">
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary-container" />
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wide uppercase">Live Candidate Preview</span>
                  </div>
                  <span className="font-caption text-caption text-secondary">Student Marketplace Card</span>
                </div>
                <div className="w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md transition-all duration-300">
                  <div className="flex items-start justify-between gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-14 h-14 rounded-xl bg-primary text-on-primary flex items-center justify-center font-headline-md text-headline-md shadow-sm transition-all overflow-hidden">
                        {logoPreview ? <img src={logoPreview} className="w-full h-full object-cover rounded-xl" alt="Logo preview" /> : initial}
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">{name.trim() || "Company Name"}</span>
                          <span className="inline-flex items-center text-tertiary-container" title="Verified University Industry Partner">
                            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="font-caption text-caption text-primary font-medium hover:underline">{website.trim() || "company.com"}</span>
                          <span className="text-outline-variant font-caption text-caption">•</span>
                          <span className="font-caption text-caption text-secondary">London • Hybrid</span>
                        </div>
                      </div>
                    </div>
                    <button aria-label="Bookmark preview" className="w-8 h-8 rounded-full flex items-center justify-center text-secondary hover:bg-surface-container-low transition-colors" type="button">
                      <span className="material-symbols-outlined text-[20px]">bookmark_border</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-caption text-caption font-medium">{industry}</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-low text-secondary font-caption text-caption">{size}</span>
                    <span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-caption text-caption font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">school</span>
                      Tier 1 Partner
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed line-clamp-3">
                    {tagline.trim() || "Tell university talent what your company stands for, the core challenges you solve, and what engineers learn here."}
                  </p>
                  <div className="p-3 bg-surface-container-low rounded-lg flex flex-col gap-2">
                    <div className="flex items-center justify-between text-caption font-caption">
                      <span className="text-secondary font-medium">Sample Curriculum Match (Computer Science BS)</span>
                      <span className="text-tertiary-container font-semibold">94% Fit</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                      <div className="w-[94%] h-full bg-tertiary-container rounded-full" />
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-caption text-caption">Go / Distributed Systems</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-caption text-caption">Kafka</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-caption text-caption">AWS Cloud Native</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs text-secondary font-caption text-caption">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-tertiary-container">work_outline</span>
                      <span>Open roles launching on submission</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary font-medium flex items-center gap-0.5">
                      Profile View
                      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </span>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary-fixed flex-shrink-0 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">trending_up</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="font-label-md text-label-md text-on-surface font-semibold">3.4× Talent Acquisition Velocity</h2>
                    <p className="font-caption text-caption text-secondary leading-relaxed">
                      Organizations with a verified industry focus and clear mission bio receive over triple the number of qualified graduate engineer applications within their first 14 days.
                    </p>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2">
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-primary">lightbulb</span>
                    Pro-Tip for Technical Recruiters
                  </span>
                  <p className="font-caption text-caption text-secondary leading-relaxed">
                    Students frequently filter projects by primary technology stacks. You will be able to tag internal frameworks, mentoring managers, and specific university curriculum pipelines right on the next screen.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
