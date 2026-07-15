import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/shadcn/ui/button'
import { cn } from '@/lib/shadcn/utils'
import { useTranslation } from 'react-i18next'

// Components
import { RootTemplate } from '@/components/rootTemplate'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Logo } from '@/components/logo'

export const Route = createFileRoute('/')({
  component: App
})

function App() {
  function Section({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
      <div className={cn('min-h-svh w-full px-6 flex justify-center items-center', className)}>
        {children}
      </div>
    )
  }

  const { t } = useTranslation()

  return (
    <RootTemplate className='naty-bg-grid'>
      <Header fixed />

      <Section className='flex-col gap-6 text-center'>
        <div className='flex flex-col gap-2 items-center'>
          <Logo className='size-8' />
          <h1 className='text-4xl font-bold'>{t('routes.index.section.description')}</h1>
        </div>

        <div className='flex gap-4'>
          <Link to='/templates'>
            <Button className='px-2.5 py-4.5'>
              {t('routes.index.section.seeTemplates')}
            </Button>
          </Link>

          <Link to='/docs'>
            <Button className='px-2.5 py-4.5' variant='outline'>
              {t('routes.index.section.docs')}
            </Button>
          </Link>
        </div>
      </Section>

      <Footer />
    </RootTemplate>
  )
}
