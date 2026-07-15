import { Outlet, createRootRoute } from '@tanstack/react-router'
import { RootTemplate } from '@/components/rootTemplate'
import { Toaster } from '@/components/shadcn/ui/sonner'
import { cn } from '@/lib/shadcn/utils'
import { useDarkMode } from 'usehooks-ts'

export const Route = createRootRoute({
  component: App
})

function App() {
  const { isDarkMode } = useDarkMode()

  return (
      <RootTemplate className={cn(isDarkMode && 'dark')}>
        <Outlet />
        <Toaster />
      </RootTemplate>
  )
}
