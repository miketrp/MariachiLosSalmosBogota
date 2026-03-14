'use client';

import { Facebook, Instagram, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialButtons = () => {
  return (
    <motion.div
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
    >
      {/* Facebook */}
      <motion.a
        href="https://www.facebook.com/yorlen.ramirez"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Facebook"
      >
        <Facebook className="h-6 w-6 text-white" />
      </motion.a>

      {/* Instagram */}
      <motion.a
        href="https://www.instagram.com/yorlenramirez/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Instagram"
      >
        <Instagram className="h-6 w-6 text-white" />
      </motion.a>

      {/* Llamar */}
      <motion.a
        href="tel:+573132366760"
        className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Llamar Ahora"
      >
        <Phone className="h-6 w-6" />
      </motion.a>
    </motion.div>
  );
};

export default SocialButtons;