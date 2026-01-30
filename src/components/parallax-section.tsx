'use client';

import { useEffect, useRef, useState } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number; // multiplier: 0 = no movement, 0.5 = half speed, 1 = normal
  className?: string;
}

export function ParallaxSection({ children, speed = 0.3, className = '' }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Only calculate when element is in viewport
      if (rect.bottom > 0 && rect.top < windowHeight) {
        const center = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const distance = center - viewportCenter;
        setOffset(distance * speed * -1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`parallax-container ${className}`}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
          transition: 'transform 0.1s linear',
        }}
      >
        {children}
      </div>
    </div>
  );
}
