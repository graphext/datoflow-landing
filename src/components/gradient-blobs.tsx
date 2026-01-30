'use client';

export function GradientBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="animate-blob-drift absolute -top-32 right-1/4 h-[500px] w-[500px] rounded-full opacity-30 dark:opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #3E79EA 0%, transparent 70%)' }}
      />
      <div
        className="animate-blob-drift-slow absolute top-1/4 -left-20 h-[400px] w-[400px] rounded-full opacity-20 dark:opacity-15 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #284DCD 0%, transparent 70%)' }}
      />
      <div
        className="animate-blob-drift absolute -bottom-20 left-1/3 h-[350px] w-[350px] rounded-full opacity-15 dark:opacity-10 blur-[80px]"
        style={{ background: 'radial-gradient(circle, #6B8FE8 0%, transparent 70%)' }}
      />
    </div>
  );
}
