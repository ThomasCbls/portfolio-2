import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/mainPage.tsx"),
  route("competence", "pages/skillPage.tsx"),
] satisfies RouteConfig;
