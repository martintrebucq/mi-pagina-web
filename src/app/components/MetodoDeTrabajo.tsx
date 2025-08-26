"use client";
import { motion } from "framer-motion";
import {
  CheckCircle,
  MessageSquare,
  ClipboardList,
  Wrench,
  Repeat,
  Users,
  CalendarCheck,
  TrendingUp,
  ArrowRight,
  Clock
} from "lucide-react";

const steps = [
  {
    title: "Reunión Informativa",
    desc: "Analizamos necesidades y objetivos estratégicos del cliente.",
    icon: Users,
    duration: "1 o 2 reuniones",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Viabilidad Técnica",
    desc: "Definimos alcance, factibilidad técnica y arquitectura.",
    icon: ClipboardList,
    duration: "1-2 días",
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Aprobación",
    desc: "El cliente valida el plan económico y timeline.",
    icon: CheckCircle,
    duration: "6 días de validez",
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Comunicación",
    desc: "Establecemos canal directo vía WhatsApp.",
    icon: MessageSquare,
    duration: "Inmediato",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Desarrollo",
    desc: "Ejecutamos con metodologías ágiles y sprints.",
    icon: Wrench,
    duration: "Variable",
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Seguimiento",
    desc: "Reuniones semanales con CEO y áreas clave.",
    icon: CalendarCheck,
    duration: "Semanal",
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Refinamiento",
    desc: "Mejoras iterativas basadas en feedback.",
    icon: Repeat,
    duration: "Continuo",
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Mejora Continua",
    desc: "Optimización y escalado permanente.",
    icon: TrendingUp,
    duration: "Permanente",
    color: "from-violet-500 to-purple-500"
  },
];

export default function MetodoDeTrabajo() {
  return (
    <section id="desarrollo" className="relative py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header unificado */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Clock className="w-4 h-4 text-[#395ef4]" />
            <span className="caption text-[#395ef4]">Metodología Probada</span>
          </motion.div>

          <motion.h2
            className="heading-lg text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nuestro Proceso de <span className="text-[#395ef4]">Trabajo</span>
          </motion.h2>
          
          <motion.p
            className="body-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Metodología estructurada que garantiza el éxito de tu proyecto.
          </motion.p>
        </div>

        {/* Grid compacto para desktop */}
        <div className="hidden lg:block mb-16">
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Número del paso */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-[#395ef4] to-blue-600 text-white rounded-full flex items-center justify-center caption font-bold shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icono */}
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Contenido */}
                  <h3 className="body-lg font-semibold text-gray-900 mb-2 group-hover:text-[#395ef4] transition-colors">
                    {step.title}
                  </h3>
                  
                  <span className="caption text-[#395ef4] bg-blue-50 px-2 py-1 rounded-full mb-3 inline-block">
                    {step.duration}
                  </span>
                  
                  <p className="body-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Flecha conectora (excepto el último) */}
                  {index < steps.length - 1 && index % 4 !== 3 && (
                    <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-[#395ef4]">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Grid para tablet */}
        <div className="hidden sm:block lg:hidden mb-16">
          <div className="grid grid-cols-2 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Número del paso */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-[#395ef4] to-blue-600 text-white rounded-full flex items-center justify-center caption font-bold shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icono */}
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Contenido */}
                  <h3 className="body-lg font-semibold text-gray-900 mb-2 group-hover:text-[#395ef4] transition-colors">
                    {step.title}
                  </h3>
                  
                  <span className="caption text-[#395ef4] bg-blue-50 px-2 py-1 rounded-full mb-3 inline-block">
                    {step.duration}
                  </span>
                  
                  <p className="body-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stack para mobile */}
        <div className="sm:hidden mb-16">
          <div className="grid grid-cols-1 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4">
                    {/* Número del paso */}
                    <div className="w-8 h-8 bg-gradient-to-r from-[#395ef4] to-blue-600 text-white rounded-full flex items-center justify-center caption font-bold flex-shrink-0">
                      {index + 1}
                    </div>

                    {/* Icono */}
                    <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} text-white flex-shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Contenido */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="body-md font-semibold text-gray-900 group-hover:text-[#395ef4] transition-colors">
                          {step.title}
                        </h3>
                        <span className="caption text-[#395ef4] bg-blue-50 px-2 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="body-sm text-gray-600">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA unificado */}
        <motion.div
          className="text-center bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-md text-gray-900 mb-3">
            ¿Te gusta nuestra metodología?
          </h3>
          <p className="body-md text-gray-600 mb-6 max-w-xl mx-auto">
            Más de 50 empresas ya confiaron en nuestro proceso. Es tu turno de experimentar resultados reales.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group bg-gradient-to-r from-[#395ef4] to-blue-600 hover:from-[#2f4bd6] hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto flex items-center justify-center gap-2 body-md">
              Comenzar mi proyecto
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-medium py-3 px-6 rounded-xl transition-all duration-300 w-full sm:w-auto hover:bg-gray-50 body-md">
              Ver casos de éxito
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}