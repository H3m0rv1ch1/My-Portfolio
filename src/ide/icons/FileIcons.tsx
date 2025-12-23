
import React from 'react';
import type { FC, SVGProps } from 'react';

export const ReactIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 113 101" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>React Icon</title>
    <ellipse cx="56.5" cy="50.5" rx="55" ry="20" stroke="#61DAFB" strokeWidth="5"/>
    <ellipse cx="56.5" cy="50.5" rx="55" ry="20" transform="rotate(60 56.5 50.5)" stroke="#61DAFB" strokeWidth="5"/>
    <ellipse cx="56.5" cy="50.5" rx="55" ry="20" transform="rotate(120 56.5 50.5)" stroke="#61DAFB" strokeWidth="5"/>
    <circle cx="56.5" cy="50.5" r="10" fill="#61DAFB"/>
  </svg>
);

export const JavaScriptIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>JavaScript Icon</title>
    <rect width="128" height="128" fill="#F7DF1E"/>
    <path d="M61.38 106.33c1.55 2.5 4.3 4.03 7.18 4.03 2.82 0 5.1-1.3 6.3-3.2l.1-.16c1.1-1.74 1.2-3.82.2-5.67-1.1-1.95-3-3.2-5.2-3.2-1.4 0-2.6.5-3.6 1.4l-.1.1c-1.3 1.2-1.9 2.8-1.8 4.33zM85.44 106.33c1.55 2.5 4.3 4.03 7.18 4.03 2.82 0 5.1-1.3 6.3-3.2l.1-.16c1.1-1.74 1.2-3.82.2-5.67-1.1-1.95-3-3.2-5.2-3.2-1.4 0-2.6.5-3.6 1.4l-.1.1c-1.3 1.2-1.9 2.8-1.8 4.33z"/>
    <path d="M32.4 32.8h19.8v51.5c0 7.3-3.1 11-10.4 11-4.1 0-6.9-1.5-9.4-4.2l3.9-3.4c1.7 1.8 3 2.8 5.1 2.8 2.8 0 4.3-1.4 4.3-5.5V32.8zM65.6 83.3c0 7.3 3.4 11.2 10.9 11.2 7.3 0 10.7-4.1 10.7-11.5V32.8h19.8v52c0 14.5-9.4 21.5-24.3 21.5-13.3 0-22.3-7.6-22.3-21.2V32.8h15.2v50.5z"/>
  </svg>
);

export const TypeScriptIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>TypeScript Icon</title>
    <rect width="128" height="128" fill="#007ACC"/>
    <path fill="#FFF" d="M32.6 32.8h64.2v19.8H77.1V96h-19V52.6H32.6z"/>
  </svg>
);

export const CSSIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>CSS Icon</title>
    <path fill="#1572B6" d="M26.2 3.2L12 110.1l52 14.7 52-14.7L122.2 3.2z"/>
    <path fill="#33A9DC" d="M112.4 105.7l-48.4 13.6V15.2h49.6z"/>
    <path fill="#FFF" d="M96.7 40.5H64v15.9h29.5l-2.4 26-27.1 7.3v16.4l23.5-6.3L99 66.2z"/>
    <path fill="#EBEBEB" d="M64 40.5v15.9h-29l-1.9-21.7h30.9v-16h-48.7l4.8 53.6H64zM64 89.7v16.4l-23.4-6.3-1.5-17.1H64z"/>
  </svg>
);

export const MarkdownIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Markdown Icon</title>
    <rect x="10" y="10" width="80" height="80" rx="10" ry="10" fill="#4D4D4D"/>
    <path d="M30,70 L30,30 L45,50 L60,30 L60,70" stroke="white" strokeWidth="8" fill="none"/>
    <path d="M75,30 L75,70" stroke="white" strokeWidth="8" fill="none"/>
  </svg>
);