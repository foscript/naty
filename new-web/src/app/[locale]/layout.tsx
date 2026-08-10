import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { redirect } from 'next/navigation'
import { env } from '@/lib/env'

export async function generateStaticParams() {
  return env.locales.map((locale) => ({ locale }))
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
  const { locales, defaultLocale } = env

  if (!locales.includes(locale)) {
    redirect(`/${defaultLocale}`)
  }

  return children
}
