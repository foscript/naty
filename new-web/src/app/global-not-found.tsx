import { routing } from '@/i18n/navigation'
import { config } from '@/lib/config'
import { cn } from '@/lib/shadcn/utils'
import { Inter } from 'next/font/google'
import '@/index.css'

// Component
import { ThemeProvider } from '@/components/themeProvider'

// Type
import type { Metadata } from "next"

// Shadcn Font
const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    description: config.defaultDescription,
    title: config.appName,

    alternates: {
      languages: {
        ja: '/ja',
        en: '/en'
      }
    }
  }
}

export default async function App() {
  return (
    <html
      lang={routing.defaultLocale}
      className={cn('antialiased font-sans', interFont.variable)}
      
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

        <div className='flex h-screen flex-col justify-center items-center px-6'>
          <div className='flex items-center gap-4'>
            <h2 className='text-2xl font-semibold'>404</h2>
            <h1 className='text-md md:text-xl'>Page not found</h1>
          </div>
        </div>
      </body>
    </html>
  )
}
