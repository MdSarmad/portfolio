import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "@/components": path.resolve(__dirname, "./components"),
      "@/styles": path.resolve(__dirname, "./styles"),
      "@/data": path.resolve(__dirname, "./data"),
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
  server: {
    port: 3000,
    open: true,
    host: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-progress",
            "@radix-ui/react-label",
          ],
          animations: ["framer-motion"],
          icons: ["lucide-react"],
        },
      },
    },
  },
  optimizeDeps: {
    // include the real package so Vite pre-bundles it correctly
    include: ["react", "react-dom", "framer-motion", "lucide-react"],
  },
});
