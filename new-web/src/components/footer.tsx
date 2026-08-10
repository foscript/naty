'use client'

import { config } from '@/lib/config'

// Type
import type { IconType } from 'react-icons/lib'

// Component
import Link from 'next/link'

function SnsIcon({ href, icon: Icon, name }: { href: string, icon: IconType, name:string }) {
  return (
    <a href={href} className='text-muted-foreground hover:text-foreground' aria-label={`See ${name}'s profile`} target='_blank' rel='noopener noreferrer'>
      <Icon className='size-5' />
    </a>
  )
}

function SmartLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer' className='font-medium underline underline-offset-4'>
      {children}
    </a>
  )
}

export function Footer({ smart }: { smart?: boolean }) {
  if (smart && config.social) return (
    <div className='flex py-9 px-6 items-center justify-between'>
      <div className='w-full text-center text-xs leading-loose text-muted-foreground sm:text-sm'>
        Built by <SmartLink href={config.social[0].link}>Foscript</SmartLink> at <SmartLink href='https://github.com/codespaces'>Codespaces</SmartLink>. The source code is available on <SmartLink href={config.repositoryURL}>GitHub</SmartLink>.
      </div>
    </div>
  )

  return (
    <footer className='border-t w-full px-7 py-6 sm:py-5 bg-background flex items-center'>
      <Link href='/' className='text-xl font-medium text-muted-foreground'>{config.appName}</Link>

      {config.social && (
        <div className='ml-auto flex items-center gap-2.5'>
          {config.social.map((social) => (
            <SnsIcon key={social.link} href={social.link} name={social.name} icon={social.icon} />
          ))}
        </div>
      )}
    </footer>
  )
}
