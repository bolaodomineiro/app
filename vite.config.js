import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    historyApiFallback: true,
  },
  plugins: [
    react(),
  ],
  server: {
    port: 3000, // Altere para a porta desejada
  },
  esbuild: {
    loader: "jsx",
  },
});
