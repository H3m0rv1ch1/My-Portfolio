import { useEffect, useRef, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

export default function CustomCursor(): JSX.Element | null {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef<Position>({ x: 0, y: 0 });
  const targetRef = useRef<Position>({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const [cursorText, setCursorText] = useState<string>('Guest');

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Check for touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      cursor.style.display = 'none';
      return;
    }

    // Show cursor after slight delay
    setTimeout(() => {
      cursor.style.opacity = '1';
    }, 100);

    const onMouseMove = (e: MouseEvent): void => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseEnter = (): void => {
      cursor.style.opacity = '1';
    };

    const onMouseLeave = (): void => {
      cursor.style.opacity = '0';
    };

    // Smooth follow animation
    const animate = (): void => {
      const { x, y } = posRef.current;
      const { x: tx, y: ty } = targetRef.current;
      
      // Lerp for smooth follow
      posRef.current.x += (tx - x) * 0.15;
      posRef.current.y += (ty - y) * 0.15;
      
      cursor.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    // Hover detection for interactive elements
    const onMouseOver = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, .pcard, .tag, .skill-pill, .nav-links a, .theme-btn, .pill, .he-row');
      const isContactLink = target.closest('.contact-headline a');
      const isBackToTop = target.closest('.back-to-top');
      const isNavLogo = target.closest('.nav-logo');
      const isProjectCard = target.closest('.pcard-vis');
      
      if (isInteractive) {
        document.body.classList.add('is-hovering');
      }
      
      if (isContactLink) {
        setCursorText('Talk to me 👋');
      } else if (isBackToTop) {
        setCursorText('Go up 🚀');
      } else if (isNavLogo) {
        setCursorText('👋 Hi, this is me');
      } else if (isProjectCard) {
        setCursorText('View Project ↗');
      } else if (isInteractive) {
        setCursorText('Link ↗');
      }
    };

    const onMouseOut = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, .pcard, .stack-card, .tag, .skill-pill, .nav-links a, .theme-btn, .pill');
      const isContactLink = target.closest('.contact-headline a');
      const isBackToTop = target.closest('.back-to-top');
      const isNavLogo = target.closest('.nav-logo');
      const isProjectCard = target.closest('.pcard-vis');
      
      if (isInteractive) {
        document.body.classList.remove('is-hovering');
      }
      
      if (isContactLink || isBackToTop || isNavLogo || isProjectCard || isInteractive) {
        setCursorText('Guest');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });
    
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="cursor" ref={cursorRef} aria-hidden="true">
      <div className="cursor-arrow">
        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M2 2L2 21L6.8 16.2L10.4 24L13.4 22.6L9.8 14.8L17 14.8L2 2Z"
            fill="white"
            stroke="#0C0C0B"
            strokeWidth="1.4"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="cursor-label">
        <span className="cursor-label-dot"></span>
        <span>{cursorText}</span>
      </div>
    </div>
  );
}
