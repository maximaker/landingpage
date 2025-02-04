/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true
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