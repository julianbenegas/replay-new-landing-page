const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'basehub.earth' }]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')]
  }
}

module.exports = nextConfig
