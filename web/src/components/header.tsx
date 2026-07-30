import { cn } from '@/lib/shadcn/utils'
import { Link, type LinkProps } from '@tanstack/react-router'
import { EllipsisVertical, X, Search } from 'lucide-react'
import { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { Button } from '@/components/shadcn/ui/button'
import { useTranslation } from 'react-i18next'
import { FaGithub } from 'react-icons/fa'

function NavLink({ ...props }: LinkProps) {
  return (
    <Link
      activeProps={{ className: 'text-sidebar-primary' }}
      inactiveProps={{ className: 'text-muted-foreground hover:text-foreground' }}
      {...props}
    />
  )
}

const navLinks: { to: LinkProps['to'], label: string }[] = [
  { to: '/', label: 'Home' },
  { to: '/docs' as LinkProps['to'], label: 'Docs' },
  { to: '/docs/development' as LinkProps['to'], label: 'Development' },
  { to: '/licence' as LinkProps['to'], label: 'Licence' },
]

export function Header({ className, fixed, ...props }: { fixed?: boolean } & React.ComponentPropsWithoutRef<'header'>) {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const isSm = useMediaQuery('(min-width: 640px)')

  if (isSm && isOpen) {
    setIsOpen(false)
  }

  return (
    <div className={cn(fixed ? 'fixed' : 'sticky', isOpen && 'h-svh', 'z-100 top-0 w-full flex flex-col')} {...props}>
      <header className={cn(
        'border-b px-3 sm:px-5 py-3 flex items-center bg-background',
        className
      )}>
        <div className='items-center flex'>
          {isSm ? (
            navLinks.map((link) => (
              <Button key={link.label} variant='ghost' className='text-md'>
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

        <div className='items-center gap-4 ml-auto flex'>
          <a href='https://github.com/foscript/naty' target='_blank' rel='noopener noreferrer'>
            <Button variant='outline'>
              <FaGithub />
              GitHub
            </Button>
          </a>

          <Link to='/templates'>
            <Button>
              <Search />
              {t('components.header.searchTemplates')}
            </Button>
          </Link>
        </div>
      </header>

      {isOpen && (
        <div className='flex-1 flex flex-col gap-3 p-6 bg-background/90 shadow-none backdrop-blur'>
          {navLinks.map((link) => (
            <div key={link.to} className='text-2xl'>
              <NavLink to={link.to}>
                {link.label}
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
