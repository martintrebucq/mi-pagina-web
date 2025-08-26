import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const navigationLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Ecosistema", href: "#pfconnect" },
    { label: "¿Porqué Nosotros?", href: "#agencia" },
    { label: "Proceso", href: "#desarrollo" },
    { label: "Agenda", href: "#contacto" }
  ];

  const services = [
    { label: "CRM Powerfly Connect", href: "#pfconnect" },
    { label: "Marketing Digital", href: "#agencia" },
    { label: "Desarrollo de Software", href: "#desarrollo" },
    { label: "Automatizaciones", href: "#agencia" },
    { label: "Consultoría Digital", href: "#contacto" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#0d0f15] via-[#1a1d29] to-[#0d0f15] text-gray-300 overflow-hidden">
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#395ef4]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Grid principal unificado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          {/* Columna 1: Logo + descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <Image
                src="/p-azul.webp"
                alt="Powerfly Isologo"
                width={60}
                height={20}
                className="mr-4"
              />
            </div>
            <p className="body-md leading-relaxed text-gray-400 mb-8 max-w-md">
              Transformamos empresas a través de tecnología avanzada, inteligencia artificial 
              y soluciones innovadoras que impulsan el crecimiento y la eficiencia operacional.
            </p>
            
            {/* Redes sociales unificadas */}
            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/powerfly.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-[#151823] hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/powerfly-agency"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-[#151823] hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="text-white font-semibold heading-sm mb-8 flex items-center">
              <span className="w-1 h-6 bg-[#395ef4] rounded mr-3"></span>
              Navegación
            </h3>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#395ef4] transition-colors body-md flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h3 className="text-white font-semibold heading-sm mb-8 flex items-center">
              <span className="w-1 h-6 bg-[#395ef4] rounded mr-3"></span>
              Servicios
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-[#395ef4] transition-colors body-md flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {service.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Información de contacto unificada */}
        <div className="bg-[#151823]/50 backdrop-blur-sm rounded-2xl p-8 sm:p-10 mb-6 border border-[#2a2f45]/50">
          <h3 className="text-white font-semibold heading-sm mb-8 text-center">Información de Contacto</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
            
            {/* Email */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="p-3 rounded-lg bg-[#395ef4]/20">
                <Mail className="w-5 h-5 text-[#395ef4]" />
              </div>
              <div>
                <span className="block body-sm text-gray-400 mb-2">Email</span>
                <a
                  href="mailto:martintrebucq@powerfly.agency"
                  className="text-white hover:text-[#395ef4] transition-colors body-md font-medium"
                >
                  martintrebucq@powerfly.agency
                </a>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="p-3 rounded-lg bg-[#395ef4]/20">
                <Phone className="w-5 h-5 text-[#395ef4]" />
              </div>
              <div>
                <span className="block body-sm text-gray-400 mb-2">Teléfono</span>
                <a
                  href="tel:+543513661138"
                  className="text-white hover:text-[#395ef4] transition-colors body-md font-medium"
                >
                  +54 (351) 366-1138
                </a>
              </div>
            </div>

            {/* Dirección */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="p-3 rounded-lg bg-[#395ef4]/20">
                <MapPin className="w-5 h-5 text-[#395ef4]" />
              </div>
              <div>
                <span className="block body-sm text-gray-400 mb-2">Dirección</span>
                <span className="text-white body-md font-medium">
                  Albert Brucce Sabin 5846<br />
                  Córdoba, Argentina
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Línea inferior unificada */}
      <div className="w-full bg-black/50 py-6 border-t border-[#2a2f45]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <p className="text-center body-sm text-gray-400">
              © 2025 Powerfly Software & Marketing. Todos los derechos reservados.
            </p>          
          </div>
        </div>
      </div>
    </footer>
  );
}