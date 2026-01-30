'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react';
import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.datoflow.com';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* Outer shell: always fixed full-width, only padding animates */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[padding] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled && !menuOpen ? 'pt-3 px-4 md:px-[calc(50vw-384px)]' : 'pt-0 px-0'
        }`}
        style={{ pointerEvents: 'none' }}
      >
        {/* Inner bar: this is what visually shrinks into a pill */}
        <div
          className={`pointer-events-auto transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            menuOpen
              ? 'rounded-none bg-card'
              : scrolled
                ? 'rounded-2xl border border-border/60 shadow-lg backdrop-blur-2xl backdrop-saturate-150'
                : 'rounded-none border border-transparent'
          }`}
          style={
            !menuOpen && !scrolled
              ? { background: 'transparent' }
              : !menuOpen && scrolled
                ? { background: 'var(--card)' }
                : undefined
          }
        >
          <div
            className={`mx-auto flex items-center justify-between transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              scrolled && !menuOpen
                ? 'h-11 px-5'
                : 'h-16 max-w-7xl px-6'
            }`}
          >
            <Logo href="/" size={scrolled ? 'sm' : 'md'} />

            <nav
              className={`hidden items-center md:flex transition-all duration-500 ${
                scrolled ? 'gap-5 text-[13px]' : 'gap-8 text-sm'
              }`}
            >
              <a href="#features" className="text-muted-foreground font-medium transition-colors hover:text-foreground">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground font-medium transition-colors hover:text-foreground">
                How It Works
              </a>
              <a href="#pricing" className="text-muted-foreground font-medium transition-colors hover:text-foreground">
                Pricing
              </a>
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <ThemeToggle />
              <a
                href={`${appUrl}/login`}
                className={`text-muted-foreground font-medium transition-all hover:text-foreground ${
                  scrolled ? 'text-[13px]' : 'text-sm'
                }`}
              >
                Log in
              </a>
              <a
                href={`${appUrl}/login`}
                className={`inline-flex items-center gap-2 rounded-lg bg-primary font-medium text-white transition-all hover:scale-[1.03] hover:shadow-lg active:scale-[0.97] ${
                  scrolled ? 'px-3.5 py-1.5 text-[13px]' : 'px-5 py-2 text-sm'
                }`}
                style={{
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 1px 3px rgba(40,77,205,0.4)',
                }}
              >
                Sign Up
              </a>
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-accent"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 h-[calc(100dvh-4rem)] bg-card backdrop-blur-2xl transition-opacity duration-300 ease-out md:hidden ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col px-6 pt-10">
          <a href="#features" onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between border-b border-border/60 py-5 text-lg font-semibold text-foreground transition-colors hover:text-muted-foreground">
            Features
            <ChevronRight className="h-5 w-5 text-muted-foreground/60" />
          </a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between border-b border-border/60 py-5 text-lg font-semibold text-foreground transition-colors hover:text-muted-foreground">
            How It Works
            <ChevronRight className="h-5 w-5 text-muted-foreground/60" />
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between border-b border-border/60 py-5 text-lg font-semibold text-foreground transition-colors hover:text-muted-foreground">
            Pricing
            <ChevronRight className="h-5 w-5 text-muted-foreground/60" />
          </a>
          <a href={`${appUrl}/login`} onClick={() => setMenuOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-6 py-3.5 text-base font-medium text-foreground transition-all hover:bg-accent">
            Log in
          </a>
          <a href={`${appUrl}/login`} onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-medium text-white transition-all hover:opacity-90"
            style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 1px 3px rgba(40,77,205,0.4)' }}>
            Sign Up
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </>
  );
}
