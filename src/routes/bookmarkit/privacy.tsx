import { createFileRoute } from "@tanstack/react-router";
import { PolicySection as Section, PublicPage } from "@/components/public-page";

// Reviewed against true-line/bookmarkit commit 1c83563a8b3a7ff60d78b08b14d754aa921e2dd8.
// Recheck the manifest, storage, providers, and network features when the app changes.
const LAST_REVIEWED = "2026-11-19";
const SOURCE_URL =
  "https://github.com/true-line/bookmarkit/tree/1c83563a8b3a7ff60d78b08b14d754aa921e2dd8";

export const Route = createFileRoute("/bookmarkit/privacy")({
  head: () => ({
    meta: [
      { title: "BookmarkIt Privacy Policy — True Line AI LLC" },
      {
        name: "description",
        content:
          "How BookmarkIt handles bookmarks, browser permissions, optional AI services, and data deletion.",
      },
      { property: "og:title", content: "BookmarkIt Privacy Policy" },
      { property: "og:type", content: "article" },
    ],
  }),
  component: BookmarkItPrivacy,
});

const permissions = [
  [
    "bookmarks",
    "Read and manage your browser’s bookmark tree, including creating, editing, organizing, importing, and deleting bookmarks.",
  ],
  [
    "storage",
    "Save settings, provider configuration, and bookmark-related data in browser storage.",
  ],
  ["favicon", "Display icons from the browser’s own favicon cache."],
  [
    "contextMenus",
    "Provide the “Bookmark with BookmarkIt” right-click action for pages and links.",
  ],
  [
    "http://*/* and https://*/*",
    "Read the current tab’s title and URL for quick-add, retrieve page metadata, check links, and contact services used by enabled features. These are broad required host permissions; the extension does not register content scripts to monitor every page you visit.",
  ],
];

function BookmarkItPrivacy() {
  return (
    <PublicPage>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        BookmarkIt by True Line AI LLC
      </p>
      <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Last reviewed: <time dateTime={LAST_REVIEWED}>{LAST_REVIEWED}</time>
      </p>
      <p className="mt-6 leading-relaxed text-muted-foreground">
        BookmarkIt is a bookmark manager and browser extension published by True Line AI LLC. This
        policy explains the data it handles, what stays in your browser, and when optional features
        send information to other services.
      </p>

      <Section id="summary" title="Data handling summary">
        <p>
          The default extension stores bookmark titles, URLs, and folders in your browser’s native
          bookmark tree. Additional metadata and settings stay in browser storage. Your browser’s
          own bookmark synchronization, if enabled, is governed by your browser account settings.
        </p>
        <p>
          BookmarkIt does not include advertising or analytics tracking, and does not send your
          bookmark collection to a True Line AI server. It does not sell your data. Network requests
          described below go to the sites or services involved in the features you use.
        </p>
      </Section>
      <Section id="data" title="Data BookmarkIt handles">
        <p>
          Saved or imported data can include bookmark titles and URLs, folders, descriptions, tags,
          ratings, notes, icon addresses, and creation or update times. BookmarkIt also stores
          preferences, saved views, link-check results, and a cached semantic search index when
          used.
        </p>
        <p>
          When you open a bookmark through BookmarkIt, it records the time with that bookmark to
          support “never opened” filtering and last-opened sorting. It does not read your general
          browser history. Quick-add reads the current page or selected link’s title and URL when
          you use that feature.
        </p>
        <p>
          Provider settings can include API keys, model names, and server addresses. In the
          extension these settings use device-local extension storage rather than Chrome sync;
          standalone web builds use localStorage. Optional passphrase protection encrypts stored
          provider settings locally with AES-GCM. The passphrase stays in memory for the session.
          This protection does not encrypt your entire bookmark library or data sent to a provider.
        </p>
      </Section>
      <Section id="ai" title="Optional AI providers">
        <p>
          AI features make requests directly from your browser to the provider you configure: Google
          Gemini, OpenAI, xAI Grok, or an Ollama or LM Studio endpoint. Local endpoints run on your
          own machine by default; a custom remote endpoint sends data to that server.
        </p>
        <p>
          Depending on the feature, requests can include your query, bookmark titles and URLs,
          descriptions, tags, folder names, and retrieved page text. Organizing and digest features
          can send groups of bookmarks. Semantic search and semantic duplicate detection can send
          bookmark titles, descriptions, tags, and folder names to an embeddings provider and cache
          the returned vectors locally; embedding text excludes bookmark URLs.
        </p>
        <p>
          Model-list requests and AI requests use your configured credentials where needed. A
          provider’s privacy policy, retention rules, and account settings apply to data it
          receives. Use local providers or leave AI unconfigured if you do not want bookmark content
          sent to a hosted AI service.
        </p>
      </Section>
      <Section id="network" title="Website requests and optional services">
        <p>
          Entering a public URL in a bookmark form can retrieve page metadata after typing pauses.
          In the extension, this fetch reads a limited amount of public HTML without sending cookies
          or following redirects. Page text may then be used for AI suggestions. The destination
          website receives the requested URL and ordinary connection information, including your IP
          address.
        </p>
        <p>
          URL validation and “Check Links” contact bookmarked websites directly. A collection-wide
          sweep starts when you request it. Checks are limited to public HTTP(S) addresses and do
          not follow redirects; bookmarks marked “Ignore checking” are skipped.
        </p>
        <p>
          “Find Archived Copies” sends the public dead-link URLs in the selected scope to the
          Internet Archive at archive.org to look for snapshots. It runs when you request archive
          recovery.
        </p>
        <p>
          Remote site icons are off by default. With “Load site icons from the web” disabled, icons
          use the browser cache or a local placeholder. If enabled, BookmarkIt can fetch a
          bookmark’s stored icon address, or use Google’s favicon service with the bookmark
          hostname. An imported icon address may point to another server. Those services receive the
          icon request and ordinary connection information.
        </p>
      </Section>
      <Section id="firebase" title="Optional Firebase storage">
        <p>
          A build configured for Firebase stores bookmarks and metadata in the configured Google
          Cloud Firestore project instead of only in the native browser store. Firebase
          Authentication uses an anonymous identity or a supplied authentication token, and
          Firestore may keep a local offline cache. The project operator controls its access rules
          and retention. Google’s service policies also apply. Firebase is not required for the
          default browser extension.
        </p>
      </Section>
      <Section id="permissions" title="Browser permissions">
        <dl className="divide-y divide-border rounded-lg border border-border">
          {permissions.map(([name, use]) => (
            <div key={name} className="px-4 py-3 text-sm">
              <dt className="break-words font-mono text-foreground">{name}</dt>
              <dd className="mt-1">{use}</dd>
            </div>
          ))}
        </dl>
        <p>
          The extension’s executable scripts ship in its package. The manifest does not request the
          browser history permission.
        </p>
      </Section>
      <Section id="deletion" title="Retention and deletion">
        <p>
          Bookmarks, metadata, settings, link-check results, and cached vectors remain in their
          respective stores until removed or cleared. Delete bookmarks through BookmarkIt or your
          browser. Clear extension data or the web app’s site storage to remove its local settings
          and caches. Uninstalling the extension removes its extension-owned storage, but does not
          delete native browser bookmarks.
        </p>
        <p>
          Exported JSON or HTML files remain wherever you saved them until you delete them.
          Uninstalling does not remove Firebase records, browser-synced bookmarks, or data already
          sent to AI or other service providers; manage those through the relevant project, browser
          account, or provider. Do not put passwords or secrets into bookmarks or inquiries.
        </p>
      </Section>
      <Section id="contact" title="Contact and policy updates">
        <p>
          For privacy questions or requests, use the{" "}
          <a href="/inquiry" className="text-primary hover:underline">
            True Line AI inquiry form
          </a>{" "}
          and choose “Privacy request.” You can also report a non-sensitive product issue in the{" "}
          <a
            href="https://github.com/true-line/bookmarkit/issues"
            className="text-primary hover:underline"
          >
            BookmarkIt issue tracker
          </a>
          . GitHub issues are public; do not include private bookmarks or credentials.
        </p>
        <p>
          This policy reflects the{" "}
          <a href={SOURCE_URL} className="text-primary hover:underline">
            reviewed BookmarkIt source
          </a>
          . We will update this page and its review date when data-handling practices change.
        </p>
      </Section>
    </PublicPage>
  );
}
