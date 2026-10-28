# Sesiones personales — 18 de septiembre de 2026

Tres páginas nuevas creadas localmente; no publicadas por esta tarea.

| URL | Idioma | Intención |
| --- | --- | --- |
| `/sesion-de-fotos-buenos-aires/` | Español | Sesiones personales, parejas, familias y viajeros |
| `/en/buenos-aires-photographer/` | Inglés | Private / personal / vacation photoshoots para viajeros |
| `/pt/fotografo-em-buenos-aires/` | Portugués de Brasil | Ensaios pessoais, de casal, família e viagem |

## Límites del contenido

- La home conserva fotografía para eventos.
- Retratos laborales, LinkedIn, CV y equipos siguen en fotografía corporativa.
- Books y sesiones de quinceañeras siguen en book de 15.
- Civil, ceremonia y fiesta siguen en casamientos.
- No se prometen nacionalidad brasileña, atención oral en un idioma, paquetes, precios ni plazos no confirmados.
- No se incorporaron pedidas de matrimonio porque no se confirmó el servicio.
- Los volúmenes aportados por el usuario no se suman como demanda independiente.

## Implementación

Contenido en `pages/photoshootData.mjs`; generación independiente en `scripts/prerender-photoshoots.mjs`; estilos exclusivos en `styles/photoshoots.css`. HTML completo sin depender de JavaScript para leer contenido, cambiar de idioma, abrir preguntas o contactar por WhatsApp.

Cada página tiene canonical propio y el mismo conjunto recíproco de hreflang `es`, `en`, `pt-BR` y `x-default` (ES), metadatos localizados y datos estructurados WebPage/Service. Las tres URLs se agregan al sitemap sin modificar sus entradas anteriores. Vite y los comandos de desarrollo/generación/build incluyen las nuevas páginas.

No se modificaron páginas, componentes, navegación ni estilos anteriores. Una comparación SHA-256 contra el estado al iniciar la implementación confirmó que los archivos existentes, fuera de package.json, vite.config.ts y el sitemap, permanecieron idénticos después del build.

Por la restricción de no tocar páginas existentes, no se agregaron enlaces desde su menú, home o footer. Las páginas nuevas se enlazan entre sí y aparecen en el sitemap; queda pendiente un enlace contextual desde el sitio actual si se autoriza en el futuro.

La portada utiliza composición tipográfica. No se usaron fotos de eventos ni imágenes inventadas como ejemplos de sesiones realizadas. Se pueden incorporar fotografías reales de sesiones cuando estén disponibles.

## Validación

- `npm run typecheck` y `npm run build`: correctos.
- Revisados HTML de producción, H1 único, canonical, reciprocidad de idiomas, JSON-LD, sitemap, destinos internos y mensajes de WhatsApp.
- Revisión en navegador de escritorio y móvil; navegación entre idiomas y preguntas desplegables.

La arquitectura diferencia intenciones, pero no garantiza ausencia de competencia o conservación de tráfico. Después de publicar se deben comparar consultas y páginas en Search Console con un período anterior a la publicación, especialmente las páginas de eventos, fotografía corporativa y book de 15.
