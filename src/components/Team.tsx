import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, LOCATION, WHATSAPP_URL } from "../config";
import Reveal from "./Reveal";
import { WhatsAppIcon, LocationIcon } from "./icons";

export default function Team() {
  return (
    <section className="section section-alt" id="team">
      <div className="section-inner">
        <Reveal className="team-card">
          <img className="team-photo" src="/photos/team-sagar.jpg" alt="Sagar, from the Shiftline team" />
          <div className="team-copy">
            <p className="eyebrow">Talk with our team</p>
            <h2 className="section-title">Sagar</h2>
            <p className="team-location">
              <LocationIcon size={16} />
              {LOCATION}
            </p>
            <p className="section-sub team-sub">
              Questions about setting up your company, pricing, or anything else — reach out
              directly, any time.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-lg" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <WhatsAppIcon size={18} />
                <span style={{ marginLeft: 8 }}>Message on WhatsApp</span>
              </a>
              <a className="btn btn-ghost btn-lg" href={`tel:${CONTACT_PHONE_TEL}`}>
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
