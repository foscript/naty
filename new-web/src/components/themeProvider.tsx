'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'

export function ThemeProvider({ ...props }: React.ComponentProps<typeof NextThemeProvider>) {
  return <NextThemeProvider {...props} />
}
