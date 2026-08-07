import { useEffect } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { docsOrder } from '@/routes/docs'

export const Route = createFileRoute('/docs/')({
  component: App
})

function App() {
  const navigate = useNavigate()
  const firstLink = docsOrder[0]?.link

  useEffect(() => {
    if (firstLink) {
      navigate({ to: firstLink })
    }
  }, [firstLink, navigate])

  return null
}
