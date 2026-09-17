import { useEffect, useRef, useState } from "react";
import { APP_URL } from "../config";
import DemoModal from "./DemoModal";

const BASE_ROWS = [
  { name: "Priya", initials: "P", time: "09:00 – 17:00", status: "Clocked in", statusClass: "in", live: true },
  { name: "Marcus", initials: "M", time: "13:00 – 21:00", status: "Scheduled", statusClass: "scheduled", live: false },
  { name: "Aiko", initials: "A", time: "—", status: "On leave", statusClass: "leave", live: false },
  { name: "Diego", initials: "D", time: "09:00 – 13:00", status: "Clocked out", statusClass: "out", live: false },
];

const TAP_DELAY_MS = 1400;
const SETTLE_MS = 220;

export default function Hero() {
  const [tapping, setTapping] = useState(false);
  const [marcusIn, setMarcusIn] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setTapping(true), TAP_DELAY_MS);
    const t2 = setTimeout(() => setMarcusIn(true), TAP_DELAY_MS + SETTLE_MS);
    const t3 = setTimeout(() => setTapping(false), TAP_DELAY_MS + SETTLE_MS + 500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // Subtle parallax on the hero background as the page scrolls -- skipped
  // entirely for reduced-motion users.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (bgRef.current) {
          bgRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`;
        }
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const rows = BASE_ROWS.map((r) =>
    r.name === "Marcus" && marcusIn
      ? { ...r, status: "Clocked in", statusClass: "in", live: true }
      : r,
  );

  return (
    <section className="hero" id="top">
      <div className="hero-bg" ref={bgRef} aria-hidden="true">
        <span className="hero-dots" />
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="blob blob-c" />
        <span className="grain" />
      </div>

      <div className="hero-inner">
        <div className="hero-copy hero-fade-in">
          <p className="eyebrow">Staff scheduling &amp; workforce management</p>
          <h1>
            Keep every shift
            <span className="accent-text"> in line.</span>
          </h1>
          <p className="hero-sub">
            Scheduling, attendance, and payroll paperwork for shift-based teams, all in one place,
            so nothing falls through the cracks.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href={`${APP_URL}/signup`}>
              Start free trial
            </a>
            <button type="button" className="btn btn-ghost btn-lg" onClick={() => setDemoOpen(true)}>
              See demo
            </button>
          </div>
          <p className="hero-note">
            Free for 15 days, no credit card required. Works on any device, including as an
            installable app for the shop floor.
          </p>
          <div className="hero-trust">
            <span className="hero-trust-icon" aria-hidden="true">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12.5 9.5 18 20 6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Trusted by cafés, restaurants &amp; retail teams</span>
          </div>
        </div>

        <div className="hero-visual hero-fade-in hero-fade-in-delay" aria-hidden="true">
          <img
            className="hero-photo"
            src="/photos/role-manager.jpg"
            alt="A manager holding a tablet, smiling"
          />
          <div className="preview-card">
            <div className="preview-card-header">
              <span>Today's roster</span>
              <span className="preview-card-date">Mon 08</span>
            </div>
            <ul className="preview-rows">
              {rows.map((r) => (
                <li
                  key={r.name}
                  className={`preview-row ${r.name === "Marcus" && tapping ? "preview-row-tapped" : ""}`}
                >
                  <span className="preview-avatar">{r.initials}</span>
                  <span className="preview-name">{r.name}</span>
                  <span className="preview-time">{r.time}</span>
                  <span className={`preview-status ${r.statusClass}`}>
                    {r.live && <span className="live-dot" />}
                    {r.status}
                  </span>
                  {r.name === "Marcus" && tapping && (
                    <span className="tap-cursor">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M8 3v9.5M8 3 5.5 5.5M8 3l2.5 2.5M4 13.5 9 20c.6.8 1.6 1 2.5.7l6-2c1-.4 1.5-1.4 1.2-2.4l-1.6-5.6c-.3-1-1.3-1.6-2.3-1.3L13 10"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
