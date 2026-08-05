import { createFileRoute } from '@tanstack/react-router'
import { RootTemplate } from '@/components/rootTemplate'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/infomation')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <RootTemplate>
      <Header />

      <main>
        
      </main>

      <Footer />
    </RootTemplate>
  )
}
