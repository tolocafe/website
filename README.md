# Welcome to React Router + Cloudflare Workers!

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cloudflare/templates/tree/main/react-router-starter-template)

![React Router Starter Template Preview](https://imagedelivery.net/wSMYJvS3Xw-n339CbDyDIA/bfdc2f85-e5c9-4c92-128b-3a6711249800/public)

<!-- dash-content-start -->

A modern, production-ready template for building full-stack React applications using [React Router](https://reactrouter.com/) and the [Cloudflare Vite plugin](https://developers.cloudflare.com/workers/vite-plugin/).

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎨 [vanilla-extract](https://vanilla-extract.style/) for type-safe styling with design tokens
- 🎉 TailwindCSS for utility classes
- 📖 [React Router docs](https://reactrouter.com/)
- 🔎 Built-in Observability to monitor your Worker
<!-- dash-content-end -->

## Prerequisites

This project requires [Bun](https://bun.sh/) as the package manager and runtime.

```bash
# Install Bun (macOS, Linux, WSL)
curl -fsSL https://bun.sh/install | bash
```

## Getting Started

Outside of this repo, you can start a new project with this template using [C3](https://developers.cloudflare.com/pages/get-started/c3/) (the `create-cloudflare` CLI):

```bash
bun create cloudflare@latest -- --template=cloudflare/templates/react-router-starter-template
```

A live public deployment of this template is available at [https://react-router-starter-template.templates.workers.dev](https://react-router-starter-template.templates.workers.dev)

### Installation

Install the dependencies:

```bash
bun install
```

### Development

Start the development server with HMR:

```bash
bun run dev
```

Your application will be available at `http://localhost:5173`.

## Typegen

Generate types for your Cloudflare bindings in `wrangler.json`:

```bash
bun run typegen
```

## Building for Production

Create a production build:

```bash
bun run build
```

## Previewing the Production Build

Preview the production build locally:

```bash
bun run preview
```

## Deployment

If you don't have a Cloudflare account, [create one here](https://dash.cloudflare.com/sign-up)! Go to your [Workers dashboard](https://dash.cloudflare.com/?to=%2F%3Aaccount%2Fworkers-and-pages) to see your [free custom Cloudflare Workers subdomain](https://developers.cloudflare.com/workers/configuration/routing/workers-dev/) on `*.workers.dev`.

Once that's done, you can build your app:

```bash
bun run build
```

And deploy it:

```bash
bun run deploy
```

To deploy a preview URL:

```bash
bunx wrangler versions upload
```

You can then promote a version to production after verification or roll it out progressively.

```bash
bunx wrangler versions deploy
```

## Styling

This template uses [vanilla-extract](https://vanilla-extract.style/) for type-safe CSS-in-JS styling with design tokens, alongside [Tailwind CSS](https://tailwindcss.com/) for utility classes.

### Design Tokens

Design tokens are defined in `app/styles/tokens.css.ts` and include:

- **Colors**: background, foreground, primary, secondary, muted, border, accent
- **Typography**: font families, sizes, weights, line heights
- **Spacing**: 0-24 scale
- **Border radius**: none to full
- **Shadows**: sm, md, lg, xl

### Theme Support

The project includes light and dark themes:

```typescript
import { vars, lightTheme, darkTheme } from "~/styles";
```

### Creating Component Styles

Create `.css.ts` files colocated with your components:

```typescript
import { style } from "@vanilla-extract/css";
import { vars } from "~/styles";

export const button = style({
  backgroundColor: vars.color.primary,
  color: vars.color.primaryForeground,
  padding: `${vars.space[2]} ${vars.space[4]}`,
  borderRadius: vars.radius.md,
});
```

---

Built with ❤️ using React Router.
