import React from 'react';

export const SplitText = ({ children, className = '' }) => {
  if (typeof children !== 'string') return <span className={className}>{children}</span>;
  
  return (
    <span aria-label={children} className={className} style={{ display: 'inline-block' }}>
      {children.split(' ').map((word, index) => (
        <span 
          key={index} 
          style={{ display: 'inline-block', overflow: 'hidden', paddingBottom: '0.1em', marginRight: '0.25em' }}
        >
          <span className="split-word" style={{ display: 'inline-block', transform: 'translateY(100%)' }}>
            {word}
          </span>
        </span>
      ))}
    </span>
  );
};
