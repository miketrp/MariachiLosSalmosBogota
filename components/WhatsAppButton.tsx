'use client';

import { Phone, MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  variant?: 'call' | 'chat' | 'both';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Hola, me gustaría solicitar información sobre sus servicios de mariachi.",
  variant = 'both',
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const baseClasses = `${sizeClasses[size]} font-medium rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2`;

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  if (variant === 'call') {
    return (
      <button
        onClick={handleCallClick}
        className={`${baseClasses} bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white focus:ring-green-300 shadow-lg ${className}`}
      >
        <Phone className="mr-2 h-5 w-5" />
        Llamar
      </button>
    );
  }

  if (variant === 'chat') {
    return (
      <button
        onClick={handleWhatsAppClick}
        className={`${baseClasses} bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white focus:ring-green-300 shadow-lg ${className}`}
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        WhatsApp
      </button>
    );
  }

  return (
    <div className={`flex gap-3 ${className}`}>
      <button
        onClick={handleCallClick}
        className={`${baseClasses} bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white focus:ring-green-300 shadow-lg flex-1`}
      >
        <Phone className="mr-2 h-5 w-5" />
        Llamar
      </button>
      <button
        onClick={handleWhatsAppClick}
        className={`${baseClasses} bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white focus:ring-green-300 shadow-lg flex-1`}
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        WhatsApp
      </button>
    </div>
  );
};

export default WhatsAppButton;