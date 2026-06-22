import { cn } from '@/lib/shadcn/utils'
import { env } from '@/lib/env'

// Icons
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import { Link } from '@tanstack/react-router'
import { type IconType } from 'react-icons/lib'

export function FooterOrganism({ className }: { className?: string }) {
  function SocialIcon({ href, icon }: { href: string, icon: IconType }) {
    // Change
    const Icon = icon

    return (
      <a href={href} className='text-muted-foreground hover:text-foreground' target='_blank' rel='noopener noreferrer'>
        <Icon className='size-6' />
      </a>
    )
  }

  return (
    <footer className={cn('border-t w-full px-8 py-4 bg-background flex items-center', className)}>
      <Link to='/' className='text-xl font-medium text-muted-foreground hover:text-foreground'>{env.VITE_APP_NAME}</Link>

      <div className='ml-auto flex items-center gap-3'>
        <SocialIcon href={env.VITE_SOCIAL_GITHUB_URL} icon={FaGithub} />
        <SocialIcon href={env.VITE_SOCIAL_INSTAGRAM_URL} icon={FaInstagram} />
        <SocialIcon href={env.VITE_SOCIAL_X_URL} icon={FaXTwitter} />
      </div>
    </footer>
  )
}
