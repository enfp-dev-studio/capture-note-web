/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config")

const nextConfig = {
  //appDir: true,
  reactStrictMode: true,
  swcMinify: true,
  i18n,
}

module.exports = nextConfig
