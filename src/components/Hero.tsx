import { APP_URL } from "../config";

const PREVIEW_ROWS = [
  { name: "Priya", initials: "P", time: "09:00 – 17:00", status: "Clocked in", statusClass: "in" },
  { name: "Marcus", initials: "M", time: "13:00 – 21:00", status: "Scheduled", statusClass: "scheduled" },
  { name: "Aiko", initials: "A", time: "—", status: "On leave", statusClass: "leave" },
  { name: "Diego", initials: "D", time: "09:00 – 13:00", status: "Clocked out", statusClass: "out" },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Staff scheduling &amp; workforce management</p>
          <h1>
            Scheduling, attendance, and payroll paperwork —<span className="accent-text"> in one place</span>
          </h1>
          <p className="hero-sub">
            Shiftline gives every team a clear roster, accurate clock-in/out records, and a single
            place for leave requests, contracts, and payslips — no spreadsheets, no chasing paper.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href={`${APP_URL}/login`}>
              Get started
            </a>
            <a className="btn btn-ghost btn-lg" href="#features">
              See how it works
            </a>
          </div>
          <p className="hero-note">Works on any device — including as an installable app for the shop floor.</p>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="preview-card">
            <div className="preview-card-header">
              <span>Today's roster</span>
              <span className="preview-card-date">Mon 08</span>
            </div>
            <ul className="preview-rows">
              {PREVIEW_ROWS.map((r) => (
                <li key={r.name} className="preview-row">
                  <span className="preview-avatar">{r.initials}</span>
                  <span className="preview-name">{r.name}</span>
                  <span className="preview-time">{r.time}</span>
                  <span className={`preview-status ${r.statusClass}`}>{r.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
