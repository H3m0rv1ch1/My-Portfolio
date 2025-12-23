
import type { FC } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface Tab {
  id: string;
  title: string;
  component: FC;
  icon: LucideIcon;
}

export interface FileSystemNode {
  name: string;
  type: 'file' | 'folder';
  icon?: LucideIcon;
  children?: FileSystemNode[];
  meta?: Tab; // For clickable files
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl: string;
}

export interface Service {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export type TerminalTab = 'PROBLEMS' | 'OUTPUT' | 'DEBUG CONSOLE' | 'TERMINAL';

export interface SearchMatch {
  lineNumber: number;
  lineContent: string;
  positions: { start: number; length: number }[];
}

export interface SearchResult {
  file: Tab;
  matches: SearchMatch[];
}