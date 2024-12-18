import { defineConfig, searchForWorkspaceRoot } from 'vite'
import react from '@vitejs/plugin-react'

//https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  vite: {
    server: {
        fs: {
            allow: ['../home/ladislau/node_modules/primereact/resources/themes/lara-light-cyan/fonts/Inter-roman.var.woff2'],
        },
    },
}
})