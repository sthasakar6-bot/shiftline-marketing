import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx'
import CookieBanner from './components/CookieBanner.tsx'

// No router library -- this is a two-page static site (homepage + privacy
// policy), so a plain pathname check is simpler than pulling in
// react-router for one extra route. entry-server.tsx mirrors this exact
// check so the SSR prerender snapshot matches what the client renders.
// CookieBanner is rendered here (not inside App) so it shows up on every
// page, including a visitor landing directly on /privacy.
function Root() {
  return (
    <>
      {window.location.pathname === '/privacy' ? <PrivacyPolicyPage /> : <App />}
      <CookieBanner />
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
