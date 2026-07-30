import { createFileRoute, Link } from '@tanstack/react-router'
import { cn } from '@/lib/shadcn/utils'
import { Book } from 'lucide-react'
import { Trans, useTranslation } from 'react-i18next'

// Components
import { RootTemplate } from '@/components/rootTemplate'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

// Shadcn
import { Button } from '@/components/shadcn/ui/button'
import { AnimatedGridPattern } from '@/components/shadcn/ui/animated-grid-pattern'

export const Route = createFileRoute('/')({
  component: App
})

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('w-full min-h-svh px-6 py-25 flex justify-center items-center', className)}>
      {children}
    </div>
  )
}

function App() {
  const { t } = useTranslation()

  return (
    <RootTemplate>
      <Header />

      <div className='relative overflow-hidden'>
        <AnimatedGridPattern
          numSquares={100}
          maxOpacity={0.1}
          duration={5}
          repeatDelay={0.5}
          className="inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 absolute overflow-hidden"
        />

        <Section className='flex-col gap-12 text-center'>
          <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-3xl sm:text-[42px] font-bold text-balance'>
              <Trans
                i18nKey='routes.index.section.title'
                components={[<span key='0' className='' />]}
              />
            </h1>

            <h2 className='text-md sm:text-lg md:max-w-[70%] font-medium sm:text-balance'>
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

        <Section className='flex-col gap-12 text-center'>
          <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-3xl sm:text-[42px] font-bold text-balance'>
              <Trans
                i18nKey='routes.index.section.title'
                components={[<span key='0' className='' />]}
              />
            </h1>

            <h2 className='text-md sm:text-lg md:max-w-[70%] font-medium sm:text-balance'>
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

        <Section className='flex-col gap-12 text-center'>
          <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-3xl sm:text-[42px] font-bold text-balance'>
              <Trans
                i18nKey='routes.index.section.title'
                components={[<span key='0' className='' />]}
              />
            </h1>

            <h2 className='text-md sm:text-lg md:max-w-[70%] font-medium sm:text-balance'>
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

        <Section className='flex-col gap-12 text-center'>
          <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-3xl sm:text-[42px] font-bold text-balance'>
              <Trans
                i18nKey='routes.index.section.title'
                components={[<span key='0' className='' />]}
              />
            </h1>

            <h2 className='text-md sm:text-lg md:max-w-[70%] font-medium sm:text-balance'>
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

        <Section className='flex-col gap-12 text-center'>
          <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-3xl sm:text-[42px] font-bold text-balance'>
              <Trans
                i18nKey='routes.index.section.title'
                components={[<span key='0' className='' />]}
              />
            </h1>

            <h2 className='text-md sm:text-lg md:max-w-[70%] font-medium sm:text-balance'>
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

        <Section className='flex-col gap-12 text-center'>
          <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-3xl sm:text-[42px] font-bold text-balance'>
              <Trans
                i18nKey='routes.index.section.title'
                components={[<span key='0' className='' />]}
              />
            </h1>

            <h2 className='text-md sm:text-lg md:max-w-[70%] font-medium sm:text-balance'>
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

        <Section className='flex-col gap-12 text-center'>
          <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-3xl sm:text-[42px] font-bold text-balance'>
              <Trans
                i18nKey='routes.index.section.title'
                components={[<span key='0' className='' />]}
              />
            </h1>

            <h2 className='text-md sm:text-lg md:max-w-[70%] font-medium sm:text-balance'>
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
      </div>

      <Footer />
    </RootTemplate>
  )
}
