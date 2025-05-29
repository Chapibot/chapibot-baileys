import { logger } from '../utils/logger.js';
import { CONFIG } from '../config.js';

export function handleMessages(sock) {
  sock.ev.on('messages.upsert', async (m) => {
    try {
      const msg = m.messages[0];
      
      if (!msg.key.fromMe && msg.message) {
        const messageContent = msg.message.conversation || 
                             msg.message.extendedTextMessage?.text || 
                             '';
        
        logger.info(`Mensaje recibido de ${msg.key.remoteJid}: ${messageContent}`);
        
        // Procesar comandos
        if (messageContent.startsWith('!')) {
          await handleCommand(sock, msg, messageContent);
        } else {
          // Mensaje normal
          await sock.sendMessage(msg.key.remoteJid, {
            text: CONFIG.WELCOME_MESSAGE
          });
        }
      }
    } catch (error) {
      logger.error('Error al procesar mensaje:', error);
    }
  });
}

async function handleCommand(sock, msg, command) {
  const commandText = command.toLowerCase();
  
  switch (commandText) {
    case CONFIG.COMMANDS.MENU:
      await sock.sendMessage(msg.key.remoteJid, {
        text: '*🍽️ Menú del Día*\n\n' +
              '1. 🍔 Hamburguesa Clásica - $10\n' +
              '2. 🍕 Pizza Margherita - $12\n' +
              '3. 🥗 Ensalada César - $8\n' +
              '4. 🍝 Pasta Alfredo - $11\n\n' +
              'Para pedir, usa el comando *!pedir* seguido del número del plato.'
      });
      break;
      
    case CONFIG.COMMANDS.AYUDA:
      await sock.sendMessage(msg.key.remoteJid, {
        text: '*📋 Comandos Disponibles*\n\n' +
              '• *!menu* - Ver el menú del día\n' +
              '• *!pedir [número]* - Realizar un pedido\n' +
              '• *!ayuda* - Ver esta ayuda'
      });
      break;
      
    default:
      if (commandText.startsWith(CONFIG.COMMANDS.PEDIR)) {
        const orderNumber = commandText.split(' ')[1];
        if (orderNumber) {
          await sock.sendMessage(msg.key.remoteJid, {
            text: `✅ Pedido #${orderNumber} recibido. Estamos preparando tu orden.`
          });
        } else {
          await sock.sendMessage(msg.key.remoteJid, {
            text: '❌ Por favor, especifica el número del plato que deseas pedir.'
          });
        }
      }
  }
} 