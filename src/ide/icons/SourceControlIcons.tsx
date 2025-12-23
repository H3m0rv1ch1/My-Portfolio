
import React from 'react';
import type { FC, SVGProps } from 'react';

export const RefreshIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <title>Refresh Icon</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 4.5A12 12 0 005.4 5.4M4 19.5A12 12 0 0018.6 18.6" />
  </svg>
);

export const CheckIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <title>Check Icon</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export const PlusIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <title>Stage Change</title>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  );
  
  export const UndoIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <title>Discard Changes</title>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 15l-3-3m0 0l3-3m-3 3h12a6 6 0 000-12h-3" />
      </svg>
  );
  
  export const GoToFileIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <title>Open File</title>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
