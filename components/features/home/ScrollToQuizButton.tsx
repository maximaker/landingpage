"use client"

import { Button } from "@/components/ui/button"

interface ScrollToQuizButtonProps {
  variant?: "default" | "outline"
  className?: string
  children: React.ReactNode
}

export function ScrollToQuizButton({ variant = "default", className, children }: ScrollToQuizButtonProps) {
  const handleClick = () => {
    document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Button 
      size="lg" 
      variant={variant}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
  )
}