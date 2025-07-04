import { useSingleFileAuthState } from '@whiskeysockets/baileys/lib/auth-utils.js';
import makeWASocket from '@whiskeysockets/baileys';

export const CONFIG = {
  BOT_NAME: 'AlonsoBot',
  WELCOME_MESSAGE: '¡Hola! Soy *AlonsoBot*, tu garzón virtual 🤖🍽️ ¿Qué te gustaría pedir hoy?',
  AUTH_FILE: './auth_info.json',
  COMMANDS: {
    MENU: '!menu',
    PEDIR: '!pedir',
    AYUDA: '!ayuda'
  }
}; 