import { cn } from '@/lib/shadcn/utils'
import { env } from '@/lib/env'
import { Link, useLocation, type LinkProps } from '@tanstack/react-router'

function NavLink({ to, children }: { to: LinkProps["to"], children: React.ReactNode }) {
  const { pathname } = useLocation()

  return (
    <Link 
      to={to}
      className={cn("transition-all delay-75 px-0.5 text-sm text-muted-foreground",
        pathname === to ? "text-sidebar-primary" : "hover:text-foreground"
      )}
    >
      {children}
    </Link>
  )
}

export function HeaderOrganism({ className, fixed }: { className?: string, fixed?: boolean }) {
  return (
    <header className={cn("border-b w-full px-4 py-4 bg-background flex items-center gap-10", fixed ? "fixed top-0" : "sticky", className)}>
      <Link to="/" className="flex transition-all delay-75 hover:text-muted-foreground items-center gap-2.5">
        <img src="/favicon.svg" alt={env.title} className="size-6" />
        <p className="font-semibold text-2xl">{env.title}</p>
      </Link>

      <div className="ml-auto items-center gap-2.5 hidden sm:flex">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/templates">Templates</NavLink>
        <NavLink to="/docs">Docs</NavLink>
      </div>
    </header>
  )
}
