import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
  // build: {
  //   outDir: "dist",
  //   rollupOptions: {
  //     output: {
  //       entryFileNames: "index.js",
  //       chunkFileNames: "[name].js",
  //       assetFileNames: "[name].[ext]",
  //     },
  //   },
  // },
  base: "/",
});
