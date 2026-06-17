import { createElement } from 'react'
import { NotfoundTemplate } from '@/components/template/notfound'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '@/routeTree.gen'

const routes = createRouter({
  routeTree,
  defaultNotFoundComponent: NotfoundTemplate
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof routes
  }
}

export const Router = () => createElement(RouterProvider, { router: routes })
