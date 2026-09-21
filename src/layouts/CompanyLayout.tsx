import type { ReactNode } from "react";
import AppShellLayout from "./AppShellLayout";
import type { SidebarNavItem } from "../types/nav";

const NAV_ITEMS: SidebarNavItem[] = [
  { label: "Dashboard", to: "/company-dashboard", icon: "grid_view" },
  { label: "My Postings", to: "/manage-openings", icon: "work_outline" },
  { label: "Applicants", to: "/applicant-review", icon: "group" },
  { label: "Company Profile", to: "/company-profile-setup", icon: "apartment" },
];

interface CompanyLayoutProps {
  companyInitials?: string;
  companyName?: string;
  planLabel?: string;
  userName?: string;
  userTitle?: string;
  children: ReactNode;
}

export default function CompanyLayout({
  companyInitials = "NT",
  companyName = "NextTech Labs",
  planLabel = "Enterprise Plan",
  userName = "Sarah Jenkins",
  userTitle = "Talent Director",
  children,
}: CompanyLayoutProps) {
  return (
    <AppShellLayout
      portalLabel="Employer Portal"
      navItems={NAV_ITEMS}
      workspace={{ initials: companyInitials, name: companyName, subtitle: planLabel }}
      userName={userName}
      userSubtitle={userTitle}
      searchPlaceholder="Search postings, applicants, skill profiles..."
    >
      {children}
    </AppShellLayout>
  );
}
