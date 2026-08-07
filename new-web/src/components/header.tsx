import { cn } from '@/lib/shadcn/utils'
import { env } from '@/lib/env'
import { Link, type LinkProps } from '@tanstack/react-router'

// Hooks
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { useTranslation } from 'react-i18next'

// Components
import { Button } from '@/components/shadcn/ui/button'
import { FaGithub } from 'react-icons/fa'
import { EllipsisVertical, X, Search } from 'lucide-react'

function NavLink({ link, label, ...props }: { link: LinkProps['to'], label: string, children: React.ReactNode, className?: string, }) {
  return (
    <Link
      to={link}
      aria-label={`Go ${label} page`}
      {...props}
      activeProps={{ className: 'text-primary pointer-events-none' }}
      inactiveProps={{ className: 'text-muted-foreground' }}
    />
  )
}

const navLinkMap: { link: LinkProps['to'], label: string }[] = [
  { link: '/', label: 'Home' },
  { link: '/docs', label: 'Docs' },
  { link: '/templates', label: 'Templates' },
  { link: '/infomation', label: 'Infomation' },
]

export function Header() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const isSm = useMediaQuery('(min-width: 640px)')

  // If the menu remains empty in sm state
  useEffect(() => {
    if (isSm && isOpen) {
      setIsOpen(false)
    }
  }, [isSm, isOpen])

  return (
    <div className={cn(
      'z-100 top-0 w-full flex flex-col sticky',
      isOpen && 'h-screen'
    )}>
      <header className='border-b px-4 sm:px-6 py-4 flex items-center bg-background'>
        <div className='items-center flex'>
          {/* For sm (Nav Links) */}
          {isSm && navLinkMap.map((link) => (
            <Button key={link.label} variant='ghost' asChild>
              <NavLink link={link.link} label={link.label}>
                {link.label}
              </NavLink>
            </Button>
          ))}

          {/* For not sm (Menu Button) */}
          {!isSm && (
            isOpen ? (
              <X className='size-6 cursor-pointer' onClick={() => setIsOpen(false)} />
            ) : (
              <EllipsisVertical className='size-6 cursor-pointer' onClick={() => setIsOpen(true)} />
            )
          )}
        </div>

        <div className='items-center gap-3 ml-auto flex'>
          <Button variant='outline' asChild>
            <a href={env.repositoryURL} target='_blank' rel='noopener noreferrer'>
              <FaGithub />
              GitHub
            </a>
          </Button>

          <Button asChild>
            <Link to='/templates'>
              <Search />
              {t('components.header.searchTemplates')}
            </Link>
          </Button>
        </div>
      </header>

      {isOpen && (
        <div className='flex-1 flex flex-col gap-3 p-6 bg-background/90 shadow-none backdrop-blur'>
          {navLinkMap.map((link) => (
            <NavLink key={link.label} link={link.link} label={link.label} className='text-2xl'>
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}
