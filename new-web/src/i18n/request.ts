import { getRequestConfig } from 'next-intl/server'
import { env } from '@/lib/env'

export default getRequestConfig(async ({ requestLocale }) => {
  const { locales, defaultLocale } = env
  let locale = await requestLocale

  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale
  }

  return {
    locale,
    messages: (await import(`@/i18n/${locale}.json`)).default
  }
})
