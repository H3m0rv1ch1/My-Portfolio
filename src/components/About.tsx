import { useEffect, useRef } from 'react';

interface Experience {
  company: string;
  role: string;
  years: string;
}

interface Award {
  title: string;
  issuer: string;
  year: string;
}

const experience: Experience[] = [
  { company: 'Freelance', role: 'Lead Full Stack Developer', years: '2024 — Present' },
  { company: 'Bugshan Egypt Group', role: 'IT Manager', years: '2023 — 2024' },
  { company: 'Egy Shark Construction', role: 'IT Infrastructure Specialist', years: '2021 — 2023' },
  { company: 'Research Institute of Ophthalmology', role: 'System Support Engineer', years: '2019 — 2022' },
  { company: 'M.I.C.A Academy', role: 'Network Operations Lead', years: '2019 — 2021' }
];

const awards: Award[] = [
  { title: 'Microsoft MTA - Networking Fundamentals', issuer: 'Microsoft', year: '2019' },
  { title: 'Microsoft MTA - Windows OS Fundamentals', issuer: 'Microsoft', year: '2019' },
  { title: 'Microsoft MTA - Server Administration', issuer: 'Microsoft', year: '2020' },
  { title: 'NTI - Web Development Certificate', issuer: 'NTI Egypt', year: '2021' },
  { title: 'NTI - Network Security Certificate', issuer: 'NTI Egypt', year: '2021' },
  { title: 'Full Stack Development Professional', issuer: 'Professional', year: '2024' }
];

const skills: string[] = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'WordPress', 
  'PHP', 'MongoDB', 'MySQL', 'Tailwind CSS', 'Git & GitHub',
  'Network Security', 'Windows Server', 'UI/UX Design', 'System Architecture'
];

export default function About(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="about" ref={sectionRef}>
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
              {awards.slice(0, 4).map((award) => (
                <div key={award.title} className="award-item">
                  <div className="aw-l">
                    <span className="aw-title">{award.title}</span>
                    <span className="aw-issuer">{award.issuer}</span>
                  </div>
                  <span className="aw-yr">{award.year}</span>
                </div>
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
