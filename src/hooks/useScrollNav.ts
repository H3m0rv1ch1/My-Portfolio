import { useEffect, useState } from 'react';

export function useScrollNav(): boolean {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    let rafId: number | null = null;
    
    const onScroll = (): void => {
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setScrolled(scrollY > 50);
        rafId = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return scrolled;
}
