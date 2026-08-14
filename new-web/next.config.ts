import type { NextConfig } from "next"
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const config: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  typedRoutes: true,

  // SSG Settings
  output: 'export',
  images: {
    unoptimized: true
  },

  experimental: {
    // I have enabled this option because root tags such as the html tag cannot be used in the standard not-found.tsx for various reasons.
    globalNotFound: true
  }
}

export default withNextIntl(config)
