'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import Button from '@/components/Button';

export default function Contacto() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "313 236 6760",
      action: "tel:+573132366760",
      actionText: "Llamar Ahora"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "313 236 6760",
      action: "https://wa.me/573132366760",
      actionText: "Enviar Mensaje"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Bogotá, Colombia",
      actionText: "Ver en Mapa"
    },
    {
      icon: Clock,
      title: "Horario de Atención",
      content: "Lunes a Domingo: 24 horas",
      description: "Atendemos eventos cualquier día de la semana"
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    // Create WhatsApp message
    const message = `Hola, me gustaría solicitar información sobre sus servicios de mariachi.
    
Nombre: ${data.name}
Teléfono: ${data.phone}
Email: ${data.email}
Fecha del evento: ${data.date}
Tipo de evento: ${data.eventType}
Ciudad: ${data.city}
Mensaje: ${data.message}`;

    const whatsappUrl = `https://wa.me/573132366760?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-navy/80 to-navy/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Estamos aquí para hacer de tu evento algo inolvidable. 
              Contáctanos y recibe una cotización personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://wa.me/573132366760"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Rápido
              </Button>
              <Button
                href="#formulario"
                variant="outline"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Formulario de Contacto
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Información de Contacto
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estamos disponibles las 24 horas del día, los 7 días de la semana 
              para atender tus necesidades de música en vivo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50/20 backdrop-blur-sm p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-white/20"
              >
                <div className="bg-teal/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <info.icon className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-white font-medium mb-2">{info.content}</p>
                {info.description && (
                  <p className="text-gray-300 text-sm mb-4">{info.description}</p>
                )}
                {info.action ? (
                  <a
                    href={info.action}
                    target={info.title === "WhatsApp" ? "_blank" : undefined}
                    rel={info.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center text-teal hover:text-teal/80 font-medium"
                  >
                    {info.actionText}
                  </a>
                ) : (
                  <button className="text-teal hover:text-teal/80 font-medium">
                    {info.actionText}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
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
              Zona de Cobertura
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Atendemos eventos en toda Bogotá y sus alrededores. 
              Consulta por otros destinos en Colombia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-gray-600/30"
          >
            <div className="aspect-video bg-gray-700/20 backdrop-blur-sm flex items-center justify-center border border-gray-600/30">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-white/70 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Bogotá, Colombia</h3>
                <p className="text-gray-300 mb-4">
                  Servicio de mariachi profesional en toda la capital colombiana
                </p>
                <p className="text-sm text-gray-400">
                  *El mapa interactivo se cargará cuando esté disponible
                </p>
              </div>
            </div>
            {/* Google Maps Embed would go here */}
            {/* 
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7!2d-74.1!3d4.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzYnMDAuMCJOLCTEsDc0wrAwNicwMC4wIlc!5e0!3m2!1ses!2sco!4v1234567890"
              width="100%"
              height="450"
              style="border:0;"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            */}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="formulario" className="py-20 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Formulario de Contacto
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Completa el formulario y nos pondremos en contacto contigo en menos de 30 minutos 
              para coordinar todos los detalles de tu evento.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-600/30"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-600/50 bg-gray-700/20 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent text-gray-200 placeholder-gray-500"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent"
                    placeholder="313 236 6760"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha del Evento *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Evento *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent"
                  >
                    <option value="">Selecciona el tipo de evento</option>
                    <option value="cumpleanos">Cumpleaños</option>
                    <option value="boda">Boda</option>
                    <option value="quinceanera">Quinceañera</option>
                    <option value="serenata">Serenata</option>
                    <option value="empresarial">Evento Empresarial</option>
                    <option value="restaurante">Restaurante</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    Ciudad / Sector *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent"
                    placeholder="Bogotá - Chapinero"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje / Detalles del Evento
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent"
                  placeholder="Cuéntanos más sobre tu evento, número de invitados, preferencias musicales, etc."
                ></textarea>
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar por WhatsApp
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  Al enviar el formulario, serás redirigido a WhatsApp con toda la información 
                  pre-cargada para que puedas enviarla directamente.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              ¿Necesitas una Respuesta Inmediata?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Llámanos o escríbenos por WhatsApp y recibe atención inmediata 
              para resolver todas tus dudas sobre nuestros servicios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://wa.me/573132366760"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Inmediato
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
            <p className="text-gray-300 mt-6">
              Atención inmediata las 24 horas del día, los 7 días de la semana
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}