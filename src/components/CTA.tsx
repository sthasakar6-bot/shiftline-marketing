import { APP_URL, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, WHATSAPP_URL } from "../config";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./icons";

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <span className="cta-glow" aria-hidden="true" />
      <Reveal className="cta-inner">
        <h2>Ready to get your schedule under control?</h2>
        <p>Set up your company and add your team in a few minutes — no credit card required to start.</p>
        <div className="hero-actions center">
          <a className="btn btn-primary-invert btn-lg" href={`${APP_URL}/login`}>
            Get started
          </a>
          <a className="btn btn-ghost-invert btn-lg" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={18} />
            <span style={{ marginLeft: 8 }}>Chat on WhatsApp</span>
          </a>
        </div>
        <div className="cta-contacts">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <span className="cta-contacts-sep" aria-hidden="true">
            ·
          </span>
          <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE_DISPLAY}</a>
        </div>
      </Reveal>
    </section>
  );
}
