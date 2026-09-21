import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

export default function ChoosePathPage() {
  return (
    <AuthLayout>
      <main className="flex-1 flex flex-col items-center justify-center w-full px-gutter-sm lg:px-margin py-space-lg">
        <div className="flex flex-col w-full items-center justify-center py-space-md">
          <div className="w-full max-w-5xl flex items-center justify-between mb-space-xl">
            <Link className="inline-flex items-center gap-space-xs text-on-surface-variant hover:text-primary font-label-md text-label-md transition-colors group" to="/">
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-x-1">arrow_back</span>
              <span>Back to landing page</span>
            </Link>
            <div className="flex items-center gap-space-xs">
              <span className="font-body-sm text-body-sm text-on-surface-variant">Already have an account?</span>
              <Link className="font-label-md text-label-md text-primary font-semibold hover:underline" to="/login">Log in</Link>
            </div>
          </div>

          <div className="w-full max-w-2xl text-center mb-space-xl">
            <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-secondary-container/60 mb-space-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-sm text-label-sm text-on-secondary-container uppercase tracking-wider">Step 1 of 2 · Path Selection</span>
            </div>
            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight mb-space-xs">How do you want to use SkillBridge?</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Select your path to get started. You can easily collaborate across teams or switch modalities later.
            </p>
          </div>

          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-gutter items-stretch mb-space-xl">
            <div className="group relative flex flex-col justify-between bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-primary-fixed/40 rounded-full blur-3xl pointer-events-none group-hover:bg-primary-fixed-dim/50 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">school</span>
                  </div>
                  <span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-primary-fixed/60 text-on-primary-fixed-variant tracking-wider uppercase">
                    STUDENT / JOB SEEKER
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-space-xs">I&apos;m a Student</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md min-h-[44px]">
                  Find your skill gaps, complete verified benchmark courses, and build real-world project portfolios.
                </p>
                <div className="bg-surface-container-low rounded-lg p-space-sm mb-space-lg flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[20px]">analytics</span>
                    <span className="font-label-sm text-label-sm text-on-surface font-medium">Market Readiness Engine</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-5 rounded-full bg-primary" />
                    <span className="h-2 w-5 rounded-full bg-primary" />
                    <span className="h-2 w-5 rounded-full bg-primary-fixed-dim" />
                    <span className="font-caption text-caption font-semibold text-primary ml-1">Live Beta</span>
                  </div>
                </div>
                <ul className="space-y-space-sm mb-space-xl">
                  <li className="flex items-start gap-space-sm">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[14px] text-tertiary font-bold">check</span>
                    </div>
                    <span className="font-body-md text-body-md text-on-surface">Skill gap analysis calibrated against UK &amp; European hiring standards</span>
                  </li>
                  <li className="flex items-start gap-space-sm">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[14px] text-tertiary font-bold">check</span>
                    </div>
                    <span className="font-body-md text-body-md text-on-surface">Curated target tracks from leading institutions &amp; industry partners</span>
                  </li>
                  <li className="flex items-start gap-space-sm">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[14px] text-tertiary font-bold">check</span>
                    </div>
                    <span className="font-body-md text-body-md text-on-surface">Authentic sprint briefs unlocking direct technical interview exemptions</span>
                  </li>
                </ul>
              </div>
              <div className="relative z-10 mt-auto pt-space-md">
                <Link className="w-full py-3 px-space-md bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md rounded-lg shadow-sm flex items-center justify-center gap-space-xs transition-all duration-200 group-hover:shadow-md" to="/signup">
                  <span>Continue as Student</span>
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
                <p className="font-caption text-caption text-outline text-center mt-space-sm">
                  By continuing you agree to the <a className="underline hover:text-on-surface" href="#">Student Terms of Service</a>
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none group-hover:bg-tertiary-fixed-dim/40 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">corporate_fare</span>
                  </div>
                  <span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed-variant tracking-wider uppercase font-semibold">
                    EMPLOYER / PARTNER
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-space-xs">I&apos;m a Company</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md min-h-[44px]">
                  Publish real engineering briefs, mentor emerging practitioners, and recruit pre-verified talent.
                </p>
                <div className="bg-surface-container-low rounded-lg p-space-sm mb-space-lg flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">verified</span>
                    <span className="font-label-sm text-label-sm text-on-surface font-medium">Verified Talent Network</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-caption text-caption font-semibold text-tertiary">94.8% Match Accuracy</span>
                  </div>
                </div>
                <ul className="space-y-space-sm mb-space-xl">
                  <li className="flex items-start gap-space-sm">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[14px] text-on-secondary-fixed font-bold">check</span>
                    </div>
                    <span className="font-body-md text-body-md text-on-surface">Deploy production-grade micro-sprints and scoped architectural tickets</span>
                  </li>
                  <li className="flex items-start gap-space-sm">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[14px] text-on-secondary-fixed font-bold">check</span>
                    </div>
                    <span className="font-body-md text-body-md text-on-surface">Screen candidate submissions validated through automated testing suites</span>
                  </li>
                  <li className="flex items-start gap-space-sm">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[14px] text-on-secondary-fixed font-bold">check</span>
                    </div>
                    <span className="font-body-md text-body-md text-on-surface">Accelerate tech talent acquisition and bypass generic resume screening</span>
                  </li>
                </ul>
              </div>
              <div className="relative z-10 mt-auto pt-space-md">
                <Link className="w-full py-3 px-space-md bg-inverse-surface hover:bg-black text-inverse-on-surface font-label-md text-label-md rounded-lg shadow-sm flex items-center justify-center gap-space-xs transition-all duration-200 group-hover:shadow-md" to="/company-signup">
                  <span>Continue as Company</span>
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
                <p className="font-caption text-caption text-outline text-center mt-space-sm">
                  By continuing you agree to the <a className="underline hover:text-on-surface" href="#">Company Agreement</a>
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none group-hover:bg-primary-fixed-dim/40 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">account_balance</span>
                  </div>
                  <span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-tertiary-fixed/60 text-on-tertiary-fixed-variant tracking-wider uppercase">
                    INSTITUTE / EDUCATOR
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-space-xs">I&apos;m an Institute</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md min-h-[44px]">
                  Publish accredited courses, reach motivated students, and track enrollment across your programs.
                </p>
                <div className="bg-surface-container-low rounded-lg p-space-sm mb-space-lg flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">school</span>
                    <span className="font-label-sm text-label-sm text-on-surface font-medium">Course Publishing Suite</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-caption text-caption font-semibold text-tertiary">New</span>
                  </div>
                </div>
                <ul className="space-y-space-sm mb-space-xl">
                  <li className="flex items-start gap-space-sm">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[14px] text-tertiary font-bold">check</span>
                    </div>
                    <span className="font-body-md text-body-md text-on-surface">Publish courses with skills covered, level, and format details</span>
                  </li>
                  <li className="flex items-start gap-space-sm">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[14px] text-tertiary font-bold">check</span>
                    </div>
                    <span className="font-body-md text-body-md text-on-surface">Appear in the student-facing institute directory &amp; course marketplace</span>
                  </li>
                  <li className="flex items-start gap-space-sm">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[14px] text-tertiary font-bold">check</span>
                    </div>
                    <span className="font-body-md text-body-md text-on-surface">Track enrollments and engagement across every course you offer</span>
                  </li>
                </ul>
              </div>
              <div className="relative z-10 mt-auto pt-space-md">
                <Link className="w-full py-3 px-space-md bg-tertiary-container hover:bg-tertiary text-on-tertiary font-label-md text-label-md rounded-lg shadow-sm flex items-center justify-center gap-space-xs transition-all duration-200 group-hover:shadow-md" to="/institute-signup">
                  <span>Continue as Institute</span>
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
                <p className="font-caption text-caption text-outline text-center mt-space-sm">
                  By continuing you agree to the <a className="underline hover:text-on-surface" href="#">Institute Partnership Terms</a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-4xl pt-space-md border-none flex flex-col items-center justify-center text-center">
            <p className="font-caption text-caption text-outline uppercase tracking-widest mb-space-sm">
              Trusted across premier academia &amp; European engineering hubs
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-space-lg gap-y-space-xs opacity-70">
              <div className="flex items-center gap-1.5 font-headline-sm text-on-surface-variant/80 tracking-tight">
                <span className="material-symbols-outlined text-[20px] text-primary">account_balance</span>
                <span className="font-bold">Ashcombe University</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-surface-container-highest" />
              <div className="flex items-center gap-1.5 font-headline-sm text-on-surface-variant/80 tracking-tight">
                <span className="material-symbols-outlined text-[20px] text-tertiary">payments</span>
                <span className="font-bold">Nimbus Pay</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-surface-container-highest" />
              <div className="flex items-center gap-1.5 font-headline-sm text-on-surface-variant/80 tracking-tight">
                <span className="material-symbols-outlined text-[20px] text-primary-container">sync_alt</span>
                <span className="font-bold">Wise</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-surface-container-highest" />
              <div className="flex items-center gap-1.5 font-headline-sm text-on-surface-variant/80 tracking-tight">
                <span className="material-symbols-outlined text-[20px] text-on-surface">bolt</span>
                <span className="font-bold">Ledgerly</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AuthLayout>
  );
}
