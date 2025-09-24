/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // enable app router
  },
  // DO NOT use `output: "export"` for dynamic APIs
  output: undefined, // or just remove if previously set
};

module.exports = nextConfig;
