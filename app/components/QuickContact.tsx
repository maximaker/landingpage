import { Button } from '@/components/ui/button'
import { Heading, Subheading } from "./ui/typography"

export function QuickContact() {
  return (
    <section id="quick-contact" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Heading size="3xl" className="mb-4">Prefer to reach out directly?</Heading>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Email Contact */}
          <div className="group relative bg-card/30 dark:bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl text-center">
            <div className="mb-4">
              <svg
                className="w-8 h-8 mx-auto text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <Subheading className="mb-2">Email Us</Subheading>
            <p className="text-muted-foreground mb-4">Drop us a line anytime</p>
            <Button 
              className="group bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-200 rounded-full"
              asChild
            >
              <a href="mailto:hello@digitalvitamins.com">
                hello@digitalvitamins.com
              </a>
            </Button>
          </div>

          {/* Office Location */}
          <div className="group relative bg-card/30 dark:bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl text-center">
            <div className="mb-4">
              <svg
                className="w-8 h-8 mx-auto text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <Subheading className="mb-2">Visit Us</Subheading>
            <p className="text-muted-foreground mb-4">Our office location</p>
            <span className="text-foreground">San Francisco, CA</span>
          </div>

          {/* Schedule Meeting */}
          <div className="group relative bg-card/30 dark:bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl text-center">
            <div className="mb-4">
              <svg
                className="w-8 h-8 mx-auto text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <Subheading className="mb-2">Schedule a Call</Subheading>
            <p className="text-muted-foreground mb-4">Book a meeting directly</p>
            <Button 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all duration-200 rounded-full"
            >
              Schedule a call now
              <svg 
                className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M4 5v11a4 4 0 0 0 4 4h12"/>
                <path d="M15 5l5 5-5 5"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}