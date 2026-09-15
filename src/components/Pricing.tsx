import { useState } from "react";
import { APP_URL } from "../config";
import Reveal from "./Reveal";

type Billing = "monthly" | "yearly";

const PLANS = [
  {
    name: "Starter",
    tagline: "Perfect for small teams getting started.",
    monthly: 9.99,
    yearly: 8.99,
    monthlyExtra: 1.99,
    yearlyExtra: 1.79,
    note: "up to 5 employees",
    highlight: false,
  },
  {
    name: "Unlimited",
    tagline: "Best value once your team grows past a handful.",
    monthly: 19.99,
    yearly: 17.99,
    monthlyExtra: null,
    yearlyExtra: null,
    note: "unlimited employees",
    highlight: true,
  },
];

const FEATURES = [
  "Roster & shift scheduling",
  "Clock in/out with GPS and quarter-hour rounding",
  "Leave requests & approvals",
  "Payroll paperwork (payslips & contracts)",
  "Multi-company / multi-location support",
  "Team directory & smart notifications",
  "WhatsApp support",
];

function formatPrice(n: number) {
  return `€${n.toFixed(2)}`;
}

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section className="section" id="pricing">
      <div className="section-inner">
        <p className="eyebrow center">Pricing</p>
        <h2 className="section-title center">Simple pricing, free for 30 days</h2>
        <p className="section-sub center">
          Every plan includes every feature — pick the one that fits your team's size. No setup
          fees, no long-term contract.
        </p>

        <div className="billing-toggle">
          <button
            type="button"
            className={billing === "monthly" ? "billing-toggle-active" : ""}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            type="button"
            className={billing === "yearly" ? "billing-toggle-active" : ""}
            onClick={() => setBilling("yearly")}
          >
            Yearly <span className="billing-discount">-10%</span>
          </button>
        </div>

        <div className="pricing-grid">
          {PLANS.map((plan, i) => {
            const price = billing === "monthly" ? plan.monthly : plan.yearly;
            const extra = billing === "monthly" ? plan.monthlyExtra : plan.yearlyExtra;
            return (
              <Reveal key={plan.name} delay={i * 100} direction="scale">
                <div className={`pricing-card ${plan.highlight ? "pricing-card-highlight" : ""}`}>
                  {plan.highlight && <span className="pricing-badge">Best value</span>}
                  <h3 className="pricing-name">{plan.name}</h3>
                  <p className="pricing-tagline">{plan.tagline}</p>
                  <div className="pricing-price">
                    <span className="pricing-amount">{formatPrice(price)}</span>
                    <span className="pricing-note">
                      per month, {plan.note}
                      {billing === "yearly" && <><br />billed annually</>}
                    </span>
                  </div>
                  <p className="pricing-extra">
                    {extra ? `+ ${formatPrice(extra)}/month for each additional employee` : "No per-employee fees, ever"}
                  </p>
                  <a
                    className={`btn btn-lg ${plan.highlight ? "btn-primary" : "btn-ghost"}`}
                    href={`${APP_URL}/login`}
                  >
                    Start free trial
                  </a>
                  <p className="pricing-trial-note">30 days free, no credit card required.</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="pricing-shared">
          <p className="pricing-shared-title">Every plan includes:</p>
          <ul className="pricing-features pricing-features-wide">
            {FEATURES.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Reveal>

        <p className="pricing-footnote">
          Prices exclude VAT. Need a custom plan for a larger team? <a href="#contact">Talk to us</a>.
        </p>
      </div>
    </section>
  );
}
