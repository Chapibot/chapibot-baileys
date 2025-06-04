import { DisconnectReason } from '@whiskeysockets/baileys';
import { Boom } from '@hapi/boom';
import { logger } from '../utils/logger.js';
import { CONFIG } from '../config.js';

export function handleConnection(sock, startBot) {
  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;
    
    if (connection === 'close') {
      const shouldReconnect = new Boom(lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut;
      logger.warning(`Conexión cerrada. Reconectando... ${shouldReconnect ? 'Sí' : 'No'}`);
      
      if (shouldReconnect) {
        startBot();
      } else {
        logger.error('Sesión cerrada. Por favor, escanea el código QR nuevamente.');
      }
    } else if (connection === 'open') {
      logger.success(`Conectado a WhatsApp como ${CONFIG.BOT_NAME}`);
    }
  });
} 