
import React, { useEffect, useState } from 'react';

// Frame 1: Extended
const f1 = "M4 14C4 14 6 12 9 12C12 12 14 13 16 13C18 13 22 10 22 10V12C22 12 20 13 18 14C16 15 12 15 12 15L13 19M5 19L9 15";
// Frame 2: Gathering
const f2 = "M5 14C5 14 7 11 10 11C13 11 15 12 17 12C19 12 22 10 22 10V12C22 12 20 13 18 14C16 15 12 15 12 15L11 19M7 19L10 15";
// Frame 3: Compressed
const f3 = "M7 13C7 13 9 10 12 10C15 10 17 11 19 11C21 11 22 9 22 9V11C22 11 20 12 18 13C16 14 12 14 12 14L9 18M10 18L12 14";
// Frame 4: Kick
const f4 = "M6 13C6 13 8 11 11 11C14 11 16 12 18 12C20 12 22 10 22 10V12C22 12 20 13 18 14C16 15 12 15 12 15L8 18M11 18L12 15";

const frames = [f1, f2, f3, f4];

const RunCat: React.FC = () => {
    const [frame, setFrame] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFrame(prev => (prev + 1) % frames.length);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center w-8 h-full select-none" title="Run Cat 365">
            <svg 
                viewBox="0 0 24 24" 
                className="w-6 h-6 text-[var(--text-primary)] fill-transparent stroke-current stroke-2"
                strokeLinecap="round" 
                strokeLinejoin="round"
            >
                 {/* Ears */}
                 <path d="M19 11L18 8L22 10" strokeWidth="2" fill="currentColor" className="text-[var(--text-primary)]" />
                 {/* Body Sequence */}
                 <path d={frames[frame]} />
                 {/* Tail (Animated slightly) */}
                 <path d={`M4 14 C ${frame % 2 === 0 ? '2 10 4 8 6 6' : '2 12 2 10 4 8'}`} />
            </svg>
        </div>
    );
};

export default RunCat;
