import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ExistingCustomer from "./components/ExistingCustomer";
import AIAssistantSection from "./components/AIAssistantSection";
import TrustedBy from "./components/TrustedBy";
import Compare from "./components/Compare";
import Features from "./components/Features";
import PhotoBand from "./components/PhotoBand";
import Pricing from "./components/Pricing";
import Roles from "./components/Roles";
import Why from "./components/Why";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Support from "./components/Support";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

function App() {
  // A fresh page load at e.g. shiftline.nl/#pricing (arriving from an
  // external link, not an in-page nav click) races the browser's native
  // scroll-to-hash against React's first render -- the browser looks for
  // #pricing before it exists in the DOM, finds nothing, and never retries.
  // Redo that scroll ourselves once the page has actually painted.
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView();
      });
    });
  }, []);

  return (
    <>
      <ScrollProgress />
      <ExistingCustomer />
      <Header />
      <main>
        <Hero />
        <AIAssistantSection />
        <Compare />
        <Features />
        <PhotoBand />
        <Pricing />
        <Roles />
        <Why />
        <Team />
        <FAQ />
        <Support />
        <TrustedBy />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
