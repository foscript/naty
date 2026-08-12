import type { IConfig } from 'next-sitemap'
import { config as projectConfig } from './src/lib/config.ts'

const config: IConfig = {
  siteUrl: projectConfig.baseURL,
  generateRobotsTxt: true,
  outDir: 'out',
  changefreq: 'weekly',
  priority: 0.5,

  transform: async (_config, path) => {
    const topPath = projectConfig.locales.map((locale) => {
      return `/${locale}`
    })

    // Confirm language page
    if (topPath.includes(path)) {
      return {
        loc: path,
        priority: 1
      }
    }
  }
}

export default config
