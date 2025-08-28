import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exporta HTML estático en /out
  output: "export",

  // Opcional pero recomendado para hosting estático tipo Apache/Nginx
  trailingSlash: true,

  images: {
    // Necesario cuando hacés export estático (next/image sin optimizador)
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/msgsndr/**',
      },
      {
        protocol: 'https',
        hostname: 'html.tailus.io',
        port: '',
        pathname: '/blocks/customers/**',
      },
      {
        protocol: 'https',
        hostname: 'www.powerfly.agency',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
