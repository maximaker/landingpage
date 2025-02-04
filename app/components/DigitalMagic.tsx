import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function DigitalMagic() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent dark:from-primary/[0.02]" />
        <div className="hero-glow absolute -inset-[10px] opacity-50 bg-gradient-to-r from-transparent via-primary/20 to-transparent dark:from-transparent dark:via-primary/10 dark:to-transparent blur-3xl transition-opacity duration-300" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="relative z-10">
            <Badge 
              variant="secondary" 
              className="mb-8 lg:mb-12 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
            >
              Available for new projects
            </Badge>
            <h2 className="text-[42px] sm:text-[56px] lg:text-[84px] leading-[0.95] tracking-tight font-bold mb-6 lg:mb-8">
              <span className="text-foreground">We create</span><br />
              <span className="text-primary">digital magic</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-[520px] mb-8 lg:mb-12 leading-relaxed">
              Transform your brand with our award-winning design studio. We blend creativity and technology to craft unforgettable digital experiences.
            </p>
            <Button 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all duration-200 rounded-full px-6"
            >
              <span>Start a Project</span>
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

            <div className="flex flex-wrap items-center gap-6 lg:gap-8 mt-12 lg:mt-16">
              {['Award 1', 'Award 2', 'Award 3'].map((award, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 group transition-colors duration-200"
                >
                  <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-card/50 dark:bg-card/40 border border-border backdrop-blur-sm flex items-center justify-center transition-colors duration-200 group-hover:border-primary/20">
                    <div className="w-5 lg:w-6 h-5 lg:h-6 bg-primary rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                    {award}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-3 sm:gap-4 mt-8 lg:mt-0">
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-card/50 dark:bg-card/40 h-32 sm:h-40 lg:h-48 rounded-2xl border border-border backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20"></div>
              <div className="bg-card/50 dark:bg-card/40 h-24 sm:h-28 lg:h-32 rounded-2xl border border-border backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20"></div>
            </div>
            <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
              <div className="bg-card/50 dark:bg-card/40 h-24 sm:h-28 lg:h-32 rounded-2xl border border-border backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20"></div>
              <div className="bg-card/50 dark:bg-card/40 h-32 sm:h-40 lg:h-48 rounded-2xl border border-border backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
