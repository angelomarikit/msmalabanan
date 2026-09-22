import { HelmetProvider } from 'react-helmet-async'
import { QuoteProvider } from './context/QuoteContext'
import { ContactProvider } from './context/ContactContext'
import { ContactModal } from './components/ContactModal'
import { Home } from './pages/Home'

// Future static location pages can be added later, for example:
// /malabanan-service-laguna
// /malabanan-service-cavite
// /malabanan-service-batangas

export default function App() {
  return (
    <HelmetProvider>
      <QuoteProvider>
        <ContactProvider>
          <Home />
          <ContactModal />
        </ContactProvider>
      </QuoteProvider>
    </HelmetProvider>
  )
}
