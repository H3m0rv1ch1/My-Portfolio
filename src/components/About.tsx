import { useEffect, useRef, useState, memo, useCallback } from 'react';

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
  onLeave 
}: { 
  award: Award; 
  index: number; 
  isHovered: boolean;
  onEnter: (i: number) => void;
  onLeave: () => void;
}) {
  return (
    <div
      className={`award-item ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => onEnter(index)}
      onMouseLeave={onLeave}
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
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  // Memoized handlers to prevent unnecessary re-renders
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredCert(index);
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredCert(null);
    setIsVisible(false);
  }, []);

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
      {/* Certificate Preview Popup */}
      <div
        className="cert-preview"
        style={{
          transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 150}px, 0)`,
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
      </div>
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
