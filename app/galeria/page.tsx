'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Music, Play } from 'lucide-react';
import Button from '@/components/Button';

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  // Lista completa de imágenes de la galería
  const galleryImages = [
    '/images/gallery/2026-03-12 20.14.01.jpg',
    '/images/gallery/2026-03-12 20.13.47.jpg',
    '/images/gallery/2026-03-12 20.13.37.jpg',
    '/images/gallery/2026-03-12 20.11.57.jpg',
    '/images/gallery/476136925_3928878740705147_2399940180023578348_n.jpg',
    '/images/gallery/487549508_3980438028882551_7825511601604275693_n.jpg',
    '/images/gallery/489014684_3984472878479066_6231512989246642934_n.jpg',
    '/images/gallery/496944437_4023526624573691_3745076675577749973_n.jpg',
    '/images/gallery/497732011_4024126861180334_5421402168717128496_n.jpg',
    '/images/gallery/499920804_4038843863041967_8288677457409836272_n.jpg',
    '/images/gallery/486838505_3975979289328425_3312769373190789162_n.jpg',
    '/images/gallery/514260019_24315459871404678_7045320379127488245_n.jpg',
    '/images/gallery/486838505_3975979289328425_3312769373190789162_n.jpg',
    '/images/gallery/486838505_3975979289328425_3312769373190789162_n.jpg',
    '/images/gallery/2026-03-12 20.09.41.jpg',
  ];

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
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
              Nuestra <span className="text-white">Galería</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto mb-8">
              Disfruta de algunos momentos capturados en nuestros eventos. 
              Cada imagen cuenta una historia de música, alegría y celebración.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#fotos"
                variant="primary"
                size="lg"
              >
                <Camera className="mr-2 h-5 w-5" />
                Ver Fotos
              </Button>
              <Button
                href="#video"
                variant="outline"
                size="lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Video
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="fotos" className="py-20 bg-gray-900/70 backdrop-blur-sm text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Momentos Especiales
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cada evento es único y especial. Aquí puedes ver algunos de los momentos 
              más memorables que hemos compartido con nuestros clientes.
            </p>
          </motion.div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                <div className="aspect-square bg-gray-200/20 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <Camera className="h-12 w-12 text-white/70 mx-auto mb-2" />
                    <p className="text-white/70 text-sm">Imagen {index + 1}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              ¿Quieres ver más fotos de nuestros eventos?
            </p>
            <Button
              href="/contacto"
              variant="secondary"
              size="lg"
            >
              Solicitar Más Información
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-20 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Música en Vivo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Disfruta de nuestro repertorio en este video especial. 
              La pasión y el arte del mariachi tradicional mexicano.
            </p>
          </motion.div>

          {/* YouTube Video Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
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
            <div className="mt-6 text-center">
              <p className="text-gray-300 mb-4">
                Este es solo un ejemplo de nuestro repertorio. 
                Contamos con más de 100 canciones para todos los gustos y ocasiones.
              </p>
              <Button
                href="/repertorio"
                variant="primary"
                size="md"
              >
                Ver Repertorio Completo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials with Photos */}
      <section className="py-20 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Momentos que Hemos Compartido
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cada evento es una historia única. Estas son algunas de las experiencias 
              que han dejado huella en nuestros clientes y en nosotros.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                event: "Boda en Hacienda",
                description: "Una boda mágica con música tradicional mexicana que emocionó a todos los invitados.",
                date: "Marzo 2024"
              },
              {
                event: "Cumpleaños 60 Años",
                description: "Celebración especial con serenata sorpresa que dejó sin palabras a la festejada.",
                date: "Febrero 2024"
              },
              {
                event: "Evento Corporativo",
                description: "Animación de fiesta empresarial con el mejor repertorio de mariachi.",
                date: "Enero 2024"
              },
              {
                event: "Serenata Romántica",
                description: "Pedida de matrimonio inolvidable con las canciones más románticas del mariachi.",
                date: "Diciembre 2023"
              },
              {
                event: "Quinceañera",
                description: "Vals tradicional y música festiva para una celebración de quince años inolvidable.",
                date: "Noviembre 2023"
              },
              {
                event: "Aniversario de Bodas",
                description: "Celebración de 25 años de matrimonio con el amor y la música como protagonistas.",
                date: "Octubre 2023"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-600/30"
              >
                <div className="aspect-video bg-gray-700/20 backdrop-blur-sm rounded-lg mb-4 flex items-center justify-center border border-gray-600/30">
                  <Music className="h-12 w-12 text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{story.event}</h3>
                <p className="text-gray-300 mb-3">{story.description}</p>
                <p className="text-sm text-teal font-medium">{story.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy/80 to-navy/60 backdrop-blur-sm text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              ¿Quieres Formar Parte de Nuestra Galería?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Agenda tu evento con nosotros y crea momentos inolvidables que quedarán 
              grabados para siempre en la memoria de tus invitados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://wa.me/573132366760"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                Solicitar Cotización
              </Button>
              <Button
                href="/contacto"
                variant="outline"
                size="lg"
              >
                Más Información
              </Button>
            </div>
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

              <div className="bg-white rounded-lg overflow-hidden">
                <div className="aspect-video bg-gray-300 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">
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
    </div>
  );
}