import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const PAGE_PATHS = [
  '/casos/ekoparty-2026-cobertura-foto-video',
  '/casos/sesion-novios-recoleta-marcelo-noelia',
  '/sesion-de-fotos-buenos-aires',
  '/en/buenos-aires-photographer',
  '/pt/fotografo-em-buenos-aires',
  '/book-15-anos-buenos-aires',
  '/fotografia-corporativa-buenos-aires',
  '/blog/ideas-sesion-fotos-15-anos',
  '/blog/cuanto-cuesta-fotografo-eventos-buenos-aires',
  '/foto-video-eventos-buenos-aires',
  '/fotografo-15-anos-caba-gba',
  '/fotografia-video-casamientos-buenos-aires',
  '/eventos-corporativos-buenos-aires',
  '/video-para-eventos-buenos-aires',
  '/contacto',
  '/blog',
  '/blog/cuanto-cuesta-fotografo-15-anos-buenos-aires',
  '/blog/fotografo-video-casamiento-que-incluye',
  '/blog/cuantas-horas-contratar-fotografo-evento',
  '/blog/fotos-que-no-pueden-faltar-fiesta-15',
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
          photoshootEs: path.resolve(__dirname, 'sesion-de-fotos-buenos-aires/index.html'),
          photoshootEn: path.resolve(__dirname, 'en/buenos-aires-photographer/index.html'),
          photoshootPt: path.resolve(__dirname, 'pt/fotografo-em-buenos-aires/index.html'),
          bookQuince: path.resolve(__dirname, 'book-15-anos-buenos-aires/index.html'),
          fotografiaCorporativa: path.resolve(__dirname, 'fotografia-corporativa-buenos-aires/index.html'),
          blogIdeasQuince: path.resolve(__dirname, 'blog/ideas-sesion-fotos-15-anos/index.html'),
          blogPrecioEventos: path.resolve(__dirname, 'blog/cuanto-cuesta-fotografo-eventos-buenos-aires/index.html'),
          caseEkoparty2026: path.resolve(__dirname, 'casos/ekoparty-2026-cobertura-foto-video/index.html'),
          caseSesionNoviosRecoleta: path.resolve(__dirname, 'casos/sesion-novios-recoleta-marcelo-noelia/index.html'),
          main: path.resolve(__dirname, 'index.html'),
          eventosRedirect: path.resolve(__dirname, 'foto-video-eventos-buenos-aires/index.html'),
          quince: path.resolve(__dirname, 'fotografo-15-anos-caba-gba/index.html'),
          casamientos: path.resolve(__dirname, 'fotografia-video-casamientos-buenos-aires/index.html'),
          corporativos: path.resolve(__dirname, 'eventos-corporativos-buenos-aires/index.html'),
          videoEventos: path.resolve(__dirname, 'video-para-eventos-buenos-aires/index.html'),
          contacto: path.resolve(__dirname, 'contacto/index.html'),
          blog: path.resolve(__dirname, 'blog/index.html'),
          blogPrecioQuince: path.resolve(__dirname, 'blog/cuanto-cuesta-fotografo-15-anos-buenos-aires/index.html'),
          blogCasamientoIncluye: path.resolve(__dirname, 'blog/fotografo-video-casamiento-que-incluye/index.html'),
          blogHorasEvento: path.resolve(__dirname, 'blog/cuantas-horas-contratar-fotografo-evento/index.html'),
          blogFotosQuince: path.resolve(__dirname, 'blog/fotos-que-no-pueden-faltar-fiesta-15/index.html'),
        },
      },
    },
  };
});
