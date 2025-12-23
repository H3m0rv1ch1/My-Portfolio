
import React, { useState, useEffect, useRef } from 'react';
import {
  Files, Search, GitGraph, Play, Blocks,
  UserCircle2, Settings,
} from 'lucide-react';
import { View } from '../constants';
import profileImg from '../assets/profile.png';

interface ActivityBarProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

const ActivityBar: React.FC<ActivityBarProps> = ({ activeView, setActiveView }) => {
  const [isAccountMenuOpen, setAccountMenuOpen] = useState(false);
  const [isSettingsMenuOpen, setSettingsMenuOpen] = useState(false);
  const accountMenuRef = useRef<HTMLDivElement>(null);
  const settingsMenuRef = useRef<HTMLDivElement>(null);

  const commonButtonClasses = "w-10 h-10 p-2 flex items-center justify-center cursor-pointer relative transition-colors duration-200 ease-in-out";
  const activeClasses = "text-[var(--text-primary)] bg-[var(--bg-ide-main)] rounded-md";
  const inactiveClasses = "text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-ide-hover)] hover:rounded-md";

  const topIcons = [
    { view: View.EXPLORER, icon: Files, title: 'Explorer' },
    { view: View.SEARCH, icon: Search, title: 'Search' },
    { view: View.SOURCE_CONTROL, icon: GitGraph, title: 'Source Control', notification: 1 },
    { view: View.DEBUG, icon: Play, title: 'Run and Debug' },
    { view: View.EXTENSIONS, icon: Blocks, title: 'Extensions' },
  ];

  const bottomIcons = [
    { id: 'account', icon: UserCircle2, title: 'Accounts', onClick: () => setAccountMenuOpen(v => !v) },
    { id: 'settings', icon: Settings, title: 'Manage', onClick: () => setSettingsMenuOpen(v => !v) },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (accountMenuRef.current && !accountMenuRef.current.contains(event.target as Node)) {
        setAccountMenuOpen(false);
      }
      if (settingsMenuRef.current && !settingsMenuRef.current.contains(event.target as Node)) {
        setSettingsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  return (
    <div className="w-12 bg-[var(--bg-ide-activity)] flex flex-col items-center justify-between p-1 transition-colors duration-300">
      <div className="w-full space-y-1 pt-2">
        {topIcons.map((item, index) => (
          <button 
            key={index}
            onClick={() => item.view && setActiveView(item.view)} 
            className={`${commonButtonClasses} ${item.view && activeView === item.view ? activeClasses : inactiveClasses}`}
            title={item.title}
            aria-label={item.title}
          >
            <item.icon className="w-6 h-6" strokeWidth={1.5} />
            {item.notification && activeView !== View.SOURCE_CONTROL && (
              <span className="absolute top-2 right-2 block h-4 w-4 rounded-full bg-[#007acc] text-white text-[10px] leading-4 text-center">
                {item.notification}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="w-full space-y-1">
        {bottomIcons.map((item, index) => (
           <div key={index} className="relative" ref={item.id === 'account' ? accountMenuRef : settingsMenuRef}>
             <button
              onClick={item.onClick}
              className={`${commonButtonClasses} ${inactiveClasses}`}
              title={item.title}
              aria-label={item.title}
            >
              <item.icon className="w-6 h-6" strokeWidth={1.5} />
            </button>
           </div>
        ))}
        {isAccountMenuOpen && (
          <div className="absolute bottom-20 left-14 w-60 bg-[var(--bg-ide-panel)] border border-[var(--border-color)] rounded-md shadow-lg text-sm z-10 text-[var(--text-primary)] animate-in fade-in zoom-in-95 duration-100 origin-bottom-left">
            <div className="p-3 border-b border-[var(--border-color)] flex items-center gap-3">
               <img 
                  src={profileImg} 
                  alt="Profile" 
                  className="w-8 h-8 rounded-full object-cover border border-[var(--border-color)]"
                />
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate">Mohamed Elghanam</p>
                <p className="text-xs text-[var(--text-secondary)] truncate">mohamed.atef.23@gmail.com</p>
              </div>
            </div>
            <div className="py-1">
              <a href="#" className="block px-4 py-2 hover:bg-[var(--bg-ide-hover)]">Manage Account</a>
              <a href="#" className="block px-4 py-2 hover:bg-[var(--bg-ide-hover)]">Sign Out</a>
            </div>
          </div>
        )}
        {isSettingsMenuOpen && (
          <div className="absolute bottom-10 left-14 w-60 bg-[var(--bg-ide-panel)] border border-[var(--border-color)] rounded-md shadow-lg text-sm z-10 text-[var(--text-primary)] animate-in fade-in zoom-in-95 duration-100 origin-bottom-left">
             <div className="py-1">
                <a href="#" className="block px-4 py-2 hover:bg-[var(--bg-ide-hover)]">Command Palette...</a>
             </div>
             <div className="py-1 border-t border-[var(--border-color)]">
                <a href="#" className="block px-4 py-2 hover:bg-[var(--bg-ide-hover)]">Settings</a>
                <a href="#" className="block px-4 py-2 hover:bg-[var(--bg-ide-hover)]">Keyboard Shortcuts</a>
             </div>
              <div className="py-1 border-t border-[var(--border-color)]">
                <a href="#" className="block px-4 py-2 hover:bg-[var(--bg-ide-hover)]">Color Theme</a>
                <a href="#" className="block px-4 py-2 hover:bg-[var(--bg-ide-hover)]">File Icon Theme</a>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityBar;
