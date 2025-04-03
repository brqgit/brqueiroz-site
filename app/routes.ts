import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // index("./components/loading-page.tsx"),
  // route("home", "./routes/home.tsx")
  index("./home/home.tsx")
] satisfies RouteConfig;
