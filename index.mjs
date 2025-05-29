import * as baileys from '@whiskeysockets/baileys';
import { Boom } from '@hapi/boom';
import qrcode from 'qrcode-terminal';

async function startBot() {
  const { state, saveCreds } = await baileys.useMultiFileAuthState('auth_info');
  const sock = baileys.makeWASocket({
    auth: state,
    printQRInTerminal: false,
  });

  sock.ev.on('connection.update', ({ connection, qr, lastDisconnect }) => {
    if (qr) {
      qrcode.generate(qr, { small: true });
    }
    if (connection === 'close') {
      const shouldReconnect =
        new Boom(lastDisconnect?.error)?.output?.statusCode !== baileys.DisconnectReason.loggedOut;
      if (shouldReconnect) startBot();
      else console.log('Sesión cerrada. Escanea el QR para volver a iniciar.');
    } else if (connection === 'open') {
      console.log('✅ Conectado a WhatsApp como ChapiBot');
    }
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('messages.upsert', async (m) => {
    const msg = m.messages[0];
    if (!msg.key.fromMe && msg.message) {
      await sock.sendMessage(msg.key.remoteJid, {
        text: 'Hola! Soy ChapiBot, tu garzón virtual 🤖🍽️ ¿Qué te gustaría pedir hoy?'
      });
    }
  });
}

startBot();