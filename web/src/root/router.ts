import { createElement } from 'react'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { NotfoundTemplate } from '@/components/template/notfound'
import { routeTree } from '@/routeTree.gen'

const routes = createRouter({
  routeTree,
  defaultNotFoundComponent: NotfoundTemplate
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof routes
  }
}

export const Router = () => createElement(RouterProvider, { router: routes })
