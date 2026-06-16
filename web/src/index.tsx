import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Original
import '@/index.css'
import { Router } from '@/components/Router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
