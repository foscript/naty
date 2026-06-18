import { cn } from '@/lib/shadcn/utils'
import { env } from '@/lib/env'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from '@tanstack/react-router'

console.log(env)

export function FooterOrganism({ className }: { className?: string }) {
  return (
    <footer className={cn('border-t w-full px-4 py-4 bg-background flex items-center', className)}>
      <Link to="/" className='text-xl font-semibold transition-all delay-75 hover:text-muted-foreground'>{env.title}</Link>

      <div className='ml-auto flex items-center gap-3 sm:gap-4'>
        <a href={env.githubUrl} className="transition-all delay-75 text-muted-foreground hover:text-foreground" target='_blank' rel='noopener noreferrer'>
          <FaGithub className='size-6' />
        </a>

        <a href={env.instagramUrl} className="transition-all delay-75 text-muted-foreground hover:text-foreground" target='_blank' rel='noopener noreferrer'>
          <FaInstagram className='size-6' />
        </a>

        <a href={env.xUrl} className="transition-all delay-75 text-muted-foreground hover:text-foreground" target='_blank' rel='noopener noreferrer'>
          <FaXTwitter className='size-6' />
        </a>
      </div>
    </footer>
  )
}
