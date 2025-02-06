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

  const formatTimeToLocal = (hour: number, includeTimeZone: boolean = false) => {
    const date = new Date()
    date.setUTCHours(hour, 0, 0, 0)
    return new Intl.DateTimeFormat(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZoneName: includeTimeZone ? 'short' : undefined
    }).format(date)
  }

  const getCountryFlag = () => {
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
      const locale = navigator.language
      const regionCode = new Intl.Locale(locale).maximize().region
      return regionCode ? String.fromCodePoint(...[...regionCode].map(c => c.charCodeAt(0) + 127397)) : '🌐'
    } catch (e) {
      return '🌐'
    }
  }

  const businessHours = {
    start: formatTimeToLocal(9), // 9:00 UTC
    end: formatTimeToLocal(19)   // 19:00 UTC
  }

  const isBusinessHours = () => {
    const now = new Date()
    const currentHour = now.getHours()
    const currentMinutes = now.getMinutes()
    const currentTime = currentHour * 60 + currentMinutes

    const [startHour, startMinutes] = businessHours.start.split(':').map(Number)
    const [endHour, endMinutes] = businessHours.end.split(':').map(Number)
    const startTime = startHour * 60 + startMinutes
    const endTime = endHour * 60 + endMinutes

    const day = now.getDay()
    return day >= 1 && day <= 5 && currentTime >= startTime && currentTime < endTime
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <footer className="relative bg-card dark:bg-card/95 text-foreground dark:text-foreground">
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
            {/* Contact Details & Business Hours */}
            <div>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Contact & Hours</h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                    </svg>
                    <div>
                      <p className="text-foreground font-medium">WhatsApp</p>
                      <a
                        href="https://wa.me/15551234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm md:text-muted-foreground md:hover:text-primary transition-colors block md:inline-block px-4 py-2 md:p-0 bg-primary/10 hover:bg-primary/20 md:bg-transparent rounded-lg md:rounded-none text-primary md:text-inherit font-medium md:font-normal text-center md:text-left"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <div>
                      <p className="text-foreground font-medium">Email</p>
                      <a
                        href="mailto:hello@digitalvitamins.com"
                        className="text-sm md:text-muted-foreground md:hover:text-primary transition-colors block md:inline-block px-4 py-2 md:p-0 bg-primary/10 hover:bg-primary/20 md:bg-transparent rounded-lg md:rounded-none text-primary md:text-inherit font-medium md:font-normal text-center md:text-left"
                      >
                        hello@digitalvitamins.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="border-t md:border-t-0 md:border-l border-border/10 pt-4 md:pt-0 md:pl-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm items-center">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                          <div className={`w-2 h-2 rounded-full ${isBusinessHours() ? 'bg-green-500' : 'bg-red-500'}`} />
                          <span className="text-xs text-muted-foreground">
                            {isBusinessHours() ? 'Available' : 'Closed'}
                          </span>
                        </div>
                        <span className="text-foreground font-medium">
                          {formatTimeToLocal(9, false)} - {formatTimeToLocal(19, true)} {getCountryFlag()}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Saturday - Sunday</span>
                      <span className="text-foreground font-medium">Closed</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Our support team is available during business hours to assist you.
                  </p>
                </div>
              </div>
            </div>

            
          </div>

          {/* Visual Separator */}
          <div className="my-8" />

          {/* Middle Section with Newsletter */}
          <div className="mb-4 pb-4">
            <div className="bg-muted/50 dark:bg-muted/20 rounded-2xl p-4 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-start sm:items-center">
                <div>
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 sm:mb-4" id="newsletter-heading">Subscribe to our newsletter</h3>
                  <p className="text-sm text-muted-foreground">
                    Get the latest updates and insights delivered to your inbox.
                  </p>
                </div>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3" aria-labelledby="newsletter-heading">
                  <div className="relative flex-1">
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
                      className="w-full h-11 appearance-none rounded-lg border border-border bg-background px-4 text-base text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                      placeholder="Enter your email"
                      aria-label="Email address for newsletter"
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-11 px-6 rounded-lg bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    aria-label="Subscribe to newsletter"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Section with Navigation Links */}
          <div className="py-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Company Links */}
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/press" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Press
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services Links */}
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Services</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/services/consulting" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Consulting
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/development" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/design" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/analytics" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Analytics
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Products Links */}
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Products</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/products/vitamin-a" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Vitamin A
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/vitamin-b" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Vitamin B
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/vitamin-c" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Vitamin C
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/vitamin-d" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Vitamin D
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/resources/documentation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/guides" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
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
