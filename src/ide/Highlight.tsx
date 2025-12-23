
import React from 'react';

interface HighlightProps {
  text: string;
  positions: { start: number; length: number }[];
}

const Highlight: React.FC<HighlightProps> = ({ text, positions }) => {
  if (!positions || positions.length === 0 || !text) {
    return <>{text}</>;
  }

  let lastIndex = 0;
  const parts = [];

  // Sort positions to handle multiple matches correctly
  const sortedPositions = [...positions].sort((a, b) => a.start - b.start);

  sortedPositions.forEach(({ start, length }, i) => {
    // Text before the highlight
    if (start > lastIndex) {
      parts.push(<span key={`pre-${i}`}>{text.substring(lastIndex, start)}</span>);
    }
    // The highlighted text
    if (length > 0) {
      parts.push(
        <span key={`match-${i}`} className="bg-[#566021] text-[#EBCB8B] rounded-sm">
          {text.substring(start, start + length)}
        </span>
      );
    }
    lastIndex = start + length;
  });

  // Text after the last highlight
  if (lastIndex < text.length) {
    parts.push(<span key="post">{text.substring(lastIndex)}</span>);
  }

  return <>{parts}</>;
};

export default Highlight;
