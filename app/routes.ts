import {
	type RouteConfig,
	index,
	layout,
	route,
} from "@react-router/dev/routes";

export default [
	// Root index redirects to preferred locale
	index("routes/index.tsx"),

	// Locale-prefixed routes
	route(":locale", "routes/locale-layout.tsx", [
		index("routes/home.tsx"),
		// Add more locale-aware routes here, e.g.:
		// route("about", "routes/about.tsx"),
	]),
] satisfies RouteConfig;
