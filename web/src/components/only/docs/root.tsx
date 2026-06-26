import { useTranslation } from 'react-i18next'
import { CopyButtonAtom } from '@/components/atom/copyButton'
import { AnnounceDocsOnly } from '@/components/only/docs/announce'
import { Bot } from 'lucide-react'

function CopyAnnounce({ markdown }: { markdown: string }) {
  const { t } = useTranslation()

  return (
    <AnnounceDocsOnly
      icon={<Bot />}
      title={t('components.only.docs.root.copyAnnounce.title')}
      description={t('components.only.docs.root.copyAnnounce.description')}
    >
      <CopyButtonAtom text={markdown} size='sm' />
    </AnnounceDocsOnly>
  )
}

export function RootDocsOnly({ raw, children }: { raw: string, children: React.ReactNode }) {
  return (
    <>
      <div className='flex flex-col gap-2'>
        <CopyAnnounce markdown={raw} />
      </div>

      <div className='flex flex-col gap-2'>
        {children}
      </div>
    </>
  )
}
