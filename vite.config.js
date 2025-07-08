// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/Portfolio-Website/",
//   build: {
//     assetsDir: "assets", // Directory for static assets
//     outDir: "dist", // Default, but good to be explicit
//     emptyOutDir: true, // Clear the directory before build
//     sourcemap: true, // Helps with debugging
//   },
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio-Website/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
