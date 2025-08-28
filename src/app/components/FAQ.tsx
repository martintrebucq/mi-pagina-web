"use client";
import { motion } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useState } from "react";
import Script from "next/script"; // 👈 Import necesario

const faqs = [
  {
    question: "¿Qué incluye exactamente Powerfly Connect (CRM)?",
    answer:
      "Powerfly Connect es nuestra plataforma CRM completa que incluye: gestión de contactos, automatización de campañas por email y SMS, embudos de ventas, calendarios de citas, sitios web integrados, reportes en tiempo real, y integración nativa con WhatsApp. Lo entregamos completamente configurado y listo para usar.",
  },
  {
    question: "¿Cuánto tiempo toma la implementación y qué incluye?",
    answer:
      "La implementación toma entre 1-2 semanas. Te entregamos todo completamente instalado y configurado: CRM personalizado, automatizaciones funcionando, integraciones conectadas, y capacitación completa para tu equipo. Incluye reuniones semanales de seguimiento y soporte continuo por WhatsApp.",
  },
  {
    question: "¿Puedo integrar Powerfly Connect con mis sistemas actuales?",
    answer:
      "Sí, Powerfly Connect se integra nativamente con más de 1,000 aplicaciones incluyendo: Shopify, WooCommerce, WordPress, Facebook/Meta, Google, Zapier, Calendly, Stripe, PayPal, y muchas más. Todas las integraciones disponibles en el ecosistema están incluidas.",
  },
  {
    question: "¿El sistema funciona para mi tipo de negocio?",
    answer:
      "Absolutamente. Powerfly Connect es altamente personalizable y funciona para cualquier industria: agencias, consultores, e-commerce, servicios profesionales, salud, fitness, bienes raíces, y más. Configuramos los embudos, automatizaciones y workflows específicos para tu modelo de negocio.",
  },
  {
    question: "¿Cuáles son los planes y qué soporte recibo?",
    answer:
      "Nuestros planes van desde $299 USD/mes (CRM completo) hasta $1,500 USD/mes (CRM + Marketing + Desarrollo). Incluyes: soporte por WhatsApp, reuniones semanales de seguimiento, capacitación completa del equipo, actualizaciones automáticas, y acceso a todas las funcionalidades. Agenda una consulta para recibir tu propuesta personalizada.",
  },
];

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="contacto"
      className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden"
    >
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Fondo decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Calendario GoHighLevel */}
        <div id="agenda" className="mb-16">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/WIK0rfbuSDXE4IG3h0xw"
            style={{ width: "100%", border: "none", overflow: "hidden" }}
            scrolling="no"
            id="WIK0rfbuSDXE4IG3h0xw_1756228843842"
            title="Agendar consulta con Powerfly Agency"
            aria-label="Calendario para agendar consulta"
          />
          <Script
            src="https://link.msgsndr.com/js/form_embed.js"
            strategy="afterInteractive"
          />
        </div>
        {/* Header unificado */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <HelpCircle className="w-4 h-4 text-[#395ef4]" />
            <span className="caption text-[#395ef4]">Dudas Frecuentes</span>
          </motion.div>

          <motion.h2
            className="heading-lg text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Preguntas <span className="text-[#395ef4]">Frecuentes</span>
          </motion.h2>

          <motion.p
            className="body-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Resolvemos las dudas más comunes sobre nuestros servicios y
            metodología de trabajo.
          </motion.p>
        </div>

        {/* FAQ List unificada */}
        <div className="space-y-4 mb-20">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
              >
                <h3 className="heading-sm text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#395ef4]/10 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-[#395ef4]" />
                  ) : (
                    <Plus className="w-4 h-4 text-[#395ef4]" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-100"
                >
                  <div className="px-8 py-8">
                    <p className="body-md text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Final unificado */}
        <motion.div
          className="text-center bg-white/80 backdrop-blur-md rounded-3xl p-10 sm:p-12 shadow-xl border border-white/50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-md text-gray-900 mb-6">
            ¿Listo para transformar tu negocio?
          </h3>
          <p className="body-lg text-gray-600 mb-10">
            Hablemos directamente. Agenda una consulta gratuita de 30 minutos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#agenda"
              className="bg-gradient-to-r from-[#395ef4] to-blue-600 hover:from-[#2f4bd6] hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto body-md text-center"
            >
              Agendar consulta gratuita
            </a>
            <a
              href="https://wa.me/5493513661138?text=Hola,%20tengo%20una%20consulta%20sobre%20Powerfly"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 w-full sm:w-auto hover:scale-105 shadow-lg body-md text-center inline-block"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
