
import React from 'react';
import { 
  Settings, 
  Zap, 
  Shield, 
  Globe, 
  GitGraph, 
  Wind, 
  FileCode, 
  Box, 
  Code2, 
  Database,
  Palette,
  FileJson,
  Tag,
  Braces,
  BookOpen,
  Bot,
  Server,
  Image,
  CheckSquare,
  Package,
  Lock,
  FileText,
  Ship,
  Coffee,
  Flame,
  Triangle,
  Play,
  MoreHorizontal
} from 'lucide-react';
import { CatIcon } from './icons/ExtensionsIcons';

const extensionsList = {
    installed: [
        { id: 'runcat', name: 'Run Cat 365', publisher: 'Kyome', icon: CatIcon, desc: 'A cat running in your IDE header', downloads: '1M' },
        { id: 'prettier', name: 'Prettier - Code formatter', publisher: 'Prettier', icon: Zap, desc: 'Code formatter using prettier', downloads: '38M' },
        { id: 'eslint', name: 'ESLint', publisher: 'Microsoft', icon: Shield, desc: 'Integrates ESLint into VS Code.', downloads: '29M' },
        { id: 'gitlens', name: 'GitLens — Git supercharged', publisher: 'GitKraken', icon: GitGraph, desc: 'Supercharge Git within VS Code.', downloads: '24M' },
        { id: 'tailwind', name: 'Tailwind CSS IntelliSense', publisher: 'Tailwind Labs', icon: Wind, desc: 'Intelligent Tailwind CSS tooling', downloads: '12M' },
        { id: 'material', name: 'Material Icon Theme', publisher: 'Philipp Kief', icon: Palette, desc: 'Material Design Icons for VS Code', downloads: '18M' },
        { id: 'jses6', name: 'JavaScript (ES6) snippets', publisher: 'charalampos karypidis', icon: FileJson, desc: 'Code snippets for JavaScript in ES6 syntax', downloads: '14M' },
        { id: 'tag', name: 'Auto Rename Tag', publisher: 'Jun Han', icon: Tag, desc: 'Auto rename paired HTML/XML tag', downloads: '16M' },
        { id: 'bracket', name: 'Bracket Pair Colorizer', publisher: 'CoenraadS', icon: Braces, desc: 'A customizable extension for colorizing matching brackets', downloads: '10M' },
    ],
    popular: [
        { id: 'copilot', name: 'GitHub Copilot', publisher: 'GitHub', icon: Bot, desc: 'Your AI pair programmer', downloads: '15M' },
        { id: 'jupyter', name: 'Jupyter', publisher: 'Microsoft', icon: BookOpen, desc: 'Jupyter notebook support', downloads: '76M' },
        { id: 'ssh', name: 'Remote - SSH', publisher: 'Microsoft', icon: Server, desc: 'Open any folder on a remote machine', downloads: '20M' },
        { id: 'todo', name: 'Todo Tree', publisher: 'Gruntfuggly', icon: CheckSquare, desc: 'Show TODO, FIXME, etc. comment tags in a tree view', downloads: '4M' },
        { id: 'icons', name: 'vscode-icons', publisher: 'VSCode Icons Team', icon: Image, desc: 'Icons for Visual Studio Code', downloads: '16M' },
        { id: 'import', name: 'Import Cost', publisher: 'Wix', icon: Package, desc: 'Display import/require package size in the editor', downloads: '3M' },
        { id: 'dotenv', name: 'DotENV', publisher: 'mikestead', icon: Lock, desc: 'Support for dotenv file syntax', downloads: '9M' },
        { id: 'yaml', name: 'YAML', publisher: 'Red Hat', icon: FileText, desc: 'YAML Language Support by Red Hat', downloads: '20M' },
        { id: 'k8s', name: 'Kubernetes', publisher: 'Microsoft', icon: Ship, desc: 'Develop, deploy and debug Kubernetes applications', downloads: '11M' },
        { id: 'java', name: 'Debugger for Java', publisher: 'Microsoft', icon: Coffee, desc: 'A lightweight Java debugger for Visual Studio Code', downloads: '25M' },
    ],
    recommended: [
        { id: 'live', name: 'Live Server', publisher: 'Ritwick Dey', icon: Globe, desc: 'Launch a development local Server', downloads: '40M' },
        { id: 'python', name: 'Python', publisher: 'Microsoft', icon: FileCode, desc: 'IntelliSense (Pylance), Linting, Debugging', downloads: '100M' },
        { id: 'docker', name: 'Docker', publisher: 'Microsoft', icon: Box, desc: 'Manage Docker Containers', downloads: '28M' },
        { id: 'cpp', name: 'C/C++', publisher: 'Microsoft', icon: Code2, desc: 'C/C++ IntelliSense, debugging', downloads: '58M' },
        { id: 'sql', name: 'SQLTools', publisher: 'Matheus Teixeira', icon: Database, desc: 'Database management done right', downloads: '5M' },
        { id: 'thunder', name: 'Thunder Client', publisher: 'Ranga Vadhineni', icon: Zap, desc: 'Lightweight Rest API Client', downloads: '3M' },
        { id: 'firebase', name: 'Firebase', publisher: 'Google', icon: Flame, desc: 'Firebase Management', downloads: '2M' },
        { id: 'next', name: 'Next.js Snippets', publisher: 'Vercel', icon: Triangle, desc: 'Snippets for Next.js', downloads: '5M' },
    ]
};

const ExtensionItem: React.FC<{ 
    id: string, 
    name: string, 
    publisher: string, 
    icon: React.FC<any>, 
    desc: string, 
    downloads: string,
}> = ({ id, name, publisher, icon: Icon, desc, downloads }) => (
    <div className="flex items-start p-2 rounded hover:bg-[var(--bg-ide-hover)] cursor-pointer group mb-1 transition-colors relative">
        <Icon className="w-9 h-9 mr-3 flex-shrink-0 text-[var(--accent-primary)] p-1 bg-[var(--bg-chip)] rounded" />
        <div className="flex-1 overflow-hidden min-w-0">
            <div className="flex justify-between items-center">
                <p className="font-semibold truncate text-[var(--text-primary)] text-sm">{name}</p>
                 <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-[var(--bg-chip)] rounded ml-1 transition-opacity flex-shrink-0" title="Manage">
                    <Settings className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                </button>
            </div>
            <p className="text-[10px] text-[var(--text-secondary)] truncate mb-1">{desc}</p>
            <div className="flex justify-between items-center text-[10px] text-[var(--text-tertiary)]">
                <div className="flex items-center">
                    <span className="truncate mr-2">{publisher}</span>
                    <span className="flex items-center">
                        <span className="mr-0.5">⬇</span> {downloads}
                    </span>
                </div>
            </div>
        </div>
    </div>
);

const Extensions: React.FC = () => {
    return (
        <div className="w-full bg-[var(--bg-ide-panel)] text-sm text-[var(--text-primary)] h-full flex flex-col rounded-lg transition-colors duration-300">
            <div className="flex items-center justify-between px-4 py-2 flex-shrink-0 bg-[var(--bg-ide-header)]">
                <h2 className="uppercase tracking-widest text-xs text-[var(--text-secondary)] font-semibold">Extensions</h2>
                <MoreHorizontal className="w-4 h-4 text-[var(--text-secondary)] cursor-pointer hover:text-[var(--text-primary)]" />
            </div>
            <div className="p-3 flex-shrink-0 border-b border-[var(--border-color)]">
                <input
                    type="text"
                    placeholder="Search Extensions in Marketplace"
                    className="w-full bg-[var(--bg-ide-input)] text-[var(--text-primary)] border border-[var(--border-color)] focus:border-[#007acc] focus:outline-none px-2 py-1.5 rounded text-sm placeholder-[var(--text-tertiary)]"
                />
            </div>

            <div className="flex-1 overflow-y-auto">
                <div className="px-1 pt-2">
                    <div className="px-2 py-1 flex items-center justify-between group cursor-pointer hover:bg-[var(--bg-ide-hover)] rounded mb-1">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)]">Installed</h3>
                        <span className="text-[10px] bg-[var(--bg-chip)] px-1.5 rounded-full text-[var(--text-secondary)]">{extensionsList.installed.length}</span>
                    </div>
                    <div className="space-y-0.5">
                        {extensionsList.installed.map(ext => (
                            <ExtensionItem 
                                key={ext.id} 
                                {...ext} 
                            />
                        ))}
                    </div>
                </div>

                <div className="px-1 mt-4">
                     <div className="px-2 py-1 flex items-center justify-between group cursor-pointer hover:bg-[var(--bg-ide-hover)] rounded mb-1">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)]">Popular</h3>
                    </div>
                    <div className="space-y-0.5">
                         {extensionsList.popular.map(ext => <ExtensionItem key={ext.id} {...ext} />)}
                    </div>
                </div>

                <div className="px-1 mt-4">
                     <div className="px-2 py-1 flex items-center justify-between group cursor-pointer hover:bg-[var(--bg-ide-hover)] rounded mb-1">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)]">Recommended</h3>
                    </div>
                    <div className="space-y-0.5">
                         {extensionsList.recommended.map(ext => <ExtensionItem key={ext.id} {...ext} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extensions;
