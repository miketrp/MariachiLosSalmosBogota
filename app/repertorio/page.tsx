'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Download, Heart, Users, Calendar, Cross, Star } from 'lucide-react';
import Button from '@/components/Button';

export default function Repertorio() {
  const [selectedCategory, setSelectedCategory] = useState('amor');

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
      'Cielito Lindo',
      'El Rey',
      'Volver Volver',
      'Amor Eterno',
      'Si Nos Dejan',
      'El Sol Que Tú Eres',
      'Hermoso Cariño',
      'Me Nace del Corazón',
      'La Diferencia',
      'Por Tu Maldito Amor',
      'Y Llegaste Tú',
      'Tristes Recuerdos',
      'Como Quien Pierde una Estrella',
      'Aca Entre Nos',
      'Se Me Olvidó Otra Vez'
    ],
    madre: [
      'Madrecita Querida',
      'Amor de Madre',
      'Las Mañanitas',
      'Madre Mia',
      'Qué Bonita es Mi Madre',
      'Madre Solo Hay Una',
      'Mi Madre Querida',
      'Madre Consentida',
      'La Madre',
      'Madrecita del Alma',
      'Mi Linda Madre',
      'Madre Angelita',
      'Madre Bendita',
      'Madre Querida'
    ],
    cumpleanos: [
      'Las Mañanitas',
      'Cumpleaños Feliz',
      'El Año Viejo',
      'Feliz Cumpleaños',
      'Que Cumplas Muchos Más',
      'Cumpleaños de Oro',
      'Cumpleaños de Plata',
      'Cumpleaños de Diamante',
      'Cumpleaños de Bronce',
      'Cumpleaños de Cobre',
      'Cumpleaños de Cristal',
      'Cumpleaños de Madera',
      'Cumpleaños de Papel',
      'Cumpleaños de Seda'
    ],
    reconciliacion: [
      'Perdón',
      'Perdóname',
      'Vuelve',
      'Regresa',
      'Te Necesito',
      'Te Extraño',
      'Te Amo',
      'Perdón por Lastimarte',
      'Vuelve a Mi Lado',
      'Te Pido Perdón',
      'No Te Vayas',
      'Quédate',
      'Te Suplico',
      'Te Necesito de Vuelta'
    ],
    cristiana: [
      'Alabare',
      'Cristo Me Ama',
      'Dios es Amor',
      'Alaba a Dios',
      'Bendice Al Señor',
      'Cristo Vive',
      'Dios Te Salve',
      'Gloria a Dios',
      'Jesús es el Señor',
      'María Madre de Dios',
      'Oh Dios Mío',
      'Padre Nuestro',
      'Reina de los Cielos',
      'Salve Regina'
    ],
    clasicos: [
      'Guadalajara',
      'México Lindo y Querido',
      'Cielito Lindo',
      'El Rey',
      'Volver Volver',
      'La Bikina',
      'La Feria de las Flores',
      'El Son de la Negra',
      'La Bamba',
      'La Malagueña',
      'Jarabe Tapatío',
      'Las Alazanas',
      'El Cascabel',
      'La Negra'
    ]
  };

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
              Nuestro <span className="text-teal">Repertorio</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Más de 100 canciones organizadas por categorías para que encuentres 
              la música perfecta para tu evento especial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#categorias"
                variant="primary"
                size="lg"
              >
                <Music className="mr-2 h-5 w-5" />
                Explorar Categorías
              </Button>
              <Button
                href="https://wa.me/573132366760"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
              >
                Solicitar Canción Especial
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categorias" className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Categorías de Música
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Selecciona una categoría para ver las canciones disponibles. 
              Cada una está cuidadosamente seleccionada para crear el ambiente perfecto.
            </p>
          </motion.div>

          {/* Category Buttons */}
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

          {/* Current Category Display */}
          {currentCategory && (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-50/20 backdrop-blur-sm rounded-lg p-8 border border-white/20"
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
                    className="flex items-center p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 hover:border-teal/50 transition-colors"
                  >
                    <Music className="h-4 w-4 text-teal mr-3 flex-shrink-0" />
                    <span className="text-white">{song}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-4">
                  ¿No encuentras la canción que buscas? Podemos aprenderla especialmente para tu evento.
                </p>
                <Button
                  href="https://wa.me/573132366760"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                >
                  Solicitar Canción Especial
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Special Requests Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              ¿Buscas una Canción Especial?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Si no encuentras la canción que necesitas en nuestro repertorio, 
              podemos aprenderla especialmente para tu evento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://wa.me/573132366760"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                Solicitar Canción
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

      {/* Popular Songs Section */}
      <section className="py-20 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Canciones Más Solicitadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estas son las canciones que más solicitan nuestros clientes para sus eventos especiales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Cielito Lindo',
              'El Rey',
              'Volver Volver',
              'Amor Eterno',
              'Las Mañanitas',
              'México Lindo y Querido',
              'La Bikina',
              'Guadalajara',
              'El Son de la Negra',
              'La Malagueña',
              'Si Nos Dejan',
              'Amor de Madre'
            ].map((song, index) => (
              <motion.div
                key={song}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gradient-to-r from-teal/10 to-teal/5 p-4 rounded-lg border border-teal/20"
              >
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-3" />
                  <span className="text-navy font-medium">{song}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal to-teal/80">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-navy mb-6">
              ¿Listo para Escoger tu Música?
            </h2>
            <p className="text-xl text-navy/80 mb-8">
              Contáctanos y cuéntanos qué tipo de música necesitas para tu evento. 
              Te ayudaremos a crear la playlist perfecta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://wa.me/573132366760"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                <Music className="mr-2 h-5 w-5" />
                Consultar por WhatsApp
              </Button>
              <Button
                href="/contacto"
                variant="secondary"
                size="lg"
              >
                Más Información
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}