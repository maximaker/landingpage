"use client"

import React, { createContext, useContext, useEffect } from 'react'
import { useLocalStorage } from '@/hooks/use-local-storage'

type Language = {
  code: string
  name: string
  label: string
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
}

const languages = [
  { code: 'en', name: 'English', label: 'Switch to English' },
  { code: 'fr', name: 'Français', label: 'Passer au français' },
  { code: 'ro', name: 'Română', label: 'Schimbă în română' },
]

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [language, setLanguage] = useLocalStorage<Language>('preferred-language', languages[0])

  useEffect(() => {
    document.documentElement.lang = language.code
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export { languages } 