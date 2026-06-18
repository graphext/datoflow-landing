import Link from 'next/link';
import { Logo } from '@/components/logo';

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  title: string;
  description: string;
  updatedAt: string;
  sections: LegalSection[];
};

export function LegalPage({ title, description, updatedAt, sections }: LegalPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border/60 bg-card/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Logo href="/" size="md" />
          <nav className="flex items-center gap-5 text-sm text-muted-foreground">
            <Link className="transition-colors hover:text-foreground" href="/privacy">
              Privacy
            </Link>
            <Link className="transition-colors hover:text-foreground" href="/terms">
              Terms
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Datoflow legal
          </p>
          <h1 className="mb-5 text-4xl font-medium tracking-[-0.025em] md:text-5xl">
            {title}
          </h1>
          <p className="mb-3 text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
          <p className="mb-14 text-sm text-muted-foreground">
            Last updated: {updatedAt}
          </p>

          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-4 text-2xl font-semibold tracking-[-0.015em]">
                  {section.title}
                </h2>
                <div className="space-y-4 text-base leading-7 text-muted-foreground">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>

      <footer className="border-t border-border/40 py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Datoflow. All rights reserved.</span>
          <div className="flex gap-4">
            <Link className="transition-colors hover:text-foreground" href="/">
              Home
            </Link>
            <Link className="transition-colors hover:text-foreground" href="/privacy">
              Privacy
            </Link>
            <Link className="transition-colors hover:text-foreground" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
