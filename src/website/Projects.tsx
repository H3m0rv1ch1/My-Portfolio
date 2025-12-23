
import React from 'react';
import CodeLayout from '../ide/CodeLayout';
import { PROJECTS } from '../data';

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

const Projects: React.FC = () => {
  return (
    <CodeLayout>
      <L><S c="81A1C1">import</S> type {'{'} <S c="8FBCBB">Project</S> {'}'} <S c="81A1C1">from</S> <S c="EBCB8B">'../types'</S>;</L>
      <L>&nbsp;</L>
      <L><S c="4C566A">{`// My Web Development Projects`}</S></L>
      <L><S c="81A1C1">export const</S> <S c="D8DEE9">myProjects</S>: <S c="8FBCBB">Project[]</S> = [</L>
      {PROJECTS.map((project, i) => (
        <React.Fragment key={i}>
          <L className="pl-4">{'{'}</L>
          <L className="pl-8"><S c="81A1C1">name</S>: <S c="EBCB8B">{`'${project.name}'`}</S>,</L>
          <L className="pl-8"><S c="81A1C1">description</S>: <S c="EBCB8B">{`'${project.description.replace(/'/g, "\\'")}'`}</S>,</L>
          <L className="pl-8"><S c="81A1C1">stack</S>: [<S c="EBCB8B">{project.stack.map(s => `'${s}'`).join(', ')}</S>],</L>
          {project.liveUrl && (
            <L className="pl-8">
              <S c="81A1C1">liveUrl</S>: <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--syntax-string)' }} className="hover:underline">{`'${project.liveUrl}'`}</a>,
            </L>
          )}
          <L className="pl-8">
            <S c="81A1C1">repoUrl</S>: <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--syntax-string)' }} className="hover:underline">{`'${project.repoUrl}'`}</a>,
          </L>
          <L className="pl-4">{`}${i < PROJECTS.length - 1 ? ',' : ''}`}</L>
        </React.Fragment>
      ))}
      <L>];</L>
    </CodeLayout>
  );
};

export default Projects;
