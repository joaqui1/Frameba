<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/temp/1

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Contenido y SEO

- `pages/newServicesData.ts`: textos, metadatos y enlaces de Book de 15 y Fotografía corporativa. Para agregar una portada, definir `cover: { src: '/images/archivo.webp', alt: 'Descripción de la imagen', position: 'center' }` en el servicio correspondiente. Guardar la foto en `public/images/`.
- `pages/newBlogData.ts`: guías de ideas para sesiones de 15 y precios de fotografía para eventos.
- `pages/blogData.ts`: guías anteriores y catálogo compartido.
- `npm run content:generate`: genera el HTML de servicios nuevos, guías e índice desde los mismos componentes que usa React. También sincroniza la home, 15 años, eventos corporativos y el sitemap. No editar manualmente el contenido de esos HTML generados.
- `npm run build` ejecuta esa generación antes de compilar. El resultado publicable queda en `dist/`.
- `npm run typecheck` verifica los tipos. Las fechas de publicación, actualización y los precios se mantienen explícitamente en los datos editoriales; no se actualizan automáticamente por recompilar.

Las guías conservan la referencia histórica de julio de 2026 para la fiesta de 15. No es una tarifa para books, retratos ni todos los eventos.
