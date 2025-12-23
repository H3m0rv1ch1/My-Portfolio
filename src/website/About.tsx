
import React from 'react';
import CodeLayout from '../ide/CodeLayout';
import { EXPERIENCES } from '../data';

const L: React.FC<{ className?: string; children?: React.ReactNode }> = ({ children, className }) => <div className={className}>{children}</div>;

// Map legacy hex codes to semantic CSS variables
const colorMap: Record<string, string> = {
  '81A1C1': 'var(--syntax-keyword)',
  'EBCB8B': 'var(--syntax-string)',
  '4C566A': 'var(--syntax-comment)',
  'D8DEE9': 'var(--syntax-variable)',
  '8FBCBB': 'var(--syntax-type)',
};

const S: React.FC<{ c: string; children?: React.ReactNode }> = ({ c, children }) => {
    const color = colorMap[c] || `#${c}`;
    return <span style={{ color }}>{children}</span>;
};

const About: React.FC = () => {
  return (
    <CodeLayout>
      <L><S c="81A1C1">import</S> React <S c="81A1C1">from</S> <S c="EBCB8B">'react'</S>;</L>
      <L>&nbsp;</L>
      <L><S c="4C566A">{`// My Professional Experience (Pre-Web Development)`}</S></L>
      <L><S c="81A1C1">const</S> <S c="D8DEE9">experiences</S> = [</L>
      {EXPERIENCES.map((exp, i) => (
        <React.Fragment key={i}>
          <L className="pl-4">{'{'}</L>
          <L className="pl-8"><S c="81A1C1">role</S>: <S c="EBCB8B">{`'${exp.role}'`}</S>,</L>
          <L className="pl-8"><S c="81A1C1">company</S>: <S c="EBCB8B">{`'${exp.company}'`}</S>,</L>
          <L className="pl-8"><S c="81A1C1">period</S>: <S c="EBCB8B">{`'${exp.period}'`}</S>,</L>
          <L className="pl-8"><S c="81A1C1">description</S>: [</L>
          {exp.description.map((line, j) => (
             <L key={j} className="pl-12"><S c="EBCB8B">{`'${line.replace(/'/g, "\\'")}'`}</S>,</L>
          ))}
          <L className="pl-8">],</L>
          <L className="pl-4">{`}${i < EXPERIENCES.length - 1 ? ',' : ''}`}</L>
        </React.Fragment>
      ))}
      <L>];</L>
      <L>&nbsp;</L>
      <L><S c="81A1C1">export default</S> experiences;</L>
    </CodeLayout>
  );
};

export default About;
