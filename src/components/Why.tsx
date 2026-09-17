import type { CSSProperties } from "react";
import { LocationIcon, GlobeIcon, OfflineIcon, BellIcon } from "./icons";
import Reveal from "./Reveal";

const REASONS = [
  {
    icon: LocationIcon,
    title: "Multi-location, multi-company",
    body: "Manage several businesses or locations under one login, with each company's roster and team kept separate.",
    color: "var(--accent-ai)",
  },
  {
    icon: GlobeIcon,
    title: "Speaks your team's language",
    body: "Available in English, Dutch, and Nepali, with more on the way as your team grows.",
    color: "var(--accent-teal)",
  },
  {
    icon: OfflineIcon,
    title: "Works offline",
    body: "Clock in and out even with a weak signal. It syncs automatically the moment you're back online.",
    color: "var(--accent-pink)",
  },
  {
    icon: BellIcon,
    title: "Nothing falls through the cracks",
    body: "Automatic alerts for missed clock-ins and clock-outs, cleared the instant they're resolved.",
    color: "var(--accent-2)",
  },
];

export default function Why() {
  return (
    <section className="section" id="why">
      <div className="section-inner">
        <p className="eyebrow center">Why teams switch to Shiftline</p>
        <h2 className="section-title center">Built for the way shift work actually happens</h2>

        <div className="why-grid">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 80} style={{ "--tag-color": r.color } as CSSProperties}>
              <div className="why-card">
                <div className="feature-icon feature-icon-sm">
                  <r.icon size={19} />
                </div>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
