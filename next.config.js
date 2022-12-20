/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com/'       
      },
    ],
    domains: ['images.unsplash.com', 'wembleypark.com','mdbootstrap.com'],
  }
}