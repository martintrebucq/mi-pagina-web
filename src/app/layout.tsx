import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Configuración optimizada de GeistSans
const geistSans = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-geist-sans",
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-geist-mono",
  preload: true,
});

export const metadata: Metadata = {
  title: "Powerfly Connect - CRM + Marketing + Software | Todo en un solo lugar",
  description: "Transforma tu negocio con Powerfly Connect: CRM completo, marketing digital y desarrollo de software. Más de 300 empresas ya confían en nosotros.",
  keywords: "CRM, marketing digital, software personalizado, automatizaciones, Powerfly Connect",
  authors: [{ name: "Powerfly Agency" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Powerfly Connect - Ecosistema digital completo",
    description: "CRM + Marketing + Software en un solo lugar. Transforma tu negocio con soluciones digitales que crecen contigo.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="es" 
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body 
        className={`${geistSans.className} bg-[#f8fafc] antialiased min-h-screen font-sans`}
      >
        {children}
      </body>
    </html>
  );
}