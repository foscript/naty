import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Setup
import { Router } from '@/setup/router'
import '@/setup/initI18next'
import '@/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
