import { getRequestConfig } from 'next-intl/server'
import { routing } from '@/i18n/navigation'
import { hasLocale } from 'next-intl'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!hasLocale(routing.locales, locale)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (await import(`@/locale/${locale}.json`)).default
  }
})
