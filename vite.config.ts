import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
import svgx from "@svgx/vite-plugin-react";

export default defineConfig((configEnv) => ({
  plugins: [react(), eslintPlugin(), svgx()],
  server: {
    port: 3000,
  },
}));
