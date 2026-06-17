import { IconAtom } from '@/components/atom/icon'
import { cn } from '@/lib/shadcn/utils'
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

const NavLink = ({
  to,
  children
}: {
  to: string,
  children: React.ReactNode
}) => {
  return (
    <Link
      to={to}
      className="text-lg transition-all px-1 delay-75 hover:brightness-80"
      activeProps={{ className: "border-b border-foreground" }}
    >
      {children}
    </Link>
  )
}

export function HeaderOrganism({ className, fixed }: { className?: string, fixed?: boolean }) {
  const { t } = useTranslation()

  return (
    <header className={cn("border-b w-full px-4 py-4 bg-background flex items-center", fixed && "fixed top-0", className)}>
      <IconAtom />
      <div className="ml-auto items-center gap-3 hidden sm:flex">
        <NavLink to="/"> {t('components.organism.header.home')} </NavLink>
        <NavLink to="/templates"> {t('components.organism.header.templates')} </NavLink>
        <NavLink to="/docs"> {t('components.organism.header.docs')} </NavLink>
      </div>
    </header>
  )
}
