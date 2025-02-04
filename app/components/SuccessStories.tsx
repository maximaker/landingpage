import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight, TrendingUp, Users, Zap } from "lucide-react"

type SuccessStory = {
  id: string
  company: string
  industry: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    icon: JSX.Element
  }[]
  testimonial: {
    quote: string
    author: string
    role: string
    image: string
  }
  image: string
}

const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "1",
    company: "TechFlow",
    industry: "SaaS",
    challenge: "Struggling with user engagement and high churn rates in their project management platform.",
    solution: "Implemented Vitamin E package to enhance user experience and engagement metrics.",
    results: [
      {
        metric: "User Retention",
        value: "+45%",
        icon: <Users className="w-5 h-5" />
      },
      {
        metric: "Feature Adoption",
        value: "+60%",
        icon: <Zap className="w-5 h-5" />
      },
      {
        metric: "Revenue Growth",
        value: "+35%",
        icon: <TrendingUp className="w-5 h-5" />
      }
    ],
    testimonial: {
      quote: "The transformation in our user engagement metrics was remarkable. Digital Vitamins helped us identify and fix critical UX issues we weren't even aware of.",
      author: "Sarah Chen",
      role: "Product Director",
      image: "/testimonials/sarah.jpg"
    },
    image: "/case-studies/techflow.jpg"
  },
  {
    id: "2",
    company: "HealthHub",
    industry: "Healthcare",
    challenge: "Needed to scale their telemedicine platform to handle 10x more concurrent users.",
    solution: "Applied Vitamin S package to optimize performance and scalability.",
    results: [
      {
        metric: "Response Time",
        value: "-70%",
        icon: <Zap className="w-5 h-5" />
      },
      {
        metric: "User Capacity",
        value: "10x",
        icon: <Users className="w-5 h-5" />
      },
      {
        metric: "Uptime",
        value: "99.99%",
        icon: <TrendingUp className="w-5 h-5" />
      }
    ],
    testimonial: {
      quote: "Digital Vitamins transformed our platform's performance. We can now handle peak loads with confidence.",
      author: "Dr. James Wilson",
      role: "CTO",
      image: "/testimonials/james.jpg"
    },
    image: "/case-studies/healthhub.jpg"
  }
]

export function SuccessStories() {
  const [currentStory, setCurrentStory] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextStory = () => {
    setDirection(1)
    setCurrentStory((prev) => (prev + 1) % SUCCESS_STORIES.length)
  }

  const previousStory = () => {
    setDirection(-1)
    setCurrentStory((prev) => (prev - 1 + SUCCESS_STORIES.length) % SUCCESS_STORIES.length)
  }

  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-4">
            Success Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Real Results, Real <span className="text-primary">Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how our digital vitamins have helped companies achieve remarkable transformations.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStory}
              custom={direction}
              initial={{ opacity: 0, x: 100 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 * direction }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Case Study Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {SUCCESS_STORIES[currentStory].company}
                  </h3>
                  <p className="text-primary font-medium">
                    {SUCCESS_STORIES[currentStory].industry}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground/90">The Challenge</h4>
                    <p className="text-muted-foreground">
                      {SUCCESS_STORIES[currentStory].challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground/90">Our Solution</h4>
                    <p className="text-muted-foreground">
                      {SUCCESS_STORIES[currentStory].solution}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {SUCCESS_STORIES[currentStory].results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-card p-4 rounded-xl border border-border/10"
                    >
                      <div className="text-primary mb-2">
                        {result.icon}
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {result.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>

                <blockquote className="relative">
                  <div className="relative z-10 text-lg italic text-muted-foreground">
                    "{SUCCESS_STORIES[currentStory].testimonial.quote}"
                  </div>
                  <footer className="mt-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 mr-4">
                        {/* Image placeholder */}
                        <div className="w-full h-full flex items-center justify-center text-primary/30 text-xs">
                          IMG
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {SUCCESS_STORIES[currentStory].testimonial.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {SUCCESS_STORIES[currentStory].testimonial.role}
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>

              {/* Case Study Image */}
              <div className="relative aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                {/* Image placeholder */}
                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                  <span className="text-primary/20">Image: {SUCCESS_STORIES[currentStory].image}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={previousStory}
              className="rounded-full"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextStory}
              className="rounded-full"
              aria-label="Next case study"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Story Progress */}
          <div className="flex justify-center gap-2 mt-6">
            {SUCCESS_STORIES.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentStory ? 1 : -1)
                  setCurrentStory(index)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentStory
                    ? 'bg-primary w-6'
                    : 'bg-primary/20 hover:bg-primary/40'
                }`}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground px-8 py-6 text-lg"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
} 