import { useEffect, Suspense, lazy } from 'react';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import BackToTop from './components/BackToTop';

// Lazy load below-fold components for better initial load performance
const Work = lazy(() => import('./components/Work'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

// Lightweight suspense fallback that doesn't block rendering
const SectionFallback = () => <div style={{ minHeight: '50vh' }} />;

function App(): JSX.Element {
  useEffect(() => {
    // Hide preloader after animation
    const preloader = document.getElementById('preloader');
    if (preloader) {
      const timer = setTimeout(() => {
        preloader.classList.add('hidden');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <CustomCursor />
      <Navigation />
      
      <main>
        <Hero />
        <Marquee />
        <Suspense fallback={<SectionFallback />}>
          <Work />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>

      <BackToTop />
    </>
  );
}

export default App;
