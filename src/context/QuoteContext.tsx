import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

type QuoteContextValue = {
  selectedService: string
  setSelectedService: (service: string) => void
  goToQuote: (service?: string) => void
}

const QuoteContext = createContext<QuoteContextValue | null>(null)

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [selectedService, setSelectedService] = useState('')

  const goToQuote = useCallback((service?: string) => {
    if (service) setSelectedService(service)
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    window.setTimeout(() => {
      document.getElementById('fullName')?.focus()
    }, 450)
  }, [])

  const value = useMemo(
    () => ({ selectedService, setSelectedService, goToQuote }),
    [selectedService, goToQuote],
  )

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
}

export function useQuote() {
  const context = useContext(QuoteContext)
  if (!context) {
    throw new Error('useQuote must be used within QuoteProvider')
  }
  return context
}
