type RoutePathName =
  | "/"
  | "/office"
  | "/gallery"
  | "/studio"
  | "/library"
  | "/404";

export interface Route {
  path: RoutePathName;
  name: string;
  closed?: boolean;
}

export const ROUTES: Route[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/office",
    name: "The Office",
  },
  {
    path: "/gallery",
    name: "The Gallery",
    closed: true,
  },
  {
    path: "/studio",
    name: "The Studio",
    closed: true,
  },
  {
    path: "/library",
    name: "The Library",
    closed: true,
  },
];
