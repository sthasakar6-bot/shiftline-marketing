import type { CSSProperties } from "react";
import Reveal from "./Reveal";
import { UsersIcon, LeafIcon } from "./icons";

const SHOWCASE = [
  {
    id: "roster",
    image: "/photos/app/roster.png",
    alt: "The Shiftline roster grid showing a full week of shifts for a small team",
    tag: "Roster & shift scheduling",
    title: "Build the week in minutes, not a Sunday night",
    body: "Group people by work location, cover a colleague's shift without a chain of approvals, and see the whole team's week at a glance.",
    color: "var(--accent)",
  },
  {
    id: "attendance",
    image: "/photos/app/attendance.png",
    alt: "The Shiftline attendance tracking grid showing clock-in and clock-out times with GPS location for the whole team",
    tag: "Time & attendance",
    title: "GPS-tagged clock in, clock out",
    body: "Employees clock in and out from any phone with their location attached, and every punch rounds itself to the nearest quarter hour — payroll never comes out to '7h 23m' again.",
    color: "var(--accent-teal)",
  },
  {
    id: "payroll",
    image: "/photos/app/payroll.png",
    alt: "The Shiftline payroll grid showing every employee's role, contract dates, and payslips at once",
    tag: "Payroll paperwork",
    title: "Payslips and contracts, uploaded once and always findable",
    body: "A dedicated administration role handles paperwork for the whole team, while everyone can pull up their own documents anytime.",
    color: "var(--accent-2)",
  },
  {
    id: "notifications",
    image: "/photos/app/notifications.png",
    alt: "The Shiftline notifications panel showing a sick-leave notice and a vacation request from staff",
    tag: "Smart notifications",
    title: "Know the moment something needs you",
    body: "A sick-day call-in, a vacation request, a missed clock-in — every alert reaches the right person and clears itself once it's resolved.",
    color: "var(--accent-pink)",
  },
];

const MORE = [
  {
    icon: LeafIcon,
    title: "Leave management",
    body: "Employees request time off, managers approve from one queue, and the roster reflects who's actually available.",
  },
  {
    icon: UsersIcon,
    title: "Team directory",
    body: "A read-only, company-wide directory so anyone can see who's on the team and where they're based.",
  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="section-inner">
        <p className="eyebrow center">Everything a shift-based team needs</p>
        <h2 className="section-title center">One app, not five spreadsheets</h2>
        <p className="section-sub center">
          Shiftline replaces the roster spreadsheet, the paper timesheet, the leave request thread,
          and the folder of payslip PDFs — with one place everyone already knows how to use.
        </p>

        <div className="showcase">
          {SHOWCASE.map((f) => (
            <Reveal
              key={f.title}
              id={f.id}
              direction="up"
              className="showcase-row"
              style={{ "--tag-color": f.color } as CSSProperties}
            >
              <div className="showcase-copy">
                <span className="showcase-tag">{f.tag}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
              <div className="showcase-visual-frame">
                <img className="showcase-screenshot" src={f.image} alt={f.alt} loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="feature-grid feature-grid-compact">
          {MORE.map((f, i) => (
            <Reveal key={f.title} delay={i * 90} direction="scale">
              <div className="feature-card">
                <div className="feature-icon">
                  <f.icon />
                </div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
