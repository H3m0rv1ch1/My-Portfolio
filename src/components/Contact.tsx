import { useEffect, useRef, useState, memo } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Contact = memo(function Contact(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState<boolean>(false);

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

    const elements = section.querySelectorAll('.contact-animate');
    elements.forEach((el, i) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(30px)';
      (el as HTMLElement).style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const copyEmail = (): void => {
    navigator.clipboard.writeText('mohamed.atef.23@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={sectionRef}>
      <div className="s-header contact-animate">
        <div>
          <p className="s-label">Contact</p>
          <h2 className="s-title">Let's Talk</h2>
        </div>
      </div>

      <div className="contact-headline contact-animate">
        <span className="tl"><span>
          <a href="mailto:mohamed.atef.23@gmail.com" className="hire-link">
            Hire me <ArrowUpRight className="hire-arrow" strokeWidth={2.5} />
          </a>
        </span></span>
      </div>

      <div className="contact-footer contact-animate">
        <div className="cf-left">
          <div className="cf-email-row">
            <p>mohamed.atef.23@gmail.com</p>
            <button 
              className={`copy-btn ${copied ? 'copied' : ''}`} 
              onClick={copyEmail}
              aria-label="Copy email"
            >
              {copied ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L7 12L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 1H13C14.1046 1 15 1.89543 15 3V10" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              )}
            </button>
          </div>
          <p>Remote / Worldwide</p>
        </div>

        <div className="cf-right">
          <a href="https://github.com/H3m0rv1ch1" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/mo-alghanam/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/mohammed_alghanam" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>

      <div className="copy contact-animate">
        © {new Date().getFullYear()} Mohammed Alghanam. All rights reserved.
      </div>
    </section>
  );
});

export default Contact;
