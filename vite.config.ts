import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works on any GitHub Pages path
// (user site, project site, or a custom domain).
export default defineConfig({
  base: "./",
  plugins: [react()],
});
