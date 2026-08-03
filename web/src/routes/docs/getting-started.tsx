import { createFileRoute } from '@tanstack/react-router'
import Docs from '@/docs/getting-started.mdx'

export const Route = createFileRoute('/docs/getting-started')({
  component: App
})

function App() {
  return <Docs />
}
