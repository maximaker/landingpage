"use client"

import Link from 'next/link'
import { Logo } from '@/components/ui/logo'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { useState } from 'react'
import { SOCIAL_LINKS } from '@/config/social-links'
import { FOOTER_LINKS } from '@/config/footer-links'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <footer className="md:fixed md:bottom-0 md:left-0 md:w-full bg-card dark:bg-card/95 text-foreground dark:text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Logo and Description */}
        <div className="pt-16 pb-12 border-b border-border dark:border-border/10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-sm">
              <Link href="/" className="inline-block">
                <Logo />
              </Link>
              <p className="mt-6 text-sm leading-6 text-muted-foreground dark:text-muted-foreground">
                Empowering digital products with strategic health solutions and transformative growth strategies.
              </p>
              <div className="mt-6 flex items-center space-x-4">
                {SOCIAL_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted/80 dark:hover:bg-muted/20 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Company</h3>
                <ul className="mt-4 space-y-3">
                  {FOOTER_LINKS.company.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Services</h3>
                <ul className="mt-4 space-y-3">
                  {FOOTER_LINKS.services.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Products</h3>
                <ul className="mt-4 space-y-3">
                  {FOOTER_LINKS.products.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Resources</h3>
                <ul className="mt-4 space-y-3">
                  {FOOTER_LINKS.resources.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-12 w-full max-w-2xl">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Subscribe to our newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Get the latest updates and insights delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-w-0 h-11 appearance-none rounded-lg border border-border bg-background px-4 text-base text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="h-11 px-6 rounded-lg bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm text-muted-foreground">© {currentYear} Digital Vitamins. All rights reserved.</p>
              <div className="flex items-center">
                <div className="hidden md:block w-1 h-1 mx-4 bg-border dark:bg-border/50 rounded-full"></div>
                <div className="flex space-x-6">
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Cookie Settings
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <div className="w-px h-4 bg-border dark:bg-border/50"></div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
