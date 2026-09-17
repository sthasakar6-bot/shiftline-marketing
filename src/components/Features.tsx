import { useState, type CSSProperties } from "react";
import Reveal from "./Reveal";

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
    body: "Employees clock in and out from any phone with their location attached, and every punch rounds itself to the nearest quarter hour, so payroll never comes out to '7h 23m' again.",
    color: "var(--accent-teal)",
  },
  {
    id: "clockin",
    image: "/photos/app/clockin.png",
    alt: "The Shiftline clock-in screen showing today's shift and a one-tap Clock In button",
    tag: "Clock in / Clock out",
    title: "One tap to clock in, one tap to clock out",
    body: "No punch card, no separate app. Employees see today's shift right on their phone and clock in or out with a single tap, timestamped and location-tagged automatically.",
    color: "#15803d",
  },
  {
    id: "leave",
    image: "/photos/app/leave.png",
    alt: "The Shiftline leave approvals screen showing a pending vacation request and upcoming sick leave",
    tag: "Leave",
    title: "One queue for every time-off request",
    body: "Employees request time off, managers approve or reject from a single queue, and the roster reflects who's actually available.",
    color: "var(--accent-solid)",
  },
  {
    id: "hr",
    image: "/photos/app/hr.png",
    alt: "The Shiftline team management screen showing every employee in the company",
    tag: "HR",
    title: "A team directory that's always up to date",
    body: "Every employee in one place. Add, edit, or offboard someone in a few clicks, with roles and access handled automatically.",
    color: "var(--accent-ai)",
  },
  {
    id: "communication",
    image: "/photos/app/communication.png",
    alt: "The Shiftline team chat showing a manager and employees messaging about a shift",
    tag: "Communication",
    title: "One chat, not five group texts",
    body: "A shared team chat built into the same app as the roster, so shift chatter never gets lost in WhatsApp.",
    color: "var(--accent-pink)",
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
    body: "A sick-day call-in, a vacation request, a missed clock-in: every alert reaches the right person and clears itself once it's resolved.",
    color: "var(--accent-ai-2)",
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const f = SHOWCASE[active];

  return (
    <section className="section" id="features">
      <div className="section-inner">
        <Reveal direction="up" className="showcase-switcher">
          <div className="showcase-tabbar" role="tablist" aria-label="Shiftline features">
            {SHOWCASE.map((s, i) => (
              <button
                key={s.id}
                id={s.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={`showcase-tab ${i === active ? "showcase-tab-active" : ""}`}
                style={i === active ? { background: s.color, borderColor: s.color } : undefined}
                onClick={() => setActive(i)}
              >
                {s.tag}
              </button>
            ))}
          </div>

          <div className="showcase-panel" style={{ "--tag-color": f.color } as CSSProperties}>
            <div className="showcase-copy">
              <h3 key={`t-${f.id}`}>{f.title}</h3>
              <p key={`b-${f.id}`}>{f.body}</p>
            </div>
            <div className="showcase-visual-frame showcase-visual-frame-static">
              <img key={f.image} className="showcase-screenshot" src={f.image} alt={f.alt} loading="lazy" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
