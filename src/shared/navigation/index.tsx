import { Link, linkOptions } from '@tanstack/react-router';
import styles from './index.module.css';

interface NavigationProps {
	className?: string;
}

const options = linkOptions([
	{
		to: '/',
		label: 'Мои персонажи',
		activeOptions: { exact: true },
		params: {
			iconSrc: '/images/characters.svg',
		},
	},
	{
		to: '/spells',
		label: 'spells',
		params: {
			iconSrc: '',
		},
	},
]);

export const Navigation = ({ className }: NavigationProps) => {
	return (
		<div className={className}>
			<img src="/images/icon.svg" className={styles.logo} alt="logo dnd dice" />
			<nav className={styles.nav}>
				{options.map((option) => {
					const { to, params, label } = option;

					return (
						<Link
							{...option}
							key={to}
							className={styles.link}
							activeProps={{ className: styles['link-active'] }}
							inactiveProps={{ className: styles.link }}
						>
							{({ isActive }) => {
								return (
									<>
										<img
											src={params.iconSrc}
											className={
												isActive
													? styles['link-icon-active']
													: styles['link-icon']
											}
											alt="navigation icon"
										/>
										<span>{label}</span>
									</>
								);
							}}
						</Link>
					);
				})}
			</nav>
			<div>PROFILE</div>
		</div>
	);
};
