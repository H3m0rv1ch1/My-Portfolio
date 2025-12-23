
import React from 'react';
import CodeLayout from '../ide/CodeLayout';

const L: React.FC<{ className?: string; children?: React.ReactNode }> = ({ children, className }) => <div className={className}>{children}</div>;

// Map legacy hex codes to semantic CSS variables
const colorMap: Record<string, string> = {
  '81A1C1': 'var(--syntax-keyword)',
  'EBCB8B': 'var(--syntax-string)',
  '4C566A': 'var(--syntax-comment)',
  'D8DEE9': 'var(--syntax-variable)',
  '8FBCBB': 'var(--syntax-type)',
  'B48EAD': 'var(--syntax-selector)',
};

const S: React.FC<{ c: string; children?: React.ReactNode }> = ({ c, children }) => {
    const color = colorMap[c] || `#${c}`;
    return <span style={{ color }}>{children}</span>;
};

const Contact: React.FC = () => {
  return (
    <CodeLayout>
      <L><S c="B48EAD">.contact-me</S> {'{'}</L>
      <L className="pl-4"><S c="8FBCBB">content</S>: <S c="EBCB8B">"Let's build something amazing together."</S>;</L>
      <L className="pl-4"><S c="8FBCBB">padding</S>: <S c="81A1C1">2rem</S>;</L>
      <L>{'}'}</L>
      <L>&nbsp;</L>
      <L><S c="B48EAD">.social-links</S> <S c="A3BE8C">a</S> {'{'}</L>
      <L className="pl-4"><S c="8FBCBB">display</S>: <S c="81A1C1">block</S>;</L>
      <L className="pl-4"><S c="8FBCBB">margin-bottom</S>: <S c="81A1C1">10px</S>;</L>
      <L className="pl-4"><S c="8FBCBB">color</S>: <S c="8FBCBB">#8FBCBB</S>;</L>
      <L className="pl-4"><S c="8FBCBB">text-decoration</S>: <S c="81A1C1">none</S>;</L>
      <L>{'}'}</L>
      <L>&nbsp;</L>
      <L><S c="B48EAD">.social-links</S> <S c="A3BE8C">a</S><S c="B48EAD">:hover</S> {'{'}</L>
      <L className="pl-4"><S c="8FBCBB">text-decoration</S>: <S c="81A1C1">underline</S>;</L>
      <L>{'}'}</L>
      <L>&nbsp;</L>
      <L className="mt-4"><S c="4C566A">{`/* Find me on: */`}</S></L>
      <L className="pl-4">
        <a href="mailto:mohamed.atef.23@gmail.com" style={{ color: 'var(--syntax-string)' }} className="hover:underline" target="_blank" rel="noopener noreferrer">email: 'mohamed.atef.23@gmail.com'</a>
      </L>
       <L className="pl-4">
        <a href="https://github.com/H3m0rv1ch1" style={{ color: 'var(--syntax-string)' }} className="hover:underline" target="_blank" rel="noopener noreferrer">github: 'H3m0rv1ch1'</a>
      </L>
       <L className="pl-4">
        <a href="https://www.linkedin.com/in/mo-alghanam/" style={{ color: 'var(--syntax-string)' }} className="hover:underline" target="_blank" rel="noopener noreferrer">linkedin: 'mo-alghanam'</a>
      </L>
    </CodeLayout>
  );
};

export default Contact;
