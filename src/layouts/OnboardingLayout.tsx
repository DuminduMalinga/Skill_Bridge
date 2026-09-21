import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const BRAND_LOGO_URL =
  "https://lh3.googleusercontent.com/aida/AEtjO1V5rM_dtcWnlE8HaAN7eXi0PejiuC50-cFY30ckgoRdke4DrEzb3gqcqcDA9w7-ZYqajI6T2fN3Dcj0AVBsUSOBs62FyBgRlR3IpGeJHrSbgepRk1NhTR-EGkQ9f1h9yJEWrPn1K0uqIU1lAwE3sAgJzzIbA2-_W2QT_WcGNyl5TSBQ2klCwJIwky8LHtS-Ho4i1Bj04lYWNGtc45Rwm7kwZy6rday0VEUe13n9--5vZ3v-F6S52ceIgsZ8";

const NAV_LABELS = ["Overview", "Academics", "Career Target", "Assessment"] as const;

interface OnboardingLayoutProps {
  /** Index (0-3) into NAV_LABELS to highlight, matching the original per-step design; -1 for none. */
  activeNavIndex?: number;
  children: ReactNode;
}

export default function OnboardingLayout({ activeNavIndex = -1, children }: OnboardingLayoutProps) {
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between">
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-7xl mx-auto px-space-md sm:px-space-lg lg:px-margin flex items-center justify-between">
          <Link to="/" className="flex items-center gap-space-sm">
            <img alt="SkillBridge logo" className="h-8 w-auto object-contain" src={BRAND_LOGO_URL} />
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">SkillBridge</span>
          </Link>
          <nav className="flex items-center gap-space-md sm:gap-space-lg">
            {NAV_LABELS.map((label, i) => (
              <a
                key={label}
                href="#"
                aria-current={i === activeNavIndex ? "page" : undefined}
                className={
                  i === activeNavIndex
                    ? "transition-colors text-primary font-medium"
                    : "text-on-surface-variant font-label-md text-label-md hover:text-on-surface transition-colors"
                }
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-space-md">
            <Link
              to="/dashboard"
              className="text-on-surface-variant font-label-md text-label-md hover:text-on-surface transition-colors py-space-xs px-space-sm rounded-lg hover:bg-surface-container-high"
            >
              Save &amp; exit
            </Link>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-16 bg-background flex-1 flex flex-col items-center justify-center py-space-xl px-space-md">
        <div className="w-full max-w-[760px] bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_0_rgba(0,0,0,0.04),0_1px_2px_-1px_rgba(0,0,0,0.02)] p-space-md sm:p-space-lg md:p-space-xl my-auto">
          <div className="flex flex-col w-full">{children}</div>
        </div>
      </main>
      <footer className="w-full py-space-lg">
        <div className="max-w-7xl mx-auto px-space-md sm:px-space-lg lg:px-margin flex flex-col sm:flex-row items-center justify-center gap-space-xs sm:gap-space-sm text-center font-caption text-caption text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[15px] text-tertiary">verified</span>
            Endorsed university skill alignment model
          </span>
          <span className="hidden sm:inline">•</span>
          <span>FERPA &amp; Academic Data Privacy Compliant © 2025 SkillBridge</span>
        </div>
      </footer>
    </div>
  );
}
