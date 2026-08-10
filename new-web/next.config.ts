import type { NextConfig } from "next"
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const config: NextConfig = {
  reactCompiler: true,
  output: 'export',
  reactStrictMode: true,
  typedRoutes: true,

  images: {
    unoptimized: true
  }
}

export default withNextIntl(config)
