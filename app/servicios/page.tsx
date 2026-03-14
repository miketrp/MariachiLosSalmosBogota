'use client';

import { motion } from 'framer-motion';
import { Music, Check, Clock, Users, Gift, Phone, Star } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';

export default function Servicios() {
  const services = [
    {
      title: "Paquete Entre Semana",
      price: "$350.000",
      musicians: 6,
      songs: 10,
      gift: "Ramo de flores o champán",
      features: ["Transporte incluido", "Sonido profesional", "Atención personalizada"],
      isWeekday: true,
    },
    {
      title: "Paquete Premium Fin de Semana",
      price: "$480.000",
      musicians: 8,
      songs: 10,
      gift: "Ramo de flores o champán",
      features: ["Transporte incluido", "Sonido profesional", "Atención premium"],
      isPopular: true,
    },
    {
      title: "Paquete Estándar Fin de Semana",
      price: "$400.000",
      musicians: 8,
      songs: 10,
      features: ["Transporte incluido", "Sonido profesional", "Atención personalizada"],
    },
  ];

  const additionalServices = [
    {
      icon: Clock,
      title: "Canción adicional",
      description: "Agrega canciones extras a tu evento",
      price: "$80.000/canción"
    },
    {
      icon: Users,
      title: "Músicos Extra",
      description: "Agrega más músicos a tu grupo para un sonido más potente",
      price: "$50.000/músico"
    },
    {
      icon: Gift,
      title: "Obsequios Personalizados",
      description: "Regalos especiales para el homenajeado",
      price: "Desde $30.000"
    }
  ];

  const repertoireCategories = [
    "Amor y Romance",
    "Cumpleaños y Celebraciones",
    "Madre y Familia",
    "Reconciliación",
    "Música Cristiana",
    "Clásicos del Mariachi"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-dark-blue/80 to-accent/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nuestros <span className="text-primary">Servicios</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Ofrecemos los mejores paquetes de mariachi en Bogotá, adaptados a tus necesidades 
              y presupuesto. Todos nuestros servicios incluyen transporte y equipo de sonido profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://wa.me/573132366760"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Cotizar por WhatsApp
              </Button>
              <Button
                href="#paquetes"
                variant="outline"
                size="lg"
              >
                Ver Paquetes
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="paquetes" className="py-20 bg-gray-900/30 backdrop-blur-md text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Paquetes de Servicio
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Elige el paquete que mejor se adapte a tu evento. Todos incluyen transporte 
              dentro de Bogotá y equipo de sonido profesional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          {/* Important Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-yellow-900/20 backdrop-blur-sm border-l-4 border-yellow-400/50 p-6 rounded-lg"
          >
            <div className="flex">
              <div className="flex-shrink-0">
                <Star className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-yellow-300">
                  Importante
                </h3>
                <p className="mt-2 text-yellow-200">
                  Los precios pueden variar según la ubicación del evento, fecha especial 
                  o requerimientos específicos. Contáctanos para una cotización personalizada.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-900/70 backdrop-blur-sm text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-rich-black mb-4">
              Nuestros Paquetes
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Elige el paquete que mejor se adapte a tu evento. Todos incluyen transporte 
              dentro de Bogotá y equipo de sonido profesional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-600/30"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/20 rounded-full p-3 mr-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-primary font-medium">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Repertoire Section */}
      <section className="py-20 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Nuestro Repertorio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contamos con un extenso repertorio que incluye los clásicos más queridos 
              del mariachi mexicano, organizados por categorías para tu evento.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {repertoireCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary/20 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-primary/30 transition-colors border border-primary/30"
              >
                <Music className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-white font-medium text-sm">{category}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              href="/repertorio"
              variant="primary"
              size="lg"
            >
              Ver Repertorio Completo
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-dark-blue/70 backdrop-blur-sm text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              ¿Cómo Contratar Nuestros Servicios?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              El proceso es muy simple y rápido. En solo 4 pasos tendrás 
              tu mariachi reservado para tu evento.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Contacto",
                description: "Escríbenos por WhatsApp o llámanos al 313 236 6760"
              },
              {
                step: "2",
                title: "Cotización",
                description: "Te enviamos una cotización personalizada para tu evento"
              },
              {
                step: "3",
                title: "Confirmación",
                description: "Confirmas el servicio y realizas el pago de señal"
              },
              {
                step: "4",
                title: "Evento",
                description: "¡Nos presentamos en tu evento y hacemos magia!"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-primary text-rich-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              href="https://wa.me/573132366760"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Iniciar Proceso de Reserva
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/80 to-yellow-400/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Listo para reservar tu mariachi?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              No esperes más, agenda tu fecha y asegura la mejor música para tu evento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://wa.me/573132366760"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Reservar por WhatsApp
              </Button>
              <Button
                href="tel:+573132366760"
                variant="outline"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Llamar Ahora
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}