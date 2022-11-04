/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com']
  },
  experimental: {
    // enable turboback
    // serverComponentsExternalPackages: true,
    // transpilePackages: true,
    allowMiddlewareResponseBody: true,
    appDir: true
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    POCKETBASE: 'http://127.0.0.1:8090'
  }
}

module.exports = nextConfig
