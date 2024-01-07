import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import svgr from '@svgr/rollup'

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
    svgr()
  ],
  base: './',
  resolve: {
    alias: {
      "__test-utils__": "/src/__test-utils__",
      components: "/src/components",
      context: "/src/context",
      converter: "/src/converter",
      data: "/src/data",
      domain: "/src/domain",
      filters: "/src/filters",
      locales: "/src/locales",
      mocks: "/src/mocks",
      repository: "/src/repository",
      rest: "/src/rest",
      service: "/src/service",
      slices: "/src/slices",
      sound: "/src/sound",
      styles: "/src/styles",
      utility: "/src/utility",
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
      provider: 'v8',
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
