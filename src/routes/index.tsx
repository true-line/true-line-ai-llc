import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "True Line AI — Agentic Software & AI Training, Frisco TX" },
      { name: "description", content: "True Line AI LLC builds agentic software and offers hands-on AI training for software developers and office teams in Frisco, Texas." },
      { property: "og:title", content: "True Line AI — Agentic Software & AI Training" },
      { property: "og:description", content: "Agentic software products and local AI training in Frisco, Texas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Product = { name: string; tag?: string; desc: string; live?: boolean; url?: string; status?: string };

const products: Product[] = [
  { name: "agentsop.ai", desc: "Standard operating procedures for AI agents.", live: true, url: "https://agentsop.ai" },
  { name: "Dudles", tag: "Your agents. Their identities. Any harness.", desc: "A desktop home for autonomous AI agents. Give each agent a persistent identity, its own workspace, tools, and runtimes—then let it work across AI harnesses and providers without losing who it is.", status: "Coming Soon · Private Beta" },
  { name: "Page Alcove", desc: "Save, organize, and revisit the pages that matter." },
  { name: "Code Traverse", desc: "Navigate and map large codebases. Formerly Cartograph." },
  { name: "Diagram Dreamer", desc: "Turn ideas into diagrams with AI." },
  { name: "Codex Rules Editor", desc: "Author and manage rules for coding agents." },
  { name: "Apple TV Agent", desc: "An agent for your living room screen." },
  { name: "Image Trail", desc: "Track and trace your images." },
  { name: "Overlook", desc: "Overlook — a privacy-first desktop photo library app replacement for Apple Photos." },
  { name: "Local Notes", desc: "A fast, simple, and private notes app that runs entirely in your browser. Capture, edit, and organize notes instantly with local storage—no accounts, no cloud, no backend required. Built with Vite + React + TypeScript for a playful yet minimal desktop experience." },
];

const tracks = [
  { title: "For Software Developers", points: ["Coding agents & AI-assisted workflows", "Prompting, rules files & context engineering", "Building agentic apps with LLM APIs", "Code review, testing & safety with AI"] },
  { title: "For Office Teams", points: ["Practical ChatGPT, Claude & Copilot use", "Automating documents, email & reports", "Data analysis without code", "Responsible AI use & privacy"] },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-6">
        <a href="/" className="font-display text-xl font-bold tracking-tight">True Line <span className="text-primary">AI</span></a>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <a href="#software" className="hover:text-foreground">Software</a>
          <a href="#training" className="hover:text-foreground">Training</a>
          <a href="#whitepapers" className="hover:text-foreground">Whitepapers</a>
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="https://github.com/true-line" className="hover:text-foreground">GitHub</a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-16">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">Frisco, Texas</p>
        <h1 className="font-display max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Agentic software that does the work.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          True Line AI builds tools where AI agents plan, act, and deliver — plus hands-on training so your team can put AI to work too.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#software" className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">See our products</a>
          <a href="#training" className="rounded-md border border-border px-5 py-3 text-sm font-semibold hover:bg-secondary">AI training</a>
        </div>
      </section>

      <section id="software" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Agentic Software</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Our product lineup. One live today, more in beta soon.</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div key={p.name} className="flex flex-col bg-card p-6">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                  <span className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] ${p.live ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                    {p.status ?? (p.live ? "Live" : "Beta Coming Soon...")}
                  </span>
                </div>
                {p.tag && <p className="mt-2 text-sm font-medium text-foreground">{p.tag}</p>}
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                {p.url && <a href={p.url} className="mt-4 text-sm font-semibold text-primary hover:underline">Visit {p.name} →</a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="training" className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Local AI Training</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            In-person and live workshops in Frisco and across the Dallas–Fort Worth area. Taught by someone who builds agentic software every day.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {tracks.map((t) => (
              <div key={t.title} className="rounded-lg border border-border bg-card p-8">
                <h3 className="font-display text-xl font-semibold">{t.title}</h3>
                <ul className="mt-5 space-y-3">
                  {t.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm"><span className="text-primary">▸</span>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
            I also work with local models on NVIDIA DGX Spark, so sessions can cover running and building against models that stay on your own hardware.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">Formats: half-day workshops, multi-week cohorts, and on-site team sessions.</p>
        </div>
      </section>

      <section id="whitepapers" aria-labelledby="whitepapers-heading" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 id="whitepapers-heading" className="font-display text-3xl font-bold md:text-4xl">Whitepapers</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Technical perspectives on agentic software, AI workflows, and local models.
          </p>
          <article className="mt-10 rounded-lg border border-border bg-card p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">Draft v0.3</span>
              <p className="text-xs text-muted-foreground"><time dateTime="2026-10-20">October 20, 2026</time> · 42 pages · PDF</p>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">Native Shareable Soul Packages</h3>
            <p className="mt-2 text-sm font-medium">A persistent environment for agent identity work and learning</p>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              A proposed .soul package format for preserving an AI agent’s identity, knowledge, tools, and ongoing work across harnesses and inference providers. Covers portable agent environments, accumulated learning, and explicit operations for backup, transfer, and sharing.
            </p>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Version 0.3 clarifies approval and isolation rules, preserves mixed-source provenance, strengthens quarantine and recovery checks, and adds a worked package example with verified hashes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/whitepapers/native-shareable-soul-packages-v0-3.pdf" target="_blank" rel="noopener noreferrer" className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">Read whitepaper <span className="sr-only">(Draft v0.3 PDF, opens in a new tab)</span>↗</a>
              <a href="/whitepapers/native-shareable-soul-packages-v0-3.pdf" download className="rounded-md border border-border px-5 py-3 text-sm font-semibold hover:bg-secondary">Download PDF</a>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Previous versions: <a href="/whitepapers/native-shareable-soul-packages-v0-2.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Draft v0.2 <span className="sr-only">(PDF, opens in a new tab)</span>↗</a>{" · "}<a href="/whitepapers/native-shareable-soul-packages-v0-1.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Draft v0.1 <span className="sr-only">(PDF, opens in a new tab)</span>↗</a>
            </p>
          </article>
        </div>
      </section>

      <section id="about" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">About</h2>
          <div className="mt-6 max-w-2xl space-y-4 text-muted-foreground">
            <p>I build agentic software and work with local models, including on NVIDIA DGX Spark.</p>
            <p>Before this I spent 10 years at Apple working on MacOS, iOS, and Apple TV, and four years as a Principal AI Engineer. Even earlier I was a Google Android engineer working on Android on TrustZone and ARM board bring-ups, and then at the Samsung Research Center in Richardson, Texas.</p>
            <p>True Line AI is where that work continues: shipping my own products and teaching developers and office teams in Frisco to get real use out of AI.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-6 py-8 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} True Line AI LLC · Frisco, Texas</span>
          <a href="https://github.com/true-line" className="hover:text-foreground">github.com/true-line</a>
        </div>
      </footer>
    </div>
  );
}
