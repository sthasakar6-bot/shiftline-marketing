import Reveal from "./Reveal";

const OLD_WAY = [
  "Every week, hours of manual work figuring out who's actually available.",
  "A forgotten leave request that never makes it onto the schedule.",
  "A colleague paid wrong because the hours were off.",
];

const NEW_WAY = [
  "Everything in place to build a schedule that adds up, fast.",
  "Your team swaps shifts and requests leave in the app. You approve, you don't chase.",
  "Approved hours flow straight into payroll, no re-entry.",
];

export default function Compare() {
  return (
    <section className="section" id="compare">
      <div className="section-inner">
        <Reveal direction="up">
          <h2 className="compare-heading">
            Spreadsheets aren't built for scheduling. Shiftline is.
          </h2>
        </Reveal>

        <div className="compare-grid">
          <Reveal direction="left" className="compare-card compare-card-old">
            <h3>The old way</h3>
            <ul>
              {OLD_WAY.map((item) => (
                <li key={item}>
                  <span className="compare-icon compare-icon-x" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right" delay={100} className="compare-card compare-card-new">
            <h3>With Shiftline</h3>
            <ul>
              {NEW_WAY.map((item) => (
                <li key={item}>
                  <span className="compare-icon compare-icon-check" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M4 12.5 9.5 18 20 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
