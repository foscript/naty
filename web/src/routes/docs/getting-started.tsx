import { createFileRoute } from '@tanstack/react-router'
import { DocsTemplate } from '@/components/docsTemplate'
import Docs from '@/docs/getting-started.mdx'
import docsRaw from '@/docs/getting-started.mdx?mdxRaw'

export const Route = createFileRoute('/docs/getting-started')({
  component: App
})

function App() {
  return (
    <DocsTemplate raw={docsRaw}>
      <Docs />
    </DocsTemplate>
  )
}
