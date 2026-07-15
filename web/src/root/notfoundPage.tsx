import { cn } from '@/lib/shadcn/utils'
import { RootTemplate } from '@/components/rootTemplate'
import { Header } from '@/components/header'
import { useTranslation } from 'react-i18next'
import { useDarkMode } from 'usehooks-ts'

export function NotfoundPage() {
  const { t } = useTranslation()
  const { isDarkMode } = useDarkMode()

  return (
    <RootTemplate className={cn(
      'flex flex-col justify-center items-center px-6',
      isDarkMode && 'dark'
    )}>
      <Header fixed />
      <div className='flex items-center gap-4'>
        <h2 className='text-2xl font-bold'>404</h2>
        <h1 className='text-md'>{t('root.notfoundPage.title')}</h1>
      </div>
    </RootTemplate>
  )
}
