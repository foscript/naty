import { createFileRoute } from '@tanstack/react-router'
import { RootDocsOnly } from '@/components/docs/root'

import Docs from '@/docs/getting-started.mdx'
import raw from '@/docs/getting-started.mdx?url'

export const Route = createFileRoute('/docs/getting-started')({
  component: App
})

function App() {
  return (
    <RootDocsOnly raw={raw}>
      <Docs />
    </RootDocsOnly>
  )
}
