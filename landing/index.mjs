import * as baileys from '@whiskeysockets/baileys';
import { log } from './utils/logger.mjs';
import { ConnectionHandler } from './handlers/connectionHandler.mjs';
import { MessageHandler } from './handlers/messageHandler.mjs';

// Configuración del bot
const BOT_CONFIG = {
  authPath: 'auth_info',
  printQR: true,
  browser: ['ChapiBot', 'Chrome', '1.0.0'],
  connectTimeoutMs: 60000,
  defaultQueryTimeoutMs: 60000,
  emitOwnEvents: false,
  markOnlineOnConnect: true,
  retryRequestDelayMs: 250
};

async function startBot() {
  try {
    // Inicializar estado de autenticación
    const { state, saveCreds } = await baileys.useMultiFileAuthState(BOT_CONFIG.authPath);
    
    // Crear socket de WhatsApp
    const sock = baileys.makeWASocket({
      auth: state,
      printQRInTerminal: BOT_CONFIG.printQR,
      browser: BOT_CONFIG.browser,
      connectTimeoutMs: BOT_CONFIG.connectTimeoutMs,
      defaultQueryTimeoutMs: BOT_CONFIG.defaultQueryTimeoutMs,
      emitOwnEvents: BOT_CONFIG.emitOwnEvents,
      markOnlineOnConnect: BOT_CONFIG.markOnlineOnConnect,
      retryRequestDelayMs: BOT_CONFIG.retryRequestDelayMs
    });

    // Guardar credenciales cuando se actualicen
    sock.ev.on('creds.update', saveCreds);

    // Inicializar manejadores
    new ConnectionHandler(sock, startBot);
    new MessageHandler(sock);

    log.success('Bot iniciado correctamente');

  } catch (error) {
    log.error('Error al iniciar el bot', error);
    process.exit(1);
  }
}

// Manejar señales de terminación
process.on('SIGINT', () => {
  log.info('Bot detenido por el usuario');
  process.exit(0);
});

process.on('uncaughtException', (error) => {
  log.error('Error no manejado en el sistema', error);
  process.exit(1);
});

// Iniciar el bot
startBot().catch(error => {
  log.error('Error fatal al iniciar el bot', error);
  process.exit(1);
});