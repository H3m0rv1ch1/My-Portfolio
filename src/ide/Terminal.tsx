
import React from 'react';
import type { TerminalTab } from '../types';
import { X } from 'lucide-react';

interface TerminalProps {
  onClose: () => void;
  activeTab: TerminalTab;
  onTabChange: (tab: TerminalTab) => void;
  onLinkClick?: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ onClose, activeTab, onTabChange, onLinkClick }) => {
  const tabs: TerminalTab[] = ['PROBLEMS', 'OUTPUT', 'DEBUG CONSOLE', 'TERMINAL'];

  const renderContent = () => {
    switch (activeTab) {
      case 'PROBLEMS':
        return (
          <div className="p-4 text-sm text-[var(--text-primary)]">
            <p>No problems have been detected so far.</p>
          </div>
        );
      case 'OUTPUT':
      case 'DEBUG CONSOLE':
        return (
          <div className="p-4 text-sm text-[var(--text-primary)]">
            <p>Content for {activeTab.toLowerCase()} will be shown here.</p>
          </div>
        );
      case 'TERMINAL':
        return (
          <div className="p-4 text-sm space-y-1 text-[var(--text-primary)] font-mono">
            <p>Windows PowerShell</p>
            <p>Copyright (C) Microsoft Corporation. All rights reserved.</p>
            <br />
            <p>
              <span className="text-[#007acc]">PS C:\Users\Mohamed\Portfolio&gt;</span>
              <span className="ml-2">Welcome to my interactive portfolio!</span>
            </p>
            <p>
              <span className="text-[#007acc]">PS C:\Users\Mohamed\Portfolio&gt;</span>
              <span className="ml-2">npm run start</span>
            </p>
            <p>
              <span className="text-green-500">&gt;</span> Server is running...
            </p>
            <p>
              <span>Click to view the website: </span>
              <button onClick={onLinkClick} className="text-[var(--accent-primary)] underline hover:text-[var(--accent-secondary)]">http://localhost:3000</button>
            </p>
             <div className="flex items-center !mt-4">
                <span className="text-[#007acc]">PS C:\Users\Mohamed\Portfolio&gt;</span>
                <span className="bg-[var(--text-primary)] w-2 h-4 ml-2 animate-pulse" aria-hidden="true"></span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col bg-[var(--bg-ide-panel)] rounded-lg overflow-hidden border border-[var(--border-color)] transition-colors duration-300">
      <header className="bg-[var(--bg-ide-header)] text-xs text-[var(--text-secondary)] flex items-center justify-between px-4 py-1">
        <div className="flex items-center space-x-4">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-2 py-0.5 rounded cursor-pointer ${activeTab === tab ? 'bg-[var(--bg-ide-panel)] text-[var(--text-primary)]' : 'hover:text-[var(--text-primary)]'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-[var(--bg-ide-hover)]"
          aria-label="Close Terminal"
        >
          <X className="h-4 w-4" />
        </button>
      </header>
      <div className="flex-1 overflow-y-auto bg-[var(--bg-ide-main)]">
        {renderContent()}
      </div>
    </div>
  );
};

export default Terminal;
