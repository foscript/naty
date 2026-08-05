import { env } from '@/lib/env'
import { Link } from '@tanstack/react-router'
import { type IconType } from 'react-icons/lib'

function SocialIcon({ href, icon: Icon, name }: { href: string, icon: IconType, name:string }) {
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
  if (smart) return (
    <div className='flex py-8 items-center justify-between'>
      <div className='w-full px-1 text-center text-xs leading-loose text-muted-foreground sm:text-sm'>
        Built by <SmartLink href={env.social[0].link}>Foscript</SmartLink> at <SmartLink href='https://github.com/codespaces'>Codespaces</SmartLink>. The source code is available on <SmartLink href={env.repositoryURL}>GitHub</SmartLink>.
      </div>
    </div>
  )

  return (
    <footer className='border-t w-full px-6 py-6 sm:py-4.5 bg-background flex items-center'>
      <Link to='/' className='text-xl font-medium text-muted-foreground'>{env.appName}</Link>

      <div className='ml-auto flex items-center gap-2.5'>
        {env.social.map((social) => (
          <SocialIcon key={social.link} href={social.link} name={social.name} icon={social.icon} />
        ))}
      </div>
    </footer>
  )
}
