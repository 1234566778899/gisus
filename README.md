# Gisus — sitio web

Sitio de presentación de **Gisus**, la app para iPhone que te muestra a quién tienes cerca.
Hecho con [Astro](https://astro.build) (HTML estático, rápido y bueno para SEO), con un estilo
inspirado en el sistema de diseño de Apple.

## Páginas

- `/` — inicio: funciones, cómo funciona, privacidad y descarga
- `/privacidad` — política de privacidad (requerida por la App Store)
- `/terminos` — términos de uso
- `/soporte` — preguntas frecuentes y contacto

## Desarrollo

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # genera el sitio en dist/
npm run preview   # sirve dist/ localmente
```

## Antes de publicar

- Cambia el dominio en `src/config.ts` (`SITE_URL`) y en `astro.config.mjs` (`site`).
- Cambia `SUPPORT_EMAIL` en `src/config.ts` por un correo real.
- Revisa los textos legales de `src/pages/privacidad.astro` y `src/pages/terminos.astro`.

## Estructura

- `src/config.ts` — nombre, dominio, correo y enlace de la App Store
- `src/layouts/Base.astro` — `<head>` con SEO (Open Graph, JSON-LD, banner de Safari), barra y pie
- `src/components/` — barra de navegación y pie de página
- `src/assets/` — logo, ícono de la app y poses de Gisi (se optimizan a WebP al compilar)
- `public/` — favicon, ícono para iPhone e imagen para compartir en redes
