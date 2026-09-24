import Header from "../components/Header";
import Footer from "../components/Footer";
import { CONTACT_EMAIL, LOCATION } from "../config";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="legal-page-inner">
          <h1>Terms of Service</h1>
          <p className="legal-updated">Last updated: 24 September 2026</p>

          <p>
            These Terms of Service ("Terms") govern your use of Shiftline, a scheduling,
            attendance, and payroll-paperwork platform for shift-based teams. By creating an
            account, you agree to these Terms on behalf of yourself and, if you're signing up a
            company, on behalf of that company.
          </p>

          <h2>1. The service</h2>
          <p>
            Shiftline lets you create staff schedules, track time and attendance, manage leave,
            store payroll documents (contracts, payslips), and communicate with your team. We may
            add, change, or remove features over time as the product evolves.
          </p>

          <h2>2. Accounts</h2>
          <ul>
            <li>You must provide accurate information when creating your company and account.</li>
            <li>You're responsible for keeping your password secure and for all activity under your account.</li>
            <li>A manager account can add employee accounts; managers are responsible for the accuracy of data entered for their employees.</li>
          </ul>

          <h2>3. Subscription plans and free trial</h2>
          <ul>
            <li>New companies get a 15-day free trial with no credit card required.</li>
            <li>After the trial, continued use requires a paid subscription (Starter or Unlimited, billed monthly or yearly).</li>
            <li>Prices shown on our pricing page are exclusive of any applicable VAT, which is added at checkout.</li>
            <li>Subscriptions renew automatically each billing period until canceled.</li>
          </ul>

          <h2>4. Payment terms</h2>
          <ul>
            <li>Payments are processed by our payment provider, Mollie. We never see or store your full card/bank details.</li>
            <li>You authorize us to charge your chosen payment method automatically each renewal period.</li>
            <li>If a payment fails, we may retry it and/or notify you; continued failure may result in your account being downgraded or suspended.</li>
          </ul>

          <h2>5. Refund policy</h2>
          <p>
            Because the free trial gives you a full 15 days to evaluate the service before any
            payment is taken, subscription payments are generally non-refundable once a billing
            period has started. If you believe you were charged in error, contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we'll review it in good
            faith.
          </p>

          <h2>6. Cancellation</h2>
          <p>
            You can cancel your subscription at any time from your billing settings. Cancellation
            takes effect at the end of your current billing period -- you keep access until then,
            and won't be charged again afterward.
          </p>

          <h2>7. Your responsibilities</h2>
          <ul>
            <li>Only enter personal data (e.g. about employees) that you're legally entitled to process, and inform your employees as required under applicable law.</li>
            <li>Use the service in compliance with applicable labor, payroll, and data protection laws in your jurisdiction.</li>
            <li>Keep your account credentials confidential.</li>
          </ul>

          <h2>8. Prohibited actions</h2>
          <p>You may not:</p>
          <ul>
            <li>Use the service for any unlawful purpose, or to store/transmit data you don't have the right to</li>
            <li>Attempt to gain unauthorized access to any part of the system or another company's data</li>
            <li>Reverse engineer, scrape, or resell the service without our written permission</li>
            <li>Introduce malware or attempt to disrupt the service's availability</li>
          </ul>

          <h2>9. Data protection</h2>
          <p>
            Our handling of personal data is described in our{" "}
            <a href="/privacy">Privacy Policy</a> and, for business customers, our{" "}
            <a href="/dpa">Data Processing Agreement</a>, both of which form part of these Terms.
          </p>

          <h2>10. Service availability</h2>
          <p>
            We aim to keep Shiftline available and reliable, but we don't guarantee uninterrupted
            access -- occasional maintenance or unforeseen issues may cause downtime. We'll make
            reasonable efforts to minimize disruption and to notify you of planned maintenance.
          </p>

          <h2>11. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, Shiftline is provided "as is." We are not
            liable for indirect, incidental, or consequential damages arising from your use of the
            service. Our total liability for any claim relating to the service is limited to the
            amount you paid us in the 12 months preceding the claim.
          </p>

          <h2>12. Termination</h2>
          <p>
            We may suspend or terminate an account that violates these Terms, engages in unlawful
            activity, or has an unresolved payment failure. You may stop using the service and
            cancel your subscription at any time.
          </p>

          <h2>13. Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. Material changes will be reflected here
            with an updated "Last updated" date, and where appropriate, we'll notify you directly.
          </p>

          <h2>14. Contact</h2>
          <p>
            Questions about these Terms? Reach us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, or by post at {LOCATION}.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
