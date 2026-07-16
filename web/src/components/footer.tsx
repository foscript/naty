import { cn } from '@/lib/shadcn/utils'
import { env } from '@/lib/env'
import { Link } from '@tanstack/react-router'
import { type IconType } from 'react-icons/lib'

export function Footer({ className }: { className?: string }) {
  function SocialIcon({ href, icon: Icon }: { href: string, icon: IconType }) {
    return (
      <a href={href} className='text-muted-foreground hover:text-foreground' target='_blank' rel='noopener noreferrer'>
        <Icon className='size-6' />
      </a>
    )
  }

  return (
    <footer className={cn('border-t w-full px-4 py-6 bg-background flex items-center', className)}>
      <Link to='/' className='text-2xl font-medium text-muted-foreground hover:text-foreground'>{env.appName}</Link>

      <div className='ml-auto flex items-center sm:gap-3 gap-4'>
        {env.social?.map((social) => (
          <SocialIcon key={social.link} href={social.link} icon={social.icon} />
        ))}
      </div>
    </footer>
  )
}
