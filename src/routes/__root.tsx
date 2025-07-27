import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Navigation } from '../shared/navigation';
import styles from './root.module.css';

export const Route = createRootRoute({
	component: () => (
		<main className={styles.main}>
			<Navigation className={styles.nav} />
			<div className={styles.page}>
				<Outlet />
			</div>
			<footer className={styles.footer}>Footer</footer>
			<TanStackRouterDevtools initialIsOpen={false} />
			<ReactQueryDevtools initialIsOpen={false} />
		</main>
	),
});
