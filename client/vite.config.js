import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-dom") || id.includes("react-router-dom") || id.includes("react")) {
              return "vendor";
            }
            if (id.includes("framer-motion")) {
              return "animations";
            }
            if (id.includes("lucide-react")) {
              return "ui";
            }
            if (id.includes("swr")) {
              return "data";
            }
            if (id.includes("ogl")) {
              return "webgl";
            }
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
