import Link from 'next/link'
import { Logo } from '@/components/ui/logo'
import { useState, useEffect } from 'react'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { usePathname } from 'next/navigation'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { LanguageSwitcher } from '@/components/ui/language-switcher'

const menuItems = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
]

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isScrollingDown = useScrollDirection()
  const pathname = usePathname()

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle escape key for accessibility
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Handle click outside for mobile menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const mobileMenu = document.querySelector('[role="navigation"]')
      const menuButton = e.target as HTMLElement
      
      if (isMobileMenuOpen && mobileMenu && 
          !mobileMenu.contains(e.target as Node) && 
          !menuButton.closest('button')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-300 ${
        isScrollingDown && isScrolled ? '-translate-y-full' : 'translate-y-0'
      }`}
    >


      <div className={`transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'bg-background/90 backdrop-blur-md min-h-[65vh] text-foreground' 
          : isScrolled 
            ? 'bg-background/80 backdrop-blur-sm text-foreground h-16 sm:h-20'
            : 'bg-transparent text-foreground h-16 sm:h-20'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Header Bar */}
          <div className={`flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 ${isScrolled ? 'border-b border-border/10' : ''}`}>
            {/* Logo */}
            <Link 
              href="/" 
              className="flex-shrink-0 transition-transform hover:scale-105 focus:scale-105 focus:outline-none"
              aria-label="Digital Vitamins Home"
            >
              <Logo className="transition-colors duration-200" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" role="navigation">
              {menuItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-foreground font-medium transition-colors group ${
                      isActive ? 'text-primary' : 'hover:text-primary'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                )
              })}
              <ThemeToggle />
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMobileMenu}
                className={`group px-4 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium ${
                  isMobileMenuOpen 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-foreground/5'
                }`}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                ) : (
                  <span className="text-[0.85rem] font-bold">MENU</span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
            role="navigation"
          >
            <div className="min-h-[calc(65vh-4rem)] flex items-end justify-end py-12 px-6">
              <div className="w-full max-w-[320px] space-y-4">
                {/* Menu Items */}
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`group flex items-center justify-between py-5 px-6 rounded-xl transition-all duration-200 active:scale-98 touch-manipulation ${
                        isActive
                          ? 'bg-primary/10 text-primary shadow-sm'
                          : 'text-foreground hover:bg-muted/50'
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="text-[0.9rem] font-bold tracking-wide">{item.label}</span>
                      <svg 
                        className={`w-6 h-6 transform transition-transform duration-200 ${
                          isActive ? 'translate-x-0' : 'translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                        }`}
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  )
                })}
                {/* Theme and Language Controls */}
                <div className="flex items-center justify-between gap-4 mt-8 px-6">
                  <ThemeToggle />
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}