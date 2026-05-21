import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const PAGE_PATHS = [
  '/foto-video-eventos-buenos-aires',
  '/fotografo-15-anos-caba-gba',
  '/fotografia-video-casamientos-buenos-aires',
  '/eventos-corporativos-buenos-aires',
  '/video-para-eventos-buenos-aires',
  '/contacto',
];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      {
        name: 'redirect-extensionless-pages',
        enforce: 'pre',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const url = req.url?.split('?')[0];

            if (
              url === '/foto-video-eventos-buenos-aires' ||
              url === '/foto-video-eventos-buenos-aires/'
            ) {
              res.statusCode = 301;
              res.setHeader('Location', '/eventos-corporativos-buenos-aires/');
              res.end();
              return;
            }

            if (url && PAGE_PATHS.includes(url)) {
              res.statusCode = 301;
              res.setHeader('Location', `${url}/`);
              res.end();
              return;
            }

            next();
          });
        },
      },
      react(),
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          eventosRedirect: path.resolve(__dirname, 'foto-video-eventos-buenos-aires/index.html'),
          quince: path.resolve(__dirname, 'fotografo-15-anos-caba-gba/index.html'),
          casamientos: path.resolve(__dirname, 'fotografia-video-casamientos-buenos-aires/index.html'),
          corporativos: path.resolve(__dirname, 'eventos-corporativos-buenos-aires/index.html'),
          videoEventos: path.resolve(__dirname, 'video-para-eventos-buenos-aires/index.html'),
          contacto: path.resolve(__dirname, 'contacto/index.html'),
        },
      },
    },
  };
});
