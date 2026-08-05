import { useEffect, useRef } from 'react';

export default function Hero(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Split each name line into per-character spans for staggered reveal
    const nameLines = section.querySelectorAll('.name-line');
    nameLines.forEach((line) => {
      const inner = line.querySelector('span');
      if (!inner) return;
      const text = inner.textContent || '';
      inner.textContent = '';
      const chars: HTMLSpanElement[] = [];
      [...text].forEach((ch) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        inner.appendChild(span);
        chars.push(span);
      });

      // Initial state
      chars.forEach((c) => {
        c.style.opacity = '0';
        c.style.transform = 'translateY(110%)';
        c.style.filter = 'blur(14px)';
      });
    });

    let triggered = false;
    const playTitle = (): void => {
      if (triggered) return;
      triggered = true;
      let globalIndex = 0;
      nameLines.forEach((line) => {
        const chars = line.querySelectorAll('.char');
        chars.forEach((c) => {
          const i = globalIndex;
          setTimeout(() => {
            (c as HTMLElement).style.transition =
              'transform 0.9s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.6s ease, filter 0.7s ease';
            (c as HTMLElement).style.transform = 'translateY(0)';
            (c as HTMLElement).style.opacity = '1';
            (c as HTMLElement).style.filter = 'blur(0px)';
          }, 250 + i * 28);
          globalIndex++;
        });
      });

      // Animate other elements
      const elements = section.querySelectorAll('.hero-fade');
      elements.forEach((el, i) => {
        (el as HTMLElement).style.opacity = '0';
        (el as HTMLElement).style.transform = 'translateY(20px)';
        setTimeout(() => {
          (el as HTMLElement).style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.transform = 'translateY(0)';
        }, 700 + i * 100);
      });
    };

    // Trigger on load (with small delay for preloader feel) AND when scrolled into view
    const startTimer = setTimeout(playTitle, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            playTitle();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(section);

    // Parallax scroll effect for background
    const bg = bgRef.current;
    if (!bg) return () => {
      clearTimeout(startTimer);
      observer.disconnect();
    };

    const onScroll = (): void => {
      // No parallax, no fade — image stays fixed and fully visible
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(startTimer);
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section id="hero" ref={sectionRef}>
      <div className="hero-bg" ref={bgRef}></div>
      <div className="hero-eyebrow hero-fade">
        <span>Full Stack Engineer & Digital Architect</span>
      </div>

      <h1 className="hero-title">
        <span className="name-line"><span>Mohammed</span></span>
        <span className="name-line"><span>Alghanam</span></span>
      </h1>

      <div className="hero-bottom">
        <p className="hero-desc hero-fade">
          Bridging the gap between creative design and technical engineering.
          Building robust, secure, and visually stunning digital solutions.
        </p>

        <div className="hero-right hero-fade">
          <div className="pill available">
            <span className="pill-dot"></span>
            <span>Available for work</span>
          </div>
          <div className="pill">
            <span>Based in Remote / Worldwide</span>
          </div>
        </div>
      </div>

      <div className="scroll-hint hero-fade">
        <span>Scroll</span>
        <div className="sh-line"></div>
      </div>
    </section>
  );
}
