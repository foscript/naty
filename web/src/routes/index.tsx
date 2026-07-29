import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/shadcn/ui/button'
import { AnimatedGridPattern } from '@/components/shadcn/ui/animated-grid-pattern'
import { cn } from '@/lib/shadcn/utils'
import { Book } from 'lucide-react'
import { Trans, useTranslation } from 'react-i18next'

// Components
import { RootTemplate } from '@/components/rootTemplate'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Logo } from '@/components/logo'
import { AuroraText } from '@/components/shadcn/ui/aurora-text'

export const Route = createFileRoute('/')({
  component: App
})

function App() {
  function Section({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
      <div className={cn('min-h-svh w-full p-6 flex justify-center items-center', className)}>
        {children}
      </div>
    )
  }

  const { t } = useTranslation()

  return (
    <RootTemplate>
      <Header fixed />

      <Section className='flex-col gap-12 text-center relative overflow-hidden'>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className="inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 absolute overflow-hidden"
        />

        <div className='flex flex-col gap-2 items-center'>
          <Logo className='size-10' />

          <h1 className='text-3xl mb-2 sm:text-[42px] font-bold text-balance'>
            <Trans
              i18nKey='routes.index.section.title'
              components={[<AuroraText colors={['#155dfb', '#009966']} key='0' children={null} />]}
            />
          </h1>

          <h2 className='text-sm sm:text-lg md:max-w-[70%] font-medium sm:text-balance'>
            {t('routes.index.section.description')}
          </h2>
        </div>

        <div className='flex gap-4'>
          <Link to='/templates'>
            <Button className='px-2.5 py-4.5'>
              {t('routes.index.section.seeTemplates')}
            </Button>
          </Link>

          <Link to='/'>
            <Button className='px-2.5 py-4.5' variant='outline'>
              <Book />
              {t('routes.index.section.docs')}
            </Button>
          </Link>
        </div>
      </Section>

      <Footer />
    </RootTemplate>
  )
}
