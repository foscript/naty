import { RouterProvider, createRouter } from '@tanstack/react-router'
import { NotfoundPage } from './notfoundPage'
import { routeTree } from '@/routeTree.gen'

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

export const Router = () => <RouterProvider router={routes} />
