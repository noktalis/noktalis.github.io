/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/noktalis.github.io",
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
