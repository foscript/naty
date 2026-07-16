import { cn } from '@/lib/shadcn/utils'
import { env } from '@/lib/env'
import { Link, type LinkProps } from '@tanstack/react-router'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

function NavLink({ to, children, className }: React.HTMLAttributes<HTMLDivElement> & { to: LinkProps['to'] }) {
  return (
    <Link
      to={to}
      className={cn('text-sm', className)}
      activeProps={{ className: 'text-sidebar-primary' }}
      inactiveProps={{ className: 'text-muted-foreground hover:text-foreground' }}
    >
      {children}
    </Link>
  )
}

const navLinks: { to: LinkProps['to'], label: string }[] = [
  { to: '/', label: 'Home' },
  { to: '/templates', label: 'Templates' },
  { to: '/docs', label: 'Docs' }
]

export function Header({ className, fixed }: { className?: string, fixed?: boolean }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const isSm = useMediaQuery('(min-width: 640px)')

  if (isSm && isOpen) {
    setIsOpen(false)
  }

  return (
    <div className={cn(fixed ? 'fixed' : 'sticky', isOpen && 'h-svh', 'bg-background z-100 top-0 w-full flex flex-col')}>
      <header className={cn(
        'border-b px-4 py-4 flex items-center',
        className
      )}>
        <Link to='/' className='flex items-center gap-2'>
          <Logo className='size-6' />
          <p className='font-semibold text-xl'>{env.appName}</p>
        </Link>

        <div className='ml-auto items-center gap-3 flex'>
          {isSm ? (
            navLinks.slice(0, 3).map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))
          ) : isOpen ? (
            <X className='size-6 cursor-pointer' onClick={() => setIsOpen(false)} />
          ) : (
            <Menu className='size-6 cursor-pointer' onClick={() => setIsOpen(true)} />
          )}
        </div>
      </header>

      {isOpen && (
        <div className='flex-1 flex flex-col gap-4 p-6'>
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className='text-2xl'>
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}
