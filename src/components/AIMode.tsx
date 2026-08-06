import { useMemo } from 'react';

interface AIModeProps {
  onBack: () => void;
}

const portfolio = {
  schema: 'portfolio',
  version: '1.0',
  person: {
    name: 'Mohammed Alghanam',
    role: 'Full Stack Engineer & Digital Architect',
    experienceYears: '5+',
    location: 'Remote / Worldwide',
    availability: 'Available for work',
    email: 'mohamed.atef.23@gmail.com',
    links: {
      website: 'https://mohamedelghanam.pages.dev',
      github: 'https://github.com/H3m0rv1ch1',
      linkedin: 'https://www.linkedin.com/in/mo-alghanam/',
      twitter: 'https://twitter.com/mohammed_alghanam'
    }
  },
  experience: [
    { role: 'Lead Full Stack Developer', company: 'Freelance', years: '2024 - Present' },
    { role: 'IT Manager', company: 'Bugshan Egypt Group', years: '2023 - 2024' },
    { role: 'IT Infrastructure Specialist', company: 'Egy Shark Construction', years: '2021 - 2023' },
    { role: 'System Support Engineer', company: 'Research Institute of Ophthalmology', years: '2019 - 2022' },
    { role: 'Network Operations Lead', company: 'M.I.C.A Academy', years: '2019 - 2021' }
  ],
  skills: [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'WordPress', 'PHP', 'MongoDB',
    'MySQL', 'Tailwind CSS', 'Git & GitHub', 'Network Security', 'Windows Server',
    'UI/UX Design', 'System Architecture'
  ],
  projects: [
    'Noor Dubai AI', 'Billionaire ERP', 'Watermarking App', 'X To-Do Corp',
    'Noor Interiors', 'Noor Woods', 'Spookify AI', 'Enjaz',
    'Native Dictate Pro', 'Rafiq Al-Muslim', "Doctor's Outfit"
  ],
  certifications: [
    { title: 'Microsoft MTA - Networking Fundamentals', issuer: 'Microsoft', year: '2019' },
    { title: 'Microsoft MTA - Windows OS Fundamentals', issuer: 'Microsoft', year: '2019' },
    { title: 'Microsoft MTA - Server Administration', issuer: 'Microsoft', year: '2020' },
    { title: 'Optical Fiber Network Installation', issuer: 'NTI Egypt', year: '2021' },
    { title: 'Training Statement of Completion', issuer: 'NTI Egypt', year: '2021' },
    { title: 'Certificate of Experience', issuer: 'Professional', year: '2024' }
  ],
  languages: [
    { language: 'Arabic', level: 'Native' },
    { language: 'English', level: 'Professional' }
  ]
};

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlightJson(json: string): string {
  const escaped = escapeHtml(json);
  return escaped.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    (match) => {
      let cls = 'j-num';
      if (/^"/.test(match)) {
        cls = /:$/.test(match) ? 'j-key' : 'j-str';
      } else if (/true|false|null/.test(match)) {
        cls = 'j-bool';
      }
      return `<span class="${cls}">${match}</span>`;
    }
  );
}

export default function AIMode({ onBack }: AIModeProps): JSX.Element {
  const json = useMemo(() => JSON.stringify(portfolio, null, 2), []);
  const html = useMemo(() => highlightJson(json), [json]);

  return (
    <div className="ai-term" role="main" aria-label="Machine-readable portfolio terminal">
      <div className="ai-term-bar">
        <div className="ai-term-dots" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
        <span className="ai-term-title">mohamedelghanam.pages.dev — machine-readable mode</span>
        <button className="ai-term-back" onClick={onBack} aria-label="Switch back to human mode">
          &#8592; human mode
        </button>
      </div>

      <div className="ai-term-body">
        <p className="ai-cmd"><span className="ai-prompt">$</span> whoami</p>
        <p className="ai-out">Mohammed Alghanam — Full Stack Engineer &amp; Digital Architect (5+ years, remote/worldwide)</p>

        <p className="ai-cmd"><span className="ai-prompt">$</span> cat ./portfolio.json</p>
        <pre className="ai-json" dangerouslySetInnerHTML={{ __html: html }} />

        <p className="ai-cmd ai-last"><span className="ai-prompt">$</span><span className="ai-cursor" aria-hidden="true"></span></p>
      </div>
    </div>
  );
}
