import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

const BRAND_LOGO_URL =
  "https://lh3.googleusercontent.com/aida/AEtjO1V5rM_dtcWnlE8HaAN7eXi0PejiuC50-cFY30ckgoRdke4DrEzb3gqcqcDA9w7-ZYqajI6T2fN3Dcj0AVBsUSOBs62FyBgRlR3IpGeJHrSbgepRk1NhTR-EGkQ9f1h9yJEWrPn1K0uqIU1lAwE3sAgJzzIbA2-_W2QT_WcGNyl5TSBQ2klCwJIwky8LHtS-Ho4i1Bj04lYWNGtc45Rwm7kwZy6rday0VEUe13n9--5vZ3v-F6S52ceIgsZ8";

const SHOWCASE_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida/AEtjO1XIu6G2myAXraZ59UEZ3Oeu66f6ePxPS43s-EHwzj-kl6kvIo9XRIinFFBKMAynMNyx0ybGDzzXOp8T9dlRc7RdQWMetcvdSGXw3D7-b_nDwMDwA92iikWnRgJ2CWBUIkR8qhchhoN_eSivfaFv6tOXKWsXXqNYhf0NSrjfe-3Xn7qzcSxT0emjGL_mIx9i3EfIgjxvP6mYz7oQAj6P59xjZGxh10zLGvoVngn0ayfs5vxzaK3wLvMXaIUY";

export default function InstituteSignupPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout>
      <main className="flex-1 flex flex-col items-center justify-center w-full px-gutter-sm lg:px-margin py-space-lg">
        <div className="flex flex-col w-full max-w-7xl mx-auto my-auto items-center justify-center py-space-md">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-stretch bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden min-h-[720px]">
            <div className="lg:col-span-6 flex flex-col justify-between p-space-lg sm:p-space-xl">
              <div className="flex flex-col">
                <div className="mb-space-lg">
                  <img alt="SkillBridge Logo" className="h-9 w-auto object-contain" src={BRAND_LOGO_URL} />
                </div>
                <div className="flex flex-col gap-space-xs mb-space-lg">
                  <div className="inline-flex items-center justify-between self-start gap-2 px-3 py-1 mb-1 rounded-full bg-tertiary-fixed/40 border border-outline-variant/30 text-body-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-tertiary" />
                      <span className="font-label-sm text-on-surface-variant">
                        Signing up as an <strong className="text-on-surface font-semibold">Institute</strong>
                      </span>
                    </div>
                    <span className="text-outline-variant text-[11px]">•</span>
                    <Link to="/choose-path" className="font-label-sm text-primary hover:underline hover:text-primary-container transition-colors">
                      Switch
                    </Link>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Create your institute account</h1>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Publish accredited courses, reach motivated students, and track enrollment across every program you run.
                  </p>
                </div>
                <form className="flex flex-col gap-space-md" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="institute_name">Institute Name</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary text-[20px] pointer-events-none">account_balance</span>
                      <input
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface text-on-surface font-body-md text-body-md placeholder-secondary focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container/25 transition-all shadow-sm"
                        id="institute_name"
                        placeholder="e.g. Riverside Institute of Technology"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="email">Work Email</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary text-[20px] pointer-events-none">mail</span>
                      <input
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface text-on-surface font-body-md text-body-md placeholder-secondary focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container/25 transition-all shadow-sm"
                        id="email"
                        placeholder="e.g. admissions@riversidetech.ac"
                        required
                        type="email"
                      />
                    </div>
                    <p className="font-caption text-caption text-secondary flex items-center gap-1 mt-0.5">
                      <span className="material-symbols-outlined text-[14px] text-tertiary">verified</span>
                      Use your institutional domain for instant partner verification
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="institute_type">Institute Type</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary text-[20px] pointer-events-none">category</span>
                        <select
                          className="w-full pl-10 pr-9 py-2.5 rounded-lg bg-surface text-on-surface font-body-md text-body-md appearance-none focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container/25 transition-all shadow-sm cursor-pointer"
                          id="institute_type"
                          required
                          defaultValue=""
                        >
                          <option value="">Select type</option>
                          <option>University</option>
                          <option>Training Center</option>
                          <option>Bootcamp</option>
                          <option>Professional Body</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary text-[18px] pointer-events-none">expand_more</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="accreditation_no">
                        Accreditation / Registration No. <span className="font-normal text-secondary">(optional)</span>
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary text-[20px] pointer-events-none">badge</span>
                        <input
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface text-on-surface font-body-md text-body-md placeholder-secondary focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container/25 transition-all shadow-sm"
                          id="accreditation_no"
                          placeholder="e.g. UKPRN 10012345"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="password">Password</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary text-[20px] pointer-events-none">lock</span>
                      <input
                        className="w-full pl-10 pr-11 py-2.5 rounded-lg bg-surface text-on-surface font-body-md text-body-md placeholder-secondary focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container/25 transition-all shadow-sm"
                        id="password"
                        placeholder="At least 8 characters"
                        required
                        type={showPassword ? "text" : "password"}
                      />
                      <button
                        aria-label="Toggle password visibility"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-on-surface transition-colors p-1"
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                      >
                        <span className="material-symbols-outlined text-[20px]">{showPassword ? "visibility_off" : "visibility"}</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 mt-1">
                    <div className="flex items-center h-5">
                      <input className="w-4 h-4 rounded text-primary-container bg-surface focus:ring-primary-container/20 cursor-pointer accent-primary-container" id="terms" required type="checkbox" />
                    </div>
                    <label className="font-caption text-caption text-on-surface-variant select-none" htmlFor="terms">
                      I agree to SkillBridge <a className="text-primary hover:underline" href="#">Institute Partnership Terms</a> &amp; <a className="text-primary hover:underline" href="#">Privacy Policy</a>
                    </label>
                  </div>
                  <button
                    className="w-full mt-2 py-3 px-space-lg rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                    type="button"
                    onClick={() => navigate("/institute-profile-setup")}
                  >
                    <span>Sign up</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                  </button>
                </form>
                <div className="relative my-space-md flex items-center justify-center">
                  <div className="w-full h-px bg-surface-container-high" />
                  <span className="absolute bg-surface-container-lowest px-3 font-caption text-caption text-secondary uppercase tracking-wider">or continue with</span>
                </div>
                <button className="w-full py-2.5 px-4 rounded-lg bg-surface-container-lowest hover:bg-surface-container-low text-on-surface font-label-md text-label-md transition-colors flex items-center justify-center gap-3 shadow-sm" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                  </svg>
                  <span>Continue with Google</span>
                </button>
                <p className="text-center font-body-sm text-body-sm text-on-surface-variant mt-space-md">
                  Already have an account?
                  <Link className="font-label-md text-label-md text-primary hover:underline ml-1" to="/login">Log in</Link>
                </p>
              </div>
              <div className="mt-space-lg pt-space-sm flex items-center justify-center text-center">
                <span className="font-caption text-caption text-secondary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">lock</span>
                  256-bit encrypted • SOC2 Type II certified partner network
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 relative bg-gradient-to-br from-tertiary-fixed/40 via-surface-container-low to-surface-container flex flex-col justify-between p-space-lg sm:p-space-xl overflow-hidden">
              <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-tertiary-fixed blur-3xl opacity-40 pointer-events-none" />
              <div className="absolute -bottom-20 -left-12 w-80 h-80 rounded-full bg-primary-fixed blur-3xl opacity-30 pointer-events-none" />
              <div className="relative z-10 flex items-center justify-between gap-2 flex-wrap">
                <div className="inline-flex items-center gap-2 bg-surface-container-lowest/80 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm">
                  <div className="flex -space-x-1.5 items-center">
                    <span className="w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center font-caption text-[9px] font-bold">UC</span>
                    <span className="w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-caption text-[9px] font-bold">VA</span>
                    <span className="w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-caption text-[9px] font-bold">SO</span>
                  </div>
                  <span className="font-caption text-caption text-on-surface font-medium">Joined by 30+ accredited institutions</span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-tertiary-container/15 text-tertiary px-3 py-1 rounded-full font-caption text-caption font-semibold">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                  Publishing Now
                </div>
              </div>
              <div className="relative my-space-md flex flex-col items-center justify-center z-10">
                <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-xl aspect-square bg-surface-container-lowest/30 backdrop-blur-xs flex items-center justify-center group">
                  <img
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out"
                    alt="Abstract 3D geometric architectural steps and floating glass cards symbolizing accelerated career progression from university to industry."
                    src={SHOWCASE_IMAGE_URL}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
                <div className="absolute -top-4 -left-2 sm:-left-6 bg-surface-container-lowest/90 backdrop-blur-md p-space-sm rounded-lg shadow-lg flex items-center gap-3 max-w-[210px]">
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed/40 flex items-center justify-center text-tertiary shrink-0">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <div className="min-w-0">
                    <div className="font-label-sm text-label-sm text-on-surface truncate font-semibold">Course Visibility Boost</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="font-caption text-caption font-bold text-tertiary">3.1× Reach</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                      <span className="font-caption text-[10px] text-secondary">Student Marketplace</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-2 sm:-right-6 bg-surface-container-lowest/90 backdrop-blur-md p-space-sm rounded-lg shadow-lg flex flex-col gap-1.5 max-w-[220px]">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">Featured Institutes</span>
                    <span className="font-caption text-[11px] text-primary font-medium">Live</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-surface text-secondary font-label-sm text-[11px] font-semibold">Ashcombe University</span>
                    <span className="px-2 py-0.5 rounded bg-surface text-secondary font-label-sm text-[11px] font-semibold">Skyline Academy</span>
                    <span className="px-2 py-0.5 rounded bg-surface text-secondary font-label-sm text-[11px] font-semibold">Ashworth Online</span>
                  </div>
                </div>
              </div>
              <div className="relative z-10 bg-surface-container-lowest/80 backdrop-blur-md p-space-md rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[28px] shrink-0 opacity-80">format_quote</span>
                  <div className="flex flex-col">
                    <p className="font-body-sm text-body-sm text-on-surface italic">
                      &ldquo;Listing our accredited modules on SkillBridge put us in front of exactly the students who needed them, with enrollment tracking built right in.&rdquo;
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold">Dr. Priya Anand</span>
                      <span className="font-caption text-caption text-secondary">Head of Partnerships @ Riverside Institute</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AuthLayout>
  );
}
