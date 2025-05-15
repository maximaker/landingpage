"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, TrendingUp, Users, Clock, Target, LineChart, Sparkles, Rocket, Shield } from "lucide-react"

type SuccessStory = {
  id: string
  company: string
  industry: string
  challenge: string
  solution: string
  vitaminUsed: string
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
    solution: "Implemented Vitamin A to analyze user behavior patterns and identify key drop-off points. Followed up with targeted UX improvements and feature enhancements.",
    vitaminUsed: "Vitamin A - Awareness & Analysis",
    results: [
      {
        metric: "User Retention",
        value: "+45%",
        icon: <Users className="w-5 h-5" />
      },
      {
        metric: "Feature Adoption",
        value: "+60%",
        icon: <Sparkles className="w-5 h-5" />
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
    challenge: "Needed to scale their telemedicine platform to handle 10x more concurrent users during peak hours.",
    solution: "Applied Vitamin D to optimize infrastructure, implement efficient caching, and establish a robust CI/CD pipeline for seamless deployments.",
    vitaminUsed: "Vitamin D - Deploy & Deliver",
    results: [
      {
        metric: "Response Time",
        value: "-70%",
        icon: <Clock className="w-5 h-5" />
      },
      {
        metric: "User Capacity",
        value: "10x",
        icon: <Users className="w-5 h-5" />
      },
      {
        metric: "Uptime",
        value: "99.99%",
        icon: <Shield className="w-5 h-5" />
      }
    ],
    testimonial: {
      quote: "Digital Vitamins transformed our platform's performance. We can now handle peak loads with confidence, and our deployment process is seamless.",
      author: "Dr. James Wilson",
      role: "CTO",
      image: "/testimonials/james.jpg"
    },
    image: "/case-studies/healthhub.jpg"
  },
  {
    id: "3",
    company: "EcoShop",
    industry: "E-commerce",
    challenge: "Low conversion rates and abandoned carts were affecting their sustainable products marketplace.",
    solution: "Implemented Vitamin C to optimize the conversion funnel, enhance payment flow, and implement smart cart recovery strategies.",
    vitaminUsed: "Vitamin C - Convert & Capitalize",
    results: [
      {
        metric: "Conversion Rate",
        value: "+85%",
        icon: <Target className="w-5 h-5" />
      },
      {
        metric: "Cart Recovery",
        value: "+40%",
        icon: <Sparkles className="w-5 h-5" />
      },
      {
        metric: "AOV Growth",
        value: "+25%",
        icon: <LineChart className="w-5 h-5" />
      }
    ],
    testimonial: {
      quote: "The impact on our bottom line was immediate. Digital Vitamins helped us turn browsers into buyers with smart, data-driven optimizations.",
      author: "Emma Rodriguez",
      role: "E-commerce Director",
      image: "/testimonials/emma.jpg"
    },
    image: "/case-studies/ecoshop.jpg"
  },
  {
    id: "4",
    company: "LearnLab",
    industry: "EdTech",
    challenge: "Needed to rebuild their legacy learning platform with modern technologies and improved features.",
    solution: "Applied Vitamin B to modernize the tech stack, implement new features, and enhance the overall learning experience.",
    vitaminUsed: "Vitamin B - Build & Boost",
    results: [
      {
        metric: "Load Speed",
        value: "+300%",
        icon: <Rocket className="w-5 h-5" />
      },
      {
        metric: "User Satisfaction",
        value: "+65%",
        icon: <Sparkles className="w-5 h-5" />
      },
      {
        metric: "Course Completion",
        value: "+45%",
        icon: <Target className="w-5 h-5" />
      }
    ],
    testimonial: {
      quote: "The rebuild transformed our platform completely. We now have a modern, scalable solution that our users love to use.",
      author: "Michael Chang",
      role: "Head of Product",
      image: "/testimonials/michael.jpg"
    },
    image: "/case-studies/learnlab.jpg"
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
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Real Results, Real <span className="text-primary">Growth</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how our digital vitamins have helped companies achieve remarkable transformations.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Controls - Now at top right */}
          <div className="absolute right-0 top-0 z-10 flex items-center gap-3 bg-background/80 backdrop-blur-sm px-4 sm:px-6 py-2 -mr-4 sm:-mr-6">
            <Button
              variant="outline"
              size="icon"
              onClick={previousStory}
              className="rounded-full h-8 w-8"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextStory}
              className="rounded-full h-8 w-8"
              aria-label="Next case study"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Vertical Story Indicators */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2">
            {SUCCESS_STORIES.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentStory ? 1 : -1)
                  setCurrentStory(index)
                }}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  index === currentStory 
                    ? 'bg-primary h-6 w-1.5' 
                    : 'bg-primary/20 hover:bg-primary/40 w-1.5'
                }`}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStory}
              custom={direction}
              initial={{ opacity: 0, x: 100 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 * direction }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center pl-8"
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
                  <div className="inline-block">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {SUCCESS_STORIES[currentStory].vitaminUsed}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {SUCCESS_STORIES[currentStory].results.map((result, index) => (
                    <motion.div
                      key={index}
                      className="bg-card p-4 rounded-xl border border-border/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
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
                    </motion.div>
                  ))}
                </div>

                <motion.blockquote 
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
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
                </motion.blockquote>
              </div>

              {/* Case Study Image */}
              <motion.div 
                className="relative aspect-[4/3] bg-muted rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Image placeholder */}
                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                  <span className="text-primary/20">Image: {SUCCESS_STORIES[currentStory].image}</span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}