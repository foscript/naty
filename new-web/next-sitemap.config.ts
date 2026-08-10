import type { IConfig } from 'next-sitemap'
import { env } from './src/lib/env.ts'

const config: IConfig = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com',
  generateRobotsTxt: true,
  outDir: 'out',
  changefreq: 'weekly',
  priority: 0.5,

  transform: async (config, path) => {
    const topPath = env.locales.map((locale) => {
      return `/${locale}`
    })

    if (topPath.includes(path)) {
      return {
        loc: path,
        priority: 1.0
      }
    }
  }
}

export default config
