import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import PhotoBand from "./components/PhotoBand";
import Roles from "./components/Roles";
import Why from "./components/Why";
import FAQ from "./components/FAQ";
import Support from "./components/Support";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <PhotoBand />
        <Roles />
        <Why />
        <FAQ />
        <Support />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
