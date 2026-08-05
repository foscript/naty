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

export function Footer() {
  return (
    <footer className='border-t w-full px-6 py-6 sm:py-4.5 bg-background flex items-center'>
      <Link to='/' className='text-xl font-medium text-muted-foreground'>{env.appName}</Link>

      <div className='ml-auto flex items-center gap-2.5'>
        {env.social?.map((social) => (
          <SocialIcon key={social.link} href={social.link} name={social.name} icon={social.icon} />
        ))}
      </div>
    </footer>
  )
}
