import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Welcome to Our Platform',
  description: 'Transform your digital products with our AI-powered solutions'
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
} 