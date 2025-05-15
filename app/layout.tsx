import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './providers/theme-provider'
import { LanguageProvider } from './providers/language-provider'
import { MobileMenu } from './components/MobileMenu'
import { StickyMenu } from './components/StickyMenu'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://landingpage-gray-alpha.vercel.app'),
  title: 'Digital Vitamins - Product Health Check & Digital Solutions',
  description: 'Transform your digital product with our expert health check, strategy, and solutions. Get personalized recommendations to scale your product effectively.',
  keywords: 'digital product health, product strategy, digital transformation, UX/UI design, product optimization',
  openGraph: {
    title: 'Digital Vitamins - Product Health Check & Digital Solutions',
    description: 'Transform your digital product with our expert health check, strategy, and solutions.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Vitamins',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Vitamins - Product Health Check & Digital Solutions',
    description: 'Transform your digital product with our expert health check, strategy, and solutions.',
    images: ['/og-image.jpg'],
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background antialiased overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            {children}
            <MobileMenu items={[
              { label: 'About', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Products', href: '/products' },
              { label: 'Resources', href: '/resources' },
              { label: 'Contact', href: '/contact' }
            ]} />
            <StickyMenu />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}