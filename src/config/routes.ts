import type { Route } from "../types/routes";

export const ROUTES: Route[] = [
  {
    path: "/",
    name: "Home",
    state: "open"
  },
  {
    path: "/office",
    name: "The Office",
    state: "open"
  },
  {
    path: "/gallery",
    name: "The Gallery",
    state: "closed"
  },
  {
    path: "/studio",
    name: "The Studio",
    state: "closed"
  },
  {
    path: "/library",
    name: "The Library",
    state: "closed"
  }
];
