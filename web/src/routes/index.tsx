import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/shadcn/ui/button'
import { cn } from '@/lib/shadcn/utils'
import { useTranslation } from 'react-i18next'

import { RootOrganism } from '@/components/organism/root'
import { HeaderOrganism } from '@/components/organism/header'

export const Route = createFileRoute('/')({
  component: App
})

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("min-h-svh w-full px-6 flex justify-center items-center", className)}>
      {children}
    </div>
  )
}

function App() {
  const { t } = useTranslation()

  return (
    <RootOrganism className="bg-grid">
      <HeaderOrganism fixed />
      <Section className="flex-col gap-6 text-center">
        <div className="flex flex-col gap-2 items-center">
          <img src="/favicon.svg" alt="Logo" className="size-8" />
          <h1 className="text-4xl font-bold">{t('routes.index.section.0.description')}</h1>
        </div>

        <div className="flex gap-4">
          <Link to="/">
            <Button className="px-3 py-5">
              {t('routes.index.section.0.seeTemplates')}
            </Button>
          </Link>
    
          <Link to="/">
            <Button className="px-3 py-5" variant="outline">
              {t('routes.index.section.0.docs')}
            </Button>
          </Link>
        </div>
      </Section>
    </RootOrganism>
  )
}
