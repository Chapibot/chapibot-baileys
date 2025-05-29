export const logger = {
  info: (message) => {
    console.log(`ℹ️ ${new Date().toISOString()} - ${message}`);
  },
  error: (message, error) => {
    console.error(`❌ ${new Date().toISOString()} - ${message}`, error);
  },
  success: (message) => {
    console.log(`✅ ${new Date().toISOString()} - ${message}`);
  },
  warning: (message) => {
    console.warn(`⚠️ ${new Date().toISOString()} - ${message}`);
  }
}; 