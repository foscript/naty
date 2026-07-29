import { cn } from '@/lib/shadcn/utils'
import { env } from '@/lib/env'
import { Link } from '@tanstack/react-router'
import { type IconType } from 'react-icons/lib'

function SocialIcon({ href, icon: Icon }: { href: string, icon: IconType }) {
  return (
    <a href={href} className='text-muted-foreground hover:text-foreground' target='_blank' rel='noopener noreferrer'>
      <Icon className='size-5' />
    </a>
  )
}

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn('border-t w-full px-3 py-4.5 bg-background flex items-center', className)}>
      <Link to='/' className='text-xl font-medium text-muted-foreground'>{env.appName}</Link>

      <div className='ml-auto flex items-center gap-2.5'>
        {env.social?.map((social) => (
          <SocialIcon key={social.link} href={social.link} icon={social.icon} />
        ))}
      </div>
    </footer>
  )
}
