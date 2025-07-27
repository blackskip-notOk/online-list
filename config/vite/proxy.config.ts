/*
 * Copyright (c) Nexign, JSC, 2022-2023.
 */
/**
 *
 * @author Ilya Babanov
 * @version 1.0.0
 * @since 1.0.0
 */

import type { ProxyOptions } from 'vite';
import { loadEnv } from 'vite';

export function setProxyConfig(mode: string) {
	const env = loadEnv(mode, '../env', 'B2B_SOHO_');

	const api_host = env.B2B_SOHO_SERVER === 'VRA' ? env.B2B_SOHO_VRA_NAME : env.B2B_SOHO_HOST;
	const api_port = env.B2B_SOHO_SERVER === 'VRA' ? env.B2B_SOHO_VRA_PORT : env.B2B_SOHO_EMULATOR_PORT;
	const api_path = `http://${api_host}:${api_port}`;

	const proxyOptions = {
		target: api_path,
		changeOrigin: true,
		secure: false,
	};

	const proxyConfig: Record<string, ProxyOptions> = {
		'^/api/.*': proxyOptions,
		'^/js/.*': proxyOptions,
		'^/css/.*': proxyOptions,
		'^/font/.*': proxyOptions,
	};

	return proxyConfig;
}
