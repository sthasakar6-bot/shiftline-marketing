import Reveal from "./Reveal";
import RosterVisual from "./visuals/RosterVisual";
import AttendanceVisual from "./visuals/AttendanceVisual";
import PayrollVisual from "./visuals/PayrollVisual";
import { UsersIcon, BellIcon, LeafIcon } from "./icons";

const SHOWCASE = [
  {
    Visual: RosterVisual,
    tag: "Roster & shift scheduling",
    title: "Build the week in minutes, not a Sunday night",
    body: "Group people by work location, cover a colleague's shift without a chain of approvals, and see the whole team's week at a glance.",
  },
  {
    Visual: AttendanceVisual,
    tag: "Time & attendance",
    title: "Clock in/out that rounds itself to clean numbers",
    body: "GPS-tagged clock in/out from any phone, with quarter-hour rounding built in — payroll never comes out to '7h 23m' again.",
  },
  {
    Visual: PayrollVisual,
    tag: "Payroll paperwork",
    title: "Payslips and contracts, uploaded once and always findable",
    body: "A dedicated bookkeeper role handles paperwork for the whole team, while everyone can pull up their own documents anytime.",
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
  {
    icon: BellIcon,
    title: "Smart notifications",
    body: "Missed a clock-in or clock-out? The alert reaches everyone who needs it, and clears itself once it's resolved.",
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
          {SHOWCASE.map((f, i) => (
            <Reveal key={f.title} className={`showcase-row ${i % 2 === 1 ? "showcase-row-reverse" : ""}`}>
              <div className="showcase-visual-frame">
                <f.Visual />
              </div>
              <div className="showcase-copy">
                <span className="showcase-tag">{f.tag}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="feature-grid feature-grid-compact">
          {MORE.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
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
