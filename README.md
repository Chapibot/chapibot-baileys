# AlonsoBot Landing Page

Landing page moderna y responsiva para AlonsoBot, el asistente virtual para restaurantes.

## Tecnologías

- React + TypeScript
- Vite
- TailwindCSS
- HeadlessUI
- Heroicons

## Desarrollo

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. Construir para producción:
```bash
npm run build
```

## Despliegue

La landing page está configurada para ser desplegada en Vercel. Solo necesitas conectar tu repositorio de GitHub con Vercel y el despliegue será automático.

## Estructura del Proyecto

```
/src
  /components
    HeroSection.tsx    # Sección principal con CTA
    Features.tsx       # Características del producto
    LeadForm.tsx       # Formulario de contacto
    Footer.tsx         # Pie de página
  /pages
    Home.tsx          # Página principal
  App.tsx             # Componente raíz
  main.tsx            # Punto de entrada
```
