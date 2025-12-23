
import React from 'react';
import type { Tab } from '../types';
import { portfolioPages } from '../constants';
import { 
    FilePlus, 
    FolderOpen, 
    DownloadCloud, 
    Command, 
    Code2, 
    BookOpen, 
    Layers,
    ArrowRight
} from 'lucide-react';

interface WelcomeProps {
  onNewFile: (file: Tab) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onNewFile }) => {
    
    const openFile = (id: string) => {
        const file = portfolioPages.find(p => p.id === id);
        if (file) {
            onNewFile(file);
        }
    };

    const startActions = [
        { 
            icon: FilePlus, 
            text: 'New File', 
            shortcut: 'Ctrl+N',
            action: () => openFile('home.md') // Default to home for new file simulation
        },
        { 
            icon: FolderOpen, 
            text: 'Open File...', 
            shortcut: 'Ctrl+O',
            action: () => {} // Mock
        },
        { 
            icon: DownloadCloud, 
            text: 'Clone Git Repository...', 
            shortcut: '',
            action: () => window.open('https://github.com/H3m0rv1ch1', '_blank')
        },
        { 
            icon: Command, 
            text: 'Command Palette...', 
            shortcut: 'Ctrl+Shift+P',
            action: () => {} // This is handled globally, but listed here for UI
        },
    ];

    const recentFiles = [
        { name: 'home.md', path: '~/portfolio', id: 'home.md' },
        { name: 'projects.ts', path: '~/portfolio/src', id: 'projects.ts' },
        { name: 'about.tsx', path: '~/portfolio/src/views', id: 'about.tsx' },
        { name: 'services.js', path: '~/portfolio/src/data', id: 'services.js' },
        { name: 'contact.css', path: '~/portfolio/styles', id: 'contact.css' },
    ];

    const walkthroughs = [
        {
            id: 'home.md',
            title: 'Get Started with Portfolio',
            description: 'Learn about my background, skills, and professional experience.',
            icon: BookOpen,
            progress: '100%'
        },
        {
            id: 'projects.ts',
            title: 'Explore Projects',
            description: 'Deep dive into the source code of my featured web applications.',
            icon: Code2,
            progress: '80%'
        },
        {
            id: 'services.js',
            title: 'View Services',
            description: 'Discover the technical solutions and architecture I offer.',
            icon: Layers,
            progress: '50%'
        }
    ];

    return (
        <div className="relative flex flex-col h-full bg-[var(--bg-ide-main)] text-[var(--text-secondary)] overflow-y-auto overflow-x-hidden selection:bg-blue-500/30">
            
            {/* Background Watermark */}
            <div className="absolute bottom-0 right-0 p-10 opacity-[0.03] pointer-events-none select-none">
                <Code2 size={400} />
            </div>

            <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16">
                
                {/* Header */}
                <div className="mb-12 select-none">
                    <h1 className="text-4xl font-light text-[var(--bg-ide-status)] mb-2 tracking-tight">
                        Mohammed Alghanam
                    </h1>
                    <p className="text-xl text-[var(--text-tertiary)] font-light">
                        Portfolio Edition <span className="text-[var(--text-secondary)] opacity-50 mx-2">|</span> v1.0.0
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Column 1: Start (Span 4) */}
                    <div className="lg:col-span-4 space-y-6">
                        <h2 className="text-lg font-medium text-[var(--text-primary)]">Start</h2>
                        <div className="space-y-1">
                            {startActions.map((item, index) => (
                                <button 
                                    key={index}
                                    onClick={item.action}
                                    className="group flex items-center justify-between w-full p-2 -ml-2 rounded text-sm hover:bg-[var(--bg-ide-hover)] hover:text-[var(--text-primary)] transition-colors text-left"
                                >
                                    <div className="flex items-center">
                                        <item.icon className="w-5 h-5 mr-3 text-blue-400 opacity-80 group-hover:opacity-100" strokeWidth={1.5} />
                                        <span>{item.text}</span>
                                    </div>
                                    {item.shortcut && (
                                        <span className="text-xs text-[var(--text-tertiary)] bg-[var(--bg-chip)] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                            {item.shortcut}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Recent (Span 4) */}
                    <div className="lg:col-span-4 space-y-6">
                        <h2 className="text-lg font-medium text-[var(--text-primary)]">Recent</h2>
                        <div className="space-y-1">
                            {recentFiles.map((file, index) => (
                                <button 
                                    key={index}
                                    onClick={() => openFile(file.id)}
                                    className="group flex flex-col w-full p-2 -ml-2 rounded hover:bg-[var(--bg-ide-hover)] text-left transition-colors"
                                >
                                    <span className="text-sm text-[var(--text-secondary)] group-hover:text-blue-400 font-medium transition-colors truncate w-full">
                                        {file.name}
                                    </span>
                                    <span className="text-xs text-[var(--text-tertiary)] truncate w-full opacity-80 group-hover:opacity-100">
                                        {file.path}
                                    </span>
                                </button>
                            ))}
                            <div className="pt-2">
                                <button className="text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors flex items-center">
                                    More...
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Walkthroughs / Help (Span 4) */}
                    <div className="lg:col-span-4 space-y-6">
                         <h2 className="text-lg font-medium text-[var(--text-primary)]">Walkthroughs</h2>
                         <div className="space-y-3">
                            {walkthroughs.map((item, index) => (
                                <div 
                                    key={index}
                                    onClick={() => openFile(item.id)}
                                    className="group bg-[var(--bg-ide-panel)] border border-[var(--border-color)] p-4 rounded-md cursor-pointer hover:border-blue-500/50 hover:shadow-md transition-all duration-200"
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <item.icon className="w-8 h-8 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors mb-2" strokeWidth={1} />
                                        <ArrowRight className="w-4 h-4 text-[var(--text-tertiary)] group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1 group-hover:text-blue-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-[var(--text-tertiary)] leading-relaxed mb-3">
                                        {item.description}
                                    </p>
                                    {/* Mock Progress Bar */}
                                    <div className="w-full h-1 bg-[var(--bg-chip)] rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500/50" style={{ width: item.progress }}></div>
                                    </div>
                                </div>
                            ))}
                         </div>
                    </div>

                </div>

                {/* Footer Checkbox */}
                <div className="mt-16 pt-8 border-t border-[var(--border-color)] flex items-center space-x-2 text-xs text-[var(--text-tertiary)] select-none">
                    <input 
                        type="checkbox" 
                        id="show-welcome" 
                        className="rounded border-[var(--border-color)] bg-[var(--bg-ide-input)] text-blue-500 focus:ring-0 focus:ring-offset-0 cursor-pointer" 
                        defaultChecked 
                    />
                    <label htmlFor="show-welcome" className="cursor-pointer hover:text-[var(--text-secondary)]">
                        Show "Welcome" page on startup
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
