'use client';

import { useEffect, useRef } from 'react';

type Animation = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number; // ms
  duration?: number; // ms
  className?: string;
  as?: keyof HTMLElementTagNameMap;
}

export function AnimateOnScroll({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  className = '',
  as: Tag = 'div',
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible', `anim-${animation}`);
          el.style.animationDuration = `${duration}ms`;
          el.style.animationDelay = `${delay}ms`;
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay, duration]);

  return (
    // @ts-expect-error - dynamic tag
    <Tag ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </Tag>
  );
}
