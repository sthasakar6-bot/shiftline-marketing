import Header from "../components/Header";
import Footer from "../components/Footer";
import { CONTACT_EMAIL, LOCATION } from "../config";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="legal-page-inner">
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: 24 September 2026</p>

          <p>
            Shiftline ("we," "us," "our") provides scheduling, attendance, and payroll-paperwork
            software for shift-based teams. This policy explains what personal data we collect,
            why we collect it, where it's stored, how long we keep it, and how you can access,
            correct, export, or delete it. If you're a Shiftline customer looking for the details
            of how we process your company's data as a processor, see our{" "}
            <a href="/dpa">Data Processing Agreement</a>.
          </p>

          <div className="legal-callout">
            <strong>Data location notice:</strong> Your data is stored on secure servers located
            in Amsterdam, the Netherlands (EU).
          </div>

          <h2>1. What data we collect</h2>
          <p>Depending on how you use Shiftline, we collect:</p>
          <ul>
            <li>
              <strong>Account &amp; company details</strong> -- name, email, phone number, company
              name, KVK/VAT number, business address, and role, provided when you sign up or when
              a manager adds you as an employee.
            </li>
            <li>
              <strong>Scheduling &amp; attendance data</strong> -- shifts, clock-in/clock-out
              times, GPS location at clock-in/out (if your employer enables it), leave requests,
              and department/role assignments.
            </li>
            <li>
              <strong>Payroll-related documents</strong> -- contracts and payslips uploaded by
              your employer, stored so your team can access them.
            </li>
            <li>
              <strong>Messages</strong> -- team chat messages sent within the app.
            </li>
            <li>
              <strong>Billing data</strong> -- handled by our payment processor Mollie; we store
              only a reference ID to your Mollie customer/subscription record, never your full
              card or bank details.
            </li>
            <li>
              <strong>Technical data</strong> -- device/browser type and basic usage logs, needed
              to keep the app secure and working correctly.
            </li>
          </ul>

          <h2>2. Why we collect it</h2>
          <p>We only collect data needed to:</p>
          <ul>
            <li>Provide the scheduling, attendance, and payroll features you sign up for</li>
            <li>Authenticate you and keep your account secure</li>
            <li>Process payments and manage your subscription</li>
            <li>Respond to support requests</li>
            <li>Meet legal/tax record-keeping obligations where applicable</li>
          </ul>
          <p>
            With your consent (see our cookie banner), we may also use analytics or marketing
            cookies to understand site usage. Nothing beyond strictly necessary cookies is set
            without your permission.
          </p>

          <h2>3. Where your data is stored, and for how long</h2>
          <p>
            Your data is stored on servers located in Amsterdam, the Netherlands (EU), operated by
            our infrastructure providers (Railway for the application and database, Vercel for
            this website). We keep your data for as long as your account is active, plus a
            reasonable period afterward to meet legal/accounting retention requirements, unless
            you request earlier deletion (see below).
          </p>

          <h2>4. Your rights: access, export, and deletion</h2>
          <p>Under GDPR, you can at any time:</p>
          <ul>
            <li>Request a copy of the personal data we hold about you (data export)</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your account and associated data</li>
            <li>Object to or restrict certain processing</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We'll respond within 30 days.
            If you're an employee added by a manager, some requests (e.g. full account deletion)
            may need to go through your employer, since they administer your company's account.
          </p>

          <h2>5. Who has access to your data</h2>
          <p>
            Access is limited to: your own company's managers (for data relevant to running their
            team's schedule), Shiftline's own team for support and maintenance purposes, and our
            infrastructure/payment providers listed below, strictly to the extent needed to
            operate the service. We never sell your data.
          </p>

          <h2>6. Third-party services we use</h2>
          <ul>
            <li>
              <strong>Mollie</strong> -- payment processing and subscription billing.
            </li>
            <li>
              <strong>Railway</strong> -- application hosting and database (Amsterdam, EU).
            </li>
            <li>
              <strong>Vercel</strong> -- hosting for this marketing website.
            </li>
          </ul>
          <p>
            We do not currently use any analytics or advertising services. If that changes, this
            policy and our cookie banner will be updated, and any such cookies will only load with
            your consent.
          </p>

          <h2>7. Security</h2>
          <p>We protect your data with:</p>
          <ul>
            <li>HTTPS encryption on every connection</li>
            <li>Passwords hashed with argon2 (a modern, one-way hashing algorithm) -- we never store your actual password</li>
            <li>Role-based access control (managers vs. employees see only what they should)</li>
            <li>Regular backups</li>
          </ul>

          <h2>8. Data breach notification</h2>
          <p>
            If a security incident affects your personal data, we will notify affected users and,
            where legally required, the Dutch Data Protection Authority (Autoriteit
            Persoonsgegevens), without undue delay.
          </p>

          <h2>9. Cookies</h2>
          <p>
            We use only strictly necessary cookies by default. Any analytics or marketing cookies
            require your explicit consent via the cookie banner shown when you first visit, which
            you can reopen anytime via "Cookie settings" in the footer.
          </p>

          <h2>10. Changes to this policy</h2>
          <p>
            We may update this policy as Shiftline evolves. Material changes will be reflected
            here with an updated "Last updated" date.
          </p>

          <h2>11. Contact us</h2>
          <p>
            For any privacy question or request, reach us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, or by post at {LOCATION}.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
