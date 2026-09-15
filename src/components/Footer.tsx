import { APP_URL } from "../config";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <a className="brand" href="#top">
          <img src="/icon-192.png" alt="" className="brand-icon" />
          <span className="brand-text">Shiftline</span>
        </a>

        <nav className="footer-links">
          <a href="#features">Features</a>
          <a href="#roles">Who it's for</a>
          <a href="#why">Why Shiftline</a>
          <a href={`${APP_URL}/login`}>Log in</a>
          <a href="mailto:hello@shiftline.nl">Contact</a>
        </nav>

        <p className="footer-copy">© {new Date().getFullYear()} Shiftline. All rights reserved.</p>
      </div>
    </footer>
  );
}
