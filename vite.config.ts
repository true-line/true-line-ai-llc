// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender every static route to HTML at build time so the site can be served
    // from a plain static host (GitHub Pages). The nitro/SSR bundle still builds for
    // Lovable preview and for Cloudflare Workers deployments.
    prerender: {
      enabled: true,
      crawlLinks: true,
      // PDFs are copied from public/ and must not be rendered as app routes.
      filter: ({ path }: { path: string }) => !/\.pdf$/i.test(path),
      autoStaticPathsDiscovery: true,
      autoSubfolderIndex: true,
      failOnError: true,
    },
    sitemap: {
      enabled: true,
      host: "https://www.true-line.ai",
    },
  },
});
