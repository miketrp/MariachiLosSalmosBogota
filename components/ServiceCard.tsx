import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

interface ServiceCardProps {
  title: string;
  price: string;
  musicians: number;
  songs: number;
  gift?: string;
  features: string[];
  isPopular?: boolean;
  isWeekday?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  musicians,
  songs,
  gift,
  features,
  isPopular = false,
  isWeekday = false,
}) => {
  return (
      <div className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg shadow-xl p-6 transform transition-all duration-300 hover:scale-105 border ${isPopular ? 'border-4 border-yellow-400' : 'border border-white/30'} ${isPopular ? 'shadow-yellow-400/20' : 'shadow-lg'}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
            MÁS POPULAR
          </span>
        </div>
      )}
      {isWeekday && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
            OFERTA
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="text-4xl font-bold text-white mb-2">{price}</div>
        <p className="text-white">COP</p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center space-x-3">
          <Check className="h-5 w-5 text-green-400" />
          <span className="text-white">{musicians} músicos bien presentados</span>
        </div>
        <div className="flex items-center space-x-3">
          <Check className="h-5 w-5 text-green-400" />
          <span className="text-white">{songs} canciones completas</span>
        </div>
        {gift && (
          <div className="flex items-center space-x-3">
            <Check className="h-5 w-5 text-green-400" />
            <span className="text-white">Obsequio: {gift}</span>
          </div>
        )}
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Check className="h-5 w-5 text-green-400" />
            <span className="text-white">{feature}</span>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <Button
          href={`https://wa.me/573132366760?text=Hola, estoy interesado en contratar sus servicios de mariachi.`}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="md"
          className="w-full"
        >
          WhatsApp
        </Button>
        <Button
          href="tel:+573132366760"
          variant="secondary"
          size="md"
          className="w-full"
        >
          Llamar
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;