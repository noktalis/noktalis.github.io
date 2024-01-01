/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/experiment",
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
