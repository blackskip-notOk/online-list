import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import biomePlugin from "vite-plugin-biome";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
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
  },
  build: {
    cssMinify: "lightningcss",
  },
});
