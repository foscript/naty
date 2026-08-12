import { getMessages, getTranslations, setRequestLocale } from "next-intl/server"
import { routing } from '@/i18n/navigation'

// Component
import { NextIntlClientProvider } from 'next-intl'

// Type
import type { Metadata } from "next"

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata')

  return {
    description: t('description')
  }
}

export default async function Layout({ children, params }: LayoutProps<"/[locale]">) {
  let { locale } = await params
  
  // Due to various factors, you need to use this function to get a smooth experience with `next-intl` in SSG mode.
  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
