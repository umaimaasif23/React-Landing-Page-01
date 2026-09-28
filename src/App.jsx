import React from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import BrandsMarquee from './components/BrandsMarquee';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import SpecialOffer from './components/SpecialOffer';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BrandsMarquee />
      <MenuSection />
      <AboutSection />
      <SpecialOffer />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;