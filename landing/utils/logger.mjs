import pino from 'pino';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname'
    }
  }
});

export const log = {
  info: (message, meta = {}) => logger.info({ ...meta }, message),
  error: (message, error = null, meta = {}) => {
    if (error) {
      logger.error({
        ...meta,
        error: {
          message: error.message,
          stack: error.stack,
          ...error
        }
      }, message);
    } else {
      logger.error({ ...meta }, message);
    }
  },
  warn: (message, meta = {}) => logger.warn({ ...meta }, message),
  debug: (message, meta = {}) => logger.debug({ ...meta }, message),
  success: (message, meta = {}) => logger.info({ ...meta, type: 'success' }, `✅ ${message}`),
  connection: (message, meta = {}) => logger.info({ ...meta, type: 'connection' }, `🔌 ${message}`),
  message: (message, meta = {}) => logger.info({ ...meta, type: 'message' }, `📨 ${message}`)
}; 