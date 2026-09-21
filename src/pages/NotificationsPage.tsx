import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

type Category = "projects" | "mentorship" | "academic";
type FilterKey = "all" | "unread" | Category;

interface NotificationItem {
  id: number;
  group: "today" | "earlier";
  category: Category;
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  time: string;
  body: React.ReactNode;
  footerLeft: React.ReactNode;
  footerRight: React.ReactNode;
}

const FILTERS: { key: FilterKey; label: string; count: number; icon?: string }[] = [
  { key: "all", label: "All", count: 12 },
  { key: "unread", label: "Unread", count: 4 },
  { key: "projects", label: "Projects & Sprints", count: 5, icon: "code_blocks" },
  { key: "mentorship", label: "Mentorship & Reviews", count: 3, icon: "rate_review" },
  { key: "academic", label: "Academic Sync", count: 2, icon: "school" },
];

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 1,
    group: "today",
    category: "projects",
    icon: "auto_awesome",
    iconBg: "bg-primary-fixed/60",
    iconColor: "text-primary",
    title: "New project match: E-commerce Dashboard & State Machine",
    time: "12m ago",
    body: (
      <>
        Curriculum engine matched your profile to <strong className="text-on-surface font-medium">Wise Core Team</strong>&rsquo;s verified client project
        brief. Targeting your active <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-medium text-[11px]">Zustand</span> skill gap.
      </>
    ),
    footerLeft: (
      <>
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed/30 text-on-tertiary-fixed-variant font-label-sm text-[11px] font-semibold">
          <span className="material-symbols-outlined text-[13px]">verified</span> 94% Skill Overlap
        </span>
        <span className="font-caption text-caption text-on-surface-variant">Stipend: £1,200 • 4 Sprints</span>
      </>
    ),
    footerRight: (
      <a className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary hover:text-primary-container font-semibold transition-colors" href="#">
        <span>View Project</span>
        <span className="material-symbols-outlined text-[15px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
      </a>
    ),
  },
  {
    id: 2,
    group: "today",
    category: "projects",
    icon: "video_camera_front",
    iconBg: "bg-tertiary-fixed/60",
    iconColor: "text-tertiary",
    title: "Fast-Track Interview confirmed: Nimbus Pay",
    time: "2h ago",
    body: (
      <>
        Lead Architect <strong className="text-on-surface font-medium">David O&rsquo;Connor</strong> confirmed your 45-minute technical walkthrough for
        tomorrow, Oct 24 at 14:00 BST based on your approved payment microservice benchmark.
      </>
    ),
    footerLeft: (
      <>
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-medium">
          <span className="material-symbols-outlined text-[13px]">calendar_today</span> Oct 24 • 14:00 BST
        </span>
        <span className="font-caption text-caption text-on-surface-variant">Google Meet link attached</span>
      </>
    ),
    footerRight: (
      <button className="px-3 py-1 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-sm text-label-sm font-semibold transition-colors shadow-sm" type="button">
        View Details
      </button>
    ),
  },
  {
    id: 3,
    group: "today",
    category: "mentorship",
    icon: "code",
    iconBg: "bg-secondary-fixed",
    iconColor: "text-on-secondary-fixed-variant",
    title: "Code Review posted on GitHub PR #14",
    time: "5h ago",
    body: (
      <>
        Staff Reviewer <strong className="text-on-surface font-medium">Sarah Jenkins</strong> approved Milestone 1 in{" "}
        <em className="not-italic text-on-surface">Figma Labs Accessible Tokens</em>: &ldquo;Clean typed abstraction layer. Ready to merge into staging.&rdquo;
      </>
    ),
    footerLeft: (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-[11px]">
        <span className="material-symbols-outlined text-[13px] text-tertiary font-bold">check</span> Milestone 1 Approved
      </span>
    ),
    footerRight: (
      <a className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary hover:text-primary-container font-semibold transition-colors" href="#">
        <span>Open GitHub PR</span>
        <span className="material-symbols-outlined text-[15px]">open_in_new</span>
      </a>
    ),
  },
  {
    id: 4,
    group: "today",
    category: "academic",
    icon: "military_tech",
    iconBg: "bg-tertiary-fixed/80",
    iconColor: "text-tertiary",
    title: "Skill Gap closed: Next.js 14 App Router",
    time: "1d ago",
    body: (
      <>
        Your practical assessment was verified by AI Rubric 4.2. Market readiness score for <strong className="text-on-surface font-medium">Full Stack Associate</strong>{" "}
        surged from <span className="font-semibold text-primary">62%</span> to <span className="font-semibold text-tertiary">68%</span>.
      </>
    ),
    footerLeft: (
      <span className="inline-flex items-center gap-1 text-tertiary font-label-sm text-[11px] font-semibold">
        <span className="material-symbols-outlined text-[14px]">trending_up</span> +6.0% Readiness Index
      </span>
    ),
    footerRight: (
      <a className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary hover:text-primary-container font-semibold transition-colors" href="#">
        <span>View Radar Chart</span>
        <span className="material-symbols-outlined text-[15px]">insights</span>
      </a>
    ),
  },
  {
    id: 5,
    group: "earlier",
    category: "projects",
    icon: "send",
    iconBg: "bg-surface-container",
    iconColor: "text-on-surface-variant",
    title: "Application received: Ledgerly Payment Middleware",
    time: "3d ago",
    body: (
      <>
        Under automated benchmark evaluation. Your candidate rank is currently positioned in the <strong className="text-on-surface font-medium">top 10%</strong> of undergraduate applicants.
      </>
    ),
    footerLeft: <span className="font-caption text-caption text-on-surface-variant">Application ID: #ST-88219</span>,
    footerRight: (
      <span className="font-label-sm text-label-sm text-on-surface-variant/80 group-hover:text-primary transition-colors flex items-center gap-1 cursor-pointer">
        <span>Review Submission</span>
        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
      </span>
    ),
  },
  {
    id: 6,
    group: "earlier",
    category: "academic",
    icon: "school",
    iconBg: "bg-primary-fixed/40",
    iconColor: "text-primary-fixed-variant",
    title: "Ashcombe University CS Elective Credit Pre-approved",
    time: "4d ago",
    body: (
      <>
        COMP0016 Elective Board has formally approved the Nimbus Pay sprint specification to count towards <strong className="text-on-surface font-medium">15 CATS degree credits</strong> for Term 2.
      </>
    ),
    footerLeft: (
      <span className="inline-flex items-center gap-1 font-label-sm text-[11px] text-tertiary">
        <span className="material-symbols-outlined text-[14px]">check_circle</span> Department Signature Verified
      </span>
    ),
    footerRight: (
      <span className="font-label-sm text-label-sm text-on-surface-variant/80 group-hover:text-primary transition-colors flex items-center gap-1 cursor-pointer">
        <span>Download Approval PDF</span>
        <span className="material-symbols-outlined text-[14px]">download</span>
      </span>
    ),
  },
  {
    id: 7,
    group: "earlier",
    category: "projects",
    icon: "explore",
    iconBg: "bg-surface-container",
    iconColor: "text-on-surface-variant",
    title: "New sprint brief published: Deliveroo Route Visualizer",
    time: "5d ago",
    body: "Deliveroo Logistics is seeking 2 student engineers to implement real-time geospatial rendering with Mapbox GL and TypeScript.",
    footerLeft: <span className="font-caption text-caption text-on-surface-variant">Deadline: Nov 01, 2024</span>,
    footerRight: (
      <span className="font-label-sm text-label-sm text-on-surface-variant/80 group-hover:text-primary transition-colors flex items-center gap-1 cursor-pointer">
        <span>View Requirements</span>
        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
      </span>
    ),
  },
  {
    id: 8,
    group: "earlier",
    category: "mentorship",
    icon: "forum",
    iconBg: "bg-surface-container",
    iconColor: "text-on-surface-variant",
    title: "Peer review completed",
    time: "6d ago",
    body: (
      <>
        You evaluated <strong className="text-on-surface font-medium">Alex K&rsquo;s</strong> database migration architecture brief within the Ashcombe University CS lab cohort. 50 XP awarded to your Mentorship score.
      </>
    ),
    footerLeft: <span className="font-caption text-caption text-on-surface-variant">+50 Peer Contributor Karma</span>,
    footerRight: (
      <span className="font-label-sm text-label-sm text-on-surface-variant/80 group-hover:text-primary transition-colors flex items-center gap-1 cursor-pointer">
        <span>View Feedback Card</span>
        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
      </span>
    ),
  },
];

const UNREAD_IDS = new Set([1, 2, 3, 4]);

export default function NotificationsPage() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [readIds, setReadIds] = useState<Set<number>>(new Set());
  const allRead = readIds.size >= UNREAD_IDS.size && [...UNREAD_IDS].every((id) => readIds.has(id));

  function isUnread(id: number) {
    return UNREAD_IDS.has(id) && !readIds.has(id);
  }

  const visible = INITIAL_NOTIFICATIONS.filter((n) => {
    if (filter === "all") return true;
    if (filter === "unread") return isUnread(n.id);
    return n.category === filter;
  });
  const todayItems = visible.filter((n) => n.group === "today");
  const earlierItems = visible.filter((n) => n.group === "earlier");
  const unreadCount = INITIAL_NOTIFICATIONS.filter((n) => isUnread(n.id)).length;

  function markAllRead() {
    setReadIds(new Set(UNREAD_IDS));
  }

  return (
    <DashboardLayout>
      <div className="w-full max-w-5xl mx-auto py-space-md flex flex-col gap-space-xl">
        <header className="flex flex-col gap-space-md">
          <nav className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
            <Link className="hover:text-primary transition-colors flex items-center gap-1.5" to="/dashboard">
              <span className="material-symbols-outlined text-[16px]">dashboard</span>
              <span>Dashboard</span>
            </Link>
            <span className="text-outline-variant font-body-sm">/</span>
            <span className="text-on-surface font-semibold text-label-sm">Notifications</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-1 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="font-label-sm text-label-sm text-primary tracking-wider uppercase font-semibold">Activity Hub</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Auto-synced with Ashcombe University Portal</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Notifications</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Stay updated on verified sprint applications, mentor reviews, fast-track interview invites, and curriculum syncs.
              </p>
            </div>
            <div className="flex items-center gap-space-sm self-start md:self-auto shrink-0">
              <button
                className={`group flex items-center gap-2 px-3.5 py-2 rounded-lg font-label-md text-label-md transition-all active:scale-98 shadow-sm ${
                  allRead ? "bg-surface-container-low opacity-60 pointer-events-none text-on-surface" : "bg-surface-container-low hover:bg-surface-container text-on-surface"
                }`}
                type="button"
                onClick={markAllRead}
              >
                <span className="material-symbols-outlined text-[18px] text-primary group-hover:scale-110 transition-transform">done_all</span>
                <span>{allRead ? "All notifications read" : "Mark all as read"}</span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 mt-space-xs text-on-surface">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`px-3.5 py-1.5 rounded-full font-label-sm text-label-sm transition-all shrink-0 flex items-center gap-1.5 ${
                  filter === f.key ? "bg-primary-container text-on-primary shadow-sm" : "bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface"
                }`}
                type="button"
                onClick={() => setFilter(f.key)}
              >
                {f.icon && <span className="material-symbols-outlined text-[15px]">{f.icon}</span>}
                <span>{f.label}</span>
                {f.key === "unread" ? (
                  <span className="bg-primary-container/10 text-primary-container px-1.5 py-0.2 rounded-full text-[11px] font-bold">{unreadCount}</span>
                ) : f.key === "all" ? (
                  <span className={`px-1.5 py-0.2 rounded-full text-[11px] font-bold ${filter === "all" ? "bg-surface-container-lowest/20 text-on-primary" : ""}`}>{f.count}</span>
                ) : (
                  <span className="text-on-surface-variant/70 text-[11px] font-semibold">({f.count})</span>
                )}
              </button>
            ))}
          </div>
        </header>

        <div className="flex flex-col gap-space-lg">
          {todayItems.length > 0 && (
            <section className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <h2 className="font-label-md text-label-md text-on-surface font-bold tracking-tight">Today</h2>
                  <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-[11px] font-semibold">
                    {todayItems.filter((n) => isUnread(n.id)).length} new
                  </span>
                </div>
                <span className="font-caption text-caption text-on-surface-variant">Wednesday, Oct 23</span>
              </div>
              <div className="flex flex-col gap-2">
                {todayItems.map((n) => (
                  <NotificationCard key={n.id} item={n} unread={isUnread(n.id)} />
                ))}
              </div>
            </section>
          )}

          {earlierItems.length > 0 && (
            <section className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <h2 className="font-label-md text-label-md text-on-surface font-bold tracking-tight">Earlier This Week</h2>
                  <span className="font-caption text-caption text-on-surface-variant">{earlierItems.length} updates</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {earlierItems.map((n) => (
                  <NotificationCard key={n.id} item={n} unread={isUnread(n.id)} />
                ))}
              </div>
            </section>
          )}
        </div>

        {visible.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-surface-container-lowest rounded-2xl shadow-sm">
            <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant mb-3">
              <span className="material-symbols-outlined text-[28px]">notifications_off</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">No notifications found</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mb-4">
              There are no updates matching your active filter criteria right now. Check back later or reset your filters.
            </p>
            <button className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors" type="button" onClick={() => setFilter("all")}>
              Show all notifications
            </button>
          </div>
        )}

        <aside className="relative overflow-hidden bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-primary/5 pointer-events-none blur-2xl" />
          <div className="flex items-start gap-3.5 max-w-2xl relative z-10">
            <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[22px]">tune</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <h4 className="font-headline-sm text-[16px] font-semibold text-on-surface">Notification Delivery Settings</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                You are receiving real-time browser push alerts and weekly Sunday digests at <strong className="text-on-surface font-medium">maya.lin@cs.ashcombe.ac.uk</strong>.
              </p>
            </div>
          </div>
          <Link className="relative z-10 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md font-semibold transition-all shrink-0 hover:translate-x-0.5" to="/settings">
            <span>Customize in Preferences</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </aside>
      </div>
    </DashboardLayout>
  );
}

function NotificationCard({ item, unread }: { item: NotificationItem; unread: boolean }) {
  return (
    <article
      className={`group relative overflow-hidden transition-all duration-200 rounded-xl p-space-md shadow-sm flex items-start gap-4 ${
        unread ? "bg-surface-container-lowest hover:bg-surface-container-lowest/90" : "bg-surface-container-lowest/60 hover:bg-surface-container-lowest"
      }`}
    >
      {unread && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container" />}
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105 ${item.iconBg} ${item.iconColor}`}>
        <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
      </div>
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className={`font-headline-sm text-[15px] leading-tight ${unread ? "text-on-surface font-semibold" : "text-on-surface/90 font-medium"}`}>{item.title}</h3>
            {unread && <span className="w-2 h-2 rounded-full bg-primary-container shrink-0" title="Unread" />}
          </div>
          <time className="font-caption text-caption text-on-surface-variant shrink-0">{item.time}</time>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">{item.body}</p>
        <div className="flex items-center justify-between pt-2 mt-1">
          <div className="flex items-center gap-2 flex-wrap">{item.footerLeft}</div>
          <div className="flex items-center gap-2">{item.footerRight}</div>
        </div>
      </div>
    </article>
  );
}
