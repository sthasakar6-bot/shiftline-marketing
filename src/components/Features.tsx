import { CalendarIcon, ClockIcon, LeafIcon, DocumentIcon, UsersIcon, BellIcon } from "./icons";

const FEATURES = [
  {
    icon: CalendarIcon,
    title: "Roster & shift scheduling",
    body: "Build the week's roster in minutes, group people by work location, and let any manager cover for another without waiting on approvals.",
  },
  {
    icon: ClockIcon,
    title: "Time & attendance",
    body: "Employees clock in and out from their phone, with GPS-tagged records and clean quarter-hour rounding so payroll math never comes out to '7h 23m'.",
  },
  {
    icon: LeafIcon,
    title: "Leave management",
    body: "Employees request time off, managers approve or decline from one queue, and the roster reflects who's actually available.",
  },
  {
    icon: DocumentIcon,
    title: "Payroll paperwork",
    body: "A dedicated bookkeeper role uploads payslips and contracts for the whole team — employees and managers alike — without touching sensitive HR settings.",
  },
  {
    icon: UsersIcon,
    title: "Team directory",
    body: "A read-only, company-wide directory so anyone can see who's on the team, their role, and where they're based.",
  },
  {
    icon: BellIcon,
    title: "Smart notifications",
    body: "Missed a clock-in or clock-out? Employees and managers get notified instantly — and the alert clears itself the moment it's resolved.",
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

        <div className="feature-grid">
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">
                <f.icon />
              </div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
