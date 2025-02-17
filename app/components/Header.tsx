"use client"

import Link from 'next/link'
import { Logo } from '@/components/ui/logo'
import { useState, useEffect } from 'react'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { usePathname } from 'next/navigation'
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { ChevronDown } from 'lucide-react'

const serviceItems = [
  { 
    label: 'Vitamin A - Awareness', 
    href: '/services/vitamin-a',
    description: 'Product health analysis and strategic planning',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  { 
    label: 'Vitamin B - Build', 
    href: '/services/vitamin-b',
    description: 'Development and feature enhancement',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  { 
    label: 'Vitamin C - Convert', 
    href: '/services/vitamin-c',
    description: 'Conversion optimization and revenue growth',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    label: 'Vitamin D - Deploy', 
    href: '/services/vitamin-d',
    description: 'Scaling and infrastructure optimization',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 9l-7 7-7-7" />
        <path d="M12 16V4" />
        <path d="M5 20h14" />
      </svg>
    )
  }
]

const menuItems = [
  { 
    label: 'About', 
    href: '/about',
    children: [
      {
        label: 'Overview',
        href: '/about',
        description: 'Learn about our mission, values, and team',
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        )
      },
      {
        label: 'Availability',
        href: '/about/availability',
        description: 'Check our current project capacity and availability',
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z" />
            <path d="M12 6v6l4 2" />
          </svg>
        )
      }
    ]
  },
  { 
    label: 'Services', 
    href: '/services',
    children: serviceItems
  },
  { label: 'Products', href: '/products' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' }
]

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isBusinessHours, setIsBusinessHours] = useState(false)
  const pathname = usePathname()
  const isScrollingDown = useScrollDirection()

  // Handle mounting state
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle business hours check
  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date()
      const day = now.getDay()
      const hour = now.getHours()
      const minutes = now.getMinutes()
      const currentTime = hour * 60 + minutes

      // Business hours: Monday-Friday, 9:00-19:00
      const isWorkday = day >= 1 && day <= 5
      const isWorktime = currentTime >= 9 * 60 && currentTime < 19 * 60

      setIsBusinessHours(isWorkday && isWorktime)
    }

    checkBusinessHours() // Initial check
    const interval = setInterval(checkBusinessHours, 60000) // Check every minute
    
    return () => clearInterval(interval)
  }, [])

  // Handle scroll state
  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mounted])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-300 ${isScrollingDown ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
    >
      {/* Availability Bar */}
      <div className="h-8 bg-background/95 backdrop-blur-sm border-b border-border/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center text-sm text-muted-foreground/50">
              <Link 
                href="/about/availability"
                className="flex items-center gap-2 group hover:text-muted-foreground transition-all duration-200"
              >
                <div className="relative flex items-center w-5 h-5 transition-transform duration-300 group-hover:scale-125">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-green-500" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500 opacity-40 [animation:wave_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500 opacity-25 [animation:wave_4s_cubic-bezier(0.4,0,0.6,1)_infinite_1.3s]" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500 opacity-15 [animation:wave_4s_cubic-bezier(0.4,0,0.6,1)_infinite_2.6s]" />
                </div>
                <span>Available for projects</span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div className="transform origin-center scale-[0.8] hover:scale-[0.85] transition-transform">
                <ThemeToggle />
              </div>
              <div className="w-px h-4 bg-border/50" />
              <div className="transform origin-center scale-[0.8] hover:scale-[0.85] transition-transform">
                <LanguageSwitcher position="top" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-300 ${isScrolled ? 'bg-gradient-to-b from-background to-transparent md:bg-background/60 md:backdrop-blur-lg text-foreground h-16 sm:h-20' : 'bg-gradient-to-b from-background to-transparent md:bg-transparent text-foreground h-16 sm:h-20'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header Bar */}
          <div className={`flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 ${isScrolled ? 'md:border-b md:border-border/10' : ''}`}>
            {/* Logo */}
            <Link 
              href="/" 
              className="flex sm:flex flex-shrink-0 transition-transform hover:scale-105 focus:scale-105 focus:outline-none md:flex-grow-0 flex-grow text-center justify-center sm:justify-start"
              aria-label="Digital Vitamins Home"
            >
              <Logo className="transition-colors duration-200" />
            </Link>

            {/* Desktop Navigation - Always visible on desktop, hidden on mobile */}
            <nav className="hidden md:flex items-center gap-8" role="navigation">
              {menuItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
                
                if (item.children) {
                  return (
                    <div key={item.href} className="relative group">
                      <Link
                        href={item.href}
                        className={`flex items-center gap-1 relative text-foreground font-medium transition-colors group ${isActive ? 'text-primary' : 'hover:text-primary'}`}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180`} />
                        <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                      </Link>
                      
                      <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200">
                        <div className="w-[600px] bg-popover/95 backdrop-blur-sm rounded-xl shadow-lg border border-border p-6">
                          <div className="grid grid-cols-2 gap-4">
                            {item.children.map((child) => {
                              const isChildActive = pathname === child.href
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`group/card flex items-start gap-4 p-4 rounded-lg transition-all duration-200 ${isChildActive ? 'bg-primary/10 text-primary' : 'hover:bg-muted hover:scale-[1.02]'}`}
                                >
                                  <div className="mt-1 w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary transition-colors duration-200 group-hover/card:bg-primary/20">
                                    {child.icon}
                                  </div>
                                  <div>
                                    <div className="font-medium text-base">{child.label}</div>
                                    <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{child.description}</div>
                                  </div>
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-foreground font-medium transition-colors group ${isActive ? 'text-primary' : 'hover:text-primary'}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

<style jsx global>{`
  @keyframes wave {
    0% {
      width: 2px;
      height: 2px;
      opacity: 0.4;
    }
    100% {
      width: 20px;
      height: 20px;
      opacity: 0;
    }
  }
`}</style>