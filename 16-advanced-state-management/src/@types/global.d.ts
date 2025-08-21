export type AppRoute = Omit<RouteObject, "children"> & {
  text?: string;
  display?: boolean;
  children?: AppRoute[];
};
