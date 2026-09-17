import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "How soon can I get started with Shiftline?",
    a: "Create your company and add your team in a few minutes. There's no setup process to wait on, and no credit card required to start.",
  },
  {
    q: "Which businesses is Shiftline suitable for?",
    a: "Any shift-based team: cafés, restaurants, retail shops, and similar businesses with rotating schedules. It supports multiple companies or locations under one login, and is available in English, Dutch, and Nepali.",
  },
  {
    q: "Can employees use it on their phone?",
    a: "Yes. It works in any browser and can be installed like an app for quick access, including clocking in and out offline when the signal is weak.",
  },
  {
    q: "Do you offer support?",
    a: "Yes. Reach us by email or WhatsApp any time. WhatsApp doesn't need someone online to respond, so you can message us day or night.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section" id="faq">
      <div className="section-inner">
        <h2 className="section-title center">Frequently asked questions</h2>
        <p className="section-sub center">Find the answer to your question below.</p>

        <div className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 60} className="faq-item-wrap">
                <div className={`faq-item ${isOpen ? "faq-item-open" : ""}`}>
                  <button
                    className="faq-question"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className="faq-toggle" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && <p className="faq-answer">{item.a}</p>}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
