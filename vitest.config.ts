import { defineConfig } from 'vitest/config'
import path from 'path'
import { fileURLToPath } from 'url'


export default defineConfig({
   resolve: {
      alias: {
         '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src'),
      },
   },
   test: {
      globals: true,
      environment: 'jsdom',
      include: [
         '**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
         '**/__tests__/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
      ],
      exclude: [
         '**/node_modules/**',
         '**/dist/**',
         '**/cypress/**',
         '**/.{idea,git,cache,output,temp}/**'
      ],
      coverage: {
         provider: 'v8',
         reporter: ['text', 'json', 'html'],
         exclude: [
            'coverage/**',
            'dist/**',
            '**/node_modules/**',
            '**/*.config.{js,ts}',
            '**/*.d.ts'
         ]
      },
      testTimeout: 10000,
      watch: false,
      ui: true,
      open: false
   }
})
