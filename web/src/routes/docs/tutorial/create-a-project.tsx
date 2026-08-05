import { createFileRoute } from '@tanstack/react-router'
import { DocsTemplate } from '@/components/docsTemplate'
import Docs from '@/docs/tutorial/create-a-project.mdx'
import docsRaw from '@/docs/tutorial/create-a-project.mdx?mdxRaw'

export const Route = createFileRoute('/docs/tutorial/create-a-project')({
  component: App
})

function App() {
  return (
    <DocsTemplate raw={docsRaw}>
      <Docs />
    </DocsTemplate>
  )
}
