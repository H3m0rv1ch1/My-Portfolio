
import React from 'react';
import CodeLayout from '../ide/CodeLayout';
import { SERVICES } from '../data';

const L: React.FC<{ className?: string; children?: React.ReactNode }> = ({ children, className }) => <div className={className}>{children}</div>;

// Map legacy hex codes to semantic CSS variables
const colorMap: Record<string, string> = {
  '81A1C1': 'var(--syntax-keyword)',
  'EBCB8B': 'var(--syntax-string)',
  '4C566A': 'var(--syntax-comment)',
  'D8DEE9': 'var(--syntax-variable)',
  '8FBCBB': 'var(--syntax-type)',
  'A3BE8C': 'var(--syntax-function)',
  'D08770': 'var(--syntax-property)',
};

const S: React.FC<{ c: string; children?: React.ReactNode }> = ({ c, children }) => {
    const color = colorMap[c] || `#${c}`;
    return <span style={{ color }}>{children}</span>;
};

const Services: React.FC = () => {
  return (
    <CodeLayout>
      <L><S c="4C566A">{`/**`}</S></L>
      <L><S c="4C566A">{` * My Professional Services`}</S></L>
      <L><S c="4C566A">{` * A collection of services I offer to clients.`}</S></L>
      <L><S c="4C566A">{` */`}</S></L>
      <L>&nbsp;</L>
      <L><S c="81A1C1">const</S> <S c="D8DEE9">services</S> = {'{'}</L>
      {SERVICES.map((service, i) => (
        <React.Fragment key={i}>
          <L className="pl-4">
            <S c="A3BE8C">{`'${service.title.toLowerCase().replace(/ /g, '_')}'`}</S>: {'{'}
          </L>
          <L className="pl-8"><S c="81A1C1">title</S>: <S c="EBCB8B">{`'${service.title}'`}</S>,</L>
          <L className="pl-8"><S c="81A1C1">description</S>: <S c="EBCB8B">{`'${service.description}'`}</S>,</L>
          <L className="pl-4">{`}${i < SERVICES.length - 1 ? ',' : ''}`}</L>
        </React.Fragment>
      ))}
      <L>{'};'}</L>
      <L>&nbsp;</L>
      <L><S c="81A1C1">function</S> <S c="A3BE8C">getService</S>(<S c="D08770">serviceName</S>) {'{'}</L>
      <L className="pl-4"><S c="81A1C1">return</S> <S c="D8DEE9">services</S>[<S c="D08770">serviceName</S>];</L>
      <L>{'}'}</L>
      <L>&nbsp;</L>
      <L><S c="D8DEE9">module</S>.<S c="D8DEE9">exports</S> = <S c="D8DEE9">services</S>;</L>
    </CodeLayout>
  );
};

export default Services;
