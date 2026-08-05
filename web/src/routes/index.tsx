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

      <Section className='flex-col gap-10 text-center bg-background pt-20 sm:pt-25 flex justify-center items-center'>
        <div className='flex flex-col gap-4 items-center'>
          <h1 className='text-3xl sm:text-[42px] font-semibold text-balance'>
            <Trans
              i18nKey='routes.index.section.first.title'
              components={[<span className='bg-muted px-2 rounded-md' key='0'></span>]}
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
            <Link to='/docs'>
              <Book className='mr-2 h-4 w-4' />
              {t('routes.index.section.first.gettingStarted')}
            </Link>
          </Button>
        </div>
      </Section>

      <Section className='grid sm:grid-cols-3 grid-cols-2 gap-7.5 md:px-25 px-10'>
        <img alt='Sample Image' className='rounded-2xl col-span-2' src='https://placehold.co/1366x768/gray/white' />
        <img alt='Sample Image' className='rounded-2xl self-end col-span-2 md:col-span-1' src='https://placehold.co/600x700/gray/white' />
        <img alt='Sample Image' className='rounded-2xl col-span-2 md:col-span-1 order-1 md:order-0' src='https://placehold.co/600x700/gray/white' />
        <img alt='Sample Image' className='rounded-2xl col-span-2' src='https://placehold.co/1366x768/gray/white' />
      </Section>

      <Footer />
    </RootTemplate>
  )
}
