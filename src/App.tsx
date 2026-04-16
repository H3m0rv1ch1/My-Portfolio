import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

function App(): JSX.Element {
  useEffect(() => {
    // Hide preloader after animation
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 2000);
    }
  }, []);

  return (
    <>
      <CustomCursor />
      <Navigation />
      
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Contact />
      </main>

      <BackToTop />
    </>
  );
}

export default App;
