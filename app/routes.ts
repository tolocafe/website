import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes'

export default [
  // Root index redirects to preferred locale
  index('routes/index.tsx'),

  // Sitemap
  route('sitemap.xml', 'routes/sitemap[.]xml.tsx'),

  // Locale-prefixed routes
  route(':locale', 'routes/locale-layout.tsx', [
    index('routes/home.tsx'),
    route('blog', 'routes/blog.tsx'),
    route('blog/:slug', 'routes/blog-post.tsx'),
    route('contact', 'routes/contact.tsx'),
    // Dynamic pages from Sanity (must be last to catch remaining slugs)
    route(':slug', 'routes/page.tsx'),
  ]),
] satisfies RouteConfig
