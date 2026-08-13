import { getRequestConfig } from 'next-intl/server'
import { routing } from '@/i18n/navigation'
import { hasLocale } from 'next-intl'
import { locale } from 'next/root-params'

export default getRequestConfig(async () => {
  const currentLocale = await locale()

  // Check locale is valid
  if (!hasLocale(routing.locales, currentLocale)) {
    throw new Error(`Invaild locale(${currentLocale}) is detected.`)
  }

  return {
    locale: currentLocale,
    messages: (await import(`@/locale/${currentLocale}.json`)).default
  }
})
