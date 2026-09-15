import { LocationIcon, GlobeIcon, OfflineIcon, BellIcon } from "./icons";

const REASONS = [
  {
    icon: LocationIcon,
    title: "Multi-location, multi-company",
    body: "Manage several businesses or locations under one login, with each company's roster and team kept separate.",
  },
  {
    icon: GlobeIcon,
    title: "Speaks your team's language",
    body: "Available in English, Dutch, and Nepali — with more on the way as your team grows.",
  },
  {
    icon: OfflineIcon,
    title: "Works offline",
    body: "Clock in and out even with a weak signal — it syncs automatically the moment you're back online.",
  },
  {
    icon: BellIcon,
    title: "Nothing falls through the cracks",
    body: "Automatic alerts for missed clock-ins and clock-outs, cleared the instant they're resolved.",
  },
];

export default function Why() {
  return (
    <section className="section" id="why">
      <div className="section-inner">
        <p className="eyebrow center">Why teams switch to Shiftline</p>
        <h2 className="section-title center">Built for the way shift work actually happens</h2>

        <div className="why-grid">
          {REASONS.map((r) => (
            <div className="why-card" key={r.title}>
              <div className="feature-icon feature-icon-sm">
                <r.icon size={19} />
              </div>
              <div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
