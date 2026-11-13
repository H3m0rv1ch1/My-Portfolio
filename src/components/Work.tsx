import { useEffect, useRef, memo } from 'react';
import { projects, type Project } from '../data/projects';
import { ProjectShot } from './ProjectShot';

const projectSlugHref = (p: Project): string =>
  `${window.location.pathname}#/project/${p.slug}`;

const handleNav = (p: Project): void => {
  window.location.hash = `/project/${p.slug}`;
};

const Work = memo(function Work(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = Array.from(section.querySelectorAll<HTMLElement>('.stack-card'));
    if (!cards.length) return;

    let raf = 0;

    const update = (): void => {
      raf = 0;
      const firstStyle = getComputedStyle(cards[0]);
      const stickyTop = parseFloat(firstStyle.top) || 110;
      const vh = window.innerHeight;
      const range = vh * 0.72;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const next = cards[i + 1];

        if (!next || reduce) {
          if (!reduce) {
            card.style.transform = '';
            card.style.filter = '';
          }
          continue;
        }

        // How far the next card still is from covering this one.
        const dist = next.getBoundingClientRect().top - stickyTop;
        const p = Math.min(1, Math.max(0, 1 - Math.max(dist, 0) / range));

        if (p === 0) {
          card.style.transform = '';
          card.style.filter = '';
        } else {
          card.style.transform = `scale(${1 - 0.045 * p}) translateY(${p * -14}px)`;
          card.style.filter = `brightness(${1 - 0.14 * p})`;
        }
      }
    };

    const onScroll = (): void => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="work" ref={sectionRef}>
      <div className="s-header">
        <div>
          <p className="s-label">Selected Work</p>
          <h2 className="s-title">Projects</h2>
        </div>
        <span className="s-count">{projects.length}</span>
      </div>

      <div className="projects">
        {projects.map((p) => {
          const isPrivate = p.liveUrl === '#private';
          const hasLive = Boolean(p.liveUrl) && !isPrivate;
          return (
            <article
              key={p.id}
              className={`stack-card pcard ${p.gradient}${p.image ? ' has-image' : ''}`}
              aria-labelledby={`proj-${p.id}`}
            >
              <div className="pcard-inner">
                {/* Visual — LEFT: opens the project case page */}
                <a
                className="pcard-vis"
                href={projectSlugHref(p)}
                aria-label={`View ${p.name} project details`}
                onClick={(e) => { e.preventDefault(); handleNav(p); }}
                tabIndex={0}
              >
                <div className="pcard-bg" />
                <div className="pcard-img-overlay" />
                <ProjectShot project={p} />
                <span className="blob blob1" aria-hidden="true" />
                <span className="blob blob2" aria-hidden="true" />

                <div className="stack-visual-top" aria-hidden="true">
                  <span className="pnum-visual">{p.id}</span>
                  <span className="pyear-visual">{p.year}</span>
                </div>

                {!isPrivate && (
                  <span className="p-arrow" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 14L14 4M14 4H6M14 4V12" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </a>

                {/* Info — RIGHT */}
              <div className="pcard-info">
                <div className="pcard-top">
                  <span className="pnum">{p.id}</span>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="pcard-mid">
                  <p className="pcompany">{p.company}</p>
                  <h3 className="pname" id={`proj-${p.id}`}>{p.name}</h3>
                  <p className="pdesc">{p.description}</p>
                </div>

                <div className="plinks">
                  {isPrivate && (
                    <span className="plink-private">Private — upon request</span>
                  )}
                  {hasLive && (
                    <a className="plink" href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Preview ↗
                    </a>
                  )}
                  {p.githubUrl !== '#private' && (
                    <a className="plink" href={p.githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
});

export default Work;
