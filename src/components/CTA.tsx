import { APP_URL } from "../config";

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta-inner">
        <h2>Ready to get your schedule under control?</h2>
        <p>Set up your company and add your team in a few minutes — no credit card required to start.</p>
        <div className="hero-actions center">
          <a className="btn btn-primary btn-lg" href={`${APP_URL}/login`}>
            Get started
          </a>
          <a className="btn btn-ghost-invert btn-lg" href="mailto:hello@shiftline.nl">
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
