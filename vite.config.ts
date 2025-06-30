import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { viteStaticCopy } from "vite-plugin-static-copy";

// export default defineConfig({
export default defineConfig(({ mode }) => ({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), viteStaticCopy({
    targets: [
      {
        src: "web.config",
        dest: ".",
      },
    ],
  })
  ],
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
  base: mode === "production" ? "/" : "./",
}));
