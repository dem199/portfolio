import React, { useState, useEffect } from 'react';

const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handle = () => {
      const doc = document.documentElement;
      const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
      setProgress(pct);
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        height: 3,
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #D434FE, #7B2FBE)',
        transition: 'width 0.1s linear',
        pointerEvents: 'none',
      }}
    />
  );
};

export default ScrollProgress;