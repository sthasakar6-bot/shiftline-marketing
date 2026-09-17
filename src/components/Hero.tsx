import { useRef, useState } from "react";
import { APP_URL } from "../config";

type Tab = {
  key: string;
  label: string;
  color: string;
  colorSoft: string;
  headline: string;
  checks: string[];
  image: string;
  alt: string;
};

const TABS: Tab[] = [
  {
    key: "scheduling",
    label: "Scheduling",
    color: "var(--accent-solid)",
    colorSoft: "#fb923c",
    headline: "Schedule your staff in minutes.",
    checks: ["Drag-and-drop roster", "Open shifts", "Shift swap requests", "Conflict warnings"],
    image: "/photos/app/roster.png",
    alt: "Shiftline weekly roster with color-coded shifts per employee",
  },
  {
    key: "hours",
    label: "Hours",
    color: "var(--accent-teal)",
    colorSoft: "#2dd4bf",
    headline: "Accurate hours on the payslip.",
    checks: ["GPS-tagged clock in, clock out", "Breaks calculated automatically", "Works offline", "Approve in one go"],
    image: "/photos/app/attendance.png",
    alt: "Shiftline attendance screen showing clock-in times awaiting approval",
  },
  {
    key: "notifications",
    label: "Notifications",
    color: "var(--accent-pink)",
    colorSoft: "#f472b6",
    headline: "Never miss what matters.",
    checks: ["Missed clock-in alerts", "Leave request updates", "Instant push notifications", "Cleared automatically"],
    image: "/photos/app/notifications.png",
    alt: "Shiftline smart notifications panel",
  },
  {
    key: "salary",
    label: "Salary preparation",
    color: "var(--accent-2)",
    colorSoft: "#c2703d",
    headline: "Payroll paperwork, done for you.",
    checks: ["Contracts generated automatically", "Payslips ready to download", "Export-ready hours", "One place per employee"],
    image: "/photos/app/payroll.png",
    alt: "Shiftline payroll grid with contracts and payslips per employee",
  },
  {
    key: "ai",
    label: "AI Assistant",
    color: "var(--accent-ai)",
    colorSoft: "#a78bfa",
    headline: "Just tell it who works when.",
    checks: ["Plain English, not a form", "You confirm every shift", "No manual calendar clicking", "Learns your team"],
    image: "/photos/app/assistant.png",
    alt: "Shiftline AI scheduling assistant chat proposing shifts",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const tab = TABS[active];

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 40) return;
    setActive((i) => (dx < 0 ? Math.min(i + 1, TABS.length - 1) : Math.max(i - 1, 0)));
  }

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="blob blob-c" />
        <span className="grain" />
      </div>

      <div className="hero-inner">
        <p className="eyebrow center">Staff scheduling &amp; workforce management</p>
        <h1 className="hero-title center">
          Keep every shift
          <span className="accent-text"> in line.</span>
        </h1>

        <div className="hero-tabbar" role="tablist" aria-label="Shiftline features">
          {TABS.map((t, i) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`hero-tab ${i === active ? "hero-tab-active" : ""}`}
              style={i === active ? { background: t.color, borderColor: t.color } : undefined}
              onClick={() => setActive(i)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div
          className="hero-panel"
          style={{ background: `linear-gradient(135deg, ${tab.color}, ${tab.colorSoft})` }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="hero-panel-copy">
            <h2 key={tab.key} className="hero-panel-headline">
              {tab.headline}
            </h2>
            <ul className="hero-panel-checks">
              {tab.checks.map((c) => (
                <li key={c}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12.5 9.5 18 20 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
            <div className="hero-actions">
              <a className="btn btn-panel" href={`${APP_URL}/signup`}>
                Get started
              </a>
              <a className="btn btn-panel-ghost" href="#features">
                See how it works
              </a>
            </div>
          </div>

          <div className="hero-panel-visual">
            <img key={tab.image} className="hero-panel-screenshot" src={tab.image} alt={tab.alt} loading="eager" />
          </div>
        </div>

        <p className="hero-note center">
          Free for 15 days, no credit card required — works on any device, including as an
          installable app for the shop floor.
        </p>
      </div>
    </section>
  );
}
