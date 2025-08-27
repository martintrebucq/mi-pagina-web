"use client";
import { motion } from "framer-motion";
import { TrendingUp, Quote } from "lucide-react";

const testimonials = [
  {
    company: "TechSolutions SA",
    industry: "Tecnología",
    result: "300% aumento en leads",
    metric: "De 10 a 30 leads/mes",
    testimonial: "Powerfly Connect revolucionó nuestra gestión de clientes. En 6 meses triplicamos nuestros leads y duplicamos las ventas.",
    author: "María González",
    position: "CEO",
    stats: [
      { label: "Leads", value: "+300%" },
      { label: "Ventas", value: "+200%" },
      { label: "ROI", value: "150%" }
    ]
  },
  {
    company: "RetailMax",
    industry: "E-commerce",
    result: "300% ROI en 6 meses",
    metric: "$50k → $250k facturación",
    testimonial: "El CRM + marketing de Powerfly nos permitió automatizar todo el proceso de ventas. Los resultados hablan por sí solos.",
    author: "Carlos Mendez",
    position: "Founder",
    stats: [
      { label: "ROI", value: "300%" },
      { label: "Facturación", value: "+200%" },
      { label: "Clientes", value: "+150%" }
    ]
  },
  {
    company: "HealthCore",
    industry: "Salud",
    result: "40 horas/semana ahorradas",
    metric: "Automatización completa",
    testimonial: "Ya no perdemos tiempo en tareas repetitivas. Powerfly automatizó todo y ahora nos enfocamos en lo que importa: nuestros pacientes.",
    author: "Dra. Ana Ruiz",
    position: "Directora Médica",
    stats: [
      { label: "Tiempo ahorrado", value: "40hs" },
      { label: "Eficiencia", value: "+80%" },
      { label: "Satisfacción", value: "95%" }
    ]
  }
];

export default function SuccessCases() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white overflow-hidden">
      
      {/* Fondo decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-30" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header unificado */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-green-50 border border-green-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="caption text-green-600">Resultados Reales</span>
          </motion.div>

          <motion.h2
            className="heading-lg text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Casos de <span className="text-[#395ef4]">Éxito Real</span>
          </motion.h2>
          
          <motion.p
            className="body-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Más de 50 empresas ya transformaron sus resultados con Powerfly. 
            Conocé algunos casos destacados:
          </motion.p>
        </div>

        {/* Testimonials Grid unificado */}
        <div className="grid gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-3 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#395ef4] mb-6" />
              
              {/* Testimonial */}
              <p className="body-md text-gray-700 mb-8 leading-relaxed italic">
                “{testimonial.testimonial}”
              </p>

              {/* Stats unificadas */}
              <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-gray-50 rounded-2xl">
                {testimonial.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="heading-sm text-[#395ef4] mb-1">{stat.value}</div>
                    <div className="caption text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Author unificado */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#395ef4] to-blue-600 rounded-full flex items-center justify-center text-white font-bold body-sm">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="body-md font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="body-sm text-gray-600">{testimonial.position}</div>
                  <div className="caption text-[#395ef4]">{testimonial.company}</div>
                </div>
              </div>

              {/* Result badge unificado */}
              <div className="inline-block bg-green-50 text-green-700 px-4 py-2 rounded-full body-sm font-medium">
                🚀 {testimonial.result}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA unificado */}
        <motion.div
          className="text-center bg-gradient-to-r from-[#395ef4] to-blue-600 rounded-3xl p-10 sm:p-12 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-md text-white mb-6">
            ¿Querés ser el próximo caso de éxito?
          </h3>
          <p className="body-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Únete a las 50+ empresas que ya están creciendo con Powerfly
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5493513661138?text=%C2%A1Quiero%20ver%20mi%20propuesta%20personalizada!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#395ef4] font-semibold py-4 px-8 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto body-md text-center"
            >
              Ver mi propuesta personalizada
            </a>
            <a
              href="https://wa.me/5493513661138?text=%C2%A1Hola!%20Quiero%20hablar%20con%20un%20especialista%20de%20PowerFly"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white/30 hover:border-white text-white font-medium py-4 px-8 rounded-full transition-all duration-300 w-full sm:w-auto hover:bg-white/10 body-md text-center"
            >
              Hablar con un especialista
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
