import { log } from '../utils/logger.mjs';

export class MessageHandler {
  constructor(sock) {
    this.sock = sock;
    this.setupMessageHandler();
  }

  setupMessageHandler() {
    this.sock.ev.on('messages.upsert', async (m) => {
      try {
        const msg = m.messages[0];
        if (!msg?.key?.fromMe && msg?.message) {
          await this.handleIncomingMessage(msg);
        }
      } catch (error) {
        log.error('Error processing message', error);
      }
    });
  }

  async handleIncomingMessage(msg) {
    try {
      const messageContent = this.getMessageContent(msg);
      const sender = msg.key.remoteJid;
      
      log.message('Mensaje recibido', {
        from: sender,
        content: messageContent
      });

      await this.sendResponse(sender);
    } catch (error) {
      log.error('Error handling message', error);
    }
  }

  getMessageContent(msg) {
    return msg.message?.conversation ||
           msg.message?.extendedTextMessage?.text ||
           msg.message?.imageMessage?.caption ||
           '';
  }

  async sendResponse(recipient) {
    try {
      await this.sock.sendMessage(recipient, {
        text: 'Hola! Soy ChapiBot, tu garzón virtual 🤖🍽️ ¿Qué te gustaría pedir hoy?'
      });
      log.success('Respuesta enviada', { to: recipient });
    } catch (error) {
      log.error('Error sending response', error, { to: recipient });
    }
  }
} 