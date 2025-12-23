
import React from 'react';
import type { FC, SVGProps } from 'react';

export const PlayIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <title>Play Icon</title>
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const RefreshIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <title>Refresh Icon</title>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 4.5A12 12 0 005.4 5.4M4 19.5A12 12 0 0018.6 18.6" />
    </svg>
  );
  