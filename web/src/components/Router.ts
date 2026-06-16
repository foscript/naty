import { createElement } from 'react'
import { NotfoundPage } from '@/components/NotfoundPage'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '@/routeTree.gen'

const routes = createRouter({
  routeTree,
  defaultNotFoundComponent: NotfoundPage
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof routes
  }
}

export const Router = () => createElement(RouterProvider, { router: routes })
