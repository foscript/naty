import { createFileRoute } from '@tanstack/react-router'
import { DocsBase } from '@/components/docsBase'
import Docs from '@/docs/tutorial/index.mdx'
import docsRaw from '@/docs/tutorial/index.mdx?mdxRaw'

export const Route = createFileRoute('/docs/tutorial/')({
  component: App
})

function App() {
  return (
    <DocsBase raw={docsRaw}>
      <Docs />
    </DocsBase>
  )
}
