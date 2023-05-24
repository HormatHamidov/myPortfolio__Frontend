import React, { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const calculateScrollPercentage = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const percentage = (scrollTop / totalHeight) * 100;
    setScrollPercentage(percentage.toFixed(2));
  };

  useEffect(() => {
    window.addEventListener('scroll', calculateScrollPercentage);
    return () => {
      window.removeEventListener('scroll', calculateScrollPercentage);
    };
  }, []);

  return (
    <div className="scroll-indicator">
      <div className="progress-bar" style={{ width: `${scrollPercentage}%` }} />
    </div>
  );
};

export default ScrollIndicator;
