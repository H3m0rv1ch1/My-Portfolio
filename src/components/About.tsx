import { useEffect, useRef, useState, memo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  years: string;
}

interface Award {
  title: string;
  issuer: string;
  year: string;
  image: string;
  previewWidth?: number;
  previewHeight?: number;
}

const experience: Experience[] = [
  { company: 'Freelance', role: 'Lead Full Stack Developer', years: '2024 — Present' },
  { company: 'Bugshan Egypt Group', role: 'IT Manager', years: '2023 — 2024' },
  { company: 'Egy Shark Construction', role: 'IT Infrastructure Specialist', years: '2021 — 2023' },
  { company: 'Research Institute of Ophthalmology', role: 'System Support Engineer', years: '2019 — 2022' },
  { company: 'M.I.C.A Academy', role: 'Network Operations Lead', years: '2019 — 2021' }
];

const awards: Award[] = [
  { title: 'Microsoft MTA - Networking Fundamentals', issuer: 'Microsoft', year: '2019', image: '/certificates/Networking Fundamentals-1.png' },
  { title: 'Microsoft MTA - Windows OS Fundamentals', issuer: 'Microsoft', year: '2019', image: '/certificates/Windows Operating System Fundamentals-page-001.jpg' },
  { title: 'Microsoft MTA - Server Administration', issuer: 'Microsoft', year: '2020', image: '/certificates/Cert54081214480-1.png' },
  { title: 'Optical Fiber Network Installation', issuer: 'NTI Egypt', year: '2021', image: '/certificates/Optical Fiber Network Installation .jpg' },
  { title: 'Training Statement of Completion', issuer: 'NTI Egypt', year: '2021', image: '/certificates/Training Statement of Completion.jpg', previewWidth: 350, previewHeight: 503 },
  { title: 'Certificate of Experience', issuer: 'Professional', year: '2024', image: '/certificates/Certificate of Experience.jpg', previewWidth: 400, previewHeight: 584 }
];

const skills: string[] = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'WordPress', 
  'PHP', 'MongoDB', 'MySQL', 'Tailwind CSS', 'Git & GitHub',
  'Network Security', 'Windows Server', 'UI/UX Design', 'System Architecture'
];

// Memoized component to prevent unnecessary re-renders
const MemoizedAwardItem = memo(function AwardItem({ 
  award, 
  index, 
  isHovered, 
  onEnter, 
  onLeave, 
  onOpen 
}: { 
  award: Award; 
  index: number; 
  isHovered: boolean;
  onEnter: (i: number) => void;
  onLeave: () => void;
  onOpen: (i: number) => void;
}) {
  return (
    <div
      className={`award-item ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => onEnter(index)}
      onMouseLeave={onLeave}
      onClick={() => onOpen(index)}
    >
      <div className="aw-l">
        <span className="aw-title">{award.title}</span>
        <span className="aw-issuer">{award.issuer}</span>
      </div>
      <span className="aw-yr">{award.year}</span>
    </div>
  );
});

export default function About(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const mouseTarget = useRef({ x: 0, y: 0 });
  const mouseSmooth = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;
    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

    const animate = () => {
      mouseSmooth.current = {
        x: lerp(mouseSmooth.current.x, mouseTarget.current.x, 0.15),
        y: lerp(mouseSmooth.current.y, mouseTarget.current.y, 0.15),
      };

      const preview = previewRef.current;
      if (preview) {
        const margin = 16;
        const w = preview.offsetWidth;
        const h = preview.offsetHeight;
        let x = mouseSmooth.current.x + 24;
        let y = mouseSmooth.current.y - h - 24;
        if (y < margin) y = mouseSmooth.current.y + 24;
        x = clamp(x, margin, Math.max(margin, window.innerWidth - w - margin));
        y = clamp(y, margin, Math.max(margin, window.innerHeight - h - margin));
        preview.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Memoized handlers to prevent unnecessary re-renders
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    mouseTarget.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseEnter = useCallback((index: number) => {
    // Only show the floating preview on fine-pointer (hover) devices
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setHoveredCert(index);
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredCert(null);
    setIsVisible(false);
  }, []);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const showNextCert = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % awards.length));
  }, []);

  const showPrevCert = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + awards.length) % awards.length));
  }, []);

  // Keyboard navigation + scroll lock cleanup
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNextCert();
      if (e.key === 'ArrowLeft') showPrevCert();
    };

    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, showNextCert, showPrevCert]);

  // Swipe navigation for touch devices
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) showNextCert();
    else showPrevCert();
  }, [showNextCert, showPrevCert]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = section.querySelectorAll('.about-animate');
    elements.forEach((el, i) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(30px)';
      (el as HTMLElement).style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} onMouseMove={handleMouseMove}>
      {/* Certificate Preview Popup — portaled to body so it stays viewport-fixed (escapes #about's content-visibility containment) */}
      {createPortal(
        <div
          ref={previewRef}
          className="cert-preview"
          style={{
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? '1' : '0.8',
            pointerEvents: 'none',
            width: hoveredCert !== null ? (awards[hoveredCert].previewWidth ?? 320) : 320,
            height: hoveredCert !== null ? (awards[hoveredCert].previewHeight ?? 220) : 220,
          }}
        >
          <div className="cert-preview-inner">
            {awards.map((award, index) => (
              <img
                key={award.title}
                src={award.image}
                alt={award.title}
                className="cert-preview-img"
                style={{
                  opacity: hoveredCert === index ? 1 : 0,
                  transform: hoveredCert === index ? 'scale(1)' : 'scale(1.1)',
                }}
              />
            ))}
          </div>
        </div>,
        document.body
      )}

      {/* Certificate Lightbox — mobile-friendly fullscreen viewer (tap item to open) */}
      {createPortal(
        <div
          className={`cert-lightbox ${lightboxIndex !== null ? 'open' : ''}`}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate viewer"
        >
          <div className="cert-lightbox-stage">
            <button
              className="cert-lightbox-btn close"
              onClick={closeLightbox}
              aria-label="Close certificate viewer"
            >
              <X size={22} />
            </button>

            {lightboxIndex !== null && (
              <>
                <button
                  className="cert-lightbox-btn prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrevCert();
                  }}
                  aria-label="Previous certificate"
                >
                  <ChevronLeft size={26} />
                </button>

                <div
                  className="cert-lightbox-img-wrap"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <img
                    src={awards[lightboxIndex].image}
                    alt={awards[lightboxIndex].title}
                    className="cert-lightbox-img"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>

                <button
                  className="cert-lightbox-btn next"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNextCert();
                  }}
                  aria-label="Next certificate"
                >
                  <ChevronRight size={26} />
                </button>

                <div className="cert-lightbox-caption">
                  <span className="clb-title">{awards[lightboxIndex].title}</span>
                  <span className="clb-sub">
                    {awards[lightboxIndex].issuer} — {awards[lightboxIndex].year}
                  </span>
                  <span className="clb-count">
                    {lightboxIndex + 1} / {awards.length}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>,
        document.body
      )}
      <div className="s-header about-animate">
        <div>
          <p className="s-label">About</p>
          <h2 className="s-title">Profile</h2>
        </div>
        <span className="s-count">5+ Years</span>
      </div>

      <div className="about-grid">
        <div className="about-bio">
          <p className="about-animate">
            I am a <strong>digital architect</strong> bridging the gap between creative design 
            and technical engineering. With a strong foundation in IT infrastructure, I build 
            <em> robust, secure, and visually stunning</em> digital solutions.
          </p>
          <p className="about-animate">
            My portfolio spans from immersive <strong>WordPress experiences</strong> for luxury 
            brands to complex, data-driven <strong>ERP systems</strong> for enterprise resource 
            planning. I don't just write code; I design systems that solve business problems with 
            elegance and efficiency.
          </p>
          <p className="about-animate">
            Currently working as a <em>Lead Full Stack Developer</em>, helping businesses 
            transform their digital presence through strategic technical solutions.
          </p>
        </div>

        <div className="about-side">
          <div className="about-animate">
            <h3 className="detail-h">Experience</h3>
            <div className="exp-list">
              {experience.map((exp) => (
                <div key={exp.company} className="exp-item">
                  <div className="ei-l">
                    <span className="ei-co">{exp.company}</span>
                    <span className="ei-role">{exp.role}</span>
                  </div>
                  <span className="ei-yr">{exp.years}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-animate">
            <h3 className="detail-h">Certifications</h3>
            <div className="awards-list">
              {awards.map((award, index) => (
                <MemoizedAwardItem
                  key={award.title}
                  award={award}
                  index={index}
                  isHovered={hoveredCert === index}
                  onEnter={handleMouseEnter}
                  onLeave={handleMouseLeave}
                  onOpen={openLightbox}
                />
              ))}
            </div>
          </div>

          <div className="about-animate">
            <h3 className="detail-h">Skills</h3>
            <div className="skills-row">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>

          <div className="about-animate">
            <h3 className="detail-h">Languages</h3>
            <div className="skills-row">
              <span className="skill-pill">Arabic (Native)</span>
              <span className="skill-pill">English (Professional)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
