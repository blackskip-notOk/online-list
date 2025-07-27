import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import biomePlugin from 'vite-plugin-biome';
import svgr from 'vite-plugin-svgr';
import { viteAliases } from './config/vite/aliases';
import { logAppSettings } from './config/vite/logAppSetting';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './config/env', 'PROJECT_');
  console.log({ env })
  Object.assign(process.env, env);
  console.log({ env: process.env  })
  
	console.table(logAppSettings(mode));

  const proxyOptions = {
		target: `http://${env.PROJECT_HOST}:${env.PROJECT_SERVER_PORT}`,
		changeOrigin: true,
		secure: false,
	};
  
  return {
    clearScreen: false,
    define: {
			__APP_VERSION__: JSON.stringify(process.env.npm_package_version),
		},
    envDir: './configs/env',
    envPrefix: 'PROJECT_',
    logLevel: 'error',
    resolve: {
      alias: viteAliases,
			extensions: ['.ts', '.tsx', '.json', '.js'],
		},
    plugins: [
      tanstackRouter({ target: "react", autoCodeSplitting: true, quoteStyle: 'single' }),
      react({ tsDecorators: true, devTarget: "esnext" }),
      biomePlugin(),
      svgr(),
    ],
    css: {
      devSourcemap: true,
      transformer: "lightningcss",
    },
    server: {
      open: true,
      host: env.PROJECT_HOST || '0.0.0.0',
      port: Number(env.PROJECT_PORT),
      strictPort: false,
      proxy: {
		    '^/api/.*': proxyOptions,
		    '^/js/.*': proxyOptions,
		    '^/css/.*': proxyOptions,
		    '^/font/.*': proxyOptions,
      }
    },
    build: {
      target: "esnext",
      cssMinify: "lightningcss",
      sourcemap: true,
    },
    preview: {
		  port: 8000,
		  strictPort: true,
		  open: true,
		  proxy: {
		    '^/api/.*': proxyOptions,
		    '^/js/.*': proxyOptions,
		    '^/css/.*': proxyOptions,
		    '^/font/.*': proxyOptions,
        '/': proxyOptions,
      }
	  },
	};
});
