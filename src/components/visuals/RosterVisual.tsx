import type { CSSProperties } from "react";

const BARS = [
  { h: 62, c: "a" },
  { h: 88, c: "b" },
  { h: 40, c: "a" },
  { h: 74, c: "c" },
  { h: 56, c: "b" },
];

export default function RosterVisual() {
  return (
    <div className="mini-visual roster-visual" aria-hidden="true">
      <div className="roster-visual-grid">
        {BARS.map((b, i) => (
          <div key={i} className="roster-visual-col">
            <span
              className={`roster-visual-bar roster-visual-bar-${b.c}`}
              style={{ "--h": `${b.h}%`, transitionDelay: `${i * 80}ms` } as CSSProperties}
            />
          </div>
        ))}
      </div>
      <div className="roster-visual-axis">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
      </div>
    </div>
  );
}
