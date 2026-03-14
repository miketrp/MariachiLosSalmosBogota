'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Music, Users, Calendar, Star, Phone, Clock, Gift, 
  Camera, X, ChevronLeft, ChevronRight, Play, Download, 
  Heart, Cross, MapPin, MessageCircle, Send, Mail 
} from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('amor');

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
      price: "$450.000",
      musicians: 8,
      songs: 10,
      features: ["Transporte incluido", "Sonido profesional", "Atención personalizada"],
    },
  ];

  const galleryImages = [
    '/images/gallery/2026-03-12 20.09.41.jpg',
    '/images/gallery/2026-03-12 20.14.01.jpg',
    '/images/gallery/2026-03-12 20.13.47.jpg',
    '/images/gallery/2026-03-12 20.13.37.jpg',
    '/images/gallery/2026-03-12 20.11.57.jpg',
    '/images/gallery/2026-03-12 20.13.32.jpg',
    '/images/gallery/2026-03-12 20.13.43.jpg',
    '/images/gallery/2026-03-12 20.13.53.jpg',
    '/images/gallery/2026-03-12 20.13.56.jpg',
    '/images/gallery/2026-03-12 20.14.05.jpg',
    '/images/gallery/2026-03-12 20.14.11.jpg',
    '/images/gallery/2026-03-11 16.13.48.jpg',
    '/images/gallery/2026-03-11 16.32.09.jpg',
    '/images/gallery/2026-03-11 16.32.09 2.jpg',
    '/images/gallery/488506268_3984473121812375_7717230493523610499_n.jpg',
    '/images/gallery/496836501_4021657491427271_5532042804569337372_n.jpg',
    '/images/gallery/497919916_4029473487312338_8502366035126456081_n.jpg',
    '/images/gallery/613419175_4263019803957704_416228745630517482_n.jpg'
  ];

  const categories = [
    { id: 'amor', name: 'Amor y Romance', icon: Heart, color: 'text-pink-500' },
    { id: 'madre', name: 'Madre y Familia', icon: Users, color: 'text-blue-500' },
    { id: 'cumpleanos', name: 'Cumpleaños', icon: Calendar, color: 'text-yellow-500' },
    { id: 'reconciliacion', name: 'Reconciliación', icon: Cross, color: 'text-green-500' },
    { id: 'cristiana', name: 'Música Cristiana', icon: Star, color: 'text-purple-500' },
    { id: 'clasicos', name: 'Clásicos del Mariachi', icon: Music, color: 'text-red-500' }
  ];

  const songs = {
    amor: [
      'Cielito Lindo', 'El Rey', 'Volver Volver', 'Amor Eterno', 'Si Nos Dejan',
      'El Sol Que Tú Eres', 'Hermoso Cariño', 'Me Nace del Corazón', 'La Diferencia',
      'Por Tu Maldito Amor', 'Y Llegaste Tú', 'Tristes Recuerdos', 'Como Quien Pierde una Estrella'
    ],
    madre: [
      'Madrecita Querida', 'Amor de Madre', 'Las Mañanitas', 'Madre Mia',
      'Qué Bonita es Mi Madre', 'Madre Solo Hay Una', 'Mi Madre Querida', 'Madrecita del Alma'
    ],
    cumpleanos: [
      'Las Mañanitas', 'Cumpleaños Feliz', 'Feliz Cumpleaños', 'Que Cumplas Muchos Más',
      'Cumpleaños de Oro', 'Cumpleaños de Plata', 'Cumpleaños de Diamante'
    ],
    reconciliacion: [
      'Perdón', 'Perdóname', 'Vuelve', 'Regresa', 'Te Necesito', 'Te Extraño', 'Te Amo'
    ],
    cristiana: [
      'Alabare', 'Cristo Me Ama', 'Dios es Amor', 'Alaba a Dios', 'Bendice Al Señor', 'Cristo Vive'
    ],
    clasicos: [
      'Guadalajara', 'México Lindo y Querido', 'Cielito Lindo', 'El Rey', 'Volver Volver',
      'La Bikina', 'El Son de la Negra', 'La Bamba', 'La Malagueña', 'Jarabe Tapatío'
    ]
  };

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

  const handleDownload = (category: string) => {
    const songsList = songs[category as keyof typeof songs].join('\n');
    const blob = new Blob([songsList], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `repertorio-${category}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const currentCategory = categories.find(cat => cat.id === selectedCategory);
  const currentSongs = songs[selectedCategory as keyof typeof songs];

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/Gemini_Generated_Image_hi41snhi41snhi41.png"
            alt="Mariachis Los Salmos - Música Tradicional Mexicana"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Mariachis <span className="text-primary-gold">Los Salmos</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              Música tradicional mexicana para tus eventos especiales en Bogotá
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
                WhatsApp
              </Button>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
              >
                Ver Servicios
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 text-primary-gold/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Music className="h-16 w-16" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-primary-gold/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Music className="h-20 w-20" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="nosotros" className="py-20 bg-rich-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Somos profesionales apasionados por la música tradicional mexicana, 
              comprometidos con hacer de tu evento un momento inolvidable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Músicos Profesionales",
                description: "Contamos con músicos experimentados y apasionados por el mariachi tradicional."
              },
              {
                icon: Calendar,
                title: "Disponibilidad Total",
                description: "Atendemos eventos los 7 días de la semana, con horarios flexibles."
              },
              {
                icon: Star,
                title: "Calidad Garantizada",
                description: "Nos comprometemos a brindar el mejor servicio para hacer de tu evento algo especial."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-lg hover:shadow-lg transition-shadow border border-gray-600/30"
              >
                <div className="bg-teal/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Complete version from servicios page */}
      <section id="servicios" className="py-20 bg-gray-900/30 backdrop-blur-md text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ofrecemos los mejores paquetes de mariachi en Bogotá, adaptados a tus necesidades 
              y presupuesto. Todos nuestros servicios incluyen transporte y equipo de sonido profesional.
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

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-center text-white mb-8">
              Servicios Adicionales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      <h4 className="text-xl font-semibold text-white">{service.title}</h4>
                      <p className="text-primary font-medium">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section - Complete version from galeria page */}
      <section id="galeria" className="py-20 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Nuestra Galería
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Disfruta de algunos momentos capturados en nuestros eventos. 
              Cada imagen cuenta una historia de música, alegría y celebración.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(index)}
              >
              <div className="aspect-square bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <Image
                  src={image}
                  alt={`Imagen ${index + 1} - Evento de mariachi`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                  priority={index < 6}
                />
              </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Música en Vivo</h3>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl mb-6">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/YEjBkvN0feA"
                  title="Mariachis Los Salmos - Música Tradicional Mexicana"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>
              <p className="text-white/70 mb-4">
                Este es solo un ejemplo de nuestro repertorio. 
                Contamos con más de 100 canciones para todos los gustos y ocasiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Repertorio Section - Complete version from repertorio page */}
      <section id="repertorio" className="py-20 bg-gray-900/30 backdrop-blur-sm">
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
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Más de 100 canciones organizadas por categorías para que encuentres 
              la música perfecta para tu evento especial.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-teal bg-teal/20 backdrop-blur-sm text-white'
                    : 'border-white/30 hover:border-teal/50 text-gray-300 hover:text-white'
                }`}
              >
                <category.icon className={`h-8 w-8 mx-auto mb-2 ${category.color}`} />
                <p className="text-sm font-medium">{category.name}</p>
              </motion.button>
            ))}
          </div>

          {currentCategory && (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-600/30"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <currentCategory.icon className={`h-8 w-8 mr-3 ${currentCategory.color}`} />
                  <h3 className="text-2xl font-bold text-white">{currentCategory.name}</h3>
                </div>
                <Button
                  onClick={() => handleDownload(selectedCategory)}
                  variant="outline"
                  size="sm"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Descargar Lista
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentSongs.map((song, index) => (
                  <motion.div
                    key={song}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-teal/50 transition-colors"
                  >
                    <Music className="h-4 w-4 text-teal mr-3 flex-shrink-0" />
                    <span className="text-white">{song}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section - Complete version from contacto page */}
      <section id="contacto" className="py-20 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Estamos aquí para hacer de tu evento algo inolvidable. 
              Contáctanos y recibe una cotización personalizada.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
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
            ].map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-600/30"
              >
                <div className="bg-teal/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <info.icon className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-white font-medium mb-2">{info.content}</p>
                {info.description && (
                  <p className="text-white/70 text-sm mb-4">{info.description}</p>
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-600/30"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent text-white placeholder-white/60"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent text-white placeholder-white/60"
                    placeholder="313 236 6760"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent text-white placeholder-white/60"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-white mb-2">
                    Fecha del Evento *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    className="w-full px-4 py-3 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent text-white placeholder-white/60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-white mb-2">
                    Tipo de Evento *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    className="w-full px-4 py-3 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent text-white"
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
                  <label htmlFor="city" className="block text-sm font-medium text-white mb-2">
                    Ciudad / Sector *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    className="w-full px-4 py-3 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent text-white placeholder-white/60"
                    placeholder="Bogotá - Chapinero"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Mensaje / Detalles del Evento
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent text-white placeholder-white/60"
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
                <p className="text-sm text-white/60 mt-4">
                  Al enviar el formulario, serás redirigido a WhatsApp con toda la información 
                  pre-cargada para que puedas enviarla directamente.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="h-8 w-8" />
              </button>
              
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="aspect-video bg-gray-700 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-300 text-lg">
                      Imagen {selectedImage + 1} de {galleryImages.length}
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Esta imagen será reemplazada con la foto real del evento
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp 
        phoneNumber="573132366760"
        message="Hola, me gustaría solicitar información sobre sus servicios de mariachi."
        position="right"
        size="md"
      />
    </div>
  );
}
