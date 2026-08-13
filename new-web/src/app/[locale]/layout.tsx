import { getTranslations } from "next-intl/server"
import { locale } from 'next/root-params'
import { notFound } from "next/navigation"
import { routing } from '@/i18n/navigation'
import { config } from '@/lib/config'
import { cn } from '@/lib/shadcn/utils'
import { Inter } from 'next/font/google'
import '@/index.css'

// Component
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from '@/components/themeProvider'

// Type
import type { Metadata } from "next"

// Shadcn Font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata')

  return {
    description: t('description'),

    title: {
      default: config.appName,
      template: `%s | ${config.appName}`
    },

    alternates: {
      languages: {
        ja: '/ja',
        en: '/en'
      }
    }
  }
}

export default async function Layout({ children }: LayoutProps<"/[locale]">) {
  const currentLocale = await locale()

  // Check locale is valid
  if(!hasLocale(routing.locales, currentLocale)) {
    notFound()
  }

  return (
    <html
      lang={currentLocale}
      className={cn('h-svh antialiased font-sans', inter.variable)}
      
      // If the disableTransitionOnChange option of ThemeProvider is enabled, don't delete it.
      // Because this option modifies the HTML on the client side.
      suppressHydrationWarning
    >
      <body className='min-h-svh bg-background text-foreground w-screen'>
        <ThemeProvider 
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        />

        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
