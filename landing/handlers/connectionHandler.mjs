import { Boom } from '@hapi/boom';
import { log } from '../utils/logger.mjs';

export class ConnectionHandler {
  constructor(sock, startBot) {
    this.sock = sock;
    this.startBot = startBot;
    this.setupConnectionHandler();
  }

  setupConnectionHandler() {
    this.sock.ev.on('connection.update', ({ connection, lastDisconnect, qr }) => {
      if (qr) {
        this.handleQR(qr);
      }
      
      if (connection === 'close') {
        this.handleDisconnect(lastDisconnect);
      } else if (connection === 'open') {
        this.handleConnection();
      }
    });
  }

  handleQR(qr) {
    log.info('Código QR generado. Por favor, escanea con WhatsApp para conectar.');
    // El QR se mostrará en la consola por la configuración de Baileys
  }

  handleDisconnect(lastDisconnect) {
    const shouldReconnect = new Boom(lastDisconnect?.error)?.output?.statusCode !== 401;
    
    if (shouldReconnect) {
      log.warn('Conexión perdida. Intentando reconectar...');
      this.startBot();
    } else {
      log.error('Sesión finalizada. Por favor, escanea el código QR nuevamente.');
    }
  }

  handleConnection() {
    log.success('¡Conectado exitosamente a WhatsApp como ChapiBot!');
  }
} 