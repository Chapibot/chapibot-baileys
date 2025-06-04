# AlonsoBot WhatsApp and Landing Page

Este repositorio contiene el código del bot de WhatsApp **AlonsoBot** y su landing page.

## AlonsoBot (Backend)

Bot de WhatsApp desarrollado con Node.js y Baileys.

### Características

- 🤖 Bot de WhatsApp usando Baileys
- 🔄 Reconexión automática
- 📝 Sistema de logging robusto
- 🏗️ Arquitectura modular
- 🚀 Listo para producción

### Requisitos

- Node.js >= 18.0.0
- npm

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Chapibot/chapibot-baileys.git
cd chapibot-baileys
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el bot:
```bash
npm start
```

### Desarrollo

Para desarrollo con recarga automática:
```bash
npm run dev
```

### Estructura del Proyecto (Bot)

```
/
├── src/
│   ├── index.mjs           # Punto de entrada principal
│   ├── handlers/           # Manejadores de eventos
│   └── utils/             # Utilidades
├── auth_info/             # Credenciales de WhatsApp
└── package.json
```

## Landing Page (Frontend)

Landing page moderna y responsiva para AlonsoBot, el asistente virtual para restaurantes.

### Tecnologías

- React + TypeScript
- Vite
- TailwindCSS
- HeadlessUI
- Heroicons

### Desarrollo

1. Navega a la carpeta `landing`:
```bash
cd landing
```
2. Instalar dependencias:
```bash
npm install
```

3. Iniciar servidor de desarrollo:
```bash
npm run dev
```

4. Construir para producción:
```bash
npm run build
```

### Despliegue

La landing page está configurada para ser desplegada en Vercel. Solo necesitas conectar tu repositorio de GitHub con Vercel y configurar el directorio raíz a `/landing`.

### Estructura del Proyecto (Landing)

```
/landing
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

## Licencia

MIT
