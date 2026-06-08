import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
    disableStaticImages: false,
  },
  experimental: {
    // disable the 'N' overlay in development
    // instrumentationHook: false,
  },
};

export default nextConfig;
