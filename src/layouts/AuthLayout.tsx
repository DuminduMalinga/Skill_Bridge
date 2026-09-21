import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const BRAND_LOGO_URL =
  "https://lh3.googleusercontent.com/aida/AEtjO1V5rM_dtcWnlE8HaAN7eXi0PejiuC50-cFY30ckgoRdke4DrEzb3gqcqcDA9w7-ZYqajI6T2fN3Dcj0AVBsUSOBs62FyBgRlR3IpGeJHrSbgepRk1NhTR-EGkQ9f1h9yJEWrPn1K0uqIU1lAwE3sAgJzzIbA2-_W2QT_WcGNyl5TSBQ2klCwJIwky8LHtS-Ho4i1Bj04lYWNGtc45Rwm7kwZy6rday0VEUe13n9--5vZ3v-F6S52ceIgsZ8";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface min-h-screen flex flex-col justify-between">
      <header className="w-full py-space-md px-gutter-sm lg:px-margin flex items-center justify-between">
        <Link to="/" className="flex items-center gap-space-sm">
          <img alt="SkillBridge logo" className="h-8 w-auto object-contain" src={BRAND_LOGO_URL} />
          <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">SkillBridge</span>
        </Link>
        <a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">
          Need help?
        </a>
      </header>
      {children}
      <footer className="w-full py-space-md px-gutter-sm lg:px-margin text-center">
        <p className="font-caption text-caption text-outline">© 2024 SkillBridge. Structured paths from campus to career.</p>
      </footer>
    </div>
  );
}
