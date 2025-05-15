import * as React from "react"
import { motion, PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number | string
  name: string
  role: string
  company: string
  rating: number
  description: string
  industry?: string
  duration?: string
  useCase?: string
  location?: string
  isVerified?: boolean
  linkedIn?: string
  companyLogo?: string
}

interface TestimonialCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[]
  showArrows?: boolean
  showDots?: boolean
}

const TestimonialCarousel = React.forwardRef<
  HTMLDivElement,
  TestimonialCarouselProps
>(
  (
    { className, testimonials, showArrows = true, showDots = true, ...props },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [exitX, setExitX] = React.useState<number>(0)

    const handleDragEnd = (
      event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
    ) => {
      if (Math.abs(info.offset.x) > 100) {
        const direction = info.offset.x > 0 ? -1 : 1
        setExitX(info.offset.x)
        setTimeout(() => {
          setCurrentIndex((prev) => {
            const next = prev + direction
            if (next < 0) return testimonials.length - 1
            if (next >= testimonials.length) return 0
            return next
          })
          setExitX(0)
        }, 200)
      }
    }

    const handleNext = () => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const handlePrev = () => {
      setCurrentIndex((prev) => 
        prev === 0 ? testimonials.length - 1 : prev - 1
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          "h-[24rem] w-full flex items-center justify-center",
          className
        )}
        {...props}
      >
        <div className="relative w-[36rem] h-[22rem]">
          {testimonials.map((testimonial, index) => {
            const isCurrentCard = index === currentIndex
            const isPrevCard =
              index === (currentIndex + 1) % testimonials.length
            const isNextCard =
              index === (currentIndex + 2) % testimonials.length

            if (!isCurrentCard && !isPrevCard && !isNextCard) return null

            return (
              <motion.div
                key={testimonial.id}
                className={cn(
                  "absolute w-full h-full rounded-2xl cursor-grab active:cursor-grabbing p-10",
                  "bg-white shadow-xl",
                  "dark:bg-card dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-1px_-1px_3px_rgba(255,255,255,0.1)]",
                )}
                style={{
                  zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1,
                }}
                drag={isCurrentCard ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={isCurrentCard ? handleDragEnd : undefined}
                initial={{
                  scale: 0.95,
                  opacity: 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? 0 : isPrevCard ? -2 : -4,
                }}
                animate={{
                  scale: isCurrentCard ? 1 : 0.95,
                  opacity: isCurrentCard ? 1 : isPrevCard ? 0.6 : 0.3,
                  x: isCurrentCard ? exitX : 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? exitX / 20 : isPrevCard ? -2 : -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {showArrows && isCurrentCard && (
                  <div className="absolute inset-x-0 top-5 flex justify-between px-8">
                    <Button 
                      type="button"
                      onClick={handlePrev}
                      variant="ghost"
                      size="icon"
                      className="text-2xl select-none cursor-pointer text-gray-300 hover:text-gray-400 dark:text-muted-foreground dark:hover:text-primary"
                    >
                      &larr;
                    </Button>
                    <Button 
                      type="button"
                      onClick={handleNext}
                      variant="ghost"
                      size="icon"
                      className="text-2xl select-none cursor-pointer text-gray-300 hover:text-gray-400 dark:text-muted-foreground dark:hover:text-primary"
                    >
                      &rarr;
                    </Button>
                  </div>
                )}

                <div className="flex flex-col h-full">
                  {/* Header with Trust Signals */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg 
                          key={i}
                          className="w-5 h-5 text-orange-400" 
                          viewBox="0 0 24 24" 
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    
                    {/* Verification Badge */}
                    {testimonial.isVerified && (
                      <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-500">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span>Verified Customer</span>
                      </div>
                    )}
                  </div>

                  {/* Context (Optional) */}
                  {(testimonial.useCase || testimonial.duration) && (
                    <div className="text-sm text-muted-foreground mb-4">
                      {testimonial.useCase && (
                        <span className="block mb-1">{testimonial.useCase}</span>
                      )}
                      {testimonial.duration && (
                        <span className="text-xs">Project Duration: {testimonial.duration}</span>
                      )}
                    </div>
                  )}

                  {/* Quote */}
                  <blockquote className="text-xl text-foreground leading-relaxed text-center font-medium mb-8 line-clamp-4">
                    "{testimonial.description}"
                  </blockquote>

                  {/* Author info with enhanced details */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-4 justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary/5 dark:bg-primary/10 flex items-center justify-center text-primary text-lg font-medium">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground flex items-center gap-2">
                          {testimonial.name}
                          {testimonial.linkedIn && (
                            <a 
                              href={testimonial.linkedIn}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:text-blue-600"
                            >
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                              </svg>
                            </a>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} · {testimonial.company}
                        </div>
                        {testimonial.location && (
                          <div className="text-xs text-muted-foreground/80">
                            {testimonial.location}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Industry Tag */}
                    {testimonial.industry && (
                      <div className="flex justify-center">
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/5 text-primary/80">
                          {testimonial.industry}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
          {showDots && (
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <Button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-colors",
                    index === currentIndex
                      ? "bg-primary"
                      : "bg-gray-300 dark:bg-muted-foreground/30",
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  },
)
TestimonialCarousel.displayName = "TestimonialCarousel"

export { TestimonialCarousel, type Testimonial } 