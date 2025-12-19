import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes'

export default [
  // Root index redirects to preferred locale
  index('routes/index.tsx'),

  // Locale-prefixed routes
  route(':locale', 'routes/locale-layout.tsx', [
    index('routes/home.tsx'),
    route('blog', 'routes/blog.tsx'),
    route('blog/:slug', 'routes/blog-post.tsx'),
    route('contact', 'routes/contact.tsx'),
  ]),
] satisfies RouteConfig
