import { useEffect, useRef } from 'react';
import { getProject, neighbours, projectLinks, projects, type Project } from '../data/projects';
import { ProjectShot } from './ProjectShot';

interface ProjectPageProps {
  slug: string;
  onClose: () => void;
}

const ArrowIcon = ({ direction = 'up-right' }: { direction?: 'left' | 'up-right' }): JSX.Element => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    {direction === 'left' ? (
      <path d="M11 2L3 7L11 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ) : (
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    )}
  </svg>
);

/* Cover: the screenshot plate itself, shared with the deck cards */
function ProjectVisual({ project }: { project: Project }): JSX.Element {
  const isPrivate = project.liveUrl === '#private';
  const hasLive = Boolean(project.liveUrl) && !isPrivate;

  return (
    <a
      className={`p-hero-vis ${project.gradient}${isPrivate ? ' is-private' : ''}${hasLive ? '' : ' is-static'}${project.image ? ' has-image' : ''}`}
      href={hasLive ? project.liveUrl : undefined}
      target={hasLive ? '_blank' : undefined}
      rel={hasLive ? 'noopener noreferrer' : undefined}
      aria-label={hasLive ? `Open ${project.name} live site` : `${project.name} cover`}
      onClick={(e) => { if (!hasLive) e.preventDefault(); }}
    >
      <div className="pcard-bg" />
      <div className="pcard-img-overlay" />
      <ProjectShot project={project} variant="hero" />
      <span className="blob blob1" aria-hidden="true" />
      <span className="blob blob2" aria-hidden="true" />

      {!project.image && (
        <span className="p-hero-wordmark">{project.name}</span>
      )}

      {hasLive && (
        <span className="p-hero-arrow" aria-hidden="true">
          <ArrowIcon />
        </span>
      )}
    </a>
  );
}

export default function ProjectPage({ slug, onClose }: ProjectPageProps): JSX.Element | null {
  const project = getProject(slug);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.name} — Mohammed Alghanam`;
    }
    return () => {
      document.title = 'Mohammed Alghanam — Full Stack Engineer | Digital Architect';
    };
  }, [project]);

  // Entrance reveal: one authored moment, children rise in sequence
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    page.classList.add('is-in');
  }, []);

  if (!project) return null;

  const links = projectLinks(project);
  const { prev, next } = neighbours(project);
  const total = String(projects.length).padStart(2, '0');

  const navCard = (p: Project, dir: 'prev' | 'next') => (
    <a
      className={`p-nav-card ${p.gradient} is-${dir}${p.image ? ' has-image' : ''}`}
      href={`${window.location.pathname}#/project/${p.slug}`}
      key={dir}
      aria-label={dir === 'prev' ? `Previous project: ${p.name}` : `Next project: ${p.name}`}
      onClick={(e) => {
        e.preventDefault();
        window.location.hash = `/project/${p.slug}`;
      }}
    >
      <div className="pcard-bg" />
      <div className="pcard-img-overlay" />
      <ProjectShot project={p} />
      <span className="p-nav-arrow" aria-hidden="true">
        <ArrowIcon direction={dir === 'prev' ? 'left' : 'up-right'} />
      </span>
      <div className="p-nav-inner">
        <span className="p-nav-label">{dir === 'prev' ? 'Previous' : 'Next'}</span>
        <span className="p-nav-name">{p.name}</span>
        <span className="p-nav-meta">{p.year} · {p.tags[0]}</span>
      </div>
    </a>
  );

  return (
    <div className="project-page" ref={pageRef}>
      <div className="pp-top">
        <a
          className="pp-back"
          href={`${window.location.pathname}#work`}
          onClick={(e) => { e.preventDefault(); onClose(); }}
        >
          <span className="pp-back-arrow" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M10 2L4 7L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          All Projects
        </a>
        <span className="pp-count"><b>{project.id}</b> / {total}</span>
      </div>

      <div className="pp-dossier">
        <aside className="pp-rail">
          <span className="pp-rail-index" aria-hidden="true">{project.id}</span>

          <dl className="pp-facts">
            <div className="pp-fact">
              <dt>Client</dt>
              <dd>{project.company}</dd>
            </div>
            <div className="pp-fact">
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div className="pp-fact">
              <dt>Discipline</dt>
              <dd>{project.tags.join(' · ')}</dd>
            </div>
          </dl>

          <div className="pp-rail-links">
            {links.length > 0 ? (
              links.map((l) => (
                <a key={l.label} className="pp-rail-link" href={l.url} target="_blank" rel="noopener noreferrer">
                  <span>{l.label === 'Live Preview' ? 'Visit live site' : l.label}</span>
                  <ArrowIcon />
                </a>
              ))
            ) : (
              <span className="pp-rail-link is-private">Private — upon request</span>
            )}
          </div>
        </aside>

        <div className="pp-content">
          <header className="pp-head">
            <p className="s-label">{project.company}</p>
            <h1 className="pp-title">{project.name}</h1>
            <p className="pp-intro">{project.description}</p>
          </header>

          <div className="pp-cover">
            <ProjectVisual project={project} />
            <div className="pp-visual-meta" aria-hidden="true">
              <span>Interface</span>
              <span>{project.id} / {total}</span>
            </div>
          </div>

          <section className="pp-story">
            <p className="s-label">About the project</p>
            <div className="pp-story-body">
              {project.overview.map((para, i) => (
                <p key={i} className="pp-para">{para}</p>
              ))}

              <div className="pp-story-stack">
                <p className="s-label pp-block-label">Built with</p>
                <div className="pp-stack-tags">
                  {project.tags.map((t) => (
                    <span key={t} className="pp-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="pp-more">
        <div className="pp-more-head">
          <h2 className="pp-more-title">More projects</h2>
          <a
            className="pp-more-all"
            href={`${window.location.pathname}#work`}
            onClick={(e) => { e.preventDefault(); onClose(); }}
          >
            View all <ArrowIcon />
          </a>
        </div>

        <nav className="pp-footer-nav" aria-label="More projects">
          {navCard(prev, 'prev')}
          {navCard(next, 'next')}
        </nav>
      </section>
    </div>
  );
}
