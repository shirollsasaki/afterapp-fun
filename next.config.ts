import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/folio',
        destination: 'https://folio-afterapp.vercel.app/folio',
      },
      {
        source: '/folio/:path*',
        destination: 'https://folio-afterapp.vercel.app/folio/:path*',
      },
    ];
  },
};

export default nextConfig;
