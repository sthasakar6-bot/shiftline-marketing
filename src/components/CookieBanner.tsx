import { useEffect, useState } from "react";
import { getConsent, setConsent, onConsentChange } from "../lib/cookieConsent";

// Fires when the footer's "Cookie settings" link is clicked, so this
// component (mounted once near the app root) can reopen the customize view
// without prop-drilling a shared open/close state through the whole tree.
const REOPEN_EVENT = "shiftline-cookie-banner-reopen";
export function reopenCookieBanner() {
  window.dispatchEvent(new CustomEvent(REOPEN_EVENT));
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
    const unsubscribe = onConsentChange(() => {
      const consent = getConsent();
      if (consent) {
        setAnalytics(consent.analytics);
        setMarketing(consent.marketing);
      }
    });
    const reopen = () => {
      const consent = getConsent();
      setAnalytics(consent?.analytics ?? false);
      setMarketing(consent?.marketing ?? false);
      setCustomizing(true);
      setVisible(true);
    };
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => {
      unsubscribe();
      window.removeEventListener(REOPEN_EVENT, reopen);
    };
  }, []);

  function acceptAll() {
    setConsent(true, true);
    setVisible(false);
    setCustomizing(false);
  }

  function rejectNonEssential() {
    setConsent(false, false);
    setVisible(false);
    setCustomizing(false);
  }

  function saveCustom() {
    setConsent(analytics, marketing);
    setVisible(false);
    setCustomizing(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie preferences">
      <div className="cookie-banner-inner">
        {!customizing ? (
          <>
            <p className="cookie-banner-text">
              We use cookies that are necessary for the site to work, and -- only with your
              permission -- cookies for analytics and marketing. See our{" "}
              <a href="/privacy">Privacy Policy</a> for details.
            </p>
            <div className="cookie-banner-actions">
              <button className="cookie-btn cookie-btn-ghost" onClick={() => setCustomizing(true)}>
                Customize
              </button>
              <button className="cookie-btn cookie-btn-outline" onClick={rejectNonEssential}>
                Reject non-essential
              </button>
              <button className="cookie-btn cookie-btn-solid" onClick={acceptAll}>
                Accept all
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="cookie-banner-text">Choose which cookies we can use.</p>
            <div className="cookie-banner-options">
              <label className="cookie-option">
                <input type="checkbox" checked readOnly disabled />
                <span>
                  <strong>Necessary</strong> -- required for the site and app to work. Always on.
                </span>
              </label>
              <label className="cookie-option">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                <span>
                  <strong>Analytics</strong> -- helps us understand how visitors use the site.
                </span>
              </label>
              <label className="cookie-option">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                />
                <span>
                  <strong>Marketing</strong> -- used to measure ad performance, if we run any.
                </span>
              </label>
            </div>
            <div className="cookie-banner-actions">
              <button className="cookie-btn cookie-btn-ghost" onClick={() => setCustomizing(false)}>
                Back
              </button>
              <button className="cookie-btn cookie-btn-solid" onClick={saveCustom}>
                Save preferences
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
