import type { ReactNode } from "react";

export function PublicPage({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-6 px-6 py-6">
        <a href="/" className="font-display text-xl font-bold tracking-tight">
          True Line <span className="text-primary">AI</span>
        </a>
        <nav aria-label="Main navigation" className="flex gap-6 text-sm text-muted-foreground">
          <a href="/" className="hover:text-foreground">
            Home
          </a>
          <a href="/inquiry" className="hover:text-foreground">
            Inquiry
          </a>
        </nav>
      </header>
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-10">{children}</main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-4 px-6 py-8 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} True Line AI LLC · Frisco, Texas</span>
          <a href="/bookmarkit/privacy" className="hover:text-foreground">
            BookmarkIt privacy policy
          </a>
          <a href="https://github.com/true-line" className="hover:text-foreground">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="mt-12">
      <h2 id={id} className="font-display mb-4 text-2xl font-bold">
        {title}
      </h2>
      <div className="space-y-4 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}
