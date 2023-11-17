import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const userConfig: import("vite").UserConfig = {
    plugins: [react()]
  };
  
  export default defineConfig(userConfig);
