import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function AIPortraits() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent dark:from-primary/[0.02]" />
        <div className="hero-glow absolute -inset-[10px] opacity-50 bg-gradient-to-r from-transparent via-primary/20 to-transparent dark:from-transparent dark:via-primary/10 dark:to-transparent blur-3xl transition-opacity duration-300" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <Badge 
          variant="secondary" 
          className="mb-8 lg:mb-12 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
        >
          AI-Powered Portrait Generation
        </Badge>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-24">
          <div className="flex-1 relative">
            <h2 className="text-[42px] sm:text-[56px] lg:text-[84px] leading-[0.95] tracking-tight font-bold mb-6 lg:mb-8">
              <span className="text-foreground">Transform Photos into</span><br />
              <span className="text-primary">AI Masterpieces</span>
            </h2>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-[520px] mb-8 lg:mb-12 leading-relaxed">
              Experience the future of portrait art. Our AI technology creates stunning, unique portraits that capture the essence of your photos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all duration-200 rounded-full px-6"
              >
                <span>Try it now</span>
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
                variant="secondary" 
                className="group bg-card/50 dark:bg-card/40 hover:bg-card/80 text-foreground border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-200 rounded-full px-6"
              >
                <span>View gallery</span>
                <svg 
                  className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <path d="m21 15-5-5L5 21"/>
                </svg>
              </Button>
            </div>

            {/* Stats Section */}
            <div className="space-y-8">
              {/* Artists Counter */}
              <div className="flex items-center gap-4 group">
                <div className="flex -space-x-3">
                  {[
                    { bg: 'bg-primary', delay: 'animate-delay-0' },
                    { bg: 'bg-blue-500', delay: 'animate-delay-100' },
                    { bg: 'bg-purple-500', delay: 'animate-delay-200' },
                    { bg: 'bg-green-500', delay: 'animate-delay-300' }
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className={`w-10 h-10 rounded-full ${item.bg} border-2 border-background dark:border-background ring-4 ring-background/40 dark:ring-background/40 relative z-[${4-i}] transform hover:translate-y-[-2px] transition-transform cursor-pointer backdrop-blur-sm`} 
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-foreground">1M+</span>
                    <span className="text-sm font-medium text-primary">artists</span>
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">joined our community</span>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-8">
                <div className="group cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 group-hover:scale-150 transition-transform duration-200" />
                    <span className="text-xl font-bold text-foreground">50K+</span>
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">unique styles</span>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-200" />
                    <span className="text-xl font-bold text-foreground">10s</span>
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">generation time</span>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-150 transition-transform duration-200" />
                    <span className="text-xl font-bold text-foreground">4.9/5</span>
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">user rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Portrait Gallery */}
          <div className="flex-1 grid grid-cols-2 gap-4 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent dark:from-primary/[0.02] rounded-3xl -z-10" />
            
            {/* Portrait Illustrations */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl border border-border hover:border-primary/20 overflow-hidden bg-card/50 dark:bg-card/40 backdrop-blur-sm group transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5 cursor-pointer">
                <svg className="w-full h-full transform group-hover:scale-105 transition-transform" viewBox="0 0 300 400" fill="none">
                  <rect width="300" height="400" className="fill-muted dark:fill-muted/20" />
                  <circle cx="150" cy="120" r="60" className="fill-muted-foreground/10 dark:fill-muted-foreground/5" />
                  <path d="M110 180s20-20 40-20 40 20 40 20" className="stroke-primary" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="120" cy="110" r="8" className="fill-primary" />
                  <circle cx="180" cy="110" r="8" className="fill-primary" />
                  <path d="M150 140v20M140 150h20" className="stroke-primary" strokeWidth="4" strokeLinecap="round" />
                  <rect x="50" y="220" width="200" height="150" rx="8" className="fill-primary/20" />
                  <path d="M70 240h160M70 260h160M70 280h160" className="stroke-primary/30" strokeWidth="2" />
                </svg>
              </div>
              <div className="relative aspect-[3/4] rounded-2xl border border-border hover:border-primary/20 overflow-hidden bg-card/50 dark:bg-card/40 backdrop-blur-sm group transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5 cursor-pointer">
                <svg className="w-full h-full transform group-hover:scale-105 transition-transform" viewBox="0 0 300 400" fill="none">
                  <rect width="300" height="400" className="fill-muted dark:fill-muted/20" />
                  <circle cx="150" cy="120" r="60" className="fill-muted-foreground/10 dark:fill-muted-foreground/5" />
                  <path d="M130 110h40M130 130s10 20 20 20 20-20 20-20" className="stroke-primary" strokeWidth="4" strokeLinecap="round" />
                  <rect x="50" y="220" width="200" height="150" rx="8" className="fill-primary/20" />
                  <path d="M70 240h160M70 260h160M70 280h160" className="stroke-primary/30" strokeWidth="2" />
                </svg>
              </div>
            </div>
            
            <div className="space-y-4 pt-8">
              <div className="relative aspect-[3/4] rounded-2xl border border-border hover:border-primary/20 overflow-hidden bg-card/50 dark:bg-card/40 backdrop-blur-sm group transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5 cursor-pointer">
                <svg className="w-full h-full transform group-hover:scale-105 transition-transform" viewBox="0 0 300 400" fill="none">
                  <rect width="300" height="400" className="fill-muted dark:fill-muted/20" />
                  <circle cx="150" cy="120" r="60" className="fill-muted-foreground/10 dark:fill-muted-foreground/5" />
                  <path d="M110 110h30M160 110h30" className="stroke-primary" strokeWidth="4" strokeLinecap="round" />
                  <path d="M150 140s-20 20-40 10M150 140s20 20 40 10" className="stroke-primary" strokeWidth="4" strokeLinecap="round" />
                  <rect x="50" y="220" width="200" height="150" rx="8" className="fill-primary/20" />
                  <path d="M70 240h160M70 260h160M70 280h160" className="stroke-primary/30" strokeWidth="2" />
                </svg>
              </div>
              <div className="relative aspect-[3/4] rounded-2xl border border-border hover:border-primary/20 overflow-hidden bg-card/50 dark:bg-card/40 backdrop-blur-sm group transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5 cursor-pointer">
                <svg className="w-full h-full transform group-hover:scale-105 transition-transform" viewBox="0 0 300 400" fill="none">
                  <rect width="300" height="400" className="fill-muted dark:fill-muted/20" />
                  <circle cx="150" cy="120" r="60" className="fill-muted-foreground/10 dark:fill-muted-foreground/5" />
                  <circle cx="120" cy="110" r="8" className="fill-primary" />
                  <circle cx="180" cy="110" r="8" className="fill-primary" />
                  <path d="M120 150q30 20 60 0" className="stroke-primary" strokeWidth="4" strokeLinecap="round" />
                  <rect x="50" y="220" width="200" height="150" rx="8" className="fill-primary/20" />
                  <path d="M70 240h160M70 260h160M70 280h160" className="stroke-primary/30" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
