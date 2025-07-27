import path from 'node:path';

import type { AliasOptions } from 'vite';

export const viteAliases: AliasOptions = [
	{ find: '@package.json', replacement: path.resolve(__filename, '../../package.json') },
	{ find: '@i18n', replacement: path.resolve(__dirname, '../../src/i18n') },
	{ find: '@global', replacement: path.resolve(__dirname, '../../src/global') },
	{ find: '@theme', replacement: path.resolve(__dirname, '../../src/app/theme') },
	{ find: '@api', replacement: path.resolve(__dirname, '../../src/app/api') },
	{ find: '@components', replacement: path.resolve(__dirname, '../../src/app/components') },
	{ find: '@helpers', replacement: path.resolve(__dirname, '../../src/app/helpers') },
	{ find: '@hooks', replacement: path.resolve(__dirname, '../../src/app/hooks') },
	{ find: '@modules', replacement: path.resolve(__dirname, '../../src/app/modules') },
	{ find: '@pages', replacement: path.resolve(__dirname, '../../src/app/pages') },
	{ find: '@store', replacement: path.resolve(__dirname, '../../src/app/store') },
	{ find: '@tests', replacement: path.resolve(__dirname, '../../src/__tests__') },
	{ find: '@', replacement: path.resolve(__dirname, '../../src') },
	{ find: '~', replacement: path.resolve(__dirname, '../../public') },
];
