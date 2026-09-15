import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Roles from "./components/Roles";
import Why from "./components/Why";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Roles />
        <Why />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
