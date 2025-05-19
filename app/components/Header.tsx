"use client"

import Link from 'next/link'
import { Logo } from '@/components/ui/logo'
import { useState, useEffect } from 'react'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { usePathname } from 'next/navigation'
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { ChevronDown, ArrowRight, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const serviceItems = [
  {
    label: 'Vitamin A - Awareness',
    href: '/services/vitamin-a',
    description: 'Diagnose usability issues, uncover opportunities, and set a baseline for growth.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 4v4m0 8v4M4 12h4m8 0h4" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    )
  },
  {
    label: 'Vitamin C - Clarity',
    href: '/services/vitamin-c',
    description: 'Refine priorities, map user journeys, and align your vision with reality.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    label: 'Vitamin D - Direction',
    href: '/services/vitamin-d',
    description: 'Build scalable roadmaps, create design systems, and structure your product for success.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18l6-6-6-6" />
      </svg>
    )
  },
  {
    label: 'Vitamin E - Execution',
    href: '/services/vitamin-e',
    description: 'Deliver high-quality designs, prototypes, and handoffs that bring your ideas to life.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    label: 'Vitamin K - Continuity',
    href: '/services/vitamin-k',
    description: 'Maintain stability with ongoing support, bug fixes, and performance tracking.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  },
  {
    label: 'Vitamin P - Progress',
    href: '/services/vitamin-p',
    description: 'Track and optimize to ensure your growth trajectory continues upward.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  },
  {
    label: 'Vitamin I - Innovation',
    href: '/services/vitamin-i',
    description: 'Explore new technologies and approaches to keep your product ahead of the curve.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
        label: 'Our Story',
        href: '/about/our-story',
        description: 'Learn about our journey and mission',
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 8a2 2 0 100-4 2 2 0 000 4z" />
            <path d="M12 20V8" />
            <path d="M5 12h14" />
          </svg>
        )
      },
      {
        label: 'Team',
        href: '/about/team',
        description: 'Meet our passionate team of experts',
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 00-3-3.87" />
            <path d="M16 3.13a4 4 0 010 7.75" />
          </svg>
        )
      },
      {
        label: 'Why Work With Us?',
        href: '/about/why-work-with-us',
        description: 'Discover what makes our approach unique and effective',
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        )
      },
      {
        label: 'Design Process',
        href: '/about/design-process',
        description: 'Discover our systematic approach to product transformation',
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            <path d="M12 12v.01M8 12v.01M16 12v.01" />
          </svg>
        )
      },
      {
        label: 'How We Work Together',
        href: '/about/how-we-work-together',
        description: 'Learn about our collaboration process and engagement models',
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 14l5-5-5-5" />
            <path d="M4 20v-7a4 4 0 014-4h12" />
          </svg>
        )
      },
      {
        label: 'Impact',
        href: '/about/impact',
        description: "See the results and transformations we've delivered",
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 20h.01" />
            <path d="M7 20v-4" />
            <path d="M12 20v-8" />
            <path d="M17 20V8" />
            <path d="M22 4v16" />
          </svg>
        )
      },
      {
        label: 'Case Studies',
        href: '/about/case-studies',
        description: 'Explore detailed success stories and transformations',
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <path d="M16 17L21 12L16 7" />
            <path d="M21 12H9" />
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
  { label: 'Outcomes Canvas', href: '/outcomes-canvas' },
  { 
    label: 'Services', 
    href: '/services',
    children: serviceItems
  },
  { label: 'Products', href: '/products' },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      {
        label: 'Resource Hub',
        href: '/resources',
        description: 'Guides, tools, and expert insights',
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 20h9" />
            <path d="M12 4h9" />
            <rect x="3" y="8" width="13" height="8" rx="1" />
          </svg>
        )
      },
      {
        label: 'Style Guide',
        href: '/resources/style-guide',
        description: 'Visual standards and component reference',
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 20h9" />
            <path d="M12 4h9" />
            <rect x="3" y="8" width="13" height="8" rx="1" />
          </svg>
        )
      }
    ]
  }
]

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isBusinessHours, setIsBusinessHours] = useState(false)
  const pathname = usePathname()
  const isScrollingDown = useScrollDirection()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)

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
      
      // Update scroll progress indicator
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setScrollProgress(scrolled)
      
      // Track which section is currently in view
      const sections = document.querySelectorAll('section[id]')
      
      let currentSection = ""
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).offsetHeight
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id') || ""
        }
      })
      
      setActiveSection(currentSection)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mounted])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-300 ${isScrollingDown ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
      >
        {/* Availability Bar */}
        <div className="hidden sm:block h-6 sm:h-8 bg-background/95 backdrop-blur-sm border-b border-border/10">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 h-full">
            <div className="flex items-center justify-between h-full">
              <div className="flex items-center text-xs sm:text-sm text-muted-foreground/50">
                <Link 
                  href="/about/availability"
                  className="flex items-center gap-1 sm:gap-2 group hover:text-muted-foreground transition-all duration-200"
                >
                  <div className="relative flex items-center w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 group-hover:scale-125">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-green-500" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500 opacity-40 [animation:wave_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500 opacity-25 [animation:wave_4s_cubic-bezier(0.4,0,0.6,1)_infinite_1.3s]" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500 opacity-15 [animation:wave_4s_cubic-bezier(0.4,0,0.6,1)_infinite_2.6s]" />
                  </div>
                  <span className="hidden sm:inline">Available for projects</span>
                  <span className="sm:hidden">Available</span>
                </Link>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="transform origin-center scale-[0.7] sm:scale-[0.8] hover:scale-[0.75] sm:hover:scale-[0.85] transition-transform">
                  <ThemeToggle />
                </div>
                <div className="w-px h-3 sm:h-4 bg-border/50"></div>
                <div className="transform origin-center scale-[0.7] sm:scale-[0.8] hover:scale-[0.75] sm:hover:scale-[0.85] transition-transform">
                  <LanguageSwitcher position="top" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-lg text-foreground h-14 sm:h-16 md:h-20' : 'bg-gradient-to-b from-background to-transparent text-foreground h-14 sm:h-16 md:h-20'}`}>
          <div className="max-w-7xl mx-auto">
            {/* Header Bar */}
            <div className={`flex items-center justify-between h-14 sm:h-16 md:h-20 px-3 sm:px-6 ${isScrolled ? 'border-b border-border/10' : ''}`}>
              {/* Logo */}
              <Link 
                href="/" 
                className="flex items-center flex-shrink-0 transition-transform hover:scale-105 focus:scale-105 focus:outline-none md:flex-grow-0 flex-grow-0 text-center justify-center sm:justify-start"
                aria-label="Digital Vitamins Home"
              >
                <div className="inline-flex items-center" style={{ gap: '6px' }}>
                  <Logo className="transition-colors duration-200 w-auto h-8" />
                  <span 
                    className="text-lg font-bold text-foreground tracking-tight whitespace-nowrap" 
                    style={{ 
                      lineHeight: '1',
                      paddingTop: '2px',
                      display: 'inline-block',
                      height: '18px'
                    }}
                  >
                    Digital Vitamins
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation - Always visible on desktop, hidden on mobile */}
              <nav className="hidden md:flex items-center gap-8 h-full" role="navigation">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
                  
                  if (item.children) {
                    return (
                      <div key={item.href} className="relative group h-full flex items-center">
                        <Link
                          href={item.href}
                          className={`flex items-center gap-1 relative text-foreground font-medium transition-colors group ${isActive ? 'text-primary' : 'hover:text-primary'}`}
                        >
                          {item.label}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180`} />
                          <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                        </Link>
                        <div className="absolute top-full left-0 pt-3 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200">
                          <div className="w-[800px] bg-popover/95 backdrop-blur-sm rounded-xl shadow-lg border border-border p-6">
                            <div className="mb-4">
                              <div className="font-medium text-sm uppercase text-muted-foreground mb-1">{item.label}</div>
                              <h3 className="text-xl font-medium">{item.label === 'Resources' ? 'Explore resources and visual standards' : item.label === 'About' ? 'Learn more about our approach and values' : item.label === 'Services' ? 'Choose the right vitamin for your digital product' : ''}</h3>
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                              {item.children.map((child, i) => (
                                <Link
                                  key={i}
                                  href={child.href}
                                  className="group p-3 rounded-lg hover:bg-muted/70 transition-colors flex flex-col h-full"
                                >
                                  <div className="flex items-center gap-2 mb-2">
                                    <div className="bg-primary/10 p-1.5 rounded text-primary">
                                      {child.icon}
                                    </div>
                                    <div className="font-medium text-sm">{child.label}</div>
                                  </div>
                                  <p className="text-xs text-muted-foreground">{child.description}</p>
                                </Link>
                              ))}
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
                      className={`relative text-foreground font-medium transition-colors group h-full flex items-center ${isActive ? 'text-primary' : 'hover:text-primary'}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                      <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                    </Link>
                  )
                })}
              </nav>

              {/* CTA Button */}
              <div className="hidden md:flex items-center h-full">
                <Button size="sm" asChild className="rounded-full px-4">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Placeholder for mobile menu trigger - maintaining spacing */}
              <div className="md:hidden flex items-center w-7 h-7"></div>
            </div>
          </div>
        </div>
        
        {/* Quick Jump Navigation (visible when scrolled) */}
        {isScrolled && (
          <div className="hidden lg:block fixed right-4 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-md border border-border/30 rounded-full py-2 px-1 shadow-sm">
            <div className="flex flex-col gap-3">
              {menuItems.map((item, i) => (
                item.label && (
                  <Link 
                    key={i}
                    href={item.href}
                    className="relative group"
                    aria-label={item.label}
                  >
                    <div 
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-200",
                        activeSection === item.label.toLowerCase() 
                          ? "bg-primary scale-125" 
                          : "bg-muted-foreground/40 hover:bg-muted-foreground"
                      )}
                    />
                    <span className="absolute left-full ml-2 py-1 px-2 text-xs bg-background border border-border/50 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity whitespace-nowrap">
                      {item.label}
                    </span>
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Scroll progress indicator - fixed to viewport bottom */}
      <div 
        className={`fixed bottom-0 left-0 bg-muted-foreground/60 transition-all duration-300 z-[999] shadow-[0_-1px_3px_rgba(0,0,0,0.2)] ${scrollProgress >= 99 ? 'h-5 cursor-pointer rounded-tr-md rounded-br-md' : 'h-1'}`}
        style={{ 
          width: `${scrollProgress}%`,
          opacity: isScrolled ? 1 : 0
        }}
        onClick={() => {
          if (scrollProgress >= 99) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      >
        {scrollProgress >= 99 && (
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 flex items-center justify-center text-primary-foreground">
            <span className="text-xs mr-1 font-medium">Back to top</span>
            <ChevronUp className="w-4 h-4" />
          </div>
        )}
      </div>
    </>
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