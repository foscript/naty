import { RouterProvider, createRouter } from '@tanstack/react-router'
import { NotfoundPage } from '@/root/notfoundPage'
import { routeTree } from '@/routeTree.gen'
import type { FC } from 'react'

// Initialize the router
const routes = createRouter({
  routeTree,
  defaultNotFoundComponent: NotfoundPage
})

// Define the router types
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof routes
  }
}

export const Router: FC = () => <RouterProvider router={routes} />
