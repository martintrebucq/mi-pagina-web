"use client";
import { motion } from "framer-motion";
import { Rocket, Users, Headphones, Trophy, Zap } from "lucide-react";

export default function WhyPowerfly() {
  const differentials = [
    {
      icon: Zap,
      title: "Ecosistema Completo",
      description: "Powerfly Connect (CRM), marketing y software en un solo lugar, para centralizar y escalar tu negocio de manera integral.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Headphones,
      title: "Acompañamiento Real",
      description: "Consultorías en vivo, soporte personalizado 24/7 y seguimiento semanal de tu proyecto con nuestro equipo.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Trophy,
      title: "Experiencia Comprobada",
      description: "+50 negocios en LATAM ya confían en nosotros para digitalizar y optimizar sus operaciones con resultados medibles.",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Software + Agencia",
      description: "No solo tecnología: somos una agencia de performance con resultados reales y un enfoque 360° para tu crecimiento.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { number: "50+", label: "Empresas Transformadas" },
    { number: "20+", label: "Proyectos Activos" },
    { number: "24/7", label: "Soporte Personalizado" },
    { number: "+70", label: "Clientes satifechos" }
  ];

  return (
    <section id="agencia" className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-[#0d0f15] via-[#1a1d29] to-[#0d0f15] text-white overflow-hidden">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#395ef4]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#395ef4]/10 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header unificado */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-[#395ef4]/20 backdrop-blur-sm border border-[#395ef4]/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Rocket size={16} className="text-[#395ef4]" />
            <span className="caption text-[#395ef4]">Nuestro Diferencial</span>
          </motion.div>

          <motion.h2
            className="heading-lg text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Por qué elegir <span className="text-[#395ef4]">Powerfly</span>?
          </motion.h2>
          
          <motion.p
            className="body-lg text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            No somos solo una agencia de marketing ni solo un software. 
            Somos un <span className="font-semibold text-[#395ef4]"> ecosistema digital </span> 
            que integra tecnología, creatividad y estrategia para hacer crecer tu negocio.
          </motion.p>

          {/* Stats unificadas */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="heading-lg text-[#395ef4] mb-2">
                  {stat.number}
                </div>
                <div className="body-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Diferenciales Grid unificado */}
        <div className="grid gap-8 lg:gap-10 grid-cols-1 md:grid-cols-2 mb-20">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#151823]/80 to-[#1f2337]/80 backdrop-blur-md border border-[#2a2f45]/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(57,94,244,0.2)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Gradiente decorativo */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} opacity-80`} />
                
                {/* Elemento de fondo animado */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700`} />

                <div className="relative z-10">
                  {/* Icono unificado */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Contenido unificado */}
                  <h3 className="heading-sm text-white mb-6 group-hover:text-[#395ef4] transition-colors">
                    {item.title}
                  </h3>
                  <p className="body-md text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section unificado */}
        <motion.div
          className="text-center bg-gradient-to-r from-[#395ef4]/20 to-purple-600/20 backdrop-blur-md rounded-3xl p-10 sm:p-12 border border-[#395ef4]/30 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-md text-white mb-6">
            ¿Listo para transformar tu negocio?
          </h3>
          <p className="body-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            <span className="text-[#395ef4] font-semibold">Powerfly</span> une 
            lo mejor del software y el marketing digital para que tu empresa 
            crezca de manera inteligente y sostenible.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5493513661138?text=%C2%A1Hola!%20Quiero%20comenzar%20ahora%20con%20PowerFly"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#395ef4] to-blue-600 hover:from-[#2f4bd6] hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto body-md text-center"
            >
              Comenzar ahora
            </a>
            <a
              href="#agenda"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-medium py-4 px-8 rounded-full transition-all duration-300 w-full sm:w-auto body-md text-center"
            >
              Agendar consulta gratuita
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
