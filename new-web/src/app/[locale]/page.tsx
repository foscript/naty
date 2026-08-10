import { cn } from '@/lib/shadcn/utils'
import { buttonVariants } from '@/components/shadcn/ui/button'

// Hooks
import { useTranslations } from 'next-intl'

// Components
import Link from 'next/link'
import Image from 'next/image'
import { Book } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

function Section({ children, className, screen }: { children: React.ReactNode; className?: string, screen?: boolean }) {
  return (
    <section className={cn(
      'w-full px-8 sm:px-12',
      screen && 'flex justify-center items-center min-h-svh',
      className
    )}>
      {children}
    </section>
  )
}

export default function App() {
  const t = useTranslations('page.index')

  return (
    <div>
      <Header />

      <main className='flex flex-col gap-20 sm:gap-25 py-20 sm:py-25'>
        <Section className='flex-col gap-10 text-center bg-background flex justify-center items-center'>
          <div className='text-left sm:text-center items-center flex flex-col gap-2'>
            <h1 className='text-3xl sm:text-[42px] font-semibold text-balance'>
              {t.rich('section.title', {
                span: (chunks: React.ReactNode) => (
                  <span className='bg-foreground text-background px-1'>{chunks}</span>
                )
              })}
            </h1>

            <h2 className='text-md sm:text-lg md:max-w-[70%] font-medium sm:text-balance'>
              {t.raw('section.description')}
            </h2>
          </div>

          <div className='flex gap-4 flex-col w-full sm:flex-row sm:w-auto'>
            <Link href='/' className={buttonVariants({
              size: 'lg'
            })}>
              {t.raw('section.seeTemplates')}
            </Link>

            <Link href='/' className={buttonVariants({
              variant: 'outline',
              size: 'lg'
            })}>
              <Book />
              {t.raw('section.gettingStarted')}
            </Link>
          </div>
        </Section>

        <Section className='grid grid-cols-1 sm:grid-cols-2 gap-7.5 md:gap-10 md:px-10 md:w-[90%] lg:w-[80%] mx-auto justify-items-center'>
          <Image alt='Sample Image' fetchPriority="high" width={1366} height={768} className='rounded-lg sm:rounded-2xl' src='https://placehold.co/1366x768/gray/white' />
          <Image alt='Sample Image' fetchPriority="high" width={1366} height={768} className='rounded-lg sm:rounded-2xl' src='https://placehold.co/1366x768/gray/white' />
          <Image alt='Sample Image' fetchPriority="high" width={1366} height={768} className='rounded-lg sm:rounded-2xl' src='https://placehold.co/1366x768/gray/white' />
          <Image alt='Sample Image' fetchPriority="high" width={1366} height={768} className='rounded-lg sm:rounded-2xl' src='https://placehold.co/1366x768/gray/white' />
        </Section>
      </main>

      <Footer smart />
    </div>
  )
}
