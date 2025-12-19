import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/index.tsx"),
	route(":locale", "routes/locale-layout.tsx", [index("routes/home.tsx")]),
] satisfies RouteConfig;
