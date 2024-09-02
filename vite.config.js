import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  server: {
    historyApiFallback: true,
  },
  plugins: [
    react(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          { removeViewBox: false },
          { removeEmptyAttrs: false },
        ],
      },
      webp: {
        quality: 75,
        // Enable WebP conversion
      },
      avif: {
        quality: 50,
        // Enable AVIF conversion
      }
    }),
  ],
  esbuild: {
    loader: "jsx",
  },
});
