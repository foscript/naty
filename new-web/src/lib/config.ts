// Icon Component
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

// Type
import { type IconType } from 'react-icons/lib'

type Config = {
  appName: string,
  defaultDescription: string,
  baseURL: string,
  repositoryURL: string,
  locales: string[],
  defaultLocale: string,
  social?: {
    link: string,
    icon: IconType,
    name: string
  }[]
}

export const config: Config = {
  appName: 'Naty',
  defaultDescription: 'The easiest-to-use template ecosystem',
  baseURL: 'https://naty.foscript.com',
  repositoryURL: 'https://github.com/foscript/naty',
  locales: ['en', 'ja'],
  defaultLocale: 'en',
  social: [
    {
      link: 'https://github.com/foscript',
      icon: FaGithub,
      name: 'GitHub'
    },

    {
      link: 'https://www.instagram.com/foscript',
      icon: FaInstagram,
      name: 'Instagram'
    },

    {
      link: 'https://x.com/foscript',
      icon: FaXTwitter,
      name: 'X'
    }
  ]
} as const
