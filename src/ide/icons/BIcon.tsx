import React from 'react';

interface BIconProps {
  className?: string;
  size?: number;
}

const BIcon: React.FC<BIconProps> = ({ className = "", size = 24 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1"/>
      <path 
        d="M7 6h5.5c1.933 0 3.5 1.567 3.5 3.5 0 1.074-.537 2.024-1.357 2.593C15.463 12.976 16 13.926 16 15c0 1.933-1.567 3.5-3.5 3.5H7V6zm2.5 1.5v3h3c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5h-3zm0 4.5v3h3c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5h-3z" 
        fill="currentColor"
      />
    </svg>
  );
};

export default BIcon;