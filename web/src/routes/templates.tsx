import { createFileRoute } from '@tanstack/react-router'

// Components
import { RootTemplate } from '@/components/rootTemplate'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/templates')({
  component: App,
})

function App() {
  return (
    <RootTemplate>
      <Header />
      <Footer />
    </RootTemplate>
  )
}
