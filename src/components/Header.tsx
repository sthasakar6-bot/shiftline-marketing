import { useState } from "react";
import { APP_URL } from "../config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <img src="/icon-192.png" alt="" className="brand-icon" />
          <span className="brand-text">Shiftline</span>
        </a>

        <nav className={`site-nav ${open ? "open" : ""}`}>
          <a href="#features" onClick={() => setOpen(false)}>
            Product
          </a>
          <a href="#roles" onClick={() => setOpen(false)}>
            Who it's for
          </a>
          <a href="#customers" onClick={() => setOpen(false)}>
            Customers
          </a>
          <a href="#team" onClick={() => setOpen(false)}>
            Company
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
          <div className="site-nav-actions">
            <a className="btn btn-ghost" href={`${APP_URL}/login`}>
              Log in
            </a>
            <a className="btn btn-primary" href={`${APP_URL}/login`}>
              Get started
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
