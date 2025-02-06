import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const METRICS = [
  { value: '150+', label: 'Products Transformed' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '10x', label: 'Average Growth' },
  { value: '24/7', label: 'Expert Support' },
]

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center py-20 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative">
        <div className="text-center space-y-8 sm:space-y-10">
          {/* Badge */}
          <div className="fade-in">
            <Badge 
              variant="secondary" 
              className="px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
            >
              Digital Product Enhancement
            </Badge>
          </div>

          {/* Main heading */}
          <h1 className="relative text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight fade-in delay-1 leading-[1.2] sm:leading-[2]">  
            <span className="block text-foreground">
              Is your digital product
            </span>
            <span className="block mt-2 sm:mt-4 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/80 dark:from-primary dark:via-primary/90 dark:to-primary/70">
              as healthy as it could be?
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto fade-in delay-2">
            Scaling a product takes more than luck—it takes clarity, strategy, and care. 
            At Digital Vitamins, we diagnose your product's challenges, prescribe solutions, 
            and help it thrive in a competitive market.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in delay-3">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-8 py-6 text-lg font-medium rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
            >
              Get your diagnosis
              <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto px-8 py-6 text-lg font-medium rounded-full bg-card dark:bg-card/95 hover:bg-primary/[0.02] dark:hover:bg-primary/[0.01] text-foreground border-border hover:border-primary/20 transition-all duration-300"
            >
              Explore the vitamins
              <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </Button>
          </div>

          {/* Metrics */}
          <div className="pt-12 sm:pt-16 fade-in delay-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
              {METRICS.map((metric, index) => (
                <div 
                  key={index}
                  className="group p-4 sm:p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
                    {metric.value}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="relative mt-16 fade-in delay-5">
            <div 
              className="group flex flex-col items-center gap-3 text-muted-foreground/80 hover:text-primary transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <span className="text-sm font-medium tracking-wide group-hover:tracking-wider transition-all duration-300">Scroll to explore</span>
              <div className="relative p-2">
                <div className="absolute inset-0 bg-card/90 dark:bg-card/70 blur-md rounded-full group-hover:bg-primary/10 transition-colors duration-300" />
                <svg 
                  className="w-6 h-6 animate-bounce relative group-hover:animate-pulse" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M12 5v14M6 13l6 6 6-6"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
