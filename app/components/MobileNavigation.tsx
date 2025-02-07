"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useScrollDirection } from '@/hooks/useScrollDirection'

interface MobileNavigationProps {
  items: Array<{
    label: string
    href: string
  }>
}

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isScrollingDown = useScrollDirection()

  return (
    <div className="md:hidden">
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 px-0"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className={`fixed inset-x-0 top-[64px] bg-background/95 backdrop-blur-lg border-b border-border/10 p-4 transform transition-all duration-300 ${isScrollingDown ? 'translate-y-[-100%] opacity-0' : 'translate-y-0 opacity-100'}`}>
          <nav className="flex flex-col space-y-4">
            {items.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-foreground font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </div>
  )
}