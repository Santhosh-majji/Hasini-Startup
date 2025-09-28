import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import SkillsDevelopment from './components/sections/TechStack';
import Partners from './components/sections/Partners';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';
import Contact from './components/sections/Contact';
import UnderDevelopment from './components/sections/UnderDevelopment';
import ErrorBoundary from './components/ui/ErrorBoundary';
import ScrollToTop from './components/ui/ScrollToTop';
import LoadingScreen from './components/ui/LoadingScreen';
import WhatsAppFloat from './components/ui/WhatsAppFloat';
import './styles/globals.css';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Process />
      <SkillsDevelopment />
      <Partners />
      <FAQ />
      <CTA />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only show loading screen on first app load
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasVisited', 'true');
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/under-development" element={<UnderDevelopment />} />
          </Routes>
          <Footer />
          <ScrollToTop />
          <WhatsAppFloat />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;