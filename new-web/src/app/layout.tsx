import { config } from "@/lib/config"
import { cn } from "@/lib/shadcn/utils"
import { Inter } from "next/font/google"
import "@/app/index.css"

// Type
import type { Metadata } from "next"

// Component
import { NextIntlClientProvider } from 'next-intl'

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

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-svh antialiased font-sans", inter.variable)}
    >
      <body className="min-h-svh bg-background text-foreground w-screen">
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
