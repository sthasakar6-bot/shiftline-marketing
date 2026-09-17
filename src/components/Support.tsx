import { CONTACT_EMAIL, WHATSAPP_URL } from "../config";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./icons";

export default function Support() {
  return (
    <section className="support-band">
      <Reveal className="section-inner support-band-inner">
        <h2 className="section-title center">Do you have another question?</h2>
        <p className="section-sub center support-band-sub">
          Reach out any time, we're happy to help.
        </p>
        <div className="hero-actions center">
          <a className="btn btn-primary btn-lg" href={`mailto:${CONTACT_EMAIL}`}>
            Send us a message
          </a>
          <a className="btn btn-ghost btn-lg" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={18} />
            <span style={{ marginLeft: 8 }}>Chat with support</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
