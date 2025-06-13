import {
  type RouteConfig,
  index,
  layout,
  route
} from "@react-router/dev/routes";

export default [
  index("components/loading-page.tsx"),

  layout("layout.tsx", [
    route("home", "routes/home.tsx"),
    route("services", "routes/services.tsx"),
    route("privacy-policy", "routes/privacy-policy.tsx"),
  ])
] satisfies RouteConfig;
