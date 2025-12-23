
import React from 'react';
import type { FC, SVGProps } from 'react';

export const PrettierIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 256 256" {...props}>
        <title>Prettier Icon</title>
        <path fill="#56B3B4" d="M128 25.6a102.4 102.4 0 100 204.8 102.4 102.4 0 000-204.8z"/>
        <path fill="#F8B82C" d="M128 35.84a92.16 92.16 0 00-60.928 159.232c2.048 2.048 4.608 2.56 7.168 2.56s5.12-1.024 7.168-2.56L128 148.48l46.592 46.592c4.096 4.096 10.24 4.096 14.336 0 4.096-4.096 4.096-10.24 0-14.336L142.336 134.144l46.592-46.592c4.096-4.096 4.096-10.752 0-14.848s-10.752-4.096-14.848 0L128 118.784 81.408 72.192A91.648 91.648 0 00128 35.84z"/>
        <path fill="#F8B82C" d="M67.072 195.072a92.16 92.16 0 00115.712-46.592L128 148.48z"/>
        <path fill="#F8B82C" d="M128 35.84a91.648 91.648 0 00-46.592 12.8l46.592 46.592z"/>
    </svg>
);

export const ESLintIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" {...props}>
        <title>ESLint Icon</title>
        <path fill="#4B32C3" d="M89.2 44.27l-35.1-20.26a5.5 5.5 0 00-5.52 0L12.48 44.27a5.5 5.5 0 00-2.76 4.85v40.52a5.5 5.5 0 002.76 4.85l35.1 20.26a5.5 5.5 0 005.52 0l35.1-20.26a5.5 5.5 0 002.76-4.85V49.12a5.5 5.5 0 00-2.76-4.85z"/>
        <path fill="#FFF" d="M50 34.13L32.84 44.25l17.16 9.9 17.16-9.9zM50 78.33l-23.3-13.45V51.43L50 64.88zm0 0v13.45l23.3-13.45V51.43z"/>
    </svg>
);

export const LiveServerIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <title>Live Server Icon</title>
        <path fill="#3498db" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path fill="#2ecc71" d="M16.5 12c0-2.48-2.02-4.5-4.5-4.5S7.5 9.52 7.5 12s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5z"/>
        <path fill="#ecf0f1" d="M12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
    </svg>
);

export const CatIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21S3 17.9 3 13.44c0-1.2.43-2.37 1-3.44 0 0-1.82-6.42-.42-7 1.39-.58 4.64.26 6.42 2.26.65-.17 1.33-.26 2-.26z" />
        <path d="M9 13h.01" />
        <path d="M15 13h.01" />
        <path d="M10 17c.5.5 1.5.5 2 .5s1.5 0 2-.5" />
    </svg>
);
