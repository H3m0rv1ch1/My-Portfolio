

import React, { useState, useRef, useEffect } from 'react';
import { 
  PanelLeft, 
  PanelBottom, 
  Code2,
  Menu
} from 'lucide-react';
import { CloseIcon, MinimizeIcon, MaximizeIcon } from './icons/WindowControlIcons';
import ThemeToggle from '../ThemeToggle';

interface HeaderProps {
  onToggleSidebarPanel: () => void;
  onToggleTerminal: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onMenuAction: (actionId: string) => void;
}

const MENU_ITEMS = {
  File: [
    { label: 'New Text File', shortcut: 'Ctrl+N', actionId: 'newFile' },
    { label: 'Open File...', shortcut: 'Ctrl+O', actionId: 'openFile' },
    { label: 'Save', shortcut: 'Ctrl+S', actionId: 'save' },
    { label: 'Save As...', shortcut: 'Ctrl+Shift+S', actionId: 'saveAs' },
    { type: 'separator' },
    { label: 'Exit', shortcut: '', actionId: 'exit' }
  ],
  Edit: [
    { label: 'Undo', shortcut: 'Ctrl+Z', actionId: 'undo' },
    { label: 'Redo', shortcut: 'Ctrl+Y', actionId: 'redo' },
    { type: 'separator' },
    { label: 'Cut', shortcut: 'Ctrl+X', actionId: 'cut' },
    { label: 'Copy', shortcut: 'Ctrl+C', actionId: 'copy' },
    { label: 'Paste', shortcut: 'Ctrl+V', actionId: 'paste' },
    { type: 'separator' },
    { label: 'Find', shortcut: 'Ctrl+F', actionId: 'find' },
    { label: 'Replace', shortcut: 'Ctrl+H', actionId: 'replace' }
  ],
  Selection: [
    { label: 'Select All', shortcut: 'Ctrl+A', actionId: 'selectAll' },
    { label: 'Expand Selection', shortcut: 'Shift+Alt+Right', actionId: 'expandSelection' },
    { label: 'Shrink Selection', shortcut: 'Shift+Alt+Left', actionId: 'shrinkSelection' },
    { type: 'separator' },
    { label: 'Copy Line Up', shortcut: 'Shift+Alt+Up', actionId: 'copyLineUp' },
    { label: 'Copy Line Down', shortcut: 'Shift+Alt+Down', actionId: 'copyLineDown' }
  ],
  View: [
    { label: 'Command Palette...', shortcut: 'Ctrl+Shift+P', actionId: 'commandPalette' },
    { label: 'Open View...', shortcut: '', actionId: 'openView' },
    { type: 'separator' },
    { label: 'Explorer', shortcut: 'Ctrl+Shift+E', actionId: 'viewExplorer' },
    { label: 'Search', shortcut: 'Ctrl+Shift+F', actionId: 'viewSearch' },
    { label: 'Source Control', shortcut: 'Ctrl+Shift+G', actionId: 'viewSourceControl' },
    { label: 'Run', shortcut: 'Ctrl+Shift+D', actionId: 'viewDebug' },
    { label: 'Extensions', shortcut: 'Ctrl+Shift+X', actionId: 'viewExtensions' }
  ],
  Go: [
    { label: 'Back', shortcut: 'Alt+Left', actionId: 'goBack' },
    { label: 'Forward', shortcut: 'Alt+Right', actionId: 'goForward' },
    { label: 'Go to File...', shortcut: 'Ctrl+P', actionId: 'goToFile' },
    { label: 'Go to Symbol...', shortcut: 'Ctrl+Shift+O', actionId: 'goToSymbol' },
    { label: 'Go to Definition', shortcut: 'F12', actionId: 'goToDefinition' },
    { label: 'Go to Line/Column...', shortcut: 'Ctrl+G', actionId: 'goToLine' }
  ],
  Run: [
    { label: 'Start Debugging', shortcut: 'F5', actionId: 'startDebugging' },
    { label: 'Run Without Debugging', shortcut: 'Ctrl+F5', actionId: 'runWithoutDebugging' },
    { label: 'Stop Debugging', shortcut: 'Shift+F5', actionId: 'stopDebugging' },
    { label: 'Restart Debugging', shortcut: 'Ctrl+Shift+F5', actionId: 'restartDebugging' }
  ],
  Terminal: [
    { label: 'New Terminal', shortcut: 'Ctrl+Shift+`', actionId: 'newTerminal' },
    { label: 'Split Terminal', shortcut: 'Ctrl+Shift+5', actionId: 'splitTerminal' },
    { type: 'separator' },
    { label: 'Run Task...', shortcut: '', actionId: 'runTask' },
    { label: 'Configure Tasks...', shortcut: '', actionId: 'configureTasks' }
  ],
  Help: [
    { label: 'Welcome', shortcut: '', actionId: 'welcome' },
    { label: 'Show All Commands', shortcut: 'Ctrl+Shift+P', actionId: 'showCommands' },
    { label: 'Documentation', shortcut: '', actionId: 'documentation' },
    { label: 'Release Notes', shortcut: '', actionId: 'releaseNotes' },
    { type: 'separator' },
    { label: 'About', shortcut: '', actionId: 'about' }
  ]
};

const Header: React.FC<HeaderProps> = ({ 
  onToggleSidebarPanel, 
  onToggleTerminal, 
  theme,
  onToggleTheme,
  onMenuAction
}) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuClick = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const handleMouseEnter = (menuName: string) => {
    if (activeMenu) {
      setActiveMenu(menuName);
    }
  };

  const handleItemClick = (actionId?: string) => {
    if (actionId) {
      onMenuAction(actionId);
    }
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
  };

  const menuItemClasses = "cursor-default hover:bg-[var(--bg-ide-hover)] hover:text-[var(--text-primary)] transition-colors px-2.5 py-0.5 rounded text-[13px] select-none flex items-center";
  const activeMenuItemClasses = "bg-[var(--bg-ide-hover)] text-[var(--text-primary)]";

  return (
    <header className="bg-[var(--bg-ide-header)] text-[13px] text-[var(--text-secondary)] flex items-center justify-between pl-0 pr-4 flex-shrink-0 h-12 transition-colors duration-300 border-b border-[var(--border-color)] sm:border-none select-none z-50 relative">
      {/* Left side: Menu */}
      <div className="flex items-center h-full">
        {/* Logo - Aligned with ActivityBar (w-12) */}
        <div className="w-12 h-full flex items-center justify-center flex-shrink-0">
            <div className="p-0.5 bg-blue-500/10 rounded border border-blue-500/20">
               <Code2 className="w-6 h-6 text-blue-500" strokeWidth={2} />
            </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center ml-1" ref={menuRef}>
          {Object.entries(MENU_ITEMS).map(([menuName, items]) => (
            <div key={menuName} className="relative">
              <button
                className={`${menuItemClasses} ${activeMenu === menuName ? activeMenuItemClasses : ''}`}
                onClick={() => handleMenuClick(menuName)}
                onMouseEnter={() => handleMouseEnter(menuName)}
              >
                {menuName}
              </button>

              {activeMenu === menuName && (
                <div className="absolute top-full left-0 min-w-[220px] bg-[var(--bg-ide-panel)] border border-[var(--border-color)] shadow-xl rounded-md py-1 z-50 flex flex-col mt-0.5">
                  {items.map((item, index) => {
                    if (item.type === 'separator') {
                      return <div key={index} className="h-px bg-[var(--border-color)] my-1 mx-2" />;
                    }
                    return (
                      <button
                        key={index}
                        className="flex items-center justify-between px-4 py-1.5 text-left hover:bg-[var(--accent-primary)] hover:text-white group w-full"
                        onClick={() => handleItemClick(item.actionId)}
                      >
                        <span className="text-[var(--text-primary)] group-hover:text-white text-[13px]">{item.label}</span>
                        {item.shortcut && (
                          <span className="ml-4 text-xs text-[var(--text-tertiary)] group-hover:text-white/80">{item.shortcut}</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden ml-1 relative" ref={mobileMenuRef}>
             <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="hover:bg-[var(--bg-ide-hover)] hover:text-[var(--text-primary)] transition-colors p-2 rounded flex items-center justify-center h-full"
                aria-label="Menu"
            >
                <Menu className="w-5 h-5" />
            </button>
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-[var(--bg-ide-panel)] border border-[var(--border-color)] shadow-xl rounded-md py-2 z-50 flex flex-col animate-in fade-in zoom-in-95 duration-100">
                    <button onClick={() => handleItemClick('commandPalette')} className="text-left px-4 py-3 hover:bg-[var(--bg-ide-hover)] text-[var(--text-primary)] flex justify-between items-center border-b border-[var(--border-color)] mb-1">
                        <span className="font-medium">Command Palette</span>
                        <span className="text-xs text-[var(--text-tertiary)] bg-[var(--bg-chip)] px-1.5 py-0.5 rounded">Ctrl+Shift+P</span>
                    </button>
                    
                    <button onClick={() => handleItemClick('newFile')} className="text-left px-4 py-2.5 hover:bg-[var(--bg-ide-hover)] text-[var(--text-primary)]">New File</button>
                    <button onClick={() => handleItemClick('viewExplorer')} className="text-left px-4 py-2.5 hover:bg-[var(--bg-ide-hover)] text-[var(--text-primary)]">Explorer</button>
                    <button onClick={() => handleItemClick('viewSearch')} className="text-left px-4 py-2.5 hover:bg-[var(--bg-ide-hover)] text-[var(--text-primary)]">Search</button>
                    
                    <div className="h-px bg-[var(--border-color)] my-1 mx-2" />
                    
                    <button onClick={() => handleItemClick('goLive')} className="text-left px-4 py-3 hover:bg-[var(--bg-ide-hover)] text-blue-400 font-bold flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Go Live (Website)
                    </button>
                </div>
            )}
        </div>
      </div>

      {/* Right side: Action buttons */}
      <div className="flex items-center">
        <div className="flex items-center space-x-2">
            
            <ThemeToggle theme={theme} onToggle={onToggleTheme} size="sm" />
            
            <div className="flex items-center space-x-1 ml-2 border-l border-[var(--border-color)] pl-2">
              <button onClick={onToggleSidebarPanel} className="p-2 md:p-1 hover:bg-[var(--bg-ide-hover)] rounded transition-colors" title="Toggle Explorer" aria-label="Toggle Explorer">
                  <PanelLeft className="w-5 h-5 md:w-4 md:h-4 text-[var(--text-tertiary)] hover:text-[var(--text-primary)]" />
              </button>
              <button onClick={onToggleTerminal} className="p-2 md:p-1 hover:bg-[var(--bg-ide-hover)] rounded transition-colors" title="Toggle Terminal" aria-label="Toggle Terminal">
                  <PanelBottom className="w-5 h-5 md:w-4 md:h-4 text-[var(--text-tertiary)] hover:text-[var(--text-primary)]" />
              </button>
            </div>
        </div>
        <div className="h-3 w-px bg-[var(--border-color)] mx-3 hidden sm:block"></div>
        <div className="flex items-center space-x-2 group hidden sm:flex">
             <MinimizeIcon className="w-3 h-3 cursor-pointer text-[var(--text-tertiary)] hover:text-[var(--text-primary)]" />
             <MaximizeIcon className="w-3 h-3 cursor-pointer text-[var(--text-tertiary)] hover:text-[var(--text-primary)]" />
             <CloseIcon className="w-3 h-3 cursor-pointer text-[var(--text-tertiary)] hover:text-[var(--text-primary)]" />
        </div>
      </div>
    </header>
  );
};

export default Header;
