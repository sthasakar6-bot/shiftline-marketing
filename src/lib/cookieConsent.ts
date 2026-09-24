// Shared consent store for the cookie banner. Any future analytics/marketing
// script (Google Analytics, Meta Pixel, etc.) should check hasAnalyticsConsent()
// / hasMarketingConsent() before loading -- necessary cookies (the ones this
// site actually sets today, e.g. session/auth cookies on the app) never need
// consent under EU law, so there's no gate for those.
const STORAGE_KEY = "shiftline_cookie_consent";
const CONSENT_EVENT = "shiftline-cookie-consent-changed";

export interface CookieConsent {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
}

export function getConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookieConsent;
  } catch {
    return null;
  }
}

export function setConsent(analytics: boolean, marketing: boolean): void {
  const consent: CookieConsent = {
    necessary: true,
    analytics,
    marketing,
    decidedAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // Storage unavailable (private mode, blocked) -- consent just won't
    // persist across visits, the banner will show again next time.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
}

export function clearConsent(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
}

export function hasAnalyticsConsent(): boolean {
  return getConsent()?.analytics ?? false;
}

export function hasMarketingConsent(): boolean {
  return getConsent()?.marketing ?? false;
}

export function onConsentChange(callback: () => void): () => void {
  window.addEventListener(CONSENT_EVENT, callback);
  return () => window.removeEventListener(CONSENT_EVENT, callback);
}
