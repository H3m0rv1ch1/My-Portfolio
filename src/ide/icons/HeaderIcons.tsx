

import React from 'react';
import type { FC, SVGProps } from 'react';

export const VscTerminalIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>App Icon</title>
        <rect x="4.5" y="4.5" width="15" height="15" rx="3" fill="#2c2c2c"/>
        <rect x="4.5" y="4.5" width="15" height="15" rx="3" stroke="#39d380" strokeWidth="1.5"/>
        <circle cx="9" cy="12" r="1.2" fill="#39d380" />
        <circle cx="15" cy="12" r="1.2" fill="#39d380" />
    </svg>
);

export const HeaderAppIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>App Icon</title>
    <rect x="3" y="3" width="18" height="18" rx="4" fill="#31a470"/>
    <path d="M8 10L11 13L8 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 16H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IdeIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>ME Logo</title>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" fill="#404040"/>
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontFamily="Fira Code, monospace"
      fontSize="11"
      fontWeight="bold"
      fill="#007acc"
    >
      ME
    </text>
  </svg>
);


export const SearchIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <title>Search Icon</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
  </svg>
);

export const ArrowLeftIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <title>Arrow Left</title>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
  </svg>
);

export const ArrowRightIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <title>Arrow Right</title>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
  </svg>
);

export const TerminalIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <title>Terminal</title>
        <polyline points="4 17 10 11 4 5" strokeLinecap="round" strokeLinejoin="round"></polyline>
        <line x1="12" y1="19" x2="20" y2="19" strokeLinecap="round" strokeLinejoin="round"></line>
    </svg>
);


export const LayoutIcon1: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M4 4h16v16H4V4zm2 2v12h12V6H6z" />
    </svg>
);

export const LayoutIcon2: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
        <title>Toggle Explorer</title>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
    </svg>
);

export const LayoutIcon3: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
        <title>Toggle Terminal</title>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="15" x2="21" y2="15" />
    </svg>
);

export const LayoutIcon5: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 12a7.4 7.4 0 11-14.8 0 7.4 7.4 0 0114.8 0zM4 12h2m12 0h2m-9-7V4m0 16v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    </svg>
);

export const MinimizeIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M20 14H4v-4h16"/></svg>
);

export const MaximizeIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M4 4h16v16H4z"/></svg>
);

export const CloseIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M18 6L6 18M6 6l12 12"/></svg>
);

export const ChevronDownIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
);
