# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Public inquiry and BookmarkIt privacy pages

- `/inquiry` posts to `https://agents.true-line.ai/api/inquiry`. The recipient
  email and Resend credentials stay in that backend's private environment.
- `/bookmarkit/privacy` documents BookmarkIt's storage, permissions, optional
  providers, network features, and deletion behavior. Its source revision and
  review date are recorded in the route; review both when BookmarkIt changes.

Deploy the companion `agent-bot` public inquiry endpoint before publishing this
site change. It reuses that project's existing access-request email and scoped
Redis configuration. No recipient address or secret belongs in a `VITE_*`
variable or frontend source. See `docs/public-inquiry.md` in the backend change
for its configuration and limits.

Run `npm test`, `npx tsc --noEmit`, and `npm run build:pages` to validate the site.
The Pages build generates static HTML for both new URLs and adds them to the
sitemap. The existing GitHub Pages deployment workflow remains in use.
