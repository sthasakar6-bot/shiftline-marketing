import Reveal from "./Reveal";
import { SparkleIcon } from "./icons";

const CHIPS = ["Plain English, not a form", "You confirm every shift", "No manual calendar clicking"];

export default function AIAssistantSection() {
  return (
    <section className="ai-section" id="ai-assistant">
      <div className="ai-bg" aria-hidden="true">
        <span className="ai-blob ai-blob-a" />
        <span className="ai-blob ai-blob-b" />
      </div>
      <div className="section-inner">
        <Reveal direction="scale" className="ai-inner">
          <span className="ai-eyebrow">
            <SparkleIcon size={16} />
            New — AI Scheduling Assistant
          </span>
          <h2 className="ai-title">
            Just <span className="ai-title-gradient">tell it</span> who works when
          </h2>
          <p className="ai-sub">
            Type "put Liam on shift Monday and Wednesday next week, 9am to 5pm" and Shiftline's AI reads it,
            matches the right person, and proposes the shifts — you review and confirm before
            anything touches the roster.
          </p>
          <div className="ai-chips">
            {CHIPS.map((c) => (
              <span className="ai-chip" key={c}>
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} direction="up" className="ai-visual-frame">
          <img
            className="ai-screenshot"
            src="/photos/app/assistant.png"
            alt="Shiftline's AI assistant proposing two shifts from a plain-English request, ready to confirm"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
