"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Menu, X } from "lucide-react";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Ecosistema", href: "#pfconnect" },
    { label: "¿Porqué Nosotros?", href: "#agencia" },
    { label: "Proceso", href: "#desarrollo" },
    { label: "Agenda", href: "#contacto" },
  ];

  const integrationLogos = [
    {
      url: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67af641f237ce2563df82508.png",
      name: "woo",
      size: "xl"
    },
    {
      url: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5ee6da9493235043e.png",
      name: "google-my-business",
      size: "xs"
    },
    {
      url: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a537d82f92fceb7e3d.png",
      name: "logo3",
      size: "lg"
    },
    {
      url: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a54325e150f16636dc.png",
      name: "logo4",
      size: "md"
    },
    {
      url: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a534b29a2b24ca6434.png",
      name: "slack",
      size: "xl"
    },
    {
      url: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5ee6da9160435043f.png",
      name: "logo6",
      size: "lg"
    },
    {
      url: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a534b29a1b3eca6435.png",
      name: "logo7",
      size: "md"
    },
    {
      url: "https://html.tailus.io/blocks/customers/openai.svg",
      name: "openai",
      size: "xl"
    },
    {
      url: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5f3bda8b1b50e5c3e.png",
      name: "zapier",
      size: "xl"
    },
    {
      url: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67abd58650fb000ed8851f30.png",
      name: "linkedin",
      size: "md"
    },
  ];

  return (
    <section id="inicio" className="relative flex flex-col min-h-screen px-4 sm:px-6 overflow-hidden">
      {/* Fondo con centro claro y azul desteñido */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
            radial-gradient(circle 800px at 50% 50%, transparent 0%, transparent 40%, rgba(59,130,246,0.15) 70%, rgba(59,130,246,0.4) 100%)
          `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%",
          backgroundColor: "#ffffff",
        }}
      />

      {/* NAVBAR UNIFICADO */}
      <header
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled
            ? "mt-6 bg-white/90 backdrop-blur-lg shadow-lg rounded-2xl py-2 px-8 w-[98%] max-w-7xl"
            : "mt-4 py-3 px-8 bg-transparent w-[98%] max-w-7xl"
        } ${
          menuOpen && !scrolled 
            ? "bg-white/95 backdrop-blur-lg shadow-lg rounded-2xl" 
            : ""
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="https://www.powerfly.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                src="/logo-color.png"
                alt="Powerfly Logo"
                width={160}
                height={60}
                priority
                className="cursor-pointer transition-transform hover:scale-105 object-contain"
              />
            </Link>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative group text-gray-700 hover:text-gray-900 transition-colors py-2 font-medium text-base"
              >
                <span>{item.label}</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#395ef4] transition-all duration-300 group-hover:w-full" style={{height: '1px'}}></span>
              </a>
            ))}
          </nav>

          {/* Socials Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://www.instagram.com/powerfly.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-gray-100 hover:text-pink-600 transition-all text-gray-600"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/company/powerfly-marketing-agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-gray-100 hover:text-blue-700 transition-all text-gray-600"
            >
              <FaLinkedin size={30} />
            </a>
          </div>

          {/* Botón Mobile */}
          <button
            className="lg:hidden p-2 rounded-lg border border-gray-300 hover:border-gray-400 text-gray-700 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-xl shadow-lg -mx-6 px-6 py-4">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-gray-900 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-all text-base border border-gray-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            {/* Socials Mobile */}
            <div className="flex items-center justify-center space-x-4 mt-6 pt-4 border-t border-gray-200">
              <a
                href="https://www.instagram.com/powerfly.agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 hover:text-pink-600 transition-all"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://www.linkedin.com/company/powerfly-marketing-agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 hover:text-blue-700 transition-all"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* HERO CONTENT UNIFICADO */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Contenido Principal */}
        <div
          className={`max-w-4xl text-gray-900 transition-all duration-700 mb-8 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Título principal unificado */}
          <h1 className="heading-xl text-gray-900 mb-8 font-bold tracking-tight">
            Todo lo que tu negocio necesita,{" "}
            <span className="text-[#395ef4]">en un solo lugar</span>
          </h1>

          {/* Subtítulo unificado */}
          <p className="body-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Con{" "}
            <span className="font-semibold text-[#395ef4]">
              Powerfly Connect (CRM)
            </span>
            , nuestros servicios de marketing y módulos independientes a medida,
            impulsamos tu empresa con soluciones digitales que crecen junto a vos.
          </p>

          {/* CTA Button unificado */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://wa.me/5493513661138?text=%C2%A1Quiero%20probar%20PowerFly%20Connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#395ef4] hover:bg-[#2f4bd6] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 w-full sm:w-auto shadow-lg transform hover:scale-105 hover:shadow-xl body-md text-center"
            >
              Probar Powerfly Connect
            </a>
          </div>

          {/* Badge de confianza */}
          <div className="text-center mb-6">
            <p className="text-gray-500 flex items-center justify-center gap-2 font-medium">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
              Más de{" "}
              <span className="text-gray-700 font-semibold">20 empresas</span> ya
              confían en Powerfly
            </p>
          </div>
        </div>

        {/* Sección de Integraciones Unificada */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-500">
              Integraciones nativas del{" "}
              <span className="hover:text-[#395ef4] transition-colors duration-300 cursor-pointer">
                CRM Powerfly Connect
              </span>
            </p>
          </div>

          {/* Carrusel optimizado */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-infinite">
              {/* Duplicamos múltiples veces para loop infinito perfecto */}
              {[...Array(6)].map((_, groupIndex) => 
                integrationLogos.map((logo, logoIndex) => {
                  const getSizeClasses = (size: string) => {
                    switch(size) {
                      case 'xl': return { width: 90, height: 45, container: 'w-28' };
                      case 'lg': return { width: 70, height: 35, container: 'w-24' };
                      case 'md': return { width: 60, height: 30, container: 'w-20' };
                      case 'sm': return { width: 45, height: 22, container: 'w-16' };
                      case 'xs': return { width: 35, height: 18, container: 'w-14' };
                      default: return { width: 60, height: 30, container: 'w-20' };
                    }
                  };
                  
                  const sizeClasses = getSizeClasses(logo.size);
                  
                  return (
                    <div
                      key={`${groupIndex}-${logoIndex}`}
                      className={`flex-shrink-0 flex items-center justify-center p-3 mx-2 sm:mx-4 ${sizeClasses.container}`}
                    >
                      <Image
                        src={logo.url}
                        alt={`Integration ${logo.name}`}
                        width={sizeClasses.width}
                        height={sizeClasses.height}
                        className="object-contain transition-all duration-300 hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator unificado */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2">
          <span className="caption text-gray-400">Scroll</span>
          <div className="w-10 h-16 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-2 h-5 bg-gray-300 rounded-full mt-1.5 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Estilos del carrusel */}
      <style jsx>{`
        @keyframes scroll-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-16.666%); }
        }
        
        .animate-scroll-infinite {
          animation: scroll-infinite 25s linear infinite;
        }
      `}</style>
    </section>
  );
}