import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, WHATSAPP_URL } from "../config";
import Reveal from "./Reveal";
import { MailIcon, PhoneIcon, ChatIcon } from "./icons";

export default function Team() {
  return (
    <section className="section section-alt" id="team">
      <div className="section-inner team-inner">
        <Reveal className="team-copy-col" direction="left">
          <span className="eyebrow eyebrow-gradient">Get in touch</span>
          <h2 className="team-heading">
            Questions before <br />
            you sign up?
          </h2>
          <p className="team-sub">
            Tell us how many people you plan and across how many locations, and we'll tell you
            which plan fits, Starter included, if that's the honest answer.
          </p>
        </Reveal>

        <Reveal className="team-photo-col" direction="up" delay={120}>
          <img className="team-photo-full" src="/photos/team-sagar.jpg" alt="Sakar, from the Shiftline team" />
          <div className="team-float-card">
            <p className="team-name">Talk to Sakar</p>
            <p className="team-sub-card">
              Sakar and the team do this every day. Ask what a plan covers and what you need
              ready beforehand.
            </p>
            <p className="team-hours">Monday to Friday, 09:00 to 18:00 CET.</p>
            <div className="team-contact-row">
              <a className="team-contact-link" href="mailto:hello@shiftline.nl">
                <MailIcon size={15} />
                Email
              </a>
              <a className="team-contact-link" href={`tel:${CONTACT_PHONE_TEL}`}>
                <PhoneIcon size={15} />
                Call
                <span className="team-dot" />
              </a>
              <a className="team-contact-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <ChatIcon size={15} />
                Chat
                <span className="team-dot" />
              </a>
            </div>
            <p className="team-phone-note">{CONTACT_PHONE_DISPLAY}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
