import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Original
import '@/root/index.css'
import '@/root/i18next'
import { Router } from '@/root/router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
