import { APP_URL } from "../config";
import Reveal from "./Reveal";

const PLANS = [
  {
    name: "Free",
    tagline: "For small teams ready to leave spreadsheets behind.",
    price: "€0",
    priceNote: "forever, up to 5 employees",
    features: [
      "Roster & shift scheduling",
      "Clock in/out with GPS and quarter-hour rounding",
      "Leave requests",
      "No credit card required",
    ],
    cta: "Get started free",
    highlight: false,
  },
  {
    name: "Pro",
    tagline: "For growing teams that need everything in one place.",
    price: "€4",
    priceNote: "per employee / month, billed monthly",
    features: [
      "Everything in Free",
      "Unlimited employees",
      "Payroll paperwork (payslips & contracts)",
      "Multi-company / multi-location support",
      "Team directory & smart notifications",
      "WhatsApp support",
    ],
    cta: "Start with Pro",
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="section-inner">
        <p className="eyebrow center">Pricing</p>
        <h2 className="section-title center">Simple pricing, no surprises</h2>
        <p className="section-sub center">
          Start free, upgrade when your team outgrows it. No setup fees, no long-term contracts.
        </p>

        <div className="pricing-grid">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} direction="scale">
              <div className={`pricing-card ${plan.highlight ? "pricing-card-highlight" : ""}`}>
                {plan.highlight && <span className="pricing-badge">Most popular</span>}
                <h3 className="pricing-name">{plan.name}</h3>
                <p className="pricing-tagline">{plan.tagline}</p>
                <div className="pricing-price">
                  <span className="pricing-amount">{plan.price}</span>
                  <span className="pricing-note">{plan.priceNote}</span>
                </div>
                <a
                  className={`btn btn-lg ${plan.highlight ? "btn-primary" : "btn-ghost"}`}
                  href={`${APP_URL}/login`}
                >
                  {plan.cta}
                </a>
                <ul className="pricing-features">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="pricing-footnote">
          Prices exclude VAT. Need a custom plan for a larger team? <a href="#contact">Talk to us</a>.
        </p>
      </div>
    </section>
  );
}
