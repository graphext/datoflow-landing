'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from '@/components/logo';

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.datoflow.com';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          menuOpen
            ? 'border-b border-border/40 bg-white shadow-sm'
            : scrolled
              ? 'border-b border-border/40 bg-white/60 backdrop-blur-xl backdrop-saturate-150 shadow-sm'
              : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Logo href="/" size="md" />
          <nav className="hidden items-center gap-10 text-sm md:flex">
            <a href="#features" className="text-muted-foreground transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground transition-colors hover:text-foreground">
              How It Works
            </a>
            <a href="#pricing" className="text-muted-foreground transition-colors hover:text-foreground">
              Pricing
            </a>
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <a
              href={`${appUrl}/login`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Log in
            </a>
            <a
              href={`${appUrl}/login`}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-white transition-all hover:opacity-90 hover:-translate-y-px"
            >
              Start for Free
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 h-[calc(100dvh-4rem)] bg-white/95 backdrop-blur-xl shadow-xl transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-1 p-6">
          <a
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Pricing
          </a>
          <div className="my-3 border-t" />
          <a
            href={`${appUrl}/login`}
            onClick={() => setMenuOpen(false)}
            className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Log in
          </a>
          <a
            href={`${appUrl}/login`}
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90"
          >
            Start for Free
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </nav>
      </div>
    </>
  );
}
