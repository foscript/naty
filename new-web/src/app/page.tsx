'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { env } from '@/lib/env'

export default function App() {
  const router = useRouter()
  const { defaultLocale, locales } = env

  useEffect(() => {
    const userLocale = navigator.language.split("-")[0]
    const targetLocale = locales.includes(userLocale) ? userLocale : defaultLocale

    router.replace(`/${targetLocale}`)
  }, [router])

  return null
}
