import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import ActivityBar from './ActivityBar';
import FileExplorer from './FileExplorer';
import Editor from './Editor';
import StatusBar from './StatusBar';
import Terminal from './Terminal';
import { initialTabs, View } from '../constants';
import type { Tab, TerminalTab } from '../types';
import SourceControl from './SourceControl';
import Search from './Search';
import Debug from './Debug';
import Extensions from './Extensions';
import { CommandPalette } from './CommandPalette';
import { searchableFiles } from '../searchableContent';
import { FileText, CheckCircle2, AlertCircle } from 'lucide-react';

interface IDEProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const IDE: React.FC<IDEProps> = ({ theme, onToggleTheme }) => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState<View>(View.EXPLORER);
  const [openTabs, setOpenTabs] = useState<Tab[]>(initialTabs);
  const [activeTabId, setActiveTabId] = useState<string>(initialTabs[0]?.id || '');
  const [activeTerminalTab, setActiveTerminalTab] = useState<TerminalTab | null>('TERMINAL');
  
  const [isSidebarPanelOpen, setIsSidebarPanelOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768;
    }
    return true;
  });

  const [isSidebarPanelRendered, setIsSidebarPanelRendered] = useState(true);
  const [isTerminalRendered, setIsTerminalRendered] = useState(true);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'info' } | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const [sidebarWidth, setSidebarWidth] = useState(300);
  const [terminalHeight, setTerminalHeight] = useState(250);
  const sidebarResizingRef = useRef(false);
  const terminalResizingRef = useRef(false);
  
  const [isMobile, setIsMobile] = useState(false);

  const isTerminalOpen = activeTerminalTab !== null;
  const activeTab = openTabs.find(tab => tab.id === activeTabId);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.fontFamily = "'Fira Code', monospace";
    document.body.classList.remove('website-view');
  }, []);

  useEffect(() => {
    if (isSidebarPanelOpen) {
      setIsSidebarPanelRendered(true);
    } else {
      const timer = setTimeout(() => setIsSidebarPanelRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isSidebarPanelOpen]);

  useEffect(() => {
    if (isTerminalOpen) {
      setIsTerminalRendered(true);
    } else {
      const timer = setTimeout(() => setIsTerminalRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isTerminalOpen]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sidebarResizingRef.current) {
        const newWidth = e.clientX - 48;
        if (newWidth > 150 && newWidth < 800) {
          setSidebarWidth(newWidth);
        }
      }
      if (terminalResizingRef.current) {
        const newHeight = window.innerHeight - e.clientY - 22;
        if (newHeight > 100 && newHeight < window.innerHeight - 100) {
          setTerminalHeight(newHeight);
        }
      }
    };

    const handleMouseUp = () => {
      sidebarResizingRef.current = false;
      terminalResizingRef.current = false;
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const startResizingSidebar = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isMobile) return;
    sidebarResizingRef.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  };

  const startResizingTerminal = (e: React.MouseEvent) => {
    e.preventDefault();
    terminalResizingRef.current = true;
    document.body.style.cursor = 'row-resize';
    document.body.style.userSelect = 'none';
  };

  const showNotification = (message: string, type: 'success' | 'info' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleOpenFile = useCallback((file: Tab) => {
    setOpenTabs(prevTabs => {
      if (prevTabs.find(tab => tab.id === file.id)) {
        setActiveTabId(file.id);
        return prevTabs;
      }
      return [...prevTabs, file];
    });
    setActiveTabId(file.id);
    if (window.innerWidth < 768) {
      setIsSidebarPanelOpen(false);
    }
  }, []);

  const handleCloseTab = useCallback((tabId: string) => {
    setOpenTabs(prevTabs => {
      const tabIndex = prevTabs.findIndex(tab => tab.id === tabId);
      if (tabIndex === -1) return prevTabs;
      const newTabs = prevTabs.filter(tab => tab.id !== tabId);
      if (activeTabId === tabId) {
        if (newTabs.length > 0) {
          const newActiveIndex = Math.max(0, tabIndex - 1);
          setActiveTabId(newTabs[newActiveIndex].id);
        } else {
          setActiveTabId('');
        }
      }
      return newTabs;
    });
  }, [activeTabId]);

  const handleSelectTab = useCallback((tabId: string) => {
    setActiveTabId(tabId);
  }, []);

  const handleTerminalTabChange = useCallback((tab: TerminalTab) => {
    setActiveTerminalTab(tab);
  }, []);

  const toggleTerminal = useCallback((tab: TerminalTab) => {
    setActiveTerminalTab(prevTab => (prevTab === tab ? null : tab));
  }, []);

  const closeTerminal = useCallback(() => {
    setActiveTerminalTab(null);
  }, []);

  const toggleSidebarPanel = useCallback(() => {
    setIsSidebarPanelOpen(prev => !prev);
  }, []);

  const handleViewChange = useCallback((view: View) => {
    setActiveView(view);
    if (!isSidebarPanelOpen) {
      setIsSidebarPanelOpen(true);
    }
  }, [isSidebarPanelOpen]);

  const handleGoLive = () => {
    navigate('/website');
  };

  const handleMenuAction = useCallback((actionId: string) => {
    switch (actionId) {
      case 'commandPalette':
      case 'showCommands':
        setIsCommandPaletteOpen(true);
        break;
      case 'newFile':
        const newFileId = `untitled-${Date.now()}`;
        const newFile: Tab = {
          id: newFileId,
          title: 'Untitled-1',
          component: () => (
            <div className="p-8 text-[var(--text-secondary)]">
              <h3 className="text-xl font-bold mb-4">Untitled-1</h3>
              <p>Start typing your code here...</p>
              <div className="mt-4 p-4 bg-[var(--bg-ide-panel)] border border-[var(--border-color)] rounded font-mono text-sm">
                console.log("Hello World");
              </div>
            </div>
          ),
          icon: FileText
        };
        handleOpenFile(newFile);
        showNotification('New file created');
        break;
      case 'openFile':
        setIsCommandPaletteOpen(true);
        showNotification('Use Command Palette to navigate', 'info');
        break;
      case 'save':
        showNotification('File saved successfully');
        break;
      case 'saveAs':
        showNotification('File saved as...');
        break;
      case 'exit':
        showNotification('Cannot exit browser environment', 'info');
        break;
      case 'viewExplorer':
        handleViewChange(View.EXPLORER);
        break;
      case 'viewSearch':
      case 'find':
      case 'replace':
        handleViewChange(View.SEARCH);
        break;
      case 'viewSourceControl':
        handleViewChange(View.SOURCE_CONTROL);
        break;
      case 'viewDebug':
      case 'startDebugging':
        handleViewChange(View.DEBUG);
        showNotification('Debugging started (Mock)');
        break;
      case 'viewExtensions':
        handleViewChange(View.EXTENSIONS);
        break;
      case 'newTerminal':
        toggleTerminal('TERMINAL');
        break;
      case 'copy':
        const currentFile = openTabs.find(t => t.id === activeTabId);
        if (currentFile) {
          const content = searchableFiles.find(sf => sf.file.id === currentFile.id)?.content;
          if (content) {
            navigator.clipboard.writeText(content).then(() => {
              showNotification('File content copied to clipboard');
            }).catch(() => {
              showNotification('Failed to copy content', 'info');
            });
          } else {
            showNotification('Content not available for copy', 'info');
          }
        } else {
          showNotification('No active file to copy', 'info');
        }
        break;
      case 'paste':
        showNotification('Pasted from clipboard (Mock)', 'info');
        break;
      case 'cut':
        showNotification('Cut to clipboard (Mock)', 'info');
        break;
      case 'toggleTheme':
        onToggleTheme();
        break;
      case 'goLive':
        handleGoLive();
        break;
      case 'welcome':
        setOpenTabs([]);
        setActiveTabId('');
        setIsSidebarPanelOpen(false);
        setActiveTerminalTab(null);
        break;
      case 'about':
        showNotification('Mohamed Elghanam Portfolio v1.0.0');
        break;
      default:
        showNotification(`Action: ${actionId}`, 'info');
    }
  }, [handleOpenFile, handleViewChange, toggleTerminal, activeTabId, openTabs, onToggleTheme, navigate]);

  return (
    <div className="flex flex-col text-[var(--text-secondary)] font-mono bg-[var(--bg-ide-main)] overflow-hidden transition-colors duration-300 relative" style={{ height: 'calc(100vh / 0.9)' }}>
      <Header
        onToggleSidebarPanel={toggleSidebarPanel}
        onToggleTerminal={() => toggleTerminal('TERMINAL')}
        theme={theme}
        onToggleTheme={onToggleTheme}
        onMenuAction={handleMenuAction}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onCommand={handleMenuAction}
      />

      <div className="flex flex-1 min-h-0 relative">
        <ActivityBar activeView={activeView} setActiveView={handleViewChange} />

        {isSidebarPanelRendered && (
          <div
            className={`
              h-full flex
              ${isSidebarPanelOpen ? 'animate-slide-in-left' : 'animate-slide-out-left'}
              absolute left-12 z-20 md:static md:z-auto
              flex-shrink-0
              bg-[var(--bg-ide-main)] md:bg-transparent
              shadow-2xl md:shadow-none
            `}
            style={{
              width: isSidebarPanelOpen ? (isMobile ? 'calc(100vw - 48px)' : sidebarWidth) : 0,
              maxWidth: isMobile ? 'calc(100vw - 48px)' : '80vw'
            }}
          >
            <div className="h-full p-2 w-full overflow-hidden border-r border-[var(--border-color)] md:border-none">
              {activeView === View.EXPLORER && <FileExplorer onFileSelect={handleOpenFile} />}
              {activeView === View.SOURCE_CONTROL && <SourceControl />}
              {activeView === View.SEARCH && <Search onFileSelect={handleOpenFile} />}
              {activeView === View.DEBUG && <Debug />}
              {activeView === View.EXTENSIONS && <Extensions />}
            </div>
            {!isMobile && (
              <div
                className="w-1 hover:w-1.5 h-full cursor-col-resize hover:bg-blue-500/50 transition-colors bg-transparent absolute right-0 top-0 z-50 flex-shrink-0"
                onMouseDown={startResizingSidebar}
              />
            )}
          </div>
        )}

        <div className="flex-1 flex flex-col min-w-0 pt-2 pr-2 pb-2 pl-2 md:pl-0">
          <main className="flex-1 flex flex-col min-h-0 rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--bg-ide-main)]">
            <Editor
              openTabs={openTabs}
              activeTabId={activeTabId}
              onCloseTab={handleCloseTab}
              onSelectTab={handleSelectTab}
              onOpenFile={handleOpenFile}
            />
          </main>
          {isTerminalRendered && activeTerminalTab && (
            <>
              <div
                className="h-1 hover:h-1.5 w-full cursor-row-resize hover:bg-blue-500/50 transition-colors bg-transparent flex-shrink-0"
                onMouseDown={startResizingTerminal}
              />
              <div
                className={`${isTerminalOpen ? 'animate-slide-up' : 'animate-slide-down'} bg-[var(--bg-ide-panel)] border border-[var(--border-color)] rounded-lg mt-1 overflow-hidden`}
                style={{ height: isMobile ? '40%' : terminalHeight }}
              >
                <Terminal
                  onClose={closeTerminal}
                  activeTab={activeTerminalTab}
                  onTabChange={handleTerminalTabChange}
                  onLinkClick={handleGoLive}
                />
              </div>
            </>
          )}
        </div>
      </div>

      <StatusBar
        onToggleTerminal={() => toggleTerminal('PROBLEMS')}
        onSwitchView={handleViewChange}
        activeTab={activeTab}
        onGoLive={handleGoLive}
      />

      {notification && (
        <div className="absolute bottom-10 right-4 md:right-8 z-[200] bg-[var(--bg-ide-panel)] border border-[var(--border-color)] text-[var(--text-primary)] px-4 py-3 rounded shadow-2xl animate-slide-up flex items-center gap-3 max-w-[90%] md:max-w-md">
          {notification.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
          )}
          <span className="text-sm font-medium">{notification.message}</span>
        </div>
      )}
    </div>
  );
};

export default IDE;
