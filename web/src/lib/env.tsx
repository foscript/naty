import { type IconType } from 'react-icons/lib'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

type Env = {
  appName: string,
  social?: {
    link: string,
    icon: IconType,
    name: string
  }[]
}

export const env: Env = {
  appName: 'Naty',
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
