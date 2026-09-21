import type { ReactNode } from "react";
import AppShellLayout from "./AppShellLayout";
import type { SidebarNavItem } from "../types/nav";

const NAV_ITEMS: SidebarNavItem[] = [
  { label: "Dashboard", to: "/institute-dashboard", icon: "grid_view" },
  { label: "My Courses", to: "/institute-dashboard", icon: "library_books" },
  { label: "Enrollments", to: "/institute-dashboard", icon: "group" },
  { label: "Institute Profile", to: "/institute-profile-setup", icon: "account_balance" },
];

interface InstituteLayoutProps {
  instituteInitials?: string;
  instituteName?: string;
  planLabel?: string;
  userName?: string;
  userTitle?: string;
  children: ReactNode;
}

export default function InstituteLayout({
  instituteInitials = "RI",
  instituteName = "Riverside Institute",
  planLabel = "Verified Partner",
  userName = "Dana Reyes",
  userTitle = "Program Director",
  children,
}: InstituteLayoutProps) {
  return (
    <AppShellLayout
      portalLabel="Institute Portal"
      navItems={NAV_ITEMS}
      workspace={{ initials: instituteInitials, name: instituteName, subtitle: planLabel }}
      userName={userName}
      userSubtitle={userTitle}
      searchPlaceholder="Search courses, cohorts, enrollments..."
    >
      {children}
    </AppShellLayout>
  );
}
