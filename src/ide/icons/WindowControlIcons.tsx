
import React from 'react';
import type { FC, SVGProps } from 'react';

export const CloseIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Close</title>
    <circle cx="6" cy="6" r="6" fill="#FF5F56" />
    <path d="M4.5 4.5L7.5 7.5M4.5 7.5L7.5 4.5" stroke="#4D0000" strokeWidth="1" className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </svg>
);

export const MinimizeIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Minimize</title>
    <circle cx="6" cy="6" r="6" fill="#FFBD2E" />
    <path d="M3 6H9" stroke="#995700" strokeWidth="1.2" className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </svg>
);

export const MaximizeIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Maximize</title>
    <circle cx="6" cy="6" r="6" fill="#27C93F" />
    <g className="opacity-0 group-hover:opacity-100 transition-opacity">
        <path d="M3.5 5.5V3.5H5.5" stroke="#006400" strokeWidth="1" fill="none" />
        <path d="M8.5 6.5V8.5H6.5" stroke="#006400" strokeWidth="1" fill="none" />
    </g>
  </svg>
);
