"use client"

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocalStorage } from "@/hooks/use-local-storage"

type Question = {
  id: number
  question: string
  options: string[]
  correctIndex?: number
}

type QuizAnswers = Record<number, number>

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What's your primary goal for your digital product?",
    options: [
      "Increase user engagement and retention",
      "Boost conversion rates and sales",
      "Enhance user experience and satisfaction",
      "Scale and improve performance"
    ]
  },
  {
    id: 2,
    question: "How complex is your current digital product?",
    options: [
      "Simple (landing page or basic web app)",
      "Moderate (multi-page application with some features)",
      "Complex (full-featured platform with multiple integrations)",
      "Enterprise (large-scale system with complex architecture)"
    ]
  },
  {
    id: 3,
    question: "What's your current development stage?",
    options: [
      "Planning phase",
      "Early development",
      "Live product needing improvements",
      "Scaling existing solution"
    ]
  },
  {
    id: 4,
    question: "What's your biggest challenge right now?",
    options: [
      "User acquisition and retention",
      "Technical performance issues",
      "Design and usability problems",
      "Scaling and infrastructure"
    ]
  }
];

const SOLUTIONS = {
  engagement: {
    name: "Vitamin E: Engagement Booster",
    description: "Perfect for products needing enhanced user engagement and retention strategies.",
    timeEstimate: { min: 2, max: 4 },
    features: [
      "User behavior analytics",
      "Engagement optimization",
      "Retention strategies",
      "Community building tools"
    ]
  },
  conversion: {
    name: "Vitamin C: Conversion Catalyst",
    description: "Ideal for businesses focusing on improving conversion rates and sales performance.",
    timeEstimate: { min: 3, max: 6 },
    features: [
      "Conversion funnel optimization",
      "A/B testing framework",
      "Sales analytics",
      "Customer journey mapping"
    ]
  },
  experience: {
    name: "Vitamin X: Experience Enhancer",
    description: "Comprehensive solution for elevating user experience and satisfaction.",
    timeEstimate: { min: 4, max: 8 },
    features: [
      "UX audit and optimization",
      "Interface redesign",
      "Accessibility improvements",
      "User testing framework"
    ]
  },
  performance: {
    name: "Vitamin P: Performance Plus",
    description: "Advanced solution for scaling and optimizing technical performance.",
    timeEstimate: { min: 6, max: 12 },
    features: [
      "Performance optimization",
      "Infrastructure scaling",
      "Security enhancements",
      "Load balancing setup"
    ]
  }
};



export function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useLocalStorage<QuizAnswers>("quiz-answers", {})
  const [showResults, setShowResults] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastActiveElement, setLastActiveElement] = useState<number | null>(null)

  const handleAnswer = async (questionId: number, answerIndex: number) => {
    if (isAnimating) return

    try {
      setIsAnimating(true)
      setIsLoading(true)
      setError(null)
      setLastActiveElement(answerIndex)

      // Simulate API call for answer processing
      await new Promise(resolve => setTimeout(resolve, 500))

      setAnswers({
        ...answers,
        [questionId]: answerIndex
      })

      if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestion(prev => prev + 1)
      } else {
        setShowResults(true)
      }
    } catch (err) {
      setError('Failed to process your answer. Please try again.')
    } finally {
      setIsAnimating(false)
      setIsLoading(false)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  const getRecommendation = () => {
    const recommendations = {
      awareness: {
        name: "Vitamin A: Awareness",
        description: "UX audits and competitive analysis to understand your market position",
        timeEstimate: { min: 2, max: 4 },
        features: ["Comprehensive UX audit", "Competitor analysis", "User behavior tracking", "Market positioning report"]
      },
      clarity: {
        name: "Vitamin C: Clarity",
        description: "Feature prioritization and journey mapping for clear product direction",
        timeEstimate: { min: 3, max: 6 },
        features: ["User journey mapping", "Feature prioritization matrix", "Stakeholder workshops", "Product roadmap"]
      },
      direction: {
        name: "Vitamin D: Direction",
        description: "Wireframing and scalability planning for sustainable growth",
        timeEstimate: { min: 4, max: 8 },
        features: ["High-fidelity wireframes", "Scalability assessment", "Technical architecture", "Growth strategy"]
      },
      execution: {
        name: "Vitamin E: Execution",
        description: "UI/UX design and prototyping for exceptional user experience",
        timeEstimate: { min: 6, max: 12 },
        features: ["UI/UX design system", "Interactive prototypes", "User testing", "Implementation support"]
      },
      continuity: {
        name: "Vitamin K: Continuity",
        description: "Maintenance and performance tracking for consistent excellence",
        timeEstimate: { min: 3, max: 6 },
        features: ["Performance monitoring", "Regular maintenance", "Update strategy", "Health reports"]
      },
      progress: {
        name: "Vitamin P: Progress",
        description: "A/B testing and engagement strategies for continuous improvement",
        timeEstimate: { min: 4, max: 8 },
        features: ["A/B testing setup", "Engagement metrics", "Optimization plan", "ROI tracking"]
      },
      innovation: {
        name: "Vitamin I: Innovation",
        description: "Emerging tech and vision-driven features for market leadership",
        timeEstimate: { min: 8, max: 16 },
        features: ["Technology assessment", "Innovation workshops", "Prototype development", "Market validation"]
      }
    }

    // Calculate recommendation based on all answers
    const primaryGoal = answers[1] // First question about primary goal
    const biggestChallenge = answers[2] // Second question about challenges
    const productMaturity = answers[3] // Third question about product maturity
    const teamSize = answers[4] // Fourth question about team size

    // Logic for determining the most appropriate vitamin
    if (primaryGoal === 0 || biggestChallenge === 1) return recommendations.execution // Engagement/retention issues
    if (primaryGoal === 1) return recommendations.clarity // Conversion focus
    if (primaryGoal === 2 || biggestChallenge === 3) return recommendations.awareness // UX focus
    if (primaryGoal === 3 || biggestChallenge === 2) return recommendations.direction // Scaling/performance
    if (productMaturity <= 1) return recommendations.innovation // Early stage products
    if (teamSize >= 2) return recommendations.continuity // Larger teams need maintenance
    return recommendations.progress // Default to progress tracking
  }

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent dark:from-primary/[0.02]" />
        <div className="hero-glow absolute -inset-[10px] opacity-50 bg-gradient-to-r from-transparent via-primary/20 to-transparent dark:from-transparent dark:via-primary/10 dark:to-transparent blur-3xl transition-opacity duration-300" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
        <Badge 
          variant="secondary" 
          className="mb-8 lg:mb-12 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
        >
          Interactive Assessment
        </Badge>
        <motion.div 
          className="text-[42px] sm:text-[56px] lg:text-[84px] leading-[0.95] tracking-tight font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {showResults ? "Your Digital Vitamin" : "Discover Your"} <span className="text-primary">{showResults ? "Prescription" : "Product's Needs"}</span>
        </motion.div>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-[520px] mx-auto mb-8 lg:mb-12 leading-relaxed">
          {showResults 
            ? "Based on your answers, we've prepared a personalized recommendation"
            : "Take our quick assessment to get a tailored solution for your product's health"
          }
        </p>

        {/* Progress bar */}
        {!showResults && (
          <div className="w-full h-2 bg-card/50 dark:bg-card/40 rounded-full mb-12 overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        )}

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h3 className="text-xl font-bold tracking-tight mb-8 text-foreground">
                  {QUIZ_QUESTIONS[currentQuestion].question}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {QUIZ_QUESTIONS[currentQuestion].options.map((option, index) => {
                    const isSelected = answers[QUIZ_QUESTIONS[currentQuestion].id] === index
                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswer(QUIZ_QUESTIONS[currentQuestion].id, index)}
                        disabled={isAnimating}
                        role="button"
                        tabIndex={0}
                        aria-pressed={isSelected}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            handleAnswer(QUIZ_QUESTIONS[currentQuestion].id, index)
                          }
                        }}
                        className={`p-6 rounded-2xl border text-left transition-all duration-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                          isSelected
                            ? 'border-primary bg-primary/[0.03] dark:bg-primary/[0.02] text-primary shadow-sm'
                            : 'border-border hover:border-primary/20 bg-card/50 dark:bg-card/40 hover:bg-card/80 hover:shadow-sm'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-sm font-medium block mb-1 text-muted-foreground">Option {index + 1}</span>
                        <span className="text-foreground leading-relaxed">{option}</span>
                      </motion.button>
                    )
                  })}
                </div>
                <div className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="bg-card/50 dark:bg-card/40 p-8 rounded-2xl border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5">
                  <h3 className="text-xl font-bold tracking-tight text-primary mb-4">
                    {getRecommendation().name}
                  </h3>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    {getRecommendation().description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-card/50 dark:bg-card/40 p-4 rounded-xl backdrop-blur-sm border border-border">
                      <span className="block font-medium text-foreground mb-1">Implementation Time</span>
                      <span className="text-muted-foreground">
                        {getRecommendation().timeEstimate.min}-{getRecommendation().timeEstimate.max} weeks
                      </span>
                    </div>
                    <div className="bg-card/50 dark:bg-card/40 p-4 rounded-xl backdrop-blur-sm border border-border">
                      <span className="block font-medium text-foreground mb-1">Key Features</span>
                      <span className="text-muted-foreground">{getRecommendation().features.length} core improvements</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {getRecommendation().features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <svg
                          className="w-4 h-4 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={resetQuiz}
                    variant="secondary"
                    className="group bg-card/50 dark:bg-card/40 hover:bg-card/80 text-foreground border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-200 rounded-full px-6"
                  >
                    <span>Retake Quiz</span>
                  </Button>
                  <Button
                    className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all duration-200 rounded-full px-6"
                  >
                    <span>Get Detailed Report</span>
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}