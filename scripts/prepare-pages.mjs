// Assembles the static site that GitHub Pages will serve.
//
// The app is built with TanStack Start + Nitro, which produces a server bundle
// (`.output/server`) plus a client bundle with prerendered HTML
// (`.output/public`). GitHub Pages can only serve static files, so this script
// copies the client bundle to `dist/` and adds the few files Pages expects.
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, ".output", "public");
const dist = path.join(root, "dist");
const domain = process.env.SITE_DOMAIN ?? "www.true-line.ai";

if (!existsSync(source)) {
  console.error(`[prepare-pages] Missing ${path.relative(root, source)} — run the build first.`);
  process.exit(1);
}

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(source, dist, { recursive: true });

// GitHub Pages serves 404.html for unknown paths. Reuse the prerendered shell so
// the client-side router can render its own not-found page.
const indexHtml = path.join(dist, "index.html");
if (existsSync(indexHtml)) {
  const html = await readFile(indexHtml, "utf8");
  await writeFile(path.join(dist, "404.html"), html);
}

// `_headers` is a Cloudflare Pages convention; it has no meaning on GitHub Pages.
await rm(path.join(dist, "_headers"), { force: true });

// Custom domain. Also set in the repo's Pages settings — both are kept in sync.
await writeFile(path.join(dist, "CNAME"), `${domain}\n`);

// Stop GitHub Pages from running Jekyll, which would ignore some asset folders.
await writeFile(path.join(dist, ".nojekyll"), "");

console.log(`[prepare-pages] Wrote ${path.relative(root, dist)}/ for ${domain}`);
