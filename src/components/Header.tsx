import { useEffect, useState } from "react";
import { APP_URL } from "../config";
import NavDropdown from "./NavDropdown";
import { HeadsetIcon, UserCircleIcon, ArrowRightIcon } from "./icons";

declare global {
  interface Window {
    Tawk_API?: { toggle?: () => void; maximize?: () => void };
  }
}

function openSupportChat() {
  const api = window.Tawk_API;
  if (api?.toggle) api.toggle();
  else if (api?.maximize) api.maximize();
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="site-header-inner">
        <a className="brand" href="/#top" onClick={close}>
          <img src="/icon-192.png" alt="" className="brand-icon" />
          <span className="brand-text">Shiftline</span>
        </a>

        <nav className={`site-nav ${open ? "open" : ""}`}>
          <NavDropdown
            label="Product"
            onNavigate={close}
            items={[
              { label: "AI Scheduling Assistant", href: "/#ai-assistant" },
              { label: "Roster & shift scheduling", href: "/#roster" },
              { label: "Time & attendance", href: "/#attendance" },
              { label: "Clock in / Clock out", href: "/#clockin" },
              { label: "Leave", href: "/#leave" },
              { label: "HR", href: "/#hr" },
              { label: "Communication", href: "/#communication" },
              { label: "Payroll paperwork", href: "/#payroll" },
              { label: "Smart notifications", href: "/#notifications" },
            ]}
          />
          <a href="/#roles" onClick={close}>
            Who it's for
          </a>
          <a href="/#customers" onClick={close}>
            Customers
          </a>
          <a href="/#pricing" onClick={close}>
            Pricing
          </a>
          <NavDropdown
            label="Company"
            onNavigate={close}
            items={[
              { label: "Talk with our team", href: "/#team" },
              { label: "Contact", href: "/#contact" },
            ]}
          />

          <div className="site-nav-actions">
            <button type="button" className="icon-only-btn" onClick={openSupportChat} aria-label="Chat with support">
              <HeadsetIcon size={18} />
            </button>
            <a className="btn btn-ghost-dark" href={`${APP_URL}/login`}>
              <UserCircleIcon size={16} />
              <span style={{ marginLeft: 6 }}>Log in</span>
            </a>
            <a className="btn btn-cta" href={`${APP_URL}/signup`}>
              Start 15-day trial
              <ArrowRightIcon size={15} />
            </a>
          </div>
        </nav>

        <button
          className={`nav-toggle ${open ? "nav-toggle-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
