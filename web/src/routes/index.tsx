import { createFileRoute, Link } from '@tanstack/react-router'
import { cn } from '@/lib/shadcn/utils'
import { Trans, useTranslation } from 'react-i18next'

// Components
import { Book } from 'lucide-react'
import { Button } from '@/components/shadcn/ui/button'
import { RootTemplate } from '@/components/rootTemplate'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/')({
  component: App
})

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={cn('w-full min-h-svh px-6 flex justify-center items-center', className)}>
      {children}
    </section>
  )
}

function App() {
  const { t } = useTranslation()

  return (
    <RootTemplate>
      <Header fixed />

      <Section className='flex-col gap-10 text-center bg-background'>
        <div className='flex flex-col gap-4 items-center'>
          <h1 className='text-3xl sm:text-[42px] font-semibold text-balance'>
            <Trans
              i18nKey='routes.index.section.first.title'
              components={[<span key='0'></span>]}
            />
          </h1>

          <h2 className='text-md sm:text-lg md:max-w-[70%] font-medium sm:text-balance'>
            {t('routes.index.section.first.description')}
          </h2>
        </div>

        <div className='flex gap-4'>
          <Button className='px-2.5 py-4.5' asChild>
            <Link to='/'>
              {t('routes.index.section.first.seeTemplates')}
            </Link>
          </Button>

          <Button className='px-2.5 py-4.5' variant='outline' asChild>
            <Link to='/docs/getting-started'>
              <Book className='mr-2 h-4 w-4' />
              {t('routes.index.section.first.gettingStarted')}
            </Link>
          </Button>
        </div>
      </Section>

      <Footer />
    </RootTemplate>
  )
}
