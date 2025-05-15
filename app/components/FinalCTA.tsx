"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, BarChart, Activity, AlertCircle, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

// Quiz questions for product health assessment
const QUIZ_QUESTIONS = [
  {
    id: "user_engagement",
    question: "Are your users engaging with your product as expected?",
    options: [
      { id: "yes", label: "Yes, engagement is strong", value: 3 },
      { id: "somewhat", label: "Somewhat, but could be better", value: 2 },
      { id: "no", label: "No, engagement is low", value: 1 },
      { id: "unsure", label: "Not sure / Don't have metrics", value: 0 }
    ],
    vitamin: "Vitamin A",
    icon: <Activity className="h-5 w-5" />
  },
  {
    id: "tech_issues",
    question: "Is your product experiencing technical issues?",
    options: [
      { id: "no", label: "No, it's stable", value: 3 },
      { id: "minor", label: "Some minor issues", value: 2 },
      { id: "yes", label: "Yes, frequent problems", value: 1 },
      { id: "unsure", label: "Not sure / Don't know", value: 0 }
    ],
    vitamin: "Vitamin B",
    icon: <BarChart className="h-5 w-5" />
  },
  {
    id: "conversion",
    question: "How is your conversion rate performing?",
    options: [
      { id: "great", label: "Great, meeting or exceeding goals", value: 3 },
      { id: "ok", label: "Okay, but room for improvement", value: 2 },
      { id: "poor", label: "Poor, significantly below targets", value: 1 },
      { id: "unsure", label: "Not sure / Don't track this", value: 0 }
    ],
    vitamin: "Vitamin C",
    icon: <AlertCircle className="h-5 w-5" />
  }
]

export function FinalCTA() {
  const [isQuizActive, setIsQuizActive] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [quizCompleted, setQuizCompleted] = useState(false)
  
  const totalQuestions = QUIZ_QUESTIONS.length
  const currentProgress = (currentQuestion / totalQuestions) * 100
  
  const handleStartQuiz = () => {
    setIsQuizActive(true)
    setCurrentQuestion(0)
    setAnswers({})
    setQuizCompleted(false)
  }
  
  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
    
    if (currentQuestion < totalQuestions - 1) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1)
      }, 300)
    } else {
      setQuizCompleted(true)
    }
  }
  
  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    } else {
      setIsQuizActive(false)
    }
  }
  
  const handleReset = () => {
    setIsQuizActive(false)
    setQuizCompleted(false)
    setCurrentQuestion(0)
    setAnswers({})
  }
  
  // Calculate health score based on answers
  const calculateHealthScore = () => {
    const totalPossibleScore = totalQuestions * 3
    const actualScore = Object.values(answers).reduce((acc, val) => acc + val, 0)
    return Math.round((actualScore / totalPossibleScore) * 100)
  }
  
  // Determine which vitamins are needed based on scores
  const getVitaminsNeeded = () => {
    const recommendations: Array<{ vitamin: string; icon: React.ReactNode }> = [];
    
    QUIZ_QUESTIONS.forEach(q => {
      const score = answers[q.id] || 0;
      if (score < 2) {
        recommendations.push({
          vitamin: q.vitamin,
          icon: q.icon
        });
      }
    });
    
    return recommendations;
  }

  return (
    <div className="py-20 md:py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-background rounded-3xl border border-primary/20 shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <Badge
                variant="outline"
                className="mb-4 px-4 py-1.5 border-primary/40 text-primary"
              >
                Product Health Check
              </Badge>
              
              {!isQuizActive ? (
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to diagnose your product's health?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                    Take our quick 3-question assessment to identify which vitamins your 
                    digital product needs for optimal performance and growth.
                  </p>
                  
                  <Button size="lg" onClick={handleStartQuiz} className="rounded-full px-8">
                    Start your free assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              ) : quizCompleted ? (
                // Quiz results
                <AnimatePresence mode="wait">
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-8">
                      <div className="inline-block rounded-full bg-background p-4 mb-6">
                        <Sparkles className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Your Product Health Score: {calculateHealthScore()}%
                      </h3>
                      
                      <div className="w-full h-4 bg-muted rounded-full mb-8">
                        <div 
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${calculateHealthScore()}%` }}
                        />
                      </div>
                      
                      <div className="text-left max-w-md mx-auto mb-8">
                        <h4 className="font-medium mb-3">Recommended vitamins:</h4>
                        {getVitaminsNeeded().length > 0 ? (
                          <ul className="space-y-3">
                            {getVitaminsNeeded().map((rec, i) => (
                              <li key={i} className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
                                <div className="p-1.5 bg-primary/10 rounded text-primary">
                                  {rec.icon}
                                </div>
                                <span>{rec.vitamin}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-muted-foreground">
                            Your product appears to be in good health! However, regular checkups are still recommended.
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" asChild className="rounded-full px-8">
                        <Link href="/contact">
                          Get a detailed diagnosis
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" onClick={handleReset} className="rounded-full px-8">
                        Restart assessment
                        <ChevronLeft className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              ) : (
                // Quiz questions
                <div>
                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-muted rounded-full mb-8">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${currentProgress}%` }}
                    />
                  </div>
                  
                  {/* Question */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentQuestion}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="mb-8"
                    >
                      <div className="inline-flex mb-6 bg-primary/10 rounded-lg p-2">
                        <Badge variant="outline" className="px-3 py-1">
                          Question {currentQuestion + 1} of {totalQuestions}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-8">
                        {QUIZ_QUESTIONS[currentQuestion].question}
                      </h3>
                      
                      <div className="space-y-3 max-w-md mx-auto">
                        {QUIZ_QUESTIONS[currentQuestion].options.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleAnswer(QUIZ_QUESTIONS[currentQuestion].id, option.value)}
                            className={cn(
                              "w-full p-4 rounded-xl border text-left transition-all flex items-center",
                              answers[QUIZ_QUESTIONS[currentQuestion].id] === option.value
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/30 hover:bg-muted/50"
                            )}
                          >
                            <div className="flex-1">{option.label}</div>
                            <div className={cn(
                              "w-5 h-5 rounded-full border flex items-center justify-center transition-colors",
                              answers[QUIZ_QUESTIONS[currentQuestion].id] === option.value
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-muted-foreground"
                            )}>
                              {answers[QUIZ_QUESTIONS[currentQuestion].id] === option.value && (
                                <Check className="w-3 h-3" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Navigation */}
                  <div className="flex justify-between items-center mt-8">
                    <Button variant="ghost" size="sm" onClick={handleBack} className="flex items-center">
                      <ChevronLeft className="mr-1 h-4 w-4" />
                      Back
                    </Button>
                    
                    <div className="text-sm text-muted-foreground">
                      {currentQuestion + 1} of {totalQuestions}
                    </div>
                    
                    {currentQuestion < totalQuestions - 1 && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setCurrentQuestion(prev => prev + 1)}
                        disabled={!answers[QUIZ_QUESTIONS[currentQuestion].id]}
                        className="flex items-center"
                      >
                        Skip
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
