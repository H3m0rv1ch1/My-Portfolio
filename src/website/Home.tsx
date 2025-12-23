
import React, { useState, useEffect, useMemo } from 'react';
import { PERSONAL_INFO } from '../data';
import CodeLayout from '../ide/CodeLayout';

const Home: React.FC = () => {
  // Fix: Memoize titles to prevent infinite reset loops in effects
  const titles = useMemo(() => [
    "IT Professional",
    "WordPress Expert",
    "React Developer",
    "Node.js Engineer",
    "Building Digital Solutions..."
  ], []);
  
  const [titleIndex, setTitleIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate-title-slide-up');

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationClass('animate-title-slide-down');

      setTimeout(() => {
        setTitleIndex(prevIndex => (prevIndex + 1) % titles.length);
        setAnimationClass('animate-title-slide-up');
      }, 500); // Must match animation duration
    }, 3000); // How long each title is visible

    return () => clearInterval(timer);
  }, [titles]); // Dependency updated

  return (
    <CodeLayout>
      <div className="text-[var(--syntax-variable)] leading-relaxed">
        {/* Changed title color to --bg-ide-status (ID Status Bar Blue) */}
        <div className="text-3xl sm:text-4xl font-bold text-[var(--bg-ide-status)]"># {PERSONAL_INFO.name}</div>
        <div className="mt-2 text-lg text-[var(--syntax-function)] h-8 overflow-y-hidden">
          <span className={`inline-block ${animationClass}`}>
            {`## ${titles[titleIndex]}`}
            <span className="animate-pulse">|</span>
          </span>
        </div>
        <div className="mt-6 border-b border-[var(--border-color)]"></div>
        <div className="mt-6 text-base">{`> ${PERSONAL_INFO.bio}`}</div>
        <div className="mt-8">
            <span className="text-[var(--syntax-comment)]">{'// Current Focus:'}</span>
            <br />
            <span className="text-[var(--syntax-string)]">{'const stack = ["WordPress", "React", "Node.js", "Express"];'}</span>
        </div>
        <div className="mt-4">
            <span className="text-[var(--syntax-comment)]">{'// Explore my work using the file explorer on the left'}</span>
        </div>
        <div className="mt-2">
            <span className="text-[var(--syntax-comment)]">{'// P.S. Run the "Go Live" command to see the website view!'}</span>
        </div>
      </div>
    </CodeLayout>
  );
};

export default Home;
