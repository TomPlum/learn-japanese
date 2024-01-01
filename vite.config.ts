import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import svgr from '@svgr/rollup'

export default defineConfig({
  plugins: [react(), nodePolyfills(), svgr()],
  base: './',
  resolve: {
    alias: {
      api: "/src/api",
      components: "/src/components",
      modules: "/src/modules",
      hooks: "/src/hooks",
      assets: "/src/assets",
      locales: "/src/locales",
      context: "/src/context",
      views: "/src/views",
      styles: "/src/styles",
      fonts: "/src/styles/fonts",
      stream: 'stream-browserify'
    }
  },
  test: {
    environment: 'jsdom',
    include: ['**/*.test.{ts,tsx}'],
    globals: true,
    setupFiles: './src/setupTests.ts',
    mockReset: true,
    css: {
      modules: {
        classNameStrategy: 'non-scoped'
      }
    }
  }
})
