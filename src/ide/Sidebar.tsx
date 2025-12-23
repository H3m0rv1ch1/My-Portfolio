import React from 'react';
import ActivityBar from './ActivityBar';
import FileExplorer from './FileExplorer';
import { View } from '../constants';
import type { Tab } from '../types';

interface SidebarProps {
  activeView: View;
  setActiveView: (view: View) => void;
  onFileSelect: (file: Tab) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, onFileSelect }) => {
  return (
    <div className="flex h-full animate-slide-in-left">
      <ActivityBar activeView={activeView} setActiveView={setActiveView} />
      <div className="p-2 h-full">
        <FileExplorer onFileSelect={onFileSelect} />
      </div>
    </div>
  );
};

export default Sidebar;