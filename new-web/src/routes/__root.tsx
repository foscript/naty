import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import cssLink from '@/index.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8'
      },

      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },

      {
        title: 'TanStack Start Starter'
      },
    ],

    links: [
      {
        rel: 'stylesheet',
        href: cssLink
      }
    ]
  }),

  shellComponent: HTML
})

function HTML({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Root>{children}</Root>

        <TanStackDevtools
          config={{
            position: 'bottom-right'
          }}

          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />
            }
          ]}
        />

        <Scripts />
      </body>
    </html>
  )
}

function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}
