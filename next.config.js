/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      }
    ],
  },
  transpilePackages: [
    "@radix-ui",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
    "lucide-react"
  ],
  env: {
    PORT: "3001"
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias
    }
    return config
  }
}

module.exports = nextConfig