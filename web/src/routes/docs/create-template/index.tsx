import { createFileRoute } from '@tanstack/react-router'
import { RootDocsOnly } from '@/components/docs/root'

import Docs from '@/docs/create-template/index.mdx'
import raw from '@/docs/create-template/index.mdx?raw'

export const Route = createFileRoute('/docs/create-template/')({
  component: App
})

function App() {
  return (
    <RootDocsOnly raw={raw}>
      <Docs />
    </RootDocsOnly>
  )
}
