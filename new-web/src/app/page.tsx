'use client'

import { config } from '@/lib/config'

// Hooks
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function App() {
  const router = useRouter()
  const { defaultLocale, locales } = config

  useEffect(() => {
    const userLocale = navigator.language.split("-")[0]
    const targetLocale = locales.includes(userLocale) ? userLocale : defaultLocale

    router.replace(`/${targetLocale}`)
  }, [router])

  return null
}
