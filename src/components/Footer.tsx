import { APP_URL, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, LOCATION, WHATSAPP_URL } from "../config";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-col footer-brand-col">
          <a className="brand" href="#top">
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
          <a href="#features">Features</a>
          <a href="#roles">Who it's for</a>
          <a href="#why">Why Shiftline</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">Company</h3>
          <a href="#customers">Customers</a>
          <a href="#team">Talk with our team</a>
          <a href={`${APP_URL}/login`}>Log in</a>
          <a href={`${APP_URL}/login`}>Get started</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <p className="footer-copy">© {new Date().getFullYear()} Shiftline. All rights reserved.</p>
    </footer>
  );
}
