import Header from "../components/Header";
import Footer from "../components/Footer";
import { CONTACT_EMAIL, LOCATION } from "../config";

export default function DpaPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="legal-page-inner">
          <h1>Data Processing Agreement</h1>
          <p className="legal-updated">Last updated: 24 September 2026</p>

          <p>
            This Data Processing Agreement ("DPA") forms part of the agreement between your
            company ("Customer," the data controller) and Shiftline ("we," "us," the data
            processor) for use of the Shiftline service. It describes how we process personal
            data on your behalf and the safeguards we apply, in line with the EU General Data
            Protection Regulation (GDPR).
          </p>

          <div className="legal-callout">
            <strong>Data location notice:</strong> All personal data processed under this DPA is
            stored on servers located in Amsterdam, the Netherlands (EU) -- no data is transferred
            outside the EU.
          </div>

          <h2>1. Definitions</h2>
          <ul>
            <li>
              <strong>Controller</strong> -- you, the Customer, who determines the purposes and
              means of processing your company's and employees' personal data.
            </li>
            <li>
              <strong>Processor</strong> -- Shiftline, which processes personal data on your
              instructions, as configured through the app (schedules, attendance, payroll
              documents, messages).
            </li>
            <li>
              <strong>Sub-processor</strong> -- a third party Shiftline engages to help provide
              the service (listed in section 7).
            </li>
            <li>
              <strong>Data Subjects</strong> -- your employees and managers whose data is entered
              into Shiftline.
            </li>
          </ul>

          <h2>2. Subject matter and duration</h2>
          <p>
            This DPA applies for as long as Shiftline processes personal data on your behalf --
            i.e. for the duration of your subscription, plus any retention period described in
            our <a href="/privacy">Privacy Policy</a>.
          </p>

          <h2>3. Nature and purpose of processing</h2>
          <p>
            We process personal data solely to provide the Shiftline service: staff scheduling,
            time/attendance tracking, leave management, payroll document storage, team messaging,
            and account/billing administration. We do not process your data for any other
            purpose, and never sell it.
          </p>

          <h2>4. Categories of data subjects and personal data</h2>
          <p>
            <strong>Data subjects:</strong> your company's managers and employees.
          </p>
          <p>
            <strong>Categories of data:</strong> name, email, phone number, work role/department,
            shift and attendance records (including GPS location at clock-in/out, if you enable
            it), leave requests, uploaded contracts and payslips, and team chat messages.
          </p>

          <h2>5. Our obligations as processor</h2>
          <ul>
            <li>We process personal data only on your documented instructions (as configured through the app).</li>
            <li>We ensure our team is bound by confidentiality obligations.</li>
            <li>We implement appropriate technical and organizational security measures (see section 6).</li>
            <li>We only engage sub-processors listed in section 7, or with your prior notice of any change.</li>
            <li>We assist you in responding to data subject requests (access, correction, deletion, export) relating to your company's data.</li>
            <li>We notify you without undue delay after becoming aware of a personal data breach affecting your data.</li>
            <li>At the end of our agreement, we delete or return all personal data, unless we're legally required to retain it.</li>
            <li>We make available the information necessary to demonstrate compliance with this DPA upon reasonable request.</li>
          </ul>

          <h2>6. Security measures</h2>
          <ul>
            <li>Encryption in transit via HTTPS on every connection.</li>
            <li>Passwords hashed with argon2; we never store plaintext passwords.</li>
            <li>Role-based access control, limiting what managers vs. employees can see.</li>
            <li>Regular automated backups.</li>
            <li>Access to production data limited to Shiftline personnel who need it for support/maintenance.</li>
          </ul>

          <h2>7. Sub-processors</h2>
          <p>We currently use the following sub-processors, all of whom are contractually bound to protect your data:</p>
          <ul>
            <li>
              <strong>Railway</strong> -- application hosting and database storage, Amsterdam, EU.
            </li>
            <li>
              <strong>Vercel</strong> -- hosting for our marketing website.
            </li>
            <li>
              <strong>Mollie</strong> -- payment processing and subscription billing.
            </li>
          </ul>
          <p>
            We'll notify you if we add or change a sub-processor that would materially affect the
            processing of your data.
          </p>

          <h2>8. International transfers</h2>
          <p>
            We do not transfer personal data outside the European Union. All sub-processors
            listed above store and process data within the EU.
          </p>

          <h2>9. Data breach notification</h2>
          <p>
            If we become aware of a personal data breach affecting your data, we will notify you
            without undue delay, with enough information for you to meet your own notification
            obligations (including, where required, to the Dutch Data Protection Authority --
            Autoriteit Persoonsgegevens).
          </p>

          <h2>10. Deletion and return of data</h2>
          <p>
            Upon termination of your subscription, and at your request, we will delete or return
            all personal data we hold on your behalf, except where retention is required by law.
            You can also request deletion of specific data (e.g. a departed employee's record) at
            any time by contacting us.
          </p>

          <h2>11. Audit rights</h2>
          <p>
            You may request reasonable information demonstrating our compliance with this DPA. For
            a full audit, please contact us in advance to arrange a mutually convenient approach.
          </p>

          <h2>12. Contact</h2>
          <p>
            For any question about this DPA or to exercise your rights under it, contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, or by post at {LOCATION}.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
