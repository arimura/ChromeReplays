import { defineConfig } from 'vite'
import { resolve } from 'path'
import ts from '@rollup/plugin-typescript'

export default defineConfig({
  plugins: [ts({ tsconfig: './tsconfig.json' })],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        addingCustomeventReplySteps: resolve(__dirname, 'src/admob/adding-customevent-reply-steps.ts'),
        addingCustomeventReply: resolve(__dirname, 'src/admob/adding-customevent-reply.ts')
      }
    }
  }
})
