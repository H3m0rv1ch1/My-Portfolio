import React from 'react';
import type { FC, SVGProps } from 'react';

export const FilesIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <title>Files Icon</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 19V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6m-3-3v6" />
    <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

export const SearchIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <title>Search Icon</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const SourceControlIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <title>Source Control Icon</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 8a6 6 0 00-4-5.65V2a1 1 0 00-2 0v.35A6 6 0 008 8m10 0a6 6 0 01-4 5.65V18a1 1 0 01-2 0v-4.35A6 6 0 018 8m0 0a6 6 0 004-5.65V2a1 1 0 00-2 0v.35A6 6 0 008 8zm0 0v1.5a2.5 2.5 0 105 0V8m-5 0v1.5a2.5 2.5 0 11-5 0V8z" />
  </svg>
);

export const DebugIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <title>Debug Icon</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18V3H3zm9 16l-4-4h8l-4 4zm-4-6h8v-2H8v2zm0-4h8V7H8v2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8l-4 4-4-4" />
  </svg>
);

export const ExtensionsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <title>Extensions Icon</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h6v6H4V4zm8 0h6v6h-6V4zM4 14h6v6H4v-6zm8 0h6v6h-6v-6z" />
  </svg>
);

export const UserIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <title>User Icon</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export const SettingsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <title>Settings Icon</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);