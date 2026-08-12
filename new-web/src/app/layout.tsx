import { config } from '@/lib/config'
import { cn } from '@/lib/shadcn/utils'
import { Inter } from 'next/font/google'
import '@/index.css'

// Component
import { ThemeProvider } from '@/components/themeProvider'

// Type
import type { Metadata } from 'next'

// Shadcn Font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  description: 'The easiest-to-use template ecosystem',

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

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang={config.defaultLocale}
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

        {children}
      </body>
    </html>
  )
}
