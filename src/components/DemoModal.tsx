import { useEffect } from "react";

export default function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="demo-modal-overlay" onClick={onClose}>
      <div className="demo-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="demo-modal-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>

        <p className="eyebrow center">See it in action</p>
        <h2 className="section-title center">One app, on every screen</h2>
        <p className="section-sub center">
          The same roster, attendance, and team chat your managers use at the counter and your
          staff use from their own phone.
        </p>

        <div className="demo-frames">
          <div className="demo-frame-col demo-frame-col-laptop">
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
          </div>

          <div className="demo-frame-col demo-frame-col-phone">
            <div className="phone-frame">
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
          </div>
        </div>
      </div>
    </div>
  );
}
