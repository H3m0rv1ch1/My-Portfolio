
import About from './website/About';
import Contact from './website/Contact';
import Home from './website/Home';
import Projects from './website/Projects';
import Services from './website/Services';
import Certificates from './website/Certificates';
import { FileCode2, FileJson, FileType, FileText, Atom, Folder, Award } from 'lucide-react';
import type { Tab, FileSystemNode } from './types';

export enum View {
  EXPLORER = 'EXPLORER',
  SOURCE_CONTROL = 'SOURCE_CONTROL',
  SEARCH = 'SEARCH',
  DEBUG = 'DEBUG',
  EXTENSIONS = 'EXTENSIONS',
}

export const portfolioPages: Tab[] = [
  { id: 'home.md', title: 'home.md', component: Home, icon: FileText },
  { id: 'about.tsx', title: 'about.tsx', component: About, icon: Atom },
  { id: 'projects.ts', title: 'projects.ts', component: Projects, icon: FileCode2 },
  { id: 'services.js', title: 'services.js', component: Services, icon: FileJson },
  { id: 'certificates.ts', title: 'certificates.ts', component: Certificates, icon: Award },
  { id: 'contact.css', title: 'contact.css', component: Contact, icon: FileType },
];

export const initialTabs: Tab[] = [portfolioPages[0]];

export const fileSystemTree: FileSystemNode[] = [
    { name: 'portfolio-mohamed-elghanam', type: 'folder', icon: Folder, children: [
        { name: 'home.md', type: 'file', icon: FileText, meta: portfolioPages.find(p => p.id === 'home.md') },
        { name: 'about.tsx', type: 'file', icon: Atom, meta: portfolioPages.find(p => p.id === 'about.tsx') },
        { name: 'projects.ts', type: 'file', icon: FileCode2, meta: portfolioPages.find(p => p.id === 'projects.ts') },
        { name: 'services.js', type: 'file', icon: FileJson, meta: portfolioPages.find(p => p.id === 'services.js') },
        { name: 'certificates.ts', type: 'file', icon: Award, meta: portfolioPages.find(p => p.id === 'certificates.ts') },
        { name: 'contact.css', type: 'file', icon: FileType, meta: portfolioPages.find(p => p.id === 'contact.css') },
    ]},
];