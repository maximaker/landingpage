import { TwitterIcon, GithubIcon, MessageCircleIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from 'lucide-react'

export const SOCIAL_LINKS = [
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: <TwitterIcon className="w-5 h-5" fill="currentColor" />
  },
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: <GithubIcon className="w-5 h-5" fill="currentColor" />
  },
  {
    name: 'Discord',
    href: 'https://discord.com',
    icon: <MessageCircleIcon className="w-5 h-5" fill="currentColor" />
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: <LinkedinIcon className="w-5 h-5" fill="currentColor" />
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: <InstagramIcon className="w-5 h-5" fill="currentColor" />
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: <YoutubeIcon className="w-5 h-5" fill="currentColor" />
  }
]