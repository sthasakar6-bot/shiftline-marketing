import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx'
import DpaPage from './pages/DpaPage.tsx'
import CookieBanner from './components/CookieBanner.tsx'

// No router library -- this is a small static site (homepage + a couple of
// legal pages), so a plain pathname check is simpler than pulling in
// react-router for a few extra routes. entry-server.tsx mirrors this exact
// check so the SSR prerender snapshot matches what the client renders.
// CookieBanner is rendered here (not inside App) so it shows up on every
// page, including a visitor landing directly on /privacy or /dpa.
function Page() {
  switch (window.location.pathname) {
    case '/privacy':
      return <PrivacyPolicyPage />
    case '/dpa':
      return <DpaPage />
    default:
      return <App />
  }
}

function Root() {
  return (
    <>
      <Page />
      <CookieBanner />
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
