import { type IconType } from 'react-icons/lib'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export const env: {
  appName: string
  social?: {
    name: string
    link: string
    icon: IconType
  }[]
} = {
  appName: 'Naty',
  social: [
    {
      name: 'github',
      link: 'https://github.com/foscript/naty/',
      icon: FaGithub
    },

    {
      name: 'instagram',
      link: 'https://www.instagram.com/foscript/',
      icon: FaInstagram
    },

    {
      name: 'x',
      link: 'https://x.com/foscript',
      icon: FaXTwitter
    }
  ]
}
