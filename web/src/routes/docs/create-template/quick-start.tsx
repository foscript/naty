import { createFileRoute } from '@tanstack/react-router'
import { RootDocsOnly } from '@/components/docs/root'

import Docs from '@/docs/create-template/quick-start.mdx'
import raw from '@/docs/create-template/quick-start.mdx?url'

export const Route = createFileRoute('/docs/create-template/quick-start')({
  component: App
})

function App() {
  return (
    <RootDocsOnly raw={raw}>
      <Docs />
    </RootDocsOnly>
  )
}
