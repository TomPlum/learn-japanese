import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import svgr from '@svgr/rollup'
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
    svgr(),
    tsconfigPaths()
  ],
  base: './',
  resolve: {
    alias: {
      "__test-utils__": "/src/__test-utils__",
      api: "/src/api",
      components: "/src/components",
      context: "/src/context",
      converter: "/src/converter",
      data: "/src/data",
      types: "/src/types",
      filters: "/src/filters",
      hooks: "/src/hooks",
      locales: "/src/locales",
      mocks: "/src/mocks",
      repository: "/src/repository",
      rest: "/src/rest",
      service: "/src/service",
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
