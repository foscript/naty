import { createFileRoute } from '@tanstack/react-router'
import { DocsBase } from '@/components/docsBase'
import Docs from '@/docs/tutorial/create-a-project.mdx'
import docsRaw from '@/docs/tutorial/create-a-project.mdx?mdxRaw'

export const Route = createFileRoute('/docs/tutorial/create-a-project')({
  component: App
})

function App() {
  return (
    <DocsBase raw={docsRaw}>
      <Docs />
    </DocsBase>
  )
}
