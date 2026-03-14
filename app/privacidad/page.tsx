import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad - Mariachis Los Salmos',
  description: 'Política de privacidad y tratamiento de datos personales de Mariachis Los Salmos en Bogotá.',
  keywords: 'privacidad, datos personales, política, mariachis bogota',
};

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-navy to-navy/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Política de Privacidad
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Tu privacidad es importante para nosotros. Conoce cómo protegemos tu información personal.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Esta Política de Privacidad describe cómo Mariachis Los Salmos recopila, utiliza y protege la información personal que usted proporciona a través de nuestro sitio web y servicios.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              1. Información que Recopilamos
            </h2>
            <p className="text-gray-700 mb-4">
              Podemos recopilar la siguiente información personal:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Nombre completo</li>
              <li>Número de teléfono</li>
              <li>Correo electrónico</li>
              <li>Información sobre su evento (fecha, ubicación, tipo de evento)</li>
              <li>Preferencias musicales</li>
              <li>Cualquier otra información que usted decida compartir con nosotros</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              2. Cómo Utilizamos su Información
            </h2>
            <p className="text-gray-700 mb-4">
              Utilizamos la información personal que recopilamos para:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Proporcionar y coordinar nuestros servicios de mariachi</li>
              <li>Responder a sus consultas y solicitudes</li>
              <li>Enviar cotizaciones y confirmaciones de servicio</li>
              <li>Mejorar nuestros servicios y atención al cliente</li>
              <li>Comunicarnos con usted sobre su evento</li>
              <li>Cumplir con obligaciones legales y contractuales</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              3. Protección de su Información
            </h2>
            <p className="text-gray-700 mb-4">
              Implementamos medidas de seguridad apropiadas para proteger su información personal contra:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Acceso no autorizado</li>
              <li>Divulgación indebida</li>
              <li>Alteración o destrucción no autorizada</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Solo el personal autorizado tiene acceso a su información personal, y todos nuestros empleados están capacitados en el manejo adecuado de información confidencial.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              4. Compartición de Información
            </h2>
            <p className="text-gray-700 mb-4">
              No vendemos, alquilamos ni compartimos su información personal con terceros, excepto cuando:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Sea necesario para proporcionar nuestros servicios</li>
              <li>Tengamos su consentimiento explícito</li>
              <li>Estemos legalmente obligados a hacerlo</li>
              <li>Sea necesario para proteger nuestros derechos legales</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              5. Retención de Información
            </h2>
            <p className="text-gray-700 mb-4">
              Conservamos su información personal solo durante el tiempo necesario para cumplir con los fines descritos en esta política, o según lo requiera la ley aplicable. Posteriormente, la información se elimina de forma segura.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              6. Sus Derechos
            </h2>
            <p className="text-gray-700 mb-4">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Solicitar acceso a su información personal</li>
              <li>Solicitar corrección de información inexacta o incompleta</li>
              <li>Solicitar eliminación de su información personal</li>
              <li>Oponerse al procesamiento de su información</li>
              <li>Solicitar la portabilidad de sus datos</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              7. Cookies y Tecnologías de Seguimiento
            </h2>
            <p className="text-gray-700 mb-4">
              Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario. Las cookies son pequeños archivos que se almacenan en su dispositivo y nos ayudan a recordar sus preferencias y comprender cómo utiliza nuestro sitio.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              8. Enlaces a Terceros
            </h2>
            <p className="text-gray-700 mb-4">
              Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad de estos sitios. Le recomendamos que lea las políticas de privacidad de cualquier sitio web de terceros que visite.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              9. Cambios en esta Política
            </h2>
            <p className="text-gray-700 mb-4">
              Podemos actualizar esta Política de Privacidad ocasionalmente. Cualquier cambio será publicado en esta página con la fecha de actualización. Le recomendamos que revise periódicamente esta política para estar informado sobre cómo protegemos su información.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-8">
              10. Contacto
            </h2>
            <p className="text-gray-700 mb-4">
              Si tiene preguntas sobre esta Política de Privacidad o sobre el manejo de su información personal, puede contactarnos a través de:
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
                Al utilizar nuestros servicios, usted acepta los términos de esta Política de Privacidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy to-navy/90 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            ¿Tienes Preguntas sobre tu Privacidad?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Estamos aquí para aclarar cualquier duda sobre cómo manejamos tu información personal.
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