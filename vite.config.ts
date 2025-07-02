import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? "/aashritha_portfolio/" : "/",
  root: path.resolve(import.meta.dirname, "client"),
  server: {
    host: true, // Expose to all network interfaces
    port: 5173, // Default Vite port
  },
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"), // ✅ Just "dist"
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
}));
