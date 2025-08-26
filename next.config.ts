import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
      // Agrega otros dominios que uses para imágenes
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