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
  }
}

export default withNextIntl(config)
