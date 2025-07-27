import { loadEnv } from 'vite';

export function logAppSettings(mode: string) {
	const env = loadEnv(mode, '../env', 'PROJECT_');

	return {
		'MODE:': mode,
		'FRONT_HOST:': env.PROJECT_HOST ?? 'localhost',
		'FRONT_PORT:': env.PROJECT_PORT ?? '8000',
		'SERVER_HOST:': env.PROJECT_HOST || 'localhost',
		'SERVER_PORT:': env.PROJECT_SERVER_PORT || '3000',
	};	
}
