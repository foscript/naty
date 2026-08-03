// Components
import { RootTemplate } from '@/components/rootTemplate'

// Hooks
import { useTranslation } from 'react-i18next'
import { useDarkMode } from 'usehooks-ts'
import { useEffect } from 'react'

export function NotfoundPage() {
  const { t } = useTranslation()
  const { isDarkMode } = useDarkMode()

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <RootTemplate className='flex flex-col justify-center items-center px-6'>
      <div className='flex items-center gap-4'>
        <h2 className='text-2xl md:text-3xl font-semibold'>404</h2>
        <h1 className='text-md md:text-xl'>{t('root.notfoundPage.message')}</h1>
      </div>
    </RootTemplate>
  )
}
