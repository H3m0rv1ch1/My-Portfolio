import React from 'react';
import type { FC, SVGProps } from 'react';

export const FolderClosedIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <title>Folder Closed Icon</title>
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z"></path>
    <path d="M2 10h20"></path>
  </svg>
);

export const FolderOpenIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <title>Folder Open Icon</title>
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z"></path>
    <path d="M2 10h20"></path>
    <path d="M22 19L14 9l-4 4-8-8"></path>
  </svg>
);

export const FolderIcon: FC<SVGProps<SVGSVGElement>> = (props) => <FolderClosedIcon {...props} />;

export const PngIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d08770" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <title>PNG Icon</title>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
);

export const SvgIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#b48ead" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <title>SVG Icon</title>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2L12 22"></path>
    <path d="M22 12L2 12"></path>
    <path d="M5 19L19 5"></path>
  </svg>
);

export const TsxIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#81a1c1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <title>TSX Icon</title>
    <path d="M20 11.5v-6a2 2 0 0 0-2-2h-12a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h8"></path>
    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></path>
    <path d="M20.6 20.6L22 22"></path>
    <path d="M14 9h4"></path>
    <path d="M12 12h2"></path>
    <path d="M10 15h1"></path>
  </svg>
);

export const TsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#88c0d0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <title>TS Icon</title>
    <path d="M4 7V5h16v2"></path>
    <path d="M12 5v14"></path>
    <path d="M8 19h8"></path>
    <path d="M15 11h-2a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h2"></path>
    <path d="M15.5 11.5c1 0 1.5.5 1.5 1s-.5 1-1.5 1"></path>
  </svg>
);

export const CssIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#5e81ac" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <title>CSS Icon</title>
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
    <path d="M9 16V8l-3 4 3 4"></path>
    <path d="M15 8v8l3-4-3-4"></path>
  </svg>
);

export const HtmlIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d08770" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <title>HTML Icon</title>
    <path d="M4 3h16l-2 16L12 21l-8-2-2-16z"></path>
    <path d="M12 7v10"></path>
    <path d="M16 12H8"></path>
  </svg>
);

export const JsonIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#a3be8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <title>JSON Icon</title>
    <path d="M8 16c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2"></path>
    <path d="M16 9c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2"></path>
    <path d="M12 9h0"></path>
    <path d="M12 15h0"></path>
  </svg>
);


export const ThreeDotsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <title>More Options</title>
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
  </svg>
);