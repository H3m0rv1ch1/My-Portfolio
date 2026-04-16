import { useEffect, useRef } from 'react';

export default function Hero(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate name lines sliding up
    const nameLines = section.querySelectorAll('.name-line');
    nameLines.forEach((line, i) => {
      const inner = line.querySelector('span');
      if (inner) {
        inner.style.transform = 'translateY(100%)';
        setTimeout(() => {
          inner.style.transition = 'transform 1s cubic-bezier(0.25,0.46,0.45,0.94)';
          inner.style.transform = 'translateY(0)';
        }, 300 + i * 150);
      }
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
      }, 600 + i * 100);
    });
  }, []);

  return (
    <section id="hero" ref={sectionRef}>
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
