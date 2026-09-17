import { useState } from "react";
import { APP_URL } from "../config";
import Reveal from "./Reveal";

type Billing = "monthly" | "yearly";

const ALL_FEATURES = [
  "Roster & shift scheduling",
  "Time & attendance (GPS + quarter-hour rounding)",
  "Leave requests & approvals",
  "Team directory",
  "Smart notifications",
  "Offline mode (installable app)",
  "Multi-language (English, Dutch, Nepali)",
  "Payroll paperwork (payslips & contracts)",
  "Multi-company / unlimited departments",
  "Priority WhatsApp support",
  "Custom features built for your business",
];

// Rows shown in the comparison table below the cards. "text" rows show a
// plain value per plan (employee/department limits); "bool" rows show a
// tick or cross. Restricted on Starter: payroll paperwork, multi-company/
// unlimited departments, and priority support -- kept core scheduling,
// attendance, leave, directory, notifications, offline, and language
// support available on every plan since those are the basics any team
// needs from day one.
const COMPARISON_ROWS: {
  label: string;
  trial: string | boolean;
  starter: string | boolean;
  unlimited: string | boolean;
}[] = [
  { label: "Employees", trial: "Unlimited", starter: "Up to 4", unlimited: "Unlimited" },
  { label: "Departments", trial: "Unlimited", starter: "Up to 2", unlimited: "Unlimited" },
  { label: "Roster & shift scheduling", trial: true, starter: true, unlimited: true },
  { label: "Time & attendance (GPS + rounding)", trial: true, starter: true, unlimited: true },
  { label: "Leave requests & approvals", trial: true, starter: true, unlimited: true },
  { label: "Team directory", trial: true, starter: true, unlimited: true },
  { label: "Smart notifications", trial: true, starter: true, unlimited: true },
  { label: "Offline mode (installable app)", trial: true, starter: true, unlimited: true },
  { label: "Multi-language (EN/NL/NE)", trial: true, starter: true, unlimited: true },
  { label: "Payroll paperwork (payslips & contracts)", trial: true, starter: false, unlimited: true },
  { label: "Multi-company / unlimited departments", trial: true, starter: false, unlimited: true },
  { label: "Priority WhatsApp support", trial: true, starter: false, unlimited: true },
  { label: "Custom features built for your business", trial: true, starter: false, unlimited: true },
];

function formatPrice(n: number) {
  return `€${n.toFixed(2)}`;
}

const YEARLY_DISCOUNT = 0.2;

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  const starterMonthly = 9.99;
  const unlimitedMonthly = 19.99;
  const starterExtraMonthly = 1.99;
  const starterExtra =
    billing === "monthly" ? starterExtraMonthly : starterExtraMonthly * (1 - YEARLY_DISCOUNT);
  const starterYearlyTotal = starterMonthly * 12 * (1 - YEARLY_DISCOUNT);
  const unlimitedYearlyTotal = unlimitedMonthly * 12 * (1 - YEARLY_DISCOUNT);

  return (
    <section className="section" id="pricing">
      <div className="section-inner">
        <p className="eyebrow center">Pricing</p>
        <h2 className="section-title center">Try everything free, then pick what fits</h2>
        <p className="section-sub center">
          Start with a full-featured 15-day trial. No setup fees, no long-term contract.
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
            Yearly <span className="billing-discount">-20%</span>
          </button>
        </div>

        <div className="pricing-grid pricing-grid-3">
          <Reveal direction="scale">
            <div className="pricing-card">
              <h3 className="pricing-name">Free trial</h3>
              <p className="pricing-tagline">Every feature, unlimited employees and departments.</p>
              <div className="pricing-price">
                <span className="pricing-amount">15 days</span>
                <span className="pricing-note">free, full access</span>
              </div>
              <p className="pricing-extra">No credit card required</p>
              <a className="btn btn-lg btn-ghost" href={`${APP_URL}/signup`}>
                Start free trial
              </a>
              <p className="pricing-trial-note">Then pick Starter or Unlimited. Cancel anytime.</p>
            </div>
          </Reveal>

          <Reveal delay={100} direction="scale">
            <div className="pricing-card">
              <h3 className="pricing-name">Starter</h3>
              <p className="pricing-tagline">For small teams, one location.</p>
              <div className="pricing-price">
                <span className="pricing-amount">
                  {billing === "monthly" ? formatPrice(starterMonthly) : formatPrice(starterYearlyTotal)}
                </span>
                <span className="pricing-note">
                  {billing === "monthly" ? (
                    "per month, up to 4 employees"
                  ) : (
                    <>
                      billed once a year
                      <br />
                      (up to 4 employees)
                    </>
                  )}
                </span>
              </div>
              <p className="pricing-extra">+ {formatPrice(starterExtra)}/month for each additional employee</p>
              <a className="btn btn-lg btn-ghost" href={`${APP_URL}/purchase?plan=starter&interval=${billing}`}>
                Get Starter
              </a>
              <p className="pricing-trial-note">
                {billing === "monthly" ? "Billed monthly" : "Billed yearly"}, cancel anytime.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200} direction="scale">
            <div className="pricing-card pricing-card-highlight">
              <span className="pricing-badge">Best value</span>
              <h3 className="pricing-name">Unlimited</h3>
              <p className="pricing-tagline">Every feature, every employee, every location.</p>
              <div className="pricing-price">
                <span className="pricing-amount">
                  {billing === "monthly" ? formatPrice(unlimitedMonthly) : formatPrice(unlimitedYearlyTotal)}
                </span>
                <span className="pricing-note">
                  {billing === "monthly" ? "per month, unlimited employees" : "billed once a year"}
                </span>
              </div>
              <p className="pricing-extra">No per-employee fees, ever</p>
              <a
                className="btn btn-lg btn-primary"
                href={`${APP_URL}/purchase?plan=unlimited&interval=${billing}`}
              >
                Get Unlimited
              </a>
              <p className="pricing-trial-note">
                {billing === "monthly" ? "Billed monthly" : "Billed yearly"}, cancel anytime.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="pricing-shared">
          <p className="pricing-shared-title">The 15-day trial includes every feature:</p>
          <ul className="pricing-features pricing-features-wide">
            {ALL_FEATURES.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="comparison-table-wrap">
          <p className="pricing-shared-title comparison-title">Compare plans</p>
          <div className="comparison-scroll">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Free trial</th>
                  <th>Starter</th>
                  <th>Unlimited</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.label}>
                    <td className="comparison-label">{row.label}</td>
                    {[row.trial, row.starter, row.unlimited].map((v, i) => (
                      <td key={i}>
                        {typeof v === "string" ? (
                          <span className="comparison-text">{v}</span>
                        ) : v ? (
                          <span className="comparison-mark comparison-tick" aria-label="Included">
                            ✓
                          </span>
                        ) : (
                          <span className="comparison-mark comparison-cross" aria-label="Not included">
                            ✕
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <p className="pricing-footnote">
          Prices exclude VAT. Need a custom plan for a larger team? <a href="#contact">Talk to us</a>.
        </p>
      </div>
    </section>
  );
}
