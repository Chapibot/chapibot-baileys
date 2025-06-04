import React from 'react';
import { 
  BoltIcon, 
  UserGroupIcon, 
  ClockIcon, 
  ChatBubbleLeftRightIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Respuesta Instantánea',
    description: 'Atiende a tus clientes en segundos, sin importar la hora del día.',
    icon: BoltIcon,
  },
  {
    name: 'Sin Personal Extra',
    description: 'Automatiza la atención sin necesidad de contratar más personal.',
    icon: UserGroupIcon,
  },
  {
    name: 'Disponible 24/7',
    description: 'Tu restaurante siempre abierto para recibir pedidos y consultas.',
    icon: ClockIcon,
  },
  {
    name: 'Lenguaje Natural',
    description: 'Entiende y responde de forma natural a tus clientes.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Promociones Automáticas',
    description: 'Gestiona y promociona tus ofertas de forma automática.',
    icon: CurrencyDollarIcon,
  },
];

const Features: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Características</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Todo lo que necesitas para tu restaurante
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Optimiza la atención a tus clientes y aumenta tus ventas con AlonsoBot.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features; 