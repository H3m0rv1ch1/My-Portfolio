
import React, { useState, useEffect } from 'react';
import { 
  GitBranch, 
  RefreshCcw, 
  XCircle, 
  AlertTriangle,
  Bell,
  Check
} from 'lucide-react';
import { View } from '../constants';
import type { Tab } from '../types';

interface StatusBarProps {
  onToggleTerminal: () => void;
  onSwitchView: (view: View) => void;
  activeTab?: Tab;
  onGoLive?: () => void;
}

const StatusBar: React.FC<StatusBarProps> = ({ onToggleTerminal, onSwitchView, activeTab, onGoLive }) => {
  const [syncState, setSyncState] = useState<'idle' | 'syncing' | 'synced'>('idle');
  const [showNotification, setShowNotification] = useState(false);

  const handleSyncClick = () => {
    if (syncState === 'syncing') return;
    setSyncState('syncing');
    setTimeout(() => {
      setSyncState('synced');
    }, 2000);
  };
  
  useEffect(() => {
    if (syncState === 'synced') {
      const timer = setTimeout(() => {
        setSyncState('idle');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [syncState]);

  const handleNotificationClick = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  }

  const getFileLanguage = (fileName?: string) => {
    if (!fileName) return 'Plain Text';
    const ext = fileName.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'ts': return 'TypeScript';
      case 'tsx': return 'TypeScript React';
      case 'js': return 'JavaScript';
      case 'jsx': return 'JavaScript React';
      case 'css': return 'CSS';
      case 'md': return 'Markdown';
      case 'html': return 'HTML';
      case 'json': return 'JSON';
      default: return 'Plain Text';
    }
  };

  const renderSyncContent = () => {
    switch(syncState) {
      case 'syncing':
        return (
          <>
            <RefreshCcw className="h-3 w-3 animate-spin" />
            <span>Synchronizing...</span>
          </>
        );
      case 'synced':
        return (
          <>
            <Check className="h-3 w-3" />
            <span>Up to date</span>
          </>
        );
      case 'idle':
      default:
        return (
          <>
            <RefreshCcw className="h-3 w-3" />
            <span>0↓ 2↑</span>
          </>
        );
    }
  };

  return (
    <footer className="bg-[var(--bg-ide-status)] text-white text-[11px] h-[22px] flex items-center justify-between px-2 border-t border-[var(--border-color)] transition-colors duration-300 relative select-none z-30 flex-shrink-0">
      {/* Left Side */}
      <div className="flex items-center space-x-2 h-full">
        <button 
          onClick={() => onSwitchView(View.SOURCE_CONTROL)}
          className="flex items-center space-x-1 hover:bg-white/20 px-2 h-full cursor-pointer transition-colors" 
          title="Source Control"
        >
          <GitBranch className="h-3 w-3" />
          <span className="font-medium">main*</span>
        </button>
        <button 
            onClick={handleSyncClick}
            className="flex items-center space-x-1 hover:bg-white/20 px-2 h-full cursor-pointer transition-colors" 
            title="Synchronize Changes">
          {renderSyncContent()}
        </button>
        <button onClick={onToggleTerminal} title="Toggle Problems Panel" className="flex items-center space-x-3 hover:bg-white/20 px-2 h-full cursor-pointer transition-colors">
            <div className="flex items-center space-x-1">
                <XCircle className="h-3 w-3" />
                <span>0</span>
            </div>
             <div className="flex items-center space-x-1">
                <AlertTriangle className="h-3 w-3" />
                <span>0</span>
            </div>
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-3 h-full">
        <div className="hidden md:flex items-center space-x-3 h-full">
          <div className="hover:bg-white/20 px-2 h-full flex items-center cursor-pointer transition-colors">
            <span>Ln {Math.floor(Math.random() * 50) + 1}, Col {Math.floor(Math.random() * 20) + 1}</span>
          </div>
          <div className="hover:bg-white/20 px-2 h-full flex items-center cursor-pointer transition-colors hidden lg:flex">
              <span>Spaces: 2</span>
          </div>
          <div className="hover:bg-white/20 px-2 h-full flex items-center cursor-pointer transition-colors hidden lg:flex">
              <span>UTF-8</span>
          </div>
          <div className="hover:bg-white/20 px-2 h-full flex items-center cursor-pointer transition-colors font-medium">
             <span>{getFileLanguage(activeTab?.id)}</span>
          </div>
        </div>
        
        <button 
            onClick={onGoLive}
            className="flex items-center space-x-1.5 hover:bg-white/20 px-2 h-full cursor-pointer transition-colors" 
            title="Click to Run Live Website"
        >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            <span className="font-bold">Go Live</span>
        </button>

        <button 
          className="hover:bg-white/20 px-2 h-full flex items-center cursor-pointer transition-colors relative" 
          title="Notifications"
          onClick={handleNotificationClick}
        >
          <Bell className="h-3.5 w-3.5" />
          {showNotification && (
            <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-[var(--bg-ide-panel)] text-[var(--text-primary)] border border-[var(--border-color)] rounded shadow-xl text-xs z-50 animate-fade-in-up">
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>No new notifications</span>
                </div>
            </div>
          )}
        </button>
      </div>
    </footer>
  );
};

export default StatusBar;
