'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored === 'dark' || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggle}
      className={`relative flex h-8 w-8 items-center justify-center rounded-full transition-all hover:bg-accent ${className}`}
      aria-label="Toggle theme"
    >
      <Sun className={`h-4 w-4 transition-all ${dark ? 'scale-0 opacity-0 rotate-90' : 'scale-100 opacity-100 rotate-0'} absolute`} />
      <Moon className={`h-4 w-4 transition-all ${dark ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 -rotate-90'} absolute`} />
    </button>
  );
}
