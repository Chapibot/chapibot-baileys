import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">AlonsoBot</h3>
            <p className="text-gray-300">
              Tu asistente virtual para restaurantes que atiende por WhatsApp 24/7.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@alonsobot.com" className="text-gray-300 hover:text-white">
                  info@alonsobot.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-white">
                  Solicitar demo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} AlonsoBot. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 