import { Link } from "react-router-dom";

const BRAND_LOGO_URL =
  "https://lh3.googleusercontent.com/aida/AEtjO1V5rM_dtcWnlE8HaAN7eXi0PejiuC50-cFY30ckgoRdke4DrEzb3gqcqcDA9w7-ZYqajI6T2fN3Dcj0AVBsUSOBs62FyBgRlR3IpGeJHrSbgepRk1NhTR-EGkQ9f1h9yJEWrPn1K0uqIU1lAwE3sAgJzzIbA2-_W2QT_WcGNyl5TSBQ2klCwJIwky8LHtS-Ho4i1Bj04lYWNGtc45Rwm7kwZy6rday0VEUe13n9--5vZ3v-F6S52ceIgsZ8";

const NAV_LINKS = [
  { label: "Platform", active: true },
  { label: "How it Works" },
  { label: "Partner Companies" },
  { label: "For Universities" },
  { label: "Success Stories" },
];

const COMPANIES = [
  { name: "Nimbus Pay", icon: "account_balance", tag: "Distributed Go" },
  { name: "Ledgerly", icon: "payments", tag: "API Architecture" },
  { name: "Revolut", icon: "credit_card", tag: "Fintech Resilience" },
  { name: "Figma", icon: "draw", tag: "Wasm & UI Systems" },
  { name: "Deliveroo", icon: "delivery_dining", tag: "Logistics Queues" },
  { name: "DeepMind", icon: "neurology", tag: "ML Data Pipelines" },
  { name: "Spotify", icon: "music_note", tag: "Streaming Backend" },
  { name: "Wise", icon: "sync_alt", tag: "FX Orchestration" },
  { name: "GitHub", icon: "terminal", tag: "Developer Tools" },
  { name: "Skyline", icon: "cloud", tag: "Edge Runtime" },
  { name: "Pulsegrid", icon: "monitoring", tag: "Observability" },
  { name: "Northgate Security", icon: "security", tag: "Zero Trust & DNS" },
];

const STATS = [
  { value: "63%", label: "of employers say the skills gap is their biggest barrier to business transformation (WEF, Future of Jobs Report 2025)" },
  { value: "~180,000", label: "undergraduates in Sri Lankan state universities at any time" },
  { value: "~45,000", label: "new students enter Sri Lankan state universities each year" },
  { value: "~39%", label: "of the skills required on the job are expected to change by 2030" },
];

export default function LandingPage() {
  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between">
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between">
          <div className="flex items-center gap-space-md">
            <img alt="SkillBridge logo" className="h-8 w-auto object-contain" src={BRAND_LOGO_URL} />
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-bold">SkillBridge</span>
          </div>
          <nav className="hidden lg:flex items-center gap-space-lg">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                aria-current={link.active ? "page" : undefined}
                className={
                  link.active
                    ? "transition-colors text-primary font-semibold"
                    : "font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
                }
                href="#"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-space-md">
            <Link className="hidden sm:inline-flex font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors px-space-sm py-space-xs" to="/login">
              Sign In
            </Link>
            <Link
              className="bg-primary-container text-on-primary font-label-md text-label-md px-space-md py-space-sm rounded-lg hover:bg-primary transition-colors shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]"
              to="/choose-path"
            >
              Get Started Free
            </Link>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[380px] bg-primary-fixed/30 rounded-full blur-[110px] pointer-events-none -z-10" />
            <section className="max-w-7xl mx-auto px-gutter pt-12 pb-20 w-full flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-space-sm px-3.5 py-1.5 rounded-full bg-surface-container-lowest shadow-sm mb-6 transition-transform hover:-translate-y-0.5 duration-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary" />
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                  Launching as a pilot with Sri Lankan universities &amp; industry partners
                </span>
                <span className="material-symbols-outlined text-[15px] text-outline">arrow_forward</span>
              </div>
              <h1 className="font-display-hero text-display-hero md:text-[54px] md:leading-[62px] text-on-background font-bold tracking-tight max-w-4xl mb-6">
                Know your skill gap. <br className="hidden sm:inline" />
                <span className="text-primary-container">Close it with real work.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
                SkillBridge benchmarks your coursework against live industry job requirements, identifies exact missing competencies,
                and pairs you with verified company projects to build job-ready proof.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-space-md mb-16">
                <Link
                  className="inline-flex items-center justify-center bg-primary-container text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-primary transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  to="/choose-path"
                >
                  Get started free
                </Link>
                <a
                  className="inline-flex items-center gap-space-xs text-on-surface font-label-md text-label-md px-5 py-3 rounded-lg bg-surface-container-lowest shadow-sm hover:bg-surface-container-low transition-all duration-200"
                  href="#how-it-works"
                >
                  <span>How it works</span>
                  <span className="material-symbols-outlined text-[16px] text-outline">arrow_forward</span>
                </a>
              </div>
              <div className="w-full max-w-5xl bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden text-left p-6 md:p-8 relative">
                <div className="flex flex-wrap items-center justify-between pb-6 mb-6 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold font-label-md text-label-md">
                      AL
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-headline-sm text-headline-sm text-on-background">Alexandre Lin</span>
                        <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-caption text-caption">
                          BS Computer Science • Year 3
                        </span>
                      </div>
                      <span className="font-caption text-caption text-secondary">Target: Associate Frontend / Fullstack Engineer</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface font-caption text-caption flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-tertiary text-[14px]">sync</span>
                      Coursework Live Synced
                    </span>
                    <div className="h-6 w-px bg-surface-container" />
                    <button className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1">
                      Export Readiness Dossier
                      <span className="material-symbols-outlined text-[14px]">north_east</span>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-4 bg-surface-container-low/60 rounded-xl p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-label-md text-label-md font-semibold text-on-background">Industry Readiness Score</span>
                        <span className="font-caption text-caption text-secondary font-medium">Q2 Cohort</span>
                      </div>
                      <div className="flex flex-col items-center justify-center py-2 relative">
                        <div className="relative w-36 h-36 flex items-center justify-center">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                            <circle className="text-surface-container-highest" cx="60" cy="60" fill="transparent" r="50" stroke="currentColor" strokeWidth="9" />
                            <circle
                              className="text-primary-container"
                              cx="60"
                              cy="60"
                              fill="transparent"
                              r="50"
                              stroke="currentColor"
                              strokeDasharray="314.159"
                              strokeDashoffset="69.11"
                              strokeLinecap="round"
                              strokeWidth="9"
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="font-display-hero text-headline-lg font-bold text-on-background">78%</span>
                            <span className="font-caption text-[11px] text-tertiary font-bold tracking-wider uppercase mt-0.5">+14% THIS MONTH</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 mt-2">
                      <div className="flex items-center justify-between text-caption font-caption mb-1.5">
                        <span className="text-on-surface-variant">Benchmark against junior tech openings</span>
                        <span className="font-semibold text-on-surface">Tier A (Top 20%)</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                        <div className="h-full bg-primary-container rounded-full" style={{ width: "78%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-4 bg-surface-container-low/60 rounded-xl p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-label-md text-label-md font-semibold text-on-background">Identified Competency Gaps</span>
                        <span className="px-2 py-0.5 bg-error-container text-on-error-container font-caption text-caption rounded-full font-semibold">
                          4 Required
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-secondary mb-3.5">
                        Key capabilities requested in 82% of job profiles not covered in academic syllabus:
                      </p>
                      <div className="space-y-2">
                        <div className="p-2.5 rounded-lg bg-surface-container-lowest flex items-center justify-between shadow-sm">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-error">priority_high</span>
                            <span className="font-label-sm text-label-sm text-on-surface font-medium">Distributed State &amp; Redis Cache</span>
                          </div>
                          <span className="font-caption text-caption text-outline font-semibold">Priority 1</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-surface-container-lowest flex items-center justify-between shadow-sm">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-error">priority_high</span>
                            <span className="font-label-sm text-label-sm text-on-surface font-medium">Next.js Server Actions &amp; Streaming</span>
                          </div>
                          <span className="font-caption text-caption text-outline font-semibold">Priority 2</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-surface-container-lowest flex items-center justify-between shadow-sm">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-outline">pending</span>
                            <span className="font-label-sm text-label-sm text-on-surface font-medium">E2E Playwright CI/CD Pipeline</span>
                          </div>
                          <span className="font-caption text-caption text-outline font-semibold">Priority 3</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-3">
                      <span className="font-caption text-caption text-tertiary flex items-center gap-1 font-medium">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span>
                        Data Structures, SQL &amp; React verified by coursework
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-5 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-primary-container rounded-full opacity-40 blur-xl" />
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-0.5 bg-surface-container-lowest/15 text-on-primary font-caption text-caption rounded-full font-semibold uppercase tracking-wider">
                          Recommended Sprint
                        </span>
                        <span className="text-on-primary-container font-caption text-caption font-mono">10h Sprint Brief</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded bg-surface-container-lowest flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-[14px]">account_balance</span>
                        </div>
                        <span className="font-caption text-caption text-on-primary-container font-semibold">Fintech API Partner Sandbox</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-primary mb-2">Multi-tenant Webhook Dispatcher</h3>
                      <p className="font-body-sm text-body-sm text-on-primary-container line-clamp-2 mb-4">
                        Build high-throughput ingestion with idempotent queue processing and telemetry diagnostics.
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest/10 font-caption text-caption text-on-primary">Redis</span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest/10 font-caption text-caption text-on-primary">TypeScript</span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest/10 font-caption text-caption text-on-primary">Docker</span>
                      </div>
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="font-caption text-caption text-on-primary-container">Closes 2 critical gaps</span>
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold hover:bg-surface-container-low transition-colors">
                        Accept Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="w-full py-space-xl bg-surface-container-lowest" id="how-it-works">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="font-caption text-caption uppercase tracking-wider text-primary font-bold mb-2 block">Systematic Skill Acquisition</span>
                <h2 className="font-headline-lg text-headline-lg text-on-background font-bold tracking-tight mb-4">
                  From syllabus to hireable in three transparent steps
                </h2>
                <p className="font-body-lg text-body-lg text-secondary">
                  Traditional degrees teach theory; hiring teams hire for execution. SkillBridge turns the divergence into an accelerated advantage.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                <div className="bg-surface rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[24px]">document_scanner</span>
                      </div>
                      <span className="font-headline-md text-headline-md text-outline-variant font-bold">01</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-background font-semibold mb-3">Analyze your profile</h3>
                    <p className="font-body-md text-body-md text-secondary leading-relaxed mb-6">
                      Securely connect your university transcript, syllabus documents, and existing GitHub or portfolio repositories in
                      less than two minutes.
                    </p>
                  </div>
                  <div>
                    <div className="p-3.5 bg-surface-container-lowest rounded-xl flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary text-[20px]">auto_stories</span>
                      <div className="min-w-0 flex-1">
                        <div className="font-label-sm text-label-sm font-semibold text-on-surface truncate">Curriculum Ingestion Engine</div>
                        <div className="font-caption text-caption text-secondary">Parsed 18 core modules &amp; syllabi</div>
                      </div>
                      <span className="font-caption text-caption text-tertiary font-bold bg-surface-container-low px-2 py-0.5 rounded">Indexed</span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[24px]">radar</span>
                      </div>
                      <span className="font-headline-md text-headline-md text-outline-variant font-bold">02</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-background font-semibold mb-3">See your skill gap</h3>
                    <p className="font-body-md text-body-md text-secondary leading-relaxed mb-6">
                      Live automated benchmark comparisons against 10,000+ real-time junior postings reveal the precise delta between your
                      coursework and current employer stacks.
                    </p>
                  </div>
                  <div>
                    <div className="p-3.5 bg-surface-container-lowest rounded-xl flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary-container text-[20px]">troubleshoot</span>
                      <div className="min-w-0 flex-1">
                        <div className="font-label-sm text-label-sm font-semibold text-on-surface truncate">Market Parity Analysis</div>
                        <div className="font-caption text-caption text-secondary">Identified 3 missing modern frameworks</div>
                      </div>
                      <span className="font-caption text-caption text-primary font-bold bg-primary-fixed/40 px-2 py-0.5 rounded">Calibrated</span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
                        <span className="material-symbols-outlined text-[24px]">rocket_launch</span>
                      </div>
                      <span className="font-headline-md text-headline-md text-outline-variant font-bold">03</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-background font-semibold mb-3">Work on real projects</h3>
                    <p className="font-body-md text-body-md text-secondary leading-relaxed mb-6">
                      Pick targeted, company-curated micro-sprints. Produce real PRs, architecture blueprints, and code artifacts that earn
                      verified endorsement tokens.
                    </p>
                  </div>
                  <div>
                    <div className="p-3.5 bg-surface-container-lowest rounded-xl flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary text-[20px]">verified</span>
                      <div className="min-w-0 flex-1">
                        <div className="font-label-sm text-label-sm font-semibold text-on-surface truncate">Sprint Proof of Mastery</div>
                        <div className="font-caption text-caption text-secondary">Verified by Senior Engineering Mentors</div>
                      </div>
                      <span className="font-caption text-caption text-tertiary font-bold bg-surface-container-low px-2 py-0.5 rounded">Hirable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-20">
            <div className="max-w-7xl mx-auto px-gutter text-center">
              <h3 className="font-headline-md text-headline-md text-on-background font-bold tracking-tight mb-3">
                Partner companies offering real-world project sprints
              </h3>
              <p className="font-body-md text-body-md text-secondary max-w-xl mx-auto mb-12">
                Solve actual backlogged engineering briefs and product challenges reviewed directly by active team leads.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center">
                {COMPANIES.map((company) => (
                  <div
                    key={company.name}
                    className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span className="material-symbols-outlined text-secondary text-[26px]">{company.icon}</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">{company.name}</span>
                    <span className="font-caption text-[11px] text-outline">{company.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="w-full py-space-xl bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="text-center mb-6">
                <span className="font-caption text-caption uppercase tracking-wider text-primary font-bold">The problem we&apos;re built to solve</span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {STATS.map((stat) => (
                  <div key={stat.value} className="bg-surface rounded-xl p-6 text-center">
                    <div className="font-display-hero text-headline-lg lg:text-display-hero font-bold text-primary mb-1">{stat.value}</div>
                    <p className="font-body-sm text-body-sm text-secondary font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface rounded-2xl p-8 lg:p-12">
                <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="w-28 h-28 rounded-2xl bg-primary-fixed flex items-center justify-center shadow-md mb-4">
                    <span className="material-symbols-outlined text-primary text-[48px]">rocket_launch</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm font-bold text-on-background">Pre-launch pilot</h4>
                  <span className="font-body-sm text-body-sm text-primary font-semibold">Faculty of Applied Sciences, Rajarata University of Sri Lanka</span>
                  <span className="font-caption text-caption text-secondary">Built by a university project team, not yet in production</span>
                </div>
                <div className="lg:col-span-7">
                  <span className="font-caption text-caption uppercase tracking-wider text-primary font-bold mb-3 block">How we&apos;ll prove it works</span>
                  <blockquote className="font-headline-md text-headline-md font-medium text-on-background leading-snug mb-6">
                    SkillBridge hasn&apos;t launched yet — so instead of a success story, here&apos;s our validation plan for Phase 1.
                  </blockquote>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-caption text-caption font-medium shadow-sm">
                      Pilot with students from one faculty
                    </span>
                    <span className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-caption text-caption font-medium shadow-sm">
                      Measure skill-match score before and after
                    </span>
                    <span className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-caption text-caption font-medium shadow-sm">
                      Company ratings of project work
                    </span>
                    <span className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-caption text-caption font-medium shadow-sm">
                      Track internships and job offers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-gutter py-12 w-full">
            <div className="bg-on-background text-inverse-on-surface rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-80 h-80 bg-primary-container rounded-full opacity-20 blur-3xl pointer-events-none" />
              <div className="max-w-2xl relative z-10">
                <span className="font-caption text-caption uppercase tracking-wider text-primary-fixed-dim font-bold mb-2 block">Take the next leap</span>
                <h2 className="font-headline-lg text-headline-lg font-bold text-inverse-on-surface tracking-tight mb-3">
                  Ready to bridge the gap between academic theory and industry reality?
                </h2>
                <p className="font-body-md text-body-md text-surface-variant leading-relaxed">
                  Be among the first students to calibrate your capabilities and build verified portfolio evidence as we launch our pilot.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto relative z-10 shrink-0">
                <Link
                  className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all duration-200 shadow-sm"
                  to="/choose-path"
                >
                  Start for free
                </Link>
                <a
                  className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-surface-container-highest/20 text-inverse-on-surface font-label-md text-label-md hover:bg-surface-container-highest/30 transition-all duration-200"
                  href="#"
                >
                  Book University Demo
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="w-full bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] mt-space-xl pt-space-xl pb-space-lg">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="mb-space-xl pb-space-lg border-b border-surface-container-high">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              <span className="font-caption text-caption uppercase tracking-wider text-outline font-semibold">Trusted by leading academic partner institutions</span>
              <div className="flex flex-wrap items-center gap-space-lg text-secondary opacity-75">
                <span className="font-headline-sm text-headline-sm tracking-tighter">Ashworth Edu</span>
                <span className="font-headline-sm text-headline-sm tracking-tighter">Meridian Institute Labs</span>
                <span className="font-headline-sm text-headline-sm tracking-tighter">Fairmont Alliance</span>
                <span className="font-headline-sm text-headline-sm tracking-tighter">Hawthorn Core</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-space-lg mb-space-xl">
            <div className="col-span-2">
              <div className="flex items-center gap-space-sm mb-space-md">
                <span className="font-headline-md text-headline-md text-primary tracking-tight">SkillBridge</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-space-md">
                Empowering university talent through accelerated skill calibration, real-world industry project integration, and
                autonomous career matchmaking.
              </p>
              <div className="flex items-center gap-space-sm">
                <a aria-label="Global Network" className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">public</span>
                </a>
                <a aria-label="Community Hub" className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">forum</span>
                </a>
                <a aria-label="Open Repository" className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">code</span>
                </a>
                <a aria-label="Broadcast Updates" className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">podcasts</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface font-semibold mb-space-md">Product</h4>
              <ul className="space-y-space-sm">
                <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"><a href="#">Curriculum Sync</a></li>
                <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"><a href="#">Readiness Score</a></li>
                <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"><a href="#">Skill Graph Engine</a></li>
                <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"><a href="#">Enterprise Sandboxes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface font-semibold mb-space-md">Solutions</h4>
              <ul className="space-y-space-sm">
                <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"><a href="#">For Universities</a></li>
                <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"><a href="#">Partner Companies</a></li>
                <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"><a href="#">Graduating Seniors</a></li>
                <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"><a href="#">Career Acceleration</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface font-semibold mb-space-md">Resources</h4>
              <ul className="space-y-space-sm">
                <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"><a href="#">Case Studies</a></li>
                <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"><a href="#">Industry Reports</a></li>
                <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"><a href="#">Documentation</a></li>
                <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"><a href="#">Roadmap FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface font-semibold mb-space-md">Company</h4>
              <ul className="space-y-space-sm">
                <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"><a href="#">About Us</a></li>
                <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"><a href="#">Careers</a></li>
                <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"><a href="#">Privacy Policy</a></li>
                <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-space-md border-t border-surface-container flex flex-col md:flex-row items-center justify-between gap-space-sm">
            <span className="font-caption text-caption text-secondary">© 2025 SkillBridge Inc. All rights reserved. Intellectual bridge to industry excellence.</span>
            <div className="flex items-center gap-space-md">
              <a className="font-caption text-caption text-secondary hover:text-on-surface transition-colors" href="#">Privacy Policy</a>
              <a className="font-caption text-caption text-secondary hover:text-on-surface transition-colors" href="#">Terms of Service</a>
              <a className="font-caption text-caption text-secondary hover:text-on-surface transition-colors" href="#">Security Standards</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
