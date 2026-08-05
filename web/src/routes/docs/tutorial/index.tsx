import { createFileRoute } from '@tanstack/react-router'
import { DocsTemplate } from '@/components/docsTemplate'
import Docs from '@/docs/tutorial/index.mdx'
import docsRaw from '@/docs/tutorial/index.mdx?mdxRaw'

export const Route = createFileRoute('/docs/tutorial/')({
  component: App
})

function App() {
  return (
    <DocsTemplate raw={docsRaw}>
      <Docs />
    </DocsTemplate>
  )
}
