"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Check, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage, languages } from "@/providers/language-provider"

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { language: currentLang, setLanguage } = useLanguage()
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (language: typeof currentLang) => {
    setLanguage(language)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 px-0 relative"
        aria-label={`Selected language: ${currentLang.name}. Click to change language`}
      >
        <Globe className="h-5 w-5" />
        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary" />
      </Button>

      <div
        className={`absolute bottom-full right-0 mb-2 w-40 rounded-lg bg-popover shadow-lg ring-1 ring-black/5 transition-all duration-200 ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
        role="listbox"
        aria-label="Select language"
        tabIndex={-1}
      >
        <div className="p-1">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                currentLang.code === language.code
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground hover:bg-muted'
              }`}
              role="option"
              aria-selected={currentLang.code === language.code}
              tabIndex={isOpen ? 0 : -1}
              aria-label={language.label}
            >
              <span className="text-base">{language.flag}</span>
              <span className="flex-1 text-left">{language.name}</span>
              {currentLang.code === language.code && (
                <svg
                  className="w-4 h-4 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}