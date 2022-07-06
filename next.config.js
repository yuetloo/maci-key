/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://yuetloo.github.io/maci-key/' : '',
}

module.exports = nextConfig
