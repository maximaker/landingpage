import { Badge } from "@/components/ui/badge"
import { ClientLogos } from "./ClientLogos"
import { TestimonialCarouselDemo } from "./TestimonialCarouselDemo"

const TESTIMONIALS = [
  {
    quote: "The product audit completely transformed our approach. We saw a 40% increase in user engagement within weeks.",
    author: "Sarah Chen",
    role: "Product Lead",
    company: "TechFlow",
    image: "/testimonials/sarah.jpg",
    rating: 5,
    metrics: {
      label: "Engagement Increase",
      value: "40%"
    }
  },
  {
    quote: "Their UX recommendations were spot-on. Our user satisfaction scores jumped from 72 to 94 after implementation.",
    author: "Michael Torres",
    role: "Head of Design",
    company: "InnovateLab",
    image: "/testimonials/michael.jpg",
    rating: 5,
    metrics: {
      label: "Satisfaction Score",
      value: "94/100"
    }
  },
  {
    quote: "The ongoing wellness checks keep our product in peak condition. Development cycles are 30% faster now.",
    author: "Emily Watson",
    role: "CTO",
    company: "BuildBetter",
    image: "/testimonials/emily.jpg",
    rating: 5,
    metrics: {
      label: "Faster Development",
      value: "30%"
    }
  }
]

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-20">
          <Badge 
            variant="secondary" 
            className="mb-8 lg:mb-12 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
          >
            Success Stories
          </Badge>
          <h2 className="text-[42px] sm:text-[56px] lg:text-[84px] leading-[0.95] tracking-tight font-bold mb-6">
            Trusted by innovative <span className="text-primary">product teams</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-[520px] mx-auto mb-8 lg:mb-12 leading-relaxed">
            See how leading companies have transformed their digital products with our expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 max-w-[1400px] mx-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-card/50 dark:bg-card/40 p-8 sm:p-10 lg:p-12 rounded-2xl border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5 scroll-animation"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote mark decoration */}
              <div className="absolute -top-6 left-12 text-6xl text-primary/10 font-serif">
                "
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-5 h-5 text-primary" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-foreground leading-relaxed mb-8 font-medium">
                "{testimonial.quote}"
              </blockquote>

              {/* Metrics */}
              <div className="bg-card/50 dark:bg-card/40 rounded-xl border border-border p-5 mb-8 backdrop-blur-sm">
                <div className="text-sm text-muted-foreground mb-1">
                  {testimonial.metrics.label}
                </div>
                <div className="text-2xl font-bold text-primary">
                  {testimonial.metrics.value}
                </div>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/[0.03] dark:bg-primary/[0.02] backdrop-blur-sm border border-primary/20 flex items-center justify-center text-primary text-lg font-medium">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold tracking-tight text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Testimonials */}
        <div className="mt-32">
          <TestimonialCarouselDemo />
        </div>

        {/* Trust indicators */}
        <div className="mt-32 text-center">
          <Badge 
            variant="secondary" 
            className="mb-8 lg:mb-12 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
          >
            Trusted by leading companies worldwide
          </Badge>
          <ClientLogos />
        </div>
      </div>
    </section>
  )
}


