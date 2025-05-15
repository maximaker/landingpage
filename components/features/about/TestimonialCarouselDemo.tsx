import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Heading, Body } from "@/components/ui/typography"

const TESTIMONIALS = [
  {
    id: 1,
    content: "The product audit completely transformed our approach to user engagement. The insights were actionable and the results were immediate.",
    author: "Sarah Chen",
    role: "Product Lead at TechFlow",
    rating: 5,
    image: "/testimonials/sarah.jpg",
    stats: {
      label: "Engagement Increase",
      value: "+40%"
    }
  },
  {
    id: 2,
    content: "Their UX recommendations were spot-on. Our user satisfaction scores jumped significantly, and the ongoing support has been invaluable.",
    author: "Michael Torres",
    role: "Head of Design at InnovateLab",
    rating: 5,
    stats: {
      label: "Satisfaction Score",
      value: "94/100"
    }
  },
  {
    id: 3,
    content: "The ongoing wellness checks keep our product in peak condition. Development cycles are faster, and our team is more confident than ever.",
    author: "Emily Watson",
    role: "CTO at BuildBetter",
    rating: 5,
    stats: {
      label: "Development Speed",
      value: "+30%"
    }
  }
]

export function TestimonialCarouselDemo() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-card/50 dark:bg-card/40 overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: isAutoPlaying ? Infinity : 0
            }}
          />
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="h-full flex flex-col justify-between p-8 lg:p-12 bg-card/50 dark:bg-card/40 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/20 transition-all duration-300">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-primary text-primary" 
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <Body as="blockquote" size="lg" className="text-2xl lg:text-3xl font-medium tracking-tight text-foreground leading-relaxed mb-8">
                    "{TESTIMONIALS[currentIndex].content}"
                  </Body>
                </div>

                {/* Author info and stats */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/[0.03] dark:bg-primary/[0.02] backdrop-blur-sm border border-primary/20 flex items-center justify-center text-primary text-lg font-medium">
                      {TESTIMONIALS[currentIndex].author.charAt(0)}
                    </div>
                    <div>
                      <Body className="font-bold tracking-tight text-foreground">
                        {TESTIMONIALS[currentIndex].author}
                      </Body>
                      <Body size="sm" className="text-sm text-muted-foreground">
                        {TESTIMONIALS[currentIndex].role}
                      </Body>
                    </div>
                  </div>
                  <div className="bg-card/50 dark:bg-card/40 rounded-xl border border-border p-4 backdrop-blur-sm">
                    <Body size="sm" className="text-sm text-muted-foreground mb-1">
                      {TESTIMONIALS[currentIndex].stats.label}
                    </Body>
                    <Heading as="div" size="2xl" className="text-2xl font-bold text-primary">
                      {TESTIMONIALS[currentIndex].stats.value}
                    </Heading>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-primary/20 hover:bg-primary/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="rounded-full bg-card/50 dark:bg-card/40 hover:bg-card/80 border-border hover:border-primary/20 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full bg-card/50 dark:bg-card/40 hover:bg-card/80 border-border hover:border-primary/20 backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 