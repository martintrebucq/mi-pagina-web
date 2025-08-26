"use client";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Code, Megaphone } from "lucide-react";

export default function Ecosystem() {
  const services = [
    {
      title: "Agencia de Marketing",
      description: "Gestionamos la estrategia digital de tu empresa: publicidad paga en Meta y Google, redes sociales, automatizaciones y contenido creativo diseñado para captar y fidelizar clientes.",
      icon: Megaphone,
      color: "from-pink-500 to-rose-500",
      features: ["Publicidad en Meta & Google", "Gestión de Redes Sociales", "Automatizaciones", "Contenido Creativo"],
      cta: "Conocer más",
      href: "#agencia"
    },
    {
      title: "Powerfly Connect (CRM)",
      description: "Nuestra solución CRM centraliza tus contactos, mensajes, campañas y automatizaciones en un solo lugar. Además, podemos crear módulos personalizados que se integran al CRM.",
      icon: Zap,
      color: "from-[#395ef4] to-blue-600",
      features: ["CRM Centralizado", "Módulos Personalizados", "Automatizaciones", "Integraciones"],
      cta: "Ver Powerfly Connect",
      href: "#pfconnect"
    },
    {
      title: "Desarrollo de Software",
      description: "Si tu proyecto requiere soluciones totalmente únicas, desarrollamos software a medida desde cero: plataformas web, sistemas internos, integraciones y aplicaciones específicas.",
      icon: Code,
      color: "from-emerald-500 to-teal-500",
      features: ["Desarrollo a Medida", "Plataformas Web", "Sistemas Internos", "Integraciones API"],
      cta: "Hablar con un experto",
      href: "#desarrollo"
    }
  ];

  return (
    <section id="pfconnect" className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Patrón de fondo mejorado */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0),
            linear-gradient(45deg, transparent 49%, rgba(59, 130, 246, 0.05) 49%, rgba(59, 130, 246, 0.05) 51%, transparent 51%)
          `,
          backgroundSize: "20px 20px, 40px 40px",
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header unificado */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Zap className="w-4 h-4 text-[#395ef4]" />
            <span className="caption text-[#395ef4]">Ecosistema Completo</span>
          </motion.div>

          <motion.h2
            className="heading-lg text-gray-900 mb-8 font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            El Ecosistema <span className="text-[#395ef4]">Powerfly</span>
          </motion.h2>

          <motion.p
            className="body-lg text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            En <span className="font-semibold text-[#395ef4]">Powerfly.agency</span> unimos{" "}
            <span className="font-semibold">marketing</span> y{" "}
            <span className="font-semibold">software</span> para potenciar tu
            negocio. Podés elegir cómo trabajar con nosotros según tus necesidades:
          </motion.p>
        </div>

        {/* Cards Grid unificado */}
        <div className="grid gap-8 sm:gap-10 lg:gap-12 grid-cols-1 lg:grid-cols-3 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Gradiente decorativo */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`} />
                
                <div>
                  {/* Icono unificado */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Título unificado */}
                  <h3 className="heading-sm text-gray-900 group-hover:text-[#395ef4] transition-colors mb-6">
                    {service.title}
                  </h3>

                  {/* Descripción unificada */}
                  <p className="body-md text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features unificadas */}
                  <ul className="space-y-3 mb-10">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center body-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#395ef4] rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button unificado */}
                <a
                  href={service.href}
                  className="group/btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#395ef4] to-blue-600 text-white px-8 py-4 rounded-xl body-md font-semibold hover:from-[#2f4bd6] hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Cierre unificado */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 sm:p-12 shadow-xl border border-white/50">
            <h3 className="heading-md text-gray-900 mb-6">
              Con <span className="text-[#395ef4]">Powerfly</span>, tu empresa no se
              adapta a la tecnología.
            </h3>
            <p className="heading-sm text-[#395ef4] flex items-center justify-center gap-3">
              <span>👉</span> La tecnología se adapta a vos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}