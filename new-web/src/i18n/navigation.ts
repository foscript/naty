import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'
import { config } from '@/lib/config'

export const routing = defineRouting({
  locales: config.locales,
  defaultLocale: config.defaultLocale
})

export const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname
} = createNavigation(routing)
