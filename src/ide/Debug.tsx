
import React, { useState } from 'react';
import { Play, RefreshCw, ChevronDown, ChevronRight, MoreHorizontal } from 'lucide-react';

const CollapsibleSection: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({ title, children, defaultOpen = true }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center w-full py-1 text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] hover:bg-[var(--bg-ide-hover)]">
                {isOpen ? <ChevronDown className="w-4 h-4 mr-1" /> : <ChevronRight className="w-4 h-4 mr-1" />}
                {title}
            </button>
            {isOpen && <div className="pl-4 pr-2 pb-2">{children}</div>}
        </div>
    );
};

const Debug: React.FC = () => {
    return (
        <div className="w-full bg-[var(--bg-ide-panel)] text-sm text-[var(--text-primary)] h-full flex flex-col rounded-lg transition-colors duration-300">
            <div className="flex items-center justify-between px-4 py-2 flex-shrink-0 bg-[var(--bg-ide-header)]">
                <h2 className="uppercase tracking-widest text-xs text-[var(--text-secondary)] font-semibold">Run and Debug</h2>
                 <div className="flex items-center space-x-2">
                     <button className="p-1 hover:bg-[var(--bg-ide-hover)] rounded" title="Refresh">
                        <RefreshCw className="w-4 h-4 text-[var(--text-secondary)]" />
                    </button>
                     <button className="p-1 hover:bg-[var(--bg-ide-hover)] rounded" title="More Actions">
                        <MoreHorizontal className="w-4 h-4 text-[var(--text-secondary)]" />
                    </button>
                </div>
            </div>
            <div className="p-2">
                <button className="w-full bg-green-600 text-white py-1.5 rounded text-sm font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>Run and Debug</span>
                </button>
            </div>
            <div className="flex-1 overflow-y-auto text-xs">
                <CollapsibleSection title="Variables">
                    <div className="space-y-1 font-mono">
                        <div><span className="text-purple-400">activeView</span>: <span className="text-green-400">"EXPLORER"</span></div>
                        <div><span className="text-purple-400">isSidebarOpen</span>: <span className="text-blue-400">true</span></div>
                        <div>
                            <span className="text-purple-400">openTabs</span>: <span className="text-[var(--text-tertiary)]">Array(3)</span>
                            <div className="pl-4 text-[var(--text-tertiary)]">
                                <div>0: {'{'} id: "home.md", ... {'}'}</div>
                                <div>1: {'{'} id: "about.tsx", ... {'}'}</div>
                                <div>2: {'{'} id: "projects.ts", ... {'}'}</div>
                            </div>
                        </div>
                    </div>
                </CollapsibleSection>
                <CollapsibleSection title="Call Stack">
                    <div className="space-y-1 text-[var(--text-tertiary)] font-mono">
                        <div>(anonymous) (App.tsx:42)</div>
                        <div>renderWithHooks (react-dom.development.js:14985)</div>
                    </div>
                </CollapsibleSection>
                 <CollapsibleSection title="Breakpoints">
                    <label className="flex items-center space-x-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer">
                        <input type="checkbox" className="bg-transparent" />
                        <span>projects.ts: 15</span>
                    </label>
                </CollapsibleSection>
            </div>
        </div>
    );
};

export default Debug;
