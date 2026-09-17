import Reveal from "./Reveal";

export default function DemoSection() {
  return (
    <section className="section section-alt" id="demo">
      <div className="section-inner">
        <p className="eyebrow center">See it in action</p>
        <h2 className="section-title center">One app, on every screen</h2>
        <p className="section-sub center">
          The same roster, attendance, and team chat your managers use at the counter and your
          staff use from their own phone.
        </p>

        <div className="demo-frames">
          <Reveal direction="up" className="demo-frame-col demo-frame-col-laptop">
            <div className="laptop-frame">
              <div className="laptop-screen">
                <span className="laptop-cam" />
                <video
                  className="laptop-video"
                  src="/videos/demo-desktop.mp4"
                  poster="/videos/demo-desktop-poster.png"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label="A short tour of the Shiftline manager dashboard on desktop: roster, attendance, leave, team chat, and the AI assistant"
                />
              </div>
              <div className="laptop-base" />
            </div>
            <p className="demo-frame-caption">On the manager's desktop</p>
          </Reveal>

          <Reveal direction="up" delay={140} className="demo-frame-col demo-frame-col-phone">
            <div className="phone-frame">
              <span className="phone-notch" />
              <video
                className="phone-video"
                src="/videos/demo-mobile.mp4"
                poster="/videos/demo-mobile-poster.png"
                autoPlay
                muted
                loop
                playsInline
                aria-label="A short tour of the Shiftline app on a phone: roster, attendance, team, and chat"
              />
              <span className="phone-home" />
            </div>
            <p className="demo-frame-caption">On any employee's phone</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
