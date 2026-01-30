'use client';

import { useEffect, useRef, useState } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

const options: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
];

function applyTheme(theme: Theme) {
  const isDark =
    theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', isDark);
}

export function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    const initial: Theme = stored === 'light' || stored === 'dark' ? stored : 'system';
    setTheme(initial);
    applyTheme(initial);

    // Listen for OS preference changes when in system mode
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      const current = (localStorage.getItem('theme') as Theme | null) ?? 'system';
      if (current === 'system') applyTheme('system');
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const select = (value: Theme) => {
    setTheme(value);
    localStorage.setItem('theme', value);
    applyTheme(value);
    setOpen(false);
  };

  const ActiveIcon = options.find((o) => o.value === theme)!.icon;

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-accent"
        aria-label="Theme"
      >
        <ActiveIcon className="h-4 w-4" />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[140px] rounded-xl border border-border bg-card p-1.5 shadow-lg backdrop-blur-xl">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => select(opt.value)}
              className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                theme === opt.value
                  ? 'bg-accent font-medium text-foreground'
                  : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
              }`}
            >
              <opt.icon className="h-4 w-4" />
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
