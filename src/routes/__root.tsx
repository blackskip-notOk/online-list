import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { main } from "./root.module.css";
import { Navigation } from "../shared/navigation";

export const Route = createRootRoute({
  component: () => (
    <main className={main}>
      <Navigation />
      <Outlet />
      <TanStackRouterDevtools initialIsOpen={false} />
    </main>
  ),
});
