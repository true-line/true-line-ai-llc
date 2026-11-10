import { createFileRoute } from "@tanstack/react-router";

// Public copy of Image Trail's privacy policy. The canonical source is
// docs/privacy-and-permissions-review.md in true-line/image-trail; update this
// page whenever that document changes and move LAST_REVIEWED with it.
const LAST_REVIEWED = "2026-11-10";
const SOURCE_URL =
  "https://github.com/true-line/image-trail/blob/main/docs/privacy-and-permissions-review.md";
const SUPPORT_URL = "https://github.com/true-line/image-trail/issues";

export const Route = createFileRoute("/image-trail/privacy")({
  head: () => ({
    meta: [
      { title: "Image Trail Privacy Policy — True Line AI LLC" },
      {
        name: "description",
        content:
          "How the Image Trail browser extension by True Line AI LLC handles data, which permissions it uses, and how to remove what it stores.",
      },
      { property: "og:title", content: "Image Trail Privacy Policy" },
      { property: "og:type", content: "article" },
    ],
  }),
  component: ImageTrailPrivacy,
});

const summary = [
  "Image Trail runs on a page only after you invoke the extension action or a configured extension shortcut.",
  "Session Recents use browser-managed session storage. They are not restored after the browser session ends.",
  "Pins, bookmark metadata, settings, and encryption state are stored in extension-owned browser storage on your device. Captured original image bytes are stored separately in the encrypted original store.",
  "When protection is enabled, captured originals, thumbnails, and protected bookmark metadata are encrypted locally before durable storage or export.",
  "Optional provider connections send only the OAuth traffic you request and encrypted backup objects to the provider you selected.",
  "Image Trail does not sell data, use it for advertising or credit decisions, expose it for routine human review, or execute remotely hosted code.",
];

const categories = [
  {
    category: "Website content",
    data: "Image and page URLs you select, fetched image or linked-page bytes, titles, dimensions, and derived URL fields",
    purpose: "Inspect, navigate, preview, pin, or capture the image you chose",
  },
  {
    category: "Web history / browsing activity",
    data: "URLs from pages and images where you explicitly invoke Image Trail",
    purpose: "Preserve the active trail and the durable records you request",
  },
  {
    category: "User-generated content",
    data: "Labels, albums, settings, review status, and imported metadata",
    purpose: "Organize your local gallery and backups",
  },
  {
    category: "Authentication information",
    data: "Optional provider OAuth tokens and connection state",
    purpose: "Connect only the provider you chose",
  },
];

const permissions = [
  {
    name: "activeTab",
    use: "Temporary access to the current page after an explicit extension gesture.",
  },
  { name: "scripting", use: "Inject the Image Trail panel into that active page." },
  { name: "storage", use: "Extension-owned settings and the pCloud connection record." },
  { name: "downloads", use: "Export images and encrypted artifacts through browser downloads." },
  { name: "identity", use: "Run the pCloud or Google Drive sign-in flow you select." },
  {
    name: "declarativeNetRequestWithHostAccess",
    use: "Apply short-lived pCloud request-header rules, only after pCloud host access is granted.",
  },
];

const hostAccess = [
  "Image Trail does not receive persistent access to every site at installation. It has no required host permissions and registers no static content scripts.",
  "Capturing an encrypted original from another image host may ask for access to that one exact image origin. Approval persists under the browser's site-access controls until you remove it. Denying it leaves the URL intact and produces a retryable error.",
  "Connecting pCloud asks separately for access to pCloud hosts. The request is limited to pCloud because its API chooses regional API hosts and dynamic download subdomains. Denying it does not open sign-in or store a token.",
  "All executable JavaScript ships inside the extension package. There is no remotely hosted script and no eval-based code loader.",
];

const providers = [
  "A pCloud connection begins only from the Connect pCloud action.",
  "A Google Drive connection, when enabled in a release, uses the least-privilege drive.file scope, so the extension can access only files it created or that you explicitly selected.",
  "Provider uploads contain password-encrypted backups or encrypted objects, not a plaintext copy of your library.",
];

function ImageTrailPrivacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-6 px-6 py-6">
        <a href="/" className="font-display text-xl font-bold tracking-tight">
          True Line <span className="text-primary">AI</span>
        </a>
        <nav aria-label="Main navigation" className="text-sm text-muted-foreground">
          <a href="/" className="hover:text-foreground">
            Home
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-24 pt-10">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Image Trail by True Line AI LLC
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last reviewed: <time dateTime={LAST_REVIEWED}>{LAST_REVIEWED}</time>
        </p>
        <p className="mt-6 text-muted-foreground">
          Image Trail is a browser extension, published by True Line AI LLC, for inspecting image
          URL patterns, navigating related images, and keeping optional local pins, encrypted
          captures, and encrypted backups. It works only when you invoke it. This page explains what
          data it handles and why.
        </p>

        <Section id="summary" title="Data handling summary">
          <List items={summary} />
        </Section>

        <Section id="categories" title="Data categories">
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/60 text-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Category
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Data handled
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.map((row) => (
                  <tr key={row.category} className="border-t border-border align-top">
                    <th scope="row" className="px-4 py-3 font-medium">
                      {row.category}
                    </th>
                    <td className="px-4 py-3 text-muted-foreground">{row.data}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="retention" title="Retention and deletion">
          <p className="text-muted-foreground">
            Data is kept until you clear the relevant Recents, pin or bookmark, captured original,
            provider connection, or all extension storage. Removing the extension also removes its
            browser-managed storage. Files you exported and objects you uploaded to a provider stay
            under your control until you delete them.
          </p>
        </Section>

        <Section id="site-access" title="Site access">
          <List items={hostAccess} />
        </Section>

        <Section id="permissions" title="Permissions">
          <dl className="divide-y divide-border rounded-lg border border-border">
            {permissions.map((permission) => (
              <div key={permission.name} className="px-4 py-3 text-sm">
                <dt className="font-mono text-foreground">{permission.name}</dt>
                <dd className="mt-1 text-muted-foreground">{permission.use}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="providers" title="Optional cloud providers">
          <List items={providers} />
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-muted-foreground">
            Image Trail is published by True Line AI LLC. Send support and privacy requests through{" "}
            <a href={SUPPORT_URL} className="text-primary hover:underline">
              the Image Trail issue tracker
            </a>
            . The full permission review this page is taken from is in{" "}
            <a href={SOURCE_URL} className="text-primary hover:underline">
              the Image Trail repository
            </a>
            .
          </p>
        </Section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-4 px-6 py-8 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} True Line AI LLC · Frisco, Texas</span>
          <a href="https://github.com/true-line" className="hover:text-foreground">
            github.com/true-line
          </a>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="mt-12">
      <h2 id={id} className="font-display mb-4 text-2xl font-bold">
        {title}
      </h2>
      {children}
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-muted-foreground">
          <span aria-hidden="true" className="text-primary">
            ▸
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
