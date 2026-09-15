const ROLES = [
  {
    tag: "Employee",
    title: "Clock in, check the schedule, done",
    points: [
      "See upcoming shifts and clock in/out in a tap",
      "Request leave and track its status",
      "View your own payslips and contracts anytime",
    ],
  },
  {
    tag: "Manager",
    title: "Run the team without the busywork",
    points: [
      "Build and adjust the roster for anyone in the company",
      "Approve or decline leave requests from one queue",
      "See hours worked, attendance, and no-show alerts as they happen",
    ],
  },
  {
    tag: "Bookkeeper",
    title: "Payroll paperwork, nothing else",
    points: [
      "Upload payslips and contracts for the whole team",
      "See hours worked this month, ready for payroll",
      "Scoped access — no rosters, no HR settings, no distractions",
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
          {ROLES.map((r) => (
            <div className="role-card" key={r.tag}>
              <span className="role-tag">{r.tag}</span>
              <h3>{r.title}</h3>
              <ul>
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
