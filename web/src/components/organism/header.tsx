import { cn } from '@/lib/shadcn/utils'
import { env } from '@/lib/env'
import { Link, useLocation, type LinkProps } from '@tanstack/react-router'

export function HeaderOrganism({ className, fixed }: { className?: string, fixed?: boolean }) {
  function NavLink({ to, children }: { to: LinkProps['to'], children: React.ReactNode }) {
    const { pathname } = useLocation()

    return (
      <Link 
        to={to}
        className={cn('text-sm',
          pathname === to ? 'text-sidebar-primary' : 'hover:text-foreground text-muted-foreground'
        )}
      >
        {children}
      </Link>
    )
  }

  return (
    <header className={cn(
      'border-b w-full px-4 py-4 bg-background flex items-center',
      fixed ? 'fixed top-0' : 'sticky',
      className
    )}>
      <Link to='/' className='flex items-center gap-2'>
        <img src='/favicon.svg' alt={env.VITE_APP_NAME} className='size-6' />
        <p className='font-semibold text-2xl'>{env.VITE_APP_NAME}</p>
      </Link>

      <div className='ml-auto items-center gap-3 hidden sm:flex'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/templates'>Templates</NavLink>
        <NavLink to='/docs'>Docs</NavLink>
      </div>
    </header>
  )
}
