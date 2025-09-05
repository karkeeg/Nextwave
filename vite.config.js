import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import compress from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh
      fastRefresh: true,
      // Use React 17+ automatic JSX transform
      jsxRuntime: "automatic",
    }),
    // HTML minification and optimization
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: "NextWaveAI - AI Solutions",
          description: "AI-powered solutions for your business",
        },
      },
    }),
    // Gzip and Brotli compression
    compress({
      ext: ".gz",
      algorithm: "gzip",
      deleteOriginFile: false,
    }),
    compress({
      ext: ".br",
      algorithm: "brotliCompress",
      deleteOriginFile: true,
    }),
  ],
  build: {
    sourcemap: false, // Disable source maps in production
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info"],
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router-dom")
            ) {
              return "vendor_react";
            }
            if (id.includes("framer-motion")) {
              return "vendor_framer";
            }
            if (id.includes("react-icons")) {
              return "vendor_icons";
            }
            return "vendor";
          }
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (
            /\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(assetInfo.name)
          ) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/\.(woff|woff2|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/${ext}/[name]-[hash][extname]`;
        },
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Enable brotli compression
    brotliSize: true,
    // Target modern browsers
    target: "esnext",
    modulePreload: {
      polyfill: false,
    },
  },
  server: {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    // Enable HTTP/2
    https: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    esbuildOptions: {
      // Enable tree shaking
      treeShaking: true,
      // Target modern browsers
      target: "es2020",
    },
  },
  // CSS optimization
  css: {
    devSourcemap: false,
    modules: {
      localsConvention: "camelCaseOnly",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`,
      },
    },
  },
});
