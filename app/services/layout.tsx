"use client"

import { Navigation } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      {children}
      <Footer />
    </div>
  )
} 