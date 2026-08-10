import { getRequestConfig } from 'next-intl/server'
import { config } from '@/lib/config'

export default getRequestConfig(async ({ locale }) => {
  const { locales, defaultLocale } = config
  let targetLocale: string

  if (!locale || !locales.includes(locale)) {
    targetLocale = defaultLocale
  } else {
    targetLocale = locale
  }

  return {
    locale: targetLocale,
    messages: (await import(`@/i18n/${targetLocale}.json`)).default
  }
})
