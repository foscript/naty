'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import Script from 'next/script'

export function ThemeProvider({ ...props }: React.ComponentProps<typeof NextThemeProvider>) {
  return (
    <>
      <Script id='theme' strategy='beforeInteractive' />
      <NextThemeProvider {...props} /> 
    </>
  )
}
