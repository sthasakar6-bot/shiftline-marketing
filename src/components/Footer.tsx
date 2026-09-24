import { APP_URL, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, LOCATION, WHATSAPP_URL } from "../config";
import { reopenCookieBanner } from "./CookieBanner";

// Mollie's own hosted icon set -- the same assets shown on Mollie's checkout
// page itself, kept in sync with whichever methods are actually activated on
// the account (see billing/providers/mollie.ts in the backend).
// SEPA Direct Debit is deliberately left out here -- it's never something a
// customer picks directly at checkout (Mollie sets it up automatically
// behind the scenes for recurring renewal charges after the first payment),
// and its icon is visually identical to Bank Transfer's, which already
// covers the "SEPA" branding customers would recognize.
const PAYMENT_METHODS = [
  { id: "ideal", label: "iDEAL" },
  { id: "creditcard", label: "Credit card" },
  { id: "applepay", label: "Apple Pay" },
  { id: "googlepay", label: "Google Pay" },
  { id: "paypal", label: "PayPal" },
  { id: "banktransfer", label: "Bank transfer" },
  { id: "paybybank", label: "Pay by Bank" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-col footer-brand-col">
          <a className="brand" href="/#top">
            <img src="/icon-192.png" alt="" className="brand-icon" />
            <span className="brand-text">Shiftline</span>
          </a>
          <p className="footer-tagline">Scheduling, attendance, and payroll paperwork in one place.</p>
          <div className="footer-contact">
            <span>{LOCATION}</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE_DISPLAY}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">Product</h3>
          <a href="/#features">Features</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#roles">Who it's for</a>
          <a href="/#why">Why Shiftline</a>
          <a href="/#faq">FAQ</a>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">Company</h3>
          <a href="/#customers">Customers</a>
          <a href="/#team">Talk with our team</a>
          <a href={`${APP_URL}/login`}>Log in</a>
          <a href={`${APP_URL}/signup`}>Get started</a>
          <a href="/#contact">Contact</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/dpa">Data Processing Agreement</a>
          <button type="button" className="footer-link-btn" onClick={reopenCookieBanner}>
            Cookie settings
          </button>
        </div>
      </div>

      <div className="footer-payment-methods">
        <span className="footer-payment-methods-label">Secure payments</span>
        <ul className="footer-payment-methods-list">
          {PAYMENT_METHODS.map((method) => (
            <li key={method.id} title={method.label}>
              <img
                src={`https://www.mollie.com/external/icons/payment-methods/${method.id}.svg`}
                alt={method.label}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>

      <p className="footer-copy">© {new Date().getFullYear()} Shiftline. All rights reserved.</p>
    </footer>
  );
}
