"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type MenuItem = {
  label: string
  href: string
  children?: MenuItem[]
}

interface MobileMenuProps {
  items: MenuItem[]
}

export function MobileMenu({ items }: MobileMenuProps) {
  const pathname = usePathname()
  const isScrollingDown = useScrollDirection()
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  return (
    <nav 
      className={`md:hidden fixed bottom-0 left-0 right-0 bg-background/60 backdrop-blur-lg border-t border-border/10 z-[100] w-full safe-area-bottom transform transition-all duration-300 ${isScrollingDown ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
    >
      <div className="flex items-center justify-around h-16 max-w-7xl mx-auto">
        {items.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
          const isSubmenuOpen = openSubmenu === item.href

          return (
            <div key={item.href} className="relative">
              {item.children ? (
                <button
                  onClick={() => setOpenSubmenu(isSubmenuOpen ? null : item.href)}
                  className={`flex flex-col items-center justify-center w-full h-full text-xs font-medium transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
                >
                  <span className="mb-1">
                    {item.label === 'About' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    )}
                    {item.label === 'Services' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    )}
                  </span>
                  <span className="flex items-center gap-1">
                    {item.label}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isSubmenuOpen ? 'rotate-180' : ''}`} />
                  </span>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`flex flex-col items-center justify-center w-full h-full text-xs font-medium transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="mb-1">
                    {item.label === 'Products' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8M8 12h8" />
                      </svg>
                    )}
                    {item.label === 'Resources' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                    )}
                    {item.label === 'Contact' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    )}
                  </span>
                  {item.label}
                </Link>
              )}

              {/* Submenu */}
              {item.children && isSubmenuOpen && (
                <div className="absolute bottom-full left-0 w-48 mb-2 bg-popover/95 backdrop-blur-sm rounded-lg shadow-lg border border-border">
                  <div className="p-2">
                    {item.children.map((child) => {
                      const isChildActive = pathname === child.href
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2 text-sm rounded-md transition-colors ${isChildActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'}`}
                        >
                          {child.label}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </nav>
  )
}

export default MobileMenu