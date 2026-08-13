import { config } from '@/lib/config'
import { Link } from '@/i18n/navigation'
import type { IconType } from 'react-icons/lib'

function SNSIcon({ href, icon: Icon }: { href: string, icon: IconType }) {
  return (
    <a href={href} className='text-muted-foreground hover:text-foreground' target='_blank' rel='noopener noreferrer'>
      <Icon className='size-5' />
    </a>
  )
}

function SmartLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer' className='border-muted-foreground font-medium border-b hover:text-foreground hover:border-foreground'>
      {children}
    </a>
  )
}

export function Footer({ smart }: { smart?: boolean }) {
  if (smart && config.social) {
    return (
      <div className='flex py-9 px-6 items-center justify-between'>
        <div className='w-full text-center text-xs leading-loose text-muted-foreground sm:text-sm'>
          Built by <SmartLink href={config.social[0].link}>Foscript</SmartLink> at <SmartLink href='https://github.com/codespaces'>Codespaces</SmartLink>. The source code is available on <SmartLink href={config.repositoryURL}>GitHub</SmartLink>.
        </div>
      </div>
    )
  }

  return (
    <footer className='border-t w-full px-7 py-6 sm:py-5 bg-background flex items-center'>
      <Link href='/' className='text-xl font-medium text-muted-foreground'>{config.appName}</Link>

      {config.social && (
        <div className='ml-auto flex items-center gap-2.5'>
          {config.social.map((social) => (
            <SNSIcon key={social.link} href={social.link} icon={social.icon} />
          ))}
        </div>
      )}
    </footer>
  )
}
