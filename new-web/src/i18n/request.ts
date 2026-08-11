import { getRequestConfig } from 'next-intl/server'
import { config } from '@/lib/config'

export default getRequestConfig(async ({ requestLocale: request }) => {
  const { locales, defaultLocale } = config
  const requestLocale = await request
  
  const targetLocale: string = (() => {
    if (requestLocale && locales.includes(requestLocale)) {
      return requestLocale
    } else {
      return defaultLocale
    }
  })()

  return {
    locale: targetLocale,
    messages: (await import(`@/i18n/${targetLocale}.json`)).default
  }
})
