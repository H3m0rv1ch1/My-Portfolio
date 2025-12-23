
import React, { useState, useEffect, useRef } from 'react';
import { Search, Command } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onCommand: (actionId: string) => void;
}

const COMMANDS = [
  { id: 'newFile', category: 'File', label: 'New Text File', shortcut: 'Ctrl+N' },
  { id: 'openFile', category: 'File', label: 'Open File...', shortcut: 'Ctrl+O' },
  { id: 'save', category: 'File', label: 'Save', shortcut: 'Ctrl+S' },
  { id: 'saveAs', category: 'File', label: 'Save As...', shortcut: 'Ctrl+Shift+S' },
  { id: 'viewExplorer', category: 'View', label: 'Show Explorer', shortcut: 'Ctrl+Shift+E' },
  { id: 'viewSearch', category: 'View', label: 'Show Search', shortcut: 'Ctrl+Shift+F' },
  { id: 'viewSourceControl', category: 'View', label: 'Show Source Control', shortcut: 'Ctrl+Shift+G' },
  { id: 'viewDebug', category: 'View', label: 'Show Run and Debug', shortcut: 'Ctrl+Shift+D' },
  { id: 'viewExtensions', category: 'View', label: 'Show Extensions', shortcut: 'Ctrl+Shift+X' },
  { id: 'newTerminal', category: 'Terminal', label: 'Create New Terminal', shortcut: 'Ctrl+Shift+`' },
  { id: 'toggleTheme', category: 'Preferences', label: 'Toggle Color Theme', shortcut: '' },
  { id: 'goLive', category: 'Live Preview', label: 'Switch to Website Mode', shortcut: '' },
  { id: 'copy', category: 'Edit', label: 'Copy Active File Content', shortcut: 'Ctrl+C' },
  { id: 'about', category: 'Help', label: 'About', shortcut: '' },
  { id: 'welcome', category: 'Help', label: 'Welcome', shortcut: '' },
];

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onCommand }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCommands = COMMANDS.filter(cmd =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) || 
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          onCommand(filteredCommands[selectedIndex].id);
          onClose();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onCommand, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24" onClick={onClose}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200" />
        
        <div 
            className="w-[600px] max-w-[90%] bg-[var(--bg-ide-panel)] shadow-2xl rounded-lg border border-[var(--border-color)] overflow-hidden relative flex flex-col max-h-[400px] animate-in slide-in-from-top-4 duration-200"
            onClick={e => e.stopPropagation()}
        >
            <div className="flex items-center px-4 py-3 border-b border-[var(--border-color)]">
                <Command className="w-4 h-4 text-[var(--text-tertiary)] mr-3" />
                <input 
                    ref={inputRef}
                    type="text" 
                    className="flex-1 bg-transparent border-none focus:outline-none text-[var(--text-primary)] placeholder-[var(--text-tertiary)] text-base sm:text-sm font-medium"
                    placeholder="Type a command or search..."
                    value={query}
                    onChange={e => {
                        setQuery(e.target.value);
                        setSelectedIndex(0);
                    }}
                />
            </div>
            <div className="overflow-y-auto flex-1 py-1">
                {filteredCommands.length > 0 ? (
                    filteredCommands.map((cmd, index) => (
                        <div 
                            key={cmd.id}
                            className={`px-4 py-2 text-sm cursor-pointer flex items-center justify-between transition-colors duration-150 border-b border-transparent
                                ${index === selectedIndex ? 'bg-[var(--bg-ide-status)] text-white' : 'text-[var(--text-primary)] hover:bg-[var(--bg-ide-hover)]'}
                            `}
                            onClick={() => {
                                onCommand(cmd.id);
                                onClose();
                            }}
                            onMouseEnter={() => setSelectedIndex(index)}
                        >
                            <div className="flex items-center gap-2">
                                <span className={`text-[10px] uppercase font-bold tracking-wider opacity-70 ${index === selectedIndex ? 'text-white' : 'text-[var(--text-tertiary)]'}`}>{cmd.category}:</span>
                                <span>{cmd.label}</span>
                            </div>
                            {cmd.shortcut && (
                                <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${index === selectedIndex ? 'bg-white/20 text-white' : 'bg-[var(--bg-chip)] text-[var(--text-tertiary)]'}`}>
                                    {cmd.shortcut}
                                </span>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="px-4 py-3 text-[var(--text-tertiary)] text-sm text-center">No matching commands found</div>
                )}
            </div>
            <div className="bg-[var(--bg-ide-main)] px-3 py-1.5 border-t border-[var(--border-color)] text-[10px] text-[var(--text-tertiary)] flex justify-between items-center">
                <span><kbd className="font-sans">↑↓</kbd> to navigate</span>
                <span><kbd className="font-sans">↵</kbd> to select</span>
            </div>
        </div>
    </div>
  );
};
