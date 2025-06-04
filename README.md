# AlonsoBot WhatsApp

Bot de WhatsApp desarrollado con Node.js y Baileys.

## Características

- 🤖 Bot de WhatsApp usando Baileys
- 🔄 Reconexión automática
- 📝 Sistema de logging robusto
- 🏗️ Arquitectura modular
- 🚀 Listo para producción

## Requisitos

- Node.js >= 18.0.0
- npm

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/chapibotdev/chapibot-baileys.git
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

## Desarrollo

Para desarrollo con recarga automática:
```bash
npm run dev
```

## Estructura del Proyecto

```
/
├── src/
│   ├── index.mjs           # Punto de entrada principal
│   ├── handlers/           # Manejadores de eventos
│   └── utils/             # Utilidades
├── auth_info/             # Credenciales de WhatsApp
└── package.json
```

## Licencia

MIT