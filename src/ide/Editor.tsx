
import React from 'react';
import type { Tab } from '../types';
import { X } from 'lucide-react';
import Welcome from '../website/Welcome';

interface EditorProps {
  openTabs: Tab[];
  activeTabId: string;
  onCloseTab: (tabId: string) => void;
  onSelectTab: (tabId: string) => void;
  onOpenFile: (file: Tab) => void;
}

const Editor: React.FC<EditorProps> = ({ openTabs, activeTabId, onCloseTab, onSelectTab, onOpenFile }) => {
  const activeTab = openTabs.find(tab => tab.id === activeTabId);

  // When no files are open, show the Welcome (Empty State) view
  if (openTabs.length === 0) {
    return (
      <div className="flex-1 flex flex-col bg-[var(--bg-ide-main)] min-h-0 transition-colors duration-300">
        <Welcome onNewFile={onOpenFile} />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-[var(--bg-ide-main)] min-h-0 transition-colors duration-300">
      <div 
        className="flex bg-[var(--bg-ide-header)] overflow-x-auto scrollbar-hide" 
        role="tablist" 
        aria-label="File tabs"
      >
        {openTabs.map(tab => (
          <div
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            onKeyDown={(e) => e.key === 'Enter' && onSelectTab(tab.id)}
            className={`flex items-center px-3 py-2 text-sm cursor-pointer border-r border-[var(--border-color)] transition-colors duration-200 min-w-fit flex-shrink-0 ${
              activeTabId === tab.id
                ? 'bg-[var(--bg-ide-main)] text-[var(--text-primary)] border-t-2 border-t-[#007acc]'
                : 'bg-[var(--bg-ide-header)] text-[var(--text-secondary)] hover:bg-[var(--bg-ide-hover)] border-t-2 border-t-transparent'
            }`}
            role="tab"
            aria-selected={activeTabId === tab.id}
            tabIndex={0}
          >
            <tab.icon className="w-4 h-4 mr-2" aria-hidden="true" />
            <span className="truncate max-w-[120px]">{tab.title}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCloseTab(tab.id);
              }}
              className="ml-2 p-0.5 rounded-md hover:bg-[var(--bg-ide-hover)] group-hover:text-[var(--text-primary)]"
              aria-label={`Close ${tab.title}`}
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>

      <div
        className={`flex-1 overflow-auto border-t border-[var(--border-color)] ${activeTab ? 'p-2 sm:p-4' : ''}`}
        role="tabpanel"
      >
        {activeTab ? <activeTab.component /> : null}
      </div>
    </div>
  );
};

export default Editor;
