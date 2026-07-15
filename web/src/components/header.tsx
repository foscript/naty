import { cn } from '@/lib/shadcn/utils'
import { env } from '@/lib/env'
import { Link, type LinkProps } from '@tanstack/react-router'
import { Logo } from '@/components/logo'

function NavLink({ to, children }: { to: LinkProps['to'], children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className='text-sm'
      activeProps={{ className: 'text-sidebar-primary' }}
      inactiveProps={{ className: 'text-muted-foreground hover:text-foreground' }}
    >
      {children}
    </Link>
  )
}

export function Header({ className, fixed }: { className?: string, fixed?: boolean }) {
  return (
    <header className={cn(
      'border-b top-0 w-full px-4 py-4 bg-background flex items-center z-100',
      fixed ? 'fixed' : 'sticky',
      className
    )}>
      <Link to='/' className='flex items-center gap-2'>
        <Logo className='size-6' />
        <p className='font-semibold text-2xl'>{env.appName}</p>
      </Link>

      <div className='ml-auto items-center gap-3 hidden sm:flex'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/templates'>Templates</NavLink>
        <NavLink to='/docs'>Docs</NavLink>
      </div>
    </header>
  )
}
