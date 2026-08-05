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

function Section({ children, className, screen }: { children: React.ReactNode; className?: string, screen?: boolean }) {
  return (
    <section className={cn(
      'w-full px-6 pb-20 sm:pb-25',
      screen && 'flex justify-center items-center min-h-svh',
      className
    )}>
      {children}
    </section>
  )
}

function App() {
  const { t } = useTranslation()

  return (
    <RootTemplate>
      <Header />

      <main>
        <Section className='flex-col gap-10 text-center bg-background pt-20 sm:pt-25 flex justify-center items-center'>
          <div className='text-left sm:text-center items-center flex flex-col gap-2'>
            <h1 className='text-3xl sm:text-[42px] font-semibold text-balance'>
              <Trans
                i18nKey='routes.index.section.first.title'
                components={[<span className='bg-muted px-1' key='0'></span>]}
              />
            </h1>

            <h2 className='text-md sm:text-lg md:max-w-[70%] font-medium sm:text-balance'>
              {t('routes.index.section.first.description')}
            </h2>
          </div>

          <div className='flex gap-4 flex-col w-full sm:flex-row sm:w-auto'>
            <Button className='px-2.5 py-4.5' asChild>
              <Link to='/templates'>
                {t('routes.index.section.first.seeTemplates')}
              </Link>
            </Button>

            <Button className='px-2.5 py-4.5' variant='outline' asChild>
              <Link to='/docs'>
                <Book className='mr-2 h-4 w-4' />
                {t('routes.index.section.first.gettingStarted')}
              </Link>
            </Button>
          </div>
        </Section>

        <Section className='grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10 lg:px-10 lg:w-[80%] mx-auto justify-items-center'>
          <img alt='Sample Image' fetchPriority="high" width={1366} height={768} className='rounded-lg sm:rounded-2xl' src='https://placehold.co/1366x768/gray/white' />
          <img alt='Sample Image' fetchPriority="high" width={1366} height={768} className='rounded-lg sm:rounded-2xl' src='https://placehold.co/1366x768/gray/white' />
          <img alt='Sample Image' fetchPriority="high" width={1366} height={768} className='rounded-lg sm:rounded-2xl' src='https://placehold.co/1366x768/gray/white' />
          <img alt='Sample Image' fetchPriority="high" width={1366} height={768} className='rounded-lg sm:rounded-2xl' src='https://placehold.co/1366x768/gray/white' />
        </Section>
      </main>

      <Footer />
    </RootTemplate>
  )
}
