import HomePage from "@/pages/Home";

interface Route {
  path: string;
  element: React.ComponentType;
}

export const routes: Route[] = [
  {
    path: "/",
    element: HomePage,
  },
];
