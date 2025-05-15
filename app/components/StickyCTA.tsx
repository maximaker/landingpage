"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, PhoneCall, Video, MessageSquare, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface StickyCTAProps {
  scrollThreshold?: number
}

export function StickyCTA({ scrollThreshold = 800 }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")
  
  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past the specified threshold
      setIsVisible(window.scrollY > scrollThreshold)
      
      // Determine which section is currently in view
      const sections = document.querySelectorAll('section[id]')
      
      let current = ""
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).offsetHeight
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || ""
        }
      })
      
      setActiveSection(current)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollThreshold])
  
  // Define different CTAs for different sections
  const getCtaContent = () => {
    switch (activeSection) {
      case 'features':
        return {
          title: "Enhance your product now",
          description: "Transform your digital product with our vitamin framework",
          primaryCta: {
            text: "Schedule a consultation",
            icon: <PhoneCall className="w-4 h-4" />,
            href: "/contact"
          },
          secondaryCta: {
            text: "Watch a demo",
            icon: <Video className="w-4 h-4" />,
            href: "#demo"
          }
        }
      case 'pricing': 
        return {
          title: "Ready to get started?",
          description: "Choose a package that fits your needs",
          primaryCta: {
            text: "Get a custom quote",
            icon: <MessageSquare className="w-4 h-4" />,
            href: "/contact"
          },
          secondaryCta: {
            text: "See our packages",
            icon: <ArrowRight className="w-4 h-4" />,
            href: "#pricing"
          }
        }
      case 'case-studies':
        return {
          title: "See how we help businesses",
          description: "Browse our client success stories",
          primaryCta: {
            text: "Book your UX audit",
            icon: <Sparkles className="w-4 h-4" />,
            href: "/services/vitamin-a/ux-audit"
          },
          secondaryCta: {
            text: "View all case studies",
            icon: <ArrowRight className="w-4 h-4" />,
            href: "/case-studies"
          }
        }
      // Default CTA for other sections
      default:
        return {
          title: "Transform your digital product",
          description: "Get started with our vitamin framework",
          primaryCta: {
            text: "Book a consultation",
            icon: <PhoneCall className="w-4 h-4" />,
            href: "/contact"
          },
          secondaryCta: {
            text: "Learn more",
            icon: <ArrowRight className="w-4 h-4" />,
            href: "/services"
          }
        }
    }
  }
  
  const ctaContent = getCtaContent()
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-4 left-0 right-0 mx-auto w-full max-w-2xl px-4 z-40"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-background rounded-lg border border-border shadow-lg p-4 backdrop-blur-lg">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold">{ctaContent.title}</h3>
                <p className="text-sm text-muted-foreground">{ctaContent.description}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <Button size="sm" asChild className="rounded-full">
                  <Link href={ctaContent.primaryCta.href}>
                    {ctaContent.primaryCta.text}
                    {ctaContent.primaryCta.icon && (
                      <span className="ml-2">{ctaContent.primaryCta.icon}</span>
                    )}
                  </Link>
                </Button>
                
                <Button variant="outline" size="sm" asChild className="rounded-full">
                  <Link href={ctaContent.secondaryCta.href}>
                    {ctaContent.secondaryCta.text}
                    {ctaContent.secondaryCta.icon && (
                      <span className="ml-2">{ctaContent.secondaryCta.icon}</span>
                    )}
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Close button */}
            <Button 
              type="button"
              onClick={() => setIsVisible(false)}
              variant="ghost"
              size="icon"
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs hover:bg-background hover:text-foreground border border-border transition-colors"
              aria-label="Close sticky CTA"
            >
              ✕
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 