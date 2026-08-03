import { cn } from '@/lib/shadcn/utils'
import { Link, type LinkProps } from '@tanstack/react-router'

// Hooks
import { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { useTranslation } from 'react-i18next'

// Components
import { EllipsisVertical, X, Search } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { Button } from '@/components/shadcn/ui/button'

function NavLink({ ...props }: { className?: string, to: LinkProps['to'], children: React.ReactNode }) {
  return (
    <Link
      activeProps={{ className: 'text-sidebar-primary pointer-events-none' }}
      inactiveProps={{ className: 'text-muted-foreground' }}
      {...props}
    />
  )
}

const navLinkMap: { to: LinkProps['to'], label: string }[] = [
  { to: '/', label: 'Home' },
  { to: '/docs', label: 'Docs' },
  { to: '/templates' as LinkProps['to'], label: 'Templates' },
  { to: '/licence' as LinkProps['to'], label: 'Licence' },
]

export function Header({ fixed, ...props }: { fixed?: boolean } & React.ComponentPropsWithoutRef<'header'>) {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const isSm = useMediaQuery('(min-width: 640px)')

  if (isSm && isOpen) {
    setIsOpen(false)
  }

  return (
    <div className={cn(fixed ? 'fixed' : 'sticky', isOpen && 'h-screen', 'z-100 top-0 w-full flex flex-col')} {...props}>
      <header className='border-b px-3 sm:px-6 py-3 flex items-center bg-background'>
        <div className='items-center flex'>
          {isSm ? (
            navLinkMap.map((link) => (
              <Button key={link.label} variant='ghost' asChild>
                <NavLink to={link.to}>
                  {link.label}
                </NavLink>
              </Button>
            ))
          ) : isOpen ? (
            <X className='size-6 cursor-pointer' onClick={() => setIsOpen(false)} />
          ) : (
            <EllipsisVertical className='size-6 cursor-pointer' onClick={() => setIsOpen(true)} />
          )}
        </div>

        <div className='items-center gap-2 sm:gap-4 ml-auto flex'>
          <Button variant='outline' asChild>
            <a href='https://github.com/foscript/naty' target='_blank' rel='noopener noreferrer'>
              <FaGithub />
              GitHub
            </a>
          </Button>

          <Button asChild>
            <Link to='/'>
              <Search />
              {t('components.header.searchTemplates')}
            </Link>
          </Button>
        </div>
      </header>

      {isOpen && (
        <div className='flex-1 flex flex-col gap-3 p-6 bg-background/90 shadow-none backdrop-blur'>
          {navLinkMap.map((link) => (
            <NavLink to={link.to} className='text-2xl' key={link.to}>
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}
