import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
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
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <PhotoBand />
        <Pricing />
        <Roles />
        <Why />
        <Team />
        <FAQ />
        <Support />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}

export default App;
