// vite.config.ts
import { reactRouter } from "file:///mnt/c/Users/aldos/Desktop/brqueiroz-site/node_modules/@react-router/dev/dist/vite.js";
import tailwindcss from "file:///mnt/c/Users/aldos/Desktop/brqueiroz-site/node_modules/@tailwindcss/vite/dist/index.mjs";
import { defineConfig } from "file:///mnt/c/Users/aldos/Desktop/brqueiroz-site/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///mnt/c/Users/aldos/Desktop/brqueiroz-site/node_modules/vite-tsconfig-paths/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    port: 3e3,
    watch: {
      usePolling: true
    }
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        entryFileNames: "index.js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]"
      }
    }
  },
  base: "./"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvYWxkb3MvRGVza3RvcC9icnF1ZWlyb3otc2l0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9jL1VzZXJzL2FsZG9zL0Rlc2t0b3AvYnJxdWVpcm96LXNpdGUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9jL1VzZXJzL2FsZG9zL0Rlc2t0b3AvYnJxdWVpcm96LXNpdGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZWFjdFJvdXRlciB9IGZyb20gXCJAcmVhY3Qtcm91dGVyL2Rldi92aXRlXCI7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcIkB0YWlsd2luZGNzcy92aXRlXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3RhaWx3aW5kY3NzKCksIHJlYWN0Um91dGVyKCksIHRzY29uZmlnUGF0aHMoKV0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gICAgd2F0Y2g6IHtcbiAgICAgIHVzZVBvbGxpbmc6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IFwiZGlzdFwiLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJpbmRleC5qc1wiLFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogXCJbbmFtZV0uanNcIixcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiW25hbWVdLltleHRdXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGJhc2U6IFwiLi9cIixcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2UyxTQUFTLG1CQUFtQjtBQUN6VSxPQUFPLGlCQUFpQjtBQUN4QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLG1CQUFtQjtBQUUxQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsWUFBWSxHQUFHLFlBQVksR0FBRyxjQUFjLENBQUM7QUFBQSxFQUN2RCxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFDUixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
