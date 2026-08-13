import { getTranslations } from "next-intl/server"

export default async function App() {
  const t = await getTranslations('page.notfound')

  return (
    <div className='flex h-screen flex-col justify-center items-center px-6'>
      <div className='flex items-center gap-4'>
        <h2 className='text-2xl font-semibold'>404</h2>
        <h1 className='text-md md:text-xl'>{t('message')}</h1>
      </div>
    </div>
  )
}
