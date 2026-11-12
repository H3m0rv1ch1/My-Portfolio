/** Optional user-supplied screenshot, served from /public/projects/<slug>.png.
    Falls back silently to the gradient artwork when no screenshot exists. */
export function ProjectShot({ slug, name }: { slug: string; name: string }): JSX.Element {
  return (
    <img
      className="pcard-img"
      src={`./projects/${slug}.png`}
      alt={`${name} screenshot`}
      loading="lazy"
      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
    />
  );
}
