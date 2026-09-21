import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

const AVATAR_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC8viXqkw2CTjcrWZ242IgkXi_Yi9ZBWkE3hH8hm2v99iYSdfxNp0dBcFNGqxYcwyumD1Dt6N0u5-SuceWeziJiRmKkQy9YqIOCu-2xpIgZnDc_TV8t3ld3PISo668ltFLG_OK33eGwzsL979AiQL0y_ERBZ321fvTJdV1IIBF5VvgFNPGO-LHGwLwaPzeFljFO50OMe_BdbSz2PD2o1k0ZkLAPhL8eD-Qi5Iaoe5PQ7MAghDO6BgTr7A";

const NAV_SECTIONS = [
  { href: "#account", icon: "person", label: "Account", index: "01" },
  { href: "#notifications", icon: "notifications", label: "Notifications", index: "02" },
  { href: "#connected", icon: "link", label: "Connections", index: "03" },
  { href: "#danger-zone", icon: "shield_person", label: "Danger Zone", index: "04" },
];

interface NotificationItem {
  title: string;
  description: string;
  enabled: boolean;
}

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  { title: "New Project Matches", description: "Instant alerts when industry briefs matching your verified skill gaps are published", enabled: true },
  { title: "Application & Interview Updates", description: "Direct recruiter messages, screening scores, and fast-track invitations", enabled: true },
  { title: "Mentor Code Reviews & PR Comments", description: "Notifications when mentors leave code review comments on your active sprint GitHub branches", enabled: true },
  { title: "Skill Readiness Benchmark Changes", description: "Weekly summary of your readiness score trajectory and peer cohort percentiles", enabled: true },
  { title: "Marketing & Partner Webinar Invitations", description: "Occasional announcements from sponsor tech companies and hackathon organizers", enabled: false },
];

export default function SettingsPage() {
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [toastVisible, setToastVisible] = useState(false);

  function toggleNotification(index: number) {
    setNotifications((prev) => prev.map((n, i) => (i === index ? { ...n, enabled: !n.enabled } : n)));
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  }

  function handleDeleteAccount() {
    if (window.confirm("Are you certain you want to permanently delete your SkillBridge account? All your industry credentials and mentor evaluations will be erased.")) {
      window.alert("Account deletion request initiated. Please check your academic email for the final authorization link.");
    }
  }

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto w-full pb-space-xl">
        <div className="py-space-lg">
          <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm mb-space-sm">
            <Link className="hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-on-surface font-semibold">Settings</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface">Account &amp; Preferences</h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-2xl">
                Manage your student account credentials, notification triggers, third-party academic connections, and security settings.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest shadow-sm self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse" />
              <span className="font-label-sm text-label-sm text-on-surface font-medium">Ashcombe University Identity Verified</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          <div className="lg:col-span-3">
            <div className="sticky top-20 flex flex-col gap-1 p-space-sm bg-surface-container-lowest rounded-xl shadow-sm">
              {NAV_SECTIONS.map((section, i) => (
                <a
                  key={section.href}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg font-label-md text-label-md transition-all ${
                    i === 0
                      ? "bg-primary-container text-on-primary"
                      : section.label === "Danger Zone"
                      ? "text-on-surface-variant hover:bg-error-container/30 hover:text-error"
                      : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                  }`}
                  href={section.href}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[18px]">{section.icon}</span>
                    <span>{section.label}</span>
                  </span>
                  <span className={`text-[11px] uppercase tracking-wider font-semibold ${i === 0 ? "opacity-80" : "opacity-60"}`}>{section.index}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-9 flex flex-col gap-space-lg">
            <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm transition-all scroll-mt-20" id="account">
              <div className="flex items-start justify-between pb-space-md">
                <div>
                  <span className="font-label-sm text-label-sm text-primary font-bold tracking-wider uppercase">Profile &amp; Credentials</span>
                  <h2 className="font-headline-md text-headline-md text-on-surface mt-0.5">Account Information</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Update your personal details, verified academic email, and security password.</p>
                </div>
                <span className="material-symbols-outlined text-outline text-[24px]">manage_accounts</span>
              </div>
              <div className="py-space-md my-space-sm bg-surface-container-low/50 rounded-xl px-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                  <div className="relative">
                    <img className="w-16 h-16 rounded-full object-cover shadow-sm ring-2 ring-surface-container-lowest" alt="Maya Lin" src={AVATAR_URL} />
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-tertiary rounded-full ring-2 ring-surface-container-lowest flex items-center justify-center">
                      <span className="material-symbols-outlined text-[10px] text-on-tertiary">check</span>
                    </span>
                  </div>
                  <div>
                    <p className="font-headline-sm text-headline-sm text-on-surface">Maya Lin</p>
                    <p className="font-caption text-caption text-on-surface-variant">BSc Computer Science • Student ID: 23091482</p>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors shadow-sm" type="button">
                    Change Avatar
                  </button>
                  <button className="px-3 py-2 rounded-lg text-secondary hover:text-error hover:bg-error-container/20 font-label-md text-label-md transition-colors" type="button">
                    Remove
                  </button>
                </div>
              </div>
              <form className="flex flex-col gap-space-md mt-space-md" onSubmit={handleSave}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="fullName">Full Name</label>
                    <input
                      className="w-full px-3.5 py-2.5 bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all"
                      id="fullName"
                      type="text"
                      defaultValue="Maya Lin"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="academicEmail">Academic Email</label>
                      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded-full">
                        <span className="material-symbols-outlined text-[14px]">verified</span>
                        <span>Verified Academic</span>
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        className="w-full px-3.5 py-2.5 bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all"
                        id="academicEmail"
                        type="email"
                        defaultValue="maya.lin@ashcombe.ac.uk"
                      />
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[18px] text-tertiary">check_circle</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="degreeCohort">Degree &amp; Cohort</label>
                    <div className="relative">
                      <input
                        className="w-full px-3.5 py-2.5 bg-surface-container-low/70 text-on-surface-variant rounded-lg font-body-md text-body-md cursor-not-allowed"
                        id="degreeCohort"
                        readOnly
                        type="text"
                        defaultValue="BSc Computer Science • Class of 2026 (Ashcombe University)"
                      />
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[18px] text-outline">lock</span>
                    </div>
                    <p className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">info</span>
                      Managed by Ashcombe University Academic Registrar SSO synchronization.
                    </p>
                  </div>
                </div>
                <div className="mt-space-sm p-space-md rounded-xl bg-surface-container-low">
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => setPasswordOpen((v) => !v)}>
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">key</span>
                      </div>
                      <div>
                        <span className="font-headline-sm text-headline-sm text-on-surface text-[15px]">Security &amp; Password</span>
                        <p className="font-caption text-caption text-on-surface-variant">Last updated 45 days ago • 2FA Active</p>
                      </div>
                    </div>
                    <button className="font-label-md text-label-md text-primary font-semibold hover:underline flex items-center gap-1" type="button">
                      <span>Change Password</span>
                      <span className={`material-symbols-outlined text-[18px] transition-transform ${passwordOpen ? "rotate-180" : ""}`}>expand_more</span>
                    </button>
                  </div>
                  {passwordOpen && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-md mt-space-md border-t border-surface-variant/40">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-sm text-label-sm text-on-surface">Current Password</label>
                        <input className="w-full px-3.5 py-2 bg-surface-container-lowest rounded-lg font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="••••••••••••" type="password" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-sm text-label-sm text-on-surface">New Password</label>
                        <input className="w-full px-3.5 py-2 bg-surface-container-lowest rounded-lg font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Min. 10 chars" type="password" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-sm text-label-sm text-on-surface">Confirm New Password</label>
                        <input className="w-full px-3.5 py-2 bg-surface-container-lowest rounded-lg font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Re-type new password" type="password" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-end gap-space-sm pt-space-xs">
                  <button className="px-5 py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md transition-all shadow-sm flex items-center gap-2" type="submit">
                    <span className="material-symbols-outlined text-[18px]">save</span>
                    <span>Save Account Changes</span>
                  </button>
                </div>
              </form>
            </section>

            <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm transition-all scroll-mt-20" id="notifications">
              <div className="flex items-start justify-between pb-space-md">
                <div>
                  <span className="font-label-sm text-label-sm text-primary font-bold tracking-wider uppercase">Alerts &amp; Signals</span>
                  <h2 className="font-headline-md text-headline-md text-on-surface mt-0.5">Notification Preferences</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Choose what updates and alerts you want to receive across in-app, email, and mobile push.</p>
                </div>
                <span className="material-symbols-outlined text-outline text-[24px]">tune</span>
              </div>
              <div className="p-space-md bg-surface-container-low rounded-xl mb-space-md flex flex-wrap items-center justify-between gap-space-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">mark_email_read</span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">Active Channels</span>
                </div>
                <div className="flex items-center gap-space-md">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input defaultChecked className="accent-primary-container w-4 h-4 rounded cursor-pointer" type="checkbox" />
                    <span className="font-label-sm text-label-sm text-on-surface">Email Digest</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input defaultChecked className="accent-primary-container w-4 h-4 rounded cursor-pointer" type="checkbox" />
                    <span className="font-label-sm text-label-sm text-on-surface">Push Notifications</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input defaultChecked className="accent-primary-container w-4 h-4 rounded cursor-pointer" type="checkbox" />
                    <span className="font-label-sm text-label-sm text-on-surface">In-App Only</span>
                  </label>
                </div>
              </div>
              <div className="flex flex-col divide-y divide-surface-variant/40">
                {notifications.map((item, i) => (
                  <div key={item.title} className="py-space-md flex items-center justify-between gap-space-md">
                    <div className="flex flex-col pr-space-sm">
                      <span className="font-headline-sm text-headline-sm text-on-surface text-[15px]">{item.title}</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">{item.description}</span>
                    </div>
                    <button
                      aria-checked={item.enabled}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${
                        item.enabled ? "bg-primary-container" : "bg-surface-variant"
                      }`}
                      role="switch"
                      type="button"
                      onClick={() => toggleNotification(i)}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-surface-container-lowest shadow-sm ring-0 transition duration-200 ease-in-out mt-0.5 ml-0.5 ${
                          item.enabled ? "translate-x-5.5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm transition-all scroll-mt-20" id="connected">
              <div className="flex items-start justify-between pb-space-md">
                <div>
                  <span className="font-label-sm text-label-sm text-primary font-bold tracking-wider uppercase">Integrations</span>
                  <h2 className="font-headline-md text-headline-md text-on-surface mt-0.5">Connected Accounts</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Connect external tools to automatically sync repositories, credentials, and single sign-on.</p>
                </div>
                <span className="material-symbols-outlined text-outline text-[24px]">hub</span>
              </div>
              <div className="flex flex-col gap-space-md">
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-md hover:shadow-sm transition-shadow">
                  <div className="flex items-center gap-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center shadow-sm shrink-0">
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17Z" fill="#4285F4" />
                        <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z" fill="#34A853" />
                        <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z" fill="#FBBC05" />
                        <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z" fill="#EA4335" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface text-[16px]">Google</h3>
                        <span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-tertiary-fixed/40 text-on-tertiary-container font-semibold">Connected</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Single Sign-On active via <span className="font-medium text-on-surface">maya.lin@ashcombe.ac.uk</span></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm pl-16 md:pl-0">
                    <button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors shadow-sm" type="button">
                      Disconnect
                    </button>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-md hover:shadow-sm transition-shadow">
                  <div className="flex items-center gap-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center shadow-sm shrink-0">
                      <svg className="w-6 h-6 text-on-surface" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2Z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface text-[16px]">GitHub</h3>
                        <span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-tertiary-fixed/40 text-on-tertiary-container font-semibold">Active Sync</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Connected as <span className="font-medium text-on-surface">@mayalin-ashcombe</span> • 42 verified commits synced for CI/CD credential
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm pl-16 md:pl-0">
                    <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-variant text-primary font-label-md text-label-md transition-colors shadow-sm flex items-center gap-1" type="button">
                      <span className="material-symbols-outlined text-[16px]">sync</span>
                      <span>Sync Now</span>
                    </button>
                    <button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" type="button">
                      Permissions
                    </button>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-md hover:shadow-sm transition-shadow">
                  <div className="flex items-center gap-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center shadow-sm shrink-0">
                      <svg className="w-6 h-6 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface text-[16px]">LinkedIn</h3>
                        <span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant">Not Connected</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant max-w-lg">Connect your LinkedIn profile to publish cryptographic verified skill badges directly to your feed.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm pl-16 md:pl-0">
                    <button className="px-4 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md transition-colors shadow-sm flex items-center gap-1.5" type="button">
                      <span className="material-symbols-outlined text-[16px]">add_link</span>
                      <span>Connect Account</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-error-container/20 rounded-xl p-space-lg shadow-sm transition-all scroll-mt-20" id="danger-zone">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded-lg bg-error/10 text-error flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[22px]">warning</span>
                  </div>
                  <div>
                    <h2 className="font-headline-md text-headline-md text-error">Danger Zone</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-xl">
                      Permanently delete your SkillBridge student account, active sprint applications, mentor feedback records, and cryptographic badge tokens. This action is completely irreversible.
                    </p>
                    <div className="mt-space-md flex items-center gap-space-md">
                      <button className="px-4 py-2 rounded-lg bg-surface-container-lowest hover:bg-error hover:text-on-error text-error font-label-md text-label-md transition-all shadow-sm flex items-center gap-2" type="button" onClick={handleDeleteAccount}>
                        <span className="material-symbols-outlined text-[18px]">delete_forever</span>
                        <span>Delete Account &amp; Records</span>
                      </button>
                      <span className="font-caption text-caption text-on-surface-variant">Requires password confirmation</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div
        className={`fixed bottom-6 right-6 transition-all duration-300 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-on-surface text-surface shadow-xl ${
          toastVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">check_circle</span>
        <span className="font-label-md text-label-md">Settings updated successfully</span>
      </div>
    </DashboardLayout>
  );
}
