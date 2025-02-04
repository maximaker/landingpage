import { GithubIcon, TwitterIcon, LinkedinIcon, FacebookIcon } from 'lucide-react'

export const SOCIAL_LINKS = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/digitalvitamins',
    icon: <TwitterIcon className="h-5 w-5" fill="currentColor" />
  },
  {
    name: 'GitHub',
    href: 'https://github.com/digitalvitamins',
    icon: <GithubIcon className="h-5 w-5" fill="currentColor" />
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/digitalvitamins',
    icon: <LinkedinIcon className="h-5 w-5" fill="currentColor" />
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/digitalvitamins',
    icon: <FacebookIcon className="h-5 w-5" fill="currentColor" />
  }
]