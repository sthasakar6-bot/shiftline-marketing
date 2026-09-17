import type { CSSProperties } from "react";
import Reveal from "./Reveal";

const ROLES = [
  {
    tag: "Employee",
    photo: "/photos/barista.jpg",
    title: "Clock in, check the schedule, done",
    color: "var(--accent-teal)",
    points: [
      "Clock in and out in a single tap",
      "Request leave and track approval status",
      "Payslips and contracts, always on hand",
    ],
  },
  {
    tag: "Manager",
    photo: "/photos/role-manager-2.jpg",
    title: "Run the team without the busywork",
    color: "var(--accent)",
    points: [
      "Build and adjust the roster for the whole team",
      "One queue for every leave request",
      "Instant alerts on attendance and no-shows",
    ],
  },
  {
    tag: "Administration",
    photo: "/photos/role-admin.jpg",
    title: "Payroll paperwork, nothing else",
    color: "var(--accent-2)",
    points: [
      "Upload payslips and contracts in one place",
      "Monthly hours, export-ready for payroll",
      "Scoped access, no rosters, no distractions",
    ],
  },
];

export default function Roles() {
  return (
    <section className="section section-alt" id="roles">
      <div className="section-inner">
        <p className="eyebrow center">Built for every role</p>
        <h2 className="section-title center">Everyone gets the view they actually need</h2>

        <div className="roles-grid">
          {ROLES.map((r, i) => (
            <Reveal
              key={r.tag}
              delay={i * 100}
              direction="scale"
              style={{ "--tag-color": r.color } as CSSProperties}
            >
              <div className="role-card">
                <div className="role-photo-frame">
                  <img className="role-photo" src={r.photo} alt="" />
                </div>
                <div className="role-card-body">
                  <span className="role-tag">{r.tag}</span>
                  <h3>{r.title}</h3>
                  <ul>
                    {r.points.map((p) => (
                      <li key={p}>
                        <span className="role-check" aria-hidden="true">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                            <path d="M4 12.5 9.5 18 20 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
