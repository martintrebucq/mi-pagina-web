
import Hero from "./components/Hero";
import Ecosystem from "./components/Ecosystem";
import SuccessCases from "./components/SuccessCases"; // NUEVA SECCIÓN
import WhyPowerfly from "./components/WhyPowerfly";
import MetodoDeTrabajo from "./components/MetodoDeTrabajo";
import FAQ from "./components/FAQ"; // NUEVA SECCIÓN
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Componente cliente

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Ecosystem />
      <SuccessCases />  {/* ← NUEVA: Casos de éxito reales */}
      <WhyPowerfly />
      <MetodoDeTrabajo />
      <FAQ />  {/* ← NUEVA: Preguntas frecuentes */}
      <Footer />
      <ScrollToTop />  {/* ← Botón scroll to top */}
    </main>
  );
}