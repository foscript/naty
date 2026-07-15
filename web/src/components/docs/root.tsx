import { useTranslation } from 'react-i18next'
import { CopyButton } from '@/components/copyButton'
import { AnnounceDocsOnly } from '@/components/docs/announce'
import { sideList } from '@/routes/docs'
import { Bot } from 'lucide-react'
import { Link, useLocation } from '@tanstack/react-router'

function CopyAnnounce({ markdown }: { markdown: string }) {
  const { t } = useTranslation()

  return (
    <AnnounceDocsOnly
      icon={<Bot />}
      title={t('components.docs.root.copyAnnounce.title')}
      description={t('components.docs.root.copyAnnounce.description')}
    >
      <CopyButton text={markdown} size='sm' />
    </AnnounceDocsOnly>
  )
}

function getNavigationPair(pathname: string) {
  function getDocNavigationLinks() {
    return sideList.flatMap((section) => {
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
