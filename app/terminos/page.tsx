import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos de Servicio - Mariachis Los Salmos',
  description: 'Términos y condiciones del servicio de Mariachis Los Salmos en Bogotá.',
  keywords: 'términos, condiciones, servicio, mariachis bogota',
};

export default function Terminos() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-navy to-navy/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Términos de Servicio
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Conoce los términos y condiciones que rigen nuestros servicios de mariachi en Bogotá.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Bienvenido a Mariachis Los Salmos. Al contratar nuestros servicios, usted acepta los siguientes términos y condiciones. Lea atentamente estos términos antes de contratar nuestros servicios.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              1. Aceptación de Términos
            </h2>
            <p className="text-gray-700 mb-4">
              Al contratar los servicios de Mariachis Los Salmos, usted confirma que ha leído, comprendido y aceptado estos Términos de Servicio. Si no está de acuerdo con alguno de estos términos, no debe contratar nuestros servicios.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              2. Servicios Ofrecidos
            </h2>
            <p className="text-gray-700 mb-4">
              Mariachis Los Salmos ofrece servicios de música tradicional mexicana para eventos en Bogotá y sus alrededores, incluyendo:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Presentaciones en eventos privados</li>
              <li>Serenatas</li>
              <li>Cumpleaños</li>
              <li>Bodas</li>
              <li>Quinceañeras</li>
              <li>Eventos corporativos</li>
              <li>Presentaciones en restaurantes</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              3. Reservas y Cancelaciones
            </h2>
            <h3 className="text-xl font-semibold text-navy mb-3 mt-6">3.1 Reservas</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Las reservas se realizan por WhatsApp al 313 236 6760</li>
              <li>Se requiere una señal del 30% del valor total para confirmar la reserva</li>
              <li>La señal no es reembolsable en caso de cancelación por parte del cliente</li>
              <li>El saldo restante debe pagarse al inicio del servicio</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mb-3 mt-6">3.2 Cancelaciones</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Cancelaciones con más de 48 horas de anticipación: se puede reprogramar el servicio</li>
              <li>Cancelaciones con menos de 48 horas: la señal no es reembolsable ni transferible</li>
              <li>Cancelaciones por fuerza mayor serán evaluadas caso por caso</li>
              <li>En caso de lluvia o condiciones climáticas adversas, se puede reprogramar el servicio</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              4. Precios y Pagos
            </h2>
            <h3 className="text-xl font-semibold text-navy mb-3 mt-6">4.1 Precios</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Los precios están sujetos a cambio sin previo aviso</li>
              <li>Los precios publicados no incluyen propina</li>
              <li>Los precios incluyen transporte dentro de Bogotá</li>
              <li>Eventos fuera de Bogotá pueden tener costo adicional de transporte</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mb-3 mt-6">4.2 Métodos de Pago</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Efectivo</li>
              <li>Transferencia bancaria</li>
              <li>Pagos por Nequi o Daviplata</li>
              <li>Tarjetas de débito/crédito (en el lugar del evento)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              5. Obligaciones del Cliente
            </h2>
            <p className="text-gray-700 mb-4">
              El cliente se compromete a:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Proporcionar información precisa y completa sobre el evento</li>
              <li>Garantizar un ambiente seguro para la presentación</li>
              <li>Respetar el tiempo acordado para la presentación</li>
              <li>Pagar el saldo restante al inicio del servicio</li>
              <li>Notificar cualquier cambio con al menos 24 horas de anticipación</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              6. Responsabilidades del Servicio
            </h2>
            <p className="text-gray-700 mb-4">
              Mariachis Los Salmos se compromete a:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Presentarse en el lugar y hora acordados</li>
              <li>Proporcionar el servicio con profesionalismo y calidad</li>
              <li>Llevar el equipo de sonido necesario</li>
              <li>Vestirse apropiadamente para el evento</li>
              <li>Respetar las indicaciones del cliente durante la presentación</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              7. Duración del Servicio
            </h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>La duración estándar del servicio es de 45 minutos a 1 hora</li>
              <li>Se incluyen 10 canciones en el repertorio básico</li>
              <li>El tiempo adicional se cobra por fracciones de 30 minutos</li>
              <li>Las horas adicionales deben acordarse con anticipación</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              8. Repertorio Musical
            </h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>El repertorio estándar incluye los clásicos más populares del mariachi</li>
              <li>Se puede solicitar canciones específicas con al menos 48 horas de anticipación</li>
              <li>No garantizamos el aprendizaje de canciones nuevas sin anticipación</li>
              <li>El repertorio puede variar según la disponibilidad de los músicos</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              9. Condiciones Especiales
            </h2>
            <h3 className="text-xl font-semibold text-navy mb-3 mt-6">9.1 Eventos al Aire Libre</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>En caso de lluvia, el servicio puede ser reprogramado sin costo adicional</li>
              <li>El cliente debe proporcionar cobertura adecuada para el equipo</li>
              <li>Las condiciones climáticas extremas pueden requerir la reprogramación del servicio</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mb-3 mt-6">9.2 Eventos en Restaurantes</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Se requiere la autorización previa del establecimiento</li>
              <li>El cliente es responsable de coordinar con el restaurante</li>
              <li>Algunos restaurantes pueden cobrar cargo adicional por presentación musical</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              10. Limitación de Responsabilidad
            </h2>
            <p className="text-gray-700 mb-4">
              Mariachis Los Salmos no será responsable por:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Daños causados por condiciones climáticas adversas</li>
              <li>Problemas de acceso al lugar del evento</li>
              <li>Interrupciones del servicio por causas de fuerza mayor</li>
              <li>Lesiones o daños en el lugar del evento (salvo por negligencia directa)</li>
              <li>Pérdida de objetos personales durante la presentación</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              11. Propiedad Intelectual
            </h2>
            <p className="text-gray-700 mb-4">
              Todos los arreglos musicales y presentaciones son propiedad intelectual de Mariachis Los Salmos. Queda prohibida la grabación y distribución comercial de nuestras presentaciones sin autorización previa por escrito.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              12. Modificaciones
            </h2>
            <p className="text-gray-700 mb-4">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán comunicados a través de nuestros canales oficiales y aplicarán a futuros servicios.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              13. Ley Aplicable
            </h2>
            <p className="text-gray-700 mb-4">
              Estos términos se rigen por las leyes de la República de Colombia. Cualquier disputa será resuelta en los tribunales de Bogotá.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              14. Contacto
            </h2>
            <p className="text-gray-700 mb-4">
              Para cualquier consulta sobre estos términos, puede contactarnos a través de:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Teléfono: 313 236 6760</li>
              <li>WhatsApp: 313 236 6760</li>
            </ul>

            <div className="bg-teal/10 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600">
                <strong>Última actualización:</strong> 3 de diciembre de 2024
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Al contratar nuestros servicios, usted acepta estos Términos de Servicio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy to-navy/90 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            ¿Tienes Dudas sobre Nuestros Servicios?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Estamos aquí para aclarar cualquier pregunta antes de contratar nuestros servicios.
          </p>
          <a
            href="/contacto"
            className="bg-teal hover:bg-teal/80 text-navy px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </section>
    </div>
  );
}