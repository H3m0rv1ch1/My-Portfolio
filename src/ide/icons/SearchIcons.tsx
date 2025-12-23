
import React from 'react';
import type { FC, SVGProps } from 'react';

export const CaseSensitiveIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
        <title>Case Sensitive</title>
        <path d="M10.5 6h-5v1.5h1.5v5h2v-5h1.5V6zM5 4.5h2V3H5v1.5zM12.5 13H11v-1.5h1.5V13z" />
    </svg>
);

export const WholeWordIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
        <title>Match Whole Word</title>
        <path d="M3.5 13h9V9.5h-2V11h-1.5V7.5h-2V11H6V9.5H4V13h-.5zM12 5.5V3H4v2.5H3V2.5C3 2.22 3.22 2 3.5 2h9c.28 0 .5.22.5.5V5.5H12z" />
    </svg>
);

export const RegexIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
        <title>Use Regular Expression</title>
        <path d="M12.41 12.55L11 11.14l1.41-1.41L11 8.31l1.41-1.41L11 5.49l1.41-1.41-1.06-1.06-1.41 1.41L8.53 3l-1.41 1.41L5.7 3l-1.06 1.06 1.41 1.41-1.41 1.41L6.06 8.3l-1.41 1.41 1.41 1.41-1.41 1.41 1.06 1.06 1.41-1.41 1.42 1.41 1.41-1.41 1.42 1.41 1.06-1.06-1.42-1.41zM11 9.72l-2.47-2.47L11 4.78V9.72zM5.03 7.25L7.5 9.72V4.78L5.03 7.25z" />
    </svg>
);
