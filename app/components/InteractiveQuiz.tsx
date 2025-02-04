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
      "Increase user engagement",
      "Improve conversion rates",
      "Enhance user experience",
      "Scale the platform"
    ]
  },
  {
    id: 2,
    question: "What's your biggest challenge right now?",
    options: [
      "Technical debt",
      "User retention",
      "Performance issues",
      "Design inconsistency"
    ]
  },
  {
    id: 3,
    question: "How mature is your product?",
    options: [
      "Just an idea",
      "Early prototype",
      "Live with users",
      "Established product"
    ]
  },
  {
    id: 4,
    question: "What's your team size?",
    options: [
      "Solo founder",
      "2-5 people",
      "6-20 people",
      "20+ people"
    ]
  }
]

export function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useLocalStorage<QuizAnswers>("quiz-answers", {})
  const [showResults, setShowResults] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleAnswer = (questionId: number, answerIndex: number) => {
    if (isAnimating) return

    setIsAnimating(true)
    setAnswers({
      ...answers,
      [questionId]: answerIndex
    })

    setTimeout(() => {
      if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestion(prev => prev + 1)
      } else {
        setShowResults(true)
      }
      setIsAnimating(false)
    }, 500)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  const getRecommendation = () => {
    // This is a simple example - you would typically have more sophisticated logic
    const recommendations = {
      engagement: "Vitamin E: Our engagement booster package",
      conversion: "Vitamin C: Conversion optimization suite",
      experience: "Vitamin A: Complete UX audit and enhancement",
      scaling: "Vitamin S: Scalability and performance package"
    }

    const firstAnswer = answers[1]
    if (firstAnswer === 0) return recommendations.engagement
    if (firstAnswer === 1) return recommendations.conversion
    if (firstAnswer === 2) return recommendations.experience
    return recommendations.scaling
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
        <h2 className="text-[42px] sm:text-[56px] lg:text-[84px] leading-[0.95] tracking-tight font-bold mb-6">
          {showResults ? "Your Digital Vitamin" : "Discover Your"} <span className="text-primary">{showResults ? "Prescription" : "Product's Needs"}</span>
        </h2>
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
                      <button
                        key={index}
                        onClick={() => handleAnswer(QUIZ_QUESTIONS[currentQuestion].id, index)}
                        disabled={isAnimating}
                        className={`p-6 rounded-2xl border text-left transition-all duration-200 backdrop-blur-sm ${
                          isSelected
                            ? 'border-primary bg-primary/[0.03] dark:bg-primary/[0.02] text-primary shadow-sm'
                            : 'border-border hover:border-primary/20 bg-card/50 dark:bg-card/40 hover:bg-card/80 hover:shadow-sm'
                        }`}
                      >
                        <span className="text-sm font-medium block mb-1 text-muted-foreground">Option {index + 1}</span>
                        <span className="text-foreground leading-relaxed">{option}</span>
                      </button>
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
                    Recommended Solution
                  </h3>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    {getRecommendation()}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-card/50 dark:bg-card/40 p-4 rounded-xl backdrop-blur-sm border border-border">
                      <span className="block font-medium text-foreground mb-1">Implementation Time</span>
                      <span className="text-muted-foreground">2-4 weeks</span>
                    </div>
                    <div className="bg-card/50 dark:bg-card/40 p-4 rounded-xl backdrop-blur-sm border border-border">
                      <span className="block font-medium text-foreground mb-1">Expected Impact</span>
                      <span className="text-muted-foreground">30-50% improvement</span>
                    </div>
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