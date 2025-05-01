import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Navigation } from "../shared/navigation";
import styles from "./root.module.css";

export const Route = createRootRoute({
  component: () => (
    <main className={styles.main}>
      <Navigation className={styles.nav} />
      <section className={styles.page}>
        <Outlet />
      </section>
      <footer className={styles.footer}>Footer</footer>
      <TanStackRouterDevtools initialIsOpen={false} />
    </main>
  ),
});
