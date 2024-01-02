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
      domain: "/src/domain",
      repository: "/src/repository",
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
    },
    coverage: {
      reporter: ['text', 'html'],
      exclude: [
        'node_modules/',
        'src/setupTests.ts',
        'src/index.tsx',
        'src/data/**',
        'src/types/game/mode/**',
        'src/types/learn/mode/**',
        'src/tests/**'
      ],
    },
  }
})
