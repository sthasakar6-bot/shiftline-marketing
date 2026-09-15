import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, LOCATION, WHATSAPP_URL } from "../config";
import Reveal from "./Reveal";
import { WhatsAppIcon, LocationIcon } from "./icons";

export default function Team() {
  return (
    <section className="section section-alt section-compact" id="team">
      <div className="section-inner">
        <Reveal className="team-card" direction="scale">
          <img className="team-photo" src="/photos/team-sagar.jpg" alt="Sakar, from the Shiftline team" />
          <div className="team-copy">
            <p className="eyebrow">Talk with our team</p>
            <h3 className="team-name">Sakar</h3>
            <p className="team-location">
              <LocationIcon size={14} />
              {LOCATION}
            </p>
            <p className="team-sub">
              Questions about setting up your company, pricing, or anything else — reach out
              directly, any time.
            </p>
            <div className="team-actions">
              <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <WhatsAppIcon size={16} />
                <span style={{ marginLeft: 7 }}>Message on WhatsApp</span>
              </a>
              <a className="btn btn-ghost" href={`tel:${CONTACT_PHONE_TEL}`}>
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
