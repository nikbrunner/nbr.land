type RoutePathName = "/" | "/office" | "/gallery" | "/studio" | "/library" | "/404";

export type RouteState = "closed" | "open";

export interface Route {
  path: RoutePathName;
  name: string;
  state: RouteState;
}
