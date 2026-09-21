import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import type { SidebarNavItem } from "../types/nav";

const BRAND_LOGO_URL =
  "https://lh3.googleusercontent.com/aida/AEtjO1V5rM_dtcWnlE8HaAN7eXi0PejiuC50-cFY30ckgoRdke4DrEzb3gqcqcDA9w7-ZYqajI6T2fN3Dcj0AVBsUSOBs62FyBgRlR3IpGeJHrSbgepRk1NhTR-EGkQ9f1h9yJEWrPn1K0uqIU1lAwE3sAgJzzIbA2-_W2QT_WcGNyl5TSBQ2klCwJIwky8LHtS-Ho4i1Bj04lYWNGtc45Rwm7kwZy6rday0VEUe13n9--5vZ3v-F6S52ceIgsZ8";

interface WorkspaceCard {
  initials: string;
  name: string;
  subtitle: string;
}

interface AppShellLayoutProps {
  portalLabel: string;
  navItems: SidebarNavItem[];
  workspace?: WorkspaceCard;
  userName: string;
  userSubtitle?: string;
  searchPlaceholder: string;
  notificationsTo?: string;
  profileTo?: string;
  profileAvatarUrl?: string;
  children: ReactNode;
}

export default function AppShellLayout({
  portalLabel,
  navItems,
  workspace,
  userName,
  userSubtitle,
  searchPlaceholder,
  notificationsTo,
  profileTo,
  profileAvatarUrl,
  children,
}: AppShellLayoutProps) {
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col">
          <div className="h-16 flex items-center gap-3 px-6">
            <img alt="SkillBridge logo" className="h-8 w-auto object-contain" src={BRAND_LOGO_URL} />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none">SkillBridge</span>
              <span className="font-caption text-caption text-on-surface-variant font-medium tracking-wide uppercase mt-0.5">{portalLabel}</span>
            </div>
          </div>
          <div className="px-4 py-2">
            <span className="px-3 font-caption text-caption text-secondary uppercase font-semibold tracking-wider">Workspace</span>
          </div>
          <nav className="flex flex-col gap-1 px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-label-md text-label-md ${
                    isActive
                      ? "bg-primary-container text-on-primary shadow-sm"
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
        {workspace && (
          <div className="p-4 m-3 bg-surface-container-low rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center text-primary font-headline-sm text-headline-sm font-bold flex-shrink-0">
                {workspace.initials}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-label-md text-on-surface truncate font-semibold">{workspace.name}</span>
                <span className="font-caption text-caption text-on-surface-variant truncate">{workspace.subtitle}</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
          </div>
        )}
      </aside>
      <div className="pl-64">
        <header className="fixed top-0 left-64 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-8">
          <div className="flex items-center gap-3 w-full max-w-md">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">search</span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-surface-container-low text-on-surface placeholder:text-secondary font-body-sm text-body-sm rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder={searchPlaceholder}
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            {notificationsTo ? (
              <Link
                to={notificationsTo}
                className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors"
              >
                <span className="material-symbols-outlined text-[22px]">notifications</span>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest" />
              </Link>
            ) : (
              <button className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined text-[22px]">notifications</span>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest" />
              </button>
            )}
            <div className="h-6 w-[1px] bg-surface-container-highest" />
            {profileTo ? (
              <Link to={profileTo} className="flex items-center gap-3">
                <div className="text-right hidden sm:flex sm:flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold">{userName}</span>
                  {userSubtitle && <span className="font-caption text-caption text-secondary">{userSubtitle}</span>}
                </div>
                {profileAvatarUrl ? (
                  <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={profileAvatarUrl} />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
                  </div>
                )}
              </Link>
            ) : (
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:flex sm:flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold">{userName}</span>
                  {userSubtitle && <span className="font-caption text-caption text-secondary">{userSubtitle}</span>}
                </div>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
                </div>
              </div>
            )}
          </div>
        </header>
        <main className="relative pt-16 w-full px-8 bg-surface min-h-screen">
          <div className="flex flex-col w-full max-w-7xl mx-auto pb-space-xl gap-space-xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
