import { getTranslations } from "next-intl/server"
import { config } from '@/lib/config'

// Type
import type { Metadata } from "next"

// Component
import { NextIntlClientProvider } from 'next-intl'

export async function generateStaticParams() {
  return config.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: LayoutProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metaData" })

  return {
    description: t('description')
  }
}

export default async function Layout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params

  return (
    <NextIntlClientProvider>
      {children}
    </NextIntlClientProvider>
  )
}
