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
  title:
    "Powerfly Connect - CRM + Marketing + Software | Todo en un solo lugar",
  description:
    "Transforma tu negocio con Powerfly Connect: CRM completo, marketing digital y desarrollo de software. Más de 300 empresas ya confían en nosotros. Soluciones digitales que crecen contigo.",
  keywords:
    "CRM, marketing digital, software personalizado, automatizaciones, Powerfly Connect, agencia marketing, desarrollo software, Argentina, Córdoba, publicidad Meta Google, redes sociales, automatizaciones",
  authors: [{ name: "Powerfly Agency" }],
  creator: "Powerfly Agency",
  publisher: "Powerfly Agency",
  category: "Business",
  classification: "Marketing Agency",
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  openGraph: {
    title: "Powerfly Connect - Ecosistema digital completo",
    description:
      "CRM + Marketing + Software en un solo lugar. Transforma tu negocio con soluciones digitales que crecen contigo. Más de 300 empresas confían en Powerfly.",
    type: "website",
    locale: "es_AR",
    siteName: "Powerfly Agency",
    url: "https://powerfly.agency",
    images: [
      {
        url: "/logo-color.png",
        width: 1200,
        height: 630,
        alt: "Powerfly Connect - Ecosistema digital completo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Powerfly Connect - Ecosistema digital completo",
    description:
      "CRM + Marketing + Software en un solo lugar. Transforma tu negocio con soluciones digitales.",
    images: ["/logo-color.png"],
    creator: "@powerflyagency",
    site: "@powerflyagency",
  },
  alternates: {
    canonical: "https://powerfly.agency",
    languages: {
      "es-AR": "https://powerfly.agency",
      en: "https://powerfly.agency/en",
    },
  },
  other: {
    "theme-color": "#395ef4",
    "msapplication-TileColor": "#395ef4",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

// Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Powerfly Agency",
  url: "https://powerfly.agency",
  logo: "https://powerfly.agency/logo-color.png",
  description:
    "Agencia de marketing digital y desarrollo de software que ofrece soluciones integrales para empresas",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AR",
    addressLocality: "Córdoba",
    addressRegion: "Córdoba",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+54-9-351-366-1138",
    contactType: "customer service",
    availableLanguage: "Spanish",
    areaServed: "AR",
  },
  sameAs: [
    "https://www.instagram.com/powerfly.agency/",
    "https://www.linkedin.com/company/powerfly-marketing-agency/",
  ],
  service: [
    {
      "@type": "Service",
      name: "Powerfly Connect CRM",
      description:
        "CRM completo con módulos personalizados, automatizaciones e integraciones",
      provider: {
        "@type": "Organization",
        name: "Powerfly Agency",
      },
    },
    {
      "@type": "Service",
      name: "Marketing Digital",
      description:
        "Publicidad en Meta y Google, gestión de redes sociales, automatizaciones y contenido creativo",
      provider: {
        "@type": "Organization",
        name: "Powerfly Agency",
      },
    },
    {
      "@type": "Service",
      name: "Desarrollo de Software",
      description:
        "Software a medida, plataformas web, sistemas internos e integraciones API",
      provider: {
        "@type": "Organization",
        name: "Powerfly Agency",
      },
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Powerfly",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Powerfly Connect CRM",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Marketing Digital",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desarrollo de Software",
        },
      },
    ],
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo-color.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Powerfly Agency" />
        <meta name="apple-mobile-web-app-title" content="Powerfly" />
        <meta name="msapplication-TileColor" content="#395ef4" />
        <meta name="theme-color" content="#395ef4" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.className} bg-[#f8fafc] antialiased min-h-screen font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
