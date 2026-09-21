import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <AuthLayout>
      <main className="flex-1 flex flex-col items-center justify-center w-full px-gutter-sm lg:px-margin py-space-lg">
        <div className="flex flex-col w-full items-center justify-center relative">
          <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden pointer-events-none">
            <div className="w-[580px] h-[580px] rounded-full bg-primary-fixed/25 blur-3xl opacity-70 -translate-y-12" />
            <div className="w-[420px] h-[420px] rounded-full bg-tertiary-fixed/30 blur-2xl opacity-60 translate-x-44 translate-y-20" />
          </div>
          <div className="w-full max-w-[460px] mx-auto">
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-8 sm:p-10 transition-all duration-300">
              <div className="flex flex-col items-center text-center mb-space-lg">
                <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center mb-space-md shadow-sm">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path className="text-primary-container" d="M7 23C7 16.9249 11.9249 12 18 12C20.6698 12 23.1114 12.9515 25.011 14.5457" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                    <path className="text-tertiary-fixed-dim" d="M25 23C25 18.0294 20.9706 14 16 14C13.2505 14 10.7933 15.234 9.15576 17.1818" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                    <circle className="text-primary-container" cx="7" cy="23" fill="currentColor" r="2.5" />
                    <circle className="text-tertiary-fixed-dim" cx="25" cy="23" fill="currentColor" r="2.5" />
                  </svg>
                </div>
                <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Welcome back</h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1.5 max-w-xs leading-snug">
                  Log in to track your skill gaps and continue real-world project sprints.
                </p>
              </div>
              <form className="space-y-space-md" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="block font-label-md text-label-md text-on-surface" htmlFor="email">
                    University or Work Email
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-outline text-[20px] pointer-events-none select-none">
                      alternate_email
                    </span>
                    <input
                      autoComplete="email"
                      className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg py-2.5 pl-10 pr-4 placeholder:text-outline outline-none transition-all duration-200 focus:bg-surface-container-lowest focus:shadow-sm"
                      id="email"
                      name="email"
                      placeholder="e.g. maya.lin@ashcombe.ac.uk"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="font-label-md text-label-md text-on-surface" htmlFor="password">
                      Password
                    </label>
                    <a className="font-label-sm text-label-sm text-primary hover:underline transition-colors" href="#">
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-outline text-[20px] pointer-events-none select-none">
                      lock_outline
                    </span>
                    <input
                      className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg py-2.5 pl-10 pr-10 placeholder:text-outline outline-none transition-all duration-200 focus:bg-surface-container-lowest focus:shadow-sm"
                      id="password"
                      name="password"
                      placeholder="••••••••••••"
                      type={showPassword ? "text" : "password"}
                    />
                    <button
                      aria-label="Toggle password visibility"
                      className="absolute right-3 text-outline hover:text-on-surface-variant flex items-center justify-center p-1 rounded transition-colors"
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                    >
                      <span className="material-symbols-outlined text-[20px]">{showPassword ? "visibility" : "visibility_off"}</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2.5 cursor-pointer select-none group">
                    <input
                      className="sr-only peer"
                      id="remember"
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                    />
                    <div className="w-4 h-4 rounded bg-surface-container-low flex items-center justify-center peer-checked:bg-primary-container transition-all">
                      <span className="material-symbols-outlined text-on-primary text-[14px] opacity-0 peer-checked:opacity-100 transition-opacity">
                        check
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                      Remember me for 30 days
                    </span>
                  </label>
                </div>
                <div className="pt-1">
                  <button
                    className="w-full bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all duration-200 active:scale-[0.99]"
                    type="button"
                    onClick={() => navigate("/dashboard")}
                  >
                    <span>Log in</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </form>
              <div className="relative my-space-lg flex items-center justify-center">
                <div className="w-full h-px bg-surface-container-high" />
                <span className="absolute bg-surface-container-lowest px-3 font-caption text-caption text-outline">or continue with</span>
              </div>
              <div className="space-y-2.5">
                <button className="w-full bg-surface-container-lowest hover:bg-surface-container-low text-on-surface font-label-md text-label-md py-2.5 px-4 rounded-lg flex items-center justify-center gap-3 transition-colors shadow-sm duration-200" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" fill="#4285F4" />
                    <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z" fill="#34A853" />
                    <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.97 0 12c0 2.03.45 3.84 1.25 5.42l4.03-3.15z" fill="#FBBC05" />
                    <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335" />
                  </svg>
                  <span>Continue with Google</span>
                </button>
                <button className="w-full bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200" type="button">
                  <span className="material-symbols-outlined text-[18px] text-secondary">account_balance</span>
                  <span>Single Sign-On (University ID)</span>
                </button>
              </div>
              <div className="mt-space-lg text-center pt-2">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Don&apos;t have an account?
                  <Link className="font-label-md text-label-md text-primary font-semibold hover:underline ml-1" to="/choose-path">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
            <div className="mt-space-md flex flex-col items-center justify-center gap-2 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-caption text-caption shadow-sm">
                <span className="material-symbols-outlined text-[15px] text-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified_user
                </span>
                <span>256-bit encrypted • Partnered with 85+ accredited universities</span>
              </div>
              <p className="font-caption text-caption text-outline">© 2025 SkillBridge Academic Network</p>
            </div>
          </div>
        </div>
      </main>
    </AuthLayout>
  );
}
