"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Menu, X } from "lucide-react";

// --- Overlay de flujo de datos con direcciones aleatorias sobre la grilla ---
function DataFlowOverlay({
  grid = 48,
  density = 0.28,
  minSpeed = 55,
  maxSpeed = 130,
  size = 2.1,
}: {
  grid?: number;
  density?: number;
  minSpeed?: number;
  maxSpeed?: number;
  size?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>(0);
  const particlesRef = useRef<
    {
      x: number;
      y: number;
      axis: "h" | "v";
      dir: -1 | 1;
      speed: number;
    }[]
  >([]);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const fitCanvas = (canvas: HTMLCanvasElement) => {
    const parent = canvas.parentElement!;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    const ctx = canvas.getContext("2d")!;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { w, h };
  };

  const createParticles = (w: number, h: number) => {
    const cols = Math.floor(w / grid) + 1;
    const rows = Math.floor(h / grid) + 1;
    const totalLines = cols + rows;
    const count = Math.max(10, Math.floor(totalLines * density));

    const arr: {
      x: number;
      y: number;
      axis: "h" | "v";
      dir: -1 | 1;
      speed: number;
    }[] = [];

    for (let i = 0; i < count; i++) {
      const isH = Math.random() < 0.5;
      const dir: -1 | 1 = Math.random() < 0.5 ? -1 : 1;
      const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);

      if (isH) {
        const r = Math.floor(Math.random() * rows);
        const y = r * grid + 0.5;
        const x = Math.random() * (w + grid * 2) - grid;
        arr.push({ x, y, axis: "h", dir, speed });
      } else {
        const c = Math.floor(Math.random() * cols);
        const x = c * grid + 0.5;
        const y = Math.random() * (h + grid * 2) - grid;
        arr.push({ x, y, axis: "v", dir, speed });
      }
    }

    particlesRef.current = arr;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true })!;

    const resize = () => {
      const { w, h } = fitCanvas(canvas);
      createParticles(w, h);
    };

    resize();
    window.addEventListener("resize", resize);

    let last = performance.now();

    const loop = (t: number) => {
      const dt = Math.min(0.05, (t - last) / 1000);
      last = t;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      ctx.clearRect(0, 0, w, h);

      ctx.fillStyle = "rgba(57, 94, 244, 0.9)";
      ctx.shadowColor = "rgba(57, 94, 244, 0.8)";
      ctx.shadowBlur = 6;

      for (const p of particlesRef.current) {
        const d = p.speed * dt;
        if (p.axis === "h") {
          p.x += d * p.dir;
          if (p.x < -grid) p.x = w + grid;
          if (p.x > w + grid) p.x = -grid;
        } else {
          p.y += d * p.dir;
          if (p.y < -grid) p.y = h + grid;
          if (p.y > h + grid) p.y = -grid;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 10;
        ctx.strokeStyle = "rgba(57, 94, 244, 0.45)";
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        if (p.axis === "h") {
          ctx.moveTo(p.x - size * 3 * p.dir, p.y);
          ctx.lineTo(p.x - size * 8 * p.dir, p.y);
        } else {
          ctx.moveTo(p.x, p.y - size * 3 * p.dir);
          ctx.lineTo(p.x, p.y - size * 8 * p.dir);
        }
        ctx.stroke();
        ctx.shadowBlur = 6;
      }

      requestAnimationFrame(loop);
    };

    if (!reduceMotion) {
      requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [grid, density, minSpeed, maxSpeed, size]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[1]"
      aria-hidden
    />
  );
}

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
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
    { url: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67af641f237ce2563df82508.png", name: "woo" },
    { url: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5ee6da9493235043e.png", name: "google-my-business" },
    { url: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a537d82f92fceb7e3d.png", name: "logo3" },
    { url: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a54325e150f16636dc.png", name: "logo4" },
    { url: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a534b29a2b24ca6434.png", name: "slack" },
    { url: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5ee6da9160435043f.png", name: "logo6" },
    { url: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a534b29a1b3eca6435.png", name: "logo7" },
    { url: "https://html.tailus.io/blocks/customers/openai.svg", name: "openai" },
    { url: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5f3bda8b1b50e5c3e.png", name: "zapier" },
    { url: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67abd58650fb000ed8851f30.png", name: "linkedin" },
  ];

  return (
    <section id="inicio" className="relative flex flex-col min-h-screen px-4 sm:px-6 overflow-hidden">
      {/* Fondo cuadriculado */}
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

      {/* Overlay */}
      <DataFlowOverlay grid={48} density={0.3} minSpeed={60} maxSpeed={140} size={2.1} />

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled
            ? "mt-6 bg-white/90 backdrop-blur-lg shadow-lg rounded-2xl py-2 px-4 sm:px-8 w-[98%] max-w-7xl"
            : "mt-4 py-3 px-4 sm:px-8 bg-transparent w-[98%] max-w-7xl"
        } ${menuOpen && !scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg rounded-2xl" : ""}`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="https://www.powerfly.agency" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Image
                src="/logo-color.png"
                alt="Powerfly Logo"
                width={120}
                height={44}
                priority
                className={`cursor-pointer transition-transform hover:scale-105 object-contain ${
                  scrolled ? "pt-1.5" : ""
                }`}
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
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#395ef4] transition-all duration-300 group-hover:w-full" style={{ height: "1px" }} />
              </a>
            ))}
          </nav>

          {/* Socials Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a href="https://www.instagram.com/powerfly.agency/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full hover:bg-gray-100 hover:text-pink-600 transition-all text-gray-600">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com/company/powerfly-marketing-agency/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full hover:bg-gray-100 hover:text-blue-700 transition-all text-gray-600">
              <FaLinkedin size={30} />
            </a>
          </div>

          {/* Botón Mobile */}
          <button className="lg:hidden p-2 rounded-lg border border-gray-300 hover:border-gray-400 text-gray-700 transition-all" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <nav className="lg:hidden mt-3 pt-3 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-xl shadow-lg -mx-3 sm:-mx-6 px-3 sm:px-6 py-3">
            <div className="flex flex-col space-y-2.5">
              {menuItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-gray-900 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-all text-base border border-gray-100">
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-4 mt-5 pt-3 border-t border-gray-200">
              <a href="https://www.instagram.com/powerfly.agency/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 hover:text-pink-600 transition-all">
                <FaInstagram size={22} />
              </a>
              <a href="https://www.linkedin.com/company/powerfly-marketing-agency/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 hover:text-blue-700 transition-all">
                <FaLinkedin size={22} />
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center
                      pt-28 sm:pt-36"> {/* padding top extra para que no choque con el header */}
        <div className={`max-w-4xl text-gray-900 transition-all duration-700 mb-6 sm:mb-8 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Título más contenido en mobile */}
          <h1 className="text-[28px] leading-tight sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
            Todo lo que tu negocio necesita, <span className="text-[#395ef4]">en un solo lugar</span>
          </h1>

          {/* Descripción un poco más compacta en mobile */}
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-1">
            Con <span className="font-semibold text-[#395ef4]">Powerfly Connect (CRM)</span>, nuestros servicios de marketing y módulos independientes a medida, impulsamos tu empresa con soluciones digitales que crecen junto a vos.
          </p>

          {/* CTA más chica en mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-10">
            <a
              href="https://wa.me/5493513661138?text=%C2%A1Quiero%20probar%20PowerFly%20Connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#395ef4] hover:bg-[#2f4bd6] text-white font-semibold
                         py-3 px-5 text-sm rounded-lg
                         sm:py-4 sm:px-8 sm:text-base sm:rounded-xl
                         transition-all duration-300 w-full sm:w-auto shadow-lg transform hover:scale-105 hover:shadow-xl text-center"
            >
              Probar Powerfly Connect
            </a>
          </div>

          {/* Línea “Más de 50 empresas…” reducida y en 2 renglones en mobile */}
          <div className="text-center mb-4 sm:mb-6">
            <p className="text-gray-500 font-medium text-xs sm:text-sm leading-snug max-w-[260px] sm:max-w-none mx-auto
                           sm:flex sm:items-center sm:justify-center sm:gap-2">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full align-middle mr-2 sm:mr-0" />
              <span>
                Más de <span className="text-gray-700 font-semibold">50 empresas</span>
                <br className="sm:hidden" /> ya confían en Powerfly
              </span>
            </p>
          </div>
        </div>

        {/* Integraciones (carrusel) */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-gray-500">
              Integraciones nativas del{" "}
              <span className="hover:text-[#395ef4] transition-colors duration-300 cursor-pointer">CRM Powerfly Connect</span>
            </p>
          </div>

          <div className="relative overflow-hidden select-none">
            <div className="marquee fade-mask will-change-transform">
              <div className="marquee__track">
                {integrationLogos.map((logo, i) => (
                  <div key={`a-${i}`} className="flex-shrink-0 w-28 sm:w-32 flex items-center justify-center px-4 py-3">
                    <Image
                      src={logo.url}
                      alt={`Integration ${logo.name}`}
                      width={160}
                      height={48}
                      className="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-transform duration-200"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                ))}
                {integrationLogos.map((logo, i) => (
                  <div key={`b-${i}`} className="flex-shrink-0 w-28 sm:w-32 flex items-center justify-center px-4 py-3">
                    <Image
                      src={logo.url}
                      alt={`Integration ${logo.name}`}
                      width={160}
                      height={48}
                      className="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-transform duration-200"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos del carrusel y la máscara de desvanecido */}
      <style jsx>{`
        .marquee { overflow: hidden; width: 100%; }
        .marquee__track {
          display: flex;
          width: max-content;
          animation: marquee-move 28s linear infinite;
        }
        @keyframes marquee-move {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .fade-mask {
          -webkit-mask-image: linear-gradient(to right, transparent 0, black 40px, black calc(100% - 40px), transparent 100%);
                  mask-image: linear-gradient(to right, transparent 0, black 40px, black calc(100% - 40px), transparent 100%);
          -webkit-mask-repeat: no-repeat;
                  mask-repeat: no-repeat;
        }
        @media (min-width: 640px) {
          .fade-mask {
            -webkit-mask-image: linear-gradient(to right, transparent 0, black 64px, black calc(100% - 64px), transparent 100%);
                    mask-image: linear-gradient(to right, transparent 0, black 64px, black calc(100% - 64px), transparent 100%);
          }
        }
      `}</style>
    </section>
  );
}
