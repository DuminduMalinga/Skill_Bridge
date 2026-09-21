import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import type { SidebarNavItem } from "../types/nav";

const BRAND_LOGO_URL =
  "https://lh3.googleusercontent.com/aida/AEtjO1V5rM_dtcWnlE8HaAN7eXi0PejiuC50-cFY30ckgoRdke4DrEzb3gqcqcDA9w7-ZYqajI6T2fN3Dcj0AVBsUSOBs62FyBgRlR3IpGeJHrSbgepRk1NhTR-EGkQ9f1h9yJEWrPn1K0uqIU1lAwE3sAgJzzIbA2-_W2QT_WcGNyl5TSBQ2klCwJIwky8LHtS-Ho4i1Bj04lYWNGtc45Rwm7kwZy6rday0VEUe13n9--5vZ3v-F6S52ceIgsZ8";

const PROFILE_AVATAR_URL =
  "https://lh3.googleusercontent.com/aida/AEtjO1X4U_DaYnl2TTfmwLoWpCsD3lhiWKuRWG_Qwl4-z0xrgNCTB8mqISZNCawnkUfhGBlNOsMhLKcr58OrfqzTk7w41HMtgJbUg28gZ88pGtezLtFRnfDIFFKMNZpFw-zEuWIeTcFHNh-K7cW_gFqUDjc0_zrRYw2qp652jp8JizfcqnSRwONE9mmliVb61CWUYGGKFP45Fvsb9Ip9YJE21bftNMoxNHSpSanlIJzUc_hwX57tlRWgOHHb5074";

const NAV_ITEMS: SidebarNavItem[] = [
  { label: "Dashboard", to: "/dashboard", icon: "dashboard" },
  { label: "Skill Gap", to: "/skill-gap", icon: "radar" },
  { label: "Courses", to: "/courses", icon: "menu_book" },
  { label: "Projects", to: "/projects", icon: "terminal" },
  { label: "Profile", to: "/profile", icon: "account_circle" },
  { label: "Settings", to: "/settings", icon: "settings" },
];

interface DashboardLayoutProps {
  userName?: string;
  degreeLabel?: string;
  degreeProgressPct?: number;
  children: ReactNode;
}

export default function DashboardLayout({
  userName = "Maya Lin",
  degreeLabel = "Year 3 CS",
  degreeProgressPct = 72,
  children,
}: DashboardLayoutProps) {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col">
          <div className="h-16 px-space-lg flex items-center gap-space-sm">
            <img alt="SkillBridge logo" className="h-8 w-auto object-contain" src={BRAND_LOGO_URL} />
            <span className="font-headline-sm text-headline-sm text-on-surface">SkillBridge</span>
          </div>
          <nav className="flex flex-col gap-space-xs px-space-md mt-space-sm">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-space-sm px-space-md py-2.5 rounded-xl transition-colors font-label-md text-label-md ${
                    isActive
                      ? "bg-primary-container text-on-primary shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]"
                      : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
                  }`
                }
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="p-space-md m-space-md rounded-xl bg-surface-container-low shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between mb-space-xs">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Degree Progress</span>
            <span className="font-label-sm text-label-sm text-primary font-semibold">{degreeLabel}</span>
          </div>
          <div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
            <div className="bg-primary-container h-full rounded-full" style={{ width: `${degreeProgressPct}%` }} />
          </div>
          <p className="mt-space-xs font-caption text-caption text-on-surface-variant">Ready for Industry Assessment</p>
        </div>
      </aside>
      <div className="pl-64">
        <header className="fixed top-0 left-64 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-lg flex items-center justify-between">
          <div className="flex items-center w-96 max-w-md">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">search</span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container/20 transition-all"
                placeholder="Search courses, skills, real-world projects..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <Link to="/notifications" className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error ring-2 ring-surface" />
            </Link>
            <Link to="/profile" className="flex items-center gap-space-sm pl-space-xs">
              <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={PROFILE_AVATAR_URL} />
              <span className="hidden sm:inline font-label-md text-label-md text-on-surface font-semibold">{userName}</span>
            </Link>
          </div>
        </header>
        <main className="relative pt-16 w-full px-8 bg-surface min-h-screen">
          <div className="flex flex-col w-full max-w-7xl mx-auto pb-space-xl gap-space-xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
