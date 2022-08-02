import { defineConfig } from 'vite'
import viteTransformPlugin from './build/vite-plugin-transform'
export default defineConfig({
  server: {                
    host: '0.0.0.0',
    port: '9000'
  },
  plugins: [viteTransformPlugin() ]
})