import { APP_URL, CONTACT_EMAIL, WHATSAPP_URL } from "../config";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./icons";

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <span className="cta-glow" aria-hidden="true" />
      <Reveal className="cta-inner">
        <h2>Ready to get your schedule under control?</h2>
        <p>Set up your company and add your team in a few minutes — free for 15 days, no credit card required.</p>
        <div className="hero-actions center">
          <a className="btn btn-primary-invert btn-lg" href={`${APP_URL}/login`}>
            Start your free trial
          </a>
          <a className="btn btn-ghost-invert btn-lg" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={18} />
            <span style={{ marginLeft: 8 }}>Chat on WhatsApp</span>
          </a>
        </div>
        <div className="cta-contacts">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </Reveal>
    </section>
  );
}
