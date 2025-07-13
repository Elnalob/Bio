import React, { useEffect, useRef } from 'react';

const CursorNoise: React.FC = () => {
  const noiseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (noiseRef.current) {
        noiseRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={noiseRef}
      className="fixed w-96 h-96 pointer-events-none z-10 mix-blend-soft-light opacity-20"
      style={{
        background: `
          radial-gradient(circle at 30% 30%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 70% 70%, rgba(255, 119, 198, 0.2) 0%, transparent 50%),
          url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")
        `,
        filter: 'blur(1px)',
        transition: 'transform 0.1s ease-out',
      }}
    />
  );
};

export default CursorNoise;