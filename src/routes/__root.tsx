import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/spells">spells</Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  ),
});
