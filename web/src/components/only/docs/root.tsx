import { useTranslation } from 'react-i18next'
import { CopyButtonAtom } from '@/components/atom/copyButton'
import { AnnounceDocsOnly } from '@/components/only/docs/announce'
import { sideLinkList } from '@/routes/docs'
import { Bot } from 'lucide-react'
import { Link, useLocation } from '@tanstack/react-router'

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

function getNavigationPair(pathname: string) {
  function getDocNavigationLinks() {
    return sideLinkList.flatMap((section) => {
      const links = [{ title: section.title, link: section.link }]

      if (section.links) {
        links.push(...section.links.map((child) => ({ title: child.title, link: child.link })))
      }

      return links
    })
  }

  const docNavigationLinks = getDocNavigationLinks()
  const currentIndex = docNavigationLinks.findIndex((item) => item.link === pathname)

  if (currentIndex === -1) {
    return { previousLink: null, nextLink: null }
  }

  const previousLink = currentIndex > 0 ? docNavigationLinks[currentIndex - 1] : null
  const nextLink = currentIndex < docNavigationLinks.length - 1 ? docNavigationLinks[currentIndex + 1] : null

  return { previousLink, nextLink }
}

export function RootDocsOnly({ raw, children }: { raw: string, children: React.ReactNode }) {
  const { pathname } = useLocation()
  const { previousLink, nextLink } = getNavigationPair(pathname)

  return (
    <>
      <div className='flex flex-col gap-2'>
        <CopyAnnounce markdown={raw} />
      </div>

      <div className='flex flex-col gap-2'>
        {children}
      </div>

      <div className='flex items-center justify-between gap-8'>
        {previousLink && (
          <Link to={previousLink.link} className='w-50 flex flex-col gap-0.5 border px-4 py-3 rounded-md'>
            <p className='text-md'>Prev</p>
            <p className='text-md truncate'>{previousLink.title}</p>
          </Link>
        )}

        {nextLink && (
          <Link to={nextLink.link} className='w-50 flex flex-col gap-0.5 border px-4 py-3 rounded-md text-right ml-auto'>
            <p className='text-md'>Next</p>
            <p className='text-md truncate'>{nextLink.title}</p>
          </Link>
        )}
      </div>
    </>
  )
}
