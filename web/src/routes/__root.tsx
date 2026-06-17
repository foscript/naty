import { Outlet, createRootRoute } from '@tanstack/react-router'
import { RootOrganism } from '@/components/organism/root'

export const Route = createRootRoute({
  component: App
})

function App() {
  return (
      <RootOrganism>
        <Outlet />
      </RootOrganism>
  )
}
