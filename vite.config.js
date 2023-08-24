import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import api from './api/server'

const expressServerPlugin = (path, expressApp) => ({
  name: 'configure-server',
  configureServer(server) {
    server.middlewares.use(path, expressApp);
  }
});

export default defineConfig({
  plugins: [
    react(),
    expressServerPlugin('/api', api),
  ],
  server: {
    host: '0.0.0.0'
  }
})
