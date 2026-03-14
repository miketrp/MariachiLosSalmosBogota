'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
  position?: 'right' | 'left';
  size?: 'sm' | 'md' | 'lg';
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber,
  message = "Hola, me gustaría solicitar información sobre sus servicios de mariachi.",
  position = 'right',
  size = 'md'
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  const positionClasses = position === 'right' 
    ? 'right-6 bottom-6 md:right-8 md:bottom-8' 
    : 'left-6 bottom-6 md:left-8 md:bottom-8';

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Mostrar/ocultar basado en el scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.8 
      }}
      transition={{ duration: 0.3 }}
      className={`fixed ${positionClasses} z-50`}
    >
      <button
        onClick={handleWhatsAppClick}
        className={`${sizeClasses[size]} bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50 group`}
        aria-label="Contactar por WhatsApp"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/images/gallery/WhatsApp.svg.png"
            alt="WhatsApp"
            width={size === 'sm' ? 24 : size === 'md' ? 32 : 40}
            height={size === 'sm' ? 24 : size === 'md' ? 32 : 40}
            className="transition-transform duration-300 group-hover:scale-110"
            priority
          />
          
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </div>
      </button>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={`absolute bottom-full mb-2 ${position === 'right' ? 'right-0' : 'left-0'} bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap backdrop-blur-sm`}
      >
        Contactar por WhatsApp
        <div className={`absolute top-full ${position === 'right' ? 'right-4' : 'left-4'} w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80`} />
      </motion.div>
    </motion.div>
  );
};

export default FloatingWhatsApp;