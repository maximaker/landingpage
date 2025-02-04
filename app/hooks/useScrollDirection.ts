import { useState, useEffect } from 'react'

export function useScrollDirection() {
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY

      // Only update state if scroll difference is significant (>5px)
      if (Math.abs(currentScrollY - lastScrollY) < 5) {
        return
      }

      setIsScrollingDown(currentScrollY > lastScrollY)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', updateScrollDirection)

    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
    }
  }, [lastScrollY])

  return isScrollingDown
} 