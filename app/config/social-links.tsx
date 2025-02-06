import { Twitter, Github, MessageCircle, Linkedin } from 'lucide-react'

export const SOCIAL_LINKS = [
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: <Twitter className="w-5 h-5" />
  },
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: <Github className="w-5 h-5" />
  },
  {
    name: 'Discord',
    href: 'https://discord.com',
    icon: <MessageCircle className="w-5 h-5" />
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: <Linkedin className="w-5 h-5" />
  }
]