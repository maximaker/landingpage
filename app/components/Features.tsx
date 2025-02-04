import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
    title: "Download Template",
    description: "Get started with our production-ready template. It's packed with everything you need to build a stunning landing page.",
    action: "Get template →",
    stats: { value: "5 min", label: "Setup Time" }
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: "Tell Cursor What You Want",
    description: "Describe your vision in plain English. Cursor will transform your words into a beautiful, functional design.",
    action: "Try it now →",
    stats: { value: "24/7", label: "AI Support" }
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "Deploy to the Internet",
    description: "Push your new landing page live with one click. Share your creation with the world in seconds.",
    action: "Start deploying →",
    stats: { value: "1-Click", label: "Deployment" }
  }
]

export function Features() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent dark:from-primary/[0.02]" />
        <div className="hero-glow absolute -inset-[10px] opacity-50 bg-gradient-to-r from-transparent via-primary/20 to-transparent dark:from-transparent dark:via-primary/10 dark:to-transparent blur-3xl transition-opacity duration-300" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16 scroll-animation">
          <Badge 
            variant="secondary" 
            className="mb-8 lg:mb-12 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
          >
            How It Works
          </Badge>
          <h2 className="text-[42px] sm:text-[56px] lg:text-[84px] leading-[0.95] tracking-tight font-bold mb-6">
            Create in <span className="text-primary">Minutes</span>, Not Months
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-[520px] mx-auto mb-8 lg:mb-12 leading-relaxed">
            Transform your ideas into reality with three simple steps. No coding required.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-24 relative">
            {FEATURES.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-card/50 dark:bg-card/40 p-8 rounded-2xl border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5 scroll-animation"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Feature number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-card/50 dark:bg-card/40 backdrop-blur-sm rounded-full flex items-center justify-center text-sm font-medium text-primary border border-border">
                  {index + 1}
                </div>

                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-primary/[0.03] dark:bg-primary/[0.02] rounded-full blur-lg group-hover:bg-primary/[0.05] dark:group-hover:bg-primary/[0.03] transition-colors duration-200" />
                  <div className="relative text-2xl text-primary transform group-hover:scale-110 transition-transform duration-200">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-200">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">{feature.stats.label}</span>
                      <span className="font-medium text-primary">{feature.stats.value}</span>
                    </div>
                  </div>

                  {/* Action button */}
                  <Button 
                    variant="link" 
                    className="group/btn text-primary p-0 hover:no-underline"
                  >
                    <span>{feature.action}</span>
                    <svg 
                      className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <Button 
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all duration-200 rounded-full px-6"
          >
            <span>Start building now</span>
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
        </div>
      </div>
    </section>
  )
}
