
import React from 'react';
import type { FC, SVGProps } from 'react';

export const GitBranchIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <title>Git Branch Icon</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 3v12" />
    <path d="M18 9a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
    <path d="M6 21a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
    <path d="M18 21a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
    <path d="M6 9v6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
  </svg>
);

export const SyncIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <title>Sync Icon</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20l4-4-4-4" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 11V9a4 4 0 014-4h14" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4l-4 4 4 4" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13v2a4 4 0 01-4 4H3" />
  </svg>
);

export const ErrorIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <title>Error Icon</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const WarningIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <title>Warning Icon</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

export const NotificationIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <title>Notifications Icon</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

export const CheckmarkIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <title>Checkmark Icon</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);
