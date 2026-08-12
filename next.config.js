/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  
 
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
}

module.exports = nextConfig