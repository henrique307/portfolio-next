// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  images: {
    unoptimized: true, // Necessário para exportação estática
  },
};

module.exports = nextConfig;