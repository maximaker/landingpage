'use client'

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Testimonials() {
  const testimonials = [
    {
      quote: "Digital Vitamins transformed our product from good to exceptional. Their strategic insights and execution were invaluable.",
      author: "Sarah Chen",
      role: "Product Lead",
      company: "TechFlow"
    },
    {
      quote: "The team's holistic approach to product development helped us identify and fix issues we didn't even know existed.",
      author: "Michael Rodriguez",
      role: "CTO",
      company: "InnovateLabs"
    },
    {
      quote: "Working with Digital Vitamins was a game-changer. They didn't just solve problems—they prevented future ones.",
      author: "Emma Thompson",
      role: "Founder",
      company: "HealthTech Solutions"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <Badge 
            variant="secondary" 
            className="mb-8 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
          >
            Success Stories
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight mb-4">What our clients say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from the products we've helped thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group relative bg-card/30 dark:bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-6 text-4xl">"</div>
              <blockquote className="text-lg mb-6 text-muted-foreground group-hover:text-foreground transition-colors">
                {testimonial.quote}
              </blockquote>
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}