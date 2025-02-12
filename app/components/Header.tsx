"use client"

import Link from 'next/link'
import { Logo } from '@/components/ui/logo'
import { useState, useEffect } from 'react'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { usePathname } from 'next/navigation'
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { MobileNavigation } from './MobileNavigation'
import { useScrollDirection } from '@/hooks/useScrollDirection'

const menuItems = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' }
]

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isScrollingDown = useScrollDirection()

  // Handle mounting state
  useEffect(() => {
    setMounted(true)
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
      className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-300`}
    >
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-background/60 backdrop-blur-lg text-foreground h-16 sm:h-20' : 'bg-transparent text-foreground h-16 sm:h-20'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header Bar */}
          <div className={`flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 ${isScrolled ? 'border-b border-border/10' : ''}`}>
            {/* Logo */}
            <Link 
              href="/" 
              className="flex-shrink-0 transition-transform hover:scale-105 focus:scale-105 focus:outline-none md:flex-grow-0 flex-grow text-center"
              aria-label="Digital Vitamins Home"
            >
              <Logo className="transition-colors duration-200 mx-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" role="navigation">
              {menuItems.map((item) => {
                const isActive = pathname === item.href
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
              <ThemeToggle />
              <LanguageSwitcher />
            </nav>
          </div>

        </div>
      </div>
    </header>
  )
}