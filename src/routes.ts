import type { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

const Home = lazy(() => import("./routes/home.js"));
const Lazy = lazy(() => import("./routes/lazy.js"));
import NotLazy from "./routes/not-lazy.js";

export const routeConfig: RouteDefinition[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/lazy",
    component: Lazy,
  },
  {
    path: "/not-lazy",
    component: NotLazy,
  },
];
