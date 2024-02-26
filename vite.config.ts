import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import removeConsole from 'vite-plugin-remove-console'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import tsconfigPaths from 'vite-tsconfig-paths'
import progress from 'vite-plugin-progress'
import svgr from 'vite-plugin-svgr'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tsconfigPaths({
      parseNative: false,
    }),
    nodePolyfills({
      protocolImports: true
    }),
    ViteImageOptimizer(),
    // remove all the specified console types in the production environment
    removeConsole(),
    // transform SVGs into React components
    svgr(),
    progress({
      format: 'building [:bar] :percent',
      total: 200,
      width: 60,
      complete: '=',
      incomplete: '',
    }),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      includeAssets: [
        "**/*",
      ],
      manifest: {
        "scope": "/",
        "start_url": "/",
        "short_name": "Vite PWA + React + Cypress",
        "name": "Vite PWA + React + Cypress Boilerplate",
        "description": "Vite PWA + React + Cypress Boilerplate",
        "display": "standalone",
        "theme_color": "#9760e5",
        "background_color": "#9760e5",
        "icons": [
          {
            "src": "/icon-48x48.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      },
    }),
  ],
  server: {
    watch: {
      usePolling: true
    }
  },
  // configuring your bundler to remove globalThis.__DEV__ on build time
  define: {
    "globalThis.__DEV__": JSON.stringify(false)
  },
  build: {
    chunkSizeWarningLimit: 6000,
    rollupOptions: {
      // Suppressing the "EVAL" warning caused by an issue with @react-jvectormap & rollup
      // We'll address this once a proper fix is available
      onwarn(warning, warn) {
        if (warning.code === "EVAL") return;
        warn(warning);
      }
    }
  }
})
