import { Button } from '@/components/ui/button'
import { Badge } from "@/components/ui/badge"

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent dark:from-primary/[0.02]" />
        <div className="hero-glow absolute -inset-[10px] opacity-50 bg-gradient-to-r from-transparent via-primary/20 to-transparent dark:from-transparent dark:via-primary/10 dark:to-transparent blur-3xl transition-opacity duration-300" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col items-center text-center">
          <Badge 
            variant="secondary" 
            className="mb-8 lg:mb-12 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
          >
            Start Your Journey
          </Badge>

          {/* Main Content */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="w-24 h-24 mb-8 text-primary mx-auto transform hover:scale-105 transition-transform duration-200">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="50" cy="50" r="45" className="opacity-20" />
                <path d="M50 25v50M25 50h50" className="opacity-40" />
                <circle cx="50" cy="50" r="20" className="text-primary" />
                <path d="M50 30a20 20 0 0 1 0 40" className="text-primary" />
                <path d="M50 30a20 20 0 0 0 0 40" className="text-primary" />
                <circle cx="50" cy="50" r="5" className="text-primary" />
              </svg>
            </div>
            
            <h2 className="text-[42px] sm:text-[56px] lg:text-[84px] leading-[0.95] tracking-tight font-bold mb-6">
              Ready to boost your <span className="text-primary">product's health</span>?
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-[520px] mx-auto mb-8 lg:mb-12 leading-relaxed">
              Join hundreds of successful companies that have transformed their digital products with our proven solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all duration-200 rounded-full px-6"
              >
                <span>Get started now</span>
                <svg 
                  className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="group bg-card/50 dark:bg-card/40 hover:bg-card/80 text-foreground border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-200 rounded-full px-6"
              >
                <span>Schedule a demo</span>
                <svg 
                  className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M15 10l5 5-5 5"/>
                  <path d="M4 4v7a4 4 0 0 0 4 4h12"/>
                </svg>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col items-center space-y-4">
              <div className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground">
                <div className="p-1 rounded-full bg-primary/[0.03] dark:bg-primary/[0.02] backdrop-blur-sm">
                  <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <span>30-day money-back guarantee</span>
              </div>
              <div className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground">
                <div className="p-1 rounded-full bg-primary/[0.03] dark:bg-primary/[0.02] backdrop-blur-sm">
                  <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <span>Enterprise-grade security</span>
              </div>
              <div className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground">
                <div className="p-1 rounded-full bg-primary/[0.03] dark:bg-primary/[0.02] backdrop-blur-sm">
                  <svg className="w-4 h-4 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4M12 8h.01"/>
                  </svg>
                </div>
                <span>24/7 priority support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
