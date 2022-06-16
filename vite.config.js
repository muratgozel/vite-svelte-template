import path from 'path'
//import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

//const __dirname = path.dirname( fileURLToPath(import.meta.url) )

export default defineConfig({
  build: {
    sourcemap: true,
    outDir: 'public',
    target: 'es2015'
  },
  resolve: {
    alias: [
      {
        find: /^@\/(.+)/,
        replacement: path.resolve(__dirname, 'src') + '/$1'
      }
    ]
  },
  plugins: [
    svelte()
  ]
})
