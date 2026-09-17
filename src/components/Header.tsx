import { useState } from "react";
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
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="brand" href="#top" onClick={close}>
          <img src="/icon-192.png" alt="" className="brand-icon" />
          <span className="brand-text">Shiftline</span>
        </a>

        <nav className={`site-nav ${open ? "open" : ""}`}>
          <NavDropdown
            label="Product"
            onNavigate={close}
            items={[
              { label: "AI Scheduling Assistant", href: "#ai-assistant" },
              { label: "Roster & shift scheduling", href: "#roster" },
              { label: "Time & attendance", href: "#attendance" },
              { label: "Payroll paperwork", href: "#payroll" },
            ]}
          />
          <a href="#roles" onClick={close}>
            Who it's for
          </a>
          <a href="#customers" onClick={close}>
            Customers
          </a>
          <a href="#pricing" onClick={close}>
            Pricing
          </a>
          <NavDropdown
            label="Company"
            onNavigate={close}
            items={[
              { label: "Talk with our team", href: "#team" },
              { label: "Contact", href: "#contact" },
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
          className="nav-toggle"
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
