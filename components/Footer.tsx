'use client';

import Link from 'next/link';
import { Music, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-rich-black to-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-teal" />
              <span className="text-xl font-bold">Mariachis Los Salmos</span>
            </div>
            <p className="text-gray-300">
              Profesionales del mariachi en Bogotá. Música tradicional mexicana para tus eventos especiales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-teal transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-teal transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <a 
                  href="#servicios" 
                  className="text-gray-300 hover:text-teal transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#servicios');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a 
                  href="#galeria" 
                  className="text-gray-300 hover:text-teal transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#galeria');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Galería
                </a>
              </li>
              <li>
                <a 
                  href="#repertorio" 
                  className="text-gray-300 hover:text-teal transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#repertorio');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Repertorio
                </a>
              </li>
              <li>
                <a 
                  href="#contacto" 
                  className="text-gray-300 hover:text-teal transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#contacto');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Eventos Privados</li>
              <li>Fiestas de Quinceaños</li>
              <li>Cumpleaños</li>
              <li>Bodas</li>
              <li>Restaurantes</li>
              <li>Serenatas</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-teal" />
                <span>313 236 6760</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-teal" />
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Mariachis Los Salmos. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidad" className="text-gray-300 hover:text-teal text-sm transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="text-gray-300 hover:text-teal text-sm transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;