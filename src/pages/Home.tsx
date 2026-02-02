import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Solutions from '../components/sections/Solutions';
import Differentiators from '../components/sections/Differentiators';
import Clients from '../components/sections/Clients';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we need to scroll to a section (coming from another page)
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      // Wait for page to render
      setTimeout(() => {
        const element = document.getElementById(state.scrollTo!);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth'
          });
        }
        // Clear the state so it doesn't scroll again on refresh
        window.history.replaceState({}, document.title);
      }, 300);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <Differentiators />
      <Clients />
      <Contact />
    </>
  );
};

export default Home;
