/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production'
const repository = 'wedding-card'

const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  assetPrefix: !debug ? `/${repository}/` : '', // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: 'imgix',
    path: ['https://dev-hand.github.io/wedding-card'],
  },
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const removeImports = require('next-remove-imports')()

module.exports = removeImports(nextConfig)
