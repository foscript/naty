import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Root
import { Router } from '@/root/router'
import '@/index.css'
import '@/root/initI18next'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
