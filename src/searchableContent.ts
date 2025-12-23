
import { portfolioPages } from './constants';
import { PERSONAL_INFO, PROJECTS, SERVICES, EXPERIENCES, CERTIFICATES } from './data';
import type { Tab } from './types';

const homeContent = `
# ${PERSONAL_INFO.name}
## ${PERSONAL_INFO.title}
> ${PERSONAL_INFO.bio}
// To see my work, explore the files on the left
// P.S. Try opening the terminal in the status bar below!
`;

const aboutContent = `
import React from 'react';
// My Professional Experience (Pre-Web Development)
const experiences = [
${EXPERIENCES.map(exp => `
  {
    role: '${exp.role}',
    company: '${exp.company}',
    period: '${exp.period}',
    description: [
${exp.description.map(d => `      '${d.replace(/'/g, "\\'")}',`).join('\n')}
    ],
  },
`).join('')}
];
export default experiences;
`;

const projectsContent = `
import type { Project } from '../types';
// My Web Development Projects
export const myProjects: Project[] = [
${PROJECTS.map(p => `
  {
    name: '${p.name}',
    description: '${p.description.replace(/'/g, "\\'")}',
    stack: [${p.stack.map(s => `'${s}'`).join(', ')}],
    liveUrl: '${p.liveUrl || ''}',
    repoUrl: '${p.repoUrl}',
  },
`).join('')}
];
`;

const servicesContent = `
/**
 * My Professional Services
 * A collection of services I offer to clients.
 */
const services = {
${SERVICES.map(s => `
  '${s.title.toLowerCase().replace(/ /g, '_')}': {
    title: '${s.title}',
    description: '${s.description}',
  },
`).join('')}
};
function getService(serviceName) {
  return services[serviceName];
}
module.exports = services;
`;

const certificatesContent = `
import type { Certificate } from '../types';
// Professional Certifications & Licenses
export const myCertificates: Certificate[] = [
${CERTIFICATES.map(c => `
  {
    name: '${c.name}',
    issuer: '${c.issuer}',
    date: '${c.date}',
    credentialId: '${c.credentialId || ''}',
  },
`).join('')}
];
`;

const contactContent = `
.contact-me {
  content: "Let's build something amazing together.";
  padding: 2rem;
}
.social-links a {
  display: block;
  margin-bottom: 10px;
  color: #8FBCBB;
  text-decoration: none;
}
.social-links a:hover {
  text-decoration: underline;
}
/* Find me on: */
email: 'mohamed.atef.23@gmail.com'
github: 'mohamedelghanam'
linkedin: 'mohamedelghanam'
`;


export const searchableFiles: { file: Tab; content: string }[] = [
  { file: portfolioPages.find(p => p.id === 'home.md')!, content: homeContent },
  { file: portfolioPages.find(p => p.id === 'about.tsx')!, content: aboutContent },
  { file: portfolioPages.find(p => p.id === 'projects.ts')!, content: projectsContent },
  { file: portfolioPages.find(p => p.id === 'services.js')!, content: servicesContent },
  { file: portfolioPages.find(p => p.id === 'certificates.ts')!, content: certificatesContent },
  { file: portfolioPages.find(p => p.id === 'contact.css')!, content: contactContent },
].filter(item => item.file);
