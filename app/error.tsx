'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Something went wrong</h1>
        <p className="text-lg text-muted-foreground">We apologize for the inconvenience. Please try again.</p>
        <Button
          onClick={() => reset()}
          className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Try again
        </Button>
      </div>
    </div>
  )
}