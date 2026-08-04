import { createFileRoute } from '@tanstack/react-router'
import { DocsBase } from '@/components/docsBase'
import Docs from '@/docs/getting-started.mdx'

export const Route = createFileRoute('/docs/getting-started')({
  component: App
})

function App() {
  return (
    <DocsBase raw='Hello World!'>
      <Docs />
    </DocsBase>
  )
}
