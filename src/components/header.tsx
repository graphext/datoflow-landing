'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react';
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
            ? ''
            : scrolled
              ? 'border-b border-border/40 backdrop-blur-xl backdrop-saturate-150 shadow-sm'
              : 'shadow-none'
        }`}
        style={{
          background: menuOpen
            ? '#ffffff'
            : scrolled
              ? 'rgba(255, 255, 255, 0.6)'
              : 'linear-gradient(180deg, #dce6ff, #d8e2ff)',
          borderBottom: scrolled ? undefined : 'none',
        }}
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

      {/* Mobile menu panel */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 h-[calc(100dvh-4rem)] bg-white transition-opacity duration-300 ease-out md:hidden ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col px-6 pt-10">
          <a
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between border-b border-border/60 py-5 text-lg font-semibold text-foreground transition-colors hover:text-muted-foreground"
          >
            Features
            <ChevronRight className="h-5 w-5 text-muted-foreground/60" />
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between border-b border-border/60 py-5 text-lg font-semibold text-foreground transition-colors hover:text-muted-foreground"
          >
            How It Works
            <ChevronRight className="h-5 w-5 text-muted-foreground/60" />
          </a>
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between border-b border-border/60 py-5 text-lg font-semibold text-foreground transition-colors hover:text-muted-foreground"
          >
            Pricing
            <ChevronRight className="h-5 w-5 text-muted-foreground/60" />
          </a>
          <a
            href={`${appUrl}/login`}
            onClick={() => setMenuOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-6 py-3.5 text-base font-medium text-foreground transition-all hover:bg-muted"
          >
            Log in
          </a>
          <a
            href={`${appUrl}/login`}
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-base font-medium text-white transition-all hover:opacity-90"
          >
            Start for Free
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </>
  );
}
