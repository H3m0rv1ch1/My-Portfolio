export default function Marquee(): JSX.Element {
  const items: string[] = [
    'Full Stack Development',
    'React & Next.js',
    'UI/UX Design',
    'WordPress',
    'Node.js',
    'TypeScript',
    'System Architecture',
    'Enterprise Solutions',
    'Digital Architecture'
  ];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mq-item">{item}</span>
        ))}
      </div>
    </div>
  );
}
