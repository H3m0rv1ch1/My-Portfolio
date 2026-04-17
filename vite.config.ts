import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Bundle analyzer - only loaded when ANALYZE env var is set
const getVisualizer = () => {
  if (process.env.ANALYZE) {
    const { visualizer } = require('rollup-plugin-visualizer')
    return visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  }
  return null
}

export default defineConfig({
  plugins: [
    react(),
    getVisualizer(),
  ].filter(Boolean),
  base: './',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor chunks - third party libraries
          'vendor-react': ['react', 'react-dom'],
          'vendor-animation': ['framer-motion'],
          'vendor-icons': ['lucide-react'],
        },
        // Optimize asset file naming for caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(assetInfo.name)) {
            return 'assets/img/[name]-[hash][extname]'
          }
          if (/\.(woff2?|ttf|otf|eot)$/i.test(assetInfo.name)) {
            return 'assets/fonts/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Source maps for debugging (disable in production if needed)
    sourcemap: false,
    // Optimize assets
    assetsInlineLimit: 4096, // Inline assets < 4kb
    reportCompressedSize: false, // Faster builds
  },
  // Optimize dependencies pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
    exclude: ['gsap'], // Exclude unused deps
  },
  // Development server config
  server: {
    open: true,
    cors: true,
  },
})
