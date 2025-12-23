
import React from 'react';

interface CodeLayoutProps {
  children: React.ReactNode;
}

const CodeLayout: React.FC<CodeLayoutProps> = ({ children }) => {
  const childArray = React.Children.toArray(children);
  
  return (
    <div className="flex text-sm sm:text-base">
      <div aria-hidden="true" className="text-right text-gray-500 pr-4 select-none flex-shrink-0">
        {childArray.map((_, index) => (
          <div key={index}>{index + 1}</div>
        ))}
      </div>
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
};

export default CodeLayout;