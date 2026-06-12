import path from 'node:path';

import type { AliasOptions } from 'vite';

export const viteAliases: AliasOptions = [
	{ find: '@package.json', replacement: path.resolve(__filename, '../../package.json') },
	{ find: '@texts', replacement: path.resolve(__dirname, '../../src/texts') },
	{ find: '@shared', replacement: path.resolve(__dirname, '../../src/shared') },
	{ find: '@', replacement: path.resolve(__dirname, '../../src') },
	{ find: '~', replacement: path.resolve(__dirname, '../../public') },
];
