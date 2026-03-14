'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Repertorio', href: '#repertorio' },
    { name: 'Contacto', href: '#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent backdrop-blur-none shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Music className={`h-8 w-8 transition-colors duration-300 ${isScrolled ? 'text-teal' : 'text-white'}`} />
            <span className={`font-bold text-xl transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-white'}`}>
              Mariachis Los Salmos
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 cursor-pointer ${
                  isScrolled ? 'text-white hover:text-teal' : 'text-white hover:text-gray-300'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/573132366760"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal hover:bg-teal/80 text-navy px-4 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 focus:outline-none ${
                isScrolled ? 'text-white hover:text-teal' : 'text-white hover:text-gray-300'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className={`md:hidden border-t border-teal/20 ${
            isScrolled ? 'bg-navy/95 backdrop-blur-md' : 'bg-navy'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-white hover:text-teal transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/573132366760"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 bg-teal text-navy rounded-lg mx-3 text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;