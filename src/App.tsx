import { useEffect, useState, Suspense, lazy } from 'react';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import BackToTop from './components/BackToTop';
import { getProject } from './data/projects';

// Lazy load below-fold components for better initial load performance
const Work = lazy(() => import('./components/Work'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const ProjectPage = lazy(() => import('./components/ProjectPage'));

// Lightweight suspense fallback that doesn't block rendering
const SectionFallback = () => <div style={{ minHeight: '50vh' }} />;

/** Walk the history stack when closing a project page, so "All Projects"
    returns to exactly where the visitor was in the stacked deck. */
const extractSlug = (): string | null => {
  const m = window.location.hash.match(/^#\/project\/([a-z0-9-]+)/i);
  return m ? m[1] : null;
};

function App(): JSX.Element {
  const [projectSlug, setProjectSlug] = useState<string | null>(extractSlug);

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

  useEffect(() => {
    const onHash = (): void => {
      const slug = extractSlug();
      setProjectSlug(slug);
      // After the view swap, ensure anchor navigation lands on the target section.
      const anchor = !slug && window.location.hash.startsWith('#') && window.location.hash.length > 1
        ? window.location.hash.slice(1)
        : null;
      if (anchor) {
        requestAnimationFrame(() => {
          document.getElementById(anchor)?.scrollIntoView({ behavior: 'auto' });
        });
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const closeProject = (): void => {
    // Strip the /project/ hash without adding a history entry; keep #work anchor.
    history.replaceState(null, '', window.location.pathname + '#work');
    setProjectSlug(null);
    // The Work section is lazy-loaded, so wait for it to mount before positioning
    // the page — a single frame lands on a Suspense placeholder and never scrolls.
    let tries = 0;
    const landOnWork = (): void => {
      const el = document.getElementById('work');
      if (el) {
        el.scrollIntoView();
      } else if (tries++ < 60) {
        requestAnimationFrame(landOnWork);
      }
    };
    requestAnimationFrame(landOnWork);
  };

  if (projectSlug && getProject(projectSlug)) {
    return (
      <>
        <CustomCursor />
        <Navigation />
        <main>
          <Suspense fallback={<SectionFallback />}>
            <ProjectPage slug={projectSlug} onClose={closeProject} />
          </Suspense>
        </main>
      </>
    );
  }

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
