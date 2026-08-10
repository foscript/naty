'use client'

import { cn } from '@/lib/shadcn/utils'
import { config } from '@/lib/config'
import { buttonVariants } from '@/components/shadcn/ui/button'

// Type
import type { Route } from 'next'

// Hook
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

// Component
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { EllipsisVertical, X, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'

function NavLink({ link, label, children, className }: { link: Route, label: string, children: React.ReactNode, className?: string }) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(link)

  return (
    <Link
      href={link}
      aria-label={`Go ${label} page`}
      className={cn(
        isActive ? 'text-primary pointer-events-none' : 'text-muted-foreground',
        className
      )}
    >
      {children}
    </Link>
  )
}

const navLinkMap: { link: Route, label: string }[] = [
  { link: '/', label: 'Home' },
  { link: '/', label: 'Docs' },
  { link: '/', label: 'Templates' },
  { link: '/', label: 'Infomation' },
]

export function Header() {
  const t = useTranslations('component.header')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={cn(
      'z-100 top-0 w-full flex flex-col sticky',
      isOpen && 'h-screen'
    )}>
      <header className='border-b px-4 sm:px-6 py-4 flex items-center bg-background'>
        <div className='items-center flex'>
          {/* For sm (Nav Links) */}
          <div className='sm:flex items-center hidden'>
            {navLinkMap.map((link) => (
              <NavLink
                link={link.link}
                label={link.label} 
                key={link.label} 
                className={buttonVariants({ variant: 'ghost' })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* For not sm (Menu Button) */}
          <div className='sm:hidden flex items-center'>
            {isOpen ? (
              <X className='size-6 cursor-pointer' onClick={() => setIsOpen(false)} />
            ) : (
              <EllipsisVertical className='size-6 cursor-pointer' onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>

        <div className='items-center gap-3 ml-auto flex'>
          <a href={config.repositoryURL} target='_blank' rel='noopener noreferrer' className={buttonVariants({ variant: 'outline' })}>
            <FaGithub />
            GitHub
          </a>

          <Link href='/' className={buttonVariants()}>
            <Search />
            {t('searchTemplates')}
          </Link>
        </div>
      </header>

      {isOpen && (
        <div className='flex-1 sm:hidden flex flex-col gap-3 p-6 bg-background/90 shadow-none backdrop-blur'>
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
