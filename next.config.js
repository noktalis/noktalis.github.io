/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/noktalis.github.io",
  images: {
    unoptimized: true,
  },
  // experimental: {
  //   basePath: "/noktalis.github.io",
  // }
}

module.exports = nextConfig
