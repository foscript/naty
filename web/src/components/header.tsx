import { cn } from '@/lib/shadcn/utils'
import { env } from '@/lib/env'
import { Link, type LinkProps } from '@tanstack/react-router'
import { Logo } from '@/components/logo'
import { Menu } from 'lucide-react'
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
  { to: '/docs', label: 'Docs' },
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
        <div className='flex items-center gap-3.5'>
          <Menu className='sm:hidden size-6.5 cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
          <Link to='/' className='flex items-center gap-2'>
            <Logo className='sm:size-6 size-8' />
            <p className='font-semibold sm:text-2xl text-3xl'>{env.appName}</p>
          </Link>
        </div>

        <div className='ml-auto items-center gap-3 hidden sm:flex'>
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </header>

      {isOpen && (
        <div className='flex-1 flex flex-col gap-3.5 py-2 px-4'>
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
