
import React from 'react';
import CodeLayout from '../ide/CodeLayout';
import { CERTIFICATES } from '../data';

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

const Certificates: React.FC = () => {
  return (
    <CodeLayout>
      <L><S c="81A1C1">import</S> type {'{'} <S c="8FBCBB">Certificate</S> {'}'} <S c="81A1C1">from</S> <S c="EBCB8B">'../types'</S>;</L>
      <L>&nbsp;</L>
      <L><S c="4C566A">{`// Professional Certifications & Licenses`}</S></L>
      <L><S c="81A1C1">export const</S> <S c="D8DEE9">myCertificates</S>: <S c="8FBCBB">Certificate[]</S> = [</L>
      {CERTIFICATES.map((cert, i) => (
        <React.Fragment key={i}>
          <L className="pl-4">{'{'}</L>
          <L className="pl-8"><S c="81A1C1">name</S>: <S c="EBCB8B">{`'${cert.name}'`}</S>,</L>
          <L className="pl-8"><S c="81A1C1">issuer</S>: <S c="EBCB8B">{`'${cert.issuer}'`}</S>,</L>
          <L className="pl-8"><S c="81A1C1">date</S>: <S c="EBCB8B">{`'${cert.date}'`}</S>,</L>
          {cert.credentialId && (
            <L className="pl-8"><S c="81A1C1">credentialId</S>: <S c="EBCB8B">{`'${cert.credentialId}'`}</S>,</L>
          )}
          <L className="pl-4">{`}${i < CERTIFICATES.length - 1 ? ',' : ''}`}</L>
        </React.Fragment>
      ))}
      <L>];</L>
    </CodeLayout>
  );
};

export default Certificates;
