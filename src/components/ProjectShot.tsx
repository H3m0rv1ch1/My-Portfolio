import type { Project } from '../data/projects';

interface ProjectShotProps {
  project: Project;
  /** `card` fills the deck visual with a cover crop.
      `hero` shows the whole screenshot, contained over a blurred copy. */
  variant?: 'card' | 'hero';
  className?: string;
}

/**
 * Optional project screenshot from /public. Renders nothing when the project
 * has no image, so the gradient artwork shows through.
 */
export function ProjectShot({ project, variant = 'card', className = '' }: ProjectShotProps): JSX.Element | null {
  if (!project.image) return null;

  const hideOnError = (e: React.SyntheticEvent<HTMLImageElement>): void => {
    const wrap = e.currentTarget.closest<HTMLElement>('.pcard-shot');
    if (wrap) wrap.style.display = 'none';
  };

  return (
    <span className={`pcard-shot pcard-shot--${variant} ${className}`.trim()}>
      <img
        className="pcard-shot-img"
        src={project.image}
        alt={`${project.name} screenshot`}
        loading={variant === 'hero' ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
        onError={hideOnError}
      />
    </span>
  );
}
