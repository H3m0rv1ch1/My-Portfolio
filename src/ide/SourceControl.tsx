
import React, { useState } from 'react';
import { RefreshCw, Check, Plus, Undo2, FileInput, MoreHorizontal, ChevronDown, FileCode2, Palette } from 'lucide-react';

const SourceControl: React.FC = () => {
  const [commitMessage, setCommitMessage] = useState('');
  const [isCommitting, setIsCommitting] = useState(false);
  const [changes, setChanges] = useState([
    { name: 'projects.ts', status: 'M', icon: FileCode2 },
    { name: 'contact.css', status: 'M', icon: Palette },
  ]);
  const [isChangesOpen, setIsChangesOpen] = useState(true);

  const handleCommit = () => {
    if (!commitMessage.trim() || changes.length === 0) return;
    setIsCommitting(true);
    setTimeout(() => {
      setIsCommitting(false);
      setCommitMessage('');
      setChanges([]);
    }, 1500);
  };

  const hasChanges = changes.length > 0;
  const canCommit = !!commitMessage.trim() && hasChanges && !isCommitting;

  return (
    <div className="w-full bg-[var(--bg-ide-panel)] text-sm text-[var(--text-primary)] h-full flex flex-col rounded-lg transition-colors duration-300">
      <header className="flex items-center justify-between px-4 py-2 flex-shrink-0 bg-[var(--bg-ide-header)]">
        <h2 className="uppercase tracking-widest text-xs text-[var(--text-secondary)] font-semibold">Source Control</h2>
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-[var(--bg-ide-hover)] rounded" title="Refresh">
            <RefreshCw className="w-4 h-4 text-[var(--text-secondary)]" />
          </button>
          <button className="p-1 hover:bg-[var(--bg-ide-hover)] rounded" title="More Actions">
            <MoreHorizontal className="w-4 h-4 text-[var(--text-secondary)]" />
          </button>
        </div>
      </header>
      
      <div className="px-2 pb-2 flex-1 flex flex-col min-h-0">
        <div className="border border-[var(--border-color)] rounded-lg p-2 bg-[var(--bg-ide-input)]">
          <textarea
            placeholder="Message (Ctrl+Enter to commit on 'main')"
            value={commitMessage}
            onChange={(e) => setCommitMessage(e.target.value)}
            className="w-full bg-transparent border-none focus:outline-none p-1 text-sm placeholder-[var(--text-tertiary)] resize-none h-20 text-[var(--text-primary)]"
            onKeyDown={(e) => {
              if (e.ctrlKey && e.key === 'Enter') {
                handleCommit();
              }
            }}
          />
          <div className="flex items-center mt-2 space-x-2">
            <button
              onClick={handleCommit}
              disabled={!canCommit}
              className="flex-1 bg-[#007acc] text-white py-1.5 rounded text-sm font-semibold hover:bg-[#0063a5] disabled:bg-[var(--bg-tertiary)] disabled:text-[var(--text-tertiary)] disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              {isCommitting ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  <span>Committing...</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  <span>Commit</span>
                </>
              )}
            </button>
            <button className="p-2 hover:bg-[var(--bg-ide-hover)] rounded-md text-[var(--text-secondary)]" title="More Actions...">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="mt-2 flex-1 overflow-y-auto">
          {hasChanges ? (
             <div>
              <button onClick={() => setIsChangesOpen(!isChangesOpen)} className="flex items-center w-full py-1 text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                <ChevronDown className={`w-4 h-4 mr-1 transition-transform ${isChangesOpen ? '' : '-rotate-90'}`} />
                <span>Changes</span>
                <span className="ml-auto text-xs bg-[var(--bg-chip)] rounded-full px-2 py-0.5">{changes.length}</span>
              </button>
              {isChangesOpen && (
                <ul>
                  {changes.map((change) => (
                    <li key={change.name} className="group flex items-center justify-between py-1 px-2 rounded hover:bg-[var(--bg-ide-hover)] cursor-pointer">
                      <div className="flex items-center truncate">
                        <change.icon className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="truncate text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">{change.name}</span>
                      </div>
                      <div className="flex items-center space-x-1 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--text-secondary)]">
                        <button title="Open File" className="p-1 hover:text-[var(--text-primary)]"><FileInput className="w-4 h-4" /></button>
                        <button title="Discard Changes" className="p-1 hover:text-[var(--text-primary)]"><Undo2 className="w-4 h-4" /></button>
                        <button title="Stage Change" className="p-1 hover:text-[var(--text-primary)]"><Plus className="w-4 h-4" /></button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <p className="text-xs text-[var(--text-tertiary)] px-2 mt-4">No changes.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SourceControl;
