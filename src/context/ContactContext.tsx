import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

type ContactContextValue = {
  contactOpen: boolean
  openContact: () => void
  closeContact: () => void
}

const ContactContext = createContext<ContactContextValue | null>(null)

export function ContactProvider({ children }: { children: ReactNode }) {
  const [contactOpen, setContactOpen] = useState(false)

  const openContact = useCallback(() => setContactOpen(true), [])
  const closeContact = useCallback(() => setContactOpen(false), [])

  const value = useMemo(
    () => ({ contactOpen, openContact, closeContact }),
    [contactOpen, openContact, closeContact],
  )

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
}

export function useContact() {
  const context = useContext(ContactContext)
  if (!context) {
    throw new Error('useContact must be used within ContactProvider')
  }
  return context
}
